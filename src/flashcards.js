// Arreglo de objetos con las palabras
const flashcardsData = [
    { word: "animals", phonetic: "/ˈæn.ɪ.məlz/", url: "https://images.unsplash.com/photo-1444212477490-ca407925329e?w=400" },
    { word: "penguin", phonetic: "/ˈpeŋ.ɡwɪn/", url: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=400" },
    { word: "hippo", phonetic: "/ˈhɪp.oʊ/", url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400" },
    { word: "tiger", phonetic: "/ˈtaɪ.ɡɚ/", url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400" },
    { word: "elephant", phonetic: "/ˈel.ɪ.fənt/", url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400" },
    { word: "frog", phonetic: "/frɑːɡ/", url: "https://images.unsplash.com/photo-1503509132965-f56233f00101?w=400" },
    { word: "giraffe", phonetic: "/dʒɪˈræf/", url: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=400" },
    { word: "parrot", phonetic: "/ˈper.ət/", url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400" },
    { word: "crocodile", phonetic: "/ˈkrɑː.kə.daɪl/", url: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=400" },
    { word: "rhino", phonetic: "/ˈraɪ.noʊ/", url: "https://images.unsplash.com/photo-1569178107596-0b7a08d08391?w=400" },
    { word: "zebra", phonetic: "/ˈziː.brə/", url: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=400" },
    { word: "jump", phonetic: "/dʒʌmp/", url: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400" },
    { word: "eat", phonetic: "/iːt/", url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400" },
    { word: "drink", phonetic: "/drɪŋk/", url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400" },
    { word: "swim", phonetic: "/swɪm/", url: "https://images.unsplash.com/photo-1530518687665-0f665fbf85f3?w=400" },
    { word: "carry", phonetic: "/ˈker.i/", url: "https://images.unsplash.com/photo-1581791538302-03537b9c97b6?w=400" },
    { word: "hide", phonetic: "/haɪd/", url: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=400" },
    { word: "sleep", phonetic: "/sliːp/", url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400" },
    { word: "stand", phonetic: "/stænd/", url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400" },
    { word: "clothes", phonetic: "/kloʊðz/", url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400" },
    { word: "sneakers", phonetic: "/ˈsniː.kɚz/", url: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400" },
    { word: "shorts", phonetic: "/ʃɔːrts/", url: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400" },
    { word: "glasses", phonetic: "/ˈɡlæs.ɪz/", url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400" },
    { word: "skirt", phonetic: "/skɝːt/", url: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400" },
    { word: "pants", phonetic: "/pænts/", url: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400" },
    { word: "hat", phonetic: "/hæt/", url: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400" },
    { word: "jacket", phonetic: "/ˈdʒæk.ɪt/", url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400" },
    { word: "sweater", phonetic: "/ˈswet.ɚ/", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400" },
    { word: "shirt", phonetic: "/ʃɝːt/", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400" },
    { word: "boots", phonetic: "/buːts/", url: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400" },
    { word: "socks", phonetic: "/sɑːks/", url: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400" },
    { word: "shoes", phonetic: "/ʃuːz/", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400" },
    { word: "jeans", phonetic: "/dʒiːnz/", url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400" },
    { word: "rug", phonetic: "/rʌɡ/", url: "https://images.unsplash.com/photo-1597423498219-04418210827d?w=400" },
    { word: "lamp", phonetic: "/læmp/", url: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400" },
    { word: "chair", phonetic: "/tʃer/", url: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400" },
    { word: "floor", phonetic: "/flɔːr/", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400" },
    { word: "desk", phonetic: "/desk/", url: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400" },
    { word: "picture", phonetic: "/ˈpɪk.tʃɚ/", url: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400" },
    { word: "closet", phonetic: "/ˈklɑː.zɪt/", url: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400" },
    { word: "wall", phonetic: "/wɔːl/", url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400" },
    { word: "table", phonetic: "/ˈteɪ.bəl/", url: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=400" },
    { word: "bed", phonetic: "/bed/", url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400" },
    { word: "bedroom", phonetic: "/ˈbed.ruːm/", url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400" },
    { word: "T-shirt", phonetic: "/ˈtiː.ʃɝːt/", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
    { word: "dress", phonetic: "/dres/", url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400" },
    { word: "put on", phonetic: "/pʊt ɑːn/", url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400" },
    { word: "take off", phonetic: "/teɪk ɔːf/", url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400" }
];

// Variable para el nombre (modificable desde el script)
export let liamName = "Liam Rivalcoba";

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