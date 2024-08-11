import React, {useState} from 'react'

export default function YoutubePlayer({videoId}) {

    const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ textAlign: 'center' }}>
         <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&mute=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video Player"
      />
      
      <div>
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pausa' : 'Reproducir'}
        </button>
      </div>


    </div>
  )
}
