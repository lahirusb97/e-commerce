import React from "react";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <div>
      <MainNav />
      <section class="bg-gray-100 py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
            <p class="text-gray-600 mb-8">
              Have any questions or inquiries? We'd love to hear from you. Fill
              out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
            <form>
              <div class="mb-6">
                <label for="name" class="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div class="mb-6">
                <label for="email" class="block text-gray-700 font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div class="mb-6">
                <label for="message" class="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="4"
                  class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class="bg-indigo-500 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-600 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
