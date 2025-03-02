export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 dark:bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <img
                    src="/Portfolio/icon.png"
                    alt="Felix Profile"
                    className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-gray-300"
                />

                <div className="ml-10 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                        Hi, I'm Felix
                    </h1>
                    <p className="mt-4 text-lg max-w-lg">
                        Backend Developer | Computer Science Student
                        <br/> Tech Enthusiast | Open Source Contributor
                    </p>

                    <a
                        href="#projects"
                        className="mt-6 inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg text-lg
                            font-semibold shadow-md hover:bg-emerald-700 transition hover:animate-pulse"
                    >
                        View My Projects
                    </a>
                </div>
            </div>
        </section>
    )
}