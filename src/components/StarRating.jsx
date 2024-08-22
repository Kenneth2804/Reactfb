import React, {useState} from 'react'

export default function StarRating({ totalStars = 5 }) {

    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
      setRating(rate);
    };

  return (
    <div>
{[...Array(totalStars)].map((_, index) => (
   <span
    key={index}
    onClick={() => handleRating(index + 1)}
    style={{
      cursor: 'pointer',
      color: index < rating ? '#ffd700' : '#ccc',
      fontSize: '2rem'
    }}
        >
     ★
 </span>
      ))}
        <p style={{color:'white'}}>
        Rating: {rating} / {totalStars}
        </p>
      
    </div>
  )
}
