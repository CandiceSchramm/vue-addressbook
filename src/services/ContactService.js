import api from '@/api'

export default {
  getContacts: () => api().get(`/contacts`),
  // another method to PUT new contact, pass in the req.body contact info
  addContact: (contact) => {
    api().post('/contact', contact)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
