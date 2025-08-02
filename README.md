# Hunting Incident UI

This repository contains the user interface for the hunting incident management system.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended package manager)

### Installation

1. Install dependencies:
```bash
pnpm install
```

### Development

To start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build

To build the project for production:
```bash
pnpm build
```

To start the production server:
```bash
pnpm start
```

### Type Checking

To run TypeScript type checking:
```bash
pnpm typecheck
```

## 🛠️ Tech Stack

### Core Framework
- **React Router v7** - Full-stack React framework with file-based routing
- **React 19** - Latest React version with concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework with modern features
- **CSS Modules** - Component-scoped styling

### Mapping & Visualization
- **Leaflet** - Interactive maps library
- **React Leaflet** - React components for Leaflet maps

### Features
- **Server-Side Rendering (SSR)** - Enabled by default for better SEO and performance
- **File-based Routing** - Automatic route generation based on file structure
- **Hot Module Replacement (HMR)** - Fast development experience
- **TypeScript Support** - Full type checking and IntelliSense

## ⚙️ Configuration

- **React Router Config**: `react-router.config.ts` - SSR and routing configuration
- **Vite Config**: `vite.config.ts` - Build tool and plugin configuration
- **TypeScript Config**: `tsconfig.json` - TypeScript compilation settings

## 🐳 Docker

The project includes a Dockerfile for containerized deployment. Check the Dockerfile for container build instructions.
