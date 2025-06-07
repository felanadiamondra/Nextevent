import { useState } from "react";
import "./App.css";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800">

      {/* Header Section */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="relative flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
         
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-25">
            <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Product</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Features</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Marketplace</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Company</a>
                  </div>
                  <div className="py-6">
                    {/* <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Log in</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative px-6 py-32 lg:px-8 flex items-center justify-between gap-8">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold">
            Effortlessly <br />
            <span className="text-orange-500">plan your events</span>
          </h1>
          <p className="text-lg text-gray-600">
            Make event planning easy with our comprehensive platform. From start to finish, we streamline the process and offer dedicated support to make your event a success.
          </p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full">
              Plan an Event
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-full">
              Find an Expert
            </button>
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="md:w-1/2 grid grid-cols-3 gap-4">
          <div className="overflow-hidden rounded-2xl shadow-md col-span-2">
            <img
              src="./images/event.jpg"
              alt="Event 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="./images/event.jpg"
              alt="Event 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="./images/event.jpg"
              alt="Event 3"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md col-span-2">
            <img
              src="./images/event.jpg"
              alt="Event 4"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Header Actions */}
      <div className="absolute flex top-6 left-6 text-xl font-bold">
        <span className="text-black">EVENT</span>
        <span className="text-orange-500">PLAN</span>
        
        <div className="hidden lg:flex lg:gap-x-12 lg:justify-center lg:items-center">
          <a href="#" className="text-sm font-semibold text-gray-900">Product</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Features</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Marketplace</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Company</a>
        </div>
      </div>

      <div className="absolute flex-wrap items-center justify-between top-6 flex gap-4">
        
      </div>

      <div className="absolute top-6 right-6 flex items-center gap-4">
        <button className="text-sm border border-gray-300 px-4 py-2 rounded">
          Log in
        </button>
        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm px-4 py-2 rounded">
          Sign up
        </button>
      </div>

      {/* Logo */}
      
    </div>
  );
}
