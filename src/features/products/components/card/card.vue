<template>
  <article class="card">
    <div class="card__wrap">
      <article class="card__link">
        <img
          src="https://ae01.alicdn.com/kf/HTB13X1IRFXXXXbfXXXXq6xXFXXXO/woman-cloth-Women-s-fashion-sexy-sling-strapless-waist-plaid-Stretch-aliexpress-uk-Pencil-elegant-Beach.jpg_640x640.jpg"
        >
        <div class="card__detail">
          <h2><router-link v-bind:to="'/products/'+id">Vestido de mujer</router-link></h2>
          <p>Color roja con marcas doradas en todas las tallas ...</p>
          <div class="d-flex jc-space-between ai-center">
            <h3>S/. 200</h3>
            <select name="" id="">
              <option value="">Tamaño</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
            </select>
          </div>
        </div>
      </article>
      <div class="card__add">
        <button class="btn btn--sec btn--block">Agregar</button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "cod-card",
  data() {
    return {
      url: "www.google.com"
    };
  },
  props: {
    id: [String, Number]
  },
  computed: {},
  mounted() {
    console.log("id", this.id);
  }
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 25%;
  display: inline-block;
  padding: 0 20px 0 0;
  margin: 0 0 20px;

  &:nth-child(4n + 4) {
    padding-right: 0;
  }

  &__wrap {
    position: relative;
    padding: 8px;
    border: 1px solid #e8e8e8;
    border-radius: 3px;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0px 0px 10px 1px #eaeaea;
    }
  }

  img {
    width: 202px;
    border-radius: 3px;
    display: block;
  }

  h2 {
    color: #5d5d5d;
    font-size: 18px;
    margin: 0 0 4px;
    border-left: 4px solid #f0f9ff;
    padding: 0 0 0 10px;
  }

  h3 {
    margin: 0;
    color: #293880;
  }

  p {
    color: #6f6f6f;
    font-size: 12px;
    line-height: 18px;
  }

  &__detail {
    border-top: 1px solid #e8e8e8;
    padding: 10px 0;
  }

  &__add {
    text-align: center;
    border-top: 1px solid #e8e8e8;
    padding: 10px 5px 5px;
    position: absolute;
    bottom: 8px;
    left: 8px;
    right: 8px;
  }

  &__link {
    display: block;
    padding-bottom: 49px;
  }

  &:hover {
    .btn {
      background: #293880;
      color: white;
    }

    h2 {
      border-color: #293880;
      color: black;
    }
  }
}
</style>
