<template>
  <div>
    <ProductList :categorie="categorie"/>
  </div>
</template>

<script>
  import ProductList from "../../components/ProductList";

  export default {
    name: "idcategorie",
    data() {
      return {
        categorie: [],
      }
    },

    mounted() {
      this.loadCategorie();
    },

    methods: {
      async loadCategorie() {
        const data = await this.$providerCategories.getById(this.$route.params.id);
        this.categorie = data.data;
        console.log(this.categorie.produits);
      }
    },

    components: {
      ProductList,
    }
  }
</script>
