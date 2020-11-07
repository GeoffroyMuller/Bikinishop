<template>
  <div>
    <!--<div class="columns is-gapless is-multiline is-mobile is-left">
      <div v-for="product in this.categorie.produits">
        <div class="column" style="width: 17em">
          <ProductCard :product="product"/>
        </div>
      </div>
    </div>-->
    <div class="container">
      <div class="section p-0">
        <div class="row columns is-multiline" style="display: -webkit-inline-flex">


          <div v-if="productlength==1" class="column is-7 is-6-mobile">
            <ProductCard :product="this.categorie.produits[0]"/>
          </div>

          <div v-else class="column is-3 is-5-mobile is-4-tablet is-3-desktop"
               v-for="product in this.categorie.produits">
              <ProductCard :product="product"/>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import ProductCard from "./ProductCard";

  export default {
    name: "ProductList",
    props: ['categorie', 'productlength'],
    components: {
      ProductCard,
    },
  }
</script>

<style>

</style>
