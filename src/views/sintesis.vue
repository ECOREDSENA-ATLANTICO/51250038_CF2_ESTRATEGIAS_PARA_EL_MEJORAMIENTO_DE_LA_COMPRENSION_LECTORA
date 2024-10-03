<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p.mb-5 Leer entre líneas y detrás de ellas implica un proceso activo y profundo de comprensión que va más allá de la simple decodificación de palabras. Este proceso requiere que los lectores utilicen sus conocimientos previos y experiencias personales para interpretar el texto, descubriendo tanto el significado explícito como las intenciones ocultas del autor. La correcta comprensión de un texto se logra a través de propuestas e inferencias que revelan las ideas principales y el propósito comunicativo del autor.
      p.mb-5 Los instrumentos de lectura, como las estructuras gráficas, son herramientas valiosas que ayudan a extraer y organizar la información crucial del texto, fortaleciendo así las habilidades lectoras. Además, interpretar un texto implica valorar el contexto del autor y la obra para desarrollar una postura crítica que refleje una visión personal y única del mundo. En resumen, el significado del texto no reside solo en las palabras, sino que se construye en la mente del lector, influenciado por su contexto histórico y cultural.
  
  
      .row.justify-content-center
        .col-lg-10.mb-5
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="incluye elproceso de comprension , recursos discursivos,instrumentos de lectura , actividad del afianzamiento ,el proceso de interpretacion y construyendo unapostura critica.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis
  
  </template>

<script>
export default {
  name: 'Sintesis',
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
