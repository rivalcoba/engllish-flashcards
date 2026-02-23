import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import { generateFlashcards } from './flashcards.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
        <div class="flashcards-grid" id="flashcards-container">
            <!-- Las flashcards se generarán aquí dinámicamente -->
        </div>
    </div>
`

// setupCounter(document.querySelector('#counter'))
generateFlashcards()