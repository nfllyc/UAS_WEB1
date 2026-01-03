const totalSimpananEl = document.getElementById("totalSimpanan");
const totalPinjamanEl = document.getElementById("totalPinjaman");

let totalSimpanan = 0;
let totalPinjaman = 0;

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formTransaksi");
    const listTransaksi = document.getElementById("listTransaksi");
    let nomor = 1;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = document.getElementById("nama").value.trim();
      const jumlah = parseInt(document.getElementById("jumlah").value);
      const kategori = document.getElementById("kategori").value;
        
      if (nama === "" || isNaN(jumlah) || kategori === "") {
        alert("Data belum lengkap");
        return;
      }
      const idTransaksi = "FUNTOM-" + String(nomor).padStart(3, "0");
      if (kategori === "Simpanan") {
        totalSimpanan += jumlah;
        totalSimpananEl.textContent =
          "Rp " + totalSimpanan.toLocaleString("id-ID");
      } else if (kategori === "Pinjaman") {
        totalPinjaman += jumlah;
        totalPinjamanEl.textContent =
          "Rp " + totalPinjaman.toLocaleString("id-ID");
      }
      const row = document.createElement("div");
      row.className = "transaksi-row";
      row.innerHTML = `
        <span>${nomor}</span>
        <span>${idTransaksi}</span>
        <span>${nama}</span>
        <span>${jumlah.toLocaleString("id-ID")}</span>
        <span>
        <span class="badge ${kategori === "Simpanan" ? "badge-simpanan" : "badge-pinjaman"}">
      ${kategori}
    </span>
  </span>
  `;
  
    
      listTransaksi.appendChild(row);
      nomor++;
      form.reset();
    });
  });
  