import { useState, useEffect } from 'react';

export default function DarkModeSwitch() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (!savedMode) {
            setDarkMode(savedMode == 'true');
        } else {
            setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed z-10 bottom-4 right-4 p-3 bg-gray-900 dark:bg-gray-500 rounded-full text-white shadow-lg"
        >
            {darkMode ? '🌞' : '🌙'}
        </button>
    );
}