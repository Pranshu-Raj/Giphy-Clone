import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

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
