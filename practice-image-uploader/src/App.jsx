import React from 'react';
import './App.css';
import Advice from './components/Adivce'
import Quote from './components/Quote'
import ImageUpload from './components/ImageUpload';
import DateFact from './components/DateFact';

function App() {
    return (
        <div className="App">
            <h1>Memory App</h1>
            <ImageUpload />
            <Advice />
            <Quote />
            <DateFact />

        </div>
    );
}

export default App;