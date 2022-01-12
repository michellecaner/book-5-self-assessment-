import { fetchTopics } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchTopics().then(
        () => {
            mainContainer.innerHTML = PenPalSociety()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
  )

  