import React, { useEffect, useState } from 'react'
import axios from "axios";
import  ParticlesBackground from './ParticlesBackground'
const Dashboard = () => {


  const myUrl =  "http://localhost:8000/api/users";

  const [users, setUsers] = useState([])

  
  
  const getUsers = async() => {
    const response = await axios.get(myUrl)
    setUsers(response.data);
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        User name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        User email
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                        Created AT
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                        Updated AT
                    </th>
                </tr>
            </thead>
            <tbody>
  {users.map((user, index) => (
    <tr key={index} className="bg-white dark:bg-gray-800">
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.createdAt}</td>
      <td>{user.updatedAt}</td> {/* Fixed typo here */}
    </tr>
  ))}
</tbody>

        </table>
    </div>

  )
}

export default Dashboard
