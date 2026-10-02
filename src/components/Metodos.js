function Metodos() {
    const mostrarMensaje = () => {
        console.log("Mostrando mensaje");
    }
    return (<div>
        <h2>Ejemplo de métodos React</h2>
        {mostrarMensaje()}
        <button onClick={ () => mostrarMensaje() }>Pulsar...</button>
    </div>)
}

export default Metodos;