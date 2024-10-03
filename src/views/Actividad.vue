<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Intenciones comunicativas en diferentes tipos de textos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar elementos implícitos del texto, teniendo en cuenta factores contextuales y marcadores discursivos.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '<strong><em>¿Cuál es el objetivo principal del proceso de comprensión?</em></strong>',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar y entender el significado del texto y las intenciones del autora través de la interpretación de la información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Memorizar palabras sin entender su significado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Leer rápidamente sin preocuparse por el contenido del texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recitar el texto en voz alta sin necesidad de comprenderlo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '<strong><em>¿Qué son los recursos discursivos en la comunicación?</em></strong>',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Herramientas y técnicas utilizadas para estructurar y enriquecer eldiscurso, como metáforas, ejemplos y analogías.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Estrategias y técnicas usadas para manipular al lector sin claridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Materiales visuales que no tienen relación con el contenido del texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Métodos para escribir sin revisar el contenido o la estructura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '<strong><em>¿Qué función cumple un instrumento de lectura?</em></strong>',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un instrumento de lectura es un dispositivo para imprimir textos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un instrumento de lectura sirve para realizar tareas de escritura creativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un instrumento de lectura se utiliza para traducir textos a otros idiomas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un instrumento de lectura facilita la extracción y comprensión de ideas principales mediante estructuras gráficas y técnicas de análisis.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '<strong><em>¿Qué es la intención comunicativa en un texto?</em></strong>',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La intención comunicativa es un elemento decorativo añadido al texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La intención comunicativa es una forma en que un texto está escrito sin un propósito claro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La intención comunicativa es el propósito que tiene el autor al escribir el texto, como informar, persuadir o entretener.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La intención comunicativa es el formato en que se presenta el texto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '<strong><em>¿Qué implica el proceso de interpretación de un texto?</em></strong>',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El proceso de interpretación implica analizar y entender el significado profundo del texto, considerando el contexto y las intenciones del autor.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El proceso de interpretación implica simplemente leer el texto en voz alta sin analizarlo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El proceso de interpretación es la transcripción literal del texto sin comprensión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El proceso de interpretación consiste en cambiar el texto a otro idioma sin revisar su significado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '<strong><em>¿Un artículo científico tiene como intención principal?</em></strong>',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentar información y resultados de manera objetiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear un ambiente emocional.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Persuadir al lector.', esCorrecta: false },
            { id: 'd', texto: 'Contar anécdotas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '<strong><em>La intención comunicativa de un poema generalmente es:</em></strong>',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Expresar sentimientos y emociones.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Describir un proceso.', esCorrecta: false },
            { id: 'c', texto: 'Informar sobre un tema.', esCorrecta: false },
            { id: 'd', texto: 'Narrar hechos históricos.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '<strong><em>Un editorial en un periódico tiene como intención principal:</em></strong>',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentar una opinión sobre un tema.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Describir una situación.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Informar sobre estadísticas.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Narrar un evento.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '<strong><em>¿Cuál de los siguientes textos tiene una intención informativa?</em></strong>',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un informe de noticias.', esCorrecta: true },
            { id: 'b', texto: 'Un relato de ficción.', esCorrecta: false },
            { id: 'c', texto: 'Un poema.', esCorrecta: false },
            { id: 'd', texto: 'Un ensayo personal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '<strong><em>La intención de un cuento infantil suele ser:</em></strong>',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contar una historia para entretener y enseñar valores.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Informar sobre la ciencia.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Persuadir sobre un tema social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presentar datos estadísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
