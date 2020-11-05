import Vue from 'vue'
import ProviderCategories from "~/provider/ProviderCategories";
import ProviderProduits from "~/provider/ProviderProduits";
import ProviderPaniers from "~/provider/ProviderPaniers";
export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
  Vue.prototype.$providerCategories = new ProviderCategories($axios);
  Vue.prototype.$providerProduits = new ProviderProduits($axios);
  Vue.prototype.$providerPaniers = new ProviderPaniers($axios);
}
