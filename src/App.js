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
      <Person name="Dr. Tareq" profession="Dental Surgeon" ></Person>
      <Person name="Anonna Ferdaus" profession="software Engineer"></Person>
      <h3>New Component</h3>
      <Department email="dr.tareq8092@gmail.com" ></Department>
      <Department email="tirahman105@gmail.com" ></Department>
    </div>
  );
}

function Person(props){
  return (
    <div className="person">
          <h1>{props.name}</h1>
          <p>{props.profession}</p>
        </div>
  )
}

function Department(props){
  return(
    <div className="container">
      <h2>{props.email}</h2>
    </div>
  )
}


export default App;


