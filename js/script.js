let dataRider = [
    ["Jorge Martin", "Prima Pramac Racing", "ESP", 155],
    ["Francesco Bagnaia", "Ducati Lenovo Team", "ITA", 116],
    ["Marc Marquez", "Gresini Racing", "ESP", 114],
    ["Enea Bastianini", "Ducati Lenovo Team", "ITA", 94],
    ["Maverick Viñales", "Aprilia Racing", "ESP", 87],
    ["Pedro Acosta", "Red Bull GASGAS Tech3", "ESP", 83],
    ["Aleix Espargaro", "Aprilia Racing", "ESP", 76],
    ["Brad Binder", "Red Bull KTM ", "ZAF", 75],
    ["Fabio Di Gia", "VR46 Racing Team", "ITA", 62],
    ["Marco Bezzecchi", "VR46 Racing Team", "ITA", 42],
    ["Alex Marquez", "Gresini Racing", "ESP", 42]
 ];



function tambahkanRiderKeDiv() {
    var riderContainer = document.querySelector('.championship .list');
    
    for (let i = 0; i < dataRider.length; i++) {
        var newRiderDiv = document.createElement('div');
        newRiderDiv.classList.add('rider');

        // Isi elemen div dengan konten yang sesuai
        newRiderDiv.innerHTML = `
            <div class="position">${(i+1).toString().padStart(2, '0')}</div>
            <div class="name-team">
                <div class="name">${dataRider[i][0]}</div>
                <div class="team">${dataRider[i][1]}</div>
            </div>
            <div class="flag-country">
                <img src="assets/images/flag/${dataRider[i][2].toLowerCase()}.png" alt="flag-${dataRider[i][2]}">
                <h5>${dataRider[i][2]}</h5>
            </div>
            <div class="point-desc">
                <div class="point">${dataRider[i][3]}</div>
                <div class="desc">point</div>
            </div>
        `;

        // Tambahkan elemen rider baru ke dalam container
        riderContainer.appendChild(newRiderDiv);

    }
}

// Panggil fungsi untuk menambahkan data rider ke dalam div saat halaman dimuat
tambahkanRiderKeDiv();