document.addEventListener("DOMContentLoaded", function () {
  // To add unique ID to each cart item
  var cartItems = document.querySelectorAll(".items--in--cart");
  cartItems.forEach(function (item) {
    var uniqueId = Math.floor(Math.random() * 1000000);
    item.setAttribute("data-id", uniqueId);
  });

  // to function to update total price
  function updateTotal() {
    let total = 0;
    const prices = document.querySelectorAll(".price--");
    const quantities = document.querySelectorAll(".number-total");

    prices.forEach((priceElement, index) => {
      const price = parseFloat(priceElement.innerText.replace("$", ""));
      const quantity = parseInt(quantities[index].innerText);
      total += price * quantity;
    });

    // Update the total display
    document.getElementById("bal-total").innerText = `$${total.toFixed(2)}`;
  }

  // Remove item from checkout when the "remove" button is clicked
  var removeBtns = document.querySelectorAll(".remove--btn");
  for (var i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener("click", function () {
      var cartItem = this.closest("[data-id]");
      cartItem.remove();
      updateTotal(); // then update the new total
    });
  }

  // Add items to the checkout section
  var addToCartBtns = document.querySelectorAll(".add2cart--btn");
  for (var i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
      alert("Item already added to cart!!!");
    });
  }

  // Change the background of the button to red (like button)
  var likeBtns = document.querySelectorAll(".like--btn");
  for (var i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener("click", function () {
      this.style.backgroundColor = "red";
    });
  }

  const counterSets = document.querySelectorAll(".counter-set");

  // Loop through each counter set
  counterSets.forEach((counterSet) => {
    const plusBtn = counterSet.querySelector(".increase--btn");
    const minusBtn = counterSet.querySelector(".decrease--btn");
    const numberTotal = counterSet.querySelector(".number-total");
    const priceElement = counterSet
      .closest(".items--in--cart")
      .querySelector(".price--");
    let quantity = 1; // Initial value for each counter

    // Initial total update
    updateTotal();

    // Increment button
    plusBtn.addEventListener("click", () => {
      quantity++;
      numberTotal.innerText = quantity;
      updateTotal();
    });

    // Decrement button
    minusBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        numberTotal.innerText = quantity;
        updateTotal();
      }
    });
  });
});
