document.getElementById('transaksi').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman form secara default

  // Mengambil nilai dari input
  const namaTransaksi = document.getElementById('namaTransaksi').value;
  const jumlah = document.getElementById('jumlah').value;
  const kategori = document.getElementById('kategori').value;

  // Validasi input
  if (namaTransaksi === '' || jumlah === '' || kategori === '') {
      alert('Semua field harus diisi!');
      return; // Menghentikan eksekusi jika ada field yang kosong
  }

  // Menambahkan data ke tabel
  const tableBody = document.querySelector('tbody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
      <td>${namaTransaksi}</td>
      <td>${jumlah}</td>
      <td>${kategori}</td>
  `;

  tableBody.appendChild(newRow);

  // Mengosongkan input setelah data ditambahkan
  document.getElementById('transaksiForm').reset();
});