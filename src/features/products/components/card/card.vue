<template>
  <article class="card">
    <div class="card__detail">
      <h2>Vestido de mujer</h2>
      <p>Color roja con marcas doradas en todas las tallas ...</p>
    </div>
    <img
      src="https://ae01.alicdn.com/kf/HTB13X1IRFXXXXbfXXXXq6xXFXXXO/woman-cloth-Women-s-fashion-sexy-sling-strapless-waist-plaid-Stretch-aliexpress-uk-Pencil-elegant-Beach.jpg_640x640.jpg"
    >
    <div class="card__add">
      <button class="btn btn--sec btn--block">Agregar</button>
    </div>
  </article>
</template>

<script>
export default {
  name: "cod-card"
};
</script>

<style lang="scss" scoped>
.card {
  display: inline-block;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  padding: 8px;
  transition: box-shadow 0.3s ease;
  margin: 0 10px 20px;
  max-width: 280px;

  img {
    width: 250px;
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

  p {
    color: #6f6f6f;
    font-size: 12px;
    line-height: 18px;
  }

  &__detail {
    border-bottom: 1px solid #e8e8e8;
    padding: 0 0 10px;
  }

  &__add {
    text-align: center;
    border-top: 1px solid #e8e8e8;
    padding: 10px 5px 5px;
  }

  &:hover {
    box-shadow: 0px 0px 10px 1px #f0f0f0;

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
