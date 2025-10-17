# Overview

This is a modern landing page for **Adere Sublimações**, a Brazilian sublimation printing company. The application is built as a single-page React website showcasing the company's services, portfolio, and contact information. The site features a professional design with video backgrounds, interactive components, and multiple WhatsApp contact integration points to drive customer engagement and lead generation.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server

**Styling**: Tailwind CSS with a comprehensive design system using CSS custom properties for theming, including support for light/dark modes and consistent spacing/color schemes

**UI Components**: Shadcn/ui component library providing accessible, pre-built components built on top of Radix UI primitives, ensuring consistent design patterns and accessibility standards

**State Management**: TanStack React Query for server state management, with local component state handled through React hooks

**Routing**: Wouter for lightweight client-side routing, though the current implementation is primarily a single-page application

**Asset Management**: Static assets (images, videos) stored in the attached_assets directory with proper import aliasing through Vite configuration

## Component Structure

**Layout Components**: 
- Header with sticky navigation and mobile menu
- HeroSection with video background and animated content
- AboutSection showcasing company pillars (Creation, Quality, Passion)
- PortfolioSection with mixed media gallery (images and videos)
- ContactSection with multiple WhatsApp integration points
- FloatingWhatsApp and MobileBottomBar for persistent contact access

**Design System**: Custom CSS properties for consistent theming, hover effects (elevate classes), and responsive design patterns optimized for mobile-first approach

## Backend Architecture

**Server**: Express.js with TypeScript providing a minimal API foundation

**Database Integration**: Drizzle ORM configured for PostgreSQL with Neon Database serverless integration, though currently using in-memory storage for user management

**Development Setup**: Full-stack development environment with Vite middleware integration for seamless client-server development experience

## Data Storage Solutions

**Database**: PostgreSQL configured through Drizzle ORM with schema definitions in shared directory for type safety across client and server

**Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple) for user authentication capabilities

**Current Storage**: In-memory storage implementation with interface-based design allowing easy migration to database persistence

# External Dependencies

**UI Framework**: Shadcn/ui component system with Radix UI primitives for accessible, composable components

**Styling**: Tailwind CSS with custom configuration, PostCSS for processing, and Google Fonts (Inter and Poppins) for typography

**State Management**: TanStack React Query for efficient data fetching and caching

**Database**: Neon Database (serverless PostgreSQL) with Drizzle ORM for type-safe database operations

**Development Tools**: 
- Vite for build tooling and development server
- TypeScript for type safety
- ESBuild for production builds
- Replit-specific plugins for development environment integration

**Contact Integration**: WhatsApp Business API integration through wa.link for customer contact and lead generation

**Media Assets**: Local video and image assets for portfolio showcase and background content, optimized for web delivery