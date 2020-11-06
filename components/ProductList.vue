<template>
  <div>
    <div class="columns is-gapless is-multiline is-mobile is-left">
      <div v-for="product in this.categorie.produits">
        <div class="column is-narrow" style="width: 17em">
          <ProductCard :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductCard from "./ProductCard";

  export default {
    name: "ProductList",
    props: ['categorie'],
    components: {
      ProductCard,
    },
  }
</script>
