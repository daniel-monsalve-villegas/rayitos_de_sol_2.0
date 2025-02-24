<template>
  <div class="body-seccion3">
    <div class="container-seccion3">
      <!-- <h2>Servicios de los Compas</h2>  -->
      <div class="seccion3-content">
        <div class="card-wrapper" v-for="data in contractor" :key="data.id">
          <div class="card">
            <div class="image-content">
              <span class="overlay-3"></span>
              <div class="card-image">
                <img src="../../assets/img/construction-worker-icon.webp" alt="contratista icono" class="card-img">
              </div>
            </div>
            <div class="card-content">
              <h2 class="name">{{data.contratista}}</h2>
              <p class="description">{{data.review}}</p>
              <button class="button-seccion3">Saber Más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dataContractor from '../../assets/contractor.json'
export default {
  data() {
    return {
      contractor: dataContractor,
    }
  }
}
</script>

<style>
.body-seccion3 {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-cream);
}
.container-seccion3 {
  max-width: 1120px;
  max-height: 800px;
  width: 100%;
  background-color: var(--color-light-green);
  padding: 2.5rem;
  border-radius: 0.7rem;
  margin-top: 6rem;
}
.seccion3-content {
  display: flex;
  flex-flow: row wrap;
  margin: 0 1.3rem;
}

.card-wrapper{
display: flex;
gap: 20px;
margin-bottom: 1.5rem;
}
/* .container-seccion3 h2 {
  display: flex;
  justify-content: center;
  padding: 15px;
}  */
.card {
  width: 300px;
  height:370px;
  border-radius: 25px;
  background-color: #FFF;
  margin: 0 1rem ;
  margin-top: -0.8rem;
}

.image-content, .card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 14px;
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
  background-color: var(--color-dark-green);
  border-radius: 25px 25px 0 0;
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
  background-color: var(--color-dark-green);
  border-radius: 6px;
  margin: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button-seccion3:hover {
  background-color: var(--color-green);
}
</style>
