module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--bg-primary)",
          overlayLight: "var(--bg-overlay-light)",
          overlayMedium: "var(--bg-overlay-medium)",
          header: "var(--bg-header)",
          success: "var(--bg-success)",
          accent: "var(--bg-accent)",
          info: "var(--bg-info)",
          danger: "var(--bg-danger)",
          successLight: "var(--bg-success-light)",
          warning: "var(--bg-warning)",
          infoLight: "var(--bg-info-light)",
          cardLight: "var(--bg-card-light)",
          cardMedium: "var(--bg-card-medium)",
          light: "var(--bg-light)",
          white: "var(--bg-white)",
          whiteLight: "var(--bg-white-light)",
          whiteOverlay: "var(--bg-white-overlay)",
          whiteMedium: "var(--bg-white-medium)",
          whiteTransparent: "var(--bg-white-transparent)"
        },
        text: {
          primary: "var(--text-primary)",
          accent: "var(--text-accent)",
          success: "var(--text-success)",
          successLight: "var(--text-success-light)",
          warningLight: "var(--text-warning-light)",
          white: "var(--text-white)",
          whiteOverlay: "var(--text-white-overlay)",
          whiteTransparent: "var(--text-white-transparent)",
          whiteMedium: "var(--text-white-medium)",
          whiteLight: "var(--text-white-light)"
        },
        button: {
          primary: "var(--btn-primary)",
          secondary: "var(--btn-secondary)"
        }
      },
      blur: {
        'custom': '12px', // Custom blur value
      },
    }
  },
  plugins: []
};