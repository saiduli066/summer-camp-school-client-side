/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     
      themes: [
        {
          light: {
            primary: "#3b82f6",
            "primary-focus": "#2563eb",
            "primary-content": "#ffffff",
            secondary: "#374151",
            "secondary-focus": "#1f2937",
            "secondary-content": "#ffffff",
            accent: "#f59e0b",
            "accent-focus": "#d97706",
            "accent-content": "#ffffff",
            neutral: "#9ca3af",
            "neutral-focus": "#6b7280",
            "neutral-content": "#111827",
            "base-100": "#ffffff",
            "base-200": "#f9fafb",
            "base-300": "#f3f4f6",
            "base-content": "#1f2937",
          },
          dark: {
            primary: "#2563eb",
            "primary-focus": "#1d4ed8",
            "primary-content": "#ffffff",
            secondary: "#1f2937",
            "secondary-focus": "#111827",
            "secondary-content": "#ffffff",
            accent: "#d97706",
            "accent-focus": "#b45309",
            "accent-content": "#ffffff",
            neutral: "#6b7280",
            "neutral-focus": "#9ca3af",
            "neutral-content": "#ffffff",
            "base-100": "#111827",
            "base-200": "#1f2937",
            "base-300": "#374151",
            "base-content": "#ffffff",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
};
