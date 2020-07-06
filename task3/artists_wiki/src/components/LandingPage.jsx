import React from 'react';

import ArtistsList from './ArtistsList';
import Spinner from './Spinner';

export default function LandingPage({ isLoading, items }) {
  return (
    <>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <ArtistsList isLoading={isLoading} items={items} />
        )}
      </div>
    </>
  );
}
