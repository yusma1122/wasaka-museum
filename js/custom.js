
  // Ambil tombol dan elemen tujuan
  document.getElementById("get-started-btn").addEventListener("click", function(event) {
    // Mencegah tindakan default dari link
    event.preventDefault();

    // Scroll ke bagian yang memiliki ID 'section-features'
    document.getElementById("section-features").scrollIntoView({
      behavior: "smooth", // Efek scroll yang halus
      block: "start"      // Menentukan posisi vertikal scroll
    });
  });

