import React from 'react';

// helpers
import uuid from 'react-uuid';
import ArtistItem from './ArtistItem';

export default function ArtistsList({ items, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <div>
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      ) : items === null ? (
        <div>Did not find an artist with that name...</div>
      ) : (
        <div>
          <section className='cards-list'>
            {items.map((item) => (
              <ArtistItem key={uuid()} item={item} />
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
