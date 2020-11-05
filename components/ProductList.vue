<template>
  <Layout :show-logo="false">
    <br/>
    <div class="container">
      <h4 class="subtitle is-3">{{this.title}}</h4>
      <br/>
      <div class="columns is-mobile is-multiline is-left">

        <div class="column is-narrow" style="width: 275px; " v-for="(product, key) of products"
             :key="key">
          <ProductCard :currentProduct="product"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import ProductCard from "./ProductCard";

  export default {
    name: "ProductList",
    props: ['products', 'title'],
    components: {
      ProductCard,
    },
  }
</script>
