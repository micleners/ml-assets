# Asset Manager

A wealth management application built as a coding challenge that allows users to store, manage, and visualize their assets. The application provides a clean interface for viewing asset information categorized by type (Cash, Investment, Real Estate, etc.) with detailed breakdowns of asset values.

## Project Overview

This project was developed as a coding challenge for a Software Engineer II position, with the following requirements:

1. Store Data: Implement a database solution for managing a JSON list of assets
2. Build API: Create endpoints for asset-related operations
3. Integrate Frontend: Develop a minimal frontend application that:
   - Displays a simple list of assets
   - Shows relevant asset information in a read-only format

## Prework:

The original seed for this project was a Next.js template provided by Mantine. I took this and created a personal project off of it called Party Me. I also used this as a starting point for a different coding challenge interview I built called ML Pizza. ML Pizza was the initial project I built off of for this coding challenge.

- [Next.js Pages Template by Mantine](https://github.com/mantinedev/next-pages-template )
- [Party Me](https://github.com/micleners/party-me)
- [Pizza Coding Challenge](https://github.com/micleners/ml-pizza)

## Tech Stack

### Frontend
- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [Mantine UI 8](https://mantine.dev/) - Modern React components library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)

### Backend & Database
- [Firebase Firestore](https://firebase.google.com/docs/firestore) - NoSQL cloud database
- Next.js API Routes - Server-side API endpoints

### Development Tools
- [Storybook](https://storybook.js.org/) - Component development and testing
- [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - Testing framework
- [ESLint](https://eslint.org/) with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
- [Stylelint](https://stylelint.io/) - CSS linting

## Features

- Asset Categories: Group and display assets by type (Cash, Investment, Real Estate, Other Property)
- Asset Details: View comprehensive information about each asset including:
  - Current balance
  - Asset nickname/name
  - Category and subcategory totals
- Collapsible Categories: Expand/collapse asset categories for better organization
- Modern UI: Clean and responsive interface with dark/light mode support
- Type-Safe: Comprehensive TypeScript types for all asset-related data

## Getting Started

### Prerequisites
- Node.js (version specified in `.nvmrc`)
- Yarn package manager
- Firebase project with Firestore enabled

### Environment Setup

1. Clone the repository:
```bash
git clone <this-repo-url>
cd ml-assets
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env.local` file in the root directory with your Firebase configuration:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. Start the development server:
```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### Development
- `dev` - Start development server
- `build` - Build application for production
- `analyze` - Analyze application bundle

### Testing
- `typecheck` - Check TypeScript types
- `lint` - Run ESLint
- `prettier:check` - Check files with Prettier
- `jest` - Run Jest tests
- `jest:watch` - Start Jest watch mode
- `test` - Run all tests (Jest, Prettier, ESLint, TypeScript)

### Other
- `storybook` - Start Storybook development server
- `storybook:build` - Build Storybook for production
- `prettier:write` - Format all files with Prettier

## Project Structure

```
ml-assets/
├── app/                    # Next.js App Router pages and API routes
│   ├── api/               # API endpoints for assets
│   ├── Assets/           # Asset listing page
│   └── db/               # Database configuration and repositories
├── components/            # React components
│   ├── AssetCategory/    # Asset category display component
│   ├── ColorSchemeToggle/# Theme toggle component
│   ├── Navbar/           # Navigation component
│   └── WealthAssets/     # Main assets display component
├── types/                # TypeScript type definitions
├── test-utils/           # Testing utilities
└── public/              # Static assets
```

## API Endpoints

- `GET /api/assets` - Retrieve all assets
- `POST /api/assets/seed` - Seed the database with sample assets
- `DELETE /api/assets/drop` - Clear all assets from the database

## License

This project is licensed under the MIT License - see the [LICENCE](LICENCE) file for details.