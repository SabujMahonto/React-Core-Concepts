// import logo from './logo.svg';
import './App.css';
const num = 3333;
const singer = {name: 'Dr.Mahfouz', job:'singer'}
const singer2 = {name: 'Eva Ramadan', job:'singer'}


// css style 
const singerStyle ={
  color : 'green',
  backgroundColor :'white',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <div className="container">
         <h1>Hello World</h1>
         <h4>I am here</h4>
         <p>Number:{3333+num}</p>
         <p style={singerStyle}>Name:{singer.name} {singer.job}</p>
         <p style={{color:'tomato', backgroundColor:'white'}}>Name:{singer2.name} {singer2.job}</p>
      </div>
      </header>
    </div>
  );
}

export default App;
