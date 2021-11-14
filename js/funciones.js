//-------------------PRODUCTOS JSON
function Producto(id, nombre, tipo, imagen, precio) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.imagen = imagen;
    this.precio = precio;

}
function obtenerProductos() {
    fetch("../json/data.json")
        .then(respuesta => respuesta.json())
        .then(data => respuestaProductos(data));//funcion escrita abajo
}
function respuestaProductos(data) {
    for (const objeto of data) {
        productos.push(new Producto(objeto.id,
            objeto.nombre,
            objeto.tipo,
            objeto.imagen,
            objeto.precio));
    }
    mostrarProductos();//funcion escrita abajo
}
function mostrarProductos() {
    document.getElementById("productos");
    for (const producto of productos) {
        let contenido = document.createElement('div');
        contenido.classList.add("listaProductos");
        contenido.innerHTML = `<img class="imagenProducto" src="${producto.imagen}"> 
                                <p>${producto.nombre}${" "}${producto.tipo}</p>
                                <p>${producto.precio}</p>
                                <button id="${producto.id}" class="buttonAdd">Agregar</button>`;
        document.getElementById("productos").appendChild(contenido);
    }
}
//----------------------FORMULARIO---------------------
function Consulta(nombre, apellido, email, telefono, edad, consulta) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = telefono;
    this.edad = edad;
    this.consulta = consulta;

}
//GUARDAR DATOS DEL FORMULARIO EN LOCAL STORAGE
function enviarForm() {
    const formulario = document.getElementById("formContacto");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputs = document.getElementsByClassName("form-control");
        const nuevaConsulta = new Consulta (inputs[0].value,
                                            inputs[1].value,
                                            inputs[2].value,
                                            inputs[3].value,
                                            inputs[4].value,
                                            inputs[5].value,)
        localStorage.setItem("consultas", JSON.stringify(nuevaConsulta)); 
        Swal.fire('CONSULTA ENVIADA! EN BREVE ESTAREMOS EN CONTACTO') //Alerta de la página Sweet Alert 2
    })
}