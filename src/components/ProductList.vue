<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.brand}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button class="auto" v-on:click="addToCart(product)">
          Favorite
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    addToCart: function(product) {
      var cart = this.$root.$data.cart;
      cart.push(product);
    }
  }
}
</script>

<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 400px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 350px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #376ad8;
  color: white;
  padding: 10px 30px;
  height: 80px;
  border-radius: 15px;
  margin-bottom: 10px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
  margin-left: 10%;
}

button {
  width: 200px;
  height: 50px;
  background: #000;
  color: white;
  border: none;
  margin-right: 10%;;
}

.auto {
  margin-left: auto;
}
</style>