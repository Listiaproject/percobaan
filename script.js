document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Lakukan sesuatu dengan data yang dikirimkan
    // Contoh: Kirim data ke server atau tampilkan pesan sukses

    alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
});
