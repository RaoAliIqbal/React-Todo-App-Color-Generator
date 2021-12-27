import logo from './logo.svg';
import './App.css';

const abc={
  color:'blue',
  fontSize:'30px'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={abc}>
          Wellcome
        </p>
      </header>
    </div>
  );
}

export default App;
