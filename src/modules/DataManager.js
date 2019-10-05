const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAll(array) {
    return fetch(`${remoteURL}/${array}`).then(result => result.json())
  }
}