<template>
  <div>
    <BaseLoading v-if="isLoading"/>
    <h1>Profile View</h1>
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'

export default {
  name: 'ProfileView',
  // Lo damos de alta
  mixins: [setError],
  components: { BaseLoading },
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
        	// Guardamos los datos en una variable local
          this.profileData = data
        })
        .catch((err) => {
          this.profileData = null
        	// Creamos el objeto error
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
        	// Hacemos uso del Mixin
	        // Guardamos el objeto en el Store
          this.setApiErr(errObj)
	        // Navegamos a la ruta de nombre 'Error'
          this.$router.push({ name: 'Error' })
        }).finally(() => {
          this.isLoading = false
        })
      
    }
  }
}
</script>
