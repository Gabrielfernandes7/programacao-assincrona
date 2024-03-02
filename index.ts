// conceitos de programação assíncrona
console.log("Hello via Bun!");

function firstFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Esperou 1000 milessegundos");
            resolve()
        }, 1000);
    });
}

async function secondFunction() {
    console.log("Iniciou");

   await firstFunction();

    console.log("Terminou");
}

secondFunction();

