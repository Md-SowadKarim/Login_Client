import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
     <div className='text-center'>
            <h1 className='text-[400px] font-bold'>
                404
            </h1>

            <h2 className='text-5xl font-bold'>
                NOT FOUND
            </h2>
         

        </div>
        <Link
            to="/"><button className='btn btn-primary m-4 bg-blue-500'>Go Home</button>
          </Link>
    </div>
  )
}

export default Error
