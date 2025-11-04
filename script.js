console.log("✅ Halo dari script.js! File berhasil terhubung.");

const inputNamaPembalap = document.querySelector('#driver-name');

const judulPratinjau = document.querySelector('#preview-title');

console.log(inputNamaPembalap);
console.log(judulPratinjau);

inputNamaPembalap.addEventListener('input', function() {
    console.log("🍳 Pengguna sedang mengetik!");
});

inputNamaPembalap.addEventListener('input', function() {
    
    const teksInputan = inputNamaPembalap.value;
    judulPratinjau.textContent = teksInputan;
});

inputNamaPembalap.addEventListener('input', function() {
    const teksInputan = inputNamaPembalap.value;
    
    if (teksInputan === "") {
        judulPratinjau.textContent = "Nama Pembalap Akan Muncul Di Sini";
    } else {
        judulPratinjau.textContent = teksInputan;
    }
});