'use client'
import { useEffect, useState } from 'react';
import { Classic } from "@theme-toggles/react"
import "@theme-toggles/react/css/Classic.css"

const ThemeToggle = ({className}) => {
  const [theme, setTheme] = useState('light');

  const savedTheme = typeof window !== 'undefined' && localStorage ? localStorage.getItem('natours-theme') : null;

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('natours-theme', newTheme);
  }

  useEffect(() => {
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      // BACKGROUND AND TEXT
      root.style.setProperty('--white-basic', '#ffffff');
      root.style.setProperty('--white-alabaster-background', '#f7f7f7');
      root.style.setProperty('--white-alabaster-text', '#f7f7f7');
      root.style.setProperty('--grey-tundora', '#444');
      root.style.setProperty('--grey-boulder-text', '#777777');
      root.style.setProperty('--grey-dusty-text', '#999999');
      root.style.setProperty('--grey-concrete-background', '#f2f2f2');
      root.style.setProperty('--input-text', 'inherit');
      // BOX-SHADOW
      root.style.setProperty('--box-shadow-standard', '0 1.5rem 4rem rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--box-shadow-bold', '0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--box-shadow-bold-x2', '0 2.5rem 6rem 4rem rgba(0, 0, 0, 0.12)');
      root.style.setProperty('--clip-box-shadow-bold-x2', 'drop-shadow(0rem 2.5rem 6rem rgba(0, 0, 0, 0.25))');

    } else {
      // BACKGROUND AND TEXT
      root.style.setProperty('--white-basic', '#0f0f0f');
      root.style.setProperty('--white-alabaster-background', '#0f0f0f');
      root.style.setProperty('--white-alabaster-text', '#ffffff');
      root.style.setProperty('--grey-tundora', '#444');
      root.style.setProperty('--grey-boulder-text', '#ffffff');
      root.style.setProperty('--grey-dusty-text', '#ffffff');
      root.style.setProperty('--grey-concrete-background', '#272727');
      root.style.setProperty('--input-text', '#e8e6e3e0');
      // BOX-SHADOW
      root.style.setProperty('--box-shadow-standard', '0 1.5rem 4rem rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--box-shadow-bold', '0 2.5rem 8rem 2rem rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--box-shadow-bold-x2', '0 2.5rem 6rem 4rem rgba(255, 255, 255, 0.12)');
      root.style.setProperty('--clip-box-shadow-bold-x2', 'drop-shadow(0rem 2.5rem 6rem rgba(0, 0, 0, 0.25))');
    }
  }, [theme]);
  

  return <Classic className={className} duration={500} toggled={theme === 'dark'} toggle={toggleTheme} reversed />
}

export default ThemeToggle;