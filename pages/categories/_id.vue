<template>

  <ListeProduits :items="items.produits" :title="items.id_name" />

</template>

<script>
    export default {
        name: "idcategorie",
      data() {
        return {
          categorie: [ ],
        }
      },

      mounted() {
          this.loadCategorie();
      },

      methods: {
        async loadCategorie(){
          const data = await this.$providerCategories.getById(this.$route.params.id);
          this.categorie = data.data;
        }
      },
    }
</script>

<style scoped>

</style>
