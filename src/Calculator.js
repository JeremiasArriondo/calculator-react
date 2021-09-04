import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = ({ value ="" }) => {
    /*
    El valor por defecto de la propiedad de la calculadora lo deje en un string vacio, debido al uso que le voy
    a dar en las siguientes funciones, opte usar el hook useState para al menos mostrar en el display 
    los valores de los botones y tambien el poder limpiar el display 
    */
    const [display, setDisplay] = useState( value );
    /*
    Aca implemente la limpieza de la pantalla con una arrow function, donde seteo el valor
    al valor por defecto de la props de la calculadora
    */
    const clearAll = () => setDisplay(value);
    /*
    Investigando sobre como obtener el valor de un boton, pude dar con una manera que utilizando target.id, el cual implemente
    para que se pueda visualizar algo en pantalla, en este caso los simbolos tanto de los numeros como los de las operaciones
    */
    const writeDisplay = (e) => {
        let symbol = (e.target.id);
        setDisplay(display + symbol);
    }

    return (
    <>
        {/*Utilizo la version corta de fragments <> y </> para poder devolver varios elementos*/}
        <h1> Calculadora Jeremias Arriondo </h1>
        {/*
            Decidi utilizar un componente DivCalc donde ingreso dos componentes mas, 
            el componente display junto al componente Keypad desde el cual tengo todos los componentes boton.
            Elegí esta manera porque permite que, aunque a pesar de la cantidad de componentes dentro de Keypad, el esquema se
            pueda ver entendible y ordenado.
        */}
        <DivCalc>
            <Display>
                {display}
            </Display>
            <Keypad>
                <Button onClick= { clearAll }> C </Button>
                <Button onClick= {writeDisplay} id="/"> / </Button>
                <Button onClick= {writeDisplay} id="*"> x </Button>
                <Button onClick= {writeDisplay} id="-"> - </Button>
                <Button onClick= {writeDisplay} id="7"> 7 </Button>
                <Button onClick= {writeDisplay} id="8"> 8 </Button>
                <Button onClick= {writeDisplay} id="9"> 9 </Button>
                <Button className='add' onClick= {writeDisplay} id="+"> + </Button>
                <Button onClick= {writeDisplay} id="4"> 4 </Button>
                <Button onClick= {writeDisplay} id="5"> 5 </Button>
                <Button onClick= {writeDisplay} id="6"> 6 </Button>
                <Button onClick= {writeDisplay} id="1"> 1 </Button>
                <Button onClick= {writeDisplay} id="2"> 2 </Button>
                <Button onClick= {writeDisplay} id="3"> 3 </Button>
                <Button className='equals'> = </Button>
                <Button onClick= {writeDisplay} id="0"> 0 </Button>
                <Button onClick= {writeDisplay} id="."> . </Button>
                <Button> {null} </Button>
            </Keypad>
        </DivCalc>
    </>
    );
}
/* 
    Aca tambien utilice styled componet para poder editar el valor del DivCalc, en el cual encapsule todos los demas
    componentes de la calculadora
*/
const DivCalc = styled.div`
    width: 400px;
    hight: 300px;
    margin: 0 auto;
    padding: 0.25em 1em;
    }
`;

export default Calculator;

/*JeremiasArriondo*/