import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

const DisplayAlbum = () => {

    const {id} = useParams()
    console.log()

  return (
    <>
     <Navbar />
    </>
  )
}

export default DisplayAlbum;