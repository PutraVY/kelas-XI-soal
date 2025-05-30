const soal = [
"Jepang menyerah kepada Sekutu sebagai pertanda perang dunia kedua di Asia Pasifik berakhir pada?|15 Agustus 1945|10 Juli 1946|14 Agustus 1945|15 Juli 1945|12 Agustus 1944|15 Agustus 1945",
"Perang Pasifik dimulai pada tahun?|1939|1940|1941|1942|1943|1941",
"Penyebab utama Amerika Serikat ikut terlibat dalam perang Pasifik adalah?|Invasi Jepang ke Amerika Serikat|Serangan Pearl Harbor oleh Jepang|Dukungan Jepang pada Jerman Nazi|Konflik perdagangan antara Jepang dan Amerika Serikat|Tekanan publik Amerika Serikat untuk ikut campur dalam perang|Serangan Pearl Harbor oleh Jepang",
"Pengaruh perang Pasifik terhadap Indonesia adalah?|Indonesia menjadi koloni Jepang selama perang|Indonesia menjadi tempat pertempuran antara Jepang dan Amerika Serikat|Ekonomi Indonesia merosot karena terganggu oleh perang|Indonesia menjadi pusat perdagangan bagi Jepang dan Amerika Serikat selama perang|Indonesia tidak terpengaruh oleh perang karena netral|Indonesia menjadi koloni Jepang selama perang",
"Akibat dari kekalahan Jepang dalam perang Dunia Kedua bagi Indonesia adalah?|Indonesia menjadi negara merdeka dan terbebas dari penjajahan|Indonesia tetap dikuasai oleh Jepang sebagai negara boneka|Indonesia bergabung dengan Jepang dan menjadi bagian dari kekaisaran Jepang|Indonesia menjadi koloni Barat setelah kekalahan Jepang|Indonesia dibagi menjadi dua negara oleh sekutu Barat dan Jepang|Indonesia menjadi negara merdeka dan terbebas dari penjajahan",
"Peran Amerika Serikat dalam kemerdekaan Indonesia setelah perang Dunia Kedua adalah?|Amerika Serikat mendukung kemerdekaan Indonesia|Amerika Serikat menentang kemerdekaan Indonesia|Amerika Serikat tidak terlibat dalam proses kemerdekaan Indonesia|Amerika Serikat memberikan dukungan militer pada Belanda dalam menaklukkan Indonesia|Amerika Serikat mengambil alih pemerintahan Indonesia setelah Jepang menyerah|Amerika Serikat mendukung kemerdekaan Indonesia",
"Faktor utama yang menyebabkan kekalahan Jepang di Perang Pasifik adalah?|Kekurangan sumber daya alam dan manusia|Kekuatan militer sekutu yang lebih besar|Kurangnya dukungan dari negara-negara sekutu Jepang|Kelemahan strategi militer Jepang|Ketidakmampuan industri Jepang untuk memproduksi persenjataan yang cukup|Kekuatan militer sekutu yang lebih besar",
"Faktor yang memperburuk kondisi Jepang selama perang Dunia Kedua adalah?|Keputusan Jepang untuk menyerang Amerika Serikat di Pearl Harbor|Pertempuran di Pasifik yang membutuhkan banyak sumber daya dan logistik|Penyerahan diri Italia yang memperkuat blok sekutu|Kebijakan rasial Jepang yang membuat banyak negara tidak mau bersekutu dengan mereka|Tekanan politik dalam negeri yang memaksa Jepang terus berperang|Keputusan Jepang untuk menyerang Amerika Serikat di Pearl Harbor",
"Berikut yang membedakan taktik Jepang dalam perang Pasifik dengan taktik mereka dalam perang Dunia Kedua di Asia adalah?|Taktik Jepang dalam perang Pasifik lebih ofensif dan agresif|Taktik Jepang dalam perang Pasifik lebih bertumpu pada serangan darat|Taktik Jepang dalam perang Dunia Kedua di Asia lebih bertumpu pada serangan udara|Taktik Jepang dalam perang Dunia Kedua di Asia lebih bertumpu pada serangan kapal selam|Taktik Jepang dalam perang Dunia Kedua di Asia lebih bertumpu pada serangan kejutan dan gerilya|Taktik Jepang dalam perang Pasifik lebih ofensif dan agresif",
"BPUPKI dibubarkan pada tanggal 7 Agustus 1945. Adapun gantinya Jepang membentuk panitia persiapan kemerdekaan Indonesia (PPKI) atau lebih dikenal dengan?|Dokuritsu Zyunbi Inkai|Jibakutai|Kaikyo Seinen Teishinti|Seinendan|Fujinkai|Dokuritsu Zyunbi Inkai",
"Rancangan Undang-Undang Dasar untuk negara Indonesia telah disusun kemudian dibentuk PPKI yang diketuai oleh?|Drs. Moh. Hatta|Ir. Soekarno|Mr. Soepomo|Dr. Soeleman|Mr. A.A. Maramis|Ir. Soekarno",
"Hasil utama dari pertempuran di Guam adalah?|Kemenangan Jepang|Kemenangan Amerika|Perdamaian antara Jepang dan Amerika|Pembentukan aliansi antara Jepang dan Guam|Kedaulatan Guam diserahkan ke Jepang|Kemenangan Amerika",
"Tokoh yang memimpin pasukan Amerika dalam pertempuran di Palau adalah?|Dwight D. Eisenhower|Chester Nimitz|Douglas MacArthur|George Patton|William Halsey|Douglas MacArthur",
"Dampak utama dari ekspansi Jepang ke Guam dan Palau adalah?|Meningkatkan kepercayaan diri Jepang dalam Perang Pasifik|Meningkatkan kemampuan militer Jepang dalam pertempuran laut|Mengurangi kemampuan Amerika untuk melakukan serangan balik di Pasifik|Menunjukkan kekuatan Jepang kepada negara-negara lain di Asia|Memperkecil kemampuan Amerika untuk melakukan serangan balik di Pasifik|Meningkatkan kepercayaan diri Jepang dalam Perang Pasifik",
"Jepang mulai menyerang Mariana Utara dalam perang Pasifik pada?|Desember 1941|Januari 1942|Februari 1942|Juni 1944|Juli 1944|Desember 1941",
"Tujuan utama dari ekspansi Jepang ke Mariana Utara adalah?|Menguasai sumber daya alam di daerah tersebut|Memperluas wilayah kekuasaan Jepang|Menghancurkan basis militer Amerika di Pasifik|Meningkatkan prestise militer Jepang|Memotong jalur pasokan Amerika ke Asia|Menghancurkan basis militer Amerika di Pasifik",
"Nama panglima tertinggi militer Jepang yang memimpin serangan ke Mariana Utara adalah?|Yamamoto Isoroku|Hirohito|Tojo Hideki|Saito Makoto|Kuribayashi Tadamichi|Kuribayashi Tadamichi",
"Hasil utama dari pertempuran di Mariana Utara adalah?|Kemenangan Jepang|Kemenangan Amerika|Perdamaian antara Jepang dan Amerika|Pembentukan aliansi antara Jepang dan Mariana Utara|Kedaulatan Mariana Utara diserahkan ke Jepang|Kemenangan Amerika",
"Dampak utama dari ekspansi Jepang ke Mariana Utara adalah?|Meningkatkan kepercayaan diri Jepang dalam Perang Pasifik|Meningkatkan kemampuan militer Jepang dalam pertempuran laut|Mengurangi kemampuan Amerika untuk melakukan serangan balik di Pasifik|Menunjukkan kekuatan Jepang kepada negara-negara lain di Asia|Melemahkan sistem politik Jepang|Mengurangi kemampuan Amerika untuk melakukan serangan balik di Pasifik",
"Tujuan Jepang dalam memperbaiki infrastruktur kesehatan di Indonesia selama pendudukan adalah?|Meningkatkan kualitas layanan kesehatan di Indonesia|Meningkatkan akses kesehatan bagi masyarakat Indonesia|Memperkuat ekonomi Jepang di Indonesia|Meningkatkan produksi sumber daya alam Indonesia|Menguasai sektor kesehatan di Indonesia|Meningkatkan kualitas layanan kesehatan di Indonesia",
"Sidang pertama BPUPKI dilaksanakan pada?|29 April-1 Mei 1945|29 Juni-1 Juli 1945|29 Mei-1 Juni 1946|29 April-1 Juni 1945|29 Mei-1 Juni 1945|29 Mei-1 Juni 1945",
"Kondisi buruk yang dialami rakyat Indonesia selama masa penjajahan Belanda memicu gerakan?|Ekspansi|Nasionalis Indonesia|Transformasi pemerintahan|Desentralisasi politik|Imparsial|Nasionalis Indonesia",
"Invasi Jepang ke Hindia Belanda pada awalnya mengalami perlawanan dari tentara Hindia Belanda yang dibantu oleh?|Tentara Amerika Serikat|Tentara sekutu|Tentara Indonesia|Tentara Tiongkok|Tentara Pasifik|Tentara sekutu",
"Dasar negara akan dijadikan pedoman pemerintahan dalam suatu negara untuk?|Menjalankan amanat para pahlawan|Menjalankan tugas dan tanggung jawab|Menjalankan cita-cita bangsa|Menjalankan perjuangan panjang pahlawan nasional|Menjalankan masalah|Menjalankan cita-cita bangsa",
"Tanggal disahkan Pancasila adalah?|17 Agustus 1945|18 Agustus 1945|19 Agustus 1945|20 Agustus 1945|21 Agustus 1945|18 Agustus 1945",
"Pasukan Belanda pertama kali tiba di Indonesia setelah menolak proklamasi kemerdekaan pada?|September 1945|Oktober 1945|November 1945|Desember 1945|Januari 1946|November 1945",
"Golongan muda telah mengadakan suatu perundingan di salah satu lembaga di Jalan Pegangsaan Timur Jakarta pada?|15 Agustus 1945|16 Agustus 1945|17 Agustus 1945|18 Agustus 1945|19 Agustus 1945|17 Agustus 1945",
"Lokasi Rengasdengklok berada dekat dari Kota?|Jakarta|Bandung|Yogyakarta|Surabaya|Semarang|Jakarta",
"Tindakan yang dilakukan para pemuda setelah berhasil menahan Ir Soekarno dan Drs. Moh Hatta di Rengasdengklok adalah?|Membuat deklarasi kemerdekaan Indonesia secara sepihak|Memprotes kebijakan Jepang yang merugikan rakyat Indonesia|Menyerahkan Ir Soekarno dan Drs. Moh Hatta ke tangan Belanda|Membuat perjanjian dengan Jepang untuk menyerahkan kedaulatan Indonesia|Mendesak Ir. Soekarno dan Drs. Moh Hatta untuk segera melaksanakan proklamasi kemerdekaan Indonesia|Mendesak Ir. Soekarno dan Drs. Moh Hatta untuk segera melaksanakan proklamasi kemerdekaan Indonesia",
"Mesir memberikan dukungan diplomatik untuk Indonesia setelah mendengar kabar kemerdekaan pada 17 Agustus 1945 karena?|Mesir ingin menjalin hubungan dagang dengan Indonesia|Mesir memiliki hubungan historis dengan Indonesia|Mesir ingin memperluas pengaruhnya di Asia Tenggara|Mesir memiliki kepentingan politik yang sama dengan Indonesia|Mesir ingin menandingi pengaruh Belanda di Indonesia|Mesir memiliki kepentingan politik yang sama dengan Indonesia",
"Faktor utama kekalahan Jepang dalam perang Dunia Kedua adalah?|Kurangnya sumber daya alam Jepang|Strategi perang yang buruk|Teknologi militer yang ketinggalan zaman|Keberhasilan militer sekutu dalam mengerahkan kekuatan besar-besaran|Kurangnya dukungan dari penduduk Jepang|Keberhasilan militer sekutu dalam mengerahkan kekuatan besar-besaran",
"Akibat langsung dari kekalahan Jepang dalam perang Pasifik adalah?|Kemerdekaan Indonesia|Pembentukan Perserikatan Bangsa-Bangsa (PBB)|Pemulihan ekonomi global|Pembentukan blok komunis di Asia|Kembalinya kekuasaan kolonial Eropa di Asia|Kemerdekaan Indonesia",
"Berikut ini merupakan harta milik rakyat Indonesia yang dimodali oleh Belanda kecuali?|Perekonomian|Bank|Pertambangan|Perusahaan transportasi|Perusahaan jasa|Perusahaan jasa",
"Siaran radio Proklamasi Kemerdekaan Indonesia dibacakan oleh?|Ir Soekarno dan Drs Moh Hatta|Drs. Moh. Hatta dan Sutan Sjahrir|Ir. Soekarno dan Sutan Sjahrir|H Agus Salim dan Soebadio Sastrosatomo|Ki Hajar Dewantara dan H Samanhudi|Ir Soekarno dan Drs Moh Hatta",
"Organisasi keibodan dibentuk pada?|18 Agustus 1943|7 April 1943|29 April 1943|22 September 1943|28 Desember 1978|29 April 1943",
"Menuliskan pesan-pesan di pohon batu dan bangunan-bangunan kosong sebagai bentuk dukungan dan semangat untuk mempertahankan kemerdekaan disebut menyebarkan berita dengan?|Vandalisme|Lisan|Pamphlet|Koran|Radio|Vandalisme",
"Salah satu bentuk respons dari pihak penjajah terhadap proklamasi Kemerdekaan Indonesia adalah dengan?|Mengakui kemerdekaan Indonesia|Menolak kemerdekaan Indonesia|Menerima kemerdekaan Indonesia dengan syarat|Menunda pengakuan kemerdekaan Indonesia|Memberikan persyaratan untuk Indonesia merdeka|Menunda pengakuan kemerdekaan Indonesia",
"Gubernur Jenderal Hindia Belanda yang mengecam proklamasi kemerdekaan bangsa Indonesia adalah?|Westerling|Idenburg|De Jonge|Tjarda Steckelbourg|Van Mook|Tjarda Steckelbourg",
"Proklamasi Kemerdekaan Indonesia diproklamasikan pada?|16 Agustus 1945|17 Agustus 1945|18 Agustus 1945|19 Agustus 1945|20 Agustus 1945|17 Agustus 1945",
"Hubungan diplomatik antara Arab Saudi dan Indonesia secara resmi dimulai pada tanggal?|6 Juli 1947|1 Mei 1950|29 Juli 1947|10 Mei 1950|1 Mei 1947|1 Mei 1947",
"Naskah proklamasi klan ditinggal pada?|Rumah Laksamana Muda Tadashi Maeda|Rumah Ibu Fatmawati|Rumah B M Diah|Rumah Sayuti Melik|Rumah Tomegoro Yoshizuma|Rumah Laksamana Muda Tadashi Maeda",
"Bendera Merah Putih dijahit oleh?|R.A Kartini|Cut Nyak Dien|Fatmawati|Cut Kartika|Nyi Ahmad Dahlan|Fatmawati",
"Yang tidak termasuk organisasi semi-militer pada masa pendudukan Jepang di Indonesia adalah?|Fujinkai|Seinendan|Keibodan|Heiho|PETA|Fujinkai",
"Agar bangsa Indonesia bersedia membela Jepang dan rela bekerja tanpa diupah, Jepang menyebut pekerja dengan istilah?|Romusha|Pahlawan Pekerja|Karyawan Kehormatan|Prajurit Ekonomi|Sukarelawan Asia|Romusha",
"Makna penggalan pernyataan proklamasi 'Kami bangsa Indonesia dengan ini menyatakan kemerdekaan Indonesia' bagi bangsa Indonesia adalah?|Proklamasi sebagai awal penjajahan baru|Proklamasi sebagai simbol kerja sama dengan Jepang|Proklamasi Kemerdekaan merupakan puncak perjuangan|Proklamasi sebagai bentuk kemenangan Jepang|Proklamasi hanya formalitas belaka|Proklamasi Kemerdekaan merupakan puncak perjuangan",
"Media utama dalam penyebaran kemerdekaan Indonesia agar diketahui orang banyak adalah?|Surat kabar Jepang|Radio Tokyo|RRI (Radio Republik Indonesia)|Telegram rahasia|Pamflet bawah tanah|RRI (Radio Republik Indonesia)",
"Dalam janji Perdana Menteri Koiso (1944), wilayah Indonesia setelah merdeka meliputi?|Hanya Jawa dan Sumatera|Seluruh bekas wilayah pemerintah Belanda|Wilayah yang dikuasai Jepang saat itu|Hanya pulau-pulau strategis|Tidak ada batasan jelas|Seluruh bekas wilayah pemerintah Belanda",
"Hasil rapat golongan muda di laboratorium bakteriologi Jakarta (15 Agustus 1945) adalah?|Menyerah kepada Jepang|Mendesak Soekarno-Hatta melepaskan diri dari ikatan Jepang|Membentuk pemerintahan darurat|Menolak proklamasi kemerdekaan|Meminta bantuan sekutu|Mendesak Soekarno-Hatta melepaskan diri dari ikatan Jepang",
"Salah satu makna proklamasi pada aspek ketatanegaraan adalah?|Indonesia menjadi negara federasi|Bebas mengatur pemerintahan sendiri sesuai konstitusi|Tetap di bawah pengaruh Jepang|Menjadi bagian dari Persemakmuran|Sistem kerajaan diterapkan|Bebas mengatur pemerintahan sendiri sesuai konstitusi",
"Tokoh yang berpendapat bahwa Soekarno-Hatta harus menandatangani naskah proklamasi atas nama bangsa Indonesia adalah?|Ahmad Soebardjo|Soekarni|Wikana|Laksamana Maeda|Sutan Syahrir|Soekarni",
"Tokoh yang bertugas mengibarkan bendera merah putih saat proklamasi kemerdekaan adalah?|Sutan Syahrir|Latief Hendraningrat|B.M. Diah|Chaerul Saleh|Sayuti Melik|Latief Hendraningrat",
"Dengan dibentuknya kabinet Syahrir, Indonesia menganut sistem kabinet?|Presidensial|Parlementer|Monarki|Komunis|Militer|Parlementer",
"Jaminan yang diberikan Ahmad Soebardjo kepada pemuda saat menjemput Soekarno-Hatta di Rengasdengklok adalah?|Proklamasi akan dibatalkan|Proklamasi dilaksanakan selambat-lambatnya 17 Agustus 1945|Jepang akan membantu kemerdekaan|Golongan tua akan mengundurkan diri|Pemuda akan memimpin pemerintahan|Proklamasi dilaksanakan selambat-lambatnya 17 Agustus 1945",
"Tujuan pemerintah tidak membentuk organisasi tentara pada awal kemerdekaan adalah?|Tidak ada pemimpin yang mampu|Agar tidak memancing kekuatan asing|Tentara dianggap tidak diperlukan|Lebih fokus pada ekonomi|Jepang melarang pembentukan tentara|Agar tidak memancing kekuatan asing",
"Tujuan utama Jepang membentuk PETA adalah?|Membantu Indonesia merdeka|Mendapatkan bantuan dalam menghadapi perang Pasifik|Melatih pemuda untuk melawan Belanda|Membentuk negara boneka|Memperbaiki citra Jepang|Mendapatkan bantuan dalam menghadapi perang Pasifik",
"Pernyataan yang menggambarkan praktek ekonomi Jepang di Indonesia adalah?|Jepang meningkatkan kesejahteraan rakyat|Jepang menguras sumber ekonomi untuk perang|Membangun industri modern|Memberikan bantuan finansial|Melarang semua kegiatan ekonomi|Jepang menguras sumber ekonomi untuk perang",
"Kondisi pendidikan masa pendudukan Jepang adalah?|Sistem pendidikan bebas dan modern|Difokuskan untuk kebutuhan perang Jepang|Dilarang bagi pribumi|Hanya untuk elite Jepang|Tidak ada perubahan berarti|Difokuskan untuk kebutuhan perang Jepang",
"Tujuan pembentukan Jawa Hokokai (1944) adalah?|Memperjuangkan kemerdekaan Indonesia|Menggalang dukungan rakyat untuk perang Jepang|Membentuk pemerintahan Indonesia|Melawan sekutu secara mandiri|Mempersiapkan sistem pendidikan|Menggalang dukungan rakyat untuk perang Jepang",
"Prinsip demokrasi dalam Pembukaan UUD 1945 tercermin dalam kalimat?|'Negara melindungi segenap bangsa'|'Terbentuknya suatu negara RI yang berkedaulatan rakyat'|'Kemerdekaan adalah hak segala bangsa'|'Dengan rahmat Tuhan Yang Maha Esa'|'Menjunjung tinggi hukum kolonial'|'Terbentuknya suatu negara RI yang berkedaulatan rakyat'",
"Wilayah Indonesia yang diakui Belanda berdasarkan Perundingan Renville adalah?|Seluruh Indonesia|Jawa, Jawa Tengah, dan Yogyakarta|Hanya Sumatera|Papua dan Maluku|Tidak ada pengakuan|Jawa, Jawa Tengah, dan Yogyakarta",
"Upaya mengatasi kesulitan keuangan awal kemerdekaan oleh Menteri Keuangan Ir. Suratman adalah?|Mencetak uang sendiri|Program pinjaman nasional|Meminta bantuan asing|Menjual aset negara|Mengandalkan Jepang|Program pinjaman nasional",
"Provinsi yang tidak dibentuk saat Indonesia merdeka adalah?|Sumatera|Jawa Barat|Kalimantan|Sulawesi|Papua|Papua",
"Pemimpin pertempuran 10 November 1945 di Surabaya adalah?|Jenderal Sudirman|Soetomo (Bung Tomo)|Ahmad Yani|Gatot Subroto|Oerip Soemohardjo|Soetomo (Bung Tomo)",
"Reaksi langsung dukungan spontan terhadap proklamasi kecuali?|Pengibaran bendera merah putih|Pelucutan senjata dan pengambilalihan aset Jepang|Rapat raksasa di Lapangan Ikada|Pembentukan badan pemerintahan|Penyebaran berita kemerdekaan|Pembentukan badan pemerintahan",
"Makna 'status quo' dalam penyerahan Jepang kepada sekutu (1945) adalah?|Jepang harus meninggalkan Indonesia|Jepang wajib menjaga Indonesia tanpa kebijakan baru|Indonesia langsung merdeka|Sekutu mengambil alih pemerintahan|Jepang boleh tetap berkuasa|Jepang wajib menjaga Indonesia tanpa kebijakan baru",
"Koperasi pertanian yang dibentuk Jepang untuk menarik simpati petani disebut?|Kumiai|Keibodan|Nogyo Kumiai|Kinrohoshi|Romusha|Nogyo Kumiai",
"Tujuan Jepang membentuk tentara sukarela dari pemuda Indonesia adalah?|Memerdekakan Indonesia|Sebagai cadangan pasukan melawan sekutu|Menggantikan tentara Jepang|Melatih pemuda untuk pemerintahan|Membentuk negara boneka|Sebagai cadangan pasukan melawan sekutu",
"Lembaga kebudayaan yang dibentuk Jepang untuk propaganda adalah?|Keimin Bunka Shidoso|Jawa Hokokai|Pusat Kebudayaan Asia|Sendenbu|BPUPKI|Keimin Bunka Shidoso",
"Anggota PPKI yang berasal dari Aceh adalah?|Teuku Umar|Teuku Mohammad Hasan|Cut Nyak Dhien|Panglima Polim|Hasan Tiro|Teuku Mohammad Hasan",
"Peristiwa Rengasdengklok disimpulkan sebagai?|Kekalahan golongan muda|Kemenangan semangat muda dalam detik-detik proklamasi|Awal pendudukan sekutu|Kegagalan proklamasi|Perseteruan internal Jepang|Kemenangan semangat muda dalam detik-detik proklamasi",
"Alasan Soekarno-Hatta menyusun teks proklamasi di rumah Laksamana Maeda adalah?|Maeda adalah pejabat Jepang sahabat Ahmad Soebardjo|Rumahnya paling aman dari sekutu|Tidak ada tempat lain|Maeda memaksa|Dipilih oleh golongan muda|Maeda adalah pejabat Jepang sahabat Ahmad Soebardjo",
"Proklamasi dipindahkan dari Lapangan Ikada ke Jl. Pegangsaan Timur karena?|Lapangan Ikada terlalu kecil|Dikhawatirkan memicu bentrok dengan militer Jepang|Tidak ada izin dari sekutu|Cuaca buruk|Soekarno tidak mau hadir|Dikhawatirkan memicu bentrok dengan militer Jepang",
"Tokoh asing yang berperan dalam proklamasi kemerdekaan adalah?|Jenderal MacArthur|Laksamana Muda Maeda|Lord Mountbatten|Van Mook|Kaisar Hirohito|Laksamana Muda Maeda",
"Surat kabar asal Surabaya yang pertama menyebarkan berita kemerdekaan adalah?|Suara Asia|Jawa Pos|Merdeka|Tjahaja|Pembangunan|Tjahaja",
"Reaksi golongan muda ketika mendengar kekalahan Jepang adalah?|Menunggu instruksi Jepang|Menuntut Soekarno-Hatta segera memproklamasikan kemerdekaan|Membubarkan PPKI|Meminta bantuan sekutu|Mengakui kekalahan Jepang|Menuntut Soekarno-Hatta segera memproklamasikan kemerdekaan",
"Tujuan pertemuan Soekarno-Hatta dengan Nishimura setelah Rengasdengklok adalah?|Meminta bantuan militer|Menjejaki sikap Jepang terhadap rencana kemerdekaan|Melapor kepada sekutu|Membahas pembagian kekuasaan|Meminta pengakuan kemerdekaan|Menjejaki sikap Jepang terhadap rencana kemerdekaan",
"Alasan awal rakyat Indonesia menerima kedatangan sekutu adalah?|Kedatangan sekutu untuk melucuti Jepang dan memulangkan mereka|Sekutu menjanjikan kemerdekaan|Sekutu membawa bantuan ekonomi|Tidak ada pilihan lain|Sekutu dianggap sebagai sekutu Indonesia|Kedatangan sekutu untuk melucuti Jepang dan memulangkan mereka",
"Wilayah Indonesia yang diakui Belanda berdasarkan Perundingan Linggarjati adalah?|Sumatera, Jawa, dan Madura|Seluruh Indonesia|Hanya Jawa|Papua dan Maluku|Tidak ada pengakuan|Sumatera, Jawa, dan Madura",
"Peran Sutan Syahrir dalam mempertahankan kemerdekaan adalah?|Pemimpin golongan muda non-kooperatif yang mendesak proklamasi|Menjadi perdana menteri pertama|Memimpin pertempuran Surabaya|Menandatangani naskah proklamasi|Menjadi wakil presiden|Menjadi perdana menteri pertama",
"Kabinet parlementer pertama Indonesia dipimpin oleh?|Soekarno|Mohammad Hatta|Sutan Syahrir|Amir Syarifuddin|Tan Malaka|Sutan Syahrir"
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 1800;
let shuffledQuestions = [];
let currentQuestionData = {};

document.addEventListener('DOMContentLoaded', () => {
    shuffledQuestions = shuffleArray([...soal]);
    
    loadQuestion();
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    startTimer();
});

function loadQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        endQuiz();
        return;
    }

    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-btn');

    feedbackElement.textContent = '';
    feedbackElement.style.color = '';
    optionsContainer.innerHTML = '';
    nextButton.disabled = true;

    const parts = shuffledQuestions[currentQuestionIndex].split('|');

    currentQuestionData = {
        question: parts[0],
        options: parts.slice(1, 6),
        answer: parts[6]
    };

    questionElement.textContent = `Soal ${currentQuestionIndex + 1}: ${currentQuestionData.question}`;

    const shuffledOptions = shuffleArray([...currentQuestionData.options]);

    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = `${String.fromCharCode(97 + index)}) ${option}`;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const feedbackElement = document.getElementById('feedback');
    const options = document.querySelectorAll('.option-btn');
    const nextButton = document.getElementById('next-btn');

    options.forEach(option => {
        option.disabled = true;
    });

    if (selectedOption === currentQuestionData.answer) {
        feedbackElement.textContent = "Lanjut!";
        feedbackElement.style.color = "green";
        score++;
        document.getElementById('score').textContent = `Skor: ${score}`;
    } else {
        feedbackElement.textContent = `Salah! Jawaban benar: ${currentQuestionData.answer}`;
        feedbackElement.style.color = "red";
    }

    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById('question').textContent = `Kuis Selesai! Skor Anda: ${score}/${shuffledQuestions.length}`;
    document.getElementById('options').innerHTML = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('feedback').textContent = "Terima kasih telah mengerjakan kuis!";
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `Sisa waktu: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
