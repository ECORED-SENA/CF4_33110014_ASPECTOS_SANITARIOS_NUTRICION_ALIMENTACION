<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Este componente formativo se enfoca en la conservación y manipulación de alimentos, abarcando prácticas sanitarias, precauciones en la preparación y almacenamiento, y métodos de conservación para frutas, verduras y carnes. Está diseñado para proporcionar a los aprendices las herramientas necesarias para manejar los alimentos de manera segura.
          br
          br
          | La correcta conservación de los alimentos es esencial para mantener su calidad y seguridad. Desde tiempos antiguos, el ser humano ha desarrollado diversas técnicas para prolongar la vida útil de los alimentos y prevenir su deterioro. En la actualidad, estos métodos se han perfeccionado, combinando avances tecnológicos con prácticas tradicionales.
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/1.png', alt='')
    .tarjeta.p-5(style="background-color: #ece4d8 ")
      p.mb-0 Además de la conservación, este material destaca la importancia de las prácticas sanitarias en la manipulación de los alimentos. La higiene en la preparación y el almacenamiento adecuado son cruciales para evitar la contaminación y garantizar que los alimentos sean seguros para el consumo
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
