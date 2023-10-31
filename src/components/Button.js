import React from 'react'

 export const Button = ({children}) => {
  return (
    <button className="w-64 text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">{children}</button>
  )
}

export default Button
