<template>
<div v-if='empty'>
    <h1 id="empty-cart">Your cart is empty! Go to the home page to add items.</h1>
</div>
<div v-else>
    <div>
    <ProductList :products="products" />
    </div>
</div>
</template>

<script>
import ProductList from "../components/CartList.vue"
export default {
  name: 'HomeView',
  components: {
    ProductList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.cart;
    },
    empty() {
        var cart = this.$root.$data.cart;
        if (cart.length < 1){
            return true;
        }
        else {
            return false;
        }
    }
  },
}
</script>

<style scoped>
#empty-cart {
    text-align: center;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
