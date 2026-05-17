"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

const ThemeToogle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full bg-white/10 text-white flex items-center gap-2"
    >
      {isDark ? (
        <Moon className="w-5 h-5 text-yellow-400" />
      ) : (
        <Sun className="w-5 h-5 text-blue-400" />
      )}
    </button>
  );
};

export default ThemeToogle;