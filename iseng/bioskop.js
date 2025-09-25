const mainText = document.getElementById("main-text");

// Daftar film sederhana
const daftarFilm = [
  { judul: "Laskar Bintang", jam: "19:00 WITA" },
  { judul: "Malam di Kota", jam: "21:00 WITA" }
];

// Tampilkan daftar film
let teks = "<h2>Daftar Film</h2>";
daftarFilm.forEach((film, i) => {
  teks += `Film ${i + 1}: ${film.judul} (Jam: ${film.jam})<br>`;
});

mainText.innerHTML = teks;
