import React, { useState } from 'react';

// helpers
import { getArtistName } from '../helpers/apiCalls';
import uuid from 'react-uuid';
import ArtistCard from './ArtistCard';
import ArtistItem from './ArtistItem';

export default function ArtistsList({ items, isLoading }) {
  const [searchForm, setSearchForm] = useState({
    name: '',
  });

  const [artistsList, setArtistsList] = useState([]);

  const onChange = (e) =>
    setSearchForm({ ...searchForm, [e.target.name]: e.target.value });

  const onClick = async (e) => {
    e.preventDefault();
    const artistsList = await getArtistName(searchForm.name);
    console.log(artistsList);

    setArtistsList(artistsList.artists);
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <h5>Loading...</h5>
        </div>
      ) : items === null ? (
        <div>Did not find an artist with that name...</div>
      ) : (
        <div>
          {items.map((item) => (
            <ArtistCard key={uuid()} item={item} />
          ))}
          {items.map((item) => (
            <ArtistItem key={uuid()} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
{
  /* <div>
      <h3>Search for an Artist and See What Others are Saying!</h3>
      <button onClick={onClick}>get name</button>
      <div>
        <input
          type='text'
          name='name'
          onChange={onChange}
          value={searchForm.name}
          placeholder='Name'
        />
        {artistsList &&
          artistsList.map((artist) => <ArtistCard artist={artist} />)}
      </div>
    </div> */
}
