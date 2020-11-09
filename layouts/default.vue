<template>
  <div>
    <nav class="navbar is-fixed-top " role="navigation" aria-label="main navigation">
      <ul>
        <li>
          <nav class="navbarlogo navbar-brand">
            <a class="navbar-item " href="/">
              <h1 class="loofstyle">bikinishop.</h1>
            </a>
            <div class="navbar-burger is-mobile">
              <span/>
              <span/>
              <span/>
            </div>
          </nav>
        </li>
        <li>
          <nav class="navbarsearch">

            <ul>
              <li><a href="/">TEST1</a>
                <ul class="submenu">
                  <li><a href="#">T1Categ 1</a>
                    <ul>
                      <li><a href="#">T1C1 s1</a></li>
                      <li><a href="#">T1C1 s2</a></li>
                      <li><a href="#">T1C1 s3</a></li>
                      <li><a href="#">T1C1 s4</a></li>
                    </ul>
                  </li>
                  <li><a href="#">T1Categ 2</a>
                    <ul>
                      <li><a href="#">T1C1 s1</a></li>
                      <li><a href="#">T1C1 s2</a></li>
                      <li><a href="#">T1C1 s3</a></li>
                      <li><a href="#">T1C1 s4</a></li>
                    </ul>
                  </li>
                  <li><a href="#">T1Categ 3</a></li>
                  <li><a href="#">T1Categ 4</a></li>
                </ul>
              </li>
              <li><a href="/">TEST2</a>
                <ul class="submenu">
                  <li><a href="#">T2Categ 1</a></li>
                  <li><a href="#">T2Categ 2</a></li>
                  <li><a href="#">T2Categ 3</a></li>
                </ul></li>
              <li><a href="/">TEST3</a>
                <ul class="submenu">
                  <li><a href="#">T3Categ 1</a></li>
                  <li><a href="#">T3Categ 2</a></li>
                </ul>
              </li>
              <li><a href="/">TEST4</a></li>
            </ul>

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

          </nav>
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

  .border-gradient {
    border-bottom: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(45deg, #dc93c4 0%, #b99dd2 25%, #9cdbeb 100%);
  }

  .loofstyle {
    font-size: xx-large;
    font-weight: bold;
    color: #ffffff;
  }

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

    li:hover {
      .submenu {
        display: inline-block;
        position: absolute;
        top: 100%;
        left: 0px;
        padding: 0px;
        z-index: 1000;
      }
    }

    & > ul {
      margin: 0px;
      padding: 0px;
      display: flex;
      justify-content: center;
      & > li {
        padding: 7px 10px 7px 10px;
      }
      & > li:hover{
        background-color: #ffffff;
        & > a {
          color: #7957d5;
        }
      }
    }

  }

  .submenu{
    display: none;
    width: 100%;
    background-color: white;
    @extend .border-gradient;
    li {
      a {
        padding: 15px;
        font-size: 13px;
        color: darkblue;
      }
    }
  }

</style>
