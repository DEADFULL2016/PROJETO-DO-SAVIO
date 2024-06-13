const botao = document.querySelectorAll('.carrinho');
let precoTotal = 0
const precoTotalDiv = document.querySelector('.precoTotal');

button.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const item = event.target.closest(".item");
        const preco = item.querySelector('.preco').innerHTML;

        precoTotal += Number(preco.slice(2));
        precoTotalDiv.innerHTML = `Total: R$ ${precoTotal.toFixed(2)}`
    });
})                                                                                                                

//popup
const button = document.querySelector(".detalhes");
const popup = document.querySelector(".popup-wrapper");

button.addEventListener("click", () => {
  popup.style.display = 'block';
});

popup.addEventListener("click", event => {
  const classNameOfClickedElement = event.target.classList[0];
  const classNames = ['popup-close', 'popup-wrapper', 'popup-link'];
  const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement);

  if (shouldClosePopup) {
    popup.style.display = 'none';
  }
});
