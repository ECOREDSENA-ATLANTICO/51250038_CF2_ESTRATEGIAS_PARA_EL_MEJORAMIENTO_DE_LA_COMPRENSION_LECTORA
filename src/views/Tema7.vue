<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1(data-aos='fade-left') Construyendo una postura critica
    .row.justify-content-center.my-3.mb-4
      .col-lg-7(data-aos='fade-right')
        p.mb-3 La postura crítica está en permanente construcción. Se alimenta de las informaciones que cotidianamente percibimos mediante los sentidos. La criticidad consiste en distinguir hechos de opiniones. Es valorar y evaluar el discurso a partir de intereses, creencias, ideologías y sentimientos personales.<br>En este sentido, se pueden establecer acuerdos, puntos intermedios o desacuerdos frente a las ideas que expone el autor.
        p.my-3 La toma de una postura crítica es la última actividad en el proceso de lectura, antecedida, necesariamente, por la recuperación: del sentido, de la intención comunicativa y del contexto. Después de leer críticamente un texto, nada vuelve a ser como antes: las opiniones y las actitudes se transforman, el discurso se enriquece…es momento de compartir experiencias: 
        .bloque-texto-b.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 <strong>La lectura crítica es el único procedimiento didáctico que fortalece el crecimiento de un yo autónomo, consciente y constructivo, con opiniones propias y con capacidad de compromiso con la comunidad </strong>
            p Cassany, 2003, p. 129
            i.fas.fa-quote-right
      .col-lg-5.col-md-8(data-aos='fade-left')
        img(src="@/assets/curso/temas/tema7/img1.png")
    
    .cajon.color-secundario.p-4.mb-3(style="background: #CDE9E9")(data-aos='fade-up')
      p.mt-0.mb-0 Construir posturas críticas y compartirlas enriquece el proceso lector, de aprendizaje y de socialización. Siguiendo con Cassany (2003), las interpretaciones individuales son irrepetibles, interesantes y válidas; no obstante, la comprensión de un texto es más rica y completa cuando se suman aportaciones de varios lectores.
    
    .row.align-items-center.my-3.ms-2.mt-5(data-aos="fade-left")
      .col-lg-7
        .row.align-items-center.crd1(position="relative")
          .col.titulo-img(style="z-index:1")
            h3.titulo-text.text-light conclusiones
    .row.justify-content-center.my-3
      .col-lg-4.my-4
        p.m-0 El proceso de leer entre líneas y detrás de ellas va más allá de la simple decodificación de palabras; implica una construcción activa del significado a partir de conocimientos previos y experiencias personales.
        p.m-0 La comprensión efectiva de un texto se logra mediante la formulación de propuestas e inferencias que revelan tanto el sentido explícito como las intenciones ocultas del autor.
        p.m-0 La utilización de instrumentos de lectura, tales como estructuras gráficas y herramientas de análisis, juega un papel crucial en la extracción de las ideas más relevantes y en el fortalecimiento de las habilidades lectoras.
      .col-lg-4.col-md-8.my-4.align-content-center
        img(src="@/assets/curso/temas/tema7/img2.png")
      .col-lg-4.my-4 
        p.m-0 La interpretación del texto requiere una valoración integral que considere los propósitos comunicativos del autor y el contexto en el que se sitúa el texto. Este enfoque permite a los lectores desarrollar una postura crítica y una visión particular del mundo, influenciada por su propio contexto histórico y cultural.
        p.m-0 En definitiva, leer es un proceso dinámico que involucra el lenguaje, el pensamiento y la cultura, donde el significado se construye en la mente del lector y no reside únicamente en el texto. Así, el lector, con sus experiencias y contexto específicos, es quien da vida al contenido y lo enriquece con una comprensión personal y única.
    

</template>

<script>
export default {
  name: 'Tema7',
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
