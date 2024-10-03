<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.my-3 En esta actividad de aprendizaje, leer entre líneas es un proceso complejo que va más allá de la simple decodificación de palabras. Implica utilizar conocimientos previos y experiencias para interpretar y construir el sentido del texto. Bienvenido a este componente formativo:    
      .video
        iframe(data-aos="flip-up")(width="560" height="315" src="https://www.youtube.com/embed/253LHWbdExA?si=j8GmXpveuB8Q7Wb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Nota: Sena.
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
