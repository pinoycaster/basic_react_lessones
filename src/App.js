import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <a href='#' className='nav-item'>Homepage </a>
        <a href='#' className='nav-item'>About Me </a>
      </nav>
    </div>
  );
}

export default App;
