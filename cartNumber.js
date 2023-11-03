const botoes = document.querySelectorAll(".incrementButton");
const cartNumber = document.getElementById("num2");

for (const botao of botoes) {
  botao.addEventListener("click", function () {
    // Obtém o valor atual do span e converte para um número
    let currentValue = parseInt(cartNumber.textContent);

    // Incrementa o valor atual
    currentValue++;

    // Atualiza o texto do span com o novo valor
    cartNumber.textContent = currentValue;
  });
}
