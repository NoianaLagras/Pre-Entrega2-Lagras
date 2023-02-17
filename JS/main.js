
//                   Bienvenida al asistente de compras

let bienvenida = prompt("Bienvenido a nuestro asistente de compra , por favor ingrese su nombre")

if (bienvenida== "") {
    alert("No pudimos registrar el nombre ingresado, por favor, intentelo de nuevo")
}else {
    alert("Hola " + bienvenida + "! esperamos ayudarle a registrar su compra , aqui podra ver los productos en stock , seleccionar la cantidad de productos a comprar, la forma de pago y ver el precio del envio (recuerde que el envio es gratuito en las compras mayores a $10.000)")
}
                               // Carrito 
const carrito = []

                //Orden
const ordenPorTipo = () =>{
    productos.sort((a,b)=>{
        if (a.tipo < b.tipo){
        return -1;}
        if (a.tipo > b.tipo){
        return 1;
        }
        return 0;
    }
    )
ProductosEnStock ()
};


        //Alert de productos en stock 
const ProductosEnStock = () => {
    
    const listaProductos = productos.map(productos => {
        return " - "+productos.nombre + " $"+productos.precio
    })
    alert("Nuestra lista de productos en stock es la siguiente : " + "\n \n" + listaProductos.join("\n"))
    ComprarItems(listaProductos)
};
                           // Elegir productos y cantidades
const ComprarItems= (listaProductos) => {
    
    let cantidadAComprar= 0
    let agregarOtro= false
    
    do {
        let elegirProducto = prompt("Que producto desea comprar ?"+ "\n"+ listaProductos.join("\n"))
        cantidadAComprar= parseInt(prompt("Cuantas unidades  desea comprar ?"))
        
        const producto = productos.find(producto => producto.nombre.toLowerCase()=== elegirProducto.toLowerCase())
        
        if (producto){
            alert ("Ha seleccionado "+ producto.nombre)
            agregarACarrito (producto, cantidadAComprar, producto.id  )
        } else {
            alert("Ese producto no se encuentra disponible")
        }
        agregarOtro= confirm("Desea agregar otro producto a su compra ?")
    }while (agregarOtro);
    confirmarCompra ()
};
                        //Sumando al carrito 
const agregarACarrito = (producto, cantidadProd, IdProducto) => {

const productoRepetido= carrito.find(producto => producto.id === IdProducto)

if (!productoRepetido){
producto.cantidad+=cantidadProd
carrito.push(producto)
}else{
    productoRepetido.cantidad+= cantidadProd
}
};

 //confirmar detalles de la compra
const confirmarCompra = () => {
    const listaProductos= carrito.map (producto=>{
        return " - " + producto.nombre + " Por la cantidad de : " + producto.cantidad
    });
    const cantidad = carrito.reduce((acc,elemento) => acc + elemento.cantidad, 0)
    const precioItems = carrito.reduce ((acc, elemento)=> acc + elemento.precio*elemento.cantidad,0)
    alert("Su compra se compone por : "+ "\n"+listaProductos.join("\n\n") +("\n\n")+ " El valor de su compra es $" + precioItems)
    //              Metodo de pago 
    let precioTotal= 0
    
        let tipoDePago = prompt("Por favor ingrese su forma de pago \n 1 Para pagar en efectivo(Debito tiene descuento de 10%) \n 2 Para pagar con tarjeta de credito (tiene un recargo del 20%)")
         do {
        if(tipoDePago==1){
            alert(("El valor de su compra ahora es de : $")+(precioTotal=precioItems*0.90))
        }else if (tipoDePago==2){
            alert(("El valor de su compra ahora es de : $")+(precioTotal=precioItems*1.20))
        } else{
            alert("Ingrese una opcion valida por favor")}
        } while (tipoDePago!=1 && tipoDePago!=2);
        agregarCostoDeEnvio(precioTotal);
}
//                                   Precio con costo de envio
  const agregarCostoDeEnvio = (precioTotal) => {
    let precioTotalConEnvio = precioTotal+1500
    if (precioTotal <= 10000){
        alert("El costo de envío es de $1500 y se ha agregado al precio total de la compra. El valor total de su compra es de: $  "+precioTotalConEnvio)
    } else {
        alert ("Felicitaciones !... Su compra ha superado el monto de $10.000 el envio a domicilio es gratuito"+ "\n"+ "El valor total de su compra es de $"+ precioTotal)
    }
  alert ("Muchas gracias " + bienvenida +"!  por visitar nuestro asistente de compras de Neathur Shop")

    }

ordenPorTipo()
