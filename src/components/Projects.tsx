import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "NotionApiClient",
        description: "A simple Java client for the Notion API.",
        image: "/notionapiclient.png",
        tags: ["Java", "Maven", "Notion API"],
        github: "https://github.com/Flix-29/NotionApiClient",
        use: "https://mvnrepository.com/artifact/de.flix29/notion-api-client"
    },
    {
        title: "MovieTinder",
        description: "A Tinder-like web app to find movies to watch.",
        image: "/movietinder.png",
        tags: ["TypeScript", "React", "Tailwindcss", "TMDB API"],
        github: "https://github.com/Flix-29/MovieTinder",
        use: "https://movie-tinder.flix29.de/"
    },
    {
        title: "BesserTanken",
        description: "A simple Website to find the cheapest gas station near you.",
        image: "/bessertanken.png",
        tags: ["Java", "Vaadin", "Spring Boot"],
        github: "https://github.com/Flix-29/BesserTanken",
    },
    {
        title: "Portfolio",
        description: "My personal portfolio website.",
        image: "/portfolio.png",
        tags: ["TypeScript", "React", "Tailwindcss"],
        github: "https://github.com/Flix-29/Portfolio",
        use: "https://flix29.de"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Projects</h2>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                    Here are some of my projects that I have worked on in the past. Feel free to check them out on GitHub.
                </p>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-7">
                    {projects.map((project) => (
                        <div className="bg-gray-700 rounded-lg shadow-lg shadow-black/40 p-6 transition-transform transform hover:scale-105 hover:shadow-xl" key={project.title}>
                            <span className="flex justify-center">
                                <img
                                    src={project.image}
                                    className="w-full h-48 object-cover rounded-lg transition-opacity duration-300 opacity-90 hover:opacity-100"
                                />
                            </span>
                            <h3 className="text-gray-200 text-xl font-semibold mt-4">{project.title}</h3>
                            <p className="text-gray-200 mt-2 min-h-12">{project.description}</p>
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                                {project.tags.map((tag) => (
                                    <span className="bg-blue-600 text-white px-2 py-1 rounded-lg text-sm" key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4 flex gap-3.5 justify-center">
                                <a
                                    href={project.github}
                                    target={"_blank"}
                                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg
                                        text-sm font-semibold shadow-md hover:bg-purple-400 dark:hover:bg-emerald-600 transition">
                                    <FaGithub className="size-5" />
                                    GitHub
                                </a>
                                {project.use && (
                                    <a
                                        href={project.use}
                                        target={"_blank"}
                                        className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm
                                            font-semibold shadow-md hover:bg-purple-400 dark:hover:bg-emerald-600 transition"
                                    >
                                        Check it out
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}