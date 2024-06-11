const button = document.querySelectorAll('.carrinho');
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