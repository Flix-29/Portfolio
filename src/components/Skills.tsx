import {
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoJavascript,
    BiLogoTypescript,
    BiLogoReact,
    BiLogoBootstrap,
    BiLogoTailwindCss,
    BiLogoJava,
    BiLogoSpringBoot,
    BiLogoPhp,
    BiLogoPython,
    BiLogoGit,
    BiLogoGithub,
    BiLogoDocker,
    BiLogoPostgresql
} from "react-icons/bi";
import {FaSymfony, FaJenkins} from "react-icons/fa";
import {DiMysql} from "react-icons/di";
import {SiInsomnia, SiOpenapiinitiative} from "react-icons/si";

const backend = [
    {name: 'Java', icon: <BiLogoJava className="size-5"/>},
    {name: 'Spring Boot', icon: <BiLogoSpringBoot className="size-5"/>},
    {name: 'OpenAPI', icon: <SiOpenapiinitiative className="size-5"/>},
    {name: 'PHP', icon: <BiLogoPhp className="size-5"/>},
    {name: 'Symphony', icon: <FaSymfony className="size-5"/>},
    {name: 'Python', icon: <BiLogoPython className="size-5"/>},
]

const frontend = [
    {name: 'HTML', icon: <BiLogoHtml5 className="size-5"/>},
    {name: 'CSS', icon: <BiLogoCss3 className="size-5"/>},
    {name: 'JavaScript', icon: <BiLogoJavascript className="size-5"/>},
    {name: 'TypeScript', icon: <BiLogoTypescript className="size-5"/>},
    {name: 'Bootstrap', icon: <BiLogoBootstrap className="size-5"/>},
    {name: 'Tailwind CSS', icon: <BiLogoTailwindCss className="size-5"/>},
    {name: 'React', icon: <BiLogoReact className="size-5"/>},
]

const tools = [
    {name: 'Git', icon: <BiLogoGit className="size-5"/>},
    {name: 'GitHub', icon: <BiLogoGithub className="size-5"/>},
    {name: 'Docker', icon: <BiLogoDocker className="size-5"/>},
    {name: 'Insomnia', icon: <SiInsomnia className="size-5"/>},
    {name: 'Jenkins', icon: <FaJenkins className="size-5"/>},
    {name: 'PostgreSQL', icon: <BiLogoPostgresql className="size-5"/>},
    {name: 'MySQL', icon: <DiMysql className="size-5"/>},
]

const sections = [
    {name: "Backend", skills: backend},
    {name: "Frontend", skills: frontend},
    {name: "Tools", skills: tools},
]

export default function Skills() {
    return (
        <section id="skills" className="py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Tech Stack & Tools</h2>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                    These are some of the tools and technologies that I have experience with. I am always looking to
                    learn new things and improve my skills.
                </p>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-7">
                    {sections.map((section, index) => (
                        <div className={`bg-gray-700 text-gray-200 rounded-lg shadow-lg shadow-black/40 p-6 transition-transform transform
                                ${sections.length % 2 === 1 && index === sections.length - 1 ? "lg:col-span-2 lg:mx-auto" : ""}`}
                            key={section.name}
                        >
                            <h3 className="text-2xl font-semibold mb-4 min-h-8">{section.name}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
                                {section.skills.map((skill) => (
                                    <div key={skill.name}
                                         className="flex flex-col items-center gap-2 hover:text-purple-400 dark:hover:text-emerald-500 hover:scale-110 transition-transform">
                                        {skill.icon}
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}