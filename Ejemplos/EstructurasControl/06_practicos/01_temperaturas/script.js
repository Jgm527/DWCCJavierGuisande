const temperaturas = [12, 25, 8, 30, 18, 5, 22];

for (const temp of temperaturas) {
    if (temp < 10) {
        console.log(temp + "°C - Frío");
    } else if (temp <= 20) {
        console.log(temp + "°C - Templado");
    } else {
        console.log(temp + "°C - Calor");
    }
}
