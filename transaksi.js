// Ambil elemen-elemen dari HTML
const transactionForm = document.getElementById('transactionForm');

// Fungsi untuk menyimpan transaksi ke localStorage
function saveTransaction(transactionName, amount, category) {
  let transactions = JSON.parse(localStorage.getItem('transactions')) || []; // Ambil transaksi yang ada atau buat array kosong
  transactions.push({ transactionName, amount, category }); // Tambahkan transaksi baru ke array
  localStorage.setItem('transactions', JSON.stringify(transactions)); // Simpan kembali array ke localStorage
}

// Event listener untuk menangani pengiriman formulir
transactionForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir secara default

  // Ambil nilai dari input form
  const transactionName = document.getElementById('transactionName').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;

  // Validasi input
  if (!transactionName || isNaN(amount) || amount <= 0 || !category) {
    alert('Pastikan semua input telah terisi dengan benar!');
    return;
  }

  // Simpan transaksi ke localStorage
  saveTransaction(transactionName, amount, category);

  // Reset form setelah transaksi ditambahkan
  transactionForm.reset();
});