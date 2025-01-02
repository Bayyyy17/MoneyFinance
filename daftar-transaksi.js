// Ambil tabel transaksi
const transactionTable = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];

// Fungsi untuk memuat transaksi dari localStorage
function loadTransactions() {
  let transactions = JSON.parse(localStorage.getItem('transactions')) || []; // Ambil transaksi yang ada dari localStorage

  // Kosongkan tabel sebelum menambahkan data baru
  transactionTable.innerHTML = '';

  transactions.forEach((transaction, index) => {
    const row = transactionTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = index + 1;
    cell2.textContent = transaction.transactionName;
    cell3.textContent = `Rp ${transaction.amount.toLocaleString()}`;
    cell4.textContent = transaction.category;
  });
}

// Memuat transaksi ketika halaman dimuat
window.onload = loadTransactions;
