let balance = 0;  // Saldo Awal
let transactionHistory = [];  // Menyimpan Riwayat Transaksi

// Fungsi untuk Memproses Transaksi
function processTransaction() {
    // Ambil input dari form
    const transactionType = document.getElementById('transaction-type').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Validasi input
    if (isNaN(amount) || amount <= 0) {
        alert("Jumlah uang tidak valid! Harap masukkan jumlah yang lebih besar dari 0.");
        return;
    }

    // Proses transaksi simpan atau pinjam
    if (transactionType === 'deposit') {
        balance += amount;  // Tambahkan saldo untuk transaksi simpan
        transactionHistory.push({ type: 'Simpan', amount: amount, balance: balance });
    } else if (transactionType === 'withdraw') {
        if (amount > balance) {
            alert("Saldo tidak cukup untuk melakukan pinjaman!");
            return;
        }
        balance -= amount;  // Kurangi saldo untuk transaksi pinjam
        transactionHistory.push({ type: 'Pinjam', amount: amount, balance: balance });
    }

    // Perbarui tampilan UI
    updateUI();
}

// Fungsi untuk Memperbarui Tampilan UI
function updateUI() {
    // Perbarui saldo di UI
    document.getElementById('balance').textContent = balance.toFixed(2);

    // Perbarui Riwayat Transaksi
    const tbody = document.getElementById('history-table').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';  // Kosongkan riwayat sebelumnya

    // Tampilkan setiap transaksi dalam tabel
    transactionHistory.forEach((transaction, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${transaction.type}</td>
            <td>${transaction.amount.toFixed(2)}</td>
            <td>${transaction.balance.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}