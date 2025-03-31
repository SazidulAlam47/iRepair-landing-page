import Container from "../custom/Container";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <Container className="py-14 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <span className="text-2xl font-semibold text-gray-900">
                        iRepair
                    </span>
                    <p className="mt-2 text-sm text-gray-500">
                        Your trusted computer repair & data recovery experts. We
                        bring your devices back to life.
                    </p>
                </div>

                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            SERVICES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Battery Replacement
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Chip Repair
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Data Recovery
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Storage Upgrades
                                </a>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            SUPPORT
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Warranty Information
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Track Repair
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Contact Us
                                </a>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            COMPANY
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Terms of Service
                                </a>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            FOLLOW US
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">
                                    LinkedIn
                                </a>
                            </li>
                        </nav>
                    </div>
                </div>
            </Container>

            <div className="bg-primary-foreground">
                <Container className="py-4 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} iRepair. All Rights
                        Reserved.
                    </p>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-500 hover:text-gray-700">
                            <svg
                                fill="currentColor"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 hover:text-gray-700">
                            <svg
                                fill="currentColor"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 hover:text-gray-700">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    width={20}
                                    height={20}
                                    x={2}
                                    y={2}
                                    rx={5}
                                    ry={5}
                                />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500 hover:text-gray-700">
                            <svg
                                fill="currentColor"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx={4} cy={4} r={2} />
                            </svg>
                        </a>
                    </span>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
