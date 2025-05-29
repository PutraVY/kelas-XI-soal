const soal = [
 "Kata musar artinya?|Kebahagiaan dan kekayaan|Keagamaan dan susila|Kekuatan dan keberanian|Kesenian dan hiburan|Kesehatan dan kebugaran|Keagamaan dan susila",
    "Yang paling bertanggung jawab atas pendidikan anak adalah?|Sekolah|Pemerintah|Orangtua/keluarga|Masyarakat|Teman sebaya|Orangtua/keluarga",
    "Sejak kecil anak-anak Yahudi dididik secara teratur melalui?|Tulisan suci|Tradisi lisan|Permainan edukatif|Media digital|Praktik lapangan|Tradisi lisan",
    "Anak rohani Paulus adalah?|Titus|Timotius|Silas|Barnabas|Lukas|Timotius",
    "Amsal 1:7 menyatakan bahwa?|Harta adalah tanda berkat|Kebijaksanaan datang dengan usia|Takut akan Tuhan adalah permulaan pengetahuan, tetapi orang bodoh menghina hikmat dan pengetahuan|Kekuatan berasal dari latihan|Cinta adalah landasan hidup|Takut akan Tuhan adalah permulaan pengetahuan, tetapi orang bodoh menghina hikmat dan pengetahuan",
    "Pernyataan Belajar itu tidak ada tamatnya, belajar tidak ada hentinya dikemukakan oleh?|Plato|John Dewey|Albert Einstein|Aristoteles|Maria Montessori|John Dewey",
    "Pendidikan adalah senjata yang paling ampuh untuk mengubah dunia menurut?|Mahatma Gandhi|Nelson Mandela|Martin Luther King Jr.|Soekarno|Ki Hajar Dewantara|Nelson Mandela",
    "Seorang anak Yahudi yang telah berusia 12 tahun disebut?|Anak Nabi|Anak Torah/Anak Taurat|Anak Mizbah|Anak Sinagoge|Anak Talmud|Anak Torah/Anak Taurat",
    "Tempat pendidikan orang Yahudi adalah?|Gereja|Sinagoge|Masjid|Kuil|Sekolah umum|Sinagoge",
    "Yosua berhasil mendidik seisi rumahnya untuk beribadah hanya kepada Allah, tertulis dalam?|Keluaran 20:3|Yosua 24:15|Ulangan 6:4|Matius 6:24|Kejadian 1:28|Yosua 24:15",
    "Anak Hana adalah?|Daud|Samuel|Salomo|Yesaya|Musa|Samuel",
    "Pendidikan formal dan non-formal contohnya adalah?|Sekolah dan rumah|Sekolah (formal) dan tempat les (non-formal)|Perpustakaan dan laboratorium|Keluarga dan masyarakat|Universitas dan kursus online|Sekolah (formal) dan tempat les (non-formal)",
    "Mendidik anak adalah perintah Tuhan kepada?|Guru|Orang tua|Pemerintah|Pemuka agama|Masyarakat|Orang tua",
    "Ayat Dengarlah, hai orang Israel: Tuhan itu Allah kita, Tuhan itu Esa terdapat dalam?|Keluaran 20:2|Ulangan 6:4|Yesaya 45:5|Matius 22:37|Yohanes 17:3|Ulangan 6:4",
    "Yusuf dan Maria membawa Yesus ke Sinagoge, tercatat dalam?|Matius 2:1-12|Markus 1:21-28|Lukas 2:41-52|Yohanes 6:59|Kisah Para Rasul 17:2|Lukas 2:41-52",
    "Sikap gereja atau orang Kristen terhadap kebudayaan meliputi?|Antagonis, Akomodasi, Dominasi, Dualisme, dan Transformasi|Penolakan total dan penerimaan total|Adaptasi dan isolasi|Kritik dan apresiasi|Tradisi dan modernisasi|Antagonis, Akomodasi, Dominasi, Dualisme, dan Transformasi",
    "Kata budaya berasal dari Bahasa Sansekerta dan Latin, yaitu?|Sanskerta:Bodhi; Latin:Cultura|Sanskerta:Buddhayah; Latin:Colore|Sanskerta:Dharma; Latin:Civitas|Sanskerta:Karma; Latin:Ars|Sanskerta:Veda; Latin:Religio|Sanskerta:Buddhayah; Latin:Colore",
    "Contoh sinkretisme (pencampuran budaya dan agama) adalah sikap?|Antagonis|Akomodasi|Dominasi|Transformasi|Dualisme|Akomodasi",
    "Contoh kebudayaan untuk kesombongan adalah?|Patung Zeus|Menara Babel|Piramida Mesir|Tembok Besar China|Colosseum Romawi|Menara Babel",
    "Ayat Kamu tidak dapat mengabdi kepada Allah dan kepada Mamon terdapat dalam?|Markus 12:17|Lukas 16:13|Matius 6:24|Yohanes 8:34|Roma 6:16|Matius 6:24",
    "Menurut E.B. Taylor, kebudayaan adalah kompleks yang mencakup?|Harta benda dan kekayaan|Pengetahuan, kepercayaan, kesenian, moral, hukum, adat istiadat, dan kemampuan lainnya|Teknologi dan ilmu pengetahuan saja|Bahasa dan komunikasi semata|Sistem politik dan ekonomi|Pengetahuan, kepercayaan, kesenian, moral, hukum, adat istiadat, dan kemampuan lainnya",
    "Menurut J.Macionis, kebudayaan adalah?|Warisan leluhur yang statis|Cara berpikir, bertindak, dan objek material yang membentuk cara hidup manusia|Tradisi yang harus dipertahankan tanpa perubahan|Hasil karya seni dan arsitektur belaka|Sistem kepercayaan agama saja|Cara berpikir, bertindak, dan objek material yang membentuk cara hidup manusia",
    "Orang tua Yakub adalah?|Abraham dan Sara|Ishak dan Ribka|Yakub dan Lea|Yusuf dan Rahel|Musa dan Zipora|Ishak dan Ribka",
    "Ketika orang tua membantu anak bertumbuh sesuai potensinya, pola asuh ini disebut?|Otoriter|Otoritatif|Permisif|Protektif|Demokratis|Otoritatif",
    "Pola asuh dimana orang tua membiarkan anak menentukan segala sesuatu disebut?|Otoriter|Otoritatif|Membiarkan (Permisif)|Protektif|Demokratis|Membiarkan (Permisif)",
    "Pola didik orang tua yang terbaik adalah?|Otoriter|Otoritatif|Permisif|Protektif|Demokratis|Otoritatif",
    "Pendidikan di luar formal yang terstruktur dan berjenjang disebut?|Pendidikan informal|Pendidikan non-formal|Pendidikan jarak jauh|Pendidikan alternatif|Pendidikan khusus|Pendidikan non-formal",
    "Pendidikan yang bisa dilakukan kapan saja, dimana saja disebut?|Pendidikan informal|Pendidikan non-formal|Pendidikan formal|Pendidikan khusus|Pendidikan terbuka|Pendidikan informal",
    "Mertua yang memberi teladan iman yang benar kepada menantunya adalah?|Rahab|Naomi|Rut|Ester|Debora|Naomi",
    "Teknologi untuk kemuliaan Allah adalah?|Menara Babel|Bait Allah|Patung Anak Lembu Emas|Kuil Salomo|Tabut Perjanjian|Bait Allah",
    "Pola asuh dimana orang tua menentukan segala sesuatu bagi anak disebut?|Otoritatif|Permisif|Otoriter|Demokratis|Protektif|Otoriter",
    "Pola asuh dimana orang tua mengawasi anak secara ketat disebut?|Otoritatif|Permisif|Otoriter|Protektif|Demokratis|Protektif",
    "Sekolah adalah?|Pengganti peran orang tua|Mitra orang tua dalam mendidik anak|Satu-satunya sumber pengetahuan|Tempat untuk sosialisasi saja|Lembaga formal tanpa pengaruh keluarga|Mitra orang tua dalam mendidik anak",
    "Kejadian 1:26 menyatakan manusia diciptakan sesuai?|Kehendak malaikat|Gambar dan rupa Allah|Kebutuhan bumi|Evolusi primata|Kecerdasan buatan|Gambar dan rupa Allah",
    "Kejadian 2:15 menyatakan perintah Tuhan agar manusia?|Menaklukkan semua bangsa|Mengusahakan dan mengelola ciptaan Allah|Membangun menara tinggi|Menciptakan teknologi canggih|Mengumpulkan kekayaan|Mengusahakan dan mengelola ciptaan Allah",
    "Pada zaman Yesus, guru dianggap sederajat dengan?|Raja|Nabi|Imam|Tentara|Pedagang|Imam",
    "Ilmuwan modern yang memberi sumbangsih besar bagi kehidupan manusia adalah?|Thomas Edison|Samuel Morse|Albert Einstein|Nikola Tesla|Alexander Graham Bell|Samuel Morse",
    "Ibu Timotius adalah?|Lidia|Eunike|Priska|Febe|Dorcas|Eunike",
    "Nama menantu Naomi adalah?|Ester|Debora|Rut|Rahel|Lea|Rut",
    "Hana membawa Samuel untuk dididik oleh?|Nabi Samuel|Imam Eli|Raja Saul|Nabi Musa|Imam Harun|Imam Eli",
    "Kemampuan atau potensi bawaan anak sejak lahir disebut?|Minat|Bakat|Kecerdasan|Bawaan|Karakter|Bakat",
    "Menurut UU Pendidikan Nasional No 23 Tahun 2003, pendidikan adalah tanggung jawab?|Sekolah saja|Pemerintah saja|Keluarga, pemerintah, sekolah, dan masyarakat|Guru dan orang tua|Lembaga pendidikan formal|Keluarga, pemerintah, sekolah, dan masyarakat",
    "Program wajib belajar di Indonesia berlaku untuk anak usia sekolah selama?|6 tahun|9 tahun|12 tahun|15 tahun|18 tahun|12 tahun",
    "Ciri budaya yang mengandung nilai-nilai tertentu disebut?|Budaya material|Budaya spiritual|Perwujudan nilai-nilai tertentu|Budaya tradisional|Budaya modern|Perwujudan nilai-nilai tertentu",
    "Tujuan kebudayaan menurut perspektif Kristen adalah?|Menguasai dunia|Memuliakan Allah|Meningkatkan ekonomi|Melestarikan tradisi|Mengembangkan teknologi|Memuliakan Allah",
    "Unsur-unsur budaya meliputi?|Kesenian, teknologi, sistem organisasi masyarakat, sistem religi|Hanya bahasa dan seni|Teknologi dan ekonomi saja|Politik dan hukum semata|Arsitektur dan fashion|Kesenian, teknologi, sistem organisasi masyarakat, sistem religi",
    "Faktor yang mempengaruhi perbedaan perkembangan budaya adalah?|Iklim|Geografis|Warna kulit|Bahasa|Agama|Geografis",
    "Yang mendorong perkembangan IPTEK secara global adalah?|Kekristenan|Kapitalisme|Hinduisme|Budhisme|Sekularisme|Kekristenan",
    "Mandat Allah dalam Kejadian 1:28 adalah?|Membangun peradaban|Berkuasa atas bumi|Menciptakan teknologi|Mengumpulkan kekayaan|Mengembangkan seni|Berkuasa atas bumi",
    "Hasil karya manusia dengan akal budinya disebut?|Peradaban|Budaya|Teknologi|Kesenian|Ilmu pengetahuan|Budaya",
    "Sifat budaya yang dinamis dan turun-temurun disebut?|Adaptif|Historis|Material|Spiritual|Modern|Historis",
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 1200;
let shuffledQuestions = [];
let currentCorrectAnswer = "";

document.addEventListener('DOMContentLoaded', () => {
    shuffledQuestions = shuffleArray([...soal]);
    loadQuestion();
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    startTimer();
});

function loadQuestion() {
    if (currentQuestion >= shuffledQuestions.length) {
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

    const parts = shuffledQuestions[currentQuestion].split('|');
    const question = parts[0];
    const options = parts.slice(1, 6);
    currentCorrectAnswer = parts[6];

    questionElement.textContent = `Soal ${currentQuestion + 1}: ${question}`;

    const shuffledOptions = shuffleArray([...options]);

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

    if (selectedOption === currentCorrectAnswer) {
        feedbackElement.textContent = "Lanjut!";
        feedbackElement.style.color = "green";
        score++;
        document.getElementById('score').textContent = `Skor: ${score}`;
    } else {
        feedbackElement.textContent = `Salah! Jawaban benar: ${currentCorrectAnswer}`;
        feedbackElement.style.color = "red";
    }

    nextButton.disabled = false;
}
