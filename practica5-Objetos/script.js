//1 - 2
const objetillo = {
    nombre: "New Nintendo 2DS XL",
    precio: 210,
    stock: 3,
    hayStock() {
        return this.stock > 0;
    }
}

// 3
const objetos = [
    {
        nombre: "New Nintendo 3DS",
        precio: 210,
        stock: 3,
        hayStock() {
            return this.stock > 0;
        }
    },
    {
        nombre: "Nintendo Switch",
        precio: 300,
        stock: 5,
        hayStock() {
            return this.stock > 0;
        }
    },
    {
        nombre: "Nintendo Switch Lite",
        precio: 200,
        stock: 0,
        hayStock() {
            return this.stock > 0;
        }
    }
];

//4
console.log(objetos.filter(objeto => objeto.hayStock()))

//5
const nombres = objetos.map(objeto => objeto.nombre)
console.log(nombres);


//6
const nuevoProducto = {...objetos[2], precio: 140}
console.log(nuevoProducto);