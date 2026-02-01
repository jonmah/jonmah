import { useState } from 'react';

import Toggle from './components/form/Toggle/Toggle';
import Taskbar from './components/Taskbar/Taskbar';
import './App.css';
import './styles/variables.css';
import './styles/theme-dark.css';
import './styles/theme-light.css';

export default function App() {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const handleIsDarkModeToggle = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<main className="content" data-theme={isDarkMode ? 'dark' : 'light'}>
			<h1>Jon</h1>
			<Toggle
				handleToggle={handleIsDarkModeToggle}
				isOn={isDarkMode}
				testIdPrefix="app-theme-toggle"
			/>
			<p>Please listen</p>
			<Taskbar />
		</main>
	);
}
