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
      tema: 'Conservación y manipulación segura de alimentos.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea la pregunta de cada ítem y seleccione la respuesta correcta.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes métodos fue utilizado por los antepasados para conservar la carne? ',
          imagen: require('@/assets/actividad/q1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Congelación.', esCorrecta: false },
            { id: 'b', texto: 'Vinagre.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Sal.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Pasteurización.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 2,
          texto: '¿Qué componente es más sensible en la percepción del sabor? ',
          imagen: require('@/assets/actividad/q2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gusto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Olor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Textura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Color.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes rangos de temperatura se considera peligroso para el crecimiento de microorganismos en los alimentos?',
          imagen: require('@/assets/actividad/q3.png'),
          opciones: [
            { id: 'a', texto: '0 ºC - 5 ºC.', esCorrecta: false },
            { id: 'b', texto: '5 ºC - 65 ºC.', esCorrecta: true },
            { id: 'c', texto: '65 ºC - 100 ºC.', esCorrecta: false },
            { id: 'd', texto: '-18 ºC - 0 ºC.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una práctica recomendada para evitar la contaminación cruzada en la cocina?',
          imagen: require('@/assets/actividad/q4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cocinar los alimentos parcialmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenar alimentos crudos y cocidos juntos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Lavar y desinfectar los utensilios de cocina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Consumir alimentos inmediatamente después de cocinarlos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué método de conservación utiliza la reducción de agua para inhibir el crecimiento microbiano?',
          imagen: require('@/assets/actividad/q1.png'),
          opciones: [
            { id: 'a', texto: 'Refrigeración.', esCorrecta: false },
            { id: 'b', texto: 'Congelación.', esCorrecta: false },
            { id: 'c', texto: 'Deshidratación.', esCorrecta: true },
            { id: 'd', texto: 'Pasteurización.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes no es un sabor fundamental reconocido en la naturaleza?',
          imagen: require('@/assets/actividad/q2.png'),
          opciones: [
            { id: 'a', texto: 'Agrio.', esCorrecta: false },
            { id: 'b', texto: 'Dulce.', esCorrecta: false },
            { id: 'c', texto: 'Umami.', esCorrecta: true },
            { id: 'd', texto: 'Salado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué factor biológico puede causar la alteración de un alimento?',
          imagen: require('@/assets/actividad/q3.png'),
          opciones: [
            { id: 'a', texto: 'Luz.', esCorrecta: false },
            { id: 'b', texto: 'Humedad.', esCorrecta: false },
            { id: 'c', texto: 'Bacterias.', esCorrecta: true },
            { id: 'd', texto: 'Oxígeno.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la distancia mínima recomendada entre los productos y las paredes de las cámaras de refrigeración?',
          imagen: require('@/assets/actividad/q4.png'),
          opciones: [
            { id: 'a', texto: '10 cm.', esCorrecta: false },
            { id: 'b', texto: '15 cm.', esCorrecta: true },
            { id: 'c', texto: '20 cm.', esCorrecta: false },
            { id: 'd', texto: '25 cm.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes acciones es importante realizar antes de manipular alimentos?',
          imagen: require('@/assets/actividad/q1.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Calentar los utensilios de cocina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lavar las manos con agua y jabón.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Desinfectar los alimentos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Probar el sabor de los ingredientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué temperatura mínima se recomienda para cocinar carnes para asegurar la eliminación de microorganismos patógenos? ',
          imagen: require('@/assets/actividad/q2.png'),
          opciones: [
            { id: 'a', texto: '55 ºC.', esCorrecta: false },
            { id: 'b', texto: '60 ºC.', esCorrecta: false },
            { id: 'c', texto: '65 ºC.', esCorrecta: true },
            { id: 'd', texto: '70 ºC.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Te felicito, has superado la actividad.',
      mensaje_final_reprobado:
        'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
