import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="font-sans text-gray-900 antialiased">
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          {/* Container Utama */}
          <div className="bg-white shadow-md overflow-hidden sm:rounded-lg flex w-[900px]">
            
            {/* Bagian Kiri - Gambar */}
            <div className="w-1/2">
              <img 
                src="public/Gedug-G-Udinus.jpg" 
                className="w-full h-full object-cover object-center rounded-l-lg"
              />
            </div>

            {/* Bagian Kanan - Form Login */}
            <div className="w-1/2 px-8 py-6">
              <form method="POST" action="#">
                <h1 className="text-2xl font-bold mb-8 text-center">Login</h1>

                {/* Email */}
                <div>
                  <label
                    className="block font-medium text-sm text-gray-700 mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="px-3 py-2 border border-gray-300 focus:border-blue-500 focus:outline-blue-500 rounded-md shadow-sm block w-full"
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoFocus
                    autoComplete="username"
                    placeholder="Masukkan email"
                  />
                </div>

                {/* Password */}
                <div className="mt-4">
                  <label
                    className="block font-medium text-sm text-gray-700 mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="px-3 py-2 border border-gray-300 focus:border-blue-500 focus:outline-blue-500 rounded-md shadow-sm block w-full"
                    id="password"
                    type="password"
                    name="password"
                    required
                    autoComplete="current-password"
                    placeholder="Masukkan password"
                  />
                </div>

                {/* Tombol Login */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
