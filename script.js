const soal = [
"Harmoni dalam keberagaman adalah:|kesamaan budaya|kerjasama antarindividu yang berbeda|penghindaran konflik|diskriminasi terhadap perbedaan|keterasingan|kerjasama antarindividu yang berbeda|",
"Penting untuk menciptakan harmoni di masyarakat yang beragam untuk:|menghindari perdebatan|semua orang berpikir sama|mempromosikan toleransi dan saling menghormati|memperkuat dominasi satu kelompok|mengurangi keragaman|mempromosikan toleransi dan saling menghormati",
"Sikap yang paling mendukung harmoni dalam keberagaman adalah:|intoleransi|rasa ingin tahu|ketidakpedulian|stereotip|penghindaran|rasa ingin tahu|",
"Untuk menciptakan harmoni di sekolah yang beragam, dapat melakukan:|memisahkan siswa berdasarkan latar belakang|mengadakan acara budaya yang melibatkan semua siswa|mengabaikan perbedaan|membuat kebijakan diskriminatif|menghukum yang berbeda|mengadakan acara budaya yang melibatkan semua siswa",
"Salah satu cara untuk memahami budaya lain adalah melalui:|stereotip|pendidikan multikultural|diskusi sepihak|menghindari interaksi|pembelajaran sepihak|pendidikan multikultural",
"Sumber konflik yang sering terjadi dalam masyarakat yang beragam adalah:|kesamaan tujuan|perbedaan nilai dan norma|kebersamaan dalam aktivitas|penghargaan terhadap keberagaman|komunikasi yang efektif|perbedaan nilai dan norma",
"Dalam konteks keberagaman, diskriminasi dapat menyebabkan:|peningkatan kerukunan|meningkatnya rasa saling percaya|ketegangan dan konflik|kolaborasi yang lebih baik|peningkatan partisipasi masyarakat|ketegangan dan konflik",
"Potensi konflik sering kali muncul karena:|ketidakpahaman terhadap perbedaan|kesamaan hobi|kolaborasi yang kuat|keinginan untuk berinteraksi|rasa empati|ketidakpahaman terhadap perbedaan",
"Dalam masyarakat yang beragam, konflik dapat dipicu oleh:|keberagaman budaya|kepentingan politik yang berbeda|kegiatan sosial yang positif|peningkatan komunikasi|solidaritas antarkelompok|keberagaman budaya",
"Salah satu tanda awal adanya potensi konflik adalah:|meningkatnya interaksi sosial|perdebatan yang sehat|komunikasi yang terhambat|keterlibatan dalam kegiatan komunitas|pertukaran ide yang konstruktif|komunikasi yang terhambat",
"Apa yang dapat dilakukan untuk mengatasi konflik antar kelompok yang berbeda?:|memperkuat perbedaan|mengabaikan masalah|mengadakan dialog antarpihak|memperburuk keadaan|menciptakan kesenjangan|mengadakan dialog antarpihak",
"Dalam menyelesaikan konflik, penting untuk:|memfokuskan pada kesalahan individu|mendengarkan semua pihak yang terlibat|mengedepankan ego pribadi|menyebarkan desas-desus|mengabaikan pendapat orang lain|mendengarkan semua pihak yang terlibat",
"Pendekatan apa yang efektif untuk meredakan konflik?:|penggunaan kekerasan|mediasi|pengecualian pihak tertentu|paksaan|pengabaian masalah|mediasi",
"Solusi jangka panjang untuk konflik adalah:|meningkatkan ketegangan|membangun rasa saling pengertian|menyalahkan pihak lain|menjauh dari masalah|menyebarkan informasi yang salah|membangun rasa saling pengertian",
"Edukasi mengenai keberagaman dapat membantu mengurangi konflik dengan cara:|mengajarkan toleransi dan penghormatan|memperkuat stereotip|menghilangkan perbedaan|menekankan pada kesamaan yang tidak relevan|mengisolasi kelompok tertentu|mengajarkan toleransi dan penghormatan",
"Peran warga negara dalam menyelesaikan konflik adalah:|menghindari keterlibatan|menyebarkan kebencian|berpartisipasi aktif dalam dialog|menciptakan perpecahan|memperkuat stereotip|berpartisipasi aktif dalam dialog",
"Salah satu cara warga negara dapat berkontribusi dalam menyelesaikan konflik adalah dengan:|menggunakan media sosial untuk provokasi|mengorganisir forum diskusi|mengabaikan isu yang ada|memperkuat sikap egois|menyebarkan informasi yang tidak akurat|mengorganisir forum diskusi",
"Keterlibatan dalam kegiatan komunitas dapat:|meningkatkan konflik|membangun rasa saling pengertian|mengurangi interaksi sosial|memperburuk ketegangan|mengisolasi individu|membangun rasa saling pengertian",
"Seorang warga negara dapat mencegah konflik dengan cara:|menjaga jarak dengan yang berbeda|membangun jaringan komunikasi yang baik|mengabaikan masalah yang ada|menguatkan diskriminasi|menyebarkan rumor|membangun jaringan komunikasi yang baik",
"Gagasan solutif untuk menyelesaikan konflik dalam masyarakat adalah:|menambah ketegangan|menyebarkan kebencian|memfasilitasi mediasi|mengabaikan perbedaan|meningkatkan isolasi|memfasilitasi mediasi",
"Dalam masyarakat beragam, rasa saling menghormati dapat dibangun melalui:|pendidikan multikultural|ketidakpedulian|penutupan informasi|pemaksaan nilai tunggal|isolasi kelompok|pendidikan multikultural",
"Contoh konflik sosial yang sering terjadi di masyarakat adalah:|pertemanan antarindividu|ketidakpuasan atas kebijakan publik|kerjasama antarkelompok|dialog antarbudaya|penerimaan terhadap perbedaan|ketidakpuasan atas kebijakan publik",
"Salah satu langkah awal dalam menyelesaikan konflik adalah:|mengabaikan perasaan pihak lain|memaksakan pendapat sendiri|menyebarkan rumor|menghindari pertemuan|mendengarkan dan memahami sudut pandang|mendengarkan dan memahami sudut pandang",
"Dalam konteks penyelesaian konflik, negosiasi harus dilakukan dengan:|sikap terbuka dan saling menghormati|intimidasi|memaksakan kehendak|mengabaikan masukan pihak lain|menjaga jarak|sikap terbuka dan saling menghormati",
"Solusi win-win dalam konflik adalah:|solusi yang menguntungkan satu pihak|solusi yang menguntungkan semua pihak|solusi yang tidak mempertimbangkan pihak lain|dialog dan pendidikan|menghindari isu sensitif|solusi yang menguntungkan semua pihak",
"Strategi yang dapat dilakukan untuk mendorong harmoni adalah:|membentuk kelompok eksklusif|menyelenggarakan acara bersama|mengabaikan budaya lokal|mengedepankan satu suku|menciptakan kebijakan diskriminatif|menyelenggarakan acara bersama",
"Salah satu keuntungan dari keberagaman adalah:|munculnya konflik yang terus menerus|pertukaran ide dan inovasi|penolakan terhadap perbedaan|pembatasan hak asasi manusia|pembentukan stereotip|pertukaran ide dan inovasi",
"Peran pendidikan dalam mengatasi konflik adalah:|meningkatkan ketidakpahaman|memberikan pemahaman tentang toleransi|memperburuk stereotip|mengabaikan perbedaan|menyebarkan kebencian|memberikan pemahaman tentang toleransi",
"Pentingnya toleransi dalam masyarakat beragam adalah:|untuk menciptakan persaingan|untuk menciptakan kedamaian dan kerukunan|agar konflik tetap ada|solusi yang mengarah pada konflik lebih lanjut|solusi yang tidak diharapkan|untuk menciptakan kedamaian dan kerukunan",
"Berikut ini yang bukan sikap dan perilaku dalam menjaga NKRI adalah:|patuh pada peraturan|menghormati simbol negara|ikut serta dalam bela negara|membayar pajak|melanggar peraturan kedaulatan bangsa|melanggar peraturan kedaulatan bangsa",
"Semboyan Bhinneka Tunggal Ika berasal dari kitab:|Mahabharata|Ramayana|Arthasastra|Negarakertagama|Sutasoma|Sutasoma",
"Landasan hukum persatuan dan kesatuan secara konstitusional dalam UUD NKRI 1945 adalah:|Pasal 2 Ayat 2|Pasal 3 Ayat 3|Pasal 4 Ayat 4|Pasal 5 Ayat 1|Pasal 1 Ayat 1|Pasal 1 Ayat 1",
"Berikut yang merupakan contoh dari paham provinsialisme adalah:|mementingkan kepentingan nasional|mengutamakan kerjasama internasional|memperjuangkan keadilan sosial|mendukung kebijakan pemerintah pusat|mementingkan kepentingan daerah sendiri|mementingkan kepentingan daerah sendiri",
"Kemerdekaan bangsa Indonesia dicapai berkat adanya:|bantuan asing|kekuatan militer|diplomasi internasional|isolasi dari dunia luar|persatuan dan kesatuan|persatuan dan kesatuan",
"Mengakui bahwa Indonesia mempunyai berbagai suku, ras, budaya, serta kebiasaan yang berbeda-beda merupakan prinsip:|Chauvinisme|Provinsialisme|Extrimisme|Sekularisme|Bhinneka Tunggal Ika|Bhinneka Tunggal Ika",
"Paham yang mengagung-agungkan bangsa atau negara sendiri dan memandang rendah bangsa lain disebut:|Nasionalisme|Patriotisme|Extrimisme|Sekularisme|Chauvinisme|Chauvinisme",
"Kerukunan hidup bermasyarakat merupakan syarat untuk:|meningkatkan individualisme|memperbesar kesenjangan sosial|menghilangkan keragaman budaya|meningkatkan kesejahteraan pribadi|menjaga keutuhan bangsa dan negara|menjaga keutuhan bangsa dan negara",
"Salah satu faktor pendorong persatuan dan kesatuan bangsa adalah:|adanya perbedaan yang tajam|keterbatasan sumber daya alam|dominasi satu suku bangsa|perbedaan agama|adanya rasa senasib dan seperjuangan yang diakibatkan oleh faktor sejarah|adanya rasa senasib dan seperjuangan yang diakibatkan oleh faktor sejarah",
"Berikut ini faktor integratif bangsa sebagai berkat persatuan, kecuali:|Bahasa Indonesia|Pancasila|Lambang negara|Lagu kebangsaan|Bahasa daerah|Bahasa daerah",
"Pandangan yang melampaui batas kewajaran adalah:|Moderasi|Toleransi|Demokrasi|Sosialisme|Extrimisme|Extrimisme",
"Kini menjadi semboyan nasional, Bhinneka Tunggal Ika sudah ada sejak zaman dahulu kala yaitu sejak masa Kerajaan:|Sriwijaya|Singasari|Kutai|Mataram|Majapahit|Majapahit",
"Penerapan nilai persatuan dan kesatuan yang menanamkan kepribadian yang harus dilakukan sejak dini merupakan penanaman yang dilakukan dalam bidang:|Politik|Ekonomi|Sosial|Hukum|Pendidikan|Pendidikan",
"Tiap-tiap warga negara berhak dan wajib ikut serta dalam usaha bela negara, hal ini merupakan bunyi dari UUD NRI 1945:|Pasal 28 Ayat 1|Pasal 29 Ayat 2|Pasal 30 Ayat 1|Pasal 31 Ayat 1|Pasal 27 Ayat 3|Pasal 27 Ayat 3",
"Tantangan Indonesia dalam menjaga keutuhan NKRI antara lain:|ketersediaan lapangan kerja|stabilitas politik|kemajuan teknologi|pembangunan infrastruktur|meningkatnya kesenjangan sosial ekonomi|meningkatnya kesenjangan sosial ekonomi",
"Hambatan dalam pembangunan ekonomi Indonesia dapat disebabkan oleh berbagai faktor seperti keterbatasan:|sumber daya manusia|kreativitas|kebijakan pemerintah|teknologi|infrastruktur dan modal|infrastruktur dan modal",
"Contoh ancaman terhadap keselamatan bangsa Indonesia dapat berupa:|perkembangan teknologi|peningkatan ekspor|kerjasama internasional|perdagangan bebas|terjadinya bencana alam seperti banjir dan gempa bumi|terjadinya bencana alam seperti banjir dan gempa bumi",
"Strategi utama dalam menghadapi ancaman di bidang sosial budaya adalah memelihara:|dominasi budaya asing|penghapusan budaya lokal|isolasi budaya|modernisasi budaya|keseimbangan antara kemajuan teknologi dan nilai-nilai budaya|keseimbangan antara kemajuan teknologi dan nilai-nilai budaya",
"Dalam bidang ekonomi, strategi yang efektif untuk menghadapi ancaman adalah:|meningkatkan impor|mengurangi produksi dalam negeri|menghindari perdagangan internasional|mengandalkan bantuan luar negeri|menjaga stabilitas harga pasar|menjaga stabilitas harga pasar",
"Untuk menghadapi ancaman di bidang pertahanan dan keamanan, strategi yang paling tepat adalah:|mengurangi anggaran pertahanan|menghindari kerjasama militer|mengandalkan bantuan asing|membatasi latihan militer|memperkuat TNI dan komponen cadangan|memperkuat TNI dan komponen cadangan",
"Dalam bidang politik, strategi yang tepat untuk menghadapi ancaman adalah:|membatasi kebebasan berpendapat|menghindari pemilu|mengurangi transparansi pemerintah|menghilangkan partai politik|meningkatkan partisipasi politik masyarakat|meningkatkan partisipasi politik masyarakat",
"Spionase merupakan kegiatan dari inteligen yang dilakukan untuk mendapatkan:|dukungan politik|popularitas internasional|pengaruh ekonomi|akses jaringan sosial|informasi atau rahasia militer suatu negara|informasi atau rahasia militer suatu negara",
"Masyarakat Indonesia terdiri atas berbagai golongan, suku, etnis, ras, agama, dan budaya. Hal tersebut merupakan keberagaman dalam hal:|politik|gender|ekonomi|pertahanan dan keamanan|sosial budaya|sosial budaya",
"Masyarakat yang memiliki beragam kelompok sosial dengan sistem norma dan kebudayaan yang berbeda-beda disebut masyarakat:|majemuk|homogen|heterogen|tradisional|multicultural|multicultural",
"Masyarakat yang memiliki kelompok sosial kecil dan tinggal di wilayah teritorial kecil adalah:|majemuk|homogen|heterogen|modern|tradisional|tradisional",
"Masyarakat dengan pemikiran rasional dan bersifat individualistis adalah:|majemuk|homogen|perdesaan|multicultural|perkotaan|perkotaan",
"Contoh ketidakadilan gender yang bukan adalah:|kekerasan|stereotipe|subordinasi|marginalisasi|kesetaraan|kesetaraan",
"Contoh stereotipe yang bukan adalah:|laki-laki tidak seharusnya menunjukkan emosi|anggapan perempuan sebagai makhluk yang lemah|perempuan dianggap hanya bisa menjadi ibu rumah tangga|perempuan tidak mampu mengambil keputusan penting|tidak memberikan hak waris kepada perempuan|tidak memberikan hak waris kepada perempuan",
"Pengertian konflik adalah:|asimilasi|akulturasi|konsolidasi|persaingan|konflik|konflik",
"Faktor penyebab konflik yang bukan adalah:|perubahan sosial|perbedaan kebudayaan|perbedaan kepentingan|perbedaan antarindividu|perbedaan wilayah|perbedaan wilayah",
"Sikap menganggap kebudayaan sukunya lebih baik disebut:|fanatisme|diskriminatif|eksklusivisme|primordialisme|etnosentrisme|etnosentrisme",
"Masyarakat Indonesia terdiri atas berbagai golongan, suku, etnis (suku bangsa), ras, agama, dan budaya. Mereka hidup tersebar di berbagai wilayah Negara Indonesia. Mereka juga hidup dan berinteraksi dengan masyarakat internasional, baik secara langsung maupun tidak langsung. Hal tersebut merupakan keberagaman dalam hal:|politik|gender|ekonomi|sosial budaya|pertahanan dan keamanan|sosial budaya",
"Masyarakat yang memiliki beragam kelompok sosial dengan sistem norma dan kebudayaan yang berbeda-beda serta memiliki anggota yang terdiri atas berbagai golongan, suku, etnis, ras, agama dan budaya merupakan masyarakat:|majemuk|homogen|heterogen|tradisional|multicultural|majemuk",
"Masyarakat yang memiliki kelompok sosial yang kecil dan biasanya tinggal di kawasan/ wilayah/teritorial kecil adalah masyarakat:|majemuk|homogen|heterogen|tradisional|multicultural|heterogen",
"Masyarakat yang memiliki pemikiran yang lebih rasional, bersifat individualistis, dan interaksi yang terjadi lebih banyak berdasarkan faktor kepentingan adalah masyarakat:|majemuk|homogen|perdesaan|perkotaan|multicultural|perkotaan",
"Seperangkat peran, perilaku, kegiatan, dan atribut yang dianggap layak bagi laki-laki dan perempuan yang dikonstruksi secara sosial dalam suatu masyarakat merupakan pengertian dari:|sifat|gender|status sosial|kebiasaan masyarakat|kedudukan laki-laki dan Perempuan|gender",
"Ada kaitan yang erat antara perbedaan gender (gender differences) dan ketidakadilan gender (gender inequalities) dalam struktur ketidakadilan masyarakat secara luas. Perbedaan gender tidak menjadi masalah selama tidak melahirkan ketidakadilan gender (gender inequalities). Berikut yang bukan contoh ketidakadilan gender adalah:|kekerasan|stereotipe|kesetaraan|subordinasi|marginalisasi|kesetaraan",
"Salah satu contoh ketidakadilan gender adalah adanya anggapan dalam masyarakat tertentu bahwa perempuan tidak berhak mendapatkan warisan. Contoh tersebut merupakan bentuk ketidakadilan gender yang disebut:|kekerasan|stereotipe|kesetaraan|subordinasi|marginalisasi|marginalisasi",
"Pelabelan negatif (stereotipe) adalah penandaan atau penilaian atau citra buruk yang sering kali bersifat negatif dan secara umum melahirkan ketidakadilan. Berikut yang bukan contoh stereotipe adalah:|laki-laki tidak seharusnya menunjukkan emosi|tidak memberikan hak waris kepada perempuan|anggapan perempuan sebagai makhluk yang lemah|perempuan dianggap hanya dapat menjadi ibu rumah tangga|perempuan sebagai orang yang tidak mampu mengambil keputusan penting|tidak memberikan hak waris kepada perempuan",
"Percekcokan, perselisihan, atau pertentangan yang disebabkan oleh adanya dua hal atau lebih yang berseberangan, tidak selaras, dan bertentangan merupakan pengertian dari:|konflik|asimilasi|akulturasi|konsolidasi|konfrontasi|konflik",
"Konflik merujuk pada adanya dua hal atau lebih yang berseberangan, tidak selaras, dan bertentangan. Terdapat beberapa faktor terjadinya konflik. Berikut yang bukan faktor penyebab konflik adalah:|perubahan sosial|perbedaan wilayah|perbedaan kebudayaan|perbedaan kepentingan|perbedaan antarindividu|perbedaan wilayah",
"Andi merupakan siswa bersuku A. Ia selalu menganggap kebudayaan sukunya lebih baik dibandingkan kebudayaan suku lain. Perilaku Andi merupakan sikap yang disebut:|fanatisme|diskriminatif|eksklusivisme|etnosentrisme|primordialisme|etnosentrisme",
"Konflik dapat timbul akibat perbedaan ras, seperti perbedaan ciri badan, kepentingan, dan kebudayaan. Biasanya, konflik ini terjadi dalam masyarakat yang salah satu rasnya menjadi kelompok mayoritas. Konflik ini disebut konflik:|rasial|politik|pribadi|internasional|antarkelas sosial|rasial",
"Konflik didefinisikan sebagai percekcokan, perselisihan, atau pertentangan. Salah satu bentuk konflik disebabkan oleh perbedaan kepentingan. Konflik yang dimaksud adalah konflik:|SARA|politik|pribadi|internasional|antara kelas-kelas sosial|politik",
"Salah satu konflik yang pernah terjadi di Indonesia adalah konflik Pulau Sipadan dan Ligitan. Konflik ini terjadi antara Indonesia dengan Malaysia terkait klaim atas dua pulau di perbatasan Kalimantan Timur. Konflik tersebut merupakan contoh konflik:|rasial|politik|pribadi|internasional|antara kelas-kelas sosial|internasional",
"Konflik pribadi dapat terjadi antara dua individu atau lebih karena perbedaan pandangan dan sebagainya. Berikut yang bukan contoh konflik pribadi adalah:|Andre dan Andin yang berbeda pandangan terkait tujuan rekreasi kelas|Andi dan Salsa berdebat mengenai jam yang cocok untuk melaksanakan rapat OSIS|Anggota organisasi pramuka yang berdebat dengan OSIS terkait jam ekstrakurikuler|Jojo dan Tono tidak bertegur sapa selama 3 hari akibat perbedaan pendapat di kelas|Konflik yang melibatkan serikat buruh yang menuntut kenaikan upah lembur|Konflik yang melibatkan serikat buruh yang menuntut kenaikan upah lembur",
"Konflik merujuk pada adanya dua hal atau lebih yang berseberangan, tidak selaras, dan bertentangan. Konflik yang timbul dan terjadi biasanya akan menimbulkan sebuah akibat yang tidak diinginkan. Berikut yang bukan akibat konflik adalah:|perubahan kepribadian|perpecahan dalam masyarakat|kerugian harta benda dan korban manusia|kehancuran nilai-nilai dan norma yang ada|masyarakat yang makin mengenal satu sama lain|masyarakat yang makin mengenal satu sama lain",
"Para anggota masyarakat yang sebelumnya saling percaya satu sama lain, setelah terjadinya konflik dapat saling tidak percaya bahkan membenci satu sama lain. Hal tersebut merupakan salah satu akibat konflik, yaitu:|dominasi|perubahan kepribadian|perpecahan antarmasyarakat|kerugian harta benda dan korban manusia|kehancuran nilai-nilai dan norma yang ada|perpecahan antarmasyarakat",
"Ketika terjadi konflik, anggota masyarakat dapat mengalami trauma sehingga terjadi perubahan pada pribadi anggota masyarakat. Berikut yang bukan perubahan sikap masyarakat sebagai akibat konflik adalah:|benci|ketakutan|kecurigaan|kekeluargaan|kekhawatiran|kekeluargaan",
"Penindasan pihak yang kalah oleh pihak yang menang merupakan akibat konflik dalam masyarakat, yaitu:|dominasi|perpecahan dalam masyarakat|kerugian harta benda dan korban manusia|hubungan masyarakat yang makin erat|kehancuran nilai-nilai dan norma yang ada|dominasi",
"Konflik rasial yang terjadi di suatu masyarakat dapat berakibat fatal. Berikut yang merupakan akibat dari konflik rasial adalah:|kerja sama antara masyarakat|sikap toleransi antara masyarakat|makin eratnya hubungan masyarakat|berkembangnya sikap saling menghargai|penindasan oleh pihak yang menang atau dominasi|penindasan oleh pihak yang menang atau dominasi",
"Berikut yang bukan upaya penyelesaian konflik adalah:|membiarkan konflik|mengajak yang terlibat konflik untuk menyelesaikannya|mengatur kegiatan yang menguatkan persatuan masyarakat|menguatkan pengikat persatuan dan rasa kebangsaan yang tercantum dalam peraturan perundang-undangan|memberikan jaminan perlindungan hak-hak setiap warga negara dalam undang-undang|membiarkan konflik",
"Pasal 28E UUD NRI Tahun 1945 merupakan salah satu pasal yang memuat hak setiap warga negara terkait dengan keragaman. Berikut yang termasuk ketentuan pada Pasal 28E adalah:|bendera Negara Indonesia ialah Sang Merah Putih|setiap orang berhak memeluk agama dan beribadat menurut agamanya|setiap orang berhak untuk tidak disiksa dan berhak tidak diperlakukan secara diskriminatif|setiap orang berhak untuk hidup serta berhak mempertahankan hidup dan kehidupannya|penegakan hak asasi manusia adalah tanggung jawab negara dan setiap orang wajib menghormati hak asasi manusia|setiap orang berhak memeluk agama dan beribadat menurut agamanya",
"Hak setiap warga negara yang terkait dengan keragaman dijamin dalam:|nilai di masyarakat|norma di masyarakat|aturan di masyarakat|perundang-undangan|kaidah pokok masyarakat|perundang-undangan",
"Menguatkan identitas pengikat persatuan dan rasa kebangsaan yang tercantum dalam peraturan perundang-undangan merupakan salah satu upaya mencegah konflik dalam masyarakat. Berikut identitas yang terdapat pada Pasal 35 UUD NRI Tahun 1945 adalah:|lagu kebangsaan|bahasa negara|bendera negara|hak memeluk agama|lambang negara dengan semboyan Bhinneka Tunggal Ika|bendera negara",
"Pengikat persatuan dan rasa kebangsaan salah satunya adalah lagu kebangsaan Indonesia. Lagu kebangsaan 'Indonesia Raya' tercantum dalam UUD NRI Tahun 1945, yaitu pada Pasal:|35|36|36A|36B|36DB|36B",
"Upaya represif merupakan salah satu upaya dalam menyelesaikan konflik di tengah keberagaman masyarakat Indonesia. Berikut yang merupakan contoh upaya represif adalah:|Memberikan jaminan perlindungan hak-hak setiap warga negara|Antaranggota masyarakat dan antarkelompok dalam masyarakat melakukan kerja sama|Selalu bersikap ramah, bersahabat, berpikir positif, dan saling membantu sesama warga masyarakat|Melakukan hukuman terhadap pihak- pihak yang secara hukum terbukti terlibat dalam upaya melakukan perpecahan terkait keberagaman masyarakat|Masalah perbedaan yang terjadi dipecahkan dengan bermusyawarah secara bijaksana, penuh pengertian, saling harga menghargai, dan tanpa paksaan|Melakukan hukuman terhadap pihak- pihak yang secara hukum terbukti terlibat dalam upaya melakukan perpecahan terkait keberagaman masyarakat",
"Pihak yang berwenang untuk melakukan penangkapan terhadap pihak pihak yang bertanggung jawab atas konflik di masyarakat adalah:|TNI|DPR|polisi|jaksa|masyarakat|polisi",
"Upaya lain yang dapat dilakukan dalam menyelesaikan masalah yang muncul dalam keberagaman masyarakat adalah upaya preventif. Contoh sikap yang bukan upaya preventif adalah:|bersikap ramah|bersikap intoleran|saling menghargai|tidak memilih-milih teman|saling membantu satu sama lain|bersikap intoleran",
"Agar konflik tidak terjadi, masalah perbedaan yang terjadi dapat dipecahkan dengan cara:|adu domba satu sama lain|adu pendapat antara pihak yang bertikai|melapor kepada pihak yang berwajib|berpegang teguh terhadap argumen masing-masing|musyawarah secara bijaksana dan saling menghargai|musyawarah secara bijaksana dan saling menghargai",
"Setiap usaha dan kegiatan, baik dari dalam negeri maupun luar negeri, yang dinilai dapat membahayakan kedaulatan, keutuhan, dan keselamatan suatu negara merupakan pengertian dari:|bahaya|ancaman|intimidasi|gangguan|tantangan|ancaman",
"Rendahnya kesadaran masyarakat terhadap gangguan dari luar masyarakat serta rendahnya rasa aman dan tenteram yang dirasakan masyarakat merupakan bentuk .... dalam mewujudkan integrasi nasional:|bahaya|ancaman|gangguan|tantangan|intimidasi|ancaman",
"Integrasi berasal dari bahasa Inggris, integration yang berarti:|bangsa|satu kesatuan|penyatuan sesuatu|proses membentuk suatu keseluruhan|hal atau objek yang perlu ditanggulangi|proses membentuk suatu keseluruhan",
"Integrasi adalah penyatuan bangsa-bangsa yang berbeda dari suatu masyarakat menjadi suatu keseluruhan yang lebih utuh atau memadukan masyarakat-masyarakat kecil yang banyak menjadi satu bangsa. Pengertian integrasi tersebut merupakan pendapat dari:|Myron Weiner|Saafroedin Bahar|Howard Wriggins|William F. Ogburn|Kamus Besar Bahasa Indonesia|William F. Ogburn",
"Integrasi nasional dapat berarti pembauran suatu bangsa hingga menjadi kesatuan yang utuh dan bulat. Diperlukan syarat-syarat tertentu dalam mewujudkan integrasi nasional. Berikut yang termasuk syarat-syarat terwujudnya integrasi nasional adalah:|Masyarakat dapat menemukan dan menyepakati nilai-nilai fundamental yang menjadi rujukan bersama|Adanya ancaman dari luar yang menyebabkan muncul dan berkembangnya semangat nasionalisme di kalangan bangsa Indonesia|Masyarakat berhasil menciptakan kesepakatan (konsensus) bersama mengenai norma dan nilai-nilai sosial yang dilestarikan dan dijadikan pedoman|Masyarakat berada di atas ketergantungan di antara unit-unit sosial yang terhimpun di dalamnya untuk memenuhi kebutuhan ekonomi|Masyarakat terhimpun dalam unit sosial dan memiliki cross cutting affiliation (berbagai kesatuan sosial) sehingga menghasilkan cross cutting loyalties (loyalitas ganda)|Masyarakat berhasil menciptakan kesepakatan (konsensus) bersama mengenai norma dan nilai-nilai sosial yang dilestarikan dan dijadikan pedoman",
"Indonesia merupakan negara yang memiliki peran dan posisi penting di dunia. Dari segi geografis, Indonesia merupakan negara dengan wilayah dan posisi yang strategis dan potensial. Salah satunya adalah letak Indonesia di antara dua benua, yaitu:|Asia dan Afrika|Asia dan Eropa|Asia dan Amerika|Asia dan Australia|Australia dan Amerika|Asia dan Australia",
"Ancaman terhadap kedaulatan bangsa dapat berbentuk ancaman di bidang:|ekonomi|sosial|budaya|politik|pertahanan dan keamanan|pertahanan dan keamanan",
"Ancaman militer merupakan ancaman yang menggunakan kekuatan bersenjata yang terorganisasi dan dinilai memiliki kemampuan membahayakan kedaulatan negara. Salah satu bentuk ancaman militer adalah:|provokasi|bloking|sabotase|agresi militer|pelanggaran HAM|agresi militer",
"Upaya preventif merupakan salah satu cara dalam menyelesaikan konflik. Contoh dari upaya preventif adalah:|melibatkan aparat keamanan|melakukan penangkapan terhadap pihak yang bertikai|menghukum pelaku konflik|melakukan musyawarah|menghukum dengan undang-undang|melakukan musyawarah",
"Ancaman yang datang dari luar dan bersifat nonfisik disebut:|ancaman nyata|ancaman terbuka|ancaman internal|ancaman nonmiliter|ancaman kekerasan|ancaman nonmiliter",
"Ancaman di bidang sosial budaya dapat berupa:|kenaikan harga BBM|kemiskinan|konflik kepentingan|gangguan keamanan laut|merosotnya nilai budaya|merosotnya nilai budaya",
"Upaya represif terhadap pelaku konflik dilakukan melalui:|kerjasama sosial|penyuluhan|sanksi sosial|hukuman sesuai hukum yang berlaku|pendekatan kultural|hukuman sesuai hukum yang berlaku",
"Contoh tindakan represif dalam masyarakat multikultural adalah:|kerja sama|musyawarah|diskusi|penangkapan pelaku konflik|saling menghargai|penangkapan pelaku konflik",
"Ancaman dari luar negeri terhadap kedaulatan wilayah dapat berupa:|penyuluhan|kerja sama regional|provokasi|invasi asing|kerja sama budaya|invasi asing",
"Ancaman yang berdampak pada kelangsungan hidup bangsa disebut:|teror|intimidasi|provokasi|hasutan|ancaman nasional|ancaman nasional",
"Ancaman ideologi dapat ditangkal dengan:|mengekang kebebasan|menutup media|mengisolasi warga|meningkatkan pemahaman Pancasila|membatasi akses informasi|meningkatkan pemahaman Pancasila",
"Pelanggaran terhadap kedaulatan wilayah udara termasuk dalam kategori ancaman:|ideologi|politik|sosial budaya|militer|nonmiliter|militer",
"Contoh ancaman yang berdimensi politik adalah:|peningkatan ekspor|kerusuhan rasial|pengangguran|tekanan politik luar negeri|ketimpangan sosial|tekanan politik luar negeri",
"Ancaman terhadap ekonomi Indonesia dari dalam negeri misalnya:|utang luar negeri|serangan cyber|nilai ekspor yang tinggi|sistem ekonomi yang tidak jelas|konflik bersenjata|sistem ekonomi yang tidak jelas",
"Ancaman dari luar negeri yang berdampak pada bidang ekonomi misalnya:|bencana alam|kemiskinan|daya saing rendah|inflasi dalam negeri|persaingan produk asing|persaingan produk asing",
"Dalam menghadapi ancaman di bidang sosial budaya, bangsa Indonesia harus:|membatasi akses informasi|meningkatkan pertahanan militer|meningkatkan budaya luar|melestarikan budaya lokal|menerima budaya luar|melestarikan budaya lokal",
"Salah satu strategi menghadapi ancaman globalisasi di bidang budaya adalah:|menghilangkan budaya asing|melarang internet|menolak kerja sama internasional|mempromosikan budaya lokal|membatasi pendidikan luar negeri|mempromosikan budaya lokal",
"Ancaman yang datang dari perkembangan iptek adalah:|toleransi|fanatisme|intoleransi|radikalisme|individualisme|individualisme",
"Ancaman dalam bidang sosial budaya dari dalam dapat disebabkan oleh:|provokasi asing|sanksi luar negeri|kebijakan luar negeri|ketimpangan ekonomi|hilangnya nilai budaya|hilangnya nilai budaya",
"Pembangunan nasional harus memperhatikan:|nilai kebaratan|daya saing luar negeri|budaya global|identitas nasional|dominasi asing|identitas nasional",
"Ancaman yang muncul dari dalam negeri biasanya disebabkan oleh:|kerjasama luar negeri|bencana alam|ketimpangan ekonomi|budaya luar|budaya barat|ketimpangan ekonomi",
"Pasal yang menjamin hak setiap orang untuk hidup serta mempertahankan kehidupannya adalah:|Pasal 28A|Pasal 28C|Pasal 28D|Pasal 28E|Pasal 28F|Pasal 28A",
"Pasal dalam UUD 1945 yang menjamin kebebasan berpendapat dan berorganisasi adalah:|Pasal 28A|Pasal 28B|Pasal 28C|Pasal 28D|Pasal 28E|Pasal 28E",
"Setiap orang berhak memeluk agama dan beribadat menurut agamanya tercantum dalam:|Pasal 28B|Pasal 28C|Pasal 28D|Pasal 28E|Pasal 28F|Pasal 28E",
"Pasal 28A, 28E, dan 28I dalam UUD 1945 termasuk dalam upaya:|melindungi masyarakat dari budaya luar|menjauhkan masyarakat dari ancaman luar|memberikan perlindungan untuk menghadapi ancaman|memberikan jaminan perlindungan hak-hak setiap warga negara|mengikat persatuan seluruh rakyat|memberikan jaminan perlindungan hak-hak setiap warga negara",
"Yang bukan termasuk pasal identitas pengikat rasa kebangsaan dalam UUD 1945 adalah:|Pasal 35|Pasal 36|Pasal 28E|Pasal 36A|Pasal 36B|Pasal 28E",
"Pasal 36 UUD 1945 berbunyi:|lagu kebangsaan ialah Indonesia Raya|bahasa negara adalah bahasa Indonesia|bendera negara adalah Sang Merah Putih|lambang negara ialah Garuda Pancasila|setiap orang berhak hidup|bahasa negara adalah bahasa Indonesia",
"Penyelesaian konflik melalui penangkapan pelaku perpecahan termasuk cara:|kuratif|represif|preventif|tentatif|normatif|represif",
"Contoh upaya represif dalam masyarakat adalah:|pengikat persatuan dalam perundang-undangan|kerjasama masyarakat|bersikap positif dan saling membantu|penangkapan pelaku perpecahan|musyawarah tanpa paksaan|penangkapan pelaku perpecahan",
"Ciri masyarakat multikultural yang salah adalah:|bentuk masyarakat modern|menjunjung tinggi perbedaan|anggota dari berbagai suku|tidak membedakan kelompok mayoritas dan minoritas|kesenjangan antar kelompok|kesenjangan antar kelompok",
"Orang yang rasional dan individualis biasanya berasal dari masyarakat:|majemuk|homogen|perdesaan|perkotaan|tradisional|perkotaan",
"Masyarakat perkotaan cenderung bersifat:|pluralis|solidaritas|kekeluargaan|individualistis|tidak rasional|individualistis",
"Anggapan bahwa perempuan hanya cocok di rumah adalah bentuk ketidakadilan gender yang disebut:|kekerasan|stereotipe|subordinasi|marginalisasi|beban ganda|stereotipe",
"Perbedaan budaya dapat menyebabkan:|perubahan sosial|perbedaan kebudayaan|perbedaan kepentingan|perbedaan status sosial|perbedaan antarindividu|perbedaan antarindividu",
"Contoh konflik karena perbedaan individu:|anak lembut jadi sopan|konflik masyarakat dan perusahaan|nilai kesopanan turun|norma tidak dipatuhi|belajar harus tenang vs musik|belajar harus tenang vs musik",
"Yang bukan penyebab konflik dari sikap tertentu adalah:|responsif|fanatisme|stereotipe|diskriminatif|eksklusivisme|responsif",
"Sikap yang memandang bahwa hanya pandangan kelompoknya yang benar disebut:|stereotipe|fanatisme|eksklusivisme|etnosentrisme|primordialisme|etnosentrisme",
"Contoh sikap untuk mencegah konflik antar suku adalah:|tidak pilih-pilih teman|mendukung kelompok sendiri|menyudutkan budaya lain|menghindari kelompok lain|mengunggulkan suku sendiri|tidak pilih-pilih teman",
"Bentuk konflik menurut Soerjono Soekanto yang tidak disebutkan adalah:|rasial|politik|pribadi|ekonomi|internasional|internasional",
"Contoh konflik rasial adalah:|sengketa wilayah antar negara|benci teman sekelas|konflik buruh-pengusaha|kulit hitam vs putih di Afrika Selatan|sengketa gas alam perbatasan|kulit hitam vs putih di Afrika Selatan",
"Konflik antarnegara karena eksplorasi gas adalah:|rasial|politik|pribadi|ekonomi|internasional|internasional",
"Konflik politik ditandai oleh:|konflik antar partai|kelompok separatis|sengketa pemilu|penolakan kebijakan|buruh vs pemilik perusahaan|konflik antar partai",
"Contoh konflik internasional adalah:|Sipadan-Ligitan & buruh-pemilik|Sipadan-Ligitan & batas ZEE|batas ZEE & buruh|demo karyawan & buruh|ZEE & demo karyawan|batas ZEE & buruh",
"Contoh konflik kelas sosial adalah:|Sipadan & buruh|Sipadan & ZEE|buruh & ZEE|buruh & demo|ZEE & demo|buruh & demo",
"Konflik karena benci & pandangan berbeda disebut:|rasial|politik|pribadi|ekonomi|internasional|pribadi",
"Yang bukan akibat konflik:|dominasi|perpecahan|kerugian|hubungan makin erat|kehancuran nilai|hubungan makin erat",
"Salah satu dampak konflik terhadap individu:|dominasi|perpecahan|kerugian|hubungan erat|kehancuran nilai|perpecahan",
"Dampak konflik berupa dominasi muncul saat:|pihak menang menindas yang kalah|kerja sama erat|musyawarah|bantuan sosial|hukum ditegakkan|pihak menang menindas yang kalah",
"Dampak konflik politik adalah:|kerukunan|partisipasi politik|solidaritas|perpecahan|diskusi|perpecahan",
"Pak A yang tidak mau bergaul karena beda suku dan agama menunjukkan sikap:|fanatisme|inklusivisme|primordialisme|ekstremisme|individualisme|fanatisme",
"Hak warga negara untuk beribadah tercantum dalam Pasal:|28A|28E|28I|28J|36A|28E",
"Penangkapan pelaku teror merupakan upaya:|represif|totaliter|preventif|tentatif|normatif|represif",
"Contoh yang bukan upaya preventif:|ramah|pilih-pilih teman|saling menghargai|musyawarah|kerjasama|pilih-pilih teman",
"Sikap saling membantu dan ramah merupakan upaya:|represif|totaliter|preventif|tentatif|normatif|preventif",
"Ancaman nyata yang harus diprioritaskan untuk ditangani adalah:|spionase|terorisme|separatisme|radikalisme|inklusivisme|separatisme",
"Ancaman terhadap ketahanan nasional dalam bentuk pemikiran disebut:|hibrida|militer|dari luar|nonmiliter|dari dalam|nonmiliter",
"Tantangan dapat berbentuk tindakan fisik maupun nonfisik, dilakukan secara:|manifes atau laten|militer atau hibrida|terbuka atau tertutup|militer atau nonmiliter|nyata atau belum nyata|manifes atau laten",
"Rendahnya rasa aman masyarakat terhadap gangguan merupakan:|ancaman|gangguan|tantangan|disintegrasi|integrasi nasional|gangguan",
"Myron Weiner menyebutkan lima tipe integrasi, berikut yang bukan adalah:|nilai|norma|wilayah|elit-massa|tingkah laku|norma",
"Simbol negara yang mencerminkan konsensus nasional adalah:|Pancasila|Sumpah Pemuda|UUD 1945|bendera Merah Putih|Bhinneka Tunggal Ika|UUD 1945",
"Blokade wilayah NKRI adalah bentuk:|agresi|gangguan|tantangan|hambatan|sabotase|agresi",
"Contoh sabotase terhadap negara:|blokade laut|provokasi politik|peletakan batu di rel|penggelapan dana|demonstrasi|peletakan batu di rel",
"Yang bukan ancaman laut/udara Indonesia:|pembajakan|perompakan|penyelundupan senjata|penyelundupan amunisi|pemindahan patok batas|pemindahan patok batas",
"Ancaman yang mengganggu ideologi dan dasar negara termasuk bidang:|politik|ideologi|ekonomi|keamanan|pertahanan|ideologi",
"Yang bukan contoh ancaman politik dari luar negeri:|provokasi|intimidasi|blokade politik|kelompok separatisme|tekanan politik|kelompok separatisme",
"Bentuk ancaman ekonomi yang berasal dari dalam negeri:|daya saing rendah|pengangguran tinggi|infrastruktur buruk|sistem ekonomi tidak jelas|semua benar|semua benar",
"Faktor pendorong ancaman dari dalam bidang sosial budaya:|tidak terprovokasi|penegakan hukum baik|infrastruktur bagus|ketimpangan ekonomi|pemerataan sejahtera|ketimpangan ekonomi",
"Identitas budaya didefinisikan sebagai:|ancaman|gangguan|tantangan|identitas budaya|identitas nasional|identitas budaya",
"Identitas seperti UUD 1945 dan lagu kebangsaan termasuk kategori:|alamiah|lahiriah|kebangsaan|fundamental|instrumental|instrumental",
"Keberagaman suku dan budaya merupakan identitas nasional kategori:|alamiah|lahiriah|kebangsaan|fundamental|instrumental|instrumental",
"Pancasila adalah identitas nasional yang berisi:|budaya|lambang|bahasa|dasar negara|bentuk negara|dasar negara",
"Lambang Garuda menandakan bangsa Indonesia sebagai bangsa yang:|besar dan kuat|adil dan makmur|besar dan sejahtera|makmur dan bahagia|bahagia dan sejahtera|besar dan kuat",
"Bahasa Indonesia ditetapkan sebagai bahasa persatuan pada:|28 Oktober 1928|29 Oktober 1928|1 Juni 1945|17 Agustus 1945|18 Agustus 1945|28 Oktober 1928",
"Identitas nasional lahir sejak:|organisasi Budi Utomo|penjajahan|proklamasi kemerdekaan|Sumpah Pemuda II|pembentukan BPUPK|organisasi Budi Utomo",
"Kesepakatan ekstradisi RI-Singapura adalah strategi bidang:|sosial, global|politik, global|politik, regional|pertahanan, global|pertahanan, regional|pertahanan, regional",
"Ancaman pertahanan tidak langsung disebut:|nyata|hibrida|militer|nirmiliter|belum nyata|nirmiliter",
"Strategi untuk cegah ideologi asing adalah:|politik|ideologi|ekonomi|sosial budaya|pertahanan dan keamanan|ideologi",
"Strategi politik dalam negeri dilakukan melalui:|lapangan kerja|ekonomi nasional|program budaya lokal|sistem politik demokrasi|diplomasi luar negeri|sistem politik demokrasi",
"Yang bukan strategi ekonomi hadapi ancaman:|iklim usaha|lapangan kerja|pelestarian budaya|teknologi tepat guna|hubungan ekonomi-politik luar negeri|pelestarian budaya",
"Dorongan ancaman sosial budaya dari dalam:|rasisme|keterbelakangan|daya saing rendah|kesempatan kerja sedikit|infrastruktur tidak merata|daya saing rendah",
"Ancaman militer berupa agresi dihadapi dengan strategi:|agresi|perang|berlapis|diplomasi|tidak bersenjata|berlapis",
"Bila diplomasi gagal, TNI dikerahkan oleh:|TNI|rakyat|presiden|jenderal|panglima TNI|presiden",
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 3600;
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
