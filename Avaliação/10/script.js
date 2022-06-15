const favorito = "chocolate"

const sabor = window.prompt("Sabor: ")

//utilizando if e else

if (sabor === favorito) {
    window.alert(`Amo sorvete de ${favorito}!`)
}
else {
    window.alert("Prefiro outros sabores.")
}

//utilizando switch
switch (sabor) {
    case chocolate: window.alert(`Amo sorvete de ${favorito}!`); break;
    default: window.alert("Prefiro outros sabores.");
        break;
}