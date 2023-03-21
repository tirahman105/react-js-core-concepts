import logo from './logo.svg';
import './App.css';

const number = 1111;
const doctor = {name : 'Dr. Tareq', designation:'BDS, PGT, Lecture, PDC'}

const divStyle ={
  backgroundColor : 'white',
  color: 'black'
} 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h1>React App is here!</h1>
        </div>
          <p>{number}</p>
          <p style = {divStyle}>Name: {doctor.name}</p>
          <p>Designation: {doctor.designation}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


