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
      <Parson name= "Shakim al Hasan" job = "crickter"></Parson>
      <Parson name= "Omorsani" job = "Nayok"></Parson>
      <Parson name= "Mousumi" job = "Nayka"></Parson>
     
      <h1>Friend list</h1>
      <Friend name = "Shohag Vai" age ="33" status ="married"></Friend>
      <Friend></Friend>
      





      {/* <header className="App-header">
      <div className="container">
         <h1>Hello World</h1>
         <h4>I am here</h4>
         <p>Number:{3333+num}</p>
         <p style={singerStyle}>Name:{singer.name} {singer.job}</p>
         <p style={{color:'tomato', backgroundColor:'white'}}>Name:{singer2.name} {singer2.job}</p>
      </div>
      </header> */}
    </div>
  );
}

function Parson(props){
  return (
    <div className='person'>
     <div className='info'> 
     <h2>Name:{props.name}</h2>
      <p>Professors: {props.job}</p>
      </div>
    
    </div>
  )
}


function Friend(props){
  return(
    <div className='info'>
      <h1>Name: {props.name}</h1>
      <h6>Age: {props.age}</h6>
      <h6>Status: {props.status}</h6>
    </div>
  )
}

export default App;
