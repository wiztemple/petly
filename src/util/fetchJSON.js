const fetchJSON = (...args) =>
  fetch(...args).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error Response: ${response.status} ${response.statusText}`)
    }
    return response.json()
  })

export default fetchJSON
