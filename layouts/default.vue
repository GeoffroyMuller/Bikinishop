<template>
  <div>
    <nav
      class="navbar header is-primary is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item "
          href="/"
        >
          <!--<img
            src="~assets/BikiniShop.png"
            alt="Buefy"
            height="28"
            👙
          >-->
          <h1 class="loofstyle" >bikinishop.</h1>
        </a>
        <div class="navbar-burger">
          <span/>
          <span/>
          <span/>
        </div>
      </div>
    </nav>

    <section style="margin-top: 80px">
      <div class="container">
        <div class="colums" style="display: flex">
          <div class="column is-3 is-2-mobile" style="width: 200px">
            <aside class="menu" style="position: fixed">
              <p class="menu-label">
                Catégories
              </p>
              <ul class="menu-list">
                <li
                  v-for="(item, key) of items"
                  :key="key"
                >
                  <nuxt-link
                    :to="item.to"
                    exact-active-class="is-active"
                  >
                    {{ item.title }}
                  </nuxt-link>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column is-9 is-10-mobile">
            <nuxt/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            title: 'Home',
            icon: 'home',
            to: {name: 'index'}
          },
          {
            title: 'Inspire',
            icon: 'lightbulb',
            to: {name: 'inspire'}
          }
        ],
        categories: [],
      }
    },

    mounted() {
      this.loadCategories();
    },

    methods: {
      async loadCategories() {
        const data = await this.$providerCategories.get();
        this.categories = data.data;
        this.categories.forEach(elem => {
          this.items.push({
            title: elem.name,
            to: {name: 'categories-id', params: {id: elem.id}},
          })
        })
      }
    }

  }
</script>
<style>
  .navbar{
    background: linear-gradient(45deg,#6abed6 0%,#77c6dc 25%,#9fdcec 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loofstyle{
    font-size: xx-large;
    font-weight: bold;
    color: #ffffff;

  }
</style>
