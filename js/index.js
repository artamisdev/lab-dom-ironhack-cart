// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const sub = product.querySelector('.subtotal span')

  let subtotal = price.innerText * quantity.value;

sub.innerText = subtotal; 
}

function calculateAll() {
  console.log("aqui")
  // ITERATION 2
const allProducts = document.querySelectorAll(".product");

for (product of allProducts){
  console.log(product)
  updateSubtotal(product)
}

  // ITERATION 3

const subTotal = document.querySelectorAll(".subtotal span");
const totalvalor = document.querySelector("#total-value span");

let totalNumber = 0

subTotal.forEach((sub) => {
  
  totalNumber =  totalNumber + Number(sub.innerText)

  })
  totalvalor.innerText = totalNumber
}
  




 



















// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
