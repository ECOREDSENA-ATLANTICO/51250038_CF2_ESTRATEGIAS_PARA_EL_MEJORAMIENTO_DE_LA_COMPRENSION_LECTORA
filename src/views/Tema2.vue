<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1(data-aos="fade-left") Recursos discursivos
      p(data-aos="fade-right") De lo dicho a lo comunicado hay mucho trecho. Lo que se dice es una cosa, y lo que se quiere decir es otra. Aquí entran en juego los recursos discursivos, es decir los elementos que disfrazan, que adornan, que resaltan, que engalanan el lenguaje. Para ilustrar, el siguiente fragmento del poema “Estados de ánimo” de Mario Benedetti:
      
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mt-3(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}")
        .bloque-texto-g__texto.p-4(style="background: #413253; text-align: center")
          p.text-light <strong>[…] A veces uno es<br>manantial entre rocas<br>y otras veces un árbol<br>con las últimas hojas […]</strong>
      
      .div.background-foto-resp.d-none
        p(data-aos="fade-right").mx-2.mt-4 ¿Qué quiere decir el autor con ser ‘manantial entre rocas’ o ‘un árbol con las últimas hojas’? El recurso que se emplea en este caso es la metáfora. Se define un estado en términos de otro. En el poema se alude a la naturaleza para expresar el estado o el sentir de una persona.
        p(data-aos="fade-right").mx-2 El éxito de la comprensión dependerá del bagaje conceptual y experiencial del lector: 
        .row.align-items-center.p-3.m-auto.justify-content-center
            .bloque-texto-f.color-acento-contenido.pt-4.px-2.mb-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.p-4.text-regular.bloque-texto-f__texto La ironía, el sarcasmo, el sobreentendido y la hipérbole son casos en los cuales lo que el hablante quiere decir difiere del significado del enunciado convencionalmente expresado […] estas figuras del discurso son literalmente falsas’.
              .bloque-texto-f__autor.mb-3
                h3.mb-0 Olson, 1998, p. 156
              .bloque-texto-f__avatar
                .bloque-texto-f__avatar__img
                  img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')
      
      .div.background-foto
        p(data-aos="fade-right").mx-2.mt-4 ¿Qué quiere decir el autor con ser ‘manantial entre rocas’ o ‘un árbol con las últimas hojas’? El recurso que se emplea en este caso es la metáfora. Se define un estado en términos de otro. En el poema se alude a la naturaleza para expresar el estado o el sentir de una persona.
        p(data-aos="fade-right").mx-2 El éxito de la comprensión dependerá del bagaje conceptual y experiencial del lector: 
        .row.align-items-center.p-3.m-auto.justify-content-center(data-aos="flip-up")
            .bloque-texto-f.color-acento-contenido.pt-4.px-2.mb-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.p-4.text-regular.bloque-texto-f__texto La ironía, el sarcasmo, el sobreentendido y la hipérbole son casos en los cuales lo que el hablante quiere decir difiere del significado del enunciado convencionalmente expresado […] estas figuras del discurso son ‘literalmente falsas’.
              .bloque-texto-f__autor.mb-3
                h3.mb-0 Olson, 1998, p. 156
              .bloque-texto-f__avatar
                .bloque-texto-f__avatar__img
                  img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')
      .row.my-1.justify-content-center(data-aos="fade-up")
        .col-lg-3.tarjeta-foto
          .row.text-center
            figure
              img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen')
            p.text-light.m-0 <strong>Puede significar:</strong>
            p.text-light.m-0 Tranquilidad
            p.text-light.m-0 Privilegio
            p.text-light.m-0 Fuerza
        .col-lg-4.col-md-8.my-3
          figure
            img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen', style="min-height: 400px")
        .col-lg-3.tarjeta-foto-2
          .row.text-center
            figure
              img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen')
            p.text-light.m-0 <strong>Puede significar:</strong>
            p.text-light.m-0 Vejez
            p.text-light.m-0 Cansancio
            p.text-light.m-0 Abandono
      p.mt-5.text-center <strong>A continuación, algunos de los recursos discursivos empleados a menudo en los textos:</strong>
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1. 
        span Recursos discursivos 
      .tabla-b.mb-5
        table
          caption.text-center Nota: SENA
          thead.text-center(style="background: #FFF0F4; border-top: solid #BD2F56 5px")
            tr
              th Recursos
              th Descripción
              th Ejemplo
          tbody
            tr
              td.text-center <strong>Metáfora</strong>
              td Se define o se alude a algo en términos diferentes a su ‘naturaleza’: surge de la inserción en un determinado contexto de una nota que proviene de otro distinto (Lakoff & Johnson, 1980, p. 11).
              td Miguel es una gacela (gacela = rápido).<br>Las cosas van muy bien. Estamos en el pico de la montaña.<br>(Altura = triunfo).
            tr
              td.text-center <strong>Hipérbole</strong>
              td Se exagera una situación o las características de algo.
              td ¡Casi muero de la alegría!<br>¡Es tan rápido como un avión!
            tr
              td.text-center <strong>Ironía</strong>
              td Se da a entender lo contrario a lo que se dice. Viene del griego <em>eirōneía</em>, que significa ‘ignorancia fingida’.
              td Su cuerpo escultural es lo que más me gusta (es una persona obesa).<br>¡Qué buen apunte! (cuando dijo algo absurdo). 
            tr
              td.text-center <strong>Metonimia</strong>
              td Se define algo en función de una de sus características. La parte por el todo o el todo por la parte.
              td Mi perro se llama manchas (Una de las características del perro es tener manchas).<br>Llegué de mi viaje a Francia (De una ciudad o pueblo específico de ese país).
            tr
              td.text-center <strong>Personificación</strong>
              td Se atribuyen cualidades humanas a cosas que no son humanas. 
              td El cáncer lo alcanzó.<br>El lobo habló con caperucita.
  
  
  </template>

<script>
export default {
  name: 'Tema2',
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
