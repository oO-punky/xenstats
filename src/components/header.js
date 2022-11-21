import React, { useRef, useState, useContext } from 'react'
// import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-monokai">
      <div className={`container flex items-center justify-between h-full px-6 mx-auto text-gray-500 dark:text-white flex-row`}>
        <button className="p-1 mr-5 -ml-1 rounded-md focus:outline-none" aria-label="Title">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
        </svg>
        </button>

        <ul className="flex items-center flex-shrink-0 space-x-6">
            <li className="flex">
            <button className="rounded-md focus:outline-none" aria-label="Toggle color mode">
            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            </button>
            </li>

            <li className="relative">
            <a>
            <button className="rounded-full focus:shadow-outline-purple focus:outline-none" aria-label="Account" aria-haspopup="true">
                <div className="relative rounded-full inline-block w-8 h-8 align-middle" aria-hidden="true">
                <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82" alt="" aria-hidden="true" />
                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
            </button>
            </a>
            </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
