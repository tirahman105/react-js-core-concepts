import logo from './logo.svg';
import './App.css';

const number = 1111;
const doctors = [
  {name : 'Dr. Tareq', designation:'BDS, PGT, Lecture, PDC'},
  {name : 'Dr. Riad', designation:'BDS, PGT, Senior Lecture, PDC'},
  {name : 'Dr. Farid', designation:'BDS, FCPS, Professor, PDC'},
  {name : 'Dr. Mithila', designation:'BDS, PGT, Lecture, PDC'}
]

const divStyle ={
  backgroundColor : 'white',
  color: 'black'
} 

function App() {
  const names = ['Tareq', 'Anonna', 'Tahsin', 'Porag', 'Nuha']
  return (
    <div className="App">

      {
        names.map(name => <Person name={name}></Person>)
      }

      {
        doctors.map(doctor => <Department name={doctor.name}></Department>)
      }


      {/* <Person name="Dr. Tareq" profession="Dental Surgeon" ></Person>
      <Person name="Anonna Ferdaus" profession="software Engineer"></Person> */}
      <h3>New Component</h3>
      {/* <Department email="dr.tareq8092@gmail.com" ></Department>
      <Department email="tirahman105@gmail.com" ></Department> */}
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
      <h2>{props.name}</h2>
    </div>
  )
}


export default App;


