import React, { useEffect, useState } from 'react';

// Styles
import './App.css';

// Components
import Navbar from './components/Navbar';
import ArtistsList from './components/ArtistsList';
import ArtistProfile from './components/ArtistProfile';
import imagesxx from './assets/no-image.jpg';
//helpers
import axios from 'axios';
import SearchBar from './components/SearchBar';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      console.log(query);

      const result = await axios(
        `http://theaudiodb.com/api/v1/json/1/search.php?s=${query}`
      );

      console.log(result.data);

      setItems(result.data.artists);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);
  return (
    <>
      <Navbar />
      <>
        <div class='container'>
          <SearchBar getQuery={(q) => setQuery(q)} />
          <ArtistsList isLoading={isLoading} items={items} />
        </div>
      </>
    </>
  );
}

export default App;
