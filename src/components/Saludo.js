function Saludo(props) {
    //EN ESTE CODIGO PODEMOS DECLARAR VARIABLES 
    //SIN PROBLEMA
    var mensaje = "Hoy es viernes";
    const { nombre, edad } = props;

    return (<div>
    <h1>Estoy saludando un juernes!!!</h1>
    <h2>Mi primer React!!! {mensaje}</h2>
    <h2>Bienvenido/a {nombre} y su edad es {props.edad}</h2>
    </div>);
}

export default Saludo;