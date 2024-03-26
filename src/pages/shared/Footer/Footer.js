
import { ExternalLink } from "react-external-link";
import { BsLinkedin, BsSkype, BsYoutube, BsTwitter, BsGithub } from 'react-icons/bs';
import { SiNetlify } from 'react-icons/si';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            {/*    <!-- Component: Dark Theme Footer --> */}
            < footer className="w-full text-slate-300" >
                {/*      <!-- Main footer --> */}
                < div className="pt-16 pb-12  border-t border-slate-900 bg-base-300" >
                    <div className="container px-4 mx-auto">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-product-dark"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-white"
                                    id="footer-product-dark"
                                >
                                    Product
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Features
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Customers
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Why us?
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-docs-dark"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-white"
                                    id="footer-docs-dark"
                                >
                                    Docs & help
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Documentation
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Training
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            System status
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            FAQ's
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Help Center
                                        </Link>
                                    </li >
                                </ul >
                            </nav >
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-about-dark"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-white"
                                    id="footer-about-dark"
                                >
                                    About us
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Careers
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Leadership
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to="/"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Events
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-get-in-touch-dark"
                            >
                                <ExternalLink href='https://www.linkedin.com/in/md-mubarak-hossain-662113201/'
                                    className="mb-6 text-base font-medium text-white"
                                    id="footer-get-in-touch-dark"
                                >
                                    Get in touch
                                </ExternalLink>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <ExternalLink
                                            href="https://www.facebook.com/mubarak.parvej"
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Contact
                                        </ExternalLink>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Support
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Partners
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Join research
                                        </Link>
                                    </li >
                                </ul >
                            </nav >
                        </div >
                    </div >
                </div >
                < div className="py-4  border-t border-slate-900 bg-base-300" >
                    <div className="container px-6 mx-auto">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <div className="col-span-2 md:col-span-4 lg:col-span-6">
                                Copyright 2022
                            </div>
                            <nav
                                aria-labelledby="footer-social-links-dark"
                                className="col-span-2 text-right md:col-span-4 lg:col-span-6"
                            >
                                <h2 className="sr-only" id="footer-social-links-dark">
                                    Social Media Links
                                </h2>
                                <ul className="flex items-center justify-end gap-4">
                                    <li>
                                        <ExternalLink
                                            href="https://www.linkedin.com/in/md-mubarak-hossain-662113201/"
                                            className="transition-colors duration-300 hover:text-emerald-500">
                                            <BsLinkedin></BsLinkedin>
                                        </ExternalLink>
                                    </li>
                                    <li>
                                        <ExternalLink
                                            href="https://join.skype.com/invite/qtYtBS3HFjhk"
                                            className="transition-colors duration-300 hover:text-emerald-500">
                                            <BsSkype></BsSkype>
                                        </ExternalLink>
                                    </li>
                                    <li>
                                        <ExternalLink
                                            href="https://www.youtube.com/channel/UCySCEvl9nmFyAIXgUQfD5KQ"
                                            className="transition-colors duration-300 hover:text-emerald-500">
                                            <BsYoutube></BsYoutube>
                                        </ExternalLink>
                                    </li>
                                    <li>
                                        <ExternalLink
                                            href="https://twitter.com/Mubarak6632"
                                            className="transition-colors duration-300 hover:text-emerald-500">
                                            <BsTwitter></BsTwitter>
                                        </ExternalLink>
                                    </li>
                                    <li>
                                        <ExternalLink
                                            href="https://github.com/Md-Mubarak-Hossain"
                                            className="transition-colors duration-300 hover:text-emerald-500">
                                            <BsGithub></BsGithub>
                                        </ExternalLink>
                                    </li>
                                    <li>
                                        <ExternalLink
                                            href="https://app.netlify.com/teams/md-mubarak-hossain/sites"
                                            className="transition-colors duration-300 hover:text-emerald-500">
                                            <SiNetlify></SiNetlify>
                                        </ExternalLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div >
            </footer >
        </>
    )
}
export default Footer;