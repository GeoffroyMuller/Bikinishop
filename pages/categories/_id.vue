<template>
  <div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Femme</a></li>
        <li><a href="#">Maillots</a></li>
        <li><a href="#">1 pièce</a></li>
      </ul>
    </nav>
    <ProductList :categorie="categorie" :productlength="productlenght"/>
  </div>
</template>

<script>
  import ProductList from "../../components/ProductList";

  export default {
    name: "idcategorie",
    data() {
      return {
        categorie: [],
        productlenght: '',
      }
    },

    mounted() {
      this.loadCategorie();
    },

    methods: {
      async loadCategorie() {
        const data = await this.$providerCategories.getById(this.$route.params.id);
        this.categorie = data.data;
        this.productlenght = data.data.produits.length;
      }
    },

    components: {
      ProductList,
    }
  }
</script>
