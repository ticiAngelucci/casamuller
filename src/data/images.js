import inicio from '../assets/entradaAfuera/inicio.jpg'
import mesasAfueraconsillasYParilla from '../assets/patio/mesasafueraconsillasyparilla.jpg'
import habitacion1 from '../assets/hab1/habitacion1.jpg'
import habitacion2DosCamasSingles from '../assets/hab2/habitacion2doscamassingles.jpg'
import habitacion32CamasSingles from '../assets/hab2/habitacion32camassingles.jpg'
import habitacion4 from '../assets/hab3/habitacion4.jpg'
import habitacion5 from '../assets/hab1/habitacion5.jpg'
import patio1 from '../assets/patio/patio1.jpg'
import patio2 from '../assets/patio/patio2.jpg'
import patio3 from '../assets/patio/patio3.jpg'
import patioConArcoDeFutbolYMontanaAtras from '../assets/patio/patioconarcodefutbolymontañaatras.jpg'
import cocinaYComedor from '../assets/cocina/cocinaycomedor.jpg'
import cocinaConBarraParaSentarse from '../assets/cocina/cocinaconbarraparasentarse.jpg'
import comedor from '../assets/comedor/comedor.jpg'
import comedor2 from '../assets/comedor/comedor2.jpg'
import juegoDeLiving from '../assets/patio/juegodeliving.jpg'
import salaDeEstarConSillonesVerdes from '../assets/salaEstar/saladeestarconsillonesverdes.jpg'
import salaDeEstarConBebidasEnLaMesa from '../assets/salaEstar/saladeestarconbebidasenlamesa.jpg'
import sillonConVistaAlPatio from '../assets/salaEstar/sillonconvistaalpatio.jpg'
import vistaCasaDesdeAfuera from '../assets/entradaAfuera/vistacasadesdeafuera.jpg'

const images = {
  hero: {
    main: {
      src: inicio,
      alt: 'Vista principal de Casa Müller desde el jardín',
    },
    collage: [
      {
        id: 'hero-collage-1',
        title: 'Patio con mesa, sillas y parrilla',
        src: mesasAfueraconsillasYParilla,
        alt: 'Patio con mesa, sillas y parrilla',
      },
      {
        id: 'hero-collage-2',
        title: 'Habitación principal',
        src: habitacion1,
        alt: 'Habitación principal con cama matrimonial',
      },
      {
        id: 'hero-collage-3',
        title: 'Habitación con dos camas singles',
        src: habitacion2DosCamasSingles,
        alt: 'Habitación con dos camas singles',
      },
    ],
  },
  gallery: [
    {
      id: 'gallery-1',
      title: 'Vista principal de Casa Müller',
      tag: 'Exterior',
      alt: 'Vista principal de Casa Müller desde el jardín',
      src: vistaCasaDesdeAfuera,
    },
    {
      id: 'gallery-2',
      title: 'Ingreso desde afuera',
      tag: 'Exterior',
      alt: 'Ingreso a Casa Müller desde afuera',
      src: inicio,
    },
    {
      id: 'gallery-3',
      title: 'Patio',
      tag: 'Patio',
      alt: 'Patio con mesa, sillas y parrilla',
      src: mesasAfueraconsillasYParilla,
    },
    {
      id: 'gallery-4',
      title: 'Patio',
      tag: 'Patio',
      alt: 'Patio uno',
      src: patio1,
    },
    {
      id: 'gallery-5',
      title: 'Patio',
      tag: 'Patio',
      alt: 'Patio dos',
      src: patio2,
    },
    {
      id: 'gallery-6',
      title: 'Patio',
      tag: 'Patio',
      alt: 'Patio tres',
      src: patio3,
    },
    {
      id: 'gallery-7',
      title: 'Patio',
      tag: 'Patio',
      alt: 'Patio con arco de fútbol y montaña atrás',
      src: patioConArcoDeFutbolYMontanaAtras,
    },
    {
      id: 'gallery-8',
      title: 'Comedor',
      tag: 'Comedor',
      alt: 'Cocina y comedor integrados',
      src: cocinaYComedor,
    },
    {
      id: 'gallery-9',
      title: 'Cocina con barra',
      tag: 'Cocina',
      alt: 'Cocina con barra para sentarse',
      src: cocinaConBarraParaSentarse,
    },
    {
      id: 'gallery-10',
      title: 'Comedor',
      tag: 'Comedor',
      alt: 'Comedor con mesa principal',
      src: comedor,
    },
    {
      id: 'gallery-11',
      title: 'Comedor',
      tag: 'Comedor',
      alt: 'Segunda vista del comedor',
      src: comedor2,
    },
    {
      id: 'gallery-12',
      title: 'Juego de living exterior',
      tag: 'Patio',
      alt: 'Juego de living de la casa',
      src: juegoDeLiving,
    },
    {
      id: 'gallery-13',
      title: 'Sala de estar',
      tag: 'Living',
      alt: 'Sala de estar con sillones verdes',
      src: salaDeEstarConSillonesVerdes,
    },
    {
      id: 'gallery-14',
      title: 'Sala de estar',
      tag: 'Living',
      alt: 'Sala de estar con bebidas en la mesa',
      src: salaDeEstarConBebidasEnLaMesa,
    },
    {
      id: 'gallery-15',
      title: 'Sala de estar',
      tag: 'Living',
      alt: 'Sillón con vista al patio',
      src: sillonConVistaAlPatio,
    },
    {
      id: 'gallery-16',
      title: 'Habitación principal',
      tag: 'Habitación',
      alt: 'Habitación principal con cama matrimonial',
      src: habitacion1,
    },
    {
      id: 'gallery-17',
      title: 'Habitación con dos camas individuales',
      tag: 'Habitación',
      alt: 'Habitación con dos camas singles',
      src: habitacion2DosCamasSingles,
    },
    {
      id: 'gallery-18',
      title: 'Habitación con dos camas individuales',
      tag: 'Habitación',
      alt: 'Habitación con dos camas individuales',
      src: habitacion32CamasSingles,
    },
    {
      id: 'gallery-19',
      title: 'Habitación',
      tag: 'Habitación',
      alt: 'Habitación cuatro',
      src: habitacion4,
    },
    {
      id: 'gallery-20',
      title: 'Habitación',
      tag: 'Habitación',
      alt: 'Habitación cinco',
      src: habitacion5,
    },
  ],
  experience: [
    {
      id: 'experience-1',
      title: 'Patio con arco y montaña',
      tag: 'Naturaleza',
      alt: 'Patio con arco de fútbol y montaña atrás',
      description: 'Vistas abiertas, jardín y aire de Mendoza para una estadía con ritmo tranquilo.',
      src: patioConArcoDeFutbolYMontanaAtras,
    },
    {
      id: 'experience-2',
      title: 'Patio dos',
      tag: 'Descanso',
      alt: 'Patio dos de Casa Müller',
      description: 'Espacios exteriores listos para descansar, compartir una copa y disfrutar el clima.',
      src: patio2,
    },
    {
      id: 'experience-3',
      title: 'Sala de estar con sillones verdes',
      tag: 'Comodidad',
      alt: 'Sala de estar con sillones verdes',
      description: 'Interiores cálidos para volver de una bodega o una salida y sentirse en casa.',
      src: salaDeEstarConSillonesVerdes,
    },
  ],
}

export default images
