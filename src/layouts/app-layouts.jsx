import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

/**
 * Renders the main application layout component
 * @returns {JSX.Element} A React component that wraps the entire application layout
 */
export default function Applayouts() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
