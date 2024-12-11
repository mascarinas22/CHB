import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-[#F4E3D3] pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <img
                        src="/images/logo.jpg"
                        alt="Logo"
                        className="h-12 w-12 rounded-full object-cover"
                    />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-gradient-to-br from-[#B59D8F] to-[#D9C3B5] px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
