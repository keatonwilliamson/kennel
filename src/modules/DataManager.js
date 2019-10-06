const remoteURL = "http://localhost:5002"

export default {
  get(array, id) {
    return fetch(`${remoteURL}/${array}/${id}`).then(result => result.json())
  },
  getAll(array) {
    return fetch(`${remoteURL}/${array}`).then(result => result.json())
  },
  delete(array, id) {
    return fetch(`http://localhost:5002/${array}/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(array, newEntry) {
    return fetch(`${remoteURL}/${array}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    }).then(data => data.json())
}
}