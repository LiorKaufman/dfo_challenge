import React, { useState } from 'react';

// Components
import ArtistCard from './ArtistCard';
import Spinner from './Spinner';
import EditPage from './EditPage';

export default function ExamplePage(props) {
  const [edit, setEdit] = useState(false);

  const item =
    props.location.artistProps !== undefined
      ? props.location.artistProps.artist
      : null;
  const toggleEdit = () => {
    setEdit(!edit);
  };
  return (
    <>
      {item ? (
        <>
          <div className='my-container'>
            {edit ? (
              <EditPage toggleEdit={toggleEdit} item={item} />
            ) : (
              <ArtistCard item={item} toggleEdit={toggleEdit} />
            )}
          </div>
        </>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </>
  );
}
