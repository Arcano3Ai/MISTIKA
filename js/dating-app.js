/**
 * Módulo de la Interfaz Estándar de Citas de MÍSTIKA (Mobile & Desktop App)
 * Red Exclusiva para Terapeutas, Sanadores y Facilitadores Certificados
 * - 12 Perfiles de Terapeutas con Formaciones Acreditadas, Arcanos, Sinastría y Prueba Humana
 * - Imágenes Ligeras Web-Optimized (Baja huella de datos móvil y carga ultra rápida)
 * - Swipe Deck con física táctil y tap zones para fotos estilo historias
 * - Bottom Sheet con Desglose de Sinastría y acciones directas
 * - Radar Cósmico dinámico con filtros elementales (Fuego, Agua, Aire, Tierra)
 * - Mensajes & Nuevas Sincronías con historias y chat interactivo con IA arquetípica
 */

class DatingAppManager {
  constructor() {
    this.profiles = [
      {
        id: 1,
        name: "Valentina",
        age: 28,
        astrology: "♏ Escorpio • 🌙 Luna en Piscis • Asc. Cáncer",
        distance: "A 3 km • Consultorio Roma Norte",
        profession: "Psicoterapeuta Transpersonal",
        formation: "Instituto Transpersonal de México (6 años ejerciendo)",
        archetype: "Psicoterapeuta Transpersonal & Facilitadora de Sombra",
        synastry: "99.4%",
        synastryBreakdown: { mente: 96, espiritu: 99, pasion: 98, emocion: 99 },
        bio: "Acompaño a personas en procesos de integración de la sombra, duelo y memoria transgeneracional. Busco un colega terapeuta o alma despierta con la valentía de habitar el silencio sagrado y la verdad desnuda sin máscaras profesionales.",
        oraclePrompt: "El aroma a infusión de cedrón caliente entre mis manos tras cerrar una sesión de terapia catártica en una tarde de lluvia.",
        tarot: "La Sacerdotisa (Arcano II) — Intuición, Sabiduría Oculta y Espacio de Silencio",
        element: "Agua",
        tags: ["Terapia Transpersonal", "Trabajo de Sombra", "Tarot Terapéutico", "Café de Especialidad"],
        images: [
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=360&q=55",
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=360&q=55"
        ],
        chatPreview: "✨ Qué sincronicidad leer tu carta... como terapeutas sabemos que los encuentros no son casuales.",
        chatTime: "Hace 3m",
        replies: [
          "Navegar el silencio contigo se siente tan natural... Qué descanso no tener que sostener el espacio por una vez.",
          "Me fascina tu enfoque terapéutico. La sombra no es para temerle, sino para transmutarla en oro alquímico.",
          "¿Te apetecería tomar un café de grano etíope en una librería de la Roma este fin de semana?"
        ]
      },
      {
        id: 2,
        name: "Julián",
        age: 31,
        astrology: "♌ Leo • 🏹 Ascendente Sagitario • 🌙 Luna en Aries",
        distance: "A 5 km • Sala Terapéutica Condesa",
        profession: "Sonoterapeuta en Frecuencia 432Hz",
        formation: "Diplomado en Terapia Vibracional con Gongs y Cuencos (Escuela del Sonido Sagrado)",
        archetype: "Sonoterapeuta Frecuencia 432Hz & Músico Bioacústico",
        synastry: "98.2%",
        synastryBreakdown: { mente: 94, espiritu: 98, pasion: 99, emocion: 95 },
        bio: "Facilito baños sonoros y armonización celular con cuencos de cuarzo y gongs planetarios. Busco una compañera terapeuta con quien construir una intimidad sagrada donde la libertad mutua sea nuestro mayor lazo.",
        oraclePrompt: "La vibración que retumba en el pecho al golpear el gong sinfónico y el silencio absoluto que queda en la sala cuando se apaga el armónico.",
        tarot: "El Sol (Arcano XIX) — Vitalidad, Verdad y Armonía Solar",
        element: "Fuego",
        tags: ["Sonoterapia 432Hz", "Cuencos de Cuarzo", "Gongs Planetarios", "Senderismo Nocturno"],
        images: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=360&q=55",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=360&q=55"
        ],
        chatPreview: "¿Escuchaste la grabación binaural que compuse tras el círculo sonoro de ayer?",
        chatTime: "Hace 15m",
        replies: [
          "Tu energía resuena en un tono muy limpio. Qué gozo encontrar a otra persona que comprenda el poder de la frecuencia.",
          "La música acústica es mi medicina diaria. Me encantaría compartirte una sesión privada de cuencos.",
          "Vamos a caminar por la montaña al caer el sol; el aire fresco despeja cualquier sobrecarga energética."
        ]
      },
      {
        id: 3,
        name: "Aria",
        age: 29,
        astrology: "♒ Acuario • ♉ Ascendente Tauro • 🌙 Luna en Géminis",
        distance: "A 7 km • Botica Holística Coyoacán",
        profession: "Herbolaria Clínica & Flores de Bach",
        formation: "Certificada en Fitoterapia Tradicional y Sistema Floral Australiano (8 años en consulta)",
        archetype: "Herbolaria Clínica & Terapeuta Floral",
        synastry: "97.6%",
        synastryBreakdown: { mente: 99, espiritu: 95, pasion: 92, emocion: 96 },
        bio: "Diseño elixires botánicos y fórmulas florales para tratar desequilibrios del sistema nervioso y acompañar aperturas de conciencia. Si me invitas a una tetera de té de jazmín mientras debatimos de botánica y cosmos, ya tienes mi atención.",
        oraclePrompt: "El aroma penetrante del romero fresco machacado en el mortero de piedra y el vapor de jazmín al alba.",
        tarot: "La Estrella (Arcano XVII) — Esperanza, Sanación Botánica y Destino",
        element: "Aire",
        tags: ["Herbolaria Clínica", "Flores de Bach", "Medicina Botánica", "Cosmología"],
        images: [
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=360&q=55",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=360&q=55"
        ],
        chatPreview: "El telescopio está listo para la lluvia de estrellas de esta noche. 🌌",
        chatTime: "Hace 1h",
        replies: [
          "Los fotones que vemos esta noche salieron hace millones de años para encontrarse con tus ojos.",
          "Qué fascinante coincidencia cuántica. La sincronicidad entre nosotros es palpable.",
          "Tengo unas hojas de té blanco de cosecha silvestre; preparemos una infusión ceremonial."
        ]
      },
      {
        id: 4,
        name: "Iñaki",
        age: 33,
        astrology: "♈ Aries • ♑ Ascendente Capricornio • 🌙 Luna en Sagitario",
        distance: "A 4 km • Espacio Ritual Tepoztlán / Roma",
        profession: "Facilitador de Respiración Holotrópica",
        formation: "Formación Internacional Grof Legacy Training & Medicina Tradicional (10 años)",
        archetype: "Facilitador de Respiración & Hombre de Fuego",
        synastry: "98.7%",
        synastryBreakdown: { mente: 98, espiritu: 99, pasion: 97, emocion: 93 },
        bio: "Guío respiraciones circulares profundas para liberación de trauma reprimido y memorias perinatales. Valoro la vulnerabilidad radical y busco alguien que ya haya caminado su propio sendero de integración.",
        oraclePrompt: "El calor húmedo del vapor sobre las piedras volcánicas del temazcal en oscuridad total y el suspiro colectivo de liberación.",
        tarot: "El Mago (Arcano I) — Transformación de Elementos y Presencia Somática",
        element: "Fuego",
        tags: ["Respiración Holotrópica", "Temazcal Tradicional", "Geometría Sagrada", "Obsidiana"],
        images: [
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=360&q=55",
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=360&q=55"
        ],
        chatPreview: "La geometría de nuestras cartas astrales tiene un trino exacto en fuego.",
        chatTime: "Ayer",
        replies: [
          "El icosaedro representa el agua y el tetraedro el fuego; juntos creamos alquimia pura.",
          "Te invito al próximo círculo de respiración que facilito en Tepoztlán. Tu presencia sumará mucho.",
          "Cuando honramos el cuerpo como altar, las respuestas bajan solas."
        ]
      },
      {
        id: 5,
        name: "Solana",
        age: 26,
        astrology: "♋ Cáncer • ♏ Luna en Escorpio • 🌙 Ascendente Piscis",
        distance: "A 2 km • Consultorio Coyoacán",
        profession: "Terapeuta Onírica Gestalt",
        formation: "Diplomado en Terapia Gestalt y Simbología Arquetípica Jungiana",
        archetype: "Terapeuta Onírica Gestalt & Tarot Mitológico",
        synastry: "97.9%",
        synastryBreakdown: { mente: 94, espiritu: 98, pasion: 98, emocion: 99 },
        bio: "Acompaño a consultantes a descifrar mensajes del inconsciente a través de sueños lúcidos, mapas del tarot y trabajo gestáltico. Busco una complicidad íntima donde podamos desarmar las corazas terapéuticas.",
        oraclePrompt: "Las lágrimas espontáneas de alivio que brotan cuando un consultante por fin se atreve a nombrar su mayor verdad.",
        tarot: "La Luna (Arcano XVIII) — Reinos Oníricos e Inconsciente Colectivo",
        element: "Agua",
        tags: ["Terapia Onírica", "Psicología Jungiana", "Tarot Mitológico", "Cristaloterapia"],
        images: [
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=360&q=55",
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=360&q=55"
        ],
        chatPreview: "Soñé con un cuervo dorado antes de abrir Mística y encontrar tu latido.",
        chatTime: "Ayer",
        replies: [
          "Los sueños lúcidos son la antesala del encuentro de almas. Sentí tu llegada.",
          "La luna creciente de hoy nos invita a sembrar una semilla de complicidad honesta.",
          "Dime qué sueñas cuando te permites no tener el control de nada."
        ]
      },
      {
        id: 6,
        name: "Mateo",
        age: 30,
        astrology: "♓ Piscis • ♋ Luna en Cáncer • Asc. Escorpio",
        distance: "A 4 km • Espacio Acuático Polanco",
        profession: "Terapeuta Somático & Aguahara Acuático",
        formation: "Certificado en Aguahara & Terapia Somática de Liberación de Trauma (SE)",
        archetype: "Terapeuta Somático & Facilitador de Aguahara",
        synastry: "96.8%",
        synastryBreakdown: { mente: 90, espiritu: 97, pasion: 94, emocion: 99 },
        bio: "Trabajo la memoria corporal en piscinas termales y cenotes; el agua no juzga y permite al sistema nervioso relajarse por completo. Deseo conectar con una terapeuta que valore el toque consciente y el abrazo que cura.",
        oraclePrompt: "Sostener la cabeza de alguien en el agua tibia y sentir cómo su respiración pasa de la hiperventilación al sosiego infantil.",
        tarot: "El Ermitaño (Arcano IX) — Silencio, Contención y Luz Interior",
        element: "Agua",
        tags: ["Aguahara", "Terapia Somática", "Apnea Terapéutica", "Vipassana"],
        images: [
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=360&q=55",
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=360&q=55"
        ],
        chatPreview: "Bajo el agua todo se aquieta... tu perfil me transmitió esa misma paz.",
        chatTime: "2d",
        replies: [
          "Respirar con lentitud cambia la percepción del tiempo. Qué regalo leerte.",
          "Los espacios acuáticos son el primer hogar que habitamos en el vientre. Qué dicha compartir esta visión.",
          "¿Tocas algún instrumento o prefieres ser oyente del silencio compartido?"
        ]
      },
      {
        id: 7,
        name: "Kalliope",
        age: 30,
        astrology: "♐ Sagitario • ♒ Ascendente Acuario • 🌙 Luna en Leo",
        distance: "A 5 km • Estudio Condesa",
        profession: "Sonoterapeuta Planetaria & Kundalini",
        formation: "Certificación KRI 500h & Sonoterapia con Gong Planetario Sedna y Quirón",
        archetype: "Sonoterapeuta Planetaria & Instructora de Kundalini",
        synastry: "98.4%",
        synastryBreakdown: { mente: 96, espiritu: 98, pasion: 97, emocion: 94 },
        bio: "Utilizo el gong de Quirón para sanar la herida del sanador. Busco un compañero terapeuta que no le tema al poder del prana ni a la intensidad de un vínculo sin caretas profesionales.",
        oraclePrompt: "Cantar el mantra Adi Shakti al amanecer y sentir la piel erizada por la vibración comunitaria en la sala.",
        tarot: "La Rueda de la Fortuna (Arcano X) — Sincronicidad Cósmica y Resonancia Universal",
        element: "Fuego",
        tags: ["Gong Planetario", "Kundalini Terapéutico", "Sanador Herido", "Chakraterapia"],
        images: [
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=360&q=55",
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=360&q=55"
        ],
        chatPreview: "Afiné mi cuenco en la nota FA para ti... el chakra corazón vibró al instante.",
        chatTime: "2d",
        replies: [
          "El sonido es la primera manifestación del universo: Naad Brahma.",
          "Me encantaría darte un baño sonoro privado; tu campo áurico pide expansión y ligereza.",
          "Qué alegría encontrar a alguien con quien sintonizar sin distorsión."
        ]
      },
      {
        id: 8,
        name: "Damián",
        age: 32,
        astrology: "♉ Tauro • ♍ Luna en Virgo • Asc. Capricornio",
        distance: "A 6 km • Bosque de Tlalpan",
        profession: "Constelador Familiar & Ecopsicólogo",
        formation: "Certificado por el Centro de Estudios Sistémicos de Hellinger & Ecopsicología",
        archetype: "Constelador Familiar & Facilitador de Ecopsicología",
        synastry: "95.8%",
        synastryBreakdown: { mente: 92, espiritu: 96, pasion: 94, emocion: 95 },
        bio: "Facilito talleres de constelaciones para ordenar lealtades familiares invisibles y baños de bosque terapéuticos. Para mí el amor sano nace de reconocer el lugar de cada uno en el sistema.",
        oraclePrompt: "La mirada de paz de un consultante cuando por fin honra y suelta el peso de su linaje familiar.",
        tarot: "El Sumo Sacerdote (Arcano V) — Órdenes del Amor y Raíces Ancestrales",
        element: "Tierra",
        tags: ["Constelaciones Familiares", "Ecopsicología", "Terapia Sistémica", "Baños de Bosque"],
        images: [
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=360&q=55",
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=360&q=55"
        ],
        chatPreview: "Hice pan artesanal de masa madre con romero del huerto tras una constelación. ¿Compartimos?",
        chatTime: "3d",
        replies: [
          "La paciencia de la tierra nos enseña que todo lo verdadero toma tiempo para germinar.",
          "Construyo tambores con madera caída de pino; su latido te conecta al centro del mundo.",
          "Caminar descalzos sobre musgo húmedo cura cualquier ruido mental. Vamos cuando gustes."
        ]
      },
      {
        id: 9,
        name: "Lucía",
        age: 27,
        astrology: "♎ Libra • ♊ Ascendente Géminis • 🌙 Luna en Acuario",
        distance: "A 2 km • Taller Terapéutico Juárez",
        profession: "Arteterapeuta Clínica",
        formation: "Máster en Terapias Artísticas y Expresivas (5 años de consulta)",
        archetype: "Arteterapeuta Clínica & Psicoterapeuta Expresiva",
        synastry: "96.1%",
        synastryBreakdown: { mente: 97, espiritu: 93, pasion: 95, emocion: 92 },
        bio: "Trabajo el dolor psíquico a través de la arcilla, el pigmento y el collage inconsciente. Busco un colega con quien hablar de arte, inconsciente y vida sin solemnidad fingida.",
        oraclePrompt: "Tener las manos manchadas de carbón y óleo tras acompañar una sesión donde el lienzo dijo lo que la voz no podía.",
        tarot: "La Templanza (Arcano XIV) — Alquimia Emocional a Través del Color",
        element: "Aire",
        tags: ["Arteterapia Clínica", "Terapia Expresiva", "Psicología del Arte", "Arcilla Terapéutica"],
        images: [
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=360&q=55",
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=360&q=55"
        ],
        chatPreview: "Puse un disco de Alice Coltrane en el taller y tu presencia cósmica llegó a mi mente.",
        chatTime: "3d",
        replies: [
          "El arte y la terapia tienen la misma raíz: devolverle al alma su capacidad de conmoverse.",
          "Hay una exposición de arte hermético en San Rafael; deberíamos visitarla juntos.",
          "Me gusta la ligereza en las palabras y la profundidad en las miradas."
        ]
      },
      {
        id: 10,
        name: "Maya",
        age: 27,
        astrology: "♍ Virgo • ♉ Luna en Tauro • Asc. Cáncer",
        distance: "A 4 km • San Ángel",
        profession: "Kinesióloga Holística & Medicina Andina",
        formation: "Diplomado en Kinesiología Aplicada y Acompañamiento Energético",
        archetype: "Kinesióloga Holística & Terapeuta Tradicional",
        synastry: "97.4%",
        synastryBreakdown: { mente: 94, espiritu: 97, pasion: 95, emocion: 98 },
        bio: "Testeo bioenergético a través de la respuesta muscular para desbloquear emociones atrapadas en órganos. Busco un terapeuta con alta conciencia corporal y afecto dulce.",
        oraclePrompt: "El instante en que el cuerpo del consultante da una respuesta muscular clara y ambos comprendemos el origen de su síntoma.",
        tarot: "La Emperatriz (Arcano III) — Sanación del Tejido Vivo y Nutrición Celular",
        element: "Tierra",
        tags: ["Kinesiología Holística", "Medicina Andina", "Desbloqueo Biológico", "Fitoterapia"],
        images: [
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=360&q=55",
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=360&q=55"
        ],
        chatPreview: "Destilé un aceite de flor de azahar con luna llena. Te guardé una botellita para tu botiquín.",
        chatTime: "4d",
        replies: [
          "Las plantas y el cuerpo no mienten: su medicina actúa en el plano sutil antes que en el físico.",
          "Tu carta muestra una necesidad de enraizamiento dulce. Déjame prepararte una tisana.",
          "La belleza está en los pequeños detalles cotidianos tocados por el amor."
        ]
      },
      {
        id: 11,
        name: "Sebastián",
        age: 29,
        astrology: "♑ Capricornio • ♏ Ascendente Escorpio • 🌙 Luna en Tauro",
        distance: "A 3 km • San Rafael",
        profession: "Terapeuta Filosófico Hermético",
        formation: "Formación en Acompañamiento Filosófico y Filosofía Terapéutica Antigua",
        archetype: "Terapeuta Filosófico & Consejero Hermético",
        synastry: "96.9%",
        synastryBreakdown: { mente: 99, espiritu: 96, pasion: 95, emocion: 92 },
        bio: "Ayudo a consultantes a reconstruir su marco de significado ante crisis de sentido vital. Busco a alguien con quien leer a los estoicos y místicos junto a una taza de té caliente sin prisa alguna.",
        oraclePrompt: "El olor a té chai con canela y el clic mental de un consultante cuando resignifica un trauma del pasado como su mayor sabiduría.",
        tarot: "La Justicia (Arcano XI) — Coherencia Ética, Discernimiento y Ley Sagrada",
        element: "Tierra",
        tags: ["Terapia Filosófica", "Acompañamiento Existencial", "Hermetismo", "Ajedrez"],
        images: [
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=360&q=55",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=360&q=55"
        ],
        chatPreview: "Encontré un pasaje de Giordano Bruno que describe con exactitud lo que sentí al ver tu perfil.",
        chatTime: "5d",
        replies: [
          "El principio hermético de correspondencia: como es arriba, es abajo; como es adentro, es afuera.",
          "Juguemos una partida de ajedrez sin reloj mientras platicamos sobre el origen del tiempo.",
          "La coherencia interior es la mayor belleza que puede poseer un terapeuta."
        ]
      },
      {
        id: 12,
        name: "Gael",
        age: 31,
        astrology: "♏ Escorpio • ♌ Ascendente Leo • 🌙 Luna en Piscis",
        distance: "A 2 km • Roma Norte",
        profession: "Psicoterapeuta Gestalt & Bioenergética",
        formation: "Certificado en Terapia Gestalt y Terapia Corporal Bioenergética (7 años de práctica)",
        archetype: "Psicoterapeuta Gestalt & Bioenergética Reichiana",
        synastry: "98.9%",
        synastryBreakdown: { mente: 97, espiritu: 98, pasion: 99, emocion: 97 },
        bio: "Trabajo la disolución de corazas corporales para que el consultante recupere su capacidad de sentir y amar. Busco a una terapeuta que habite su propia fuerza y no le tema a la verdad desnuda.",
        oraclePrompt: "La respiración profunda e involuntaria que suelta el cuerpo cuando una coraza muscular de años por fin se rinde.",
        tarot: "La Muerte (Arcano XIII) — Disolución de Corazas Caracteriales y Renacimiento",
        element: "Agua",
        tags: ["Terapia Gestalt", "Bioenergética Reichiana", "Disolución de Coraza", "Fotografía"],
        images: [
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=360&q=55",
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=360&q=55"
        ],
        chatPreview: "Tu respuesta en el Oráculo me erizó la piel. Esa es la honestidad que busco en un colega.",
        chatTime: "6d",
        replies: [
          "La verdadera intimidad empieza cuando dejamos caer las máscaras que construimos para protegernos.",
          "Me gusta fotografiar miradas en claroscuro; los ojos siempre delatan la verdad del alma.",
          "Brindemos con vino natural por los que no temen renacer de sus propias cenizas."
        ]
      }
    ];

    this.currentCardIndex = 0;
    this.history = [];
    this.activePhotoIndices = {};

    this.init();
  }

  init() {
    this.renderDeck();
    this.renderRadarGrid();
    this.renderMessagesView();
    this.bindActionButtons();
    this.bindMobileTabs();
    this.bindProfileSheet();
    this.bindChatSystem();
    this.bindMatchModal();
    this.bindKeyboardShortcuts();
    this.bindRadarFilters();
  }

  showDatingApp() {
    const landing = document.getElementById('landing-wrapper');
    const mainLayout = document.getElementById('dating-app-main-layout');
    if (landing) landing.style.display = 'none';
    if (mainLayout) {
      mainLayout.classList.add('active');
      window.scrollTo(0, 0);
    }
  }

  showLandingPage() {
    const landing = document.getElementById('landing-wrapper');
    const mainLayout = document.getElementById('dating-app-main-layout');
    if (landing) landing.style.display = 'block';
    if (mainLayout) mainLayout.classList.remove('active');
  }

  /* -------------------------------------------------------------
     Navegación Móvil por Pestañas (Bottom Tabs)
     ------------------------------------------------------------- */
  bindMobileTabs() {
    const tabButtons = document.querySelectorAll('.m-tab-item');
    const viewPanes = document.querySelectorAll('.mobile-view-pane');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetView = btn.dataset.view;
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Quitar badge si entra a mensajes
        if (targetView === 'view-messages') {
          const badge = btn.querySelector('.m-tab-badge');
          if (badge) badge.remove();
        }

        viewPanes.forEach(pane => {
          if (pane.id === targetView) {
            pane.classList.add('active');
          } else {
            pane.classList.remove('active');
          }
        });

        if (window.mysticAudio) {
          window.mysticAudio.playChime('normal');
        }
      });
    });
  }

  /* -------------------------------------------------------------
     Renderizado del Mazo Móvil
     ------------------------------------------------------------- */
  renderDeck() {
    const stackContainer = document.getElementById('card-stack-container');
    const emptyState = document.getElementById('deck-empty-state');
    if (!stackContainer) return;

    stackContainer.innerHTML = '';

    if (this.currentCardIndex >= this.profiles.length) {
      if (emptyState) emptyState.classList.add('active');
      return;
    } else {
      if (emptyState) emptyState.classList.remove('active');
    }

    const visibleProfiles = this.profiles.slice(this.currentCardIndex, this.currentCardIndex + 3).reverse();

    visibleProfiles.forEach((profile, idx) => {
      const card = this.createCardElement(profile);
      stackContainer.appendChild(card);

      if (idx === visibleProfiles.length - 1) {
        this.setupDragEvents(card, profile);
      }
    });
  }

  createCardElement(profile) {
    const card = document.createElement('div');
    card.className = 'mobile-swipe-card swipe-card';
    card.dataset.id = profile.id;

    if (!this.activePhotoIndices[profile.id]) {
      this.activePhotoIndices[profile.id] = 0;
    }
    const currentPhotoIdx = this.activePhotoIndices[profile.id];
    const currentPhoto = profile.images[currentPhotoIdx] || profile.images[0];

    const storyBarsHtml = profile.images.map((img, i) =>
      `<div class="story-bar ${i === currentPhotoIdx ? 'active' : ''}"></div>`
    ).join('');

    const pillsHtml = profile.tags.map(t => `<span class="mobile-pill">#${t}</span>`).join('');

    card.innerHTML = `
      <div class="card-media" style="position: absolute; top:0; left:0; width:100%; height:100%;">
        <img src="${currentPhoto}" alt="${profile.name}" class="card-img" loading="lazy" />

        <!-- Story progress bars superiores -->
        <div class="card-story-progress">
          ${storyBarsHtml}
        </div>

        <!-- Tap zones para cambiar fotos -->
        <div class="card-tap-zone tap-left" title="Foto Anterior"></div>
        <div class="card-tap-zone tap-right" title="Siguiente Foto"></div>

        <!-- Pill de Sinastría Cósmica -->
        <div class="mobile-synastry-pill">
          <i class="fas fa-infinity"></i> ${profile.synastry}
        </div>

        <div class="swipe-stamp stamp-like">LIKE</div>
        <div class="swipe-stamp stamp-nope">NOPE</div>
        <div class="swipe-stamp stamp-super">SUPER</div>
      </div>

      <!-- Datos de Perfil Móvil -->
      <div class="mobile-card-details">
        <div class="mobile-name-row">
          <div class="mobile-card-name">
            ${profile.name} <span class="age">${profile.age}</span>
            <i class="fas fa-certificate mobile-verified-icon" style="color: var(--accent-gold);" title="Terapeuta Certificado"></i>
          </div>
          <button class="btn-open-sheet-circle" title="Ver carta completa" type="button">
            <i class="fas fa-chevron-up"></i>
          </button>
        </div>

        <div class="mobile-astral-row" style="color: #fde047; font-weight: 600;">
          <i class="fas fa-spa"></i> <span>${profile.profession}</span>
        </div>

        <div class="mobile-astral-row">
          <span>${profile.astrology}</span>
        </div>

        <!-- Cita Sensorial del Oráculo Humano -->
        <div class="mobile-human-quote-box">
          <span class="quote-tag"><i class="fas fa-heart"></i> Latido del Terapeuta</span>
          "${profile.oraclePrompt}"
        </div>

        <div class="mobile-card-pills">
          ${pillsHtml}
        </div>
      </div>
    `;

    // Toque para cambiar fotos estilo Historias
    const tapLeft = card.querySelector('.tap-left');
    const tapRight = card.querySelector('.tap-right');

    tapLeft.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentPhotoIdx > 0) {
        this.activePhotoIndices[profile.id]--;
        this.renderDeck();
      }
    });

    tapRight.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentPhotoIdx < profile.images.length - 1) {
        this.activePhotoIndices[profile.id]++;
        this.renderDeck();
      }
    });

    // Abrir Bottom Sheet al hacer clic en los detalles o el botón flecha
    const openSheetBtn = card.querySelector('.btn-open-sheet-circle');
    const cardDetails = card.querySelector('.mobile-card-details');

    if (openSheetBtn) {
      openSheetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openProfileSheet(profile);
      });
    }

    if (cardDetails) {
      cardDetails.addEventListener('click', (e) => {
        if (!e.target.closest('.tap-left') && !e.target.closest('.tap-right')) {
          this.openProfileSheet(profile);
        }
      });
    }

    return card;
  }

  /* -------------------------------------------------------------
     Física Táctil y Gestos de Swipe
     ------------------------------------------------------------- */
  setupDragEvents(card, profile) {
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.currentX = 0;
    this.currentY = 0;

    const onStart = (clientX, clientY) => {
      this.isDragging = true;
      this.startX = clientX;
      this.startY = clientY;
      card.style.transition = 'none';
    };

    const onMove = (clientX, clientY) => {
      if (!this.isDragging) return;
      this.currentX = clientX - this.startX;
      this.currentY = clientY - this.startY;

      const rotate = this.currentX * 0.08;
      card.style.transform = `translate(${this.currentX}px, ${this.currentY}px) rotate(${rotate}deg)`;

      // Opacidades de los sellos LIKE / NOPE / SUPER
      const stampLike = card.querySelector('.stamp-like');
      const stampNope = card.querySelector('.stamp-nope');
      const stampSuper = card.querySelector('.stamp-super');

      if (this.currentX > 30) {
        const opacity = Math.min(1, (this.currentX - 30) / 100);
        if (stampLike) stampLike.style.opacity = opacity;
        if (stampNope) stampNope.style.opacity = 0;
        if (stampSuper) stampSuper.style.opacity = 0;
      } else if (this.currentX < -30) {
        const opacity = Math.min(1, (-this.currentX - 30) / 100);
        if (stampNope) stampNope.style.opacity = opacity;
        if (stampLike) stampLike.style.opacity = 0;
        if (stampSuper) stampSuper.style.opacity = 0;
      } else if (this.currentY < -40) {
        const opacity = Math.min(1, (-this.currentY - 40) / 100);
        if (stampSuper) stampSuper.style.opacity = opacity;
        if (stampLike) stampLike.style.opacity = 0;
        if (stampNope) stampNope.style.opacity = 0;
      } else {
        if (stampLike) stampLike.style.opacity = 0;
        if (stampNope) stampNope.style.opacity = 0;
        if (stampSuper) stampSuper.style.opacity = 0;
      }
    };

    const onEnd = () => {
      if (!this.isDragging) return;
      this.isDragging = false;

      const thresholdX = 90;
      const thresholdY = -110;

      if (this.currentX > thresholdX) {
        this.swipeAction('right', profile, card);
      } else if (this.currentX < -thresholdX) {
        this.swipeAction('left', profile, card);
      } else if (this.currentY < thresholdY) {
        this.swipeAction('up', profile, card);
      } else {
        card.style.transition = 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.transform = 'translate(0, 0) rotate(0deg)';

        const stampLike = card.querySelector('.stamp-like');
        const stampNope = card.querySelector('.stamp-nope');
        const stampSuper = card.querySelector('.stamp-super');
        if (stampLike) stampLike.style.opacity = 0;
        if (stampNope) stampNope.style.opacity = 0;
        if (stampSuper) stampSuper.style.opacity = 0;
      }
    };

    // Eventos de Mouse
    card.addEventListener('mousedown', (e) => onStart(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onEnd);

    // Eventos Táctiles (Mobile Touch)
    card.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      onStart(touch.clientX, touch.clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!this.isDragging) return;
      const touch = e.touches[0];
      onMove(touch.clientX, touch.clientY);
    }, { passive: true });

    window.addEventListener('touchend', onEnd);
  }

  swipeAction(direction, profile, cardElement) {
    if (!cardElement) return;

    let translateX = 0;
    let translateY = 0;
    let rotate = 0;

    if (direction === 'right') {
      translateX = window.innerWidth + 300;
      rotate = 25;
      if (window.mysticAudio) window.mysticAudio.playChime('success');
      this.history.push({ profile, action: 'like' });

      // Celebración de sincronía si la sinastría es superior a 97%
      const synVal = parseFloat(profile.synastry);
      if (synVal > 97.5) {
        setTimeout(() => this.triggerMatchCelebration(profile), 400);
      }
    } else if (direction === 'left') {
      translateX = -window.innerWidth - 300;
      rotate = -25;
      if (window.mysticAudio) window.mysticAudio.playChime('normal');
      this.history.push({ profile, action: 'nope' });
    } else if (direction === 'up') {
      translateY = -window.innerHeight - 300;
      rotate = 0;
      if (window.mysticAudio) window.mysticAudio.playChime('success');
      this.history.push({ profile, action: 'super' });
      setTimeout(() => this.triggerMatchCelebration(profile), 350);
    }

    cardElement.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease';
    cardElement.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
    cardElement.style.opacity = '0';

    setTimeout(() => {
      this.currentCardIndex++;
      this.renderDeck();
    }, 280);
  }

  /* -------------------------------------------------------------
     Botones de Acción Inferiores (Barra de 5 Botones)
     ------------------------------------------------------------- */
  bindActionButtons() {
    const btnRewind = document.getElementById('m-btn-rewind');
    const btnNope = document.getElementById('m-btn-nope');
    const btnSuper = document.getElementById('m-btn-super');
    const btnLike = document.getElementById('m-btn-like');
    const btnOracle = document.getElementById('m-btn-oracle');
    const btnReload = document.getElementById('btn-reload-deck');

    if (btnNope) {
      btnNope.addEventListener('click', () => {
        const topCard = document.querySelector('.mobile-card-stack .swipe-card:last-child');
        if (topCard && this.currentCardIndex < this.profiles.length) {
          this.swipeAction('left', this.profiles[this.currentCardIndex], topCard);
        }
      });
    }

    if (btnLike) {
      btnLike.addEventListener('click', () => {
        const topCard = document.querySelector('.mobile-card-stack .swipe-card:last-child');
        if (topCard && this.currentCardIndex < this.profiles.length) {
          this.swipeAction('right', this.profiles[this.currentCardIndex], topCard);
        }
      });
    }

    if (btnSuper) {
      btnSuper.addEventListener('click', () => {
        const topCard = document.querySelector('.mobile-card-stack .swipe-card:last-child');
        if (topCard && this.currentCardIndex < this.profiles.length) {
          this.swipeAction('up', this.profiles[this.currentCardIndex], topCard);
        }
      });
    }

    if (btnRewind) {
      btnRewind.addEventListener('click', () => {
        if (this.currentCardIndex > 0) {
          this.currentCardIndex = Math.max(0, this.currentCardIndex - 1);
          this.renderDeck();
          if (window.mysticAudio) window.mysticAudio.playChime('normal');
        }
      });
    }

    if (btnOracle) {
      btnOracle.addEventListener('click', () => {
        const currentProfile = this.profiles[this.currentCardIndex];
        if (currentProfile && window.mysticOracle) {
          window.mysticOracle.showToast(`🔮 Sinastría Cósmica con ${currentProfile.name}: ${currentProfile.synastry} de afinidad.`);
        }
      });
    }

    if (btnReload) {
      btnReload.addEventListener('click', () => {
        this.currentCardIndex = 0;
        this.history = [];
        this.renderDeck();
      });
    }
  }

  /* -------------------------------------------------------------
     Bottom Sheet Móvil (Detalles de Perfil y Sinastría)
     ------------------------------------------------------------- */
  bindProfileSheet() {
    const sheet = document.getElementById('mobile-profile-sheet');
    const closeBtn = document.getElementById('close-profile-sheet-btn');

    if (closeBtn && sheet) {
      closeBtn.addEventListener('click', () => {
        sheet.classList.remove('open');
      });
    }

    // Botones de acción rápida dentro del bottom sheet
    const sheetBtnNope = document.getElementById('sheet-btn-nope');
    const sheetBtnSuper = document.getElementById('sheet-btn-super');
    const sheetBtnLike = document.getElementById('sheet-btn-like');

    if (sheetBtnNope) {
      sheetBtnNope.addEventListener('click', () => {
        sheet.classList.remove('open');
        const topCard = document.querySelector('.mobile-card-stack .swipe-card:last-child');
        if (topCard && this.currentCardIndex < this.profiles.length) {
          this.swipeAction('left', this.profiles[this.currentCardIndex], topCard);
        }
      });
    }

    if (sheetBtnSuper) {
      sheetBtnSuper.addEventListener('click', () => {
        sheet.classList.remove('open');
        const topCard = document.querySelector('.mobile-card-stack .swipe-card:last-child');
        if (topCard && this.currentCardIndex < this.profiles.length) {
          this.swipeAction('up', this.profiles[this.currentCardIndex], topCard);
        }
      });
    }

    if (sheetBtnLike) {
      sheetBtnLike.addEventListener('click', () => {
        sheet.classList.remove('open');
        const topCard = document.querySelector('.mobile-card-stack .swipe-card:last-child');
        if (topCard && this.currentCardIndex < this.profiles.length) {
          this.swipeAction('right', this.profiles[this.currentCardIndex], topCard);
        }
      });
    }
  }

  openProfileSheet(profile) {
    const sheet = document.getElementById('mobile-profile-sheet');
    if (!sheet) return;

    document.getElementById('sheet-img').src = profile.images[0];
    document.getElementById('sheet-name-age').textContent = `${profile.name}, ${profile.age}`;
    document.getElementById('sheet-astrology').innerHTML = `
      <div style="color: #fde047; font-weight: 700; margin-bottom: 2px;">
        <i class="fas fa-certificate"></i> ${profile.profession}
      </div>
      <div style="font-size: 0.78rem; color: #a78bfa; margin-bottom: 4px;">
        <i class="fas fa-graduation-cap"></i> ${profile.formation}
      </div>
      <div style="font-size: 0.8rem; color: #e2e8f0;">
        ${profile.astrology} • ${profile.distance}
      </div>
    `;
    document.getElementById('sheet-synastry-badge').textContent = `${profile.synastry} Sinastría`;
    document.getElementById('sheet-tarot-text').textContent = profile.tarot;
    document.getElementById('sheet-oracle-quote').textContent = `"${profile.oraclePrompt}"`;
    document.getElementById('sheet-bio-text').textContent = profile.bio;

    // Actualizar barras de desglose de sinastría
    const b = profile.synastryBreakdown || { mente: 95, espiritu: 98, pasion: 94, emocion: 97 };
    document.getElementById('bar-fill-mente').style.width = `${b.mente}%`;
    document.getElementById('val-mente').textContent = `${b.mente}%`;
    document.getElementById('bar-fill-espiritu').style.width = `${b.espiritu}%`;
    document.getElementById('val-espiritu').textContent = `${b.espiritu}%`;
    document.getElementById('bar-fill-pasion').style.width = `${b.pasion}%`;
    document.getElementById('val-pasion').textContent = `${b.pasion}%`;
    document.getElementById('bar-fill-emocion').style.width = `${b.emocion}%`;
    document.getElementById('val-emocion').textContent = `${b.emocion}%`;

    sheet.classList.add('open');
    if (window.mysticAudio) window.mysticAudio.playChime('normal');
  }

  /* -------------------------------------------------------------
     Renderizado Dinámico del Radar Cósmico
     ------------------------------------------------------------- */
  renderRadarGrid() {
    const grid = document.getElementById('mobile-radar-grid');
    if (!grid) return;

    grid.innerHTML = this.profiles.map(p => `
      <div class="m-radar-card" data-id="${p.id}" data-element="${p.element}" role="button" tabindex="0">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        <div class="m-radar-overlay"></div>
        <div class="m-radar-info">
          <div style="font-weight: 700; color: #fff; font-size: 0.95rem;">${p.name}, ${p.age}</div>
          <div style="font-size: 0.72rem; color: var(--accent-gold); font-weight: 600;">
            ${p.synastry} • ${p.element}
          </div>
          <div style="font-size: 0.65rem; color: #fde047; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
            ${p.profession}
          </div>
        </div>
      </div>
    `).join('');

    // Clic en tarjeta de radar abre el profile sheet
    grid.querySelectorAll('.m-radar-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id);
        const profile = this.profiles.find(p => p.id === id);
        if (profile) this.openProfileSheet(profile);
      });
    });
  }

  /* -------------------------------------------------------------
     Renderizado Dinámico de Mensajes & Historias de Sincronías
     ------------------------------------------------------------- */
  renderMessagesView() {
    const storiesRow = document.getElementById('mobile-stories-row');
    const chatList = document.getElementById('chat-conversations-list');
    const matchesCount = document.getElementById('matches-count-label');

    if (matchesCount) {
      matchesCount.textContent = this.profiles.length;
    }

    if (storiesRow) {
      storiesRow.innerHTML = this.profiles.map(p => `
        <div class="m-story-bubble" data-id="${p.id}" role="button" tabindex="0">
          <div class="m-story-ring">
            <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
            <span class="m-online-dot"></span>
          </div>
          <span class="m-story-name">${p.name}</span>
        </div>
      `).join('');

      storiesRow.querySelectorAll('.m-story-bubble').forEach(bubble => {
        bubble.addEventListener('click', () => {
          const id = parseInt(bubble.dataset.id);
          const profile = this.profiles.find(p => p.id === id);
          if (profile) this.openChatWith(profile);
        });
      });
    }

    if (chatList) {
      // Tomamos 6 conversaciones destacadas de terapeutas
      const chatProfiles = this.profiles.slice(0, 6);
      chatList.innerHTML = chatProfiles.map(p => `
        <div class="sidebar-chat-item chat-trigger" data-id="${p.id}" role="button" tabindex="0">
          <div class="sidebar-chat-avatar">
            <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
          </div>
          <div class="sidebar-chat-info">
            <div class="sidebar-chat-header">
              <span class="sidebar-chat-name">${p.name}</span>
              <span class="sidebar-chat-time">${p.chatTime || 'Hoy'}</span>
            </div>
            <div style="font-size: 0.7rem; color: #fde047; margin-bottom: 2px;">
              <i class="fas fa-spa"></i> ${p.profession}
            </div>
            <div class="sidebar-chat-preview">
              ${p.chatPreview || '✨ Ha sentido tu resonancia en el Oráculo...'}
            </div>
          </div>
        </div>
      `).join('');

      chatList.querySelectorAll('.chat-trigger').forEach(item => {
        item.addEventListener('click', () => {
          const id = parseInt(item.dataset.id);
          const profile = this.profiles.find(p => p.id === id);
          if (profile) this.openChatWith(profile);
        });
      });
    }
  }

  /* -------------------------------------------------------------
     Filtros del Radar Cósmico
     ------------------------------------------------------------- */
  bindRadarFilters() {
    const filterBtns = document.querySelectorAll('.element-chip-btn');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const elementFilter = btn.dataset.element;

        const cards = document.querySelectorAll('.m-radar-card');
        cards.forEach(card => {
          if (elementFilter === 'todos' || card.dataset.element === elementFilter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });

        if (window.mysticAudio) window.mysticAudio.playChime('normal');
      });
    });
  }

  /* -------------------------------------------------------------
     Celebración de Sincronía
     ------------------------------------------------------------- */
  triggerMatchCelebration(profile) {
    const modal = document.getElementById('match-celebration-modal');
    const matchAvatar = document.getElementById('match-target-avatar');
    const matchName = document.getElementById('match-target-name');

    if (!modal) return;
    if (matchAvatar) matchAvatar.src = profile.images[0];
    if (matchName) matchName.textContent = profile.name;

    modal.classList.add('active');
    if (window.mysticAudio) window.mysticAudio.playChime('success');
  }

  bindMatchModal() {
    const modal = document.getElementById('match-celebration-modal');
    const keepPlayingBtn = document.getElementById('btn-keep-swiping');
    const startChatBtn = document.getElementById('btn-match-start-chat');

    if (keepPlayingBtn && modal) {
      keepPlayingBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    if (startChatBtn && modal) {
      startChatBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        const msgTab = document.querySelector('[data-view="view-messages"]');
        if (msgTab) msgTab.click();
        const current = this.profiles[this.currentCardIndex - 1] || this.profiles[0];
        this.openChatWith(current);
      });
    }
  }

  /* -------------------------------------------------------------
     Sistema de Chat Móvil
     ------------------------------------------------------------- */
  bindChatSystem() {
    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatOverlay = document.getElementById('chat-screen-overlay');
    if (closeChatBtn && chatOverlay) {
      closeChatBtn.addEventListener('click', () => {
        chatOverlay.classList.remove('open');
      });
    }

    const chatForm = document.getElementById('chat-send-form');
    const chatInput = document.getElementById('chat-msg-input');
    const chatBody = document.getElementById('chat-body-messages');

    if (chatForm && chatInput && chatBody) {
      chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        const sentBubble = document.createElement('div');
        sentBubble.className = 'chat-bubble sent';
        sentBubble.textContent = text;
        chatBody.appendChild(sentBubble);

        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;

        if (window.mysticAudio) window.mysticAudio.playChime('normal');

        // Respuesta inteligente según el perfil del terapeuta
        setTimeout(() => {
          const replyBubble = document.createElement('div');
          replyBubble.className = 'chat-bubble received';
          const currentProfile = this.activeChatProfile || this.profiles[0];
          const pool = currentProfile.replies || [
            "✨ Qué hermosa resonancia. Compartir la vocación terapéutica hace que cada palabra tenga peso real.",
            "Me conmovió mucho tu respuesta en el Oráculo. ¿Cuándo nos tomamos un té de hierbas y charlamos?",
            "Siento que nuestras cartas natales estaban destinadas a cruzarse en este momento exacto."
          ];
          replyBubble.textContent = pool[Math.floor(Math.random() * pool.length)];
          chatBody.appendChild(replyBubble);
          chatBody.scrollTop = chatBody.scrollHeight;

          if (window.mysticAudio) window.mysticAudio.playChime('success');
        }, 900);
      });
    }
  }

  openChatWith(profile) {
    this.activeChatProfile = profile;
    const chatOverlay = document.getElementById('chat-screen-overlay');
    const chatTitle = document.getElementById('chat-active-name');
    const chatAvatar = document.getElementById('chat-active-avatar');
    const chatSubtitle = document.getElementById('chat-active-status');
    const chatBody = document.getElementById('chat-body-messages');
    if (!chatOverlay) return;

    if (chatTitle) chatTitle.textContent = `${profile.name}, ${profile.age}`;
    if (chatAvatar) chatAvatar.src = profile.images[0];
    if (chatSubtitle) chatSubtitle.innerHTML = `<span style="color:#fde047;">${profile.profession}</span> • ${profile.synastry} afinidad`;

    // Mensajes de bienvenida mística iniciales
    if (chatBody) {
      chatBody.innerHTML = `
        <div class="chat-system-date">Sincronía sellada por el Oráculo ✦ ${profile.synastry} afinidad</div>
        <div class="chat-bubble received">${profile.chatPreview || '✨ Hola colega del camino. Qué alegría coincidir en Mística.'}</div>
      `;
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    chatOverlay.classList.add('open');
    if (window.mysticAudio) window.mysticAudio.playChime('normal');
  }

  bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      const topCard = document.querySelector('.mobile-card-stack .swipe-card:last-child');
      if (!topCard || this.currentCardIndex >= this.profiles.length) return;

      if (e.key === 'ArrowLeft') {
        this.swipeAction('left', this.profiles[this.currentCardIndex], topCard);
      } else if (e.key === 'ArrowRight') {
        this.swipeAction('right', this.profiles[this.currentCardIndex], topCard);
      } else if (e.key === 'ArrowUp') {
        this.swipeAction('up', this.profiles[this.currentCardIndex], topCard);
      } else if (e.key === ' ') {
        e.preventDefault();
        this.openProfileSheet(this.profiles[this.currentCardIndex]);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.datingApp = new DatingAppManager();
});
