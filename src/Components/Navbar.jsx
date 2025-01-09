import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../Asset/logo.png";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="absolute top-0 w-full bg-black/50 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className={`h-6 w-6 ${open ? "hidden" : "block"}`} // Manage visibility based on 'open' state
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className={`h-6 w-6 ${open ? "block" : "hidden"}`} // Manage visibility based on 'open' state
                  />
                </Disclosure.Button>
              </div>

              {/* Logo (aligned to the left in laptop view, centered in phone view) */}
              <div className="flex justify-start sm:justify-start items-center flex-1 sm:flex-none">
                <img alt="Logo" src={logo} className="h-20 w-auto sm:h-20 mx-auto sm:mx-0" />
              </div>

              {/* Centered navigation links */}
              <div className="hidden sm:flex space-x-4 justify-center flex-1">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 lg:text-md text-sm font-bold"
                >
                  Home
                </Link>
                <Link
                  to="/touristSpots"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 lg:text-md text-sm font-bold"
                >
                  Tourist Spots
                </Link>
                <Link
                  to="/food"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 lg:text-md text-sm font-bold"
                >
                  Food & Beverages
                </Link>
                <Link
                  to="/hotel"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 lg:text-md text-sm font-bold"
                >
                  Hotels
                </Link>
                <Link
                  to="/events"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 lg:text-md text-sm font-bold"
                >
                  Events & Festivals
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile navigation panel (expandable) */}
          <Disclosure.Panel className="sm:hidden z-50">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Disclosure.Button as={Link} to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Home
              </Disclosure.Button>
              <Disclosure.Button as={Link} to="/touristSpots" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Tourist Spots
              </Disclosure.Button>
              <Disclosure.Button as={Link} to="/food" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Food & Beverages
              </Disclosure.Button>
              <Disclosure.Button as={Link} to="/hotel" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Hotels
              </Disclosure.Button>
              <Disclosure.Button as={Link} to="/events" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Events & Festivals
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
