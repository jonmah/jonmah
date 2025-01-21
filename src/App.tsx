import { useState } from 'react';

import Toggle from './components/form/Toggle/Toggle';
import './App.css';
import './styles/variables.css'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleIsDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="content" data-theme={isDarkMode ? 'dark' : 'light'}>
      <h1>Rsbuild with React</h1>
      <Toggle handleToggle={handleIsDarkModeToggle} isOn={isDarkMode} testIdPrefix="App-theme"/>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

