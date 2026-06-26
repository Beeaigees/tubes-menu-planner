var daftarMenu = [
  { id:1,  
    nama:"Nasi Putih",           
    kategori:"Makanan Pokok", 
    kalori:180, 
    harga:5000,  
    gambar: "images/rice.jpg",
    deskripsi:"Nasi putih pulen sumber karbohidrat utama. Cocok dipadukan dengan lauk apapun.",                                     
    prep:"5 Menit",  cook:"20 Menit",  porsi:"1 Mangkuk", makro:"40g K | 3g P | 0g L" },
  { id:2,  
    nama:"Nasi Goreng Spesial",  
    kategori:"Makanan Pokok", 
    kalori:450, 
    harga:18000, 
    gambar:"images/nasi goreng.jpg",   
    deskripsi:"Nasi goreng bumbu spesial dengan telur, kecap, dan pelengkap pilihan khas Indonesia.",                             
    prep:"10 Menit", cook:"15 Menit",  porsi:"1 Piring",  makro:"65g K | 12g P | 14g L" },
  { id:3,  
    nama:"Mie Goreng Jawa",      
    kategori:"Makanan Pokok", 
    kalori:380, 
    harga:16000, 
    gambar:"images/mie goreng jawa.jpg",   
    deskripsi:"Mie goreng bumbu Jawa gurih dengan sayuran segar dan taburan bawang goreng.",                                       
    prep:"10 Menit", cook:"15 Menit",  porsi:"1 Piring",  makro:"58g K | 10g P | 11g L" },
  { id:4,  
    nama:"Spaghetti Aglio Olio", 
    kategori:"Makanan Pokok", 
    kalori:420, 
    harga:28000, 
    gambar:"images/spaghetti aglio e olio.jpg",   
    deskripsi:"Pasta Italia klasik dengan bawang putih, minyak zaitun, cabai, dan peterseli segar.",                               
    prep:"10 Menit", cook:"20 Menit",  porsi:"1 Piring",  makro:"62g K | 12g P | 13g L" },
  { id:5,  
    nama:"Kentang Panggang",     
    kategori:"Makanan Pokok", 
    kalori:220, 
    harga:15000, 
    gambar:"images/kentang.jpg",   
    deskripsi:"Kentang dipanggang dengan bumbu rempah dan minyak zaitun. Renyah di luar, lembut di dalam.",                       
    prep:"10 Menit", cook:"35 Menit",  porsi:"1 Porsi",   makro:"37g K | 4g P | 7g L" },
  { id:6,  
    nama:"Roti Gandum (2 lembar)",
    kategori:"Makanan Pokok",
    kalori:160, 
    harga:8000,  
    gambar:"images/roti.jpg",   
    deskripsi:"Roti gandum utuh kaya serat untuk sarapan sehat. Rendah kalori namun mengenyangkan.",                               
    prep:"2 Menit",  cook:"5 Menit",   porsi:"2 Lembar",  makro:"30g K | 6g P | 2g L" },
  { id:7,  
    nama:"Ayam Goreng Tepung",   
    kategori:"Lauk-Pauk",     
    kalori:300, 
    harga:17000, 
    gambar:"images/ayam tepung.jpg",      
    deskripsi:"Potongan ayam dibalut tepung bumbu renyah dan digoreng hingga kecokelatan sempurna.",                               
    prep:"20 Menit", cook:"20 Menit",  porsi:"1 Potong",  makro:"18g K | 22g P | 16g L" },
  { id:8,  
    nama:"Ayam Bakar Madu",      
    kategori:"Lauk-Pauk",     
    kalori:280, 
    harga:20000, 
    gambar:"images/ayam bakar madu.jpg",      
    deskripsi:"Ayam dimarinasi bumbu madu dan rempah lalu dibakar. Manis, gurih, dan beraroma.",                                   
    prep:"30 Menit", cook:"25 Menit",  porsi:"1 Potong",  makro:"12g K | 28g P | 10g L" },
  { id:9,  
    nama:"Rendang Daging Sapi",  
    kategori:"Lauk-Pauk",     
    kalori:380, 
    harga:32000, 
    gambar:"images/rendang.jpg",   
    deskripsi:"Daging sapi dimasak perlahan dengan santan dan rempah khas Minang hingga kering.",                                  
    prep:"20 Menit", cook:"120 Menit", porsi:"1 Porsi",   makro:"8g K | 30g P | 24g L" },
  { id:10, 
    nama:"Tempe Orek",           
    kategori:"Lauk-Pauk",     
    kalori:150, 
    harga:8000,  
    gambar:"images/orek tempe.jpg",   
    deskripsi:"Tempe digoreng kering lalu ditumis dengan kecap manis, cabai, dan bawang.",                                         
    prep:"10 Menit", cook:"15 Menit",  porsi:"1 Porsi",   makro:"12g K | 10g P | 7g L" },
  { id:11, 
    nama:"Tahu Goreng",          
    kategori:"Lauk-Pauk",     
    kalori:120, 
    harga:6000,  
    gambar:"images/tahu goreng.jpg",   
    deskripsi:"Tahu kuning digoreng hingga kecokelatan, renyah di luar namun lembut di dalam.",                                     
    prep:"5 Menit",  cook:"10 Menit",  porsi:"2 Potong",  makro:"4g K | 8g P | 8g L" },
  { id:12, 
    nama:"Ikan Nila Bakar",      
    kategori:"Lauk-Pauk",     
    kalori:250, 
    harga:22000, 
    gambar:"images/ikannila.jpg",   
    deskripsi:"Ikan nila segar dimarinasi bumbu rempah lalu dibakar dengan bara arang.",                                          
    prep:"15 Menit", cook:"20 Menit",  porsi:"1 Ekor",    makro:"0g K | 36g P | 10g L" },
  { id:14, 
  nama:"Beef Steak Sirloin",
  kategori:"Lauk-Pauk",
  kalori:420,
  harga:45000,
  gambar:"images/beef steak sirloin.jpg",
  deskripsi:"Daging sirloin premium dipanggang dengan mentega dan rosemary. Juicy dan kaya protein.",
  prep:"10 Menit", cook:"15 Menit", porsi:"150 Gram", makro:"0g K | 42g P | 28g L" },

{ id:15,
  nama:"Tumis Kangkung",
  kategori:"Sayur",
  kalori:90,
  harga:9000,
  gambar:"images/tumis kangkung.jpg",
  deskripsi:"Kangkung segar ditumis dengan bawang putih, cabai, dan bumbu sederhana.",
  prep:"5 Menit", cook:"8 Menit", porsi:"1 Porsi", makro:"8g K | 3g P | 4g L" },

{ id:16,
  nama:"Sayur Asem",
  kategori:"Sayur",
  kalori:70,
  harga:8000,
  gambar:"images/sayur asem.jpg",
  deskripsi:"Sup sayuran segar dengan kuah asam dari asam Jawa. Kaya vitamin dan menyegarkan.",
  prep:"15 Menit", cook:"20 Menit", porsi:"1 Mangkuk", makro:"12g K | 2g P | 1g L" },

{ id:17,
  nama:"Capcay Kuah",
  kategori:"Sayur",
  kalori:110,
  harga:13000,
  gambar:"images/capcay kuah.jpg",
  deskripsi:"Campuran sayuran segar dalam kuah kaldu gurih dengan bakso dan telur puyuh.",
  prep:"15 Menit", cook:"15 Menit", porsi:"1 Mangkuk", makro:"14g K | 6g P | 3g L" },

{ id:18,
  nama:"Salad Sayur Segar",
  kategori:"Sayur",
  kalori:80,
  harga:14000,
  gambar:"images/salad sayur.jpg",
  deskripsi:"Campuran sayuran hijau segar dengan dressing lemon madu. Ringan dan menyehatkan.",
  prep:"10 Menit", cook:"0 Menit", porsi:"1 Bowl", makro:"10g K | 3g P | 3g L" },

{ id:19,
  nama:"Gado-Gado",
  kategori:"Sayur",
  kalori:280,
  harga:16000,
  gambar:"images/gado.jpg",
  deskripsi:"Sayuran rebus dengan saus kacang khas Indonesia. Kaya protein nabati dan serat.",
  prep:"15 Menit", cook:"20 Menit", porsi:"1 Piring", makro:"22g K | 12g P | 14g L" },

{ id:20,
  nama:"Pisang (1 buah)",
  kategori:"Buah",
  kalori:105,
  harga:5000,
  gambar:"images/pisang.jpg",
  deskripsi:"Pisang ambon segar yang manis dan kaya kalium. Sumber energi alami yang praktis.",
  prep:"0 Menit", cook:"0 Menit", porsi:"1 Buah", makro:"27g K | 1g P | 0g L" },

{ id:21,
  nama:"Apel Fuji (1 buah)",
  kategori:"Buah",
  kalori:95,
  harga:7000,
  gambar:"images/apple fuji.jpg",
  deskripsi:"Apel Fuji manis renyah yang kaya antioksidan dan serat. Camilan sehat yang segar.",
  prep:"0 Menit", cook:"0 Menit", porsi:"1 Buah", makro:"25g K | 0g P | 0g L" },

{ id:22,
  nama:"Semangka (1 potong)",
  kategori:"Buah",
  kalori:60,
  harga:6000,
  gambar:"images/semangka.jpg",
  deskripsi:"Semangka segar manis tinggi kandungan air. Menyegarkan di hari yang panas.",
  prep:"0 Menit", cook:"0 Menit", porsi:"1 Potong", makro:"15g K | 1g P | 0g L" },

{ id:23,
  nama:"Fruit Salad Cup",
  kategori:"Buah",
  kalori:140,
  harga:17000,
  gambar:"images/salad buah.jpg",
  deskripsi:"Campuran buah segar potong dengan yogurt dan madu. Kaya vitamin dan antioksidan.",
  prep:"10 Menit", cook:"0 Menit", porsi:"1 Cup", makro:"30g K | 3g P | 1g L" },

{ id:24,
  nama:"Es Teh Manis",
  kategori:"Minuman",
  kalori:90,
  harga:5000,
  gambar:"images/es teh.jpg",
  deskripsi:"Teh hitam segar dengan gula dan es batu. Minuman khas Indonesia yang menyegarkan.",
  prep:"5 Menit", cook:"5 Menit", porsi:"1 Gelas", makro:"22g K | 0g P | 0g L" },

{ id:25,
  nama:"Air Mineral 600ml",
  kategori:"Minuman",
  kalori:0,
  harga:4000,
  gambar:"images/air mineral.jpg",
  deskripsi:"Air mineral murni 600ml. Penting untuk menjaga hidrasi tubuh sepanjang hari.",
  prep:"0 Menit", cook:"0 Menit", porsi:"600 ml", makro:"0g K | 0g P | 0g L" },

{ id:26,
  nama:"Jus Alpukat",
  kategori:"Minuman",
  kalori:230,
  harga:18000,
  gambar:"images/jus alpukat.jpg",
  deskripsi:"Jus alpukat segar dengan susu dan gula aren. Kaya lemak sehat dan mengenyangkan.",
  prep:"5 Menit", cook:"0 Menit", porsi:"1 Gelas", makro:"18g K | 3g P | 16g L" }
];
// STATE
var dipilih = {};
var filterAktif = "Semua";
var modalId = null;

// Helper badge class
function kelasBadge(kat) {
  if (kat === "Lauk-Pauk")  return "badge badge-lauk";
  if (kat === "Sayur")       return "badge badge-sayur";
  if (kat === "Buah")        return "badge badge-buah";
  if (kat === "Minuman")     return "badge badge-minuman";
  return "badge badge-pokok";
}

// RENDER CARDS
function renderCards() {
  var container = document.getElementById("card-grid");
  container.innerHTML = "";

  var list = filterAktif === "Semua" ? daftarMenu : daftarMenu.filter(function(m) {
    return m.kategori === filterAktif;
  });

  list.forEach(function(m) {
    var terpilih = dipilih[m.id] === true;
    var kartu = document.createElement("div");
    kartu.className = terpilih ? "kartu dipilih" : "kartu";
    kartu.innerHTML =
      '<img src="' + m.gambar + '" alt="' + m.nama + '" />' +
      '<div class="kartu-info">' +
        '<div class="kartu-nama">' + m.nama + '</div>' +
        '<div class="kartu-meta">' +
          '<span class="kartu-kalori">' + m.kalori + ' kkal</span>' +
          '<span class="kartu-harga">Rp ' + m.harga.toLocaleString("id-ID") + '</span>' +
        '</div>' +
        '<div class="kartu-bawah">' +
          '<span class="' + kelasBadge(m.kategori) + '">' + m.kategori + '</span>' +
          '<button class="btn-plus' + (terpilih ? " aktif" : "") + '" onclick="toggleMenu(' + m.id + ')">' + (terpilih ? "✓" : "+") + '</button>' +
        '</div>' +
        '<button class="btn-detail" onclick="bukaModal(' + m.id + ')">Lihat Detail »</button>' +
      '</div>';
    container.appendChild(kartu);
  });
}

// TOGGLE MENU
function toggleMenu(id) {
  dipilih[id] = !dipilih[id];
  renderCards();
  updateHasil();
}

// UPDATE PANEL KANAN
function updateHasil() {
  var menuDipilih = daftarMenu.filter(function(m) { return dipilih[m.id]; });
  var grid = document.getElementById("grid-gambar");
  grid.innerHTML = "";

  if (menuDipilih.length === 0) {
    grid.innerHTML = '<div class="state-kosong"><span>🍽️</span>Belum ada menu dipilih</div>';
    document.getElementById("info-total").style.display = "none";
    document.getElementById("jumlah").textContent = "";
  } else {
    menuDipilih.forEach(function(m) {
      var img = document.createElement("img");
      img.src = m.gambar; img.alt = m.nama; img.title = m.nama;
      grid.appendChild(img);
    });
    document.getElementById("jumlah").textContent = menuDipilih.length + " menu dipilih";
    document.getElementById("info-total").style.display = "block";
  }

  var totalKal = 0, totalHarga = 0;
  menuDipilih.forEach(function(m) { totalKal += m.kalori; totalHarga += m.harga; });
  document.getElementById("total-kalori").textContent = totalKal + " kkal";
  document.getElementById("total-harga").textContent = "Rp " + totalHarga.toLocaleString("id-ID");

  var badge = document.getElementById("cart-badge");
  if (badge) {
    badge.textContent = menuDipilih.length;
    badge.className = "cart-badge" + (menuDipilih.length === 0 ? " kosong" : "");
  }

  var kategoriList = ["Makanan Pokok", "Lauk-Pauk", "Sayur", "Buah", "Minuman"];
  var semuaOk = true;
  kategoriList.forEach(function(kat) {
    var ada = menuDipilih.some(function(m) { return m.kategori === kat; });
    var el = document.getElementById("cek-" + kat);
    el.textContent = ada ? "✓ Terpenuhi" : "Belum";
    el.className = "cek-status " + (ada ? "ok" : "belum");
    if (!ada) semuaOk = false;
  });

  document.getElementById("badge-seimbang").style.display =
    (semuaOk && menuDipilih.length > 0) ? "block" : "none";
}

// MOBILE DROPDOWN TOGGLE (panel-kanan)
function toggleHasil() {
  document.getElementById("panel-kanan").classList.toggle("tampil");
  document.getElementById("backdrop-hasil").classList.toggle("tampil");
}

// FILTER
function filterKategori(kat, tombol) {
  filterAktif = kat;
  document.querySelectorAll(".btn-filter").forEach(function(t) { t.className = "btn-filter"; });
  tombol.className = "btn-filter aktif";
  renderCards();
}

// MODAL
function bukaModal(id) {
  var m = daftarMenu.find(function(x) { return x.id === id; });
  if (!m) return;
  modalId = id;
  document.getElementById("modal-gambar").src = m.gambar;
  document.getElementById("modal-nama").textContent = m.nama;
  document.getElementById("modal-badge").innerHTML = '<span class="' + kelasBadge(m.kategori) + '">' + m.kategori + '</span>';
  document.getElementById("modal-desc").textContent = m.deskripsi;
  document.getElementById("m-prep").textContent = m.prep;
  document.getElementById("m-cook").textContent = m.cook;
  document.getElementById("m-porsi").textContent = m.porsi;
  document.getElementById("m-kalori").textContent = m.kalori;
  document.getElementById("m-makro").textContent = m.makro;
  document.getElementById("m-harga").textContent = "Rp " + m.harga.toLocaleString("id-ID");
  var btn = document.getElementById("btn-tambah");
  btn.textContent = dipilih[id] ? "✓ Sudah Ditambahkan" : "+ Tambah";
  btn.className = dipilih[id] ? "btn-tambah sudah" : "btn-tambah";
  document.getElementById("overlay").className = "overlay tampil";
}

function tutupModal(e) {
  if (e && e.target !== document.getElementById("overlay")) return;
  document.getElementById("overlay").className = "overlay";
  modalId = null;
}

function tambahDariModal() {
  if (!modalId) return;
  dipilih[modalId] = true;
  renderCards();
  updateHasil();
  document.getElementById("overlay").className = "overlay";
  modalId = null;
}

// INIT
window.onload = function() {
  renderCards();
  updateHasil();
};