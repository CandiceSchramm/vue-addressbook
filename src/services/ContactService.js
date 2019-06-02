import api from '@/api'

export default {
  getContacts: () => api().get(`/contacts`),
  // addContact method uses api(axios) to post contact passed in
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
