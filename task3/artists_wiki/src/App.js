import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Styles
import './App.css';
import 'highlight.js/styles/dracula.css';

// Components
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ExamplePage from './components/ExamplePage';
import SearchBar from './components/SearchBar';
import Spinner from './components/Spinner';

//helpers
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);

      const result = await axios(
        `http://theaudiodb.com/api/v1/json/1/search.php?s=${query}`
      );

      setItems(result.data.artists);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <>
      <Router>
        <Navbar />
        <div className='container my-container'>
          <SearchBar getQuery={(q) => setQuery(q)} />

          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Route
                exact
                path='/'
                component={() => (
                  <LandingPage
                    isLoading={isLoading}
                    items={items}
                    getQuery={(q) => setQuery(q)}
                  />
                )}
              />
            </>
          )}
          <>
            <Switch>
              <>
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/artist/:id' component={ExamplePage} />
              </>
            </Switch>
          </>
        </div>
      </Router>
    </>
  );
}

export default App;
