// import React from 'react';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-400">
        Welcome to Your Secure Authentication App!
      </h1>

      <p className="text-lg leading-relaxed text-gray-400 mb-8">
        This robust web application leverages the powerful MERN stack (MongoDB,
        Express.js, React, Node.js) to deliver a seamless user experience with
        comprehensive authentication functionalities. Users can effortlessly
        register, log in, and securely manage their accounts, with protected
        routes ensuring access only to authorized individuals.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-400">
          MERN Stack Breakdown:
        </h2>
        <ul className="list-disc space-y-2 text-gray-400">
          <li>
            **Front-End:** Built with React, a popular JavaScript library known
            for its component-based architecture and virtual DOM, enabling
            efficient UI updates and a smooth user experience.
          </li>
          <li>
            **Client-Side Routing:** React Router seamlessly manages navigation
            between different application views, providing a dynamic and
            intuitive user flow.
          </li>
          <li>
            **Back-End:** Node.js, the JavaScript runtime environment on the
            server side, handling user interactions and data processing.
            Express.js, a lightweight web framework for Node.js, streamlines
            server-side development, making it easier to build robust APIs and
            manage requests.
          </li>
          <li>
            **Database:** MongoDB, a flexible NoSQL database, efficiently stores
            and retrieves application data in a document-oriented format,
            providing scalability and ease of use.
          </li>
          <li>
            **Authentication:** JSON Web Tokens (JWTs) offer a secure and
            industry-standard approach to user authentication. JWTs act as
            tamper-proof credentials, enabling secure authorization for
            protected routes within the application.
          </li>
        </ul>
      </section>

      <p className="text-lg leading-relaxed text-gray-400">
        This meticulously crafted application serves as a foundational template
        to empower you in building comprehensive, user-authenticated web
        applications utilizing the MERN stack. Feel free to tailor this code
        base to your specific project requirements and unleash your creativity!
      </p>
    </div>
  );
}
