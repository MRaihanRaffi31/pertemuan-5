const mainText = document.getElementById("main-text");
class Mahasiswa {
  constructor(nama, nim, angkatan) {
    this.nama = nama;
    this.nim = nim;
    this.angkatan = angkatan;
  }

  perkenalan() {
    return `Halo, nama saya ${this.nama}\n nim saya ${this.nim}\n angkatan ${this.angkatan}\n`;
  }
}

let mhs = new Mahasiswa("Raihan", 24004, 2024);

mainText.innerText = mhs.perkenalan();