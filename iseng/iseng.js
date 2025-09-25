// Kelas Mahasiswa
class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  info() {
    return `${this.nama} (${this.nim}) - Jurusan ${this.jurusan}`;
  }
}

// Kelas Universitas
class Universitas {
  constructor(nama) {
    this.nama = nama;
    this.mahasiswa = [];
  }

  tambahMahasiswa(m) {
    this.mahasiswa.push(m);
  }

  tampilkanMahasiswa() {
    return this.mahasiswa.map(m => m.info());
  }
}

// Buat objek universitas
const univ = new Universitas("Universitas Contoh");

// Fungsi dipanggil saat klik tombol tambah
function tambahMahasiswa() {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const jurusan = document.getElementById("jurusan").value;

  if (!nama || !nim || !jurusan) {
    alert("Harap isi semua data!");
    return;
  }

  const mhs = new Mahasiswa(nama, nim, jurusan);
  univ.tambahMahasiswa(mhs);
  tampilkan();

  // reset input
  document.getElementById("nama").value = "";
  document.getElementById("nim").value = "";
  document.getElementById("jurusan").value = "";
}

// Tampilkan daftar mahasiswa
function tampilkan() {
  const daftarDiv = document.getElementById("daftar");
  daftarDiv.innerHTML = "";
  univ.tampilkanMahasiswa().forEach(info => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = info;
    daftarDiv.appendChild(div);
  });
}
