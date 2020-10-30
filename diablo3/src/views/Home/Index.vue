<template>
  <div class="home">
    <HomeTitle/>
    <HomeForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTitle from './HomeTitle'
import HomeForm from './HomeForm'
export default {
  name: 'Home',
  components: {
    HomeTitle,
    HomeForm
  }
}
</script>
