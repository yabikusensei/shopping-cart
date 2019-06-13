<template>
  <div class="detail">
    <ul class="breadcrumb">
      <li>
        <router-link to="/products" class="card__link">products</router-link>
      </li>
      <li>></li>
      <li class="is-active">vestido-de-mujer</li>
    </ul>
    <div class="detail__product">
      <div class="detail__product__img slide-product d-flex">
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
      <div class="detail__product__text">
        <div class="detail__product__top">
          <h3>4 vendidos</h3>
          <div class="detail__product__intro">
            <h1 class="title">
              <span>Vestido de mujer</span>
            </h1>
            <p>Color roja con marcas doradas en todas las tallas Color roja con marcas doradas en todas las tallas Color roja con marcas doradas en todas las tallas Color roja con marcas doradas en todas las tallas</p>
          </div>
          <div class="detail__product__price">
            <h2>S/. 200</h2>
            <p>Hasta 12 cuotas sin intereses</p>
          </div>
        </div>
        <div class="detail__product__bottom">
          <div class="d-flex jc-space-between ai-center mb-20">
            <router-link to="/products" class="btn-link">&lt; Seguir comprando</router-link>
            <div class="total-quantity text-left mb-0">
              <button class="btn">-</button>
              <input class="shadow" type="text">
              <button class="btn">+</button>
            </div>
          </div>
          <button class="btn btn--med btn--block">Agregar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cod-products-detail",
  mounted() {
    console.log('mounted!!')
  }
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
    display: flex;
    justify-content: space-between;

    h3 {
      color: #6f6f6f;
      font-weight: normal;
      font-size: 12px;
      margin: 0 0 5px;
    }

    img {
      border: 1px solid #e8e8e8;
      border-radius: 4px;
      display: block;
    }

    &__img {
      margin-right: 15px;
    }

    &__text {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        line-height: 20px;
      }
    }

    &__intro {
      margin: 0 0 20px;
    }

    &__price {
      h2 {
        color: #293880;
        margin: 0;
      }

      p {
        font-size: 12px;
      }
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
