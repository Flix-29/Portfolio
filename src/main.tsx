import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Navbar from "./components/navbar.tsx";


export function App() {
    return (
        <div className="text-white">
            <Navbar />
            <h1 className="text-4xl font-bold">Tailwind is working!</h1>
        </div>
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
