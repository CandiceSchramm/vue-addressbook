<template>
  <div id="home">
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
