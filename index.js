import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-81a2e-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")

const inputFieldEl = document.getElementById("input-field")
const addBtnEl = document.getElementById("add-button")

addBtnEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(moviesInDB, inputValue)
    console.log(inputValue)
})
