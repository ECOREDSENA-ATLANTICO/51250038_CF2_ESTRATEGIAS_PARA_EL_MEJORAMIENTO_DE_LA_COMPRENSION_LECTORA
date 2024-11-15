<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1(data-aos="fade-left") Instrumento de lectura
      
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0 Comprender un texto no es una tarea sencilla. Además de reconocer y entender los recursos discursivos, un buen lector debe dar cuenta de las ideas principales y secundarias, de los personajes, de las acciones, de los espacios, y de cómo todo esto se subordina a una intención comunicativa.
          p.mb-0 <br>Afortunadamente, existen herramientas que facilitan la comprensión de cualquier tipo de texto: los instrumentos de lectura. Se conocen por su utilidad para sintetizar y organizar información mediante gráficos que representan relaciones y jerarquías conceptuales.
  
      .row.align-items-center.my-5.ms-2(data-aos="fade-left")
        .col-lg-7
          .row.align-items-center.crd1(position="relative")
            .col.titulo-img(style="z-index:1")
              h3.titulo-text.text-light El mapa conceptual
              
      .row.justify-content-center
        .col-lg-4.col-md-8.align-content-center(data-aos="fade-right")
          figure
            img.mb-3(src='@/assets/curso/temas/tema3/img2.png', alt='Imagen decorativa')
        .col-lg-8(data-aos="fade-left")
          p Es un instrumento que facilita la comprensión o producción de un texto, en cuanto permite organizar la información gráficamente. El mapa conceptual permite representar relaciones conceptuales (jerárquicas, de clase, etc.) a través de la proposición de elementos claves (unidades sémicas) y conectores. Esta estructura gráfica está compuesta por conceptos claves, los cuales se encierran en círculos o cuadros.
          b En relación con estos conceptos podemos encontrar tres tipos:
          ul.ms-5.mt-3
            li(style="list-style-type: disc; color: #BD2F56")
              span(style="color: #12263F") Supra ordinados (de mayor nivel).
          .m-0.hr-punteado 
          ul.ms-5.mt-2
            li(style="list-style-type: disc; color: #BD2F56")
              span(style="color: #12263F") Coordinados (de igual nivel).
          .m-0.hr-punteado
          ul.ms-5
            li(style="list-style-type: disc; color: #BD2F56")
              span(style="color: #12263F") Subordinados (de inferior nivel). También encontramos los conectores o enlaces; palabras que cohesionan los elementos constitutivos del mapa. Por último, tenemos las líneas que representan las relaciones entre conceptos.
      
      p.my-3.mb-4.text-center <strong>A continuación, se explica cómo se hace el mapa conceptual:</strong>
  
      .row.justify-content-center(data-aos="fade-up")
        .col-lg-6
          LineaTiempoD.color-secundario.mt-3
            .row(numero="1" titulo="Tema")
              .col-md-12.mb-4.mb-md-0
                p.text-small Establezca el tema a tratar.
  
            .row(numero="2" titulo="Concepto")
              .col-md-12.mb-4.mb-md-0
                p.text-small Identifique el concepto clave o nuclear a desarrollar y escríbalo dentro del cuadro u óvalo central.
                
            .row(numero="3" titulo="Elementos")
              .col-md-12.mb-4.mb-md-0
              p.text-small Determine los elementos relacionados con el concepto central.
  
            .row(numero="4" titulo="Relaciones")
              .col-md-12.mb-4.mb-md-0
              p.text-small Plantee las relaciones (jerárquicas) entre los conceptos.
  
            .row(numero="5" titulo="Vínculos")
              .col-md-12.mb-4.mb-md-0
              p.text-small Establezca los vínculos mediante palabras conectores y líneas que evidencien la relación (supra ordinada, coordinada o subordinada).  
  
            .row(numero="6" titulo="Mapa")
              .col-md-12.mb-4.mb-md-0
              p.text-small Revise el mapa. 
  
            .row(numero="7" titulo="Nombre")
              .col-md-12.mb-4.mb-md-0
              p.text-small Elija un nombre para el mapa conceptual.
        .col-lg-4.col-md-8.mt-3
          figure
            img(src='@/assets/curso/temas/tema3/img3.png', alt='Imagen decorativa')
  
      p.my-3.text-center <strong>Figura 1.</strong> Ejemplo de mapa conceptual
  
      figure
        img(data-aos="flip-up")(src='@/assets/curso/temas/tema3/img4.svg', alt='Imagen decorativa')
    
      .row.align-items-center.my-5.ms-2(data-aos="fade-left")
        .col-lg-7
          .row.align-items-center.crd1(position="relative")
            .col.titulo-img(style="z-index:1")
              h3.titulo-text.text-light El mapa mental
  
      .row.justify-content-center
        .col-lg-4.col-md-8(data-aos="fade-left")
          img.my-3(src='@/assets/curso/temas/tema3/img5.png', alt='Imagen decorativa')
        .col-lg-8(data-aos="fade-right")
          p.mb-0 Es una estructura gráfica que refleja las ideas principales en torno a un tema, mediante relaciones y combinaciones de formas, colores y dibujos. Trata de crear un modelo de trabajo semejante al procesamiento de la información en el cerebro.
          p De acuerdo con Ontoria, Gómez y Molina (2003), las características y el proceso de elaboración de los mapas mentales son:
          strong Características
          ol.lista-ol--cuadro.mt-4
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 1
              span Pensamiento con palabras e imágenes. Se busca un equilibrio entre el uso de la imagen y la palabra, con el fin de desarrollar habilidades del cerebro.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;")
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light(style="min-width: 30px; text-align: right; padding-right: 10px;") 2
              span Jerarquización y categorización: el mapa mental facilita la ordenación y estructuración del pensamiento, partiendo de un concepto clave sobre el cual se construyen nuevos conceptos en función a su importancia. Es decir, existen grupos, que a su vez tienen subgrupos, y así sucesivamente hasta que se agote el tema o, en el caso de la lectura, el contenido del texto.
      
      .row.justify-content-center.background-foto-2
        strong.my-4(data-aos="fade-left") ¿Cómo se elabora?
        .col-lg-8(data-aos="fade-right")
          ol.lista-ol--cuadro
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 1
              span Tome como referencia la imagen del árbol, con su tronco, raíces y ramas.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 2
              span El tema principal en texto o imagen va en el centro, coloreado.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 3
              span Las ideas principales deben ir con letra más grande que las ideas secundarias; estas se sitúan en una rama que sale del centro y se sintetizan en palabras clave.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 4
              span Las ideas secundarias salen de la rama principal. No hay límite de ramificaciones. Se recomienda escribir una palabra por línea. Cada palabra encierra un gran número de asociaciones.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 5
              span Las palabras deben ir siempre en letra de imprenta, es decir, mayúsculas o minúsculas o combinando ambas.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 6
              span El dibujo o los colores sirven para destacar los distintos elementos que facilitan la memorización, mientras que las flechas sirven para unir las líneas relacionadas.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 7
              span Las palabras deben escribirse siempre sobre las líneas.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 8
              span Las líneas deben estar vinculadas entre sí. Las líneas deben tener la misma longitud que la palabra o la imagen.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 9
              span Usar todas las imágenes posibles.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 10
              span Emplear números o códigos para ordenar los elementos, o mostrar conexiones entre ellos.
            .hr-punteado.mb-3
        .col-lg-4.col-md-8(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema3/img8.png', alt='Imagen decorativa')
        .row.justify-content-center
          .col-lg-10.col-md-8.my-3
            p.text-center <b>Figura 2.</b> Ejemplo de mapa mental
            img(data-aos="flip-up")(src='@/assets/curso/temas/tema3/img9.svg', alt='se presenta unaestructura gráfica que refleja las ideas principales entorno a un tema, mediante relaciones y combinacionesde formas, colores y dibujos.')
      
      .row.align-items-center.my-5.ms-2(data-aos="fade-left").d-lg-block.d-none
        .col-lg-7
          .row.align-items-center.crd1(position="relative")
            .col.titulo-img(style="z-index:1")
              h3.titulo-text.text-light Estructura informativa
      .row.align-items-center.my-5(data-aos="fade-left").d-lg-none.d-block
          .col
            .row.align-items-center.crd1-resp
              .titulo-img-resp(style="z-index:1")
                h3.titulo-text1(style="color: white") Estructura informativa
      .row.justify-content-center.my-3
        .col-lg-4.col-md-8.align-content-center(data-aos="fade-right")
          img.mb-4(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen decorativa')
        .col-lg-8(data-aos="fade-left")
          .cajon.color-secundario.p-4.mb-3(style="background: #CDE9E9")
            p.mt-0.mb-0 Es una representación gráfica que da cuenta de los elementos constitutivos de los textos narrativos. Según Vilches (1984), este esquema interrelaciona todos los sucesos, en particular, del momento informativo, la noticia. No obstante, la estructura informativa es útil, también, para sintetizar cuentos, novelas, fábulas, entre otros.
          b ¿Cómo se hace?
          ol.lista-ol--cuadro.mt-2
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 1
              span Identifique el acontecimiento o hecho sobre el que se habla. Escríbalo en la parte superior.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 2
              span Reconozca los actantes o personajes de la historia. Escríbalos en el centro.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 3
              span Contextualice la historia con las causas o eventos que le dieron origen. Anótelos en la parte izquierda.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 4
              span Ubique la historia y el tiempo. Escríbalos en la parte inferior.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 5
              span Establezca los sucesos de la narración. Anótelos en la parte derecha.
      
      .row.background-foto-3.justify-content-center.p-4
        .col-lg-10.col-md-8
          p.mb-4.text-center <strong>Figura 3. </strong>Ejemplo de estructura informativa de una noticia.
          img(data-aos="flip-up")(src='@/assets/curso/temas/tema3/img12.svg', alt='Imagen decorativa')
      
      .row.align-items-center.my-5.ms-2(data-aos="fade-left")
        .col-lg-7
          .row.align-items-center.crd1(position="relative")
            .col.titulo-img(style="z-index:1")
              h3.titulo-text.text-light Paralelo gráfico
      p(data-aos="fade-left") Es una herramienta que permite organizar la información, estableciendo comparaciones sistemáticas con respecto a elementos de un texto.
      p(data-aos="fade-left") Este instrumento facilita la compresión de textos descriptivos o expositivos, puesto que hace énfasis en las características, cualidades y ejemplos de lo que se compara.
      p(data-aos="fade-left") <strong>¿Cómo se hace?</strong>
  
      .row.align-content-center.my-3.justify-content-center(data-aos="flip-left")
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-3.ps-5
            .tarjeta-numerada__numero
              .h2 1
            p Liste los elementos a describir y ubíquelos en la primera columna.
  
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-3.ps-5
            .tarjeta-numerada__numero
              .h2 2
            p Determine las variables a trabajar. Escríbalas en la fila superior.
  
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido2.p-3.ps-5
            .tarjeta-numerada__numero
              .h2(style="color: white") 3
            p Relacione elementos y variables, describiendo los vínculos en los cuadros correspondientes.
      .titulo-sexto.color-acento-contenido(data-aos='fade-left')
        h5 Tabla 2. 
        span Ejemplo de paralelo gráfico 
      .tabla-b.mb-5
        table
          caption.text-center Nota: SENA
          thead.text-center(style="background: #FFF0F4; border-top: solid #BD2F56 5px")
            tr
              th Elementos
              th Variable 1
              th Variable 2
              th Variable 3
          tbody
            tr
              td.text-center <strong>Elemento 1</strong>
              td
              td
              td
            tr
              td.text-center <strong>Elemento 2</strong>
              td
              td
              td
            tr
              td.text-center <strong>Elemento 3</strong>
              td
              td
              td
            
      .row.align-items-center.my-5(data-aos='fade-left')
        .col-lg-7
          .row.align-items-center.crd1(position="relative")
            .col.titulo-img(style="z-index:1")
              h3.titulo-text.text-light Red argumentativa
  
      .row.justify-content-center
        .col-lg-5.col-md-8.align-content-center(data-aos='fade-right')
          img.mb-3(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen decorativa')
        .col-lg-7(data-aos='fade-left')
          p Es un instrumento que permite la comprensión de textos argumentativos a partir de la identificación de tesis, argumentos y conclusiones. Gráficamente, se esboza la estructura argumentativa de un texto, relacionando los elementos que lo componen.
          strong.my-3 ¿Cómo se hace?
          ol.mt-4.lista-ol--cuadro
            li(style="display: flex; align-items: flex-start;") 
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light 1
              span Identifique el tema y la tesis principal del texto. Ubíquelas en los dos primeros cuadros de la red, respectivamente.
            .hr-punteado.mb-3
            li(style="display: flex; align-items: flex-start;")
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light(style="min-width: 30px; text-align: right; padding-right: 10px;") 2
              span Establezca los argumentos que presenta el autor para sustentar su tesis. Resúmalos y ubíquelos verticalmente, relacionándolos con la tesis.
            .hr-punteado.mb-3
            li.mb-3(style="display: flex; align-items: flex-start;")
              .lista-ol--cuadro__vineta(style="background: #BD2F56; color: black")
                span.text-light(style="min-width: 30px; text-align: right; padding-right: 10px;") 3
              span Identifique la conclusión y ubíquela al final de la red.
            p.mb-0 Estrategias para el mejoramiento de la comprensión lectora.
            p Mientras lee: descubriendo lugares
      
      p.text-center.my-3 <strong>Figura 4. </strong>Ejemplo de red argumentativa
      
      figure
        img(data-aos='flip-up')(src='@/assets/curso/temas/tema3/img13.svg', alt='Imagen decorativa')
        
  </template>

<script>
export default {
  name: 'Tema3',
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
