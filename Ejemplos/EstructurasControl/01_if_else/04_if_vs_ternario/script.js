const edad = 20;
let mayorEdad = false;

if (edad < 18) {
    mayorEdad = false;
} else {
    mayorEdad = true;
}
console.log(mayorEdad);

const mayorEdadTernario = edad < 18 ? false : true;
console.log(mayorEdadTernario);
