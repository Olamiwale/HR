import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} HR Solutions. All rights reserved.</p>
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </footer>
  )
}
