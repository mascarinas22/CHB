import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-transparent text-black/50 dark:bg-transparent dark:text-white/50">
                <nav className="absolute top-0 w-full bg-transparent dark:bg-transparent backdrop-blur-md shadow-md z-20 py-.1">
                    <div className="container mx-auto flex justify-center px-20">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-4 py-2 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white ring-1 ring-transparent transition-all duration-300 ease-in-out hover:bg-gradient-to-br focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-400 dark:focus-visible:ring-white"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <div className="flex flex-col space-y-3 absolute right-6 top-1/4">
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-4 py-2 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-white ring-1 ring-transparent transition-all duration-300 ease-in-out hover:bg-gradient-to-br focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-400 dark:focus-visible:ring-white"
                                    >
                                        User
                                    </Link>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-4 py-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white ring-1 ring-transparent transition-all duration-300 ease-in-out hover:bg-gradient-to-br focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400 dark:focus-visible:ring-white"
                                    >
                                        Admin
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md px-4 py-2 bg-gradient-to-r from-green-500 via-lime-500 to-emerald-500 text-white ring-1 ring-transparent transition-all duration-300 ease-in-out hover:bg-gradient-to-br focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-400 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </nav>
                <img
                    id="background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ filter: 'blur(5px)' }}
                    src="/images/capitol.jpg"
                    alt="Background"
                />

                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center"></div>
                        </header>
                    </div>
                </div>
            </div>
        </>
    );
}
