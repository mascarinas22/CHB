import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { Link, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Fixed Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white-100 bg-gradient-to-r from-[#9E7C53] via-[#6C4F3D] to-[#3E2723] text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <img
                                src="/images/logo.jpg"
                                alt="Logo"
                                className="h-12 w-12 rounded-full object-cover"
                            />
                        </Link>

                        {/* Navigation Links and User Dropdown */}
                        <div className="flex items-center space-x-8">
                            {/* Navigation Links */}
                            <div className="hidden md:flex space-x-8">
                                <NavLink
                                    href="/dashboard"
                                    active={route().current('/dashboard')}
                                    className="text-white hover:text-gray-300 text-lg font-medium"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    href="/about"
                                    active={route().current('/about')}
                                    className="text-white hover:text-gray-300 text-lg font-medium"
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    href="/accommodation"
                                    active={route().current('/accommodation')}
                                    className="text-white hover:text-gray-300 text-lg font-medium"
                                >
                                    Accommodation
                                </NavLink>
                                <NavLink
                                    href="/contact"
                                    active={route().current('/contact')}
                                    className="text-white hover:text-gray-300 text-lg font-medium"
                                >
                                    Contact Us
                                </NavLink>
                            </div>

                            {/* User Dropdown */}
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md bg-[#D7B99E] px-4 py-2 text-sm font-medium text-white hover:bg-[#c3a38c] focus:outline-none"
                                        >
                                            {user.name}
                                            <svg
                                                className="-me-0.5 ms-2 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a 1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>
                                <Dropdown.Content className="mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link href={route('bookings.mybookings')}>My Bookings</Dropdown.Link>
                                    <Dropdown.Link href={route('bookings.history')}>Booking History</Dropdown.Link>
                                    <Dropdown.Link href={route('payments.index')}>Payments</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            {header && (
                <header className="bg-gradient-to-r from-[#9E7C53] via-[#6C4F3D] to-[#3E2723] shadow mt-16">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            {/* Main Content */}
            <main
                className="pt-16 bg-cover bg-center bg-fixed min-h-screen"
                style={{ backgroundImage: "url('/images/ABOUT.jpg')" }}
            >
                {children}
            </main>
        </div>
    );
}
