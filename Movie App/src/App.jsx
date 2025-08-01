import { Route, Routes } from 'react-router-dom';
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App()
{
  // const movieNumber = 1;

  return (
    /* <Text text ="Hello"> </Text>
      <Text text ="World"> </Text> */
    /* {movieNumber===1 ?
      (<MovieCard
        movie={{ title: "Interstellar", release_date: "2024" }}
      ></MovieCard>)
      :
      (<MovieCard
        movie={{ title: "Inception", release_date: "2025" }}
      ></MovieCard>)} */
    // <Home></Home>
    <MovieProvider>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          {/* <Route path="/" element={<Home />}></Route> */}
        </Routes>
      </main>
    </MovieProvider>
  );
}

// function Text({text})
// {
//   return (
//     <div>
//     <p>{text}</p>
//   </div>
//   );
// }

export default App