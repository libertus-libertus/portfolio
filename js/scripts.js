(function() {
    emailjs.init("Dr-ptPWC_tY4JcJJ-"); 
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Ambil nilai dari input form
    const formData = {
        to_name: "Admin",  // Nama penerima (opsional)
        from_name: document.getElementById("name").value, // Nama user
        reply_to: document.getElementById("email").value, // Email user
        message: document.getElementById("message").value // Pesan user
    };

    // Kirim email melalui EmailJS
    emailjs.send("service_xfyrh2c", "template_oq7r9lj", formData)
        .then(response => {
            alert("Email berhasil dikirim!");
            console.log("SUCCESS!", response);
            document.getElementById("contactForm").reset(); // Reset form setelah sukses
        })
        .catch(error => {
            alert("Gagal mengirim email.");
            console.error("FAILED...", error);
        });
});