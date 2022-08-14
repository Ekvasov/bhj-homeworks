const change = Array.from(document.querySelectorAll(".product__quantity-control"));
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const cartProducts = document.querySelector(".cart__products");

change.forEach(element => {
  element.onclick = function() {
    if(element.className.includes("product__quantity-control_dec")) {
      if(Number(element.nextElementSibling.textContent) > 1) {
        element.nextElementSibling.textContent = Number(element.nextElementSibling.textContent) - 1;
      }
    } else element.previousElementSibling.textContent = Number(element.previousElementSibling.textContent) + 1;
  }
})

productAdd.forEach(element => {
  element.onclick = function() {
    let cartProduct = Array.from(document.querySelectorAll(".cart__product"));
    const amount = element.closest(".product__quantity").querySelector(".product__quantity-value").textContent;
    let findResult = cartProduct.find(item => item.dataset.id === element.closest(".product").dataset.id);

    if(findResult === undefined) {
      cartProducts.insertAdjacentHTML('beforeEnd',`<div class="cart__product" data-id="${element.closest(".product").dataset.id}">
                                                  <img class="cart__product-image" src="${element.closest(".product").querySelector('img').getAttribute('src')}">
                                                  <div class="cart__product-count">${amount}</div>`)
    } else {
      findResult.lastChild.textContent = Number(findResult.lastChild.textContent) + Number(amount);
    }
  }
})
