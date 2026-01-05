
window.onload = function () {
    // Tambahkan checkbox untuk mengaktifkan input emas
    const inputIds = ["emas", "panen",  "gaji"];
    inputIds.forEach((id) => {
        const input = document.getElementById(id);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList="cek"
        checkbox.id = "cek_" + id;
        checkbox.style.marginRight = "6px";
        input.parentNode.insertBefore(checkbox, input);
        input.disabled = true;
        input.value = 0;

        // Aktifkan/Nonaktifkan input dengan checkbox (logic nya)
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                input.disabled = false;
                input.value = "";
            } else {
                input.disabled = true;
                input.value = 0;
            }
        });
    });

};


// Fungsi utama untuk cek zakat (logic nya)
function cekZakat() {

    const emas = parseFloat(document.getElementById('emas').value) || 0;
    const haul = parseFloat(document.getElementById('haul').value) || 0;
    const kg = parseFloat(document.getElementById('panen').value) || 0;
    const gaji = parseFloat(document.getElementById('gaji').value) || 0;
    const hargaEmas = 2321000;
    nisabEmas = 85;

    const zakatEmas = (emas * hargaEmas >= nisabEmas && haul >= 1) ? emas * hargaEmas * 0.025 : 0;
    const zakatPertanian = kg >= 520 ? kg * 0.025 : 0;
    const zakatPenghasilan = gaji >= 7000000 ? gaji * 0.025 : 0;

    const total = zakatEmas + zakatPertanian + zakatPenghasilan;
    const nilaiZakat = {
        emas: parseFloat(document.getElementById("emas").value)
    };

    const hasil = document.getElementById("hasil");
    const penjelasan = document.getElementById("penjelasan");
    console.log(total)
    if (total > 0) {
        hasil.innerHTML = "wajb zakat";
        penjelasan.innerHTML = `total zakat:
        <br> emas:${zakatEmas}
        <br> pertanian:${zakatPertanian}
        <br> penghasilan:${zakatPenghasilan}
        <hr> total:${total}
        <hr>
        
        <b>Penjelasan Zakat Mal:</b><br>
      - Wajib jika harta ≥ nisab dan dimiliki ≥ 1 tahun.<br>
      - Logika AND: emas ≥ 85 gram AND haul ≥ 1 tahun.<br>
      - Logika OR: beberapa jenis harta lain bisa jadi alternatif.<br>
      - IF digunakan untuk menentukan wajib/tidaknya zakat.
        `
    } else {
        hasil.innerHTML = "tidak wajib";
        penjelasan.innerHTML = ""
    }
}