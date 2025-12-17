import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  /** The actual theme applied ("light" or "dark"), regardless of "system" setting */
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(
    () =>
      (typeof window !== "undefined"
        ? (localStorage.getItem("theme") as Theme)
        : "system") || "system"
  );

  // Tracks the actual result of (theme + system preference)
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      // 1. Determine the actual active theme
      const isDark =
        theme === "dark" || (theme === "system" && mediaQuery.matches);
      const activeTheme = isDark ? "dark" : "light";

      // 2. Update DOM and State
      root.classList.toggle("dark", isDark);
      setResolvedTheme(activeTheme);

      // 3. Persist selection
      localStorage.setItem("theme", theme);
    };

    applyTheme();

    // Listen for OS preference changes
    const handleChange = () => {
      if (theme === "system") applyTheme();
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
