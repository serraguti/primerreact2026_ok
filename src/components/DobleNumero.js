function DobleNumero() {
    const ejecutarDoble = (numero) => {
        let doble = numero * 2;
        console.log(doble);
    }

    let mensaje = "Hoy es viernes!!!";
    const cambiarMensaje = () => {
        console.log("Antes del cambio: " + mensaje);
        mensaje = "He cambiado a finde...";
        console.log("Después del cambio: " + mensaje);
    }

  var estilo = {
    color: "red",
    backgroundColor: "yellow"
  }

    return (<div>
        <h1 style={estilo}>Métodos doble número</h1>
        <h2 style={{color: "blue"}}>{mensaje}</h2>
        <button onClick={ () => cambiarMensaje()}>Modificar mensaje</button>

        <button onClick={ () => ejecutarDoble(7)}>Doble 7</button>
        <button onClick={ () => ejecutarDoble(77)}>Doble 77</button>
        <button onClick={ () => ejecutarDoble(204)}>Doble 204</button>
    </div>)
}

export default DobleNumero;