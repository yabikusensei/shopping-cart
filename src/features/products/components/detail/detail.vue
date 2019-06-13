<template>
  <div class="detail">
    <ul class="breadcrumb">
      <li><router-link to="/products" class="card__link">products</router-link></li>
      <li>></li>
      <li class="is-active">vestido-de-mujer</li>
    </ul>
    <div class="detail__description">
      <h1 class="title"><span>Vestido de mujer</span></h1>
      <p>Color roja con marcas doradas en todas las tallas Color roja con marcas doradas en todas las tallas Color roja con marcas doradas en todas las tallas Color roja con marcas doradas en todas las tallas</p>
    </div>
    <div class="detail__product">
      <div class="slide-product d-flex">
        <ul>
          <li>
            <img
              src="https://ae01.alicdn.com/kf/HTB13X1IRFXXXXbfXXXXq6xXFXXXO/woman-cloth-Women-s-fashion-sexy-sling-strapless-waist-plaid-Stretch-aliexpress-uk-Pencil-elegant-Beach.jpg_640x640.jpg"
            >
          </li>
          <li>
            <img
              src="https://ae01.alicdn.com/kf/HTB13X1IRFXXXXbfXXXXq6xXFXXXO/woman-cloth-Women-s-fashion-sexy-sling-strapless-waist-plaid-Stretch-aliexpress-uk-Pencil-elegant-Beach.jpg_640x640.jpg"
            >
          </li>
          <li>
            <img
              src="https://ae01.alicdn.com/kf/HTB13X1IRFXXXXbfXXXXq6xXFXXXO/woman-cloth-Women-s-fashion-sexy-sling-strapless-waist-plaid-Stretch-aliexpress-uk-Pencil-elegant-Beach.jpg_640x640.jpg"
            >
          </li>
          <li>
            <img
              src="https://ae01.alicdn.com/kf/HTB13X1IRFXXXXbfXXXXq6xXFXXXO/woman-cloth-Women-s-fashion-sexy-sling-strapless-waist-plaid-Stretch-aliexpress-uk-Pencil-elegant-Beach.jpg_640x640.jpg"
            >
          </li>
        </ul>
        <figure>
          <img
              src="https://ae01.alicdn.com/kf/HTB13X1IRFXXXXbfXXXXq6xXFXXXO/woman-cloth-Women-s-fashion-sexy-sling-strapless-waist-plaid-Stretch-aliexpress-uk-Pencil-elegant-Beach.jpg_640x640.jpg"
            >
        </figure>
      </div>
      <div class="detail">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cod-products-detail"
};
</script>

<style lang="scss" scoped>
.detail {
  &__description {
    margin: 0 0 40px;

    p {
      line-height: 20px;
      font-size: 14px;
    }
  }

  &__product {
    img {
      border: 1px solid #e8e8e8;
      border-radius: 4px;
    }
  }
}

.slide-product {
  position: relative;
  ul {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 94px;
    }
  }

  figure {
    padding: 0 0 0 110px;

    img {
      height: 420px;
    }
  }
}
</style>
