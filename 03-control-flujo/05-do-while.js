// cuales son los numeros pares

// do  {

// } while (condicion)

let i = 0;

do  {
    if ( i%2 == 0 ) {
        console.log('Numero par', i);
    }
    console.log(i);
    i++;
} while ( i < 10 );

console.log('Fuera del while');