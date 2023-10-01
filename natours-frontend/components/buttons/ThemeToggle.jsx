'use client'
import { useEffect, useState } from 'react';
import { Classic } from "@theme-toggles/react"
import "@theme-toggles/react/css/Classic.css"

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('natours-theme', newTheme);
  }

  useEffect(() => {
    const savedTheme = localStorage ? localStorage?.getItem('natours-theme') : null
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--white-alabaster', '#000000');
    } else {
      root.style.setProperty('--white-alabaster', '#ffffff');
    }
  }, [theme]);
  

  return <Classic duration={750} toggled={theme === 'light'} toggle={toggleTheme} reversed />
}

export default ThemeToggle;