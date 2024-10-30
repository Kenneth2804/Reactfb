import React from 'react';

const VerticalGallery = () => {
    const images = [
        'https://via.placeholder.com/200x300',
        'https://via.placeholder.com/200x300',
        'https://via.placeholder.com/200x300',
        'https://via.placeholder.com/200x300',
        'https://via.placeholder.com/200x300'
    ];

    return (
        <div style={styles.galleryContainer}>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Gallery ${index}`} style={styles.image}/>
            ))}
        </div>
    );
};

const styles = {
    galleryContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#f0f0f0'
    },
    image: {
        width: '200px',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
    }
};

export default VerticalGallery;
