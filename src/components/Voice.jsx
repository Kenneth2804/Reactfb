import React, {useState, useRef} from 'react'

export default function Voice() {
    const [message, setMessage] = useState('');
    const recognitionRef = useRef(null);

const startRecognition = () =>{

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        console.error('Speech Recognition API not supported in this browser.');
        return;
      }

recognitionRef.current = new SpeechRecognition();
recognitionRef.current.lang = 'es-ES';
recognitionRef.current.continuous = false;
recognitionRef.current.interimResults = false;

recognitionRef.current.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setMessage(transcript);
  };

  recognitionRef.current.onerror = (event) => {
    console.error('Error during recognition:', event.error);
  };

  recognitionRef.current.start();


}
    return (
    <div>
  <button onClick={startRecognition}>Hablar</button>
     
     <p>{message}</p>    
    </div>
  )
}
