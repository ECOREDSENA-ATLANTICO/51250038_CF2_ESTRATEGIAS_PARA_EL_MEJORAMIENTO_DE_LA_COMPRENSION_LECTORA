<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1(data-aos='fade-left') La intención comunicativa
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mt-3(data-aos='flip-up')
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}")
          .bloque-texto-g__texto.p-4
            p Los textos se realizan con fines determinados. No existe acto del lenguaje neutro o desinteresado, más aún si se planifica y expresa por medio de la palabra escrita. Por esta razón, una de las últimas actividades en el proceso de lectura es identificar la intención comunicativa del texto.
      .row.justify-content-center
        .col-lg-3
          p.fondo-degradado.text-light.text-center ¿Qué se dice?
        .col-lg-3
          p.fondo-degradado2.text-light.text-center ¿Qué se quiere decir?
        .col-lg-3
          p.fondo-degradado3.text-light.text-center ¿Cuál es la finalidad?<br>¿Para qué se dice?
  
      p.my-3 Para rastrear los propósitos del texto, el lector debe evaluar el contenido y el sentido de las líneas. El proceso de interpretación de intenciones es complejo, y puede resumirse, de acuerdo con Tusón y Unamundo (1999), de la siguiente forma:
  
      .row.justify-content-center.background-foto-3(data-aos='flip-up')
        .col-lg-8
          p.mb-3 Usted me dice algo, con una intención. Entonces,<br>a partir de lo que usted me dice yo intento averiguar, con el mínimo coste de procesamiento, qué me quiere decir,<br>al decirme eso de esa manera<br>y sobre esa interpretación,<br>realizada a través de un proceso de inferencias,<br>basabas en mi conocimiento previo<br>sobre usted,<br>sobre sus valores,<br>sobre la situación,<br>sobre el mundo,<br>sobre el código y la variedad que utiliza,<br>y en los indicios contextualizadores<br>que me proporcionan sus palabras,<br>partiendo de las formas verbales y no verbales<br>que ha elegido para hablar conmigo,<br>sabiendo – o creyendo saber – lo que usted sabe<br>sobre mí,<br>sobre mis valores,<br>sobre la situación,<br>sobre el mundo,<br>sobre el código y la variedad que utilizo,<br>sobre lo que, tal vez, yo he dicho antes,<br>etc., etc.<br>establezco una hipótesis:
          p.mb-0(style="color: #972544") <strong>ME HA QUERIDO DECIR X.</strong>
          p.mb-3 Y, sobre esa hipótesis,<br>elaboro mi respuesta,<br>que será sometida por usted a un proceso similar de<br>interpretación. (Casmiglia & Tusón, 2001, p.178).
        .col-lg-3.col-md-8.justify-content-center.align-content-center
          figure
            img(src="@/assets/curso/temas/tema5/img2.svg")
      
      .row.justify-content-center.my-5
        .col-lg-5
          img(src="@/assets/curso/temas/tema5/img9.png")
          p.text-center Matador. (2010, octubre 28). Nuestra droga legal [Caricatura]. Matador Cartoons.
        .col-lg-7
          p Las intenciones comunicativas que se persiguen a través de los textos pueden ser: criticar, convencer, informar, disuadir, expresar inconformismo, etc. Frente a estos propósitos, el lector tiene un rol activo en cuanto valora el texto y los recursos que el autor pone en juego para lograr su cometido. Veamos un ejemplo:
          p.my-4(style="color: #972544") <strong>Veamos un ejemplo:</strong>
          p.mb-0 <strong>¿Qué quiere decir el texto?</strong>
          p.mb-0 Una lectura inferencial deja entrever los siguientes implícitos:
          ul.ms-4.mb-2
            li(style="list-style-type: disc; color: #BD2F56")
              span(style="color: #12263F") La corrupción tiene forma de hombre, posiblemente político o funcionario público.
            li(style="list-style-type: disc; color: #BD2F56")
              span(style="color: #12263F") Los dineros públicos son abundantes, pero no infinitos.
            li(style="list-style-type: disc; color: #BD2F56")
              span(style="color: #12263F") Los corruptos hacen uso de los dineros públicos a su antojo.
  
          p.mb-0 <strong>¿Cuál es la intención del autor?</strong>
          p.mb-0 El autor de este texto es matador, un reconocido caricaturista colombiano. Sus propósitos pueden ser:
          ul.ms-4.mb-2
            li(style="list-style-type: disc; color: #BD2F56")
              span(style="color: #12263F")  Denunciar la forma como se despilfarran los dineros públicos.
            li(style="list-style-type: disc; color: #BD2F56")
              span(style="color: #12263F") Los dineros públicos son abundantes, pero no infinitos.
            li(style="list-style-type: disc; color: #BD2F56")
              span(style="color: #12263F") Expresar inconformismo con respecto a la gestión de los dineros públicos.
  
  
  
      .div.background-foto-5.p-5
        .row.justify-content-center
          .col-lg-5.caja-2.me-0.mb-3
            .row.justify-content-center
              .col-lg-5.col-md-8
                img(src="@/assets/curso/temas/tema5/img4.png")
            p.text-light.text-center.m-2(style="font-size: 24px") <strong>¿Qué quiere decir el texto?</strong>
            p.text-light.m-1 Una lectura inferencial deja entrever los siguientes implícitos:
            ul.m-2.ms-4
              li(style="list-style-type: disc; color: #F4AB5D")
                span(style="color: white") La corrupción tiene forma de hombre, posiblemente político o funcionario público.
              li(style="list-style-type: disc; color: #F4AB5D")
                span(style="color: white") Los dineros públicos son abundantes, pero no infinitos.
              li(style="list-style-type: disc; color: #F4AB5D")
                span(style="color: white") Los corruptos hacen uso de los dineros públicos a su antojo.
          .col-lg-5.caja-3.ms-0.mb-3
            .row.justify-content-center
              .col-lg-5.col-md-8
                img(src="@/assets/curso/temas/tema5/img5.png")
            p.text-light.text-center.m-2(style="font-size: 24px") <strong>¿Cuál es la intención del autor?</strong>
            p.text-light.m-1 El autor de este texto es matador, un reconocido caricaturista colombiano. Sus propósitos pueden ser:
            ul.m-2.ms-4
              li(style="list-style-type: disc; color: #F4AB5D")
                span(style="color: white") Denunciar la forma como se despilfarran los dineros públicos.
              li(style="list-style-type: disc; color: #F4AB5D")
                span(style="color: white") Expresar inconformismo con respecto a la gestión de los dineros públicos.
  
</template>

<script>
export default {
  name: 'Tema5',
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
