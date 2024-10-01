import Toggle from './components/form/Toggle/Toggle';
import './App.css';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <Toggle handleToggle={() => console.log('toggle')} testIdPrefix="asdf"/>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
