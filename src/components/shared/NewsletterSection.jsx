import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left image block */}
        <div className="w-full md:w-1/2">
          <img
            src="/newsletter.jpg"
            alt="Subscribe illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Right content block */}
        <motion.div
          initial={{ opacity: 0, x:0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Join Our Community
          </h2>
          <p className="text-gray-600 text-lg">
            Get the latest news, updates, and insights delivered directly to your inbox. Be part of a growing network that stays ahead.
          </p>

          {/* Email form */}
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-700 focus:outline-none w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition"
            >
              Subscribe <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
