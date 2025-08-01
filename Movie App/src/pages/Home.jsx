import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
// import NavBar from "../components/NavBar";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);

  const[error, setError] = useState(null);

  const[loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
        try {
            const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
        } catch (err) {
            console.log(err)
            setError("Failed to load movies...")
        }
        finally {
            setLoading(false);
        }
    }
    loadPopularMovies()
  }, [])

//   const movies = [
//     { id: 1, title: "Dark", release_date: "2020" },
//     { id: 2, title: "F.R.I.E.N.D.S.", release_date: "2021" },
//     { id: 3, title: "ZNMD", release_date: "2022" },
//     { id: 4, title: "Oppenheimer", release_date: "2023" },
//   ];

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if(!searchQuery.trim())
        return

    if(loading)
        return

    setLoading(true)

    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    } catch (err) {
        console.log(err)
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }

    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

        {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading"> Loading... </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
