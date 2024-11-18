export default {
  global: {
    componenteFormativo:
      'Intenciones comunicativas en diferentes tipos de textos',
    descripcionCurso:
      'En esta actividad de aprendizaje, “leer entre líneas” significa interpretar un texto usando conocimientos previos y experiencias, descubriendo lo que el autor oculta y utilizando herramientas para fortalecer la comprensión y las habilidades lectoras, y leer detrás de las líneas es interpretar el texto identificando los propósitos del autor y contextualizando. Implica una valoración crítica, donde el conocimiento del lector y el contexto histórico juegan un papel crucial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El proceso de la comprensión',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recursos discursivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Instrumento de lectura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'La intención comunicativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Proceso de interpretación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Construyendo una postura crítica',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/51250038_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Proceso de compresión lectora',
      referencia: 'Ecosistema recursoseducativos (2021). SENA[Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=E9Fi9mE-Pas',
    },
  ],
  glosario: [
    {
      termino: 'Bagaje',
      significado:
        'conjunto de conocimientos o información que dispone una persona.',
    },
    {
      termino: 'Contexto',
      significado:
        'entorno espacial y temporal, ya sea político, cultural, histórico en el que se desarrolla un hecho.',
    },
    {
      termino: 'Criticar',
      significado: 'valorar algo mediante procesos de análisis.',
    },
    {
      termino: 'Disuadir',
      significado:
        'inducir, mediante razones o argumentos, al abandono o cambio de una decisión.',
    },
    {
      termino: 'Inferencias',
      significado: 'conclusiones producto de un análisis textual.',
    },
    {
      termino: 'Implícitos',
      significado: 'elementos ocultos dentro del texto.',
    },
    {
      termino: 'Interpretar',
      significado:
        'explicar hechos o textos que pueden ser entendidos de diferentes formas.',
    },
    {
      termino: 'Postura',
      significado:
        'inclinación o actitud que se toma frente alguna situación o tema.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cassany, D. (2006). Tras las líneas: sobre la lectura contemporánea. Barcelona, España: Anagrama.',
      link:
        'https://media.utp.edu.co/referencias-bibliograficas/uploads/referencias/libro/295-tras-las-lneaspdf-WB5V4-articulo.pdf',
    },
    {
      referencia: 'Lakoff & Johnson, 1980, p. Metaphors We Live.',
      link:
        'https://www.textosenlinea.com.ar/libros/Lakoff%20y%20Johnson%20-%20Metaphors%20We%20Live%20By%20-%201980.pdf',
    },
    {
      referencia:
        'Tusón, A., & Unamuno, V. (1999). ¿De quien estamos hablando? El malentendido en el discurso escolar. Revista iberoamericana de discurso y sociedad, 1(1), 19-34.',
      link: '',
    },
    {
      referencia:
        'Cassany. D. (2003). Aproximaciones a la lectura crítica: teoría,ejemplos y reflexiones. Tarbiya, Revista deinvestigación en innovación educativa del Instituto Universitario de Ciencias de la Educación 32, 113 - 132.',
      link:
        'https://www.textosenlinea.com.ar/academicos/Calsamiglia%20y%20Tuson%20-%20Las%20cosas%20del%20decir.%20Manual%20de%20analisis%20del%20discurso.pdf',
    },
    {
      referencia:
        'Casamiglia, H., & Tusón, A. (2001). Las cosas del decir. Manual de análisis del discurso. Barcelona, España:Editorial Ariel.',
      link:
        'https://universitas82.wordpress.com/wp-content/uploads/2013/08/las-cosas-del-decir.pdf',
    },
    {
      referencia:
        'Iser, W. (1987). El proceso de lectura; enfoque fenomenológico. Estética de la recepción (149-164) Mayoral, J.(comp.). Madrid, España: Arco.',
      link:
        'https://perio.unlp.edu.ar/catedras/wp-content/uploads/sites/135/2020/05/iser._el_proceso_de_lectura.pdf',
    },
    {
      referencia:
        'Mendoza, A. (2008). Función de la literatura infantil y juvenil en la formación de la competencia literaria / Antonio Mendoza Fillola. Biblioteca Virtual Miguel de Cervantes.',
      link:
        'https://www.cervantesvirtual.com/obra/funcin-de-la-literatura-infantil-y-juvenil-en-la-formacin-de-la-competencia-literaria-0/',
    },
    {
      referencia:
        'Olson, D. (1998). El mundo sobre el papel. Barcelona, España: Gedisa.',
      link:
        'https://lecturayescrituraunrn.wordpress.com/wp-content/uploads/2016/02/olson-el-mundo-sobre-el-papel.pdf',
    },
    {
      referencia:
        'Ontoria, A., Gómez, J., & Molina, A. (2000). Potenciar la capacidad de aprender y pensar (2ª ed.). Madrid,España: Narcea.',
      link:
        'https://www.terras.edu.ar/biblioteca/3/3GOMEZ-Juan-MOLINA-RUBIO-Ana-ONTORIA-PENA-Antonio-cap7.pdf',
    },
    {
      referencia:
        'Vilches, Lorenzo. (1984). La lectura de la imagen. Buenos Aires, Argentina: Editorial Paidós.',
      link:
        'https://amsafe.org.ar/wp-content/uploads/Vilches-La_lectura_de_la_imagenpdf.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección general',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Fabio Andrés Tabla Rico',
          cargo: 'Experto temático',
          centro:
            'Centro agroempresarial Cundinamarca - Regional Cundinamarca.',
        },
        {
          nombre: 'Johana Melina Montoya Pirlachi',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro agroempresarial Cundinamarca - Regional Cundinamarca.',
        },
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro agroempresarial Cundinamarca - Regional Cundinamarca.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador web',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Rafael Bladimir Pérez Meriño',
          cargo: 'Desarrollador <em>fullstack<em>',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia MartinezTorres',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan CarlosCardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
