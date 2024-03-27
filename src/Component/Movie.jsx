import React from 'react'

const Movie = ({title ="what the fuck",
 description ="dont fucking ask that",
  posterURL ="https://cdn.hswstatic.com/gif/gettyimages-154158911.jpg",
  rating = 4,
}) => {
  return (
    <div className="flex border flex-col w-full justify-center text-center gap-4 ">
        <div className="w-full aspect-square border">
        <img src={posterURL} alt={title}/>
        <h2 className="text-xl">{title}</h2>
        <p>{description}</p>
        <p>Rating: {rating}</p>

        </div>
    </div>
  )
}

export default Movie