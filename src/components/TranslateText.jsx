import React, {useState} from 'react'
import axios from 'axios'

export default function TranslateText() {

const [text, setText] = useState("");
const [translatedText, setTranslatedText] = useState("");

const translateText = async ()=>{

try {
    const response = await axios.get("https://api.mymemory.translated.net/get", {
        params: {
          q: text,
          langpair: "es|en",
        },
      });

      setTranslatedText(response.data.responseData.translatedText);
} catch (error) {
    console.error("Error translating text:", error);
}

}

    return (
    <div>
<h1 style={{color: 'white'}}>Traductor de Español a Inglés</h1>
   <textarea
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Escribe el texto aquí"
   />
     <button onClick={translateText}>Traducir</button>
     <h2>Texto Traducido:</h2>
     <p style={{color: 'white'}}>{translatedText}</p>
    </div>
  )
}
