<template>
  <div class="confirm-purchase">
    <ul class="breadcrumb">
      <li><router-link to="/products" class="card__link">products</router-link></li>
      <li>></li>
      <li class="is-active">confirm-purchase</li>
    </ul>
    <h1 class="title"><span>Orden de compra</span></h1>
    <table class="table table-hover list-purchase">
      <thead>
        <tr>
          <th>
            Item
          </th>
          <th>
            Quantity
          </th>
          <th>
            Price
          </th>
          <th>
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in 4" v-bind:key="index">
          <td>
            <div class="list-purchase__item">
              <figure class="list-purchase__item__figure">
                <img
                  src="https://ae01.alicdn.com/kf/HTB13X1IRFXXXXbfXXXXq6xXFXXXO/woman-cloth-Women-s-fashion-sexy-sling-strapless-waist-plaid-Stretch-aliexpress-uk-Pencil-elegant-Beach.jpg_640x640.jpg"
                >
              </figure>
              <div class="list-purchase__item__detail">
                <h2>Vestido para mujer</h2>
                <p>Color rojo con marcas doradas.</p>
              </div>
            </div>
          </td>
          <td>
            <div class="total-quantity">
              <button class="btn">-</button>
              <input class="shadow" type="text"/>
              <button class="btn">+</button>
            </div>
          </td>
          <td class="text-center">S/. 20</td>
          <td class="text-center">S/. 20</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3"><h3>Total</h3></td>
          <td class="text-center"><h2>S/. 80</h2></td>
        </tr>
      </tfoot>
    </table>

    <div class="continue">
        <router-link to="/products" class="btn-link">&lt; Seguir comprando</router-link>
        <router-link to="/checkout" class="btn btn--big">Pagar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "cod-confirm-purchase"
};
</script>

<style lang="scss" scoped>
.confirm-purchase {
  .continue {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
}
</style>
