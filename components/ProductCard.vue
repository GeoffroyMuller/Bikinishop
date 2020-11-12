<template>
  <div class="card">

    <a>
      <div class="card-image">
        <figure class="image is-12by3">
          <img src="https://via.placeholder.com/400x550.png" alt="Placeholder image">
        </figure>
      </div>
    </a>
    <div class="card-content pt-2 pb-2">
      <div class="media">
        <div class="media-content" style="text-align: center">
          <a>
            <ul>
              <li><p style="white-space: nowrap;">{{this.product.name}}</p></li>
              <li><p>{{this.product.prix}}€</p></li>
            </ul>
          </a>
          <button>AJOUTER AU PANIER</button>
        </div>
      </div>
    </div>

    <!--<footer class="card-footer">
      <a class="card-footer-item pt-2 pb-2">Ajouter au panier</a>
    </footer>-->
  </div>
</template>

<script>
  export default {
    name: "ProductCard",
    props: ['product'],
    methods: {
      addToCart(){

      }
    }
  }
</script>

<style>

  button {
    background-color: #8cd0e3;
    box-shadow: 3px 3px 0 #c899cc;
    transition: none;
    color: #fff;
    border: 0;
    padding: 10px;
    margin: 10px;
  }
  button:hover {
    background-color: #c899cc;
    box-shadow: 0px 0px 0 #c899cc;
  }

  button:focus {
    outline: none;
  }

  button:active {
    background-color: #6b536f;
    box-shadow: 0px 0px 0 #c899cc;
  }

  .card-content {
    text-transform: uppercase;
  }

</style>
