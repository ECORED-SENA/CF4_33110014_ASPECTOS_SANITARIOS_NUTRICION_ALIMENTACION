<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Prácticas sanitarias y de salud
    p.mb-5(data-aos='fade-right') Los utensilios para el manejo de los alimentos pueden ser una fuente importante de propagación de contaminación. El lavado, la preparación y la refrigeración también son factores que pueden influir en la contaminación de los alimentos.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.color-hover.p-5.h-100
          .row.justify-content-center.mb-4
            .col-4: img(src='@/assets/curso/temas/26.svg', alt='')
          .d-flex.justify-content-center.mb-4
            .d-inline-block.p-1(style="background-color: #1a592c ")
              h5.text-white.mb-0.mx-4 Utensilios
          p.text-center Los utensilios de cocina deben ser lavados y desinfectados adecuadamente para evitar la propagación de microorganismos.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.color-hover.p-5.h-100
          .row.justify-content-center.mb-4
            .col-4: img(src='@/assets/curso/temas/27.svg', alt='')
          .d-flex.justify-content-center.mb-4
            .d-inline-block.p-1(style="background-color: #1a592c ")
              h5.text-white.mb-0.mx-4 Lavado y preparación 
          p.text-center La higiene durante el lavado y la preparación de los alimentos es crucial para prevenir la contaminación.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.color-hover.p-5.h-100
          .row.justify-content-center.mb-4
            .col-4: img(src='@/assets/curso/temas/28.svg', alt='')
          .d-flex.justify-content-center.mb-4
            .d-inline-block.p-1(style="background-color: #1a592c ")
              h5.text-white.mb-0.mx-4 Refrigeración
          p.text-center Mantener los alimentos a temperaturas adecuadas retrasa el crecimiento de bacterias y otros patógenos.
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta(style="background-color: #ece4d8")
          .row.justify-content-center
            .col-lg-4.d-none.d-lg-block: img.m-lg-0.m-4(src='@/assets/curso/temas/29.png', alt='')
            .col-lg-8
              .p-4
                h5 Agua y leche cruda 
                p.mb-0 El consumo de agua o leche cruda y de sus derivados no pasteurizados es perjudicial para la salud de los consumidores, porque pueden transmitir enfermedades de origen alimentario, como ya se explicó anteriormente.
    p.mb-5(data-aos='fade-right') El almacenamiento impropio y la falta de control de los roedores en los lugares donde se guardan los alimentos pueden provocar la aparición de enfermedades y parásitos.
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-hover.p-4.h-100
          .row.justify-content-center.mb-4
            .col-6: img(src='@/assets/curso/temas/30.svg', alt='')
          .d-flex.justify-content-center.mb-4
            .d-inline-block.p-1(style="background-color: #1a592c ")
              h5.text-white.mb-0.mx-4 Almacenamiento
          p.text-center Los alimentos deben ser almacenados en condiciones adecuadas para evitar la contaminación.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.color-hover.p-4.h-100
          .row.justify-content-center.mb-4
            .col-6: img(src='@/assets/curso/temas/31.svg', alt='')
          .d-flex.justify-content-center.mb-4
            .d-inline-block.p-1(style="background-color: #1a592c ")
              h5.text-white.mb-0.mx-4 Control de roedores
          p.text-center Es esencial mantener los lugares de almacenamiento libres de roedores para prevenir la propagación de enfermedades.
    p.mb-5(data-aos='fade-right') Cuando se come fuera de casa, se debe tener mucho cuidado con los alimentos que se compran y prestar atención a las prácticas de higiene que se utilicen en el lugar de compra.
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/32.png', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--ocre")
          .row.justify-content-center.align-items-center(titulo="Alimentos comprados")
            .col-lg-9.mb-4.mb-lg-0
              p.mb-0 Asegurarse de que los alimentos se conserven en frío y observar las prácticas de higiene en el lugar de compra.
            .col-lg-2.col-5
              figure
                img(src='@/assets/curso/temas/33.svg', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center(titulo="Alimentos sensibles")
            .col-lg-9.mb-4.mb-lg-0
              p.mb-0 Alimentos como ensaladas o flanes a base de leche requieren condiciones especiales de conservación debido a su susceptibilidad al deterioro.
            .col-lg-2.col-5
              figure
                img(src='@/assets/curso/temas/34.svg', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Siempre que sea posible, se deben consumir alimentos libres de cualquier contaminante patógeno.
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta(style="background-color: #ece4d8")
          .row.justify-content-center
            .col-lg-4.d-none.d-lg-block: img.m-lg-0.m-4(src='@/assets/curso/temas/35.png', alt='')
            .col-lg-8
              .p-4
                h5 Consumo seguro
                p.mb-0 Elegir alimentos que hayan sido manipulados y almacenados adecuadamente para minimizar el riesgo de contaminación. 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2  2.1  Precauciones en la manipulación
    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Se puede definir la manipulación de los alimentos como toda acción que implique un contacto físico con estos. Esto incluye tanto la manipulación directa de las personas sobre los alimentos mediante la utilización de sus propias manos, como el contacto que tienen los alimentos con los utensilios de cocina, tales como sartenes, ollas, platos, cubiertos, entre otros.
          br
          br
          |A continuación, se exponen algunas de las precauciones a tener en cuenta cuando se manipulan alimentos:
      .col-lg-2.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/36.svg', alt='')
    .fondo-pasos.p-5.mn.mb-5
      .tarjeta.tarjeta--gris.p-4.mb-5
        PasosB.color-acento-contenido
          .row.justify-content-center.align-items-center(titulo="Paso 1")
            .col-lg-6.mb-4.mb-lg-0
              p Es necesario lavar las manos con agua y jabón antes de entrar en contacto con los alimentos a preparar.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/37.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Paso 2")
            .col-lg-6.mb-4.mb-lg-0
              p Se recomienda lavar las manos varias veces durante el proceso de manipulación.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/38.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Paso 3")
            .col-lg-6.mb-4.mb-lg-0
              p Las superficies que entran en contacto con la comida, como las tablas de corte de verduras o de carne, deben estar desinfectadas.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/39.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Paso 4")
            .col-lg-6.mb-4.mb-lg-0
              p Hay que tener en cuenta que los productos de limpieza utilizan químicos como el cloro, por lo cual, una vez desinfectada una superficie, se requiere que esta sea lavada con agua limpia para remover los residuos químicos.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/40.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Paso 5")
            .col-lg-6.mb-4.mb-lg-0
              p Los utensilios de cocina también tienen que estar desinfectados.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/41.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Paso 6")
            .col-lg-6.mb-4.mb-lg-0
              p Las personas enfermas no deben manipular los alimentos, puesto que son propensas a transmitir gérmenes contaminantes.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/42.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Paso 7")
            .col-lg-6.mb-4.mb-lg-0
              p Si la persona que se dispone a manipular el alimento posee heridas visibles en sus manos, debe cubrirlas para evitar que estas entren en contacto con los alimentos.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/43.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Paso 8")
            .col-lg-6.mb-4.mb-lg-0
              p Es muy importante que la comida preparada sea servida en platos perfectamente limpios y desinfectados, que no deben tener restos de comida ni suciedad visible.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/44.png', alt='')
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Preparación de alimentos
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 La preparación de los alimentos está relacionada con los procedimientos efectuados para preparar una comida. Esto involucra tanto la preparación inicial de los ingredientes como los procesos de cocción y las demás acciones que se realicen para hacer de un alimento algo comestible. Las precauciones en esta etapa son muy importantes, ya que es aquí donde se eliminan la mayoría de los gérmenes presentes en los alimentos.
        .tarjeta.p-4(style="background-color: #fce7d5")
          p.mb-0 Es muy importante tener en cuenta un factor denominado el rango de temperaturas de peligro en los alimentos, este rango está establecido entre los 5 ºC y los 65 ºC. Cuando un alimento se encuentra a una temperatura dentro de este rango, es propenso a favorecer el desarrollo de microorganismos infecciosos. Por esta razón, la comida debe cocinarse a una temperatura superior a los 65 ºC, lo que ocasiona la muerte de los posibles parásitos y bacterias, y se debe almacenar a una temperatura inferior a los 5 ºC.
      .col-lg-3.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/45.png', alt='')
    p.mb-5(data-aos='fade-right') Algunas recomendaciones para la preparación de la comida son: 
    .tarjeta.p-5(style="background-color: #ece4d8 ").mb-4
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Preparación cercana al consumo
            p Los platos de comida deben ser preparados poco tiempo antes de su consumo, evitando que la comida sea ingerida más de dos horas después de su preparación.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/46.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Almacenamiento adecuado
            p Si se necesita preparar una comida para ser consumida en un plazo de tiempo mayor al recomendado, se debe almacenar en condiciones de refrigeración y protección adecuadas, preservando la comida a una temperatura inferior a 5 ºC y preferiblemente en un recipiente cerrado para evitar el contacto y desarrollo de gérmenes.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/47.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Uso de insumos de confianza
            p Los insumos de cocina que se utilicen deben ser de confianza; no es recomendable utilizar productos cuyo contenido y calidad no estén asegurados. Si hay presencia de gérmenes en dichos productos, es muy probable que terminen contaminando los alimentos.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/48.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Cocción completa
            p Los alimentos no pueden ser cocinados parcialmente; se debe asegurar que tanto la superficie como el interior estén bien cocidos.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/49.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Cuidado especial con carnes
            p Se debe tener especial cuidado al cocinar carnes como res, cerdo, pollo y pescado. Si no se cocinan correctamente, pueden quedar microorganismos patógenos causantes de enfermedades. La carne cruda representa un entorno muy favorable para los gérmenes, por lo que se debe cocinar a temperaturas superiores a los 65 ºC para destruir dichos organismos.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/50.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Limpieza de frutas y legumbres
            p Cuando se prepare un alimento que no tiene que ser cocinado, como las frutas o las legumbres, estas deben ser lavadas cuidadosamente con agua limpia para eliminar todos los gérmenes que contengan.
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/51.png', alt='Texto que describa la imagen')
    .tarjeta.p-4(style="background-color: #d5eddc")
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-0 Estas recomendaciones son esenciales para asegurar la seguridad alimentaria y prevenir enfermedades transmitidas por los alimentos.
        .col-lg-1.col-6: img(src='@/assets/curso/temas/52.svg', alt='')











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
