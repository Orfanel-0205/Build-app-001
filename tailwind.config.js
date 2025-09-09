/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],  
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['PTSans', 'system-ui', 'sans-serif'],
        'pt-sans': ['PTSans', 'system-ui', 'sans-serif'],
        'pt-sans-regular': ['PTSans-Regular', 'system-ui', 'sans-serif'],
        'pt-sans-bold': ['PTSans-Bold', 'system-ui', 'sans-serif'],
        'pt-sans-italic': ['PTSans-Italic', 'system-ui', 'sans-serif'],
        'pt-sans-bold-italic': ['PTSans-BoldItalic', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Main backgrounds matching your dashboard
        background: {
          primary: "#0F1419",    // Main dark background
          secondary: "#1A202C",  // Card backgrounds
          tertiary: "#2D3748",   // Elevated elements
          muted: "#4A5568",      // Subtle backgrounds
        },

        // Blue theme from your interface
        primary: {
          50: "#EFF6FF",
          100: "#DBEAFE", 
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",   
          600: "#2563EB",   
          700: "#1D4ED8",   
          800: "#1E40AF",
          900: "#1E3A8A",
          DEFAULT: "#3B82F6",
        },

        // Accent colors for highlights and CTAs
        accent: {
          blue: "#00D4FF",      
          cyan: "#22D3EE",      
          purple: "#8B5CF6",    
          green: "#10B981",     
          DEFAULT: "#00D4FF",
        },

        // Text colors matching your interface
        text: {
          primary: "#FFFFFF",     
          secondary: "#CBD5E1",   
          muted: "#94A3B8",       
          inverse: "#1F2937",     
        },

        // Semantic colors
        success: {
          DEFAULT: "#10B981",
          light: "#6EE7B7",
          dark: "#059669",
        },
        warning: {
          DEFAULT: "#F59E0B",
          light: "#FCD34D", 
          dark: "#D97706",
        },
        error: {
          DEFAULT: "#EF4444",
          light: "#FCA5A5",
          dark: "#DC2626",
        },
        info: {
          DEFAULT: "#3B82F6",
          light: "#93C5FD",
          dark: "#2563EB",
        },

        // Border and divider colors
        border: {
          primary: "#374151",     
          secondary: "#4B5563",   
          accent: "#3B82F6",     
        },

        // Navigation and UI elements
        nav: {
          bg: "#1A202C",          // Sidebar background
          hover: "#2D3748",       // Hover states
          active: "#3B82F6",      // Active navigation item
        },

        // Card and component backgrounds
        card: {
          primary: "#1A202C",     // Main card background
          secondary: "#2D3748",   // Secondary card background
          hover: "#374151",       // Card hover state
        },

        // Progress and status indicators
        progress: {
          bg: "#374151",          // Progress bar background
          fill: "#3B82F6",        // Progress bar fill
          complete: "#10B981",    // Completed progress
        },
      },
      
      // Custom spacing for your dashboard layout
      spacing: {
        '18': '4.5rem',   // Custom spacing
        '88': '22rem',    // Sidebar width
        '128': '32rem',   // Large content areas
      },

      // Box shadows matching your design
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'sidebar': '2px 0 4px rgba(0, 0, 0, 0.1)',
        'notification': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      },

      // Border radius for consistent styling
      borderRadius: {
        'xl': '0.875rem',   // Cards and buttons
        '2xl': '1rem',      // Large cards
        '3xl': '1.5rem',    // Hero sections
      },

      // Animation and transitions
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      
      // Custom gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00D4FF 0%, #3B82F6 100%)',
        'gradient-success': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)',
      },
    },
  },
  plugins: [],
};