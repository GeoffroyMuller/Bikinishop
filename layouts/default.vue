<template>
  <div>
    <nav class="navbar is-fixed-top " role="navigation" aria-label="main navigation">
      <ul>
        <li>
          <div class="navbarlogo navbar-brand">
            <a class="navbar-item " href="/">
              <h1 class="loofstyle">bikinishop.</h1>
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

            <a class="navbar-item " href="/">Test</a>
            <div class="drop-padding navbar-item is-hoverable">
              <a class="navbar-item">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
            <!---->
            <div class="dropdown is-hoverable" style="position: inherit">
              <div class="dropdown-trigger">
                <a class="navbar-item" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>Dropdown</span>
                </a>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu" style="width: 100%">
                <div class="dropdown-content" style="width: 100%">
                  <a href="#" class="dropdown-item">
                    Dropdown
                  </a>
                  <a class="dropdown-item">
                    Other dropdown item
                  </a>
                  <a href="#" class="dropdown-item is-active">
                    Active dropdown item
                  </a>
                  <a href="#" class="dropdown-item">
                    Other dropdown item
                  </a>
                  <hr class="dropdown-divider">
                  <a href="#" class="dropdown-item">
                    With a divider
                  </a>
                </div>
              </div>
            </div>
            <!---->


            <div
              v-for="(item, key) of items"
              :key="key"
            >
              <nuxt-link class="navbar-item "
                         :to="item.to"
                         exact-active-class="is-active"
              >
                {{ item.title }}
              </nuxt-link>
            </div>

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
              <!--<p class="menu-label">
                Catégories
              </p>-->
              <!--<ul class="menu-list">
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
              </ul>-->
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
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;

    & > ul {
      width: 100%;
    }
  }

  .navbarlogo {
    background: linear-gradient(45deg, #6abed6 0%, #77c6dc 25%, #9fdcec 100%);
    @extend .navbar;
  }

  .navbarsearch {
    background: linear-gradient(45deg, #dc93c4 0%, #b99dd2 25%, #9cdbeb 100%);
    height: 40px;
    @extend .navbar;

    a {
      color: white;
      font-size: larger;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .drop-padding {
    padding: 0px;
  }

  .loofstyle {
    font-size: xx-large;
    font-weight: bold;
    color: #ffffff;

  }
</style>
