import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";

export function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
        </div>
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
