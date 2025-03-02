
const tools = [
    { name: "Java", size: "40", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", padding: true },
    { name: "Spring Boot", size: "35", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg", padding: false },
    { name: "PHP", size: "40", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", padding: true },
    { name: "Symfony", size: "40", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/symfony/symfony-original.svg", padding: false },
    { name: "Python", size: "40", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", padding: true },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function About() {
    return (
        <section id="about" className="py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                    I'm Felix, a backend developer from Germany working at Creditreform. I'm currently doing a dual study program
                    in computer science at the IU International University of Applied Sciences. <br/>
                    I specialize in <span className="text-emerald-600 font-bold">Java and building RestAPIs with Spring Boot</span>.
                    I also have experience <br/>in <span className="text-emerald-600 font-bold">PHP and Python</span> and have worked with
                    frameworks like <span className="text-emerald-600 font-bold">Symfony</span>. <br/>
                    Despite my focus on backend development. I also have experience in frontend development with knowledge
                    in <span className="text-emerald-600 font-bold">HTML, CSS, and JavaScript/TypeScript</span> and frameworks
                    like <span className="text-emerald-600 font-bold">Vue.js and React with Tailwindcss or Bootstrap</span>. <br/>
                </p>

                <div className="mt-8 flex dark:text-gray-200 text-black flex-wrap justify-center gap-6">
                    {tools.map((item) => (
                        <span
                            className={classNames("bg-gray-300 dark:bg-gray-700 flex items-center px-3 py-2 rounded-lg gap-1.5", item.padding ? "pr-4" : "")}
                            key={item.name}
                        >
                            <img src={item.icon} width={item.size} height={item.size}/>
                            {item.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};