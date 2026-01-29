# Responsive Design System

A modern, responsive web application built with React and Vite, featuring a comprehensive design system and interactive UI components. This project leverages Tailwind CSS for styling and integrates various accessible primitives.

## Features

- **Interactive Hero Section:** Dynamic background effects and engaging user entry points.
- **Responsive Layout:** Fully adaptive design works seamlessly across desktop, tablet, and mobile devices.
- **Component Library:** Built on Radix UI primitives for accessibility and robustness.
- **Theme Support:** Integrated dark and light mode toggle.
- **Data Visualization:** Integration with Recharts for data display.
- **Animations:** Smooth transitions and effects using Motion.

## Tech Stack

- **Core:** React, TypeScript, Vite
- **Styling:** Tailwind CSS v4, Emotion, Class Variance Authority (CVA)
- **UI Components:** Radix UI, Material UI Icons, Lucide React
- **Animation:** Motion
- **Forms:** React Hook Form
- **Utilities:** Date-fns, CLSX, Tailwind Merge

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your system.

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

The application will be available at http://localhost:5173 (or the port shown in your terminal).

### Build

Build the project for production:

```bash
npm run build
```

## Project Structure

- `src/app/components`: Contains core UI sections (Header, Hero, Portfolio, Skills, Footer).
- `src/app/components/ui`: Reusable atomic components.
- `vite.config.ts`: Configuration for the Vite build tool.