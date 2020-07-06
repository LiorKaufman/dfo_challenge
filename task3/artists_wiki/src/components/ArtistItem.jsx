import React from 'react';
import { Link } from 'react-router-dom';

import noImage from '../assets/no-image.jpg';

const ArtistItem = ({ item }) => {
  return (
    <>
      <Link
        to={{
          pathname: `/artist/${item.idArtist}`,
          artistProps: {
            artist: item,
          },
        }}
      >
        <div className='my-card'>
          <div className='my-card-inner'>
            <div className='my-card-front'>
              <img
                src={
                  item.strArtistThumb !== null
                    ? `${item.strArtistThumb}/preview`
                    : noImage
                }
                alt='artist'
              />
            </div>

            <div className='my-card-back'>
              <h4>Artist Name: {item.strArtist}</h4>
              <ul>
                <li>
                  <strong>Genre:</strong>{' '}
                  {item.strGenre === null || item.strGenre.length === 0
                    ? 'No data found'
                    : item.strGenre}
                </li>
                <li>
                  <strong>Style:</strong>{' '}
                  {item.strStyle === null || item.strStyle.length === 0
                    ? 'No data found'
                    : item.strStyle}
                </li>
                <li>
                  <strong>Bio:</strong>{' '}
                  {item.strBiographyEN === null || item.strBiographyEN === ''
                    ? 'No data found'
                    : `${item.strBiographyEN.substring(0, 75)}...`}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ArtistItem;
