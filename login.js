function validateLoginForm() {
    // Mendapatkan nilai input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Menghapus pesan kesalahan sebelumnya
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
  
    var isValid = true;
  
    // Validasi Username
    if (username === '') {
      document.getElementById('usernameError').textContent = 'Username harus diisi.';
      isValid = false;
    }
  
    // Validasi Password
    if (password === '') {
      document.getElementById('passwordError').textContent = 'Password harus diisi.';
      isValid = false;
    }
  
    // Jika form tidak valid, prevent submit
    if (!isValid) {
      return false; // Mencegah pengiriman form jika ada error
    }
  
    // Jika valid, form akan dikirim
    return true;
  }