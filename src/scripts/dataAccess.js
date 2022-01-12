const applicationState = {
  topics: []
}

const API = "http://localhost:8088"

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

export const getTopics = () => {
  return applicationState.topics.map(topic => ({ ...topic }))
}

// export const sendTopics = (userServiceRequest) => {
//   const fetchTopics = {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(userServiceRequest)
//   }

//   return fetch(`${API}/requests`, fetchOptions)
//         .then(response => response.json())
//         .then(() => {
//             mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//         })
//     }

//     export const deleteRequest = (id) => {
//         return fetch(`${API}/requests/${id}`, { method: "DELETE" })
//             .then(
//                 () => {
//                     mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//                 }
    //         )
    // }