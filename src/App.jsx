import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movie from './Component/Movie'
import Movielist from './Component/Movielist'
import movie from './data'
import Filter from './Component/Filter'


function App() {
    const [movies, setMovies] = useState(movie)
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(0)
    const [newmovie, setNewMovie] = useState({
       title: '',
       description:'',
       posterURL: '',
       rating: 0,
    })
  
  
    // console.log(movies);
    // function handleTitle(e) {
    //   setTitle(e.target.value)
    //   setFilter(e.target.value)
    //   setRating('')
    // }
    // function handleRating(e) {
    //   setRating(e.target.value)
    //   setFilter(e.target.value)
    //   setTitle('')
    // }
    function handleSubmit(e) {
      e.preventDefault()
      setMovies([...movies, newmovie])
      setNewMovie({title: '', 
      description:'', 
      posterURL: '', 
      rating: 0})
      // setTitle('')
      // setRating('')
    }

  return ( 
    <>
    <div>
    <input type="text" placeholder='Filter by title' value={title} onChange={(e) =>setTitle(e.target.value)}/>
    <input type="number" placeholder='Filter by rating' value={rating} onChange={(e) =>setRating(e.target.value)}/>
    </div>
    <div>
      <p> Add Movie</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Title' value={newmovie.title} onChange={(e) => setNewMovie ({...newmovie, title: e.target.value})} />
        <input type="text" placeholder='Description' value={newmovie.description} onChange={(e) =>setNewMovie ({...newmovie, description: e.target.value})} />
        <input type="text" placeholder='paste image Url' value={newmovie.posterURL} onChange={(e) => setNewMovie ({...newmovie, posterURL: e.target.value})} />
        <input type="number" placeholder=' rating' value={newmovie.rating} onChange={(e) => setNewMovie ({...newmovie, rating: e.target.value})} />
        <button type="submit">ADD</button>
      </form>
    </div>
    {
      (rating || title)?<Filter list={movie} rating={rating} title={title}/> :<Movielist list={movies}/>
    }
    
    </>
  )
}

export default App
