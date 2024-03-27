import React from 'react'
import Movie from './Movie'

const Filter = ({list, title, rating}) => {
  return (
    <div>
        <h1 className="">Filtered by {title && `title: ${title}`} {rating && `rating: ${rating}`}</h1>
        <div className=" grid grid-cols-4">
        {
            (title && rating) &&
        list.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase())).map((movie, index) => (
            <Movie key={index} title={movie.title} description={movie.description} postalURL={movie.postalURL} rating={movie.rating} />
            ))       
        }
        {
            (title && !rating) &&
        list.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase())).map((movie, index) => (
            <Movie key={index} title={movie.title} description={movie.description} postalURL={movie.postalURL} rating={movie.rating} />
            ))       

        }
        {
            (!title && rating) &&
        list.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase())).map((movie, index) => (
            <Movie key={index} title={movie.title} description={movie.description} postalURL={movie.postalURL} rating={movie.rating} />
            ))       

        }
    </div> 
    </div>
  )
}

export default Filter
