<template>
  <div>
    <nav class="navbar is-fixed-top " role="navigation" aria-label="main navigation">
      <ul>
        <li>
          <nav class="navbarlogo navbar-brand">
            <a class="navbar-item " href="/">
              <h1 class="loofstyle">bikinishop.</h1>
            </a>
            <div style="color: white; width: 20px"><bag-icon /></div>
            <div class="navbar-burger is-mobile">
              <span/>
              <span/>
              <span/>
            </div>
          </nav>
        </li>
        <li>
          <nav class="navbarsearch">
            <!--<div
              v-for="(item, key) of items"
              :key="key"
            >
              <nuxt-link class="navbar-item "
                         :to="item.to"
                         exact-active-class="is-active"
              >
                {{ item.title }}
              </nuxt-link>
            </div>-->
            <ul>
              <li><a href="/">TEST1</a>
                <ul class="submenu">
                  <li><a class="menu-label" href="#">T1Categ 1</a>
                    <ul>
                      <li v-for="(categorie, key) of this.categories" :key="key">
                        <nuxt-link :to="categorie.to" exact-active-class="is-active">
                          {{ categorie.title }}
                        </nuxt-link>
                      </li>
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
                </ul>
              </li>
              <li><a href="/">TEST3</a>
                <ul class="submenu">
                  <li><a href="#">T3Categ 1</a></li>
                  <li><a href="#">T3Categ 2</a></li>
                </ul>
              </li>
              <li><a href="/">TEST4</a></li>
            </ul>

            <!--<ul>
              <li v-for="(categorie, key) of this.categories" :key="key">
                <nuxt-link :to="categorie.to" exact-active-class="is-active">
                  {{ categorie.title }}
                </nuxt-link>
                <ul v-if="categorie.sous_categories" class="submenu">
                  <li v-for="(categorie, key) of categorie.sous_categories" :key="key">
                    <nuxt-link :to="categorie.to" exact-active-class="is-active">
                      {{ categorie.title }}
                    </nuxt-link>
                    <ul v-if="categorie.sous_categories" class="submenu">
                      <li v-for="(categorie, key) of categorie.sous_categories" :key="key">
                        <nuxt-link :to="categorie.to" exact-active-class="is-active">
                          {{ categorie.title }}
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>-->

          </nav>
        </li>
      </ul>
    </nav>

    <div style="margin-top: 125px"/>
    <section>
      <!--<div class="container">
        <div class="colums" style="display: flex">
          <div class="column is-3 is-2-mobile" style="width: 150px;">
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
          <div class="column is-10 is-9-mobile">
            <nuxt/>
          </div>
        </div>
      </div>-->

      <div style="padding-left: 10px; padding-right: 10px;">
        <nuxt/>
      </div>

    </section>
  </div>
</template>

<script>
  import BagIcon from 'vue-material-design-icons/BagSuitcaseOutline';

  export default {
    data() {
      return {
        categories: [
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
      }
    },

    mounted() {
      this.loadCategories();
    },

    methods: {
      async loadCategoriesTEST() {
        const data = await this.$providerCategories.get();
        this.categories = data.data;
        this.categories.forEach(elem => {
          this.items.push({
            title: elem.name,
            to: {name: 'categories-id', params: {id: elem.id}},
          })
        })
      }
      ,
      async loadCategories() {
        const data = await this.$providerCategories.get();
        console.log(data.data);
        this.categories = this.createAllCategories(data.data);
        console.log(this.categories);
      }
      ,
      createAllCategories(categorieslist) {
        let res = [];
        categorieslist.forEach(categorie => {
          res.push(this.createCategorie(categorie));
        });
        return res;
      }
      ,
      createCategorie(categorie) {
        let res;
        let sous_categories;
        let title = categorie.name;
        let to = {name: 'categories-id', params: {id: categorie.id}};

        if (categorie.sous_categories) {
          sous_categories = this.createAllCategories(categorie.sous_categories);
        }
        res = {title: title, to: to, sous_categories: sous_categories}
        return res;
      },
    },
    components: {
      BagIcon
    }

  }
</script>
<style lang="scss">

  .border-gradient {
    border-bottom: 2px solid;
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

    li:hover {
      .submenu {
        display: flex;
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

        & > a {
          color: white;
          font-size: larger;
          font-weight: bold;
          text-transform: uppercase;
        }
      }

      & > li:hover {
        background-color: #f6f6f6;

        & > a {
          color: #7957d5;
        }
      }
    }

  }

  .submenu {
    display: none;
    width: 100%;
    background-color: #f6f6f6;
    justify-content: center;
    @extend .border-gradient;

    & > li {
      padding: 20px 40px 20px 40px;

      & > a {
        color: #7a7a7a;
        font-size: 1em;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
    }
  }

</style>
