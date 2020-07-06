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
          {edit ? (
            <div>
              <EditPage toggleEdit={toggleEdit} item={item} />
            </div>
          ) : (
            <ArtistCard item={item} toggleEdit={toggleEdit} />
          )}
        </>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </>
  );
}
