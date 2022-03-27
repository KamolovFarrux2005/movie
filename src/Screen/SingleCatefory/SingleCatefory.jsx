import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Pagination, Stack } from "@mui/material";
import { MovieContext } from "../../Context/ContextMovies";
import Footer from "../../components/Footer/Footer";
import Moviecard from "../../components/MovieCard/MovieCard";

const SingleCategory = () => {
  const { title } = useContext(MovieContext);
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  async function getMovies() {
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=ba6f707d&s=${title}&page=${pageNumber}`
    );
    res = await res.json();
    setMovies(res);
  }
  useEffect(() => {
    getMovies();
  }, [pageNumber]);

  return (
    <div>
      <div>
        {movies.Search ? (
          <Moviecard movies={movies.Search} />
        ) : (
          <h4 className="founded">Movies are not founded </h4>
        )}
        {Math.ceil(movies.totalResults / 10) > 1 ? (
          <Stack spacing={2}>
            <Pagination
              className="pagination"
              onChange={(event, page) => {
                setPageNumber(page);
                window.scrollTo(0, 0);
              }}
              count={Math.ceil(movies.totalResults / 10)}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SingleCategory;
