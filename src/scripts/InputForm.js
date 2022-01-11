import { getTopics } from './dataAccess.js'

// const mainContainer = document.querySelector("#container")

// Click event goes here?



export const InputForm = () => {
    const topics = getTopics()  

      // add author w/ dropdown menu X
      // add a text area for letter X
      // display individual topic names 
      // add recipient w/ drop down menu X
      // button
      // save letter
          // add click event
              // click send letter button
              // get the info (author, recipient, topic, letter) from the dom (what we see in the browser)
              // save letter to database aka invoking the function that saves the letter

    let html = `
      <div class="field">
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
      <div class="field">
          <label class="label" for="topics">Topics</label>
          ${topics.map(topic => {
              return `<input type="radio" name="topicDescription" class="input">Family</input>`
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
