"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@material-tailwind/react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`w-fit absolute right-20 md:right-32 top-7 p-2 rounded-md hover:scale-110 active:scale-100`}
    >
      <Switch
        defaultChecked
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        color="red"
        crossOrigin="false"
      />
    </div>
  );
};
