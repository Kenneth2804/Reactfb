import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Todolist from './components/Todolist';
import Timer from './components/Timer';
import Country from './components/Country';
import Imagen from './components/Imagen';
import Calculadora from './components/Calculadora';
import Toggle from './components/Toggle';
import RadioButtonGroup from './components/RadioButtonGroup';
import Login from './components/Login';
import Switch from './components/Switch';
import Contador from './components/Contador';
import Alert from './components/Alert';
import Box from "./components/Box"
import QuieresSer from './components/QuieresSer';
import Voice from './components/Voice';
import Searchbar from './components/Searchbar';
import Navegador from './components/Navegador';
import Ruleta from './components/Ruleta';
import CambioTema from './components/CambioTema';
import Clima from './components/Clima';
import Music from './components/Music';
import Paint from './components/Paint';
import YouTubePlayer from './components/YoutubePlayer';
import Ahorcado from './components/Ahorcado';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
    
        <Route path='/' element={<Paint />} />
        <Route path='/a' element={<Ahorcado />} />
        <Route path='/login' element={<Login />} />
        <Route path='/country' element={<Country />} />
        <Route path='/list' element={<Todolist />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/imgs' element={<Imagen />} />
        <Route path='/calc' element={<Calculadora />} />
        <Route path='/toggle' element={<Toggle />} />
        <Route path='/radio' element={<RadioButtonGroup />} />
        <Route path='/switch' element={<Switch />} />
        <Route path='/contar' element={<Contador />} />
        <Route path='/alerta' element={<Alert />} />
        <Route path='/box' element={<Box />} />
        <Route path='/pregunta' element={<QuieresSer />} />
        <Route path='/voz' element={<Voice />} />
        <Route path='/search' element={<Searchbar />} />
        <Route path='/tema' element={<CambioTema />} />
        <Route path='/clima' element={<Clima />} />
        <Route path='/music' element={<Music />} />
        <Route path='/video' element={<YouTubePlayer videoId={"xvFZjo5PgG0"} />} />
   
      </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
