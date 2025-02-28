import {IoIosMail} from 'react-icons/io'
import {FaGithub} from "react-icons/fa";

const contact = [
    {name: "Email", link: "mailto:info@flix29.de", icon: <IoIosMail className="size-5"></IoIosMail>},
    {name: "GitHub", link: "https://github.com/Flix-29", icon: <FaGithub className="size-5"></FaGithub>},
]

export default function Contact() {
    return (
        <section id="contact" className="bg-gray-900 text-white py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Contact</h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                    Feel free to reach out to me if you have any questions or just want to chat.
                </p>
            </div>

            <div className="mt-8 flex justify-center gap-8">
                {contact.map(item => (
                    <a
                        href={item.link}
                        target={"_blank"}
                        className="flex gap-2 justify-center bg-gray-700 text-white px-4 py-2 rounded-lg text-sm
                            font-semibold shadow-md hover:bg-emerald-600 hover:shadow-black/40 transition"
                    >
                        {item.icon}
                        {item.name}
                    </a>
                ))}
            </div>
        </section>
    )
}