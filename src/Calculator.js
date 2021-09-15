import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Display from './Display';
import Keypad from './Keypad';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSave, faClock, faTrashAlt} from '@fortawesome/free-regular-svg-icons';
/* eslint no-eval: 0 */
//Lo de la linea 8 es para evitar que se muestre en consola el alerta del uso de Eval

const Calculator = ({ value = ''}) => {
    /*
    El valor por defecto de la propiedad de la calculadora lo deje en un string vacio, debido al uso que le voy
    a dar en las siguientes funciones, opte usar el hook useState para al menos mostrar en el display 
    los valores de los botones y tambien el poder limpiar el display 
    */
    const [display, setDisplay] = useState( value );
    /*
    /*
    Aca implemente la limpieza de la pantalla con una arrow function, donde seteo el valor
    al valor por defecto de la props de la calculadora
    */
    const clearAll = () => setDisplay(value);
    /*
    Aca utilizo target.id
    para que se pueda visualizar la data en pantalla, en este caso los simbolos tanto de los numeros como los de las operaciones
    */
    const writeDisplay = (e) => {
        let symbol = (e.target.id);
        setDisplay(display + symbol);
    }
    //Funcion para borrar el valor guardado en localStorage
    const deleteMemorize = () => localStorage.clear();

    //Esta funcion simplemente setea la data en localStorage
    const setLocalStorage= () => {
        localStorage.setItem('display', display);
    }

    /* Esta funcion devuelve el valor guardado en localStorage, antes comprueba que si es null, no retorne nada, pero si
    hay un valor, que lo retorne */
    const getLocalStorage = () => {
        if (localStorage.getItem('display') == null){
            return;
        } else {
            setDisplay(localStorage.getItem('display'));
        }
    }
    //Esta funcion la utilizo para poder resolver las operaciones y si, existe algun error, poder manejarlo con el catch
    const result = () => {
        try {

            setDisplay(eval(display));

        } catch (error) {

            setDisplay('Operacion inválida')
            
            setTimeout(() => {
                setDisplay('')
            }, 500);
        }
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
                <Button onClick= { getLocalStorage } > <FontAwesomeIcon icon={ faClock } /> </Button>
                <Button onClick= { setLocalStorage } className='save'> <FontAwesomeIcon icon={ faSave } /> </Button>  
                <Button onClick= { clearAll }> <FontAwesomeIcon icon={ faTrashAlt } /> </Button>
                <Button onClick= { deleteMemorize }> M- </Button>
                <Button onClick= { writeDisplay } id="/"> / </Button>
                <Button onClick= { writeDisplay } id="*"> x </Button>
                <Button onClick= { writeDisplay } id="-"> - </Button>
                <Button onClick= { writeDisplay } id="7"> 7 </Button>
                <Button onClick= { writeDisplay } id="8"> 8 </Button>
                <Button onClick= { writeDisplay } id="9"> 9 </Button>
                <Button className='add' onClick= { writeDisplay } id="+"> + </Button>
                <Button onClick= { writeDisplay } id="4"> 4 </Button>
                <Button onClick= { writeDisplay } id="5"> 5 </Button>
                <Button onClick= { writeDisplay } id="6"> 6 </Button>
                <Button onClick= { writeDisplay } id="1"> 1 </Button>
                <Button onClick= { writeDisplay } id="2"> 2 </Button>
                <Button onClick= { writeDisplay } id="3"> 3 </Button>
                <Button onClick= { result } className='equals'> = </Button>
                <Button onClick= { writeDisplay } id="0"> 0 </Button>
                <Button onClick= { writeDisplay } id="."> . </Button>
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