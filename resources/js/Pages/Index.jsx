import {useState, useEffect, React} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Share from '@/Components/Share';
import Post from '@/Components/Post';


export default function Index({ auth, shares }) {
    
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
        feedback: '',
    }); 

    const [isSubmitting, setIsSubmitting] = useState(false);

    const getSentiment = async () => {
        setIsSubmitting(true);
        try {
            const response = await fetch("http://127.0.0.1:3000/greet-user/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: data.message }),
            });

            const result = await response.json();
            if (response.ok) {
                setData('feedback', result.message);
            } else {
                console.error(result.error || "An error occurred.");
            }
        } catch (error) {
            console.error("Error fetching sentiment:", error);
        }
    };

    useEffect(() => {
        if (data.feedback) {
            //console.log("Form data after update:", data); //use this to check the have sentiment value
            post(route('share.store'), {
                onSuccess: () => {
                    reset();
                    toast.success("Save successfully");
                },
                onError: () => {
                    toast.error("Form not Submitted");
                }
            });
            setIsSubmitting(false);
        }
    }, [data.feedback]);

    const submit = (e) => {
        e.preventDefault();
        getSentiment();
    };


    const clickme = (e) => {
        alert("Connected");
    }


 
    return (
        <AuthenticatedLayout>
            <Head title="Share" />
            <ToastContainer
                position="top-left"
            />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4"  disabled={processing}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </PrimaryButton>
                </form>

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {shares.map(share =>
                        <Share key={share.id} share={share} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}