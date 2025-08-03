
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import ClassCounter from './components/ClassCounter';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <div className='counter-container'>
        <ClassCounter />
        <FunctionComponent/>
      </div>
    </div>
  );
}

export default App;
