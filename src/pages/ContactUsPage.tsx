import React from 'react';

export const ContactUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Contact Us</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Have questions or need assistance? Reach out to our team and we will be happy to help you.
      </p>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Email Inquiries</h2>
          <p className="text-gray-600">
            You can reach our support team directly at{' '}
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              support@example.com
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Operating Hours</h2>
          <p className="text-gray-600">
            Monday – Friday: 9:00 AM – 5:00 PM EST
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
