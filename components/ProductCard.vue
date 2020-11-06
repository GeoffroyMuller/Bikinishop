<template>
  <div class="card">
    <a>
    <div class="card-image">
      <figure class="image is-12by3">
        <img src="https://via.placeholder.com/400x550.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content pt-2 pb-2">
      <div class="media">
        <div class="media-content">
          <ul>
            <li><p>{{this.product.name}}</p></li>
            <li><p class="has-text-grey">{{this.product.prix}}€</p></li>
          </ul>
        </div>
      </div>
    </div>
    </a>
    <footer class="card-footer">
      <a class="card-footer-item pt-2 pb-2">Ajouter au panier</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "ProductCard",
    props: ['product'],
  }
</script>
