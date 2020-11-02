<template>
  <div>
    <h1>TopHeroes</h1>
    <h2 class="my-4 font-diablo">Top Heroes</h2>
    <b-row>
      <!-- No te olvides de poner el `key` cuando uses v-for -->
      <b-col sm="4" v-for="hero in heroes" :key="hero.id">
        <!-- TopHero con datos como prop -->
        <TopHero :hero="hero"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TopHero from './TopHero'

export default {
  name: 'TopHeroes',
  components: { TopHero },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  }
}
</script>
