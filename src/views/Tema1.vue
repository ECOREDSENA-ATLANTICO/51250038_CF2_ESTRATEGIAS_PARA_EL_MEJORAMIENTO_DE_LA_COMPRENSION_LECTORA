<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1(data-aos="fade-left") El proceso de la comprensión
      .cajon.color-secundario.p-4(style="background: #CDE9E9")
        p.mt-0.mb-0 Para iniciar, se define el proceso de comprensión y el papel del lector en la construcción de significados. Luego,se descubren los recursos discursivos que se emplean en el texto para disfrazar el lenguaje. Por último, sepresentan algunos instrumentos que facilitan la comprensión textual, tales como, el mapa conceptual, el mapamental, la estructura informativa, el paralelo gráfico y la red argumentativa. Seguramente, alguna vez usted haempleado una o todas estas herramientas.
      p.my-3(data-aos="fade-right") Luego de descodificar el texto, o simultáneamente, está el proceso de comprensión, el cual consiste en recuperar el sentido a partir de inferencias y demás actividades analíticas. El sentido no está dado unívocamente en el texto, sino es el resultado de la interacción entre el texto y el lector, quien descifra las pistas en el código mediante procesos de pensamiento. Es decir, el lector completa el sentido del texto, haciendo uso de sus conocimientos y experiencias. A continuación:
      
      figure
        img(data-aos="flip-up")(src="@/assets/curso/temas/tema1/img1.png", alt="")
  
      p.text-center.mt-5 <strong>Comprender la anterior conversación implica realizar las siguientes inferencias:</strong>
      
      .row.align-items-center.justify-content-center.background-foto(data-aos="flip-up")
        .col-lg-6.col-md-8
          .row.align-items-center.my-3
            .col-lg-6.crd.crd--avatarHorizontal-left-bgr1.py-3.mb-3
              .row.align-items-center
                .col-auto(style="z-index:1; margin-left: 1.5em")
                  figure
                    img(src="@/assets/curso/temas/tema1/img2.svg", alt="")
                .col(style="z-index:1")
                  p.m-0.text-light <strong>¿Me prestas el carro hoy?</strong>
              
            .col-lg-6.crd.crd--avatarHorizontal-left-bgr2.py-3.mb-3
              .row.align-items-center
                .col-auto(style="z-index:1; margin-left: 1.5em")
                  figure
                    img(src="@/assets/curso/temas/tema1/img3.svg", alt="")
                .col(style="z-index:1")
                  p.m-0.text-light <strong>Tengo pico y placa = NO</strong>
        .col-lg-6
          .row 
            p.mb-0 <strong>Inferencia 1:</strong> el pico y placa restringe la circulación de vehículos en días específicos.
            p <strong>Inferencia 2:</strong> si un vehículo circula en día de pico y placa, su dueño se expone a sanciones.
        .row.align-items-center.p-3.m-auto.justify-content-center
          .bloque-texto-f.color-acento-contenido.pt-4.px-2
            .bloque-texto-f__comillas
              i.fas.fa-quote-left
              i.fas.fa-quote-right
            h4.p-4.text-regular.bloque-texto-f__texto Un buen lector va más allá de las palabras; reconoce la propuesta del autor y los implícitos en el texto. Esta tarea es la esencia de la lectura, aunque en muchos casos no sea fácil de lograr: “[…] el lector sólo obtiene satisfacción cuando pone en juego su productividad, y ello sólo ocurre cuando el texto ofrece la posibilidad de ejercitar nuestras capacidades”.
            .bloque-texto-f__autor.mb-3
              h3.mb-0 (Iser, 1987, p. 150).
            .bloque-texto-f__avatar
              .bloque-texto-f__avatar__img
                img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')
  
  
        .row.align-items-center.my-3(data-aos="fade-left").d-lg-block.d-none
          .col-lg-7
            .row.align-items-center.crd1(position="relative")
              .col.titulo-img(style="z-index:1")
                h3.titulo-text.text-light Construyendo el sentido
  
        .row.align-items-center.my-3(data-aos="fade-left").d-lg-none.d-block
          .col-lg-7
            .row.align-items-center.crd1(position="relative")
              .col.titulo-img(style="z-index:1")
                h3.titulo-text.text-light Construyendo el sentido
      
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-3(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img7.png')})`}")
          .bloque-texto-g__texto.p-4
            p De acuerdo con Cassany (2006), el significado no se aloja en el texto sino en la mente de los lectores, quienes aportan conocimientos previos para construir múltiples sentidos. Cada lector es un ‘mundo’ diferente pues sus experiencias y conocimientos son particulares; esto incide en la recuperación de los significados: “una misma persona puede obtener significados diferentes de un mismo texto, si lo lee en diferentes circunstancias, en las que cambie su conocimiento previo” (p. 32).
      
        .row.align-items-center.my-5(data-aos="fade-left").d-lg-block.d-none
          .col-lg-7
            .row.align-items-center.crd1(position="relative")
              .col.titulo-img(style="z-index:1")
                h3.titulo-text.text-light ¿De qué depende la compresión?
        .row.align-items-center.my-5(data-aos="fade-left").d-lg-none.d-block
          .col
            .row.align-items-center.crd1-resp
              .titulo-img-resp(style="z-index:1")
                h3.titulo-text-resp(style="color: white") ¿De qué depende la<br>compresión?
   
      
      p.m-0(data-aos="fade-right") Del conocimiento previo que el lector tenga sobre el tema. ¿Sabe qué es pico y placa? ¿Cómo funciona en su ciudad?
      p(data-aos="fade-right") De las experiencias del lector en torno al tema. ¿Tiene o ha tenido carro particular? ¿Cómo el pico y placa lo ha afectado? A la conclusión: “no puede prestar el carro” se puede llegar mediante múltiples vías.
  
      .row.justify-content-center(data-aos="flip-up")
        .col-lg-4.col-md-8
          figure
            img(src="@/assets/curso/temas/tema1/img8.png", alt='', style="min-height: 450px")
        .col-lg-8.col-md-8
          .row
            figure
              img(src="@/assets/curso/temas/tema1/img9.png", alt='')
            p.text-center Quino. Mafalda, tomo 1. Ediciones de la Flor, 1966, Caricatura No. 21.
          .row  
            p.my-1.text-center <strong>¿Qué se dice en la historia sobre las personas que trabajan en el gobierno? (dos respuestas)</strong>
          .row.justify-content-center
            .col-lg-5.caja.p-3.m-1
                .row.align-items-center
                  .col.align-items-center
                    p.ms-3(style="color: white") <strong>A. Quienes trabajan en el gobierno son conflictivos.</strong>
            .col-lg-5.caja.p-3.m-1
                .row.align-items-center
                  .col.align-items-center
                    p.ms-3(style="color: white") <strong>B. Quienes trabajan en el gobierno son conflictivos.</strong>
          .row.justify-content-center
            .col-lg-5.caja.p-3.m-1
                .row.align-items-center
                  .col.align-items-center
                    p.ms-3(style="color: white") <strong>C. Quienes trabajan en el gobierno son respetados por su labor.</strong>
            .col-lg-5.caja.p-3.m-1
                .row.align-items-center
                  .col.align-items-center
                    p.ms-3(style="color: white") <strong>D. Quienes trabajan en el gobierno no hacen nada.</strong>
              
  </template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
