import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
    const [currentTab, setCurrentTab] = useState('about');

    const tabRender = () => {
        switch (currentTab) {
            case 'contact':
                return <Contact />;
            default:
                return null;
        }
    };
    return (
        <div>
            <div>
                <header
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                ></header>
            </div>
            <div>
                <main></main>
            </div>
            <div>
                <footer></footer>
            </div>
        </div>
    );
}

export default App;
