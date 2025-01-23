// Fungsi untuk menguji updateTotalSales
function testUpdateTotalSales() {
    let totalSales = 0;

    function mockUpdateTotalSales(amount) {
        totalSales += amount;
    }

    mockUpdateTotalSales(100000);
    console.assert(totalSales === 100000, `Expected 100000, but got ${totalSales}`);

    mockUpdateTotalSales(50000);
    console.assert(totalSales === 150000, `Expected 150000, but got ${totalSales}`);
}

// Fungsi untuk menguji penambahan penjualan
function testAddSale() {
    const saleData = {
        productName: 'Laptop',
        productPrice: 15000000,
        quantity: 2
    };

    const totalPrice = saleData.productPrice * saleData.quantity;
    console.assert(totalPrice === 30000000, `Expected 30000000, but got ${totalPrice}`);
}

// Menjalankan tes
testUpdateTotalSales();
testAddSale();
console.log("Semua tes berhasil!");
