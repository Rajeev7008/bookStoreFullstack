import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards.jsx';
import {Link} from 'react-router-dom'

function Course() {
  return (
      <>
      <div className='max-w-screen-2xl  container  dark:bg-slate-900  mx-auto md:px-20 px-4'>
        <div className=" items-center justify-center text-center">
          <h1 className='text-2xl inline-block mt-20 font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            dolorem quidem non minima in. Nesciunt voluptas illo ex doloribus eligendi.
          </p>
          <Link to="/">
          <button className='mt-6 bg-pink-500 text-white py-1.5 px-3 rounded-md hover:bg-pink-700 duration-300'>Back</button>

          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item) => (
              <Cards key={item.id} item={item}/>
            ))
          }

        </div>
          </div>
      
    </>
  )
}

export default Course
