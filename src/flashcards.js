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
        word: "banks",
        phonetic: "/bæŋks/",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8UlVzhTogJaR6aPKSkg8dvkpGC1Dj0b_OQ&s"
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