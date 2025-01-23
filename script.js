document.getElementById('sale-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai dari input form
    const productName = document.getElementById('product-name').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    // Hitung total harga produk
    const totalPrice = productPrice * quantity;

    // Menambah ke daftar penjualan
    const salesList = document.getElementById('sales-list');
    const li = document.createElement('li');
    li.textContent = `${productName} - ${quantity} x Rp ${productPrice.toLocaleString()} = Rp ${totalPrice.toLocaleString()}`;
    salesList.appendChild(li);

    // Update total penjualan
    updateTotalSales(totalPrice);
});

function updateTotalSales(amount) {
    const totalSalesElement = document.getElementById('total-sales');
    let currentTotal = parseFloat(totalSalesElement.textContent.replace(',', ''));
    currentTotal += amount;
    totalSalesElement.textContent = currentTotal.toLocaleString();
}
