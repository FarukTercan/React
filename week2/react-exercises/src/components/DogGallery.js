import React, { useState, useEffect } from 'react';
import Button from '../components/button';
import DogPhoto from './DogPhoto';

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getDogPhoto() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();

    setDogPhotos([data, ...dogPhotos]);
    console.log(dogPhotos);
    setLoading(false);
  }

  return (
    <div className="dog-main2">
      <Button clickHere={() => getDogPhoto()} buttonText="Get a dog" />
      {dogPhotos.length === 0 && <h2>Get your first dog by clicking the button!</h2>}
      {loading === false && dogPhotos.map(dog => <DogPhoto dogName={dog.message} />)}
    </div>
  );
}

export default DogGallery;
