<template>
  <div>
      <nav class="navbar is-fixed-top " role="navigation" aria-label="main navigation">
        <ul>
          <li>
            <div class="navbarlogo navbar-brand">
              <a class="navbar-item " href="/">
                <h1 class="loofstyle" >bikinishop.</h1>
              </a>
              <div class="navbar-burger is-mobile">
                <span/>
                <span/>
                <span/>
              </div>
            </div>
          </li>
          <li>
            <div class="navbarsearch">
             <!-- <a class="navbar-item " href="/">accueil</a>
              <a class="navbar-item " href="/">femme</a>
              <a class="navbar-item " href="/">homme</a>-->
              <!-- !!!! UTILISER LE ROUTER  -->
              <a class="navbar-item " href="/">ACCUEIL</a>
              <a class="navbar-item " href="/">FEMME</a>
              <a class="navbar-item " href="/">HOMME</a>
            </div>
          </li>
        </ul>
      </nav>

    <div style="margin-top: 115px"/>
    <section>
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
<style lang="scss">
  .navbar{
        display: flex;
        align-items: center;
        justify-content: center;
        &>ul{
          width: 100%;
        }
  }
  .navbarlogo{
    background: linear-gradient(45deg,#6abed6 0%,#77c6dc 25%,#9fdcec 100%);
    @extend .navbar;
  }
  .navbarsearch{
    background: linear-gradient(45deg, #dc93c4 0%, #b99dd2 25%, #9cdbeb 100%);
    height: 40px;
    @extend .navbar;
    &>a{
      color: white;
      font-size: larger;
      font-weight: bold;
    }
  }
  .loofstyle{
    font-size: xx-large;
    font-weight: bold;
    color: #ffffff;

  }
</style>
