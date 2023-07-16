<template>
  <navbar></navbar>

  <sidebar :component="component" @change-component="changeComponent"></sidebar>

  <div class="p-4 ml-64">
    <component :is="component" :data="this.categories"/>
  </div>
</template>

<script >
import Categories from '../components/Categories.vue'
import Products from '../components/Products.vue'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'DashboardView',
  components: {
    'categories': Categories,
    'products': Products,
    'navbar': Navbar,
    'sidebar': Sidebar
  },
  
  data(){
    return{
      categories: [],
      toggleDropdown: false,
      component: 'categories'
    }
  },
  mounted (){
    this.fetchData();
  },
  methods:{

    fetchData(){
      const graphqlQuery = `
      query {
        categories {
          total_count
          items {
            id
            name
            products {
              total_count
              items {
                id
                name
                stock_status
                description {
                  html
                }
                price {
                  regularPrice {
                    amount {
                      value
                      currency
                    }
                  }
                }
                image {
                  url
                  label
                }
              }
            }
          }
        }
      }
    `;
          
    fetch('/graphql-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: graphqlQuery})
    })
    .then(response => response.json())
    .then(data => {
      this.categories = data.data.categories;
    }).catch(error => {
        console.error('Failed Request: ', error);
      });      
    },

    changeComponent(component) {
      this.component = component;
    },
  }
}
</script>
