const botao = document.querySelectorAll(".carrinho");
let precoTotal = 0;
const precoTotalDiv = document.querySelector(".precoTotal");

botao.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const item = event.target.closest(".item");
    const preco = item.querySelector(".preco").innerHTML;

    precoTotal += Number(preco.slice(2));
    precoTotalDiv.innerHTML = `Total do seu pedido: R$ ${precoTotal.toFixed(
      2
    )}`;
  });
});

const bota = document.querySelector(".confirmar");

bota.addEventListener("click", () => {
  if (precoTotal) {
    window.location.href = "com.html";
  }
});
