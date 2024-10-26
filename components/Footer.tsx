import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white px-12 py-6'>
      <div className='flex items-center justify-evenly text-center sm:text-start flex-wrap'>
        <div>
        <h3 className='text-lg font-semibold py-3'>Contact me</h3>
        <p>+92 312-2785867</p>
        <p>dev.huzaifa.011@gmail.com</p>
        </div>
        <div>
          <h3 className='text-lg font-semibold py-3'>Website</h3>
        <ul className="flex gap-1 flex-col">
        <li>
          <Link className="text-md font-md text-black dark:text-white" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-md font-md text-black dark:text-white"
            href={"/projects"}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="text-md font-md text-black dark:text-white"
            href={"/contact"}
          >
            Contact
          </Link>
        </li>
      </ul>
        </div>
        <div>
          <h3 className='text-lg font-semibold py-3'>Social Links</h3>
          <a className='pr-4' href="https://www.linkedin.com/in/huzaifa-nazeer-b969632b7/" target='_blank'>Linkedin</a>
          <a href="https://github.com/dev-huzi-11" target='_blank'>GitHub</a>
          <a className='pl-4' href="https://www.instagram.com/its_huzi_4u/" target='_blank'>Instagram</a>
        </div>
      </div>
      <p className='text-center mt-6'>Copyrights &copy; | All rights reserved</p>
    </div>
  )
}

export default Footer
