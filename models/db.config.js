const mysql = require('mysql2');

// Konfigurasi koneksi database
const db = mysql.createConnection({
  host: '127.0.0.1',   // lebih aman daripada 'localhost'
  user: 'root',
  password: '',        // kosong kalau XAMPP
  database: 'dbpratikum8',
  port: 3306           // penting! agar connect ke MySQL XAMPP
});

// Coba koneksi
db.connect(err => {
  if (err) {
    console.error('Koneksi database gagal:', err);
  } else {
    console.log('Terhubung ke database MySQL');
  }
});

module.exports = db;
