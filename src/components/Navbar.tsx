import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {useEffect, useState} from "react";

const navigation = [
    {name: 'Home', href: '#hero'},
    {name: 'About me', href: '#about'},
    {name: 'Projects', href: '#projects'},
    {name: 'Skills', href: '#skills'},
    {name: 'Contact', href: '#contact'},
]

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            { rootMargin: '-80px 0px -20% 0px', threshold: 0.1 }
        );

        navigation.forEach((item) => {
            const section = document.getElementById(item.href.slice(1));
            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <Disclosure as="nav" className="bg-gray-300 dark:bg-gray-800 sticky top-0 z-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton
                            className="group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5"/>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden"/>
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block"/>
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <a href="#hero" className="flex items-center">
                            <img
                                src="/icon.png"
                                className="h-8 w-auto"
                            />
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`rounded-md px-3 py-2 text-sm font-medium ${
                                            activeSection === item.href.substring(1) ? "bg-gray-700 text-white" : "dark:text-gray-300 hover:bg-gray-700 hover:text-white"
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={`block rounded-md px-3 py-2 text-base font-medium ${
                                activeSection === item.href.substring(1) ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                            }`}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
