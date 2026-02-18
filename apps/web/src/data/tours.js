
export const tours = [
  {
    id: 1,
    name: "Ruta del Pancoger",
    municipality: "La Vega",
    price: 85000,
    duration: "6 horas",
    difficulty: "Baja",
    minPeople: 2,
    maxPeople: 15,
    description: "Descubre la tradición agrícola visitando fincas productoras de pancoger. Aprende sobre cultivos tradicionales, participa en la cosecha y disfruta de un almuerzo campesino preparado con ingredientes frescos de la huerta.",
    images: [
      "https://images.unsplash.com/photo-1449067833891-3399f3e9f1f4",
      "https://images.unsplash.com/photo-1540366693604-81565b065bd8",
      "https://images.unsplash.com/photo-1694342934228-900080027aa2",
      "https://images.unsplash.com/photo-1500406634624-6b8de04b6c9f"
    ],
    itinerary: {
      morning: [
        "8:00 AM - Encuentro en el parque principal",
        "8:30 AM - Traslado a la primera finca",
        "9:00 AM - Bienvenida con agua de panela y amasijos",
        "10:00 AM - Recorrido por cultivos y siembra"
      ],
      afternoon: [
        "12:30 PM - Almuerzo campesino tradicional",
        "2:00 PM - Taller de transformación de alimentos",
        "3:30 PM - Degustación de productos finales"
      ],
      evening: [
        "4:30 PM - Regreso al casco urbano",
        "5:00 PM - Fin de la actividad"
      ]
    },
    included: [
      "Transporte local ida y vuelta",
      "Guía intérprete local",
      "Refrigerio de bienvenida",
      "Almuerzo típico",
      "Seguro de asistencia médica",
      "Souvenir de la finca"
    ],
    excluded: [
      "Transporte hasta el municipio",
      "Gastos no especificados",
      "Propinas",
      "Bebidas alcohólicas"
    ],
    pricing: {
      perPerson: 85000,
      groupSmall: 80000,
      groupLarge: 70000,
      children: 50000
    },
    meetingPoint: "Parque Principal, frente a la Iglesia",
    departureTime: "8:00 AM",
    whatsapp: "573001234567"
  },
  {
    id: 2,
    name: "Aventura en el Río Negro",
    municipality: "Útica",
    price: 95000,
    duration: "5 horas",
    difficulty: "Media-Alta",
    minPeople: 4,
    maxPeople: 12,
    description: "Vive la adrenalina del rafting y el torrentismo en el cañón del Río Negro. Una experiencia para los amantes de la aventura y el agua, rodeados de naturaleza exuberante y paisajes inolvidables.",
    images: [
      "https://images.unsplash.com/photo-1540366693604-81565b065bd8",
      "https://images.unsplash.com/photo-1449067833891-3399f3e9f1f4",
      "https://images.unsplash.com/photo-1694342934228-900080027aa2",
      "https://images.unsplash.com/photo-1686527403411-5fd4a34031ef"
    ],
    itinerary: {
      morning: [
        "9:00 AM - Encuentro y charla de seguridad",
        "9:30 AM - Entrega de equipos y calentamiento",
        "10:00 AM - Inicio del descenso por el río (Rafting)",
        "11:30 AM - Parada en playa natural para refrigerio"
      ],
      afternoon: [
        "12:30 PM - Actividad de torrentismo en cascada",
        "2:00 PM - Almuerzo tipo fiambre",
        "3:00 PM - Retorno al punto de encuentro"
      ],
      evening: []
    },
    included: [
      "Equipos certificados (casco, chaleco, remo)",
      "Guías profesionales certificados",
      "Seguro de deportes extremos",
      "Refrigerio y Almuerzo",
      "Transporte interno"
    ],
    excluded: [
      "Ropa de cambio",
      "Zapatos de agua",
      "Fotografías (servicio opcional)",
      "Transporte intermunicipal"
    ],
    pricing: {
      perPerson: 95000,
      groupSmall: 90000,
      groupLarge: 85000,
      children: 0
    },
    meetingPoint: "Puente de Útica, entrada principal",
    departureTime: "9:00 AM",
    whatsapp: "573001234568"
  },
  {
    id: 3,
    name: "Senderismo Cerro de la Cruz",
    municipality: "Vergara",
    price: 70000,
    duration: "4 horas",
    difficulty: "Media",
    minPeople: 2,
    maxPeople: 20,
    description: "Caminata ecológica ascendiendo al mirador más alto de la región. Disfruta de vistas panorámicas de 360 grados, avistamiento de aves y flora nativa. Ideal para fotógrafos y amantes del aire puro.",
    images: [
      "https://images.unsplash.com/photo-1694342934228-900080027aa2",
      "https://images.unsplash.com/photo-1449067833891-3399f3e9f1f4",
      "https://images.unsplash.com/photo-1540366693604-81565b065bd8",
      "https://images.unsplash.com/photo-1500406634624-6b8de04b6c9f"
    ],
    itinerary: {
      morning: [
        "6:00 AM - Encuentro para aprovechar el fresco",
        "6:30 AM - Inicio del ascenso por sendero real",
        "8:30 AM - Llegada a la cima y descanso",
        "9:00 AM - Refrigerio con vista panorámica"
      ],
      afternoon: [
        "10:00 AM - Descenso por ruta alternativa",
        "11:30 AM - Llegada al pueblo y fin del tour"
      ],
      evening: []
    },
    included: [
      "Guía local experto en flora y fauna",
      "Bastones de trekking (préstamo)",
      "Refrigerio energético",
      "Hidratación",
      "Seguro de asistencia"
    ],
    excluded: [
      "Desayuno o Almuerzo",
      "Transporte hasta el punto de inicio",
      "Propinas"
    ],
    pricing: {
      perPerson: 70000,
      groupSmall: 60000,
      groupLarge: 50000,
      children: 40000
    },
    meetingPoint: "Plaza de Mercado",
    departureTime: "6:00 AM",
    whatsapp: "573001234569"
  },
  {
    id: 4,
    name: "Fin de Semana de Relax",
    municipality: "Sasaima",
    price: 350000,
    duration: "2 días / 1 noche",
    difficulty: "Baja",
    minPeople: 2,
    maxPeople: 10,
    description: "Escapada completa de fin de semana. Incluye alojamiento en cabaña típica, alimentación completa y recorrido por los sitios históricos y naturales. Relájate y deja que nosotros nos encarguemos de todo.",
    images: [
      "https://images.unsplash.com/photo-1449067833891-3399f3e9f1f4",
      "https://images.unsplash.com/photo-1694342934228-900080027aa2",
      "https://images.unsplash.com/photo-1540366693604-81565b065bd8",
      "https://images.unsplash.com/photo-1618595487779-9e884295dd09"
    ],
    itinerary: {
      morning: [
        "Día 1 - 9:00 AM: Recepción y Check-in",
        "Día 1 - 10:00 AM: Caminata de reconocimiento",
        "Día 2 - 8:30 AM: Desayuno típico",
        "Día 2 - 10:00 AM: Visita a trapiche panelero"
      ],
      afternoon: [
        "Día 1 - 1:00 PM: Almuerzo especial",
        "Día 1 - 3:00 PM: Tarde de piscina o descanso",
        "Día 2 - 1:00 PM: Almuerzo de despedida",
        "Día 2 - 3:00 PM: Check-out"
      ],
      evening: [
        "Día 1 - 7:00 PM: Cena romántica o familiar",
        "Día 1 - 8:30 PM: Fogata y cuentería"
      ]
    },
    included: [
      "Alojamiento 1 noche",
      "Alimentación completa (2A, 1D, 1C)",
      "Entradas a sitios turísticos",
      "Guía acompañante",
      "Seguro hotelero"
    ],
    excluded: [
      "Transporte desde Bogotá",
      "Bebidas alcohólicas",
      "Gastos personales"
    ],
    pricing: {
      perPerson: 350000,
      groupSmall: 320000,
      groupLarge: 300000,
      children: 250000
    },
    meetingPoint: "Parque Principal",
    departureTime: "9:00 AM (Sábado)",
    whatsapp: "573001234570"
  },
  {
    id: 5,
    name: "Ruta del Café y el Paisaje",
    municipality: "Nocaima",
    price: 110000,
    duration: "7 horas",
    difficulty: "Baja",
    minPeople: 2,
    maxPeople: 15,
    description: "Sumérgete en la cultura cafetera. Visita fincas cafeteras auténticas, aprende sobre el proceso del café desde la semilla hasta la taza, y disfruta de una cata profesional dirigida por baristas locales.",
    images: [
      "https://images.unsplash.com/photo-1540366693604-81565b065bd8",
      "https://images.unsplash.com/photo-1694342934228-900080027aa2",
      "https://images.unsplash.com/photo-1449067833891-3399f3e9f1f4",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    ],
    itinerary: {
      morning: [
        "9:00 AM - Llegada a la finca cafetera",
        "9:30 AM - Bienvenida con café de origen",
        "10:00 AM - Recorrido por el cafetal (recolección)",
        "11:30 AM - Proceso de beneficiadero y secado"
      ],
      afternoon: [
        "1:00 PM - Almuerzo típico en hoja de plátano",
        "2:30 PM - Taller de tostión y molienda",
        "3:30 PM - Cata de café y métodos de filtrado"
      ],
      evening: [
        "5:00 PM - Fin de la experiencia y compras"
      ]
    },
    included: [
      "Transporte desde el pueblo a la finca",
      "Experto en café (Barista/Caficultor)",
      "Almuerzo y refrigerios de café",
      "Certificado de asistencia simbólico",
      "Muestra de café de 250g"
    ],
    excluded: [
      "Transporte hasta el municipio",
      "Compras adicionales de café",
      "Propinas"
    ],
    pricing: {
      perPerson: 110000,
      groupSmall: 100000,
      groupLarge: 90000,
      children: 60000
    },
    meetingPoint: "Parque Principal",
    departureTime: "9:00 AM",
    whatsapp: "573001234571"
  },
  {
    id: 6,
    name: "Tour Cañón del Río",
    municipality: "Nimaima",
    price: 80000,
    duration: "5 horas",
    difficulty: "Media",
    minPeople: 4,
    maxPeople: 15,
    description: "Explora el impresionante cañón del río con sus formaciones rocosas únicas y pozos naturales de agua cristalina. Una caminata llena de geología, historia y diversión acuática.",
    images: [
      "https://images.unsplash.com/photo-1694342934228-900080027aa2",
      "https://images.unsplash.com/photo-1540366693604-81565b065bd8",
      "https://images.unsplash.com/photo-1449067833891-3399f3e9f1f4",
      "https://images.unsplash.com/photo-1686527403411-5fd4a34031ef"
    ],
    itinerary: {
      morning: [
        "8:00 AM - Encuentro y traslado al cañón",
        "8:45 AM - Inicio de caminata ecológica",
        "10:00 AM - Llegada a los pozos azules",
        "11:00 AM - Tiempo de baño y recreación"
      ],
      afternoon: [
        "12:30 PM - Picnic a orillas del río",
        "1:30 PM - Caminata de regreso por sendero de sombra",
        "3:00 PM - Regreso al punto de encuentro"
      ],
      evening: []
    },
    included: [
      "Transporte en Jeep 4x4 (tramo corto)",
      "Guía local baquiano",
      "Almuerzo tipo picnic",
      "Seguro contra accidentes",
      "Chaleco salvavidas (si se requiere)"
    ],
    excluded: [
      "Bebidas adicionales",
      "Ropa de baño",
      "Protector solar"
    ],
    pricing: {
      perPerson: 80000,
      groupSmall: 75000,
      groupLarge: 70000,
      children: 50000
    },
    meetingPoint: "Parque Principal",
    departureTime: "8:00 AM",
    whatsapp: "573001234572"
  }
];
