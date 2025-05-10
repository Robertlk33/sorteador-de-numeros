function generateNumber() {

    const minInput = document.querySelector(".input-min").value;
    const maxInput = document.querySelector(".input-max").value;
    const mostrar = document.getElementById("mostrar");

    if (minInput === "" || maxInput === "") {
        mostrar.innerText = "boa sorte";
        return;
    }

    const min = Math.ceil(Number(minInput));
    const max = Math.floor(Number(maxInput));


    if (max > min) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("mostrar").innerText = result;

    }
    else { alert("O valor máximo deve ser maior que o valor mínimo") }
}