<template>
  <div class="contact-list">
    <!-- on form submit, call the newContact method & prevent default -->
    <div class="card">
      <form @submit.prevent="addNewContact">
        <h4>New Contact:</h4>Contact Name:
        <br>
        <input type="text" name="contact-name" required="true" v-model="newContact.name">
        <br>Email:
        <br>
        <input type="email" name="contact-email" v-model="newContact.email">
        <br>Telephone
        <br>
        <input type="tel" name="contact-phone" v-model="newContact.phone">
        <br>
        <input type="checkbox" value="true" v-model="newContact.is_favorite">
        Add contact to your favorites?
        <br>
        <input type="submit" value="Submit">
      </form>
      <div class="contact-list">
        <ul>
          <li v-for="contact in contacts" :key="contact.id" class="item">{{ contact.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ContactService from '@/services/ContactService'

export default {
  name: 'ContactList',
  data () {
    return {
      contacts: [],
      newContact: {
        name: '',
        email: '',
        phone: '',
        is_favorite: false
      }
    }
  },
  beforeMount () {
    this.getContacts()
  },
  methods: {
    async getContacts () {
      const { data } = await ContactService.getContacts()

      this.contacts = data.contacts
      console.log(this.contacts)
    },
    // newContact method to add contact newContact data
    addNewContact () {
      ContactService.addContact(this.newContact)
    }
  }
}
</script>

<style scoped lang="sass">
</style>
