const mainText = document.getElementById("main-text");

class Film {
  constructor(judul, harga, kursi) {
    this.judul = judul;
    this.harga = harga;
    this.kursi = kursi; // jumlah kursi tersedia
  }

  pesanTiket(jumlah) {
    if (jumlah > this.kursi) {
      alert("Kursi tidak cukup!");
    } else {
      this.kursi -= jumlah;
    }
  }

  cekFilm() {
    return `Judul: ${this.judul} <br> Harga: Rp${this.harga} <br> Kursi Tersedia: ${this.kursi}`;
  }
}

class Bioskop {
  constructor(nama) {
    this.nama = nama;
    this.daftarFilm = [];
  }

  tambahFilm(film) {
    this.daftarFilm.push(film);
  }

  tampilkanFilm() {
    let info = `<h2>${this.nama}</h2>`;
    this.daftarFilm.forEach(film => {
      info += `<p>${film.cekFilm()}</p>`;
    });
    return info;
  }
}

// contoh penggunaan
let bioskop = new Bioskop("XXI Samarinda");
let film1 = new Film("Avengers", 50000, 50);
let film2 = new Film("Spiderman", 45000, 30);

bioskop.tambahFilm(film1);
bioskop.tambahFilm(film2);

// pesan 5 tiket film Avengers
film1.pesanTiket(5);

// tampilkan daftar film
mainText.innerHTML = bioskop.tampilkanFilm();
