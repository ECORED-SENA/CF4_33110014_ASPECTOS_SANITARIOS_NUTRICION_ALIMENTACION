<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Condiciones de almacenamiento
    p.mb-5(data-aos='fade-right') La forma en que se almacena el alimento influye de manera significativa en la probabilidad de que este sea infectado por microorganismos patógenos. Se requiere realizar este procedimiento con precaución y seguir las recomendaciones para evitar que los alimentos almacenados se contaminen:
    .fondo-pasos.mn.p-5
      .tarjeta.tarjeta--gris.p-4.mb-5
        LineaTiempoC.color-acento-contenido
          .row.justify-content-center(titulo="Uso de recipientes cerrados")
            .col-lg-7.mb-4.mb-md-0
              h5 Uso de recipientes cerrados
              p Los alimentos deben ser almacenados en recipientes cerrados; en lo posible, utilizar los de tipo hermético para evitar el contacto con el ambiente que los rodea y con esto el ingreso de microbios.
            .col-lg-4: img(src='@/assets/curso/temas/45.png', alt='')
          .row.justify-content-center(titulo="Almacenamiento refrigerado")
            .col-lg-7.mb-4.mb-md-0
              h5 Almacenamiento refrigerado
              p Los alimentos como vegetales, carnes y otros requieren de almacenamiento refrigerado; lo ideal es mantenerlos a una temperatura inferior a los 5 ºC.
            .col-lg-4: img(src='@/assets/curso/temas/46.png', alt='')
          .row.justify-content-center(titulo="Separación de alimentos cocidos y crudos")
            .col-lg-7.mb-4.mb-md-0
              h5 Separación de alimentos cocidos y crudos
              p Los alimentos ya cocinados deben almacenarse separados de los alimentos crudos para evitar la contaminación cruzada, que consiste en el paso de microbios desde un alimento crudo a uno ya cocinado.
            .col-lg-4: img(src='@/assets/curso/temas/47.png', alt='')
          .row.justify-content-center(titulo="Mantenimiento de temperatura caliente")
            .col-lg-7.mb-4.mb-md-0
              h5 Mantenimiento de temperatura caliente
              p Cuando se va a almacenar un alimento cocinado que requiere permanecer caliente, se procura mantenerlo a una temperatura superior a los 65 ºC.
            .col-lg-4: img(src='@/assets/curso/temas/48.png', alt='')
          .row.justify-content-center(titulo="Evitar almacenamiento prolongado")
            .col-lg-7.mb-4.mb-md-0
              h5 Evitar almacenamiento prolongado
              p No se recomienda almacenar la comida durante largos periodos de tiempo. Deben vigilarse siempre las fechas de vencimiento de los alimentos perecederos.
            .col-lg-4: img(src='@/assets/curso/temas/49-1.png', alt='')
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Conservación de frutas, hortalizas y carnes
    p.mb-5(data-aos='fade-right') Conservar un alimento es preservarlo de agentes químicos, físicos y biológicos por medio de diferentes métodos que mantengan sus propiedades nutricionales y organolépticas.
      br
      br
      |Factores capaces de provocar alteración en un alimento:
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-hover.p-5.h-100
          .row.justify-content-center.mb-4
            .col-5: img(src='@/assets/curso/temas/70.svg', alt='')
          h5 Factores biológicos 
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Bacterias 
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Hongos
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-hover.p-5.h-100
          .row.justify-content-center.mb-4
            .col-5: img(src='@/assets/curso/temas/71.svg', alt='')
          h5 Factores físicos 
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Luz 
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Humedad
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Temperatura 
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-hover.p-5.h-100
          .row.justify-content-center.mb-4
            .col-5: img(src='@/assets/curso/temas/72.svg', alt='')
          h5 Factores químicos 
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Agua
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Oxígeno
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 Los métodos de #[b poscosecha y precosecha] ayudan a conservar la fisiología de las frutas, manteniendo en proporción adecuada los componentes que estas aportan: #[b vitaminas y minerales.] A medida que se deterioran, las frutas y las hortalizas pierden su valor nutricional. 
        .tarjeta(style="background-color: #ece4d8").mb-4
          .row.justify-content-center
            .col-lg-3.d-none.d-lg-block: img.m-lg-0.m-4(src='@/assets/curso/temas/74.png', alt='')
            .col-lg-9
              .p-4.d-flex.align-items-center
                p.mb-0 Un ejemplo de esto es la vitamina C, que es hidrosoluble y termosensible; a medida que aumenta el calor y la fruta respira, disminuye la concentración de esta vitamina.
        .tarjeta.p-4(style="background-color: #d5eddc")
          p.mb-0 Uno de los métodos para disminuir el calor de respiración de las frutas es la operación de preenfriamiento, que consiste en que la fruta inmediatamente después de ser cosechada se someta a un hidroenfriamiento a baja temperatura o con hielo, descendiendo la actividad respiratoria del fruto. Esto se debe realizar por un periodo corto de tiempo, siendo completado con los mecanismos de refrigeración, con o sin atmósferas modificadas.
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/75.svg', alt='')
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Almacenamiento en frío
    p.mb-5(data-aos='fade-right') Los productos perecederos deben conservarse en frío para retrasar su proceso de maduración y la proliferación bacteriana que los deteriora en poco tiempo. Algunos de los productos que se almacenan en frío incluyen #[b carnes, productos de pesca, frutas, verduras y derivados lácteos.]
      br
      br
      |Los procedimientos de almacenamiento son:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--ocre")
      .row.justify-content-center.align-items-center(titulo="Cámaras de refrigeración")
        .col-lg-9.mb-4.mb-lg-0
          p.mb-0 Los productos deben almacenarse en cámaras de refrigeración donde se guarden productos de la misma naturaleza. Por ejemplo, los vegetales no deben mezclarse con carnes o productos lácteos para evitar la contaminación cruzada.
        .col-lg-1.col-5
          figure
            img(src='@/assets/curso/temas/76.svg', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Distancias recomendadas")
        .col-lg-10.mb-4.mb-lg-0
          p.mb-0 Existen parámetros específicos para la colocación de los productos  dentro de las cámaras:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Distancia del producto a la pared: 15 cm.
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Distancia del producto al techo: 50 cm.
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Distancia del producto al piso: 10 cm.
        .col-lg-1.col-5
          figure
            img(src='@/assets/curso/temas/77.svg', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Frutas y vegetales")
        .col-lg-10.mb-4.mb-lg-0
          p.mb-0 Las frutas frescas y los vegetales vivos mantienen sus procesos de vida durante el almacenamiento en frío. Estos alimentos oxidan el azúcar y producen calor, lo cual nulifica los beneficios de la refrigeración. Por lo tanto, la capacidad de refrigeración debe ser mayor para disminuir la respiración y el calor producido.
            br
            br
            |El almacenamiento en cámaras de frío para frutas y verduras debe estar entre 8 ºC y 12 ºC. Estas temperaturas detienen el proceso de maduración, permitiendo una conservación a corto y mediano plazo.
        .col-lg-1.col-5
          figure
            img(src='@/assets/curso/temas/78.svg', alt='Texto que describa la imagen')
    .titulo-tres: h3 Métodos de conservación de la carne
    p.mb-5(data-aos='fade-right') El calor de los animales recién sacrificados debe ser eliminado rápidamente para evitar la descomposición. El periodo recomendado para eliminar este calor es menor a 24 horas. La canal (así se le llama después de sacrificado el animal) es llevada a refrigeración, que es el método más usado para conservar la carne.
      br
      br
      | Funciones de la refrigeración:
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-hover.p-5.h-100
          .row.justify-content-center.mb-4
            .col-5: img(src='@/assets/curso/temas/79.svg', alt='')
          h5.text-center Retrasar el crecimiento de microorganismos.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-hover.p-5.h-100
          .row.justify-content-center.mb-4
            .col-5: img(src='@/assets/curso/temas/80.svg', alt='')
          h5.text-center Retardar las reacciones químicas.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-hover.p-5.h-100
          .row.justify-content-center.mb-4
            .col-5: img(src='@/assets/curso/temas/81.svg', alt='')
          h5.text-center Retardar las reacciones enzimáticas.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 La técnica de refrigeración debe aplicarse lo más pronto posible desde el momento en que se obtienen las canales. Esto significa que esta operación debe realizarse desde el lugar donde fue sacrificado el animal y en el transporte para llegar a los lugares donde va a ser comercializada.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/82.svg', alt='')
    .titulo-tres: h3 Duración de almacenamiento en refrigeración
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 El almacenamiento en refrigeración de la carne se limita generalmente a periodos de tiempos cortos. Los principales factores que influyen en la vida útil de la carne almacenada bajo refrigeración son la carga microbiana original, las condiciones de temperatura y la humedad en almacenamiento.
        .tarjeta.p-4(style="background-color: #d5eddc")
          p.mb-0 El periodo de tiempo que el consumidor puede mantener la carne en refrigeración en el hogar se determina por las condiciones de manejo previo. Sin embargo, la carne fresca en la casa debe consumirse en condiciones ideales de refrigeración durante los cuatro días siguientes a su compra.
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/83.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-11
        div(style="background-color: #ece4d8 ")
          .row.justify-content-center.mb-5
            .col-lg-5.col-7.mb-lg-0.mb-3: img.ml-lg(src='@/assets/curso/temas/84.png', alt='')
            .col-lg-7
              .p-3
                h5 Duración de la carne en almacén: 
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-angle-right-circle
                    p.mb-0 Vaca: Hasta tres semanas
                  li.d-flex
                    i.fas.fa-angle-right-circle
                    p.mb-0 Ternera: 1 - 3 semanas
                  li.d-flex
                    i.fas.fa-angle-right-circle
                    p.mb-0 Cordero: 10 - 15 días
                  li.d-flex
                    i.fas.fa-angle-right-circle
                    p.mb-0 Cerdo: 1 - 2 semanas
                  li.d-flex
                    i.fas.fa-angle-right-circle
                    p.mb-0 Despojos comestibles: 7 días
    .titulo-tres: h3 Congelación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 La congelación constituye un excelente método de conservación de la carne, ya que provoca menos cambios perjudiciales en las propiedades cualitativas y organolépticas de la carne. Ninguno de los nutrientes de la carne se destruye y se hace digestible bajo la acción de la congelación.
          br
          br
          |Los beneficios de la congelación son: 
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/85.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.h-100(style="background-color: #fce7d5 ")
          img(src='@/assets/curso/temas/86.png', alt='')
          .d-flex.justify-content-center.w-100
            .p-2.d-inline-block(style="background-color: #31a854; margin-top: -10px")
              h5.text-center.mb-0.text-white Conservación permanente
          .p-4
            p.text-center Permite mantener la carne por periodos largos sin cambios significativos.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.h-100(style="background-color: #fce7d5 ")
          img(src='@/assets/curso/temas/87.png', alt='')
          .d-flex.justify-content-center.w-100
            .p-2.d-inline-block(style="background-color: #31a854; margin-top: -10px")
              h5.text-center.mb-0.text-white Temperaturas de congelación
          .p-4
            p.text-center Se emplean temperaturas por debajo del punto de congelación, generalmente inferiores a -10 ºC, para detener la actividad microbiana y enzimática.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.h-100(style="background-color: #fce7d5 ")
          img(src='@/assets/curso/temas/88.png', alt='')
          .d-flex.justify-content-center.w-100
            .p-2.d-inline-block(style="background-color: #31a854; margin-top: -10px")
              h5.text-center.mb-0.text-white Normatividad colombiana
          .p-4
            p.text-center Exige que las carnes congeladas permanezcan a -18 ºC.
    p.mb-5(data-aos='fade-right') Consideraciones para la congelación: 
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.h-100(style="background-color: #b4dabe ")
          img(src='@/assets/curso/temas/89.png', alt='')
          .d-flex.justify-content-center.w-100
            .p-2.d-inline-block(style="background-color: #31a854; margin-top: -10px")
              h5.text-center.mb-0.text-white Manipulación adecuada
          .p-4
            p.text-center La carne que va a ser congelada debe manipularse de la misma manera que la carne refrigerada, especialmente si se va a almacenar durante varios meses.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.h-100(style="background-color: #b4dabe ")
          img(src='@/assets/curso/temas/90.png', alt='')
          .d-flex.justify-content-center.w-100
            .p-2.d-inline-block(style="background-color: #31a854; margin-top: -10px")
              h5.text-center.mb-0.text-white Cambios durante el almacenamiento
          .p-4
            p.text-center Pueden ocurrir cambios como la aparición de rancidez y decoloración, aunque estos se minimizan a temperaturas inferiores a -10 ºC.
    .titulo-tres: h3 Deshidratación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 La desecación de la carne al sol o sobre el fuego data de tiempos prehistóricos. El efecto conservador de la deshidratación se debe a la reducción de agua (AW) a un nivel tan bajo que se inhibe el crecimiento microbiano, por lo que tales productos son estables sin necesidad de refrigeración.
          br
          br
          |Métodos de deshidratación:
      .col-lg-2.col-5: img(src='@/assets/curso/temas/91.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-hover.p-5.h-100
          .row.justify-content-center.mb-4
            .col-7: img(src='@/assets/curso/temas/92.svg', alt='')
          h5.text-center Desecación en aire caliente

          p.text-center Utiliza corrientes de aire caliente para reducir el contenido de agua.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-hover.p-5.h-100
          .row.justify-content-center.mb-4
            .col-7: img(src='@/assets/curso/temas/93.svg', alt='')
          h5.text-center Liofilización
          p.text-center Consiste en la congelación del producto y su posterior deshidratación mediante sublimación.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.p-4(style="background-color: #fdf2e9")
          .row.justify-content-center.align-items-center
            .col-1.mb-lg-0.mb-3: img(src='@/assets/curso/temas/94.svg', alt='')
            .col-lg-11
              p.mb-0 Estos métodos permiten conservar la carne de manera eficiente, inhibiendo el crecimiento microbiano y eliminando la necesidad de refrigeración.




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
