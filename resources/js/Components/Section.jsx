import React from 'react';

const Section = ({ id, title, content, formFields = [], buttonText = '', background }) => {
    return (
        <section id={id} className={`py-16 ${background}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6">{title}</h2>
                {content && <p className="text-gray-700">{content}</p>}
                {formFields.length > 0 && (
                    <form>
                        {formFields.map((field, index) => (
                            <div key={index} className="mb-4">
                                <label className="block mb-2">{field.label}</label>
                                <input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="w-full p-2 bg-white border border-gray-300 rounded"
                                />
                            </div>
                        ))}
                        <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 w-full">{buttonText}</button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Section;
