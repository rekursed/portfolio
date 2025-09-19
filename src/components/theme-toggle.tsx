"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      aria-label="Toggle theme"
      className="rounded-full border border-black/10 dark:border-white/10 p-2 hover:bg-black/5 dark:hover:bg-white/10"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <BsSun /> : <BsMoonStars />}
    </button>
  );
}


