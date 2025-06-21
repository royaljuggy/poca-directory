import React from 'react';
import { Photo } from '../types';

// interface PhotoCardProps {
//     title: string;
//     description: string;
//     imagePath: string;
// }

type PhotoCardProps = {
  photo: Photo;
};

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
    const imageSrc = require(`../photos/sullyoon.jpg`);
    return (
        <div className="photo-card">
            <img src={imageSrc} alt={photo.title} />
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
        </div>
    );
};

export default PhotoCard;