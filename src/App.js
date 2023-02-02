import { useState } from 'react';
import MovieList from './MovieList';
import Counter from './Counter';
import './App.css'

function App() {
  const DUMMY_MOVIE_DATA = [
    {
      id: 1,
      title: "Home Sweet Home Alone",
      overview: "After being left at home by himself for the holidays, 10-year-old Max Mercer must work to defend his home from a married couple who tries to steal back a valuable heirloom.",
      poster_path: "/fP3VvqUjEBjawxZHL4sYCq2ZdJD.jpg",
      popularity: 46.486,
      release_date: "2021-11-12"
    },
    {
      id: 2,
      title: "Home Alone 2: Lost in New York",
      backdrop_path: "/gxwYr2jtBzMvp85lbCr9ooJMFPc.jpg",
      overview: "Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dad's credit card—despite problems from a clerk and meddling bellboy. But when Kevin runs into his old nemeses, the Wet Bandits, he's determined to foil their plans to rob a toy store on Christmas Eve.",
      popularity: 108.321,
      poster_path: "/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg",
      release_date: "1992-11-19",
    },
    {
      id: 3,
      title: "Home Alone 3",
      backdrop_path: "/zG8CP8iRhLo7BNBsma6GfP6gkRF.jpg",
      overview: "9-year-old Alex Pruitt is home alone with the chicken pox. Turns out, due to a mix-up among nefarious spies, Alex was given a toy car concealing a top-secret microchip. Now Alex must fend off the spies as they try to break into his house to get it back.",
      popularity: 31.313,
      poster_path: "/6uOadrCfle0n2LOOxHbgWEdnrm2.jpg",
      release_date: "1997-12-12",
    },
    {
      id: 4,
      title: "Home Alone 4",
      backdrop_path: "/6gvocf4kU9qJyUVZEDveOtLkaMu.jpg",
      overview: "Kevin McCallister's parents have split up. Now living with his mom, he decides to spend Christmas with his dad at the mansion of his father's rich girlfriend, Natalie. Meanwhile robber Marv Merchants, one of the villains from the first two movies, partners up with a new criminal named Vera to hit Natalie's mansion.",
      popularity: 33.091,
      poster_path: "/lL2Ri3PHs9V1ot3V8ZUvrtFgj9h.jpg",
      release_date: "2002-11-03",
    }
  ]

  return (
    <div>
      <div className='count_container'>
        <Counter />
      </div>
      <MovieList movieItems={DUMMY_MOVIE_DATA} />
    </div>
  );
}

export default App;
