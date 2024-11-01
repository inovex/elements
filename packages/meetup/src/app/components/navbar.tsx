import { InoIcon, InoImg } from '@inovex.de/elements-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                <InoImg width={30} height={41} src="/elements.svg"></InoImg>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium !text-gray-500 hover:!text-gray-900"
              >
                About
              </Link>
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium !text-gray-500 hover:!text-gray-900"
              >
                Services
              </Link>
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium !text-gray-500 hover:!text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/settings"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md !text-gray-500 hover:!text-gray-900 hover:!bg-gray-50"
            >
              <InoIcon icon="setting" className="mr-2" />
              Settings
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md !text-gray-400 hover:!text-gray-500 hover:!bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <InoIcon icon="menu" className="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/about"
            className="block pl-3 pr-4 py-2 text-base font-medium !text-gray-500 hover:!text-gray-900 hover:!bg-gray-50"
          >
            About
          </Link>
          <Link
            href="/"
            className="block pl-3 pr-4 py-2 text-base font-medium !text-gray-500 hover:!text-gray-900 hover:!bg-gray-50"
          >
            Services
          </Link>
          <Link
            href="/"
            className="block pl-3 pr-4 py-2 text-base font-medium !text-gray-500 hover:!text-gray-900 hover:!bg-gray-50"
          >
            Contact
          </Link>
          <Link
            href="/settings"
            className="block pl-3 pr-4 py-2 text-base font-medium !text-gray-500 hover:!text-gray-900 hover:!bg-gray-50"
          >
            <div className="flex items-center">
              <InoIcon icon="setting" className="mr-2" />
              Settings
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
