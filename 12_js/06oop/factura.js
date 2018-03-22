function factura(nombre, direccion, telefono, nif, nombreCliente, DireccionCliente, telefonoCliente, dniCliente, producto, precio, cantidad){

    this.empresaNombre = nombre,
    this.empresaDireccion = direccion,
    this.empresaTelefono =telefono,
    this.empresaNIF=nif,
    this.clienteNombre = nombreCliente,
    this.clienteDireccion = DireccionCliente,
    this.clienteTelefono = telefonoCliente,
    this.clienteDni =dniCliente
    this.producto=producto,
    this.productoPrecio=precio,
    this.productoCantidad=cantidad
}
let factura1 =new factura(
    'empresa2.',
    'calle 57',
    '919191919',
    'C12345678',
    'Juan',
    'calle3',
    '910000000',
    '1234567x',
    'ordenadores',
    '100',
    '9'
)
console.log(factura1)




