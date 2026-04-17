// Arreglo de objetos con las palabras
const flashcardsData = [
  {
    word: "Amazon River",
    phonetic: "/ˈæm.ə.zən ˈrɪv.ɚ/",
    url: "#"
  },
  {
    word: "apes",
    phonetic: "/eɪps/",
    url: "#"
  },
  {
    word: "astronomer",
    phonetic: "/əˈstrɑː.nə.mɚ/",
    url: "#"
  },
  {
    word: "attention",
    phonetic: "/əˈtɛn.ʃən/",
    url: "#"
  },
  {
    word: "bacteria",
    phonetic: "/bækˈtɪr.i.ə/",
    url: "#"
  },
  {
    word: "banks",
    phonetic: "/bæŋks/",
    url: "#"
  },
  {
    word: "blast",
    phonetic: "/blæst/",
    url: "#"
  },
  {
    word: "blushed",
    phonetic: "/blʌʃt/",
    url: "#"
  },
  {
    word: "boarded",
    phonetic: "/ˈbɔːr.dɚd/",
    url: "#"
  },
  {
    word: "bright",
    phonetic: "/braɪt/",
    url: "#"
  },
  {
    word: "British",
    phonetic: "/ˈbrɪt.ɪʃ/",
    url: "#"
  },
  {
    word: "bug spray",
    phonetic: "/ˈbʌɡ ˌspreɪ/",
    url: "#"
  },
  {
    word: "century",
    phonetic: "/ˈsɛn.tʃɚ.i/",
    url: "#"
  },
  {
    word: "clothes",
    phonetic: "/kloʊðz/",
    url: "#"
  },
  {
    word: "confident",
    phonetic: "/ˈkɑːn.fə.dənt/",
    url: "#"
  },
  {
    word: "cool down",
    phonetic: "/ˌkuːl ˈdaʊn/",
    url: "#"
  },
  {
    word: "creek",
    phonetic: "/kriːk/",
    url: "#"
  },
  {
    word: "dam",
    phonetic: "/dæm/",
    url: "#"
  },
  {
    word: "dizzy",
    phonetic: "/ˈdɪz.i/",
    url: "#"
  },
  {
    word: "dots and dashes",
    phonetic: "/ˌdɑːts ən ˈdæʃ.ɪz/",
    url: "#"
  },
  {
    word: "drink up",
    phonetic: "/ˌdrɪŋk ˈʌp/",
    url: "#"
  },
  {
    word: "drop",
    phonetic: "/drɑːp/",
    url: "#"
  },
  {
    word: "earthquakes",
    phonetic: "/ˈɝːθ.kweɪks/",
    url: "#"
  },
  {
    word: "embarrassed",
    phonetic: "/ɪmˈbɛr.əst/",
    url: "#"
  },
  {
    word: "English",
    phonetic: "/ˈɪŋ.ɡlɪʃ/",
    url: "#"
  },
  {
    word: "enough",
    phonetic: "/ɪˈnʌf/",
    url: "#"
  },
  {
    word: "entertaining",
    phonetic: "/ˌɛn.tɚˈteɪ.nɪŋ/",
    url: "#"
  },
  {
    word: "Europe",
    phonetic: "/ˈjʊr.əp/",
    url: "#"
  },
  {
    word: "exclaims",
    phonetic: "/ɪkˈskleɪmz/",
    url: "#"
  },
  {
    word: "experiment",
    phonetic: "/ɪkˈspɛr.ə.mənt/",
    url: "#"
  },
  {
    word: "faucet",
    phonetic: "/ˈfɑː.sɪt/",
    url: "#"
  },
  {
    word: "flashlight",
    phonetic: "/ˈflæʃ.laɪt/",
    url: "#"
  },
  {
    word: "Flush",
    phonetic: "/flʌʃ/",
    url: "#"
  },
  {
    word: "foreground",
    phonetic: "/ˈfɔːr.ɡraʊnd/",
    url: "#"
  },
  {
    word: "forgive",
    phonetic: "/fɚˈɡɪv/",
    url: "#"
  },
  {
    word: "forty-one",
    phonetic: "/ˌfɔːr.tiˈwʌn/",
    url: "#"
  },
  {
    word: "forty-two",
    phonetic: "/ˌfɔːr.tiˈtuː/",
    url: "#"
  },
  {
    word: "French",
    phonetic: "/frɛntʃ/",
    url: "#"
  },
  {
    word: "Friday",
    phonetic: "/ˈfraɪ.deɪ/",
    url: "#"
  },
  {
    word: "galaxy",
    phonetic: "/ˈɡæl.ək.si/",
    url: "#"
  },
  {
    word: "goods",
    phonetic: "/ɡʊdz/",
    url: "#"
  },
  {
    word: "grateful",
    phonetic: "/ˈɡreɪt.fəl/",
    url: "#"
  },
  {
    word: "grumbled",
    phonetic: "/ˈɡrʌm.bəld/",
    url: "#"
  },
  {
    word: "hammock",
    phonetic: "/ˈhæm.ək/",
    url: "#"
  },
  {
    word: "healthy",
    phonetic: "/ˈhɛl.θi/",
    url: "#"
  },
  {
    word: "Hose",
    phonetic: "/hoʊz/",
    url: "#"
  },
  {
    word: "iron",
    phonetic: "/ˈaɪ.ɚn/",
    url: "#"
  },
  {
    word: "irrigate",
    phonetic: "/ˈɪr.ə.ɡeɪt/",
    url: "#"
  },
  {
    word: "January",
    phonetic: "/ˈdʒæn.juˌɛr.i/",
    url: "#"
  },
  {
    word: "Japanese",
    phonetic: "/ˌdʒæp.əˈniːz/",
    url: "#"
  },
  {
    word: "jewelry",
    phonetic: "/ˈdʒuː.əl.ri/",
    url: "#"
  },
  {
    word: "landscape",
    phonetic: "/ˈlænd.skeɪp/",
    url: "#"
  },
  {
    word: "laugh at",
    phonetic: "/ˈlæf æt/",
    url: "#"
  },
  {
    word: "launch",
    phonetic: "/lɔːntʃ/",
    url: "#"
  },
  {
    word: "length",
    phonetic: "/lɛŋkθ/",
    url: "#"
  },
  {
    word: "mechanical",
    phonetic: "/məˈkæn.ɪ.kəl/",
    url: "#"
  },
  {
    word: "melt",
    phonetic: "/mɛlt/",
    url: "#"
  },
  {
    word: "Monday",
    phonetic: "/ˈmʌn.deɪ/",
    url: "#"
  },
  {
    word: "network",
    phonetic: "/ˈnɛt.wɝːk/",
    url: "#"
  },
  {
    word: "North Pole",
    phonetic: "/ˌnɔːrθ ˈpoʊl/",
    url: "#"
  },
  {
    word: "November",
    phonetic: "/noʊˈvɛm.bɚ/",
    url: "#"
  },
  {
    word: "October",
    phonetic: "/ɑːkˈtoʊ.bɚ/",
    url: "#"
  },
  {
    word: "parachuted",
    phonetic: "/ˈpær.əˌʃuː.tɪd/",
    url: "#"
  },
  {
    word: "portrait",
    phonetic: "/ˈpɔːr.treɪt/",
    url: "#"
  },
  {
    word: "pottery",
    phonetic: "/ˈpɑː.t̬ɚ.i/",
    url: "#"
  },
  {
    word: "powerful",
    phonetic: "/ˈpaʊ.ɚ.fəl/",
    url: "#"
  },
  {
    word: "pressed",
    phonetic: "/prɛst/",
    url: "#"
  },
  {
    word: "pump",
    phonetic: "/pʌmp/",
    url: "#"
  },
  {
    word: "reflection",
    phonetic: "/rɪˈflɛk.ʃən/",
    url: "#"
  },
  {
    word: "relaxing",
    phonetic: "/rɪˈlæk.sɪŋ/",
    url: "#"
  },
  {
    word: "reservoir",
    phonetic: "/ˈrɛz.ɚ.vwɑːr/",
    url: "#"
  },
  {
    word: "shadow",
    phonetic: "/ˈʃæd.oʊ/",
    url: "#"
  },
  {
    word: "shelter",
    phonetic: "/ˈʃɛl.tɚ/",
    url: "#"
  },
  {
    word: "sketch",
    phonetic: "/skɛtʃ/",
    url: "#"
  },
  {
    word: "spare",
    phonetic: "/spɛr/",
    url: "#"
  },
  {
    word: "steam",
    phonetic: "/stiːm/",
    url: "#"
  },
  {
    word: "strength",
    phonetic: "/strɛŋkθ/",
    url: "#"
  },
  {
    word: "sunscreen",
    phonetic: "/ˈsʌnˌskriːn/",
    url: "#"
  },
  {
    word: "thermometer",
    phonetic: "/θɚˈmɑː.mə.t̬ɚ/",
    url: "#"
  },
  {
    word: "thirty-four",
    phonetic: "/ˌθɝː.tiˈfɔːr/",
    url: "#"
  },
  {
    word: "timeline",
    phonetic: "/ˈtaɪm.laɪn/",
    url: "#"
  },
  {
    word: "toddlers",
    phonetic: "/ˈtɑːd.lɚz/",
    url: "#"
  },
  {
    word: "trading",
    phonetic: "/ˈtreɪ.dɪŋ/",
    url: "#"
  },
  {
    word: "troubles",
    phonetic: "/ˈtrʌb.əlz/",
    url: "#"
  },
  {
    word: "underground",
    phonetic: "/ˌʌn.dɚˈɡraʊnd/",
    url: "#"
  },
  {
    word: "vegetables",
    phonetic: "/ˈvɛdʒ.tə.bəlz/",
    url: "#"
  },
  {
    word: "Viking",
    phonetic: "/ˈvaɪ.kɪŋ/",
    url: "#"
  },
  {
    word: "water plant",
    phonetic: "/ˈwɔː.t̬ɚ plænt/",
    url: "#"
  },
  {
    word: "weave",
    phonetic: "/wiːv/",
    url: "#"
  },
  {
    word: "width",
    phonetic: "/wɪdθ/",
    url: "#"
  }
];

// Variable para el nombre (modificable desde el script)
export let liamName = "Verison Yerik";

// Función para generar las flashcards
export function generateFlashcards() {
    const container = document.getElementById('flashcards-container');

    for (let i = 0; i < flashcardsData.length; i++) {
        const data = flashcardsData[i];

        // Crear tarjeta con imagen (izquierda)
        const imageCard = document.createElement('div');
        imageCard.className = 'flashcard';
        imageCard.innerHTML = `
            <div class="flashcard-image">
                <img src="${data.url}" alt="${data.word}">
                <div class="liam-name">${liamName}</div>
            </div>
        `;

        // Crear tarjeta con texto (derecha)
        const textCard = document.createElement('div');
        textCard.className = 'flashcard';
        textCard.innerHTML = `
            <div class="flashcard-text">
                <div class="word">${data.word}</div>
                <div class="phonetic">${data.phonetic}</div>
                <div class="liam-name">${liamName}</div>
            </div>
        `;

        container.appendChild(imageCard);
        container.appendChild(textCard);
    }
}

// Generar las flashcards cuando el DOM esté listo
// document.addEventListener('DOMContentLoaded', generateFlashcards);