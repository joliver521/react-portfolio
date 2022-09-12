import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
    const [currentTab, setCurrentTab] = useState('about');

    const tabRender = () => {
        switch (currentTab) {
            case 'about':
                return <About />;
            case 'portfolio':
                return <Portfolio />;
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
                <main>{tabRender()}</main>
            </div>
            <div>
                <footer></footer>
            </div>
        </div>
    );
}

export default App;
