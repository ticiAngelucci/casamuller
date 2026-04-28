import inicio from '../assets/inicio.jpg'
import mesasAfueraconsillasYParilla from '../assets/mesasafueraconsillasyparilla.jpg'
import habitacion1 from '../assets/habitacion1.jpg'
import habitacion2DosCamasSingles from '../assets/habitacion2doscamassingles.jpg'
import habitacion32CamasSingles from '../assets/habitacion32camassingles.jpg'
import habitacion4 from '../assets/habitacion4.jpg'
import habitacion5 from '../assets/habitacion5.jpg'
import patio1 from '../assets/patio1.jpg'
import patio2 from '../assets/patio2.jpg'
import patio3 from '../assets/patio3.jpg'
import patioConArcoDeFutbolYMontanaAtras from '../assets/patioconarcodefutbolymontañaatras.jpg'
import cocinaYComedor from '../assets/cocinaycomedor.jpg'
import cocinaConBarraParaSentarse from '../assets/cocinaconbarraparasentarse.jpg'
import comedor from '../assets/comedor.jpg'
import comedor2 from '../assets/comedor2.jpg'
import juegoDeLiving from '../assets/juegodeliving.jpg'
import salaDeEstarConSillonesVerdes from '../assets/saladeestarconsillonesverdes.jpg'
import salaDeEstarConBebidasEnLaMesa from '../assets/saladeestarconbebidasenlamesa.jpg'
import sillonConVistaAlPatio from '../assets/sillonconvistaalpatio.jpg'
import vistaCasaDesdeAfuera from '../assets/vistacasadesdeafuera.jpg'

const images = {
  hero: {
    main: {
      src: inicio,
      alt: 'Vista principal de Casa Muller desde el jardín',
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
      title: 'Vista principal de la casa',
      tag: 'Exterior',
      alt: 'Vista principal de Casa Muller desde el jardín',
      src: vistaCasaDesdeAfuera,
    },
    {
      id: 'gallery-2',
      title: 'Patio con mesa, sillas y parrilla',
      tag: 'Patio',
      alt: 'Patio con mesa, sillas y parrilla',
      src: mesasAfueraconsillasYParilla,
    },
    {
      id: 'gallery-3',
      title: 'Cocina y comedor',
      tag: 'Interior',
      alt: 'Cocina y comedor integrados',
      src: cocinaYComedor,
    },
    {
      id: 'gallery-4',
      title: 'Cocina con barra para sentarse',
      tag: 'Cocina',
      alt: 'Cocina con barra para sentarse',
      src: cocinaConBarraParaSentarse,
    },
    {
      id: 'gallery-5',
      title: 'Comedor',
      tag: 'Comedor',
      alt: 'Comedor con mesa principal',
      src: comedor,
    },
    {
      id: 'gallery-6',
      title: 'Comedor dos',
      tag: 'Comedor',
      alt: 'Segunda vista del comedor',
      src: comedor2,
    },
    {
      id: 'gallery-7',
      title: 'Juego de living',
      tag: 'Living',
      alt: 'Juego de living de la casa',
      src: juegoDeLiving,
    },
    {
      id: 'gallery-8',
      title: 'Sala de estar con sillones verdes',
      tag: 'Living',
      alt: 'Sala de estar con sillones verdes',
      src: salaDeEstarConSillonesVerdes,
    },
    {
      id: 'gallery-9',
      title: 'Sala de estar con bebidas en la mesa',
      tag: 'Living',
      alt: 'Sala de estar con bebidas en la mesa',
      src: salaDeEstarConBebidasEnLaMesa,
    },
    {
      id: 'gallery-10',
      title: 'Sillón con vista al patio',
      tag: 'Descanso',
      alt: 'Sillón con vista al patio',
      src: sillonConVistaAlPatio,
    },
    {
      id: 'gallery-11',
      title: 'Habitación principal',
      tag: 'Habitación',
      alt: 'Habitación principal con cama matrimonial',
      src: habitacion1,
    },
    {
      id: 'gallery-12',
      title: 'Habitación con dos camas singles',
      tag: 'Habitación',
      alt: 'Habitación con dos camas singles',
      src: habitacion2DosCamasSingles,
    },
    {
      id: 'gallery-13',
      title: 'Habitación con dos camas individuales',
      tag: 'Habitación',
      alt: 'Habitación con dos camas individuales',
      src: habitacion32CamasSingles,
    },
    {
      id: 'gallery-14',
      title: 'Habitación cuatro',
      tag: 'Habitación',
      alt: 'Habitación cuatro',
      src: habitacion4,
    },
    {
      id: 'gallery-15',
      title: 'Habitación cinco',
      tag: 'Habitación',
      alt: 'Habitación cinco',
      src: habitacion5,
    },
    {
      id: 'gallery-16',
      title: 'Patio uno',
      tag: 'Exterior',
      alt: 'Patio uno',
      src: patio1,
    },
    {
      id: 'gallery-17',
      title: 'Patio dos',
      tag: 'Exterior',
      alt: 'Patio dos',
      src: patio2,
    },
    {
      id: 'gallery-18',
      title: 'Patio tres',
      tag: 'Exterior',
      alt: 'Patio tres',
      src: patio3,
    },
    {
      id: 'gallery-19',
      title: 'Patio con arco de fútbol y montaña atrás',
      tag: 'Paisaje',
      alt: 'Patio con arco de fútbol y montaña atrás',
      src: patioConArcoDeFutbolYMontanaAtras,
    },
  ],
  experience: [
    {
      id: 'experience-1',
      title: 'Patio con arco de fútbol y montaña atrás',
      tag: 'Naturaleza',
      alt: 'Patio con arco de fútbol y montaña atrás',
      description: 'Vistas abiertas, jardín y aire de Mendoza para una estadía con ritmo tranquilo.',
      src: patioConArcoDeFutbolYMontanaAtras,
    },
    {
      id: 'experience-2',
      title: 'Patio dos',
      tag: 'Descanso',
      alt: 'Patio dos de Casa Muller',
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
