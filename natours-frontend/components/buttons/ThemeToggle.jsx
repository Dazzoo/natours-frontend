'use client'
import { useEffect, useState } from 'react';
import { Classic } from "@theme-toggles/react"
import "@theme-toggles/react/css/Classic.css"

const ThemeToggle = ({className}) => {
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
      root.style.setProperty('--white-basic', '#ffffff');
      root.style.setProperty('--white-alabaster-background', '#f7f7f7');
      root.style.setProperty('--white-alabaster-text', '#f7f7f7');
      root.style.setProperty('--grey-boulder-text', '#777777');
      root.style.setProperty('--grey-dusty-text', '#999999');
    } else {
      root.style.setProperty('--white-basic', '#0f0f0f');
      root.style.setProperty('--white-alabaster-background', '#0f0f0f');
      root.style.setProperty('--white-alabaster-text', '#ffffff');
      root.style.setProperty('--grey-boulder-text', '#ffffff');
      root.style.setProperty('--grey-dusty-text', '#ffffff');
    }
  }, [theme]);
  

  return <Classic className={className} duration={500} toggled={theme === 'dark'} toggle={toggleTheme} reversed />
}

export default ThemeToggle;