import styled from 'styled-components';
/*
    Para crear el componente del display, utilice styled componentes
    Utilice overflow y word-wrap para que no se desborde el contenido del div
*/
const Display = styled.div`
    align-items: center;
    background-color: #2b293d;
    display:flex;
    font-size: 36px;
    justify-content: flex-end;
    min-height: 2em;
    overflow:hidden;
    padding-right: 4px;
    text-align: right;
    word-wrap: break-word;
`;

export default Display;
