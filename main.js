const mainText = document.getElementById("main-text");
mainText.innerHTML = "Halo Pendikom FKIP UNMUL";

class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.angkatan = angkatan;
  }
}

let mhs = new Mahasiswa("Raihan", "2405176004", 2024);
mainText.innerText = mhs.nama;
