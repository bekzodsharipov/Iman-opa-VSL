document.addEventListener("DOMContentLoaded", function () {
  const e = document.querySelectorAll(".registerBtns"),
    t = document.getElementById("registrationModal"),
    n = document.getElementById("closeModalBtn"),
    l = document.querySelector(".homeModalOverlay"),
    i = document.getElementById("registrationForm"),
    a = document.getElementById("name"),
    h = document.getElementById("phone"),
    c = document.getElementById("nameError"),
    r = document.getElementById("phoneError"),
    d = document.getElementById("errorMessage"),
    o = document.getElementById("submitBtn"),
    g = document.getElementById("selectedCountry"),
    m = document.getElementById("selectedCountryCode"),
    s = document.getElementById("countryDropdown"),
    u = document.getElementById("dropdownIcon"),
    f = [
      { name: " O‘zbekiston", code: "+998" },
      { name: " Afg‘oniston", code: "+93" },
      { name: " Albaniya", code: "+355" },
      { name: " Aljir", code: "+213" },
      { name: " Amerikan Samoasi", code: "+1" },
      { name: " Andorra", code: "+376" },
      { name: " Angola", code: "+244" },
      { name: " Angilya", code: "+1" },
      { name: " Antarktika", code: "+672" },
      { name: " Antigua va Barbuda", code: "+1" },
      { name: " Argentina", code: "+54" },
      { name: " Armaniston", code: "+374" },
      { name: " Aruba", code: "+297" },
      { name: " Avstraliya", code: "+61" },
      { name: " Avstriya", code: "+43" },
      { name: " Ozarbayjon", code: "+994" },
      { name: " Bagama orollari", code: "+1" },
      { name: " Bahrayn", code: "+973" },
      { name: " Bangladesh", code: "+880" },
      { name: " Barbados", code: "+1" },
      { name: " Belarus", code: "+375" },
      { name: " Belgiya", code: "+32" },
      { name: " Beliz", code: "+501" },
      { name: " Benin", code: "+229" },
      { name: " Bermud orollari", code: "+1" },
      { name: " Butan", code: "+975" },
      { name: " Boliviya", code: "+591" },
      { name: " Bosniya va Gertsegovina", code: "+387" },
      { name: " Botsvana", code: "+267" },
      { name: " Braziliya", code: "+55" },
      { name: " Britan Hind okeani hududi", code: "+246" },
      { name: " Britan Virgin orollari", code: "+1" },
      { name: " Bruney", code: "+673" },
      { name: " Bolgariya", code: "+359" },
      { name: " Burkina Faso", code: "+226" },
      { name: " Burundi", code: "+257" },
      { name: " Kambodja", code: "+855" },
      { name: " Kamerun", code: "+237" },
      { name: " Kanada", code: "+1" },
      { name: " Kabo-Verde", code: "+238" },
      { name: " Kayman orollari", code: "+1" },
      { name: " Esvatini", code: "+268" },
      { name: " Efiopiya", code: "+251" },
      { name: " Fiji", code: "+679" },
      { name: " Filippin", code: "+63" },
      { name: " Finlyandiya", code: "+358" },
      { name: " Fransiya", code: "+33" },
      { name: " Fransuz Gvianasi", code: "+594" },
      { name: " Fransuz Polineziyasi", code: "+689" },
      { name: " Gabon", code: "+241" },
      { name: " Gambiya", code: "+220" },
      { name: " Gruziya", code: "+995" },
      { name: " Germaniya", code: "+49" },
      { name: " Gana", code: "+233" },
      { name: " Gibraltar", code: "+350" },
      { name: " Gretsiya", code: "+30" },
      { name: " Grenlandiya", code: "+299" },
      { name: " Grenada", code: "+1" },
      { name: " Gvadelupa", code: "+590" },
      { name: " Guam", code: "+1" },
      { name: " Gvatemala", code: "+502" },
      { name: " Gvineya", code: "+224" },
      { name: " Gvineya-Bisau", code: "+245" },
      { name: " Gayana", code: "+592" },
      { name: " Gaiti", code: "+509" },
      { name: " Gonduras", code: "+504" },
      { name: " Gonkong", code: "+852" },
      { name: " Vengriya", code: "+36" },
      { name: " Islandiya", code: "+354" },
      { name: " Hindiston", code: "+91" },
      { name: " Indoneziya", code: "+62" },
      { name: " Eron", code: "+98" },
      { name: " Iroq", code: "+964" },
      { name: " Irlandiya", code: "+353" },
      { name: " Isroil", code: "+972" },
      { name: " Italiya", code: "+39" },
      { name: " Yamayka", code: "+1" },
      { name: " Yaponiya", code: "+81" },
      { name: " Iordaniya", code: "+962" },
      { name: " Qozog‘iston", code: "+7" },
      { name: " Keniya", code: "+254" },
      { name: " Kiribati", code: "+686" },
      { name: " Shimoliy Koreya", code: "+850" },
      { name: " Janubiy Koreya", code: "+82" },
      { name: " Quvayt", code: "+965" },
      { name: " Qirg‘iziston", code: "+996" },
      { name: " Laos", code: "+856" },
      { name: " Latviya", code: "+371" },
      { name: " Livan", code: "+961" },
      { name: " Lesoto", code: "+266" },
      { name: " Liberiya", code: "+231" },
      { name: " Liviya", code: "+218" },
      { name: " Lixtenshteyn", code: "+423" },
      { name: " Litva", code: "+370" },
      { name: " Lyuksemburg", code: "+352" },
      { name: " Makao", code: "+853" },
      { name: " Madagaskar", code: "+261" },
      { name: " Malavi", code: "+265" },
      { name: " Malayziya", code: "+60" },
      { name: " Maldiv orollari", code: "+960" },
      { name: " Mali", code: "+223" },
      { name: " Malta", code: "+356" },
      { name: " Marshall orollari", code: "+692" },
      { name: " Martinika", code: "+596" },
      { name: " Mavritaniya", code: "+222" },
      { name: " Mavrikiy", code: "+230" },
      { name: " Mayotta", code: "+262" },
      { name: " Meksika", code: "+52" },
      { name: " Mikroneziya", code: "+691" },
      { name: " Moldova", code: "+373" },
      { name: " Monako", code: "+377" },
      { name: " Mongoliya", code: "+976" },
      { name: " Chernogoriya", code: "+382" },
      { name: " Montserrat", code: "+1" },
      { name: " Marokash", code: "+212" },
      { name: " Mozambik", code: "+258" },
      { name: " Myanma", code: "+95" },
      { name: " Namibiya", code: "+264" },
      { name: " Nauru", code: "+674" },
      { name: " Nepal", code: "+977" },
      { name: " Niderlandiya", code: "+31" },
      { name: " Yangi Kaledoniya", code: "+687" },
      { name: " Yangi Zelandiya", code: "+64" },
      { name: " Nikaragua", code: "+505" },
      { name: " Niger", code: "+227" },
      { name: " Nigeriya", code: "+234" },
      { name: " Niue", code: "+683" },
      { name: " Norfolk oroli", code: "+672" },
      { name: " Shimoliy Mariana orollari", code: "+1" },
      { name: " Norvegiya", code: "+47" },
      { name: " Ummon", code: "+968" },
      { name: " Pokiston", code: "+92" },
      { name: " Palau", code: "+680" },
      { name: " Falastin", code: "+970" },
      { name: " Panama", code: "+507" },
      { name: " Papua Yangi Gvineya", code: "+675" },
      { name: " Paragvay", code: "+595" },
      { name: " Peru", code: "+51" },
      { name: " Polsha", code: "+48" },
      { name: " Portugaliya", code: "+351" },
      { name: " Puerto-Riko", code: "+1" },
      { name: " Qatar", code: "+974" },
      { name: " Reyunion", code: "+262" },
      { name: " Ruminiya", code: "+40" },
      { name: " Rossiya", code: "+7" },
      { name: " Ruanda", code: "+250" },
      { name: " Sen-Bartelemi", code: "+590" },
      { name: " Avliyo Yelena", code: "+290" },
      { name: " Sent-Kits va Nevis", code: "+1" },
      { name: " Sent-Lyusiya", code: "+1" },
      { name: " Sen-Pyer va Mikelon", code: "+508" },
      { name: " Sent-Vinsent va Grenadinlar", code: "+1" },
      { name: " Samoa", code: "+685" },
      { name: " San-Marino", code: "+378" },
      { name: " San-Tome va Prinsipi", code: "+239" },
      { name: " Saudiya Arabistoni", code: "+966" },
      { name: " Senegal", code: "+221" },
      { name: " Serbiya", code: "+381" },
      { name: " Seyshel orollari", code: "+248" },
      { name: " Syerra-Leone", code: "+232" },
      { name: " Singapur", code: "+65" },
      { name: " Sint-Marten", code: "+1" },
      { name: " Slovakiya", code: "+421" },
      { name: " Sloveniya", code: "+386" },
      { name: " Solomon orollari", code: "+677" },
      { name: " Somali", code: "+252" },
      { name: " Janubiy Afrika", code: "+27" },
      { name: " Janubiy Sudan", code: "+211" },
      { name: " Ispaniya", code: "+34" },
      { name: " Shri-Lanka", code: "+94" },
      { name: " Sudan", code: "+249" },
      { name: " Surinam", code: "+597" },
      { name: " Shvetsiya", code: "+46" },
      { name: " Shveytsariya", code: "+41" },
      { name: " Suriya", code: "+963" },
      { name: " Tayvan", code: "+886" },
      { name: " Tojikiston", code: "+992" },
      { name: " Tailand", code: "+66" },
      { name: " Tanzaniya", code: "+255" },
      { name: " Sharqiy Timor", code: "+670" },
      { name: " Togo", code: "+228" },
      { name: " Tokelau", code: "+690" },
      { name: " Tonga", code: "+676" },
      { name: " Trinidad va Tobago", code: "+1" },
      { name: " Tunis", code: "+216" },
      { name: " Turkiya", code: "+90" },
      { name: " Turkmaniston", code: "+993" },
      { name: " Turks va Kaykos orollari", code: "+1" },
      { name: " Tuvalu", code: "+688" },
      { name: " Uganda", code: "+256" },
      { name: " Ukraina", code: "+380" },
      { name: " Birlashgan Arab Amirliklari", code: "+971" },
      { name: " Buyuk Britaniya", code: "+44" },
      { name: " AQSh", code: "+1" },
      { name: " Urugvay", code: "+598" },
      { name: " Vanuatu", code: "+678" },
      { name: " Vatikan", code: "+39" },
      { name: " Venesuela", code: "+58" },
      { name: " Vyetnam", code: "+84" },
      { name: " AQSh Virgin orollari", code: "+1" },
      { name: " Uollis va Futuna", code: "+681" },
      { name: " Yaman", code: "+967" },
      { name: " Zambiya", code: "+260" },
      { name: " Zimbabve", code: "+263" },
    ],
    M = {
      "+93": {
        placeholder: "+93 70 123 45 67",
        format: function (e) {
          let t = "+93 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+93 \d{2} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+355": {
        placeholder: "+355 69 123 45 67",
        format: function (e) {
          let t = "+355 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+355 \d{2} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+213": {
        placeholder: "+213 5 123 45 67",
        format: function (e) {
          let t = "+213 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(1, e.length))),
            e.length > 1 && (t += " " + e.slice(1, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+213 \d{1} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+1": {
        placeholder: "+1 234 567 8901",
        format: function (e) {
          let t = "+1 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+1 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+376": {
        placeholder: "+376 123 456",
        format: function (e) {
          let t = "+376 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+376 \d{3} \d{3}$/.test(e);
        },
      },
      "+244": {
        placeholder: "+244 923 123 456",
        format: function (e) {
          let t = "+244 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+244 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+672": {
        placeholder: "+672 123 456",
        format: function (e) {
          let t = "+672 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+672 \d{3} \d{3}$/.test(e);
        },
      },
      "+54": {
        placeholder: "+54 9 123 456 789",
        format: function (e) {
          let t = "+54 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(1, e.length))),
            e.length > 1 && (t += " " + e.slice(1, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+54 \d{1} \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+374": {
        placeholder: "+374 77 123 456",
        format: function (e) {
          let t = "+374 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+374 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+297": {
        placeholder: "+297 123 4567",
        format: function (e) {
          let t = "+297 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+297 \d{3} \d{4}$/.test(e);
        },
      },
      "+61": {
        placeholder: "+61 4 123 456 78",
        format: function (e) {
          let t = "+61 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(1, e.length))),
            e.length > 1 && (t += " " + e.slice(1, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+61 \d{1} \d{3} \d{3} \d{2}$/.test(e);
        },
      },
      "+43": {
        placeholder: "+43 660 123 45 67",
        format: function (e) {
          let t = "+43 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            e.length > 8 && (t += " " + e.slice(8, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+43 \d{3} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+994": {
        placeholder: "+994 50 123 45 67",
        format: function (e) {
          let t = "+994 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+994 \d{2} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+973": {
        placeholder: "+973 1234 5678",
        format: function (e) {
          let t = "+973 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+973 \d{4} \d{4}$/.test(e);
        },
      },
      "+880": {
        placeholder: "+880 123 456 7890",
        format: function (e) {
          let t = "+880 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+880 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+375": {
        placeholder: "+375 29 123 45 67",
        format: function (e) {
          let t = "+375 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+375 \d{2} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+32": {
        placeholder: "+32 471 23 45 67",
        format: function (e) {
          let t = "+32 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+32 \d{3} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+501": {
        placeholder: "+501 623 45 67",
        format: function (e) {
          let t = "+501 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+501 \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+229": {
        placeholder: "+229 61 23 45 67",
        format: function (e) {
          let t = "+229 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+229 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+975": {
        placeholder: "+975 17 123 456",
        format: function (e) {
          let t = "+975 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+975 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+591": {
        placeholder: "+591 7 123 4567",
        format: function (e) {
          let t = "+591 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(1, e.length))),
            e.length > 1 && (t += " " + e.slice(1, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+591 \d{1} \d{3} \d{4}$/.test(e);
        },
      },
      "+387": {
        placeholder: "+387 61 123 456",
        format: function (e) {
          let t = "+387 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+387 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+267": {
        placeholder: "+267 71 234 567",
        format: function (e) {
          let t = "+267 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+267 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+55": {
        placeholder: "+55 11 91234 5678",
        format: function (e) {
          let t = "+55 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(11, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+55 \d{2} \d{5} \d{4}$/.test(e);
        },
      },
      "+246": {
        placeholder: "+246 123 4567",
        format: function (e) {
          let t = "+246 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+246 \d{3} \d{4}$/.test(e);
        },
      },
      "+673": {
        placeholder: "+673 712 3456",
        format: function (e) {
          let t = "+673 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+673 \d{3} \d{4}$/.test(e);
        },
      },
      "+359": {
        placeholder: "+359 88 123 4567",
        format: function (e) {
          let t = "+359 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+359 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+226": {
        placeholder: "+226 70 12 34 56",
        format: function (e) {
          let t = "+226 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+226 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+257": {
        placeholder: "+257 71 23 45 67",
        format: function (e) {
          let t = "+257 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+257 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+855": {
        placeholder: "+855 12 345 678",
        format: function (e) {
          let t = "+855 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+855 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+237": {
        placeholder: "+237 6 12 34 56 78",
        format: function (e) {
          let t = "+237 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(1, e.length))),
            e.length > 1 && (t += " " + e.slice(1, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+237 \d{1} \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+238": {
        placeholder: "+238 123 45 67",
        format: function (e) {
          let t = "+238 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+238 \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+268": {
        placeholder: "+268 76 12 34 56",
        format: function (e) {
          let t = "+268 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+268 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+251": {
        placeholder: "+251 91 123 4567",
        format: function (e) {
          let t = "+251 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+251 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+679": {
        placeholder: "+679 123 4567",
        format: function (e) {
          let t = "+679 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+679 \d{3} \d{4}$/.test(e);
        },
      },
      "+63": {
        placeholder: "+63 912 345 6789",
        format: function (e) {
          let t = "+63 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+63 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+358": {
        placeholder: "+358 40 123 4567",
        format: function (e) {
          let t = "+358 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+358 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+33": {
        placeholder: "+33 6 12 34 56 78",
        format: function (e) {
          let t = "+33 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(1, e.length))),
            e.length > 1 && (t += " " + e.slice(1, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+33 \d{1} \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+594": {
        placeholder: "+594 694 12 34 56",
        format: function (e) {
          let t = "+594 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+594 \d{3} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+689": {
        placeholder: "+689 87 12 34 56",
        format: function (e) {
          let t = "+689 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+689 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+241": {
        placeholder: "+241 07 12 34 56",
        format: function (e) {
          let t = "+241 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+241 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+220": {
        placeholder: "+220 123 4567",
        format: function (e) {
          let t = "+220 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+220 \d{3} \d{4}$/.test(e);
        },
      },
      "+995": {
        placeholder: "+995 577 123 456",
        format: function (e) {
          let t = "+995 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+995 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+49": {
        placeholder: "+49 171 1234567",
        format: function (e) {
          let t = "+49 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+49 \d{3} \d{7}$/.test(e);
        },
      },
      "+233": {
        placeholder: "+233 24 123 4567",
        format: function (e) {
          let t = "+233 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+233 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+350": {
        placeholder: "+350 123 456",
        format: function (e) {
          let t = "+350 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+350 \d{3} \d{3}$/.test(e);
        },
      },
      "+30": {
        placeholder: "+30 69 1234 5678",
        format: function (e) {
          let t = "+30 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+30 \d{2} \d{4} \d{4}$/.test(e);
        },
      },
      "+299": {
        placeholder: "+299 12 34 56",
        format: function (e) {
          let t = "+299 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+299 \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+590": {
        placeholder: "+590 690 12 34 56",
        format: function (e) {
          let t = "+590 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+590 \d{3} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+502": {
        placeholder: "+502 1234 5678",
        format: function (e) {
          let t = "+502 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+502 \d{4} \d{4}$/.test(e);
        },
      },
      "+224": {
        placeholder: "+224 62 12 34 56",
        format: function (e) {
          let t = "+224 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+224 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+245": {
        placeholder: "+245 123 4567",
        format: function (e) {
          let t = "+245 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+245 \d{3} \d{4}$/.test(e);
        },
      },
      "+592": {
        placeholder: "+592 123 4567",
        format: function (e) {
          let t = "+592 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+592 \d{3} \d{4}$/.test(e);
        },
      },
      "+509": {
        placeholder: "+509 34 12 3456",
        format: function (e) {
          let t = "+509 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+509 \d{2} \d{2} \d{4}$/.test(e);
        },
      },
      "+504": {
        placeholder: "+504 1234 5678",
        format: function (e) {
          let t = "+504 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+504 \d{4} \d{4}$/.test(e);
        },
      },
      "+852": {
        placeholder: "+852 1234 5678",
        format: function (e) {
          let t = "+852 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+852 \d{4} \d{4}$/.test(e);
        },
      },
      "+36": {
        placeholder: "+36 20 123 4567",
        format: function (e) {
          let t = "+36 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+36 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+354": {
        placeholder: "+354 123 4567",
        format: function (e) {
          let t = "+354 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+354 \d{3} \d{4}$/.test(e);
        },
      },
      "+91": {
        placeholder: "+91 123 456 7890",
        format: function (e) {
          let t = "+91 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+91 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+62": {
        placeholder: "+62 812 345 6789",
        format: function (e) {
          let t = "+62 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+62 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+98": {
        placeholder: "+98 912 345 6789",
        format: function (e) {
          let t = "+98 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+98 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+964": {
        placeholder: "+964 77 1234 5678",
        format: function (e) {
          let t = "+964 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+964 \d{2} \d{4} \d{4}$/.test(e);
        },
      },
      "+353": {
        placeholder: "+353 87 123 4567",
        format: function (e) {
          let t = "+353 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+353 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+972": {
        placeholder: "+972 57 123 4567",
        format: function (e) {
          let t = "+972 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+972 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+39": {
        placeholder: "+39 333 123 4567",
        format: function (e) {
          let t = "+39 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+39 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+81": {
        placeholder: "+81 90 1234 5678",
        format: function (e) {
          let t = "+81 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+81 \d{2} \d{4} \d{4}$/.test(e);
        },
      },
      "+962": {
        placeholder: "+962 77 123 4567",
        format: function (e) {
          let t = "+962 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+962 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+7": {
        placeholder: "+7 701 123 4567",
        format: function (e) {
          let t = "+7 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+7 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+254": {
        placeholder: "+254 712 345 678",
        format: function (e) {
          let t = "+254 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+254 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+686": {
        placeholder: "+686 12345",
        format: function (e) {
          let t = "+686 ";
          return e.length > 0 && (t += e.slice(0, Math.min(5, e.length))), t;
        },
        validate: function (e) {
          return /^\+686 \d{5}$/.test(e);
        },
      },
      "+850": {
        placeholder: "+850 191 123 4567",
        format: function (e) {
          let t = "+850 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+850 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+82": {
        placeholder: "+82 10 1234 5678",
        format: function (e) {
          let t = "+82 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+82 \d{2} \d{4} \d{4}$/.test(e);
        },
      },
      "+965": {
        placeholder: "+965 1234 5678",
        format: function (e) {
          let t = "+965 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+965 \d{4} \d{4}$/.test(e);
        },
      },
      "+996": {
        placeholder: "+996 312 123 456",
        format: function (e) {
          let t = "+996 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+996 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+856": {
        placeholder: "+856 20 1234 5678",
        format: function (e) {
          let t = "+856 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+856 \d{2} \d{4} \d{4}$/.test(e);
        },
      },
      "+371": {
        placeholder: "+371 12 345 678",
        format: function (e) {
          let t = "+371 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+371 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+961": {
        placeholder: "+961 71 123 456",
        format: function (e) {
          let t = "+961 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+961 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+266": {
        placeholder: "+266 1234 5678",
        format: function (e) {
          let t = "+266 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+266 \d{4} \d{4}$/.test(e);
        },
      },
      "+231": {
        placeholder: "+231 77 123 4567",
        format: function (e) {
          let t = "+231 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+231 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+218": {
        placeholder: "+218 91 123 4567",
        format: function (e) {
          let t = "+218 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+218 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+423": {
        placeholder: "+423 123 4567",
        format: function (e) {
          let t = "+423 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+423 \d{3} \d{4}$/.test(e);
        },
      },
      "+370": {
        placeholder: "+370 612 34567",
        format: function (e) {
          let t = "+370 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+370 \d{3} \d{3} \d{2}$/.test(e);
        },
      },
      "+352": {
        placeholder: "+352 691 234 567",
        format: function (e) {
          let t = "+352 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+352 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+853": {
        placeholder: "+853 1234 5678",
        format: function (e) {
          let t = "+853 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+853 \d{4} \d{4}$/.test(e);
        },
      },
      "+261": {
        placeholder: "+261 32 12 345 67",
        format: function (e) {
          let t = "+261 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+261 \d{2} \d{2} \d{3} \d{2}$/.test(e);
        },
      },
      "+265": {
        placeholder: "+265 99 123 4567",
        format: function (e) {
          let t = "+265 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+265 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+60": {
        placeholder: "+60 12 345 6789",
        format: function (e) {
          let t = "+60 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+60 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+960": {
        placeholder: "+960 123 4567",
        format: function (e) {
          let t = "+960 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+960 \d{3} \d{4}$/.test(e);
        },
      },
      "+223": {
        placeholder: "+223 12 34 56 78",
        format: function (e) {
          let t = "+223 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+223 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+356": {
        placeholder: "+356 1234 5678",
        format: function (e) {
          let t = "+356 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+356 \d{4} \d{4}$/.test(e);
        },
      },
      "+692": {
        placeholder: "+692 123 4567",
        format: function (e) {
          let t = "+692 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+692 \d{3} \d{4}$/.test(e);
        },
      },
      "+596": {
        placeholder: "+596 696 12 34 56",
        format: function (e) {
          let t = "+596 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+596 \d{3} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+222": {
        placeholder: "+222 12 34 56 78",
        format: function (e) {
          let t = "+222 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+222 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+230": {
        placeholder: "+230 123 4567",
        format: function (e) {
          let t = "+230 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+230 \d{3} \d{4}$/.test(e);
        },
      },
      "+262": {
        placeholder: "+262 692 12 34 56",
        format: function (e) {
          let t = "+262 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+262 \d{3} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+52": {
        placeholder: "+52 55 1234 5678",
        format: function (e) {
          let t = "+52 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+52 \d{2} \d{4} \d{4}$/.test(e);
        },
      },
      "+691": {
        placeholder: "+691 123 4567",
        format: function (e) {
          let t = "+691 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+691 \d{3} \d{4}$/.test(e);
        },
      },
      "+373": {
        placeholder: "+373 69 123 456",
        format: function (e) {
          let t = "+373 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+373 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+377": {
        placeholder: "+377 12 34 56 78",
        format: function (e) {
          let t = "+377 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+377 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+976": {
        placeholder: "+976 12 34 56 78",
        format: function (e) {
          let t = "+976 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+976 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+382": {
        placeholder: "+382 67 123 456",
        format: function (e) {
          let t = "+382 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+382 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+212": {
        placeholder: "+212 612 345 678",
        format: function (e) {
          let t = "+212 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+212 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+258": {
        placeholder: "+258 82 123 4567",
        format: function (e) {
          let t = "+258 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+258 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+95": {
        placeholder: "+95 9 123 456 78",
        format: function (e) {
          let t = "+95 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(1, e.length))),
            e.length > 1 && (t += " " + e.slice(1, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+95 \d{1} \d{3} \d{4}$/.test(e);
        },
      },
      "+264": {
        placeholder: "+264 81 123 4567",
        format: function (e) {
          let t = "+264 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+264 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+674": {
        placeholder: "+674 123 4567",
        format: function (e) {
          let t = "+674 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+674 \d{3} \d{4}$/.test(e);
        },
      },
      "+977": {
        placeholder: "+977 98 1234 5678",
        format: function (e) {
          let t = "+977 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+977 \d{2} \d{4} \d{4}$/.test(e);
        },
      },
      "+31": {
        placeholder: "+31 6 1234 5678",
        format: function (e) {
          let t = "+31 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(1, e.length))),
            e.length > 1 && (t += " " + e.slice(1, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+31 \d{1} \d{4} \d{4}$/.test(e);
        },
      },
      "+687": {
        placeholder: "+687 12 34 56",
        format: function (e) {
          let t = "+687 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+687 \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+64": {
        placeholder: "+64 21 123 4567",
        format: function (e) {
          let t = "+64 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+64 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+505": {
        placeholder: "+505 1234 5678",
        format: function (e) {
          let t = "+505 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+505 \d{4} \d{4}$/.test(e);
        },
      },
      "+227": {
        placeholder: "+227 12 34 56 78",
        format: function (e) {
          let t = "+227 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+227 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+234": {
        placeholder: "+234 803 123 4567",
        format: function (e) {
          let t = "+234 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+234 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+683": {
        placeholder: "+683 1234",
        format: function (e) {
          let t = "+683 ";
          return e.length > 0 && (t += e.slice(0, Math.min(4, e.length))), t;
        },
        validate: function (e) {
          return /^\+683 \d{4}$/.test(e);
        },
      },
      "+672": {
        placeholder: "+672 123 456",
        format: function (e) {
          let t = "+672 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+672 \d{3} \d{3}$/.test(e);
        },
      },
      "+47": {
        placeholder: "+47 123 45 678",
        format: function (e) {
          let t = "+47 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+47 \d{3} \d{2} \d{3}$/.test(e);
        },
      },
      "+968": {
        placeholder: "+968 1234 5678",
        format: function (e) {
          let t = "+968 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+968 \d{4} \d{4}$/.test(e);
        },
      },
      "+92": {
        placeholder: "+92 300 123 4567",
        format: function (e) {
          let t = "+92 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+92 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+680": {
        placeholder: "+680 123 4567",
        format: function (e) {
          let t = "+680 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+680 \d{3} \d{4}$/.test(e);
        },
      },
      "+970": {
        placeholder: "+970 59 123 4567",
        format: function (e) {
          let t = "+970 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+970 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+507": {
        placeholder: "+507 123 4567",
        format: function (e) {
          let t = "+507 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+507 \d{3} \d{4}$/.test(e);
        },
      },
      "+675": {
        placeholder: "+675 123 4567",
        format: function (e) {
          let t = "+675 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+675 \d{3} \d{4}$/.test(e);
        },
      },
      "+595": {
        placeholder: "+595 981 123 456",
        format: function (e) {
          let t = "+595 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+595 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+51": {
        placeholder: "+51 912 345 678",
        format: function (e) {
          let t = "+51 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+51 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+48": {
        placeholder: "+48 123 456 789",
        format: function (e) {
          let t = "+48 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+48 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+351": {
        placeholder: "+351 912 345 678",
        format: function (e) {
          let t = "+351 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+351 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+974": {
        placeholder: "+974 1234 5678",
        format: function (e) {
          let t = "+974 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+974 \d{4} \d{4}$/.test(e);
        },
      },
      "+262": {
        placeholder: "+262 692 12 34 56",
        format: function (e) {
          let t = "+262 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+262 \d{3} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+40": {
        placeholder: "+40 712 345 678",
        format: function (e) {
          let t = "+40 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+40 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+7": {
        placeholder: "+7 901 234 56 78",
        format: function (e) {
          let t = "+7 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            e.length > 8 && (t += " " + e.slice(8, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+7 \d{3} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+250": {
        placeholder: "+250 78 123 4567",
        format: function (e) {
          let t = "+250 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+250 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+590": {
        placeholder: "+590 690 12 34 56",
        format: function (e) {
          let t = "+590 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+590 \d{3} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+290": {
        placeholder: "+290 1234",
        format: function (e) {
          let t = "+290 ";
          return e.length > 0 && (t += e.slice(0, Math.min(4, e.length))), t;
        },
        validate: function (e) {
          return /^\+290 \d{4}$/.test(e);
        },
      },
      "+508": {
        placeholder: "+508 12 34 56",
        format: function (e) {
          let t = "+508 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+508 \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+685": {
        placeholder: "+685 123 4567",
        format: function (e) {
          let t = "+685 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+685 \d{3} \d{4}$/.test(e);
        },
      },
      "+378": {
        placeholder: "+378 123 456",
        format: function (e) {
          let t = "+378 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+378 \d{3} \d{3}$/.test(e);
        },
      },
      "+239": {
        placeholder: "+239 123 4567",
        format: function (e) {
          let t = "+239 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+239 \d{3} \d{4}$/.test(e);
        },
      },
      "+966": {
        placeholder: "+966 50 123 4567",
        format: function (e) {
          let t = "+966 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+966 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+221": {
        placeholder: "+221 77 123 45 67",
        format: function (e) {
          let t = "+221 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+221 \d{2} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+381": {
        placeholder: "+381 60 123 4567",
        format: function (e) {
          let t = "+381 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+381 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+248": {
        placeholder: "+248 123 4567",
        format: function (e) {
          let t = "+248 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+248 \d{3} \d{4}$/.test(e);
        },
      },
      "+232": {
        placeholder: "+232 76 123 456",
        format: function (e) {
          let t = "+232 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+232 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+65": {
        placeholder: "+65 1234 5678",
        format: function (e) {
          let t = "+65 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+65 \d{4} \d{4}$/.test(e);
        },
      },
      "+421": {
        placeholder: "+421 912 345 678",
        format: function (e) {
          let t = "+421 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+421 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+386": {
        placeholder: "+386 31 234 567",
        format: function (e) {
          let t = "+386 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+386 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+677": {
        placeholder: "+677 123 4567",
        format: function (e) {
          let t = "+677 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+677 \d{3} \d{4}$/.test(e);
        },
      },
      "+252": {
        placeholder: "+252 61 234 5678",
        format: function (e) {
          let t = "+252 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+252 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+27": {
        placeholder: "+27 82 123 4567",
        format: function (e) {
          let t = "+27 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+27 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+211": {
        placeholder: "+211 91 123 4567",
        format: function (e) {
          let t = "+211 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+211 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+34": {
        placeholder: "+34 612 34 56 78",
        format: function (e) {
          let t = "+34 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+34 \d{3} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+94": {
        placeholder: "+94 71 234 5678",
        format: function (e) {
          let t = "+94 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+94 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+249": {
        placeholder: "+249 91 234 5678",
        format: function (e) {
          let t = "+249 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+249 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+597": {
        placeholder: "+597 123 4567",
        format: function (e) {
          let t = "+597 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+597 \d{3} \d{4}$/.test(e);
        },
      },
      "+46": {
        placeholder: "+46 70 123 45 67",
        format: function (e) {
          let t = "+46 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+46 \d{2} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+41": {
        placeholder: "+41 79 123 45 67",
        format: function (e) {
          let t = "+41 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+41 \d{2} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+963": {
        placeholder: "+963 912 345 678",
        format: function (e) {
          let t = "+963 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+963 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+886": {
        placeholder: "+886 912 345 678",
        format: function (e) {
          let t = "+886 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+886 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+992": {
        placeholder: "+992 91 234 5678",
        format: function (e) {
          let t = "+992 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+992 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+66": {
        placeholder: "+66 81 234 5678",
        format: function (e) {
          let t = "+66 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+66 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+255": {
        placeholder: "+255 71 234 5678",
        format: function (e) {
          let t = "+255 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+255 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+670": {
        placeholder: "+670 123 4567",
        format: function (e) {
          let t = "+670 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+670 \d{3} \d{4}$/.test(e);
        },
      },
      "+228": {
        placeholder: "+228 12 34 56 78",
        format: function (e) {
          let t = "+228 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+228 \d{2} \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+690": {
        placeholder: "+690 1234",
        format: function (e) {
          let t = "+690 ";
          return e.length > 0 && (t += e.slice(0, Math.min(4, e.length))), t;
        },
        validate: function (e) {
          return /^\+690 \d{4}$/.test(e);
        },
      },
      "+676": {
        placeholder: "+676 123 4567",
        format: function (e) {
          let t = "+676 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+676 \d{3} \d{4}$/.test(e);
        },
      },
      "+216": {
        placeholder: "+216 98 123 456",
        format: function (e) {
          let t = "+216 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+216 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+90": {
        placeholder: "+90 532 123 45 67",
        format: function (e) {
          let t = "+90 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(8, e.length))),
            e.length > 8 && (t += " " + e.slice(8, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+90 \d{3} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+993": {
        placeholder: "+993 12 345 678",
        format: function (e) {
          let t = "+993 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+993 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+688": {
        placeholder: "+688 12345",
        format: function (e) {
          let t = "+688 ";
          return e.length > 0 && (t += e.slice(0, Math.min(5, e.length))), t;
        },
        validate: function (e) {
          return /^\+688 \d{5}$/.test(e);
        },
      },
      "+256": {
        placeholder: "+256 77 123 4567",
        format: function (e) {
          let t = "+256 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+256 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+380": {
        placeholder: "+380 67 123 45 67",
        format: function (e) {
          let t = "+380 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+380 \d{2} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+971": {
        placeholder: "+971 50 123 4567",
        format: function (e) {
          let t = "+971 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+971 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+44": {
        placeholder: "+44 7700 123 456",
        format: function (e) {
          let t = "+44 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+44 \d{4} \d{3} \d{3}$/.test(e);
        },
      },
      "+598": {
        placeholder: "+598 99 123 456",
        format: function (e) {
          let t = "+598 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(8, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+598 \d{2} \d{3} \d{3}$/.test(e);
        },
      },
      "+998": {
        placeholder: "+998 90 123 45 67",
        format: function (e) {
          let t = "+998 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(7, e.length))),
            e.length > 7 && (t += " " + e.slice(7, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+998 \d{2} \d{3} \d{2} \d{2}$/.test(e);
        },
      },
      "+678": {
        placeholder: "+678 123 4567",
        format: function (e) {
          let t = "+678 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(7, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+678 \d{3} \d{4}$/.test(e);
        },
      },
      "+39": {
        placeholder: "+39 333 123 4567",
        format: function (e) {
          let t = "+39 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+39 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+58": {
        placeholder: "+58 412 345 6789",
        format: function (e) {
          let t = "+58 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(10, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+58 \d{3} \d{3} \d{4}$/.test(e);
        },
      },
      "+84": {
        placeholder: "+84 912 345 678",
        format: function (e) {
          let t = "+84 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(3, e.length))),
            e.length > 3 && (t += " " + e.slice(3, Math.min(6, e.length))),
            e.length > 6 && (t += " " + e.slice(6, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+84 \d{3} \d{3} \d{3}$/.test(e);
        },
      },
      "+681": {
        placeholder: "+681 12 34 56",
        format: function (e) {
          let t = "+681 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(4, e.length))),
            e.length > 4 && (t += " " + e.slice(4, Math.min(6, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+681 \d{2} \d{2} \d{2}$/.test(e);
        },
      },
      "+967": {
        placeholder: "+967 71 234 5678",
        format: function (e) {
          let t = "+967 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+967 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+260": {
        placeholder: "+260 96 123 4567",
        format: function (e) {
          let t = "+260 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+260 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
      "+263": {
        placeholder: "+263 71 234 5678",
        format: function (e) {
          let t = "+263 ";
          return (
            e.length > 0 && (t += e.slice(0, Math.min(2, e.length))),
            e.length > 2 && (t += " " + e.slice(2, Math.min(5, e.length))),
            e.length > 5 && (t += " " + e.slice(5, Math.min(9, e.length))),
            t
          );
        },
        validate: function (e) {
          return /^\+263 \d{2} \d{3} \d{4}$/.test(e);
        },
      },
    };
  let p = "+998";
  function v(e) {
    (p = e.code),
      (m.textContent = `${e.name.split(" ")[0]}`),
      (s.style.display = "none");
    const t = M[e.code] || M["+998"];
    (h.placeholder = t.placeholder),
      (h.value = p + " "),
      (r.style.display = "none"),
      (u.innerHTML = '<polyline points="6 9 12 15 18 9"></polyline>');
  }
  function $() {
    (t.style.display = "none"),
      (document.documentElement.style.overflowY = "scroll");
  }
  g.addEventListener("click", function () {
    "block" === s.style.display
      ? ((s.style.display = "none"),
        (u.innerHTML = '<polyline points="6 9 12 15 18 9"></polyline>'))
      : ((s.innerHTML = ""),
        f.forEach((e) => {
          const t = document.createElement("div");
          (t.className = "country-option"),
            e.code === p && t.classList.add("selected"),
            (t.innerHTML = `\n                <span>${
              e.name
            }</span>\n                <span class="country-code">${
              e.code
            }</span>\n                ${
              e.code === p
                ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                : ""
            }\n            `),
            t.addEventListener("click", function () {
              v(e);
            }),
            s.appendChild(t);
        }),
        (s.style.display = "block"),
        (u.innerHTML = '<polyline points="18 15 12 9 6 15"></polyline>'));
  }),
    document.addEventListener("click", function (e) {
      g.contains(e.target) ||
        s.contains(e.target) ||
        ((s.style.display = "none"),
        (u.innerHTML = '<polyline points="6 9 12 15 18 9"></polyline>'));
    }),
    h.addEventListener("input", function (e) {
      const t = (function (e, t) {
        const n = e.replace(/\D/g, "");
        return (M[t] || M["+998"]).format(n);
      })(e.target.value.replace(p, "").trim(), p);
      (h.value = t), (r.style.display = "none");
    }),
    a.addEventListener("input", function () {
      c.style.display = "none";
    }),
    e.forEach((e) => {
      e.addEventListener("click", function () {
        (t.style.display = "block"),
          (document.documentElement.style.overflowY = "hidden");
      });
    }),
    n.addEventListener("click", $),
    l.addEventListener("click", $),
    i.addEventListener("submit", async function (e) {
      if ((e.preventDefault(), o.disabled)) return;
      if (
        ((c.style.display = "none"),
        (r.style.display = "none"),
        (d.style.display = "none"),
        !a.value.trim())
      )
        return void (c.style.display = "block");
      if (((t = h.value), !(M[p] || M["+998"]).validate(t)))
        return void (r.style.display = "block");
      var t;
      (o.textContent = "YUBORILMOQDA..."), (o.disabled = !0);
      const n = new FormData();
      n.append("Ism", a.value.trim()),
        n.append("Telefon raqam", h.value),
        n.append(
          "Royhatdan o'tgan vaqti",
          (function () {
            const e = new Date();
            return `${String(e.getDate()).padStart(2, "0")}-${String(
              e.getMonth() + 1
            ).padStart(2, "0")}-${e.getFullYear()}, ${String(
              e.getHours()
            ).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}`;
          })()
        );
      const l = {
        name: value.trim(),
        phone: h.value,
        time: (function () {
          const e = new Date();
          return `${String(e.getDate()).padStart(2, "0")}-${String(
            e.getMonth() + 1
          ).padStart(2, "0")}-${e.getFullYear()}, ${String(
            e.getHours()
          ).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}`;
        })(),
      };
      localStorage.setItem("FormData", JSON.stringify(l)),
        (window.location.href = "thankYou.html");
    }),
    document.addEventListener("keydown", function (e) {
      "Escape" === e.key && "block" === t.style.display && $();
    }),
    a.addEventListener("focus", function () {
      (c.style.display = "none"), (d.style.display = "none");
    }),
    h.addEventListener("focus", function () {
      (r.style.display = "none"), (d.style.display = "none");
    }),
    v(f[0]);
});
