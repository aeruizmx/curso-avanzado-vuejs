<template>
  <div>
    <BaseLoading v-if="isLoading"/>
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData"/>
    </template>
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'
import MainBlock from './MainBlock/Index'
export default {
  name: 'ProfileView',
  // Lo damos de alta
  mixins: [setError],
  components: { BaseLoading, MainBlock },
  data () {
    return {
      isLoading: false,
      profileData: null
    }
  },
  created () {
    this.isLoading = true
    this.fetchData()
  },
  methods: {
    /**
     * Obtener los datos de la API
     * Guardarlos en 'profileData'
     */
    fetchData () {
      // Desestructuración
      const { region, battleTag: account } = this.$route.params
      // Llamada a la API con los datos necesarios
      getApiAccount({ region, account })
        .then(({ data }) => {
          this.profileData = data
        })
        .catch((err) => {
          this.profileData = null
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          this.setApiErr(errObj)
          this.$router.push({ name: 'Error' })
        }).finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
