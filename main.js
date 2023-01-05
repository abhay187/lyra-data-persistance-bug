import './style.css'
import javascriptLogo from './javascript.svg'
import { setupSearch, persistDb } from './search'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <input type="search" id="gsearch" name="gsearch">
      <button id="search" >Search</button>
      <button id="persist" >Persist Database</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupSearch(document.querySelector('#search'))
persistDb(document.querySelector('#persist'))
