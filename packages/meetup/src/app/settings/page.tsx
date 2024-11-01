'use client';

import { useState, useEffect } from 'react';
import { InoProgressBar, InoCard } from '@inovex.de/elements-react';
import SettingsComponent from '../components/settings';

export default function Settings() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {isLoading ? (
          <div className="bg-white shadow rounded-lg p-6 max-w-md mx-auto">
            <p className="text-lg text-gray-600 mb-4 text-center">Loading your settings...</p>
            <InoProgressBar indeterminate={true} buffer={0} progress={0} label="Loading" />
          </div>
        ) : (
          <InoCard disableElevation>
            <div slot="header" className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Your Settings</h2>
            </div>
            <div slot="content" className="px-6 py-4">
              <SettingsComponent />
            </div>
            <div slot="footer" className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </InoCard>
        )}
      </div>
    </div>
  );
}
