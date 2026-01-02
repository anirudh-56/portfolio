import {useEffect, useState, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import  Header  from './components/Header.jsx';
import  Profile  from './components/Profile.jsx';
import  Experience  from './components/Experience.jsx';
import  Projects  from './components/Projects.jsx';
import  Bottom from './components/Bottom.jsx';

import './App.css'

const App = () => {

    return (
    <>
    <Header />
    <Profile />
    <Experience />
    <Projects />
    <Bottom />
    </>
    );
}

export default App;