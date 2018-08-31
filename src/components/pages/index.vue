<template>
  <main class="page">
    <header-app></header-app>
    <navigation-app></navigation-app>
    <div class="page-wrapper">
      <div class="cards">
        <div class="cards-item" v-for="item in 14">
          <img src="/static/1_AjBrQwMu87RwPd_j2ud82Q.jpeg" alt="" class="cards-item__img">
          <div class="cards-item__footer">
            <div style="display: flex;justify-content: space-between">
              <div>
                <h3 class="cards-item__footer_city">Вписон</h3>
                <p class="cards-item__footer_date">Киев, 15 октября</p>
              </div>
              <img src="/static/Flag_of_Ukraine.svg" alt="" class="cards-item__footer_flag">
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import headerApp from '../sections/header'
import navigationApp from '../sections/navigation'
export default {
  name: "index",
  components: {
    headerApp,
    navigationApp
  }
}
</script>

<style lang="scss">
 @import "../../assets/styles/index";
  .page {
    min-height: 100vh;
    min-width: 100vw;
    padding-bottom: 50px;
    &-wrapper {
      padding: 0 $page-side-padding;
    }
  }

  .cards {
    padding-top: 70px;
    display: flex;
    justify-content: center;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    &-item {
      width: 360px;
      height: 370px;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      margin: 15px;
      overflow: hidden;
      cursor: pointer;
      &:hover .cards-item__footer {
        transform: translateY(-73%);
      }
      &__img {
        width: 100%;
        max-height: 72%;
        border-radius: 4px 4px 0 0;
      }
      &__footer {
        padding: 15px;
        width: 100%;
        height: 370px;
        background-color: #fff;
        transform: translateY(-2%);
        transition: all .3s ease-in-out;
        &_flag {
          height: 20px;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        }
        &_city {
          color: $text-primary;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          font-size: 1.3rem;
          margin-bottom: 15px;
        }
        &_date {
          color: $text-secondary;
          font-size: 1.1rem;
        }
      }
    }
  }
</style>
