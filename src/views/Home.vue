<template>
  <div id="home">
    <h2>Virtual Rolodex</h2>
    <ContactList />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from '@/components/ContactList'

export default {
  name: 'home',
  components: {
    ContactList
  }
}
</script>
