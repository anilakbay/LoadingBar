const counter = document.querySelector(".counter");
const loadingBarFront = document.querySelector(".loadingBarFront");

let number = 0;

function updateNumber() {
  counter.textContent = `${number}%`; // Yüzdeyi gösteren metni güncelle
  loadingBarFront.style.width = `${number}%`; // Yükleme çubuğunun genişliğini güncelle

  if (number < 100) {
    number++; // Sayacı artır
    setTimeout(updateNumber, 15); // Güncellemeyi 15 ms sonra tekrar yap
  }
}

updateNumber(); // Fonksiyonu başlat
