import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../../Context/ContextMovies';

import Footer from '../../components/Footer/Footer';
import Videoplayer from '../../components/VideoPlayer/VideoPlayer';
import Moviecard from '../../components/MovieCard/MovieCard';

const SinglePage = () => {
    const {movies} = useContext(MovieContext)
    const {title} = useContext(MovieContext)
    const {type} = useContext(MovieContext)


    return (
        <div>
            <Videoplayer src="https://www.dailymotion.com/video/x2mnmoy" />
            <Moviecard movies={movies.Search} title={title} type={type}/>
            
            <Footer />
        </div>
    );
}

export default SinglePage;
