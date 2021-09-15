import styled from 'styled-components';
/*
    Este es mi componente teclado, donde luego tendrá como hijo a los botones, para ordenar los
    botones simplemente utilice el sistema de cuadriculas grid, luego le asigne espacios a la cuadricula 
    con template ror y colums, los metodos para add y equals simplemente me ayudan a agrandar el espacio que ocupan en el grid 
*/
const Keypad = styled.div`
    color: #78c2c5;
    display: grid;
    grid-template-row: repeat(5,1fr);
    grid-template-columns: repeat(4, 1fr);
    .add {
        grid-row: span 2;
    }
    .equals {
        grid-row: span 2;
    }
    .save {
        grid-column: span 2;
    }
    .save:active {
        color: #2b293d;
    }
`;

export default Keypad;
