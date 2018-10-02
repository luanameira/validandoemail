const input = document.querySelector("#newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener("click", function (event) {
    event.preventDefault();

    const span = document.createElement("span");
    const email = input.value;
    const enviar = document.querySelector(".news__form");
    let resposta = "";
    if (email.indexOf("@") == -1 || email.trim() === "" || email.trim() === null){
      resposta =   document.createTextNode("Email inválido");
     span.appendChild(resposta);
    span.classList.add("span");
    } else {
    resposta = document.createTextNode("Email cadastrado com sucesso");
    span.appendChild(resposta);
    span.classList.add("span");

    // document.querySelector(".news__label").appendChild("span")
}
enviar.insertBefore(span, input.parentNode);

botao.disabled = true;
});