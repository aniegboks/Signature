"use client";
import { useState } from 'react';
import Button from './button';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (e.g., API call)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    // ContactForm.tsx
    return (
        <div className="w-full h-full max-w-full bg-transparent p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-16 text-white text-center">
                Contact Us
            </h2>

            {submitted && (
                <p className="text-green-600 text-center mb-4">
                    Thank you for reaching out!
                </p>
            )}

            <form onSubmit={handleSubmit} className="w-full space-y-4">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white my-2">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white my-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2 mt-16">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-2 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        required
                    />
                </div>

                {/* Submit */}
                <div className="flex justify-start">
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                        className={` hover:bg-blue-800 text-white mt-4 font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </Button>
                </div>
            </form>
        </div>
    );

};

export default ContactForm;
