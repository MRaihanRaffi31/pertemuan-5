const mainText = document.getElementById("main-text");

class Film {
  constructor(judul, jam) {
    this.judul = judul;
    this.jam = jam;
  }

  info() {
    return `Judul: ${this.judul} <br> Jam Tayang: ${this.jam}`;
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
    if (this.daftarFilm.length === 0) {
      return `Belum ada film di ${this.nama}`;
    }
    let teks = `Bioskop: ${this.nama} <br><br>`;
    this.daftarFilm.forEach((film, i) => {
      teks += `Film ${i + 1}: <br>${film.info()} <br><br>`;
    });
    return teks;
  }
}

// contoh penggunaan
let bioskop = new Bioskop("Bioskop XXI");

// tambahkan film
bioskop.tambahFilm(new Film("Laskar Bintang", "19:00"));
bioskop.tambahFilm(new Film("Malam di Kota", "21:00"));

// tampilkan di halaman
mainText.innerHTML = bioskop.tampilkanFilm();
