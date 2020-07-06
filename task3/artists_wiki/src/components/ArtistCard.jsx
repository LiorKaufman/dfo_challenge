import React, { useState, useEffect } from 'react';

// helpers
import axios from 'axios';
import Spinner from './Spinner';
import noImage from '../assets/no-image.jpg';

export default function ArtistCard({ item, toggleEdit }) {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);

      const result = await axios(
        `http://theaudiodb.com/api/v1/json/1/album.php?i=${item.idArtist}
        `
      );

      const theAlbums = result.data.album === null ? [] : result.data.album;

      setAlbums(theAlbums);
      setIsLoading(false);
    };

    fetchItems();
  }, [item]);
  return (
    <div className='artist-card'>
      <div className='center'>
        <img
          className='artist-card-img'
          src={item.strArtistThumb ? `${item.strArtistThumb}/preview` : noImage}
          alt=''
        />

        <button className='btn btn-success m-2' onClick={toggleEdit}>
          {' '}
          Edit
        </button>
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

      {isLoading && albums.length > 0 ? (
        <Spinner />
      ) : (
        <>
          <h3>Albums:</h3>
          <div className='container albums-list'>
            {albums !== null &&
              albums.map((album) => (
                <div key={album.idAlbum} className='album-card'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <img
                      src={
                        album.strAlbumThumb
                          ? `${album.strAlbumThumb}/preview`
                          : noImage
                      }
                      alt='album'
                      className='album-img'
                    />
                    <div className='album-text'>
                      <h5>
                        <strong>{album.strAlbum}</strong>
                      </h5>
                      <span>Year Released: {album.intYearReleased}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
