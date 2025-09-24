// script.js

// Tangkap semua link film
const filmLinks = document.querySelectorAll("nav ul li a");

// Tambahkan event listener ke setiap link
filmLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // cegah langsung pindah halaman

    const filmTitle = link.textContent; // ambil nama film
    const filmURL = link.getAttribute("href");

    // Simpan ke localStorage
    localStorage.setItem("filmTerpilih", filmTitle);

    // Tampilkan alert
    alert(`Anda memilih: ${filmTitle}\n\nKlik OK untuk menuju halaman film.`);

    // Setelah alert, arahkan ke URL film
    window.location.href = filmURL;
  });
});

// Saat halaman dimuat, cek apakah ada film yang terakhir dipilih
window.addEventListener("load", () => {
  const lastFilm = localStorage.getItem("filmTerpilih");
  if (lastFilm) {
    const infoBox = document.createElement("p");
    infoBox.textContent = `Terakhir kali Anda memilih: ${lastFilm}`;
    infoBox.style.color = "blue";
    infoBox.style.fontWeight = "bold";
    document.body.appendChild(infoBox);
  }
});
