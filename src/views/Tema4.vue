<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1(data-aos='fade-left') Actividad de afianzamiento
      
      .row.align-items-center.ms-2.my-5(data-aos='fade-left')
        .col-lg-7
          .row.align-items-center.crd1(position="relative")
            .col.titulo-img(style="z-index:1")
              h3.titulo-text.text-light Deportes extremos
      .row.justify-content-center
        .col-lg-8.col-md-12.order-md-2.order-sm-2(data-aos='fade-right') 
          p Los llamados deportes extremos son todas aquellas actividades o disciplinas en su mayoría ya existentes, pero que, debido a circunstancias especiales o situaciones particulares implícitas como el peligro y la dificultad para realizarlos, se les considera extremos. Por ejemplo, escalar una roca que está a unos centímetros del piso no se considera deporte extremo, en cambio escalar una pared vertical rocosa a cientos de metros sí es una actividad extrema.
          .cajon.color-secundario.p-4(style="background: #CDE9E9")
            p.mt-0.mb-0 Este reciente término, que se ha popularizado en la última década del siglo XX, ha sido utilizado dentro del deporte alternativo y por los medios de comunicación, para relacionar sus productos y atraer la atención de quienes están en busca de retos y aventura. Algunos deportes extremos son: paracaidismo, vuelo en parapente, rafting o descenso de ríos, ciclismo de montaña, escalada, salto en bungee, excursionismo, buceo, motonáutica, espeleología (exploración de cuevas), etc. Este tipo de actividades requiere de mayor conocimiento y conciencia que cualquier otra, ya que el riesgo se incrementa por la velocidad, la profundidad o la altura.
        .col-lg-3.col-md-8.order-md-1.order-sm-1.align-content-center(data-aos='fade-left')
          img.mb-3(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
  
      .row.justify-content-center.my-3
        .col-lg-3.col-md-8.order-md-2.order-sm-2.d-lg-block.d-none(data-aos='fade-left')
          img(src='@/assets/curso/temas/tema4/img2.png', alt='Imagen decorativa')
        .col-lg-8.order-md-1.order-sm-1(data-aos='fade-right')
          p.mb-3 Algunos científicos han determinado que esta pasión por el peligro puede tener una raíz fisiológica; o sea que se encuentra relacionada con los niveles de determinadas sustancias, como la adrenalina o ciertos neurotransmisores que hacen que algunas personas sean más audaces que otras. Los jóvenes son quienes más practican estos deportes de aventura, además de todos aquellos que tengan la posibilidad económica; ya que se requiere de recursos para trasladarse a diferentes lugares, implementos, especialistas y empresas encargados de la orientación y el cuidado del deportista.
          p En todo el mundo hay lugares en donde se pueden practicar estos deportes, como por ejemplo realizar una excursión a las cascadas del rio “Pacuare” en Costa Rica ,navegar por las turbulentas aguas del rio “The Numbers” en Arkansas, EEUU, o México, que cuenta con varios estados donde se han creado ya las condiciones necesarias para practicar deportes extremos. Tomado y adaptado de: <a href="https://es.scribd.com/doc/21017134/Texto-Expositivo-Deportes-Extremos">scribd</a>
        .col-lg-3.col-md-8.order-md-2.order-sm-2.d-lg-none.d-block.align-content-center(data-aos='fade-left')
          img(src='@/assets/curso/temas/tema4/img2.png', alt='Imagen decorativa')
      figure
      img(src='@/assets/curso/temas/tema4/img3.svg', alt='Imagen decorativa')
  </template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
