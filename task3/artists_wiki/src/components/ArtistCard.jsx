import React, { useState } from 'react';

// helpers

export default function ArtistCard({ item }) {
  return (
    <div>
      <div class='col-lg-9'>
        <div class='card mt-4'>
          <div
            className='row no-gutters overflow-auto'
            style={{ maxHeight: '220px' }}
          >
            <div className='col-md-4'>
              <img
                className='card-img img-fluid'
                src={`${item.strArtistThumb}/preview`}
                alt=''
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h3 className='card-title'>{item.strArtist}</h3>
                <h5>Style: {item.strStyle}</h5>
                <p className='card-text'>{item.strBiographyEN}</p>
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
        </div>
      </div>
    </div>
  );
}
