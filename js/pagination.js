
document.addEventListener("DOMContentLoaded", () => {
  const productsPerPage = 12;
  const container = document.getElementById("products-container");
  const items = Array.from(container.children);
  const totalPages = Math.ceil(items.length / productsPerPage);

  let currentPage = 1;

  function renderPage(page) {
    container.innerHTML = "";
    const start = (page - 1) * productsPerPage;
    const end = page * productsPerPage;
    items.slice(start, end).forEach(item => container.appendChild(item));
    document.getElementById("page-indicator").innerText = `Halaman ${page}`;
  }

  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
    }
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage(currentPage);
    }
  });

  renderPage(currentPage);
});
