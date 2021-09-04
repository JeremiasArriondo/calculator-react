import styled from 'styled-components';
/*
    Para crear el componente del boton, utilicé styled-component, busque que el componente se parezca lo mas posible al
    ejemplo del trabajo practico, utilizando los colores mas parecidos al del ejemplo.
    Añadi ademas un hover para cuando esté sobre el boton se vuelva mas oscuro.
*/
const Button = styled.button`
    font-size: 2em;
    display: inline-block;
    background-color: #cad2c5 ;
    color: #7c6f6f;
    border: 1px solid #c0c7bb;

    &:hover {
        background-color: #c0c7bb;
    }
    `;

export default Button;
