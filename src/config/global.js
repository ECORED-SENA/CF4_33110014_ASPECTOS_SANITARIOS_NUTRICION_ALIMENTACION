export default {
  global: {
    componenteFormativo: 'Conservación y manipulación de los alimentos',
    descripcionCurso:
      'Este componente formativo abarca la conservación y manipulación de alimentos, incluyendo prácticas sanitarias, precauciones en la preparación y almacenamiento, y métodos de conservación para frutas, verduras y carnes. Está diseñado para que los aprendices comprendan estos aspectos y puedan realizar actividades de manera segura y efectiva, garantizando la calidad y seguridad alimentaria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
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
        titulo: 'Conservación de los alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sabor de un alimento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Color del alimento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Los sentidos pueden fallar',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Prácticas sanitarias y de salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Precauciones en la manipulación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Preparación de alimentos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Condiciones de almacenamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conservación de frutas, hortalizas y carnes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Almacenamiento en frío',
            hash: 't_3_2',
          },
        ],
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Conservación de los alimentos',
      referencia:
        'Organización Panamericana de la Salud. (2014). <i>Manual para manipuladores de alimentos.</i> Organización Panamericana de la Salud.',
      tipo: 'Documento',
      link:
        'https://www3.paho.org/hq/dmdocuments/manual-manipuladores-alimentos-2014.pdf',
    },
    {
      tema: 'Color del alimento',
      referencia:
        'Mundo Agroindustrial (2016). Control de calidad de alimentos - Garantía para el consumidor. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OMa_7rCqLlc',
    },
    {
      tema: 'Prácticas sanitarias y de salud',
      referencia:
        'Javier Vega (2021). Normas de higiene para el personal manipulador de alimentos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/aoOh7wqNpDM?feature=shared',
    },
    {
      tema: 'Precauciones en la manipulación',
      referencia:
        'Alimentos Cloud (s.f.). Manipulación segura de alimentos. Curso de Manipulador de Alimentos. [Podcast]. YouTube.',
      tipo: 'Pódcast',
      link: 'https://music.youtube.com/watch?v=6FFMBqzVw30&feature=shared',
    },
    {
      tema: 'Preparación de alimentos',
      referencia:
        'SENA. (2012). Higiene y Manipulación de Alimentos Cap 04.mp4 [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aeqWCTYT-qk&ab_channel=SENA',
    },
    {
      tema: 'Condiciones de almacenamiento',
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). <i>Guía de inocuidad de alimentos en establecimientos de almacenamiento.</i>',
      tipo: 'Guía',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SNA/Guia-inocuidad-alimentos-establecimientos-almacenamiento.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Conservación',
      significado:
        'conjunto de métodos y prácticas utilizadas para mantener la calidad y seguridad de los alimentos.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'transferencia de microorganismos perjudiciales de un alimento a otro, generalmente de crudo a cocido.',
    },
    {
      termino: 'Deshidratación',
      significado:
        'método de conservación que elimina el agua de los alimentos para inhibir el crecimiento de microorganismos.',
    },
    {
      termino: 'Fermentación',
      significado:
        'proceso químico en el cual microorganismos convierten azúcares en alcohol o ácidos, preservando ciertos alimentos.',
    },
    {
      termino: 'Higiene',
      significado:
        'prácticas de limpieza y desinfección para prevenir la contaminación de alimentos.',
    },
    {
      termino: 'Liofilización',
      significado:
        'técnica de deshidratación que congela los alimentos y luego reduce la presión para eliminar el agua por sublimación.',
    },
    {
      termino: 'Organolépticas',
      significado:
        'características de los alimentos que afectan los sentidos, como sabor, color, olor y textura.',
    },
    {
      termino: 'Pasteurización',
      significado:
        'proceso de calentamiento de alimentos a una temperatura específica para eliminar patógenos.',
    },
    {
      termino: 'Preenfriamiento',
      significado:
        'técnica de enfriamiento rápido de frutas y verduras después de la cosecha para prolongar su vida útil.',
    },
    {
      termino: 'Rango de temperaturas de peligro',
      significado:
        'intervalo de temperatura en el cual los microorganismos pueden proliferar rápidamente (5 ºC A 65 ºC).',
    },
  ],
  referencias: [
    {
      referencia:
        'Bravo, F. (2004). Manejo higiénico de los alimentos. México. Limusa.',
    },
    {
      referencia:
        'Clayton, K. (s.f.).  Métodos para la conservación de alimentos. Revista "Emprendimientos alimentarios". University Purdue.',
      link: 'https://www.extension.purdue.edu/extmedia/FS/FS-15-S-W.pdf',
    },
    {
      referencia:
        'Desrosier, N. (1991). The technology of food preservation. New York: The Avi Publishing Company, Inc.',
    },
    {
      referencia:
        'Díaz Torres, R. (2009). Conservación de los alimentos: ( ed.). Editorial Félix Varela.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/71247',
    },
    {
      referencia:
        'Editorial Eidec. (2020). La inocuidad de los alimentos y su aporte a la seguridad alimentaria.',
      link:
        'https://www.editorialeidec.com/wp-content/uploads/2020/11/Libro-la-inocuidad-de-alimentos-y-su-aporte-a-la-seguridad-alimentaria.pdf',
    },
    {
      referencia:
        'FAO. (2013). Almacenamiento no refrigerado o refrigerado de la carne fresca y los subproductos comestibles.',
      link: 'http://www.fao.org/docrep/004/t0566s/t0566s12.htm',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2002). Estrategia global de la OMS para la inocuidad de los alimentos: alimentos más sanos para una salud mejor. Ginebra: Departamento de Inocuidad de los Alimentos.',
      link:
        'https://cdn.who.int/media/docs/default-source/food-safety/campaign-guide-es.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
