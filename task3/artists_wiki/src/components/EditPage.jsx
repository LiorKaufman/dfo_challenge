import React from 'react';

import noImage from '../assets/no-image.jpg';

export default function EditPage({ item }) {
  return (
    <div>
      <div className='artist-card'>
        <div className='center'>
          <img
            className='artist-card-img'
            src={
              item.strArtistThumb ? `${item.strArtistThumb}/preview` : noImage
            }
            alt=''
          />
        </div>

        <div className='artist-card-body'>
          <h3 className='artist-card-header'>Artist Name: {item.strArtist}</h3>
          <p>
            <strong>Bio:</strong> {item.strBiographyEN}
          </p>

          <span>Disbanded: </span>
          <span
            className={
              item.strDisbanded === 'Yes'
                ? 'text-danger'
                : item.strDisbanded === 'No'
                ? 'text-success'
                : 'text-warning'
            }
          >
            {Boolean(item.strDisbanded) ? item.strDisbanded : 'Unknown'}
          </span>
        </div>
      </div>
    </div>
  );
}
