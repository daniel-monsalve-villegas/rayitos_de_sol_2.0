<template>
  <div class="body-seccion3">
    <div class="container-seccion3">
      <!-- <h2>Servicios de los Compas</h2>  -->
      <div class="seccion3-content">
        <div class="card-wrapper">
          <div class="card">
            <div class="image-content">
              <span class="overlay-3"></span>
              <div class="card-image">
                <img src="../assets/profile1.png" alt="" class="card-img">
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">Programacion</h2>
              <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit quaerat, nobis voluptas libero labore ullam veritatis quod qui modi doloribus nemo voluptatum quisquam laboriosam possimus voluptatem quasi, nisi animi?</p>
              <button class="button-seccion3">Saber Mas</button>
            </div>
          </div>
          <div class="card2">
            <div class="image-content">
              <span class="overlay-3"></span>
              <div class="card-image">
                <img src="../assets/profile1.png" alt="" class="card-img">
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">Programacion</h2>
              <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit quaerat, nobis voluptas libero labore ullam veritatis quod qui modi doloribus nemo voluptatum quisquam laboriosam possimus voluptatem quasi, nisi animi?</p>
              <button class="button-seccion3">Saber Mas</button>
            </div>
          </div>
          <div class="card3">
            <div class="image-content">
              <span class="overlay-3"></span>
              <div class="card-image">
                <img src="../assets/profile1.png" alt="" class="card-img">
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">Programacion</h2>
              <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit quaerat, nobis voluptas libero labore ullam veritatis quod qui modi doloribus nemo voluptatum quisquam laboriosam possimus voluptatem quasi, nisi animi?</p>
              <button class="button-seccion3">Saber Mas</button>
            </div>
          </div>
        </div>
        <div class="card-wrapper2">
          <div class="card">
            <div class="image-content">
              <span class="overlay-3"></span>
              <div class="card-image">
                <img src="../assets/profile1.png" alt="" class="card-img">
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">Programacion</h2>
              <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit quaerat, nobis voluptas libero labore ullam veritatis quod qui modi doloribus nemo voluptatum quisquam laboriosam possimus voluptatem quasi, nisi animi?</p>
              <button class="button-seccion3">Saber Mas</button>
            </div>
          </div>
          <div class="card2">
            <div class="image-content">
              <span class="overlay-3"></span>
              <div class="card-image">
                <img src="../assets/profile1.png" alt="" class="card-img">
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">Programacion</h2>
              <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit quaerat, nobis voluptas libero labore ullam veritatis quod qui modi doloribus nemo voluptatum quisquam laboriosam possimus voluptatem quasi, nisi animi?</p>
              <button class="button-seccion3">Saber Mas</button>
            </div>
          </div>
          <div class="card3">
            <div class="image-content">
              <span class="overlay-3"></span>
              <div class="card-image">
                <img src="../assets/profile1.png" alt="" class="card-img">
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">Programacion</h2>
              <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit quaerat, nobis voluptas libero labore ullam veritatis quod qui modi doloribus nemo voluptatum quisquam laboriosam possimus voluptatem quasi, nisi animi?</p>
              <button class="button-seccion3">Saber Mas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dataContractor from '../../assets/contractor.json'
  console.log(contractor)
export default {
  data() {
    return {
      contractor: dataContractor,
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.body-seccion3 {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-light-cream);
}
.container-seccion3 {
  max-width: 1120px;
  max-height: 800px;
  width: 100%;
  background-color: rgb(215, 214, 214);
  padding: 40px;
  border-radius: 10px;
  margin-top: 8rem;
}
.seccion3-content {
  margin: 0 40px;
}
/* .container-seccion3 h2 {
  display: flex;
  justify-content: center;
  padding: 15px;
}  */
.card {
  width: 320px;
  height:300px;
  border-radius: 25px;
  background-color: #FFF;
}
.card2 {
  width: 320px;
  border-radius: 25px;
  background-color: #FFF;
}
.card3 {
  width: 320px;
  border-radius: 25px;
  background-color: #FFF;
}
.card-wrapper{
display: flex;
gap: 20px;
margin-bottom: 30px;
}
.card-wrapper2{
display: flex;
gap: 10px;
}
.image-content, .card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 14px;
}
.image-content {
  position: relative;
  row-gap: 5px;
  padding: 25px 0;
}
.overlay-3 {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: gray;
  border-radius: 25px 25px 0 0;
}
.overlay-3::before, .overlay-3::after {
  content: "";
  position: absolute;
  height: 40px;
  width: 40px;
}
.card-image {
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: #FFF;
  padding: 3px;
}
.card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid black;
}
.name {
  font-size: 18px;
  font-weight: 500;
}
.description {
  font-size: 14px;
  color: #707070;
  text-align: center;
}
.button-seccion3 {
  border: none;
  font-size: 16px;
  color: #FFF;
  padding: 8px 16px;
  background-color: black;
  border-radius: 6px;
  margin: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button-seccion3:hover {
  background-color: gray;
}
</style>
