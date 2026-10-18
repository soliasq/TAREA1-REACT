

import { useState } from 'react';
const Contador = () => {

    //TODO usar useState
    const [contador, setContador] = useState(0);
    //TODO crear una funcion para incrementar
    const handleDecrement = () => {
      if (contador>0){
         setContador(contador - 1); 
      }else {
            // Esto se ejecuta si el contador es 0 o menor
            alert("¡El contador ya está en 0! No puedes restar más.");
        }
       
    }

    //TODO crear una funcion para incrementar
    const handleIncrement = () => {
    setContador(contador + 1);
    }

    //TODO crear una funcion para incrementar
    const handleReset = () => {
      setContador(0);
    }

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Contador interactivo</h2>
      
      {/* 5. Aquí mostramos el valor real del contador */}
      <p style={{ fontSize: '30px', fontWeight: 'bold', margin: '20px 0' }} >{contador}</p>
      
      <div style={{ display:'flex', gap: '10px', justifyContent: 'center'}}>
        {/* 6. Los botones llaman a las funciones */}
        <button onClick={handleDecrement} style={btnStyle}>- Restar</button>
        <button onClick={handleIncrement} style={btnStyle}>+ Sumar</button>
        <button onClick={handleReset} style={btnStyle}>Reset</button>
      </div>
    </div>
  )
}

export default Contador

// 7. Estilos de los botones
const btnStyle = {
    padding: '10px 20px',
    backgroundColor: 'blue', 
    color: 'white', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer',
    fontSize: '16px'
}