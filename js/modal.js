
function openModal(img, name, price) {
  document.getElementById("modalImg").src = img;
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalPrice").innerText = "Rp " + price.toLocaleString();
  document.getElementById("modalBuy").onclick = () => addToCart(name, price);
  document.getElementById("productModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("productModal").classList.add("hidden");
}
