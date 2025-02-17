"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Lock, Edit2, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    password: "********",
  })

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically send the updated user data to your backend
  }

  return (
    <div className="relative w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg"
      >
        <div className="">
          <div className="mb-6 flex justify-between w-full items-center px-4">
            <h1 className="text-3xl font-bold text-gray-800">User Profile</h1>
          </div>
          <div className="mb-8 relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 relative"
            >
              <Image width={32} height={32} src="/placeholder.svg?height=128&width=128" alt="Profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Camera className="text-white" />
              </div>
            </motion.div>
          </div>
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={false}
              className="space-y-4 min-h-max"
            >
              <div className="flex items-center space-x-4">
                <User className="text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="flex-grow p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="flex-grow p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Lock className="text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="flex-grow p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </motion.div>
            <motion.div
              initial={false}
              animate={isEditing ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              className="mt-6"
            >
              {isEditing && (
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Save Changes
                </button>
              )}
            </motion.div>
            <motion.div
              initial={true}
              animate={isEditing ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
              className="mt-6"
            >
              {!isEditing && (
                 <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={handleEdit}
                 className="top-4 right-4 p-2 rounded-full transition-colors"
               >
                 <button
                     type="submit"
                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                   >
                     Edit
                   </button>
               </motion.button>
              )}
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

