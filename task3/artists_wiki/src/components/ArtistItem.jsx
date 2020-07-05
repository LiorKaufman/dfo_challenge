import React, { useState } from 'react';
// transform: rotateY(180deg);

const ArtistItem = ({ item }) => {
  const [flip, setFlip] = useState(true);

  const onClick = () => {
    console.log(flip);

    setFlip(!flip);
  };

  return (
    <div className='my-card' onClick={() => onClick()}>
      <div className='my-card-inner'>
        {flip ? (
          <div className='my-card-front'>
            <img src={item.strArtistThumb} alt='' />
          </div>
        ) : (
          <div className='my-card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {item.strArtist}
              </li>
              <li>
                <strong>Nickname:</strong> {item.strArtist}
              </li>
              <li>
                <strong>Birthday:</strong> {item.strArtist}
              </li>
              <li>
                <strong>Status:</strong> {item.strArtist}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistItem;
