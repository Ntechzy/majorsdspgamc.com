import React from "react";
import Image1 from "/asset/InstaPost/Post1.jpg";
import Image2 from "/asset/InstaPost/post2.jpg";
import Image3 from "/asset/InstaPost/Post3.jpg";
import Image4 from "/asset/InstaPost/Post4.jpg";

const posts = [
  { image: Image1, link: "https://www.instagram.com/majorsdsinghpg/" },
  { image: Image2, link: "https://www.instagram.com/majorsdsinghpg/" },
  { image: Image3, link: "https://www.instagram.com/majorsdsinghpg/" },
  { image: Image4, link: "https://www.instagram.com/majorsdsinghpg/" },
];

const InstagramPostGrid = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          See Our World!
          <span className="block sm:inline-block sm:ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ebbd29] to-amber-600">
            Follow us on Instagram
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
        {posts.map((post, index) => (
          <a
            href={post.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
          >
            <img
              src={post.image}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.75 2h8.5C18.55 2 20 3.46 20 5.25v13.5C20 20.55 18.55 22 16.25 22h-8.5C5.45 22 4 20.55 4 18.75V5.25C4 3.46 5.45 2 7.75 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.25-.75a.75.75 0 100 1.5.75.75 0 000-1.5z"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://www.instagram.com/majorsdsinghpg/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-base font-semibold text-white rounded-full bg-gradient-to-r from-[#ebbd29] to-amber-600 hover:from-amber-700 hover:to-[#ebbd29] transition-colors duration-300 shadow-lg"
        >
          Follow @majorsdsinghpg
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.75 2h8.5C18.55 2 20 3.46 20 5.25v13.5C20 20.55 18.55 22 16.25 22h-8.5C5.45 22 4 20.55 4 18.75V5.25C4 3.46 5.45 2 7.75 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.25-.75a.75.75 0 100 1.5.75.75 0 000-1.5z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default InstagramPostGrid;
