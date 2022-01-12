import { getTopics } from './dataAccess.js'

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "sendLetter") {
      // Get what the user typed into the form fields
      // Google how to use a query selector with a drop down
      const authorName = document.querySelector("#author-names select").value
      const recipientName = document.querySelector("#author-names select").value
      const letterTopic = document.querySelector("#author-names select").value
      const letterBody = document.querySelector("#author-names select").value

      const dataToSendToAPI = {
        author: authorName,
        recipient: recipientName,
        topic: letterTopic,
        letter: letterBody
    }
     
      // Send the data to the API for permanent storage
      sendLetter(dataToSendToAPI)

  }
})

 // create a fetch call
      // invoke fetch call

export const InputForm = () => {
    const topics = getTopics()  

    let html = `
      <div class="authors">
        <label class="label" for="author">Author</label>
        <select name="author-names" id="author-names">
          <option value="maya">Maya Angelou</option>
          <option value="grace">Grace Hopper</option>
          <option value="mark">Mark Twain</option>
        </select>
      </div>
      <div class="field">
        <label class="label" for="letter">Letter</label>
        <textarea></textarea>
      </div>
      <div class="radio">
          <label class="label" for="topics">Topics</label>
          ${topics.map(topic => {
              return `<input type="radio" name="topicDescription" class="input" value=${topic.name}>${topic.name}</input>`
          }).join("")}
      </div>
      <div class="field">
      <label class="label" for="recipient">Recipient</label>
      <select name="author-names" id="author-names">
        <option value="maya">Maya Angelou</option>
        <option value="grace">Grace Hopper</option>
        <option value="mark">Mark Twain</option>
      </select>
     </div>
     <button class="button" id="sendLetter">Send Letter</button>
  `
  return html
}
