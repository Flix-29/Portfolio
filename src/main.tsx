import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";

export function App() {
    return (
        <div className="text-white bg-radial from-gray-800 from-30% to-gray-900 to-65%">
            <Navbar />
            <Hero />
        </div>
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
