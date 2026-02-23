// Arreglo de objetos con las palabras
const flashcardsData = [
    {
        word: "animals",
        phonetic: "/ˈæn.ɪ.məlz/",
        url: "https://img.freepik.com/free-vector/set-wild-animals_1308-29055.jpg"
    },
    {
        word: "penguin",
        phonetic: "/ˈpeŋ.ɡwɪn/",
        url: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=400"
    },
    {
        word: "hippo",
        phonetic: "/ˈhɪp.oʊ/",
        url: "https://i.pinimg.com/236x/7f/43/1b/7f431b01adc228281387f7548143da0c.jpg"
    },
    {
        word: "tiger",
        phonetic: "/ˈtaɪ.ɡɚ/",
        url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400"
    },
    {
        word: "elephant",
        phonetic: "/ˈel.ɪ.fənt/",
        url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400"
    },
    {
        word: "frog",
        phonetic: "/frɑːɡ/",
        url: "https://media.istockphoto.com/id/1334993248/vector/green-frog-on-a-white-background.jpg?s=612x612&w=0&k=20&c=rAUHg_DzEFy0sJldKiH7mMQ7yT7iotCgyt8fj0I8asg="
    },
    {
        word: "giraffe",
        phonetic: "/dʒɪˈræf/",
        url: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=400"
    },
    {
        word: "parrot",
        phonetic: "/ˈper.ət/",
        url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400"
    },
    {
        word: "crocodile",
        phonetic: "/ˈkrɑː.kə.daɪl/",
        url: "https://img.freepik.com/free-vector/cute-crocodile-waving-hand-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-6015.jpg?semt=ais_user_personalization&w=740&q=80"
    },
    {
        word: "rhino",
        phonetic: "/ˈraɪ.noʊ/",
        url: "https://thumbs.dreamstime.com/b/big-white-rhino-16802916.jpg"
    },
    {
        word: "zebra",
        phonetic: "/ˈziː.brə/",
        url: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=400"
    },
    {
        word: "jump",
        phonetic: "/dʒʌmp/",
        url: "https://static.vecteezy.com/system/resources/thumbnails/048/933/901/small/box-jumps-fitness-exercise-leg-color-icon-illustration-vector.jpg"
    },
    {
        word: "eat",
        phonetic: "/iːt/",
        url: "https://img.freepik.com/free-vector/kid-eating-illustration_24908-81084.jpg?semt=ais_user_personalization&w=740&q=80"
    },
    {
        word: "drink",
        phonetic: "/drɪŋk/",
        url: "https://img.freepik.com/premium-vector/man-drinking-milk-vector-illustration_1062857-1974.jpg?semt=ais_user_personalization&w=740&q=80"
    },
    {
        word: "swim",
        phonetic: "/swɪm/",
        url: "https://thumbs.dreamstime.com/b/illustration-male-swimmer-pool-performing-front-crawl-wears-blue-swim-trunks-goggles-visible-water-flow-411772138.jpg"
    },
    {
        word: "carry",
        phonetic: "/ˈker.i/",
        url: "https://i.pinimg.com/736x/f1/da/83/f1da83c8836519080c44bd0a2fe051bd.jpg"
    },
    {
        word: "hide",
        phonetic: "/haɪd/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOvwHXSo2Zkq7vWa5CZOGMI5m3lQOWnL2hw&s"
    },
    {
        word: "sleep",
        phonetic: "/sliːp/",
        url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400"
    },
    {
        word: "stand",
        phonetic: "/stænd/",
        url: "https://i.pinimg.com/474x/f7/77/86/f77786be7fbffc297c50c4f99b8f4a45.jpg"
    },
    {
        word: "clothes",
        phonetic: "/kloʊðz/",
        url: "https://img.freepik.com/free-vector/isometric-color-set-3d-fashion-clothing-items-shoes-accessories-women-isolated-white-background-vector-illustration_1284-72766.jpg?semt=ais_user_personalization&w=740&q=80"
    },
    {
        word: "sneakers",
        phonetic: "/ˈsniː.kɚz/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3a0US9KkbCPgsHiTLK_kUvrrrmkJW3MHv9w&s"
    },
    {
        word: "shorts",
        phonetic: "/ʃɔːrts/",
        url: "https://img.freepik.com/premium-vector/shorts-vector-clip-art-illustration_296703-1672.jpg?semt=ais_user_personalization&w=740&q=80"
    },
    {
        word: "glasses",
        phonetic: "/ˈɡlæs.ɪz/",
        url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"
    },
    {
        word: "skirt",
        phonetic: "/skɝːt/",
        url: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400"
    },
    {
        word: "pants",
        phonetic: "/pænts/",
        url: "https://img.freepik.com/premium-vector/pant-icon-cartoon-illustration-pant-vector-icon-web_96318-33800.jpg?semt=ais_user_personalization&w=740&q=80"
    },
    {
        word: "hat",
        phonetic: "/hæt/",
        url: "https://img.freepik.com/free-vector/cartoon-icon-straw-hat-isolated_24877-83381.jpg?semt=ais_user_personalization&w=740&q=80"
    },
    {
        word: "jacket",
        phonetic: "/ˈdʒæk.ɪt/",
        url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400"
    },
    {
        word: "sweater",
        phonetic: "/ˈswet.ɚ/",
        url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400"
    },
    {
        word: "shirt",
        phonetic: "/ʃɝːt/",
        url: "https://img.freepik.com/free-vector/sticker-design-with-blue-t-shirt-isolated_1308-79625.jpg?semt=ais_user_personalization&w=740&q=80"
    },
    {
        word: "boots",
        phonetic: "/buːts/",
        url: "https://png.pngtree.com/png-clipart/20230221/ourmid/pngtree-cartoon-boots-png-image_6611111.png"
    },
    {
        word: "socks",
        phonetic: "/sɑːks/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWGSlCwtP1TVLUGVI7iF6F1sxGqS2WBKE3Rw&s"
    },
    {
        word: "shoes",
        phonetic: "/ʃuːz/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREGrROVGoV6urf1cfn3AHZDF3l9oTBQdiUdQ&s"
    },
    {
        word: "jeans",
        phonetic: "/dʒiːnz/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNgiFtgh-G3JHjK4ZgcmrHOrLUGCxZD8odw&s"
    },
    {
        word: "rug",
        phonetic: "/rʌɡ/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb48RiZQdD90EoTpoc5nFc8c5WWYJiGicqA&s"
    },
    {
        word: "lamp",
        phonetic: "/læmp/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiQ90NaEARU0etG89OM1exDIEGoqyuRWwJw&s"
    },
    {
        word: "chair",
        phonetic: "/tʃer/",
        url: "https://static.vecteezy.com/system/resources/previews/068/030/298/non_2x/wooden-chair-illustration-isolated-on-white-background-vector.jpg"
    },
    {
        word: "floor",
        phonetic: "/flɔːr/",
        url: "https://img.freepik.com/free-photo/wooden-sidewalk_1359-722.jpg?semt=ais_user_personalization&w=740&q=80"
    },
    {
        word: "desk",
        phonetic: "/desk/",
        url: "https://img.freepik.com/premium-vector/corner-desk-clip-art-vector-design-with-white-background_579306-13109.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        word: "picture",
        phonetic: "/ˈpɪk.tʃɚ/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8zBuTgy1WtTWUE8kVZ1hwZk7ASqRHWjrJg&s"
    },
    {
        word: "closet",
        phonetic: "/ˈklɑː.zɪt/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE20yGcuK0vzUq6mtb5ZtN94ZjDcWcfni4Ig&s"
    },
    {
        word: "wall",
        phonetic: "/wɔːl/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Ooiu2G2wSUsRcMHqlQXtPT_WqbIQ0vjZCw&s"
    },
    {
        word: "table",
        phonetic: "/ˈteɪ.bəl/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPegq_spMvr3VYbqIcW8saxP-ZA0Lth7ATTQ&s"
    },
    {
        word: "bed",
        phonetic: "/bed/",
        url: "https://media.istockphoto.com/id/898206528/vector/wooden-bed-for-one-person-in-an-isometric-view.jpg?s=612x612&w=0&k=20&c=DfXkqTG8vq7c4YdBILPTsQOn-V7azsByZJaB6PpPp1U="
    },
    {
        word: "bedroom",
        phonetic: "/ˈbed.ruːm/",
        url: "https://img.freepik.com/premium-vector/cartoon-illustration-bedroom-with-bed-desk_895122-425.jpg"
    },
    {
        word: "T-shirt",
        phonetic: "/ˈtiː.ʃɝːt/",
        url: "https://img.freepik.com/premium-vector/t-shirt-cartoon-vector-illustration-cute-t-shirt-cartoon-drawing-playful-apparel-design_648083-482.jpg"
    },
    {
        word: "dress",
        phonetic: "/dres/",
        url: "https://cdna.artstation.com/p/assets/images/images/026/724/120/large/moxita-parekh-556ed441-4a36-4985-826c-30a38d5d5871.jpg?1589546085"
    },
    {
        word: "put on",
        phonetic: "/pʊt ɑːn/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-qmPNAZwxLDx_EHCwsJHvg9hmEcunXv5uw&s"
    },
    {
        word: "take off",
        phonetic: "/teɪk ɔːf/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRkKcHzjs-_wOuySi6rGIyCoSgrUkzSwqpw&s"
    }
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