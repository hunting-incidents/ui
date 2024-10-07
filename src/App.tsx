import "./App.css";
import ConfigProvider from "./components/ConfigProvider/ConfigProvider";
import HomeView from "./components/HomeView/HomeView";

function App() {
  return (
    <ConfigProvider>
      <HomeView />
    </ConfigProvider>
  );
}

export default App;
