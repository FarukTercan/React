import React from 'react';

function DogPhotos({ dogName }) {
  return (
    <div className="dog-main">
      <img className="dog-photo" alt={'photo-dog'} src={dogName} width="200" />
    </div>
  );
}

export default DogPhotos;
