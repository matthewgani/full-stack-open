import axios from 'axios'
const baseUrl = '/api/persons'
// changed from localhost:3001/persons to use as static build with backend

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
//The modified getAll function still returns a promise, 
//as the then method of a promise also returns a promise.

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response =>response.data)
}




// export default { 
//   getAll: getAll, 
//   create: create, 
//   update: update 
// }

// export default { getAll, create, update }

const noteService = {
    getAll: getAll, 
    create: create, 
    update: update, 
    deletePerson: deletePerson
}
export default noteService