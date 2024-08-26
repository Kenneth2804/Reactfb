import React,{useState} from 'react'

export default function LikeButton() {

    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const handleLike = () => {
    setLiked(!liked);
    setLikesCount(likesCount + (liked ? -1 : 1));
      };



  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <button
      onClick={handleLike}
      style={{
        backgroundColor: liked ? 'red' : 'gray',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {liked ? '❤️ Me gusta' : '🤍 Me gusta'}
    </button>
    
    <p style={{ fontSize: '18px', marginTop: '10px', color:'white' }}>
        {likesCount} {likesCount === 1 ? 'Me gusta' : 'Me gustas'}
      </p>


    </div>
  )
}
