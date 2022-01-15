const applicationState = {
  topics: [],
  letters: []
}

const API = "http://localhost:8088"

// Gets the topics from the API
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topics) => {
                // Store the external state in application state
                applicationState.topics = topics
            }
        )
}

// Makes a copy of the topics array
export const getTopics = () => {
  return applicationState.topics.map(topic => ({ ...topic }))
}

// Gets the letters from the API
export const fetchLetters = () => {
  return fetch(`${API}/letters`)
      .then(response => response.json())
      .then(
          (letters) => {
              // Store the external state in application state
              applicationState.letters = letters
          }
      )
}

// Makes a copy of the letters array
export const getLetters = () => {
return applicationState.letters.map(letter => ({ ...letter }))
}

export const sendLetter = (authorLetter) => {
  const fetchOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(authorLetter)
  }

  return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
      container.dispatchEvent(new CustomEvent("stateChanged"))
    })
}
  