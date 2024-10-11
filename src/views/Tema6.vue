<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1(data-aos='fade-left') Proceso de interpretación
    .row.justify-content-center.my-3
      .col-lg-5.col-md-8(data-aos='fade-right')
        img.mb-3(src="@/assets/curso/temas/tema6/img1.png")
      .col-lg-7(data-aos='fade-left')
        p.mb-3 Luego de realizar las inferencias correspondientes e identificar las intenciones comunicativas, el lector atribuye una valoración personal a lo expuesto en el texto (Mendoza, 2008). No todo lo que está escrito adquiere estatus de ‘verdad’; tan solo refleja acercamientos personales a una realidad cambiante.
        p.my-3 El lector:
        .bloque-texto-b.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 <strong>asume el rol de crítico o analista del texto, con la competencia crítica. Se pone énfasis en el hecho de que el texto representa un punto de vista parcial, no es neutro e influye en el lector. Incluye la identificación de valores, actitudes, opiniones e ideologías, y la construcción de alternativas. </strong>
            p Cassany, 2006, p. 84
            i.fas.fa-quote-right
    
    .cajon.color-secundario.p-4.my-5(style="background: #CDE9E9")
      h5.mb-0 ¿En qué consiste la interpretación?
      p.mt-0.mb-0 La interpretación consiste en contextualizar y evaluar el texto en función de las condiciones sociohistóricas que le dieron origen. Interpretar es identificar en el texto, además de las intenciones, las ideologías, las creencias y los puntos de vista del autor: es distinguir entre hechos y opiniones...es leer detrás de las líneas. En este proceso el Inter texto lector juega un rol determinante.
    
    .row.align-items-center.my-5(data-aos='fade-left')
      .col-lg-7
        .row.align-items-center.crd1(position="relative")
          .col.titulo-img(style="z-index:1")
            h3.titulo-text.text-light El intertexto lector

    .row.justify-content-center.my-3
      .col-lg-8(data-aos='fade-right')
        p.justify-content-center.mb-3 El intertexto es la red de relaciones textuales que se activan en el lector cuando interactúa con un texto. Entendido de otra forma, el intertexto es el tejido de referentes anteriores o posteriores al texto. Cuántos más conocimientos y experiencias evoquen el lector más fácilmente podrá valorar y construir una postura crítica en torno al texto. Ejemplo:
        .cajon.color-acento-botones.p-4.mb-3(style="background: #FCE6CE")
          p.mt-0.mb-0 En este caso, las referencias que se evocan están relacionadas con cuatro obras distintas: “Cien años de soledad” de Gabriel García Márquez; “Caperucita Roja” en la versión de Charles Perrault o los Hermanos Grimm; “La Biblia” de varios autores; y “La pobre viejecita” de Rafael Pombo.
      .col-lg-4.col-md-8.mb-3(data-aos='fade-left')
        img(src="@/assets/curso/temas/tema6/img2.png")
      .div.background-foto
        .col-lg-10
          p.mx-2 Cada uno interpreta el escrito a su modo, a partir de las experiencias personales en relación con las obras. La red intertextual que se activa es fundamental para comprender, valorar y evaluar el texto:
        .row.align-items-center.p-3.m-auto.justify-content-center(data-aos='flip-up')
            .bloque-texto-f.color-acento-contenido.pt-4.px-2.mb-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.p-4.text-regular.bloque-texto-f__texto Resulta evidente que solo la posible aportación del lector hace ‘interpretable’ un texto, es decir lo hace comprensible y le atribuye una intencionalidad. Cuando se desconoce la procedencia de las distintas citas o alusiones, la comprensión puede resultar errónea o inadecuada y, en consecuencia, también su interpretación.
              .bloque-texto-f__autor.mb-3
                h4.mb-0 Mendoza, 2008a, Cap. 3, párr. 6
      .row.align-items-center(data-aos='fade-left').d-lg-block.d-none
        .col-lg-7
          .row.align-items-center.crd1(position="relative")
            .col.titulo-img(style="z-index:1")
              h3.titulo-text.text-light El mundo del autor y el contexto
      .row.align-items-center.my-5(data-aos="fade-left").d-lg-none.d-block
        .col
          .row.align-items-center.crd1-resp
            .titulo-img-resp(style="z-index:1")
              h3.titulo-text-resp1(style="color: white") El mundo del autor y el contexto
    
    p.my-3 El texto es el resultado de una serie de acontecimientos que motivan a alguien a escribir algo. Sin duda, los puntos de vista del autor se reflejan en cada uno de los textos que produce. Conocer al autor es una actividad que completa la comprensión, y permite una valoración más amplía y rigurosa del texto. 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mt-3(data-aos='flip-up')
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img3.png')})`}")
        .bloque-texto-g__texto.p-4
          p El texto está condicionado por el lugar y momento de su nacimiento. Las personas y sus acciones, los paisajes, los sucesos, la naturaleza toman forma de imágenes, de versos, de ensayos, de historias, de obras que expresan formas de ver el mundo en momentos particulares de la historia. Por tal motivo, un buen lector contextualiza el texto, recuperando información acerca del autor, el tiempo y el lugar que le dieron vida.
    p.my-4.mb-5 Indagar el mundo del autor implica reconocer el porqué de sus escritos, de sus contenidos, de las actitudes que toma con respecto a lo que dice. También, requiere imaginar o investigar acerca de las circunstancias de producción, de los discursos previos y posteriores, de su edad, sexo, nacionalidad, raza e ideología (Cassany, 2006).    
    p.fs-5.text-center(style="color: #872141") <strong>¡Esto es leer críticamente! ¡Leer detrás de las líneas!</strong>
</template>

<script>
export default {
  name: 'Tema6',
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
