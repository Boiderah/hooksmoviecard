import React from 'react'
import movie from '../data'
import Movie from './Movie'

const Movielist = ({list}) => {
  return (
    <div className=" grid grid-cols-4">
        {list.map((movie, index) => (
            <Movie key={index} title={movie.title} description={movie.description} postalURL={movie.postalURL} rating={movie.rating} />
        ))}
    </div> 

  )
}

export default Movielist