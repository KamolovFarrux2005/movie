import React, { useState, useEffect } from 'react';

export const MovieContext = React.createContext()

const ContextMovies = ({children}) => {
    const [title, setTitle] = useState('Avengers')
    const [movies, setMovies] = useState([])
    const [page, setPage]=useState(1)
    const [type, setType]=useState('movie')
    const [loading, setLoading]= useState(false)
    async function getMovies(){
        let response = await fetch(`https://www.omdbapi.com/?apikey=3ceadec0&s=${title}&${type}&page=${page}&`)
        response = await response.json()
        setMovies(response)
    }
    useEffect(() => {
        getMovies()
    }, []);

    return (
        <MovieContext.Provider value={{title, setTitle, movies, setPage, setType, type, loading}}>
            <MovieContext.Consumer>
                {
                    () => children
                }
            </MovieContext.Consumer>
        </MovieContext.Provider>
    );
}

export default ContextMovies;
