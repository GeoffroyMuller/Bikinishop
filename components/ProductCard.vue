<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-12by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content pt-2 pb-2">
      <div class="media">
        <div class="media-content">
          <ul>
            <li><p>{{this.currentProduct.name}}</p></li>
            <li><p>{{this.currentProduct.prix}}€</p></li>
          </ul>

        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a @click="addToCart" class="card-footer-item">Ajouter au panier</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "ProductCard",
    props: ['currentProduct'],
  }
</script>

<style scoped>

</style>
