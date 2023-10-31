import { Link } from "react-router-dom";
import logo from "../assets/p2.png"
import React from 'react'
import {useEffect} from "react";
import { Button } from "../components/Button"
export const PageNotFound = () => {
  useEffect(()=>{
    document.title = `Page Not found / Netflix`
  })
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col item-center my-4'>
          <p className="text-7xl text-gray font-bold my-10 ">404,Oops!</p>
          <div className="max-w-lg pl-10 mx-auto">
            <img className="rounded" src={logo} alt="404 page not found" />
          </div>
        </div>
        <div className=" flex justify-center my-4">
          <Link to="/">
            <Button>Back to Home</Button>
            <Button>Back to netflix</Button>
          </Link>

        </div>
      </section>
    </main>
  )
}

export default PageNotFound
