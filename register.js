function validateRegisterForm() {
    // Mendapatkan nilai dari input
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    // Flag untuk memeriksa apakah form valid
    var isValid = true;
  
    // Menghapus pesan kesalahan sebelumnya
    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
  
    // Validasi Nama Lengkap
    if (fullName === '') {
      document.getElementById('fullNameError').textContent = 'Nama lengkap harus diisi.';
      isValid = false;
    }
  
    // Validasi Email
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email harus diisi.';
      isValid = false;
    } else {
      // Cek format email dengan regex
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Format email tidak valid.';
        isValid = false;
      }
    }
  
    // Validasi Username
    if (username === '') {
      document.getElementById('usernameError').textContent = 'Username harus diisi.';
      isValid = false;
    }
  
    // Validasi Password
    if (password === '') {
      document.getElementById('passwordError').textContent = 'Password harus diisi.';
      isValid = false;
    } else if (password.length < 6) {
      // Password minimal 6 karakter
      document.getElementById('passwordError').textContent = 'Password harus terdiri dari minimal 6 karakter.';
      isValid = false;
    }
  
    // Validasi Konfirmasi Password
    if (confirmPassword === '') {
      document.getElementById('confirmPasswordError').textContent = 'Konfirmasi password harus diisi.';
      isValid = false;
    } else if (password !== confirmPassword) {
      // Pastikan password dan konfirmasi password cocok
      document.getElementById('confirmPasswordError').textContent = 'Password dan konfirmasi password tidak cocok.';
      isValid = false;
    }
  
    // Jika form valid, kirimkan data
    if (!isValid) {
      return false; // Mencegah pengiriman form jika ada kesalahan
    }
  
    // Jika valid, form akan dikirim
    alert('Akun Anda telah terdaftar!'); // Hanya untuk simulasi
    return true; // Formulir akan dikirim
  }