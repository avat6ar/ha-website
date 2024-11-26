import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      heading: ["var(--font-heading)"],
      body: ["var(--font-body)"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        md: "15px",
        lg: "15px",
        xl: "15px",
      },
      screens: {
        DEFAULT: "100%",
        sm: "100%",
        md: "720px",
        lg: "960px",
        xl: "1200px",
      },
    },
    extend: {
      keyframes: {
        alltuchTopDown: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        hoverShine: {
          "100%": { left: "125%" },
        },
        rotateme: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInDown: {
          from: {
            transform: "translate3d(0, -100%, 0)",
            visibility: "visible",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
          },
        },
        loading: {
          "0%, 40%, 100%": {
            transform: "scaleY(0.4)",
          },
          "20%": {
            transform: "scaleY(1)",
          },
        },
        scale: {
          "0%": {
            transform: "scale(0.5)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        alltuchtopdown: "alltuchTopDown 2.5s ease-in-out 0s infinite alternate",
        hoverShine: "hoverShine 1.2s",
        rotateme: "rotateme 10s infinite linear",
        fadeInDown: "fadeInDown 1000ms ease-in-out 0s normal none 1 running",
        fadeIn: "fadeIn 300ms ease-in-out",
        slideInDown: "slideInDown 500ms ease-in-out 0s normal none 1 running",
        slideOutUp: "slideOutUp 500ms ease-in-out 0s normal none 1 running",
        scale: "scale 300ms ease-in-out",
        loading: "loading 1.2s infinite ease-in-out",
      },
    },
  },
  plugins: [require("autoprefixer")],
};
export default config;
