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
      tema: 'Manejo de los residuos sólidos en la producción avícola.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
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
          texto: 'Texto de la tercera pregunta 3',
          imagen: require('@/assets/actividad/q3.png'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: false },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto: 'Respuesta incorrecta. ¡Inténtalo de nuevo!',
        },
        {
          id: 4,
          texto: 'Texto de la cuarta pregunta 4',
          imagen: require('@/assets/actividad/q4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: true },
            { id: 'b', texto: 'Opción B', esCorrecta: false },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 5,
          texto: 'Texto de la quinta pregunta 5',
          imagen: require('@/assets/actividad/q1.png'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: true },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto: 'Texto de la quinta pregunta 6',
          imagen: require('@/assets/actividad/q2.png'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: true },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto: 'Texto de la quinta pregunta 7',
          imagen: require('@/assets/actividad/q3.png'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: true },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto: 'Texto de la quinta pregunta 8',
          imagen: require('@/assets/actividad/q4.png'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: true },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto: 'Texto de la quinta pregunta 9',
          imagen: require('@/assets/actividad/q1.png'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: true },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto: 'Texto de la quinta pregunta 10',
          imagen: require('@/assets/actividad/q2.png'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: true },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Has completado el cuestionario exitosamente! Felicidades.',
      mensaje_final_reprobado:
        'No has alcanzado la puntuación mínima para aprobar. Te animamos a intentarlo de nuevo.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
