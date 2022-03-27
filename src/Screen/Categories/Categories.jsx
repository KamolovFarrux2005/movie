import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MovieContext } from '../../Context/ContextMovies';
import Footer from '../../components/Footer/Footer';
import Moviecard from '../../components/MovieCard/MovieCard';


const CategoriesPage = () => {
    const title = 'Run'
    const [movies, setMovies]=useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const {type} = useContext(MovieContext)

    async function getMovies() {
        let res = await fetch(`https://www.omdbapi.com/?apikey=ba6f707d&s=${title}&page=${pageNumber}`)
        res = await res.json()
        setMovies(res)
    }
    useEffect(() => {
        getMovies()
    }, [pageNumber]);

    return (
        <div>
            <Moviecard movies={movies.Search} movieTitle={title} movieType={type}  />
            <Footer />

            <div>
           
            </div>
        </div>
    );
}

export default CategoriesPage;
