# Bullpen Frontend Take-Home Assessment

A modern, responsive React application built with TypeScript, Tailwind CSS 4, and Turbo monorepo architecture. This project demonstrates pixel-perfect implementation of Hyperliquid market data tables with real-time updates.

## 🚀 Demo

**Live Demo**: [Deploy your own demo here]

## 📋 Project Overview

This project implements a responsive markets table for Hyperliquid with two main views:
- **Perps**: Perpetual futures markets
- **Spot**: Spot markets with >$10k 24h trading volume

### Key Features
- ✅ Pixel-perfect responsive design
- ✅ Real-time data updates via Hyperliquid API
- ✅ Mobile-first responsive design
- ✅ Custom UI components (no external libraries)
- ✅ Error handling and loading states
- ✅ Modern tech stack with best practices

## 🛠 Tech Stack

### Core Technologies
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Modern utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Turbo** - Monorepo build system

### State Management & Data Fetching
- **TanStack Query** - Server state management and caching
- **Axios** - HTTP client for API requests

### Development Tools
- **ESLint** - Code linting
- **Vitest** - Unit testing
- **pnpm** - Fast package manager

## 📦 Project Structure

```
bullpen-example/
├── apps/
│   └── web/                    # Main React application
│       ├── src/
│       │   ├── components/     # Reusable UI components
│       │   ├── hooks/         # Custom React hooks
│       │   ├── lib/           # Utilities and API logic
│       │   ├── pages/         # Page components
│       │   └── locales/       # Internationalization
│       └── public/            # Static assets
├── packages/
│   ├── ui/                    # Shared UI component library
│   └── utils/                 # Shared utility functions
└── turbo.json                 # Monorepo configuration
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **pnpm** 8+ (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bullpen-example
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm build
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development
pnpm dev          # Start all apps in development mode
pnpm build        # Build all packages and apps
pnpm lint         # Lint all packages

# Testing
pnpm test         # Run tests
pnpm test:ui      # Run tests with UI
```

## 🎨 Design Implementation

### Styling Approach
- **Tailwind CSS 4** with custom CSS variables for theming
- **Custom design system** with consistent spacing, typography, and colors
- **Responsive design** with mobile-first approach
- **CSS custom properties** for dynamic theming

### Color Palette
```css
--bg-primary: #06121b
--bg-secondary: #072723
--primary-400: #4fffab
--alert-400: #f34c68
--neutral-200: #b3b9be
```

### Typography
- **ABCFavorit** font family for consistent branding
- Responsive text sizing with Tailwind utilities
- Proper contrast ratios for accessibility

## 🔌 API Integration

### Hyperliquid API
The application integrates with Hyperliquid's REST API for real-time market data:

- **Perps Data**: `POST /info` with `type: "metaAndAssetCtxs"`
- **Spot Data**: `POST /info` with `type: "spotMetaAndAssetCtxs"`

### Data Flow
1. **React Query** manages server state and caching
2. **Custom hooks** (`usePerpData`, `useSpotData`) handle data fetching
3. **2-minute polling** for real-time updates
4. **Error handling** with graceful fallbacks

### Real-time Updates
- Polling-based updates every 2 minutes
- Automatic retry on network failures
- Optimistic UI updates
- Loading and error states

## 🧩 Component Architecture

### Custom UI Components
All UI components are built from scratch without external libraries:

- **Table** - Responsive data table with sticky columns
- **Tabs** - Tab navigation system
- **Button** - Reusable button components
- **Token** - Token display with icons
- **Layout** - Responsive layout wrapper

### Component Structure
```
components/
├── ui/           # Base UI components
├── layout/       # Layout components
└── icons/        # Icon components
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Mobile Optimizations
- Horizontal scrolling for wide tables
- Sticky first column for navigation
- Touch-friendly interactions
- Optimized typography scaling

## 🧪 Testing

### Test Setup
- **Vitest** for unit testing
- **React Testing Library** for component testing
- **jsdom** for DOM simulation

### Running Tests
```bash
pnpm test         # Run all tests
pnpm test:ui      # Run tests with UI
pnpm test:run     # Run tests once
```

## 🏗 Monorepo Architecture

### Package Structure
- **apps/web**: Main React application
- **packages/ui**: Shared UI component library
- **packages/utils**: Shared utility functions

### Build System
- **Turbo** for fast, incremental builds
- **Workspace dependencies** for package sharing
- **TypeScript** project references

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Static Assets
The build generates static assets in `apps/web/dist/` that can be deployed to any static hosting service.

### Environment Variables
No environment variables required - all API endpoints are public.

## 🔧 Development Notes

### Assumptions Made
1. **API Rate Limits**: Implemented 2-minute polling to respect API limits
2. **Error Handling**: Graceful fallbacks for network failures
3. **Mobile Experience**: Horizontal scrolling for wide tables
4. **Performance**: Virtual scrolling considered for large datasets

### Design Decisions
1. **No External UI Libraries**: Built custom components for full control
2. **Tailwind CSS 4**: Latest version for modern CSS features
3. **React Query**: Optimal for server state management
4. **Monorepo**: Scalable architecture for future growth

### Future Enhancements
- WebSocket integration for real-time updates
- Advanced sorting and filtering
- Virtual scrolling for performance
- Dark/light theme toggle
- Internationalization support

## 📄 License

MIT License - see LICENSE file for details.

## 👤 Author

Michael Merz - Frontend Engineer

---

**Note**: This project demonstrates modern React development practices with a focus on maintainability, performance, and user experience. The codebase is structured for easy extension and follows industry best practices.
