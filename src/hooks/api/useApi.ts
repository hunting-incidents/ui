import { useState, useEffect, useMemo, useRef } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { requestCtrl } from "../../api/type";

// Generic types for API hooks
export type UseApiResult<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

// Type for a generic API function with parameters
export type ApiFunction<TParams, TResult> = (
  params: TParams,
  options?: requestCtrl
) => Promise<TResult | null>;

// Type for a generic API function without parameters
export type ApiNoParamsFunction<TResult> = (
  options?: requestCtrl
) => Promise<TResult | null>;

/**
 * Generic hook for API calls with parameters, debounce and state management
 * @param apiFunction - API function to call
 * @param params - Parameters to pass to the API function (can be undefined)
 * @param debounceMs - Debounce delay in milliseconds (default: 300ms)
 * @param errorMessage - Default error message
 */
export function useApi<TParams, TResult>(
  apiFunction: ApiFunction<TParams, TResult> | ApiNoParamsFunction<TResult>,
  params?: TParams,
  debounceMs: number = 300,
  errorMessage: string = "Error while fetching data"
): UseApiResult<TResult> {
  const [data, setData] = useState<TResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Debounce parameters to avoid parasitic calls
  const debouncedParams = useDebounce(params, debounceMs);

  // Reference for AbortController
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Cancel previous request if it exists
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new controller for this request
      abortControllerRef.current = new AbortController();

      setLoading(true);
      setError(null);

      try {
        let result: TResult | null;

        // Check if the API function accepts parameters
        if (debouncedParams !== undefined) {
          result = await (apiFunction as ApiFunction<TParams, TResult>)(
            debouncedParams,
            { signal: abortControllerRef.current.signal }
          );
        } else {
          result = await (apiFunction as ApiNoParamsFunction<TResult>)({
            signal: abortControllerRef.current.signal,
          });
        }

        // Check if the request wasn't cancelled
        if (result !== null) {
          setData(result);
        }
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message || errorMessage);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup: cancel current request if component is unmounted
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [debouncedParams, apiFunction, errorMessage]);

  // Memoize result
  return useMemo(
    () => ({
      data,
      loading,
      error,
    }),
    [data, loading, error]
  );
}
