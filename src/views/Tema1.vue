<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conservación de los alimentos

    p.mb-5 Desde los inicios de la humanidad, el hombre se ha dado cuenta de que #[strong los alimentos son una fuente importante de nutrición,] ya que contienen #[strong carbohidratos, grasas, proteínas, vitaminas y minerales], sustancias necesarias para el buen desarrollo fisiológico del ser humano. Por lo tanto, desarrolló técnicas para suplir las necesidades alimentarias, enfrentándose al problema de que muchos de estos productos se deterioraban con facilidad. Así, comenzó a buscar técnicas o métodos de conservación que prolongaran la vida útil de los alimentos.  
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta(style="background-color: #ece4d8")
          .row.justify-content-center
            .col-lg-3.d-none.d-lg-block: img(src='@/assets/curso/temas/2.png', alt='')
            .col-lg-9
              .p-4
                p.mb-0 Para ello, empleó la sal, método muy utilizado por los antepasados para conservar las carnes, y el vinagre, que más adelante alcanzó una gran expansión en la industria química.
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Actualmente, es un hecho que más personas tienen una calidad de vida superior a la de tiempos pasados, por lo que son más exigentes con los productos que compran y consumen diariamente. Gracias a ello, los alimentos producidos en la actualidad son el resultado de la integración exitosa de los métodos más avanzados de la tecnología y la innovación para la producción de alimentos, combinados con las técnicas más modernas utilizadas en su almacenamiento y distribución.
      .col-lg-3.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/3.png', alt='')
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Sabor de un alimento
    p.mb-5(data-aos='fade-right') Cuando se tiene un resfriado, los alimentos no parecen tener sabor. Esto es una verdad a medias, ya que la sensación al comer tiene dos componentes esenciales: el sabor y el gusto. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta(style="background-color: #d5eddc")
          .row.justify-content-center
            .col-lg-4.d-none.d-lg-block: img.m-lg-0.m-4(src='@/assets/curso/temas/4.png', alt='')
            .col-lg-8
              .p-4.d-flex.align-items-center
                p.mb-0 Esto se puede demostrar con un sencillo experimento: cubriendo los ojos, tapando la nariz y probando dos helados. Se comprobará que bajo estas condiciones no se puede distinguir con facilidad entre un helado de vainilla y uno de chocolate.

    p.mb-5(data-aos='fade-right') En la naturaleza, solo existen cuatro sabores fundamentales:
    .row.justify-content-center.mb-4
      .col-lg-2.col-md-5.col-5
        img(src='@/assets/curso/temas/5A.png', alt='Imagen que presenta los 4 sabores fundamentales.').mb-2
        p.text-center #[strong Ácido]
      .col-lg-2.col-md-5.col-5
        img(src='@/assets/curso/temas/5B.png', alt='Imagen que presenta los 4 sabores fundamentales.').mb-2
        p.text-center #[strong Salado]
      .col-lg-2.col-md-5.col-5
        img(src='@/assets/curso/temas/5C.png', alt='Imagen que presenta los 4 sabores fundamentales.').mb-2
        p.text-center #[strong Amargo]
      .col-lg-2.col-md-5.col-5
        img(src='@/assets/curso/temas/5D.png', alt='Imagen que presenta los 4 sabores fundamentales.').mb-2
        p.text-center #[strong Dulce]
        
    p.mb-5(data-aos='fade-right') Es importante notar que algunas personas tienen dificultades para percibir el sabor de los alimentos, así como para distinguir los colores, lo que afecta en gran medida su percepción del gusto. El sentido del olor y del gusto son sentidos químicos, siendo #[strong el sentido del olfato 2,500 veces más sensible que el sentido del gusto.]
      br
      br
      |La clasificación común de los olores incluye:
    .row.justify-content-center.mb-3
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #acdbb9; border: 3px solid white ")
          .row.justify-content-center.mb-3
            .col-6: img(src='@/assets/curso/temas/6.svg', alt='')
          h5.text-center Olores a tierra
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #acdbb9; border: 3px solid white ")
          .row.justify-content-center.mb-3
            .col-6: img(src='@/assets/curso/temas/7.svg', alt='')
          h5.text-center Fruta
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #acdbb9; border: 3px solid white ")
          .row.justify-content-center.mb-3
            .col-6: img(src='@/assets/curso/temas/8.svg', alt='')
          h5.text-center Flores
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #acdbb9; border: 3px solid white ")
          .row.justify-content-center.mb-3
            .col-6: img(src='@/assets/curso/temas/9.svg', alt='')
          h5.text-center Pescado
    .row.justify-content-center.mb-3
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #acdbb9; border: 3px solid white ")
          .row.justify-content-center.mb-3
            .col-6: img(src='@/assets/curso/temas/10.svg', alt='')
          h5.text-center Especias
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #acdbb9; border: 3px solid white ")
          .row.justify-content-center.mb-3
            .col-6: img(src='@/assets/curso/temas/11.svg', alt='')
          h5.text-center Pútrido
      .col-lg-2.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #acdbb9; border: 3px solid white ")
          .row.justify-content-center.mb-3
            .col-6: img(src='@/assets/curso/temas/12.svg', alt='')
          h5.text-center Aceitoso
    p.mb-5(data-aos='fade-right') Con respecto al gusto, ciertas sustancias dan la sensación de temperatura:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.pb-4.overflow-hidden(style="background-color: #f9d0ac ")
          .p-2(style="background-color: #804209").mb-4
            h5.text-center.text-white.mb-0 Sensación de calor
          .row.justify-content-center.mb-3
            .col-3: img(src='@/assets/curso/temas/13.svg', alt='')
          p.mb-0.text-center Cuando se come pimienta.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.pb-4.overflow-hidden(style="background-color: #dbeceb ")
          .p-2(style="background-color: #275857").mb-4
            h5.text-center.text-white.mb-0 Sensación de calor
          .row.justify-content-center.mb-3
            .col-3: img(src='@/assets/curso/temas/14.svg', alt='')
          p.mb-0.text-center Cuando se come algo mentolado.
    p.mb-5(data-aos='fade-right') Estas percepciones adicionales contribuyen a la complejidad de la experiencia gustativa y olfativa, afectando cómo disfrutamos y percibimos los alimentos en diferentes situaciones.
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Color del alimento
    p.mb-5(data-aos='fade-right') De manera natural, los alimentos se presentan brillantes y coloreados. No existen pigmentos grises en los alimentos como frutas, verduras, hortalizas o carnes. Cuando se percibe este color en un comestible, indica un grado de descomposición, lo cual puede señalar un cambio en los valores nutritivos.
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta(style="background-color: #ece4d8")
          .row.justify-content-center
            .col-lg-5.d-none.d-lg-block: img(src='@/assets/curso/temas/15.png', alt='')
            .col-lg-7
              .p-4
                p.mb-0  Calentar, congelar o secar los alimentos cambia sus cualidades físicas y químicas. En algunos casos, estos cambios pueden ser deseables, como en el caso de la carne calentada o congelada, que se vuelve más tierna. Sin embargo, cada alimento tiene una apariencia y color asociados con la normalidad; cualquier cambio en sus características indica algo sospechoso.
    p.mb-5(data-aos='fade-right') Los cambios en el color de los alimentos pueden ser un indicio de variaciones en su valor nutritivo. Por ejemplo:
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.h-100(style="background-color: #ece4d8 ")
          img(src='@/assets/curso/temas/16.png', alt='')
          .p-4.w-100(style="background-color: #f3a762 ")
            h4.text-center.mb-0 Pescado
          .p-4
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.fa-xs(style="color: #31A854 ")
                p.mb-0  Ojos opacos y piel pegajosa.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.h-100(style="background-color: #ece4d8 ")
          img(src='@/assets/curso/temas/17.png', alt='')
          .p-4.w-100(style="background-color: #f3a762 ")
            h4.text-center.mb-0 Plátanos maduros
          .p-4
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.fa-xs(style="color: #31A854 ")
                p.mb-0 Cambios en el olor.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.overflow-hidden.h-100(style="background-color: #ece4d8 ")
          img(src='@/assets/curso/temas/18.png', alt='')
          .p-4.w-100(style="background-color: #f3a762 ")
            h4.text-center.mb-0 Vegetales 
          .p-4
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.fa-xs(style="color: #31A854 ")
                p.mb-0 Blandos, marchitos, sin brillo ni color.
    p.mb-5(data-aos='fade-right') Estas señales pueden alertar sobre la calidad y el estado de los alimentos, ayudando a identificar aquellos que no son aptos para el consumo.
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Los sentidos pueden fallar
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p El gusto y el olfato pueden fatigarse. Por ejemplo, si se come ajo, todo lo que se ingiera por un rato sabrá a ajo. También se puede identificar el sabor degradado de los alimentos, así como sus características físicas. En todos los casos, hay que evitar los tratamientos con calor excesivo, ya que esto genera una alteración en el alimento. El calor puede dañar ciertas cualidades del alimento; sin embargo, en algunos casos, como en la leche ultrapasteurizada, el calor es un factor que ayuda a conservar el producto por más tiempo a temperatura ambiente.
        h5 Efectos del calor en los alimentos
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-circle.fa-xs(style="color: #31A854 ")
            p.mb-0 El sabor de la carne de cerdo y de los frijoles se mejora con los periodos de calentamiento. Algunos de los sabores que más gustan pueden potenciarse lentamente durante el calentamiento.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/19.png', alt='')
    .titulo-tres: h3 Efectos del calor en las proteínas
    p.mb-5(data-aos='fade-right') El calentamiento de las proteínas puede tener varias consecuencias negativas:
    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Inactivación y alteración del sabor" :icono="require('@/assets/curso/temas/20.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h5 Inactivación y alteración del sabor

            p Las proteínas dañadas por el calor pierden su funcionalidad y su sabor cambia.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/21.png', alt='')
      .py-4.py-md-5(titulo="Coagulación" :icono="require('@/assets/curso/temas/20.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h5 Coagulación
            p La leche que se deja a temperatura ambiente y luego se calienta puede coagularse, mostrando que las proteínas se aglutinan.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/22.png', alt='')
      .py-4.py-md-5(titulo="Fermentación y cambio de pH" :icono="require('@/assets/curso/temas/20.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h5 Fermentación y cambio de pH
            p El calentamiento puede alterar el pH de los alimentos, generando fermentación.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/23.png', alt='')
      .py-4.py-md-5(titulo="Debilitamiento del valor nutritivo" :icono="require('@/assets/curso/temas/20.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-md-0
            h5 Debilitamiento del valor nutritivo
            p El calentamiento excesivo puede reducir el valor nutritivo de las proteínas.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/24.png', alt='')
    .titulo-tres: h3 Efectos del calor en grasas y aceites
    p.mb-5(data-aos='fade-right') El calor también afecta a las grasas y aceites de diferentes maneras:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--ocre")
          .p-4(titulo="Calidad de los aceites comestibles")
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Los aceites de alta calidad tienen un sabor dulce y una apariencia brillante.
          .p-4(titulo="Descomposición y sabor a rancio")
            p.mb-0 Las grasas y aceites descompuestos se detectan fácilmente por su sabor a rancio.
          .p-4(titulo="Estabilidad en ausencia de oxígeno")
            p.mb-0 Las grasas y aceites son relativamente estables a altas temperaturas sin oxígeno.
          .p-4(titulo="Descomposición en presencia de oxígeno")
            p.mb-0 La exposición al oxígeno acelera la descomposición de grasas y aceites, resultando en un sabor fuerte.
      .col-lg-6.col-7: img(src='@/assets/curso/temas/25.png', alt='')
            

        

















      
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
