import React from 'react';
import './App.css';
import Input from './Input';
function handleChange(name,value){

};

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <h2>Recupera tu contraseña</h2>  
        <img src= "logo azul.png" className="img1" alt = "." />
        <h4> ¿Cual es tu correo electronico?  </h4>
        <img src= "flecha atras.png" className="img2" alt = "." />
      
        <Input
attribute={{
id:'Correo electrónico',
name:'Correo electrónico',
type:'text',
placeholder:'Correo electrónico'
}}
handleChange={handleChange}
/>
        
      <button
         
         className="App-link"
         href="http://192.168.1.4:3000/"
         target="_blank"
         rel="noopener noreferrer"
       >
         
         
         Aceptar
         
         

       </button>

       

     </header>

   </div>
 );
}

export default App;
