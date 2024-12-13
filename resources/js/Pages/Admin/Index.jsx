import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AdminIndex({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-blue-100 p-4 rounded-md">
                                    <h3 className="font-semibold text-blue-800 mb-2">User Management</h3>
                                    <p className="text-blue-600">Manage user accounts and permissions</p>
                                </div>
                                <div className="bg-green-100 p-4 rounded-md">
                                    <h3 className="font-semibold text-green-800 mb-2">Content Management</h3>
                                    <p className="text-green-600">Update and organize site content</p>
                                </div>
                                <div className="bg-yellow-100 p-4 rounded-md">
                                    <h3 className="font-semibold text-yellow-800 mb-2">Analytics</h3>
                                    <p className="text-yellow-600">View site statistics and reports</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

