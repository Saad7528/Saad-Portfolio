import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'
import './styles.css' // আপনার CSS ফাইলের নাম যদি ভিন্ন হয়, তবে এটি পরিবর্তন করে নেবেন

// রাউটার তৈরি করা হচ্ছে
const router = getRouter()

// রুট এলিমেন্টে অ্যাপ রেন্ডার করা হচ্ছে
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}
