// Arreglo de objetos con las palabras
// Arreglo de objetos con las palabras
const flashcardsData = [
  {
    // 1
    word: "Amazon River",
    phonetic: "/ˈæm.ə.zən ˈrɪv.ɚ/",
    url: "/images/amazon_river.jpg"
  },
  {
    // 2
    word: "apes",
    phonetic: "/eɪps/",
    url: "/images/apes.jpg"
  },
  {
    // 3
    word: "astronomer",
    phonetic: "/əˈstrɑː.nə.mɚ/",
    url: "/images/astronomer.jpg"
  },
  {
    // 4
    word: "attention",
    phonetic: "/əˈtɛn.ʃən/",
    url: "/images/attention.jpg"
  },
  {
    // 5
    word: "bacteria",
    phonetic: "/bækˈtɪr.i.ə/",
    url: "/images/bacteria.jpg"
  },
  {
    // 6
    word: "banks",
    phonetic: "/bæŋks/",
    url: "/images/banks.jpg"
  },
  {
    // 7
    word: "blast",
    phonetic: "/blæst/",
    url: "/images/blast.jpg"
  },
  {
    // 8
    word: "blushed",
    phonetic: "/blʌʃt/",
    url: "/images/blushed.jpg"
  },
  {
    // 9
    word: "boarded",
    phonetic: "/ˈbɔːr.dɚd/",
    url: "/images/boarded.jpg"
  },
  {
    // 10
    word: "bright",
    phonetic: "/braɪt/",
    url: "/images/bright.jpg"
  },
  {
    // 11
    word: "British",
    phonetic: "/ˈbrɪt.ɪʃ/",
    url: "/images/british.jpg"
  },
  {
    // 12
    word: "bug spray",
    phonetic: "/ˈbʌɡ ˌspreɪ/",
    url: "/images/bug_spray.jpg"
  },
  {
    // 13
    word: "century",
    phonetic: "/ˈsɛn.tʃɚ.i/",
    url: "/images/century.jpg"
  },
  {
    // 14
    word: "clothes",
    phonetic: "/kloʊðz/",
    url: "/images/clothes.jpg"
  },
  {
    // 15
    word: "confident",
    phonetic: "/ˈkɑːn.fə.dənt/",
    url: "/images/confident.jpg"
  },
  {
    // 16
    word: "cool down",
    phonetic: "/ˌkuːl ˈdaʊn/",
    url: "/images/cool_down.jpg"
  },
  {
    // 17
    word: "creek",
    phonetic: "/kriːk/",
    url: "/images/creek.jpg"
  },
  {
    // 18
    word: "dam",
    phonetic: "/dæm/",
    url: "/images/dam.jpg"
  },
  {
    // 19
    word: "dizzy",
    phonetic: "/ˈdɪz.i/",
    url: "/images/dizzy.jpg"
  },
  {
    // 20
    word: "dots and dashes",
    phonetic: "/ˌdɑːts ən ˈdæʃ.ɪz/",
    url: "/images/dots_and_dashes.jpg"
  },
  {
    // 21
    word: "drink up",
    phonetic: "/ˌdrɪŋk ˈʌp/",
    url: "/images/drink_up.jpg"
  },
  {
    // 22
    word: "drop",
    phonetic: "/drɑːp/",
    url: "/images/drop.jpg"
  },
  {
    // 23
    word: "earthquakes",
    phonetic: "/ˈɝːθ.kweɪks/",
    url: "/images/earthquakes.jpg"
  },
  {
    // 24
    word: "embarrassed",
    phonetic: "/ɪmˈbɛr.əst/",
    url: "/images/embarrassed.jpg"
  },
  {
    // 25
    word: "English",
    phonetic: "/ˈɪŋ.ɡlɪʃ/",
    url: "/images/english.jpg"
  },
  {
    // 26
    word: "enough",
    phonetic: "/ɪˈnʌf/",
    url: "/images/enough.jpg"
  },
  {
    // 27
    word: "entertaining",
    phonetic: "/ˌɛn.tɚˈteɪ.nɪŋ/",
    url: "/images/entertaining.jpg"
  },
  {
    // 28
    word: "Europe",
    phonetic: "/ˈjʊr.əp/",
    url: "/images/europe.jpg"
  },
  {
    // 29
    word: "exclaims",
    phonetic: "/ɪkˈskleɪmz/",
    url: "/images/exclaims.jpg"
  },
  {
    // 30
    word: "experiment",
    phonetic: "/ɪkˈspɛr.ə.mənt/",
    url: "/images/experiment.jpg"
  },
  {
    // 31
    word: "faucet",
    phonetic: "/ˈfɑː.sɪt/",
    url: "/images/faucet.jpg"
  },
  {
    // 32
    word: "flashlight",
    phonetic: "/ˈflæʃ.laɪt/",
    url: "/images/flashlight.jpg"
  },
  {
    // 33
    word: "Flush",
    phonetic: "/flʌʃ/",
    url: "/images/flush.jpg"
  },
  {
    // 34
    word: "foreground",
    phonetic: "/ˈfɔːr.ɡraʊnd/",
    url: "/images/foreground.jpg"
  },
  {
    // 35
    word: "forgive",
    phonetic: "/fɚˈɡɪv/",
    url: "/images/forgive.jpg"
  },
  {
    // 36
    word: "forty-one",
    phonetic: "/ˌfɔːr.tiˈwʌn/",
    url: "/images/forty_one.jpg"
  },
  {
    // 37
    word: "forty-two",
    phonetic: "/ˌfɔːr.tiˈtuː/",
    url: "/images/forty_two.jpg"
  },
  {
    // 38
    word: "French",
    phonetic: "/frɛntʃ/",
    url: "/images/french.jpg"
  },
  {
    // 39
    word: "Friday",
    phonetic: "/ˈfraɪ.deɪ/",
    url: "/images/friday.jpg"
  },
  {
    // 40
    word: "galaxy",
    phonetic: "/ˈɡæl.ək.si/",
    url: "/images/galaxy.jpg"
  },
  {
    // 41
    word: "goods",
    phonetic: "/ɡʊdz/",
    url: "/images/goods.jpg"
  },
  {
    // 42
    word: "grateful",
    phonetic: "/ˈɡreɪt.fəl/",
    url: "/images/grateful.jpg"
  },
  {
    // 43
    word: "grumbled",
    phonetic: "/ˈɡrʌm.bəld/",
    url: "/images/grumbled.jpg"
  },
  {
    // 44
    word: "hammock",
    phonetic: "/ˈhæm.ək/",
    url: "/images/hammock.jpg"
  },
  {
    // 45
    word: "healthy",
    phonetic: "/ˈhɛl.θi/",
    url: "/images/healthy.jpg"
  },
  {
    // 46
    word: "Hose",
    phonetic: "/hoʊz/",
    url: "/images/hose.jpg"
  },
  {
    // 47
    word: "iron",
    phonetic: "/ˈaɪ.ɚn/",
    url: "/images/iron.jpg"
  },
  {
    // 48
    word: "irrigate",
    phonetic: "/ˈɪr.ə.ɡeɪt/",
    url: "/images/irrigate.jpg"
  },
  {
    // 49
    word: "January",
    phonetic: "/ˈdʒæn.juˌɛr.i/",
    url: "/images/january.jpg"
  },
  {
    // 50
    word: "Japanese",
    phonetic: "/ˌdʒæp.əˈniːz/",
    url: "/images/japanese.jpg"
  },
  {
    // 51
    word: "jewelry",
    phonetic: "/ˈdʒuː.əl.ri/",
    url: "/images/jewelry.jpg"
  },
  {
    // 52
    word: "landscape",
    phonetic: "/ˈlænd.skeɪp/",
    url: "/images/landscape.jpg"
  },
  {
    // 53
    word: "laugh at",
    phonetic: "/ˈlæf æt/",
    url: "/images/laugh_at.jpg"
  },
  {
    // 54
    word: "launch",
    phonetic: "/lɔːntʃ/",
    url: "/images/launch.jpg"
  },
  {
    // 55
    word: "length",
    phonetic: "/lɛŋkθ/",
    url: "/images/length.jpg"
  },
  {
    // 56
    word: "mechanical",
    phonetic: "/məˈkæn.ɪ.kəl/",
    url: "/images/mechanical.jpg"
  },
  {
    // 57
    word: "melt",
    phonetic: "/mɛlt/",
    url: "/images/melt.jpg"
  },
  {
    // 58
    word: "Monday",
    phonetic: "/ˈmʌn.deɪ/",
    url: "/images/monday.jpg"
  },
  {
    // 59
    word: "network",
    phonetic: "/ˈnɛt.wɝːk/",
    url: "/images/network.jpg"
  },
  {
    // 60
    word: "North Pole",
    phonetic: "/ˌnɔːrθ ˈpoʊl/",
    url: "/images/north_pole.jpg"
  },
  {
    // 61
    word: "November",
    phonetic: "/noʊˈvɛm.bɚ/",
    url: "/images/november.jpg"
  },
  {
    // 62
    word: "October",
    phonetic: "/ɑːkˈtoʊ.bɚ/",
    url: "/images/october.jpg"
  },
  {
    // 63
    word: "parachuted",
    phonetic: "/ˈpær.əˌʃuː.tɪd/",
    url: "/images/parachuted.jpg"
  },
  {
    // 64
    word: "portrait",
    phonetic: "/ˈpɔːr.treɪt/",
    url: "/images/portrait.jpg"
  },
  {
    // 65
    word: "pottery",
    phonetic: "/ˈpɑː.t̬ɚ.i/",
    url: "/images/pottery.jpg"
  },
  {
    // 66
    word: "powerful",
    phonetic: "/ˈpaʊ.ɚ.fəl/",
    url: "/images/powerful.jpg"
  },
  {
    // 67
    word: "pressed",
    phonetic: "/prɛst/",
    url: "/images/pressed.jpg"
  },
  {
    // 68
    word: "pump",
    phonetic: "/pʌmp/",
    url: "/images/pump.jpg"
  },
  {
    // 69
    word: "reflection",
    phonetic: "/rɪˈflɛk.ʃən/",
    url: "/images/reflection.jpg"
  },
  {
    // 70
    word: "relaxing",
    phonetic: "/rɪˈlæk.sɪŋ/",
    url: "/images/relaxing.jpg"
  },
  {
    // 71
    word: "reservoir",
    phonetic: "/ˈrɛz.ɚ.vwɑːr/",
    url: "/images/reservoir.jpg"
  },
  {
    // 72
    word: "shadow",
    phonetic: "/ˈʃæd.oʊ/",
    url: "/images/shadow.jpg"
  },
  {
    // 73
    word: "shelter",
    phonetic: "/ˈʃɛl.tɚ/",
    url: "/images/shelter.jpg"
  },
  {
    // 74
    word: "sketch",
    phonetic: "/skɛtʃ/",
    url: "/images/sketch.jpg"
  },
  {
    // 75
    word: "spare",
    phonetic: "/spɛr/",
    url: "/images/spare.jpg"
  },
  {
    // 76
    word: "steam",
    phonetic: "/stiːm/",
    url: "/images/steam.jpg"
  },
  {
    // 77
    word: "strength",
    phonetic: "/strɛŋkθ/",
    url: "/images/strength.jpg"
  },
  {
    // 78
    word: "sunscreen",
    phonetic: "/ˈsʌnˌskriːn/",
    url: "/images/sunscreen.jpg"
  },
  {
    // 79
    word: "thermometer",
    phonetic: "/θɚˈmɑː.mə.t̬ɚ/",
    url: "/images/thermometer.jpg"
  },
  {
    // 80
    word: "thirty-four",
    phonetic: "/ˌθɝː.tiˈfɔːr/",
    url: "/images/thirty_four.jpg"
  },
  {
    // 81
    word: "timeline",
    phonetic: "/ˈtaɪm.laɪn/",
    url: "/images/timeline.jpg"
  },
  {
    // 82
    word: "toddlers",
    phonetic: "/ˈtɑːd.lɚz/",
    url: "/images/toddlers.jpg"
  },
  {
    // 83
    word: "trading",
    phonetic: "/ˈtreɪ.dɪŋ/",
    url: "/images/trading.jpg"
  },
  {
    // 84
    word: "troubles",
    phonetic: "/ˈtrʌb.əlz/",
    url: "/images/troubles.jpg"
  },
  {
    // 85
    word: "underground",
    phonetic: "/ˌʌn.dɚˈɡraʊnd/",
    url: "/images/underground.jpg"
  },
  {
    // 86
    word: "vegetables",
    phonetic: "/ˈvɛdʒ.tə.bəlz/",
    url: "/images/vegetables.jpg"
  },
  {
    // 87
    word: "Viking",
    phonetic: "/ˈvaɪ.kɪŋ/",
    url: "/images/viking.jpg"
  },
  {
    // 88
    word: "water plant",
    phonetic: "/ˈwɔː.t̬ɚ plænt/",
    url: "/images/water_plant.jpg"
  },
  {
    // 89
    word: "weave",
    phonetic: "/wiːv/",
    url: "/images/weave.jpg"
  },
  {
    // 90
    word: "width",
    phonetic: "/wɪdθ/",
    url: "/images/width.jpg"
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