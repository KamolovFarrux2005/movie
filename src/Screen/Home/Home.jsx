import React, { useContext } from 'react';
import HomeVideo from '../../components/HomeVideo/HomeVideo';
import Moviecard from '../../components/MovieCard/MovieCard';
import BigPlayer from '../../components/BigPlayer/BigPlayer'
import Box from '../../components/Box/Box'
import Space from '../../components/Space/Space'
import Footer from '../../components/Footer/Footer'


import { MovieContext } from '../../Context/ContextMovies';

const Home = () => {
    const {movies} = useContext(MovieContext)
    const {title} = useContext(MovieContext)
    const {type} = useContext(MovieContext)
    
    return (
        <div>
            <HomeVideo movies={movies.Search} />
            <Moviecard movies={movies.Search} title={title} type={type}/>
            <BigPlayer movies={movies.Search}/>
            <Box movies={movies.Search} />
            <Space />
            <Footer />
        </div>
    );
}

export default Home;
