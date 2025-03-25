"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const getInitialTheme = () => {
    if (typeof window === "undefined") return "dark";
    try {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || "dark";
    } catch (e) {
        console.warn("Failed to access localStorage:", e);
        return "dark";
    }
};

const setDocumentTheme = (theme) => {
    if (typeof document === "undefined") return;
    try {
        document.documentElement.setAttribute("data-theme", theme);
    } catch (e) {
        console.warn("Failed to set document theme:", e);
    }
};

const setStorageTheme = (theme) => {
    try {
        localStorage.setItem("theme", theme);
    } catch (e) {
        console.warn("Failed to save theme to localStorage:", e);
    }
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setDocumentTheme(theme);
    }, []);

    useEffect(() => {
        if (mounted) {
            setDocumentTheme(theme);
            setStorageTheme(theme);
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
