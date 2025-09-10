import React from "react"
import { UserProps } from "@/interfaces"

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Username:</span> {user.username}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Email:</span> {user.email}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Phone:</span> {user.phone}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Website:</span>{" "}
        <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
          {user.website}
        </a>
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Company:</span> {user.company.name}
      </p>
    </div>
  )
}

export default UserCard
