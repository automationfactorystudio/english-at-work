/* ============================================================
   CONTENIDO DE "ENGLISH AT WORK"
   Aquí está TODO el texto del juego. Para adaptarlo al trabajo
   de tu compañero, edita solo este archivo (no hace falta tocar
   index.html).

   Cada nivel tiene 5 bloques:
   - vocab:      { en, es }                       -> palabras (emparejar y aprender)
   - cloze:      { t, o, a, es }                  -> frase con ___ ; o = opciones ; a = respuesta ; es = explicación
   - orden:      { en, es }                       -> frase para ordenar ; es = traducción
   - escuchar:   { en, o, a }                     -> frase que se oye ; o = opciones en español ; a = posición (0,1,2) de la correcta
   - escenarios: { ctx, say, o:[{t, ok, why}] }   -> situación ; say = lo que te dicen ; solo UNA opción con ok:true
   ============================================================ */

window.CONTENIDO = {
  niveles: {

    /* ───────────────────────── BÁSICO ───────────────────────── */
    basico: {
      nombre: "Básico",
      emoji: "🌱",
      desc: "Saludos, frases cortas y vocabulario del día a día en la oficina.",
      vocab: [
        { en: "meeting", es: "reunión" },
        { en: "schedule", es: "horario / agenda" },
        { en: "deadline", es: "fecha límite" },
        { en: "email", es: "correo electrónico" },
        { en: "colleague", es: "compañero/a de trabajo" },
        { en: "boss", es: "jefe/a" },
        { en: "customer", es: "cliente" },
        { en: "invoice", es: "factura" },
        { en: "appointment", es: "cita" },
        { en: "break", es: "descanso" },
        { en: "office", es: "oficina" },
        { en: "report", es: "informe" }
      ],
      cloze: [
        { t: "Good ___, Mr. Smith. How are you?", o: ["morning", "night", "eat"], a: "morning", es: "«Good morning» es el saludo de la mañana." },
        { t: "I have a ___ at 10 o'clock.", o: ["meeting", "meet", "meets"], a: "meeting", es: "Después de «a» necesitamos un sustantivo: «a meeting» (una reunión)." },
        { t: "Please ___ me an email.", o: ["send", "sends", "sending"], a: "send", es: "Tras «please» usamos el verbo base: «Please send me…»." },
        { t: "Can you help ___?", o: ["me", "I", "my"], a: "me", es: "Después de un verbo usamos «me» (a mí): «help me»." },
        { t: "The office ___ at nine.", o: ["opens", "open", "opening"], a: "opens", es: "Con «the office» (3.ª persona) el verbo lleva -s: «opens»." },
        { t: "I am ___ to see you.", o: ["happy", "happily", "happiness"], a: "happy", es: "Después de «I am» va un adjetivo: «happy» (contento)." }
      ],
      orden: [
        { en: "Nice to meet you", es: "Encantado/a de conocerte" },
        { en: "Can I speak to Anna, please?", es: "¿Puedo hablar con Anna, por favor?" },
        { en: "I will send you the report today", es: "Te enviaré el informe hoy" },
        { en: "What time is the meeting?", es: "¿A qué hora es la reunión?" },
        { en: "Thank you for your help", es: "Gracias por tu ayuda" },
        { en: "See you tomorrow at nine", es: "Hasta mañana a las nueve" }
      ],
      escuchar: [
        { en: "Could you repeat that, please?", o: ["¿Podría repetir eso, por favor?", "¿Podría cerrar la puerta, por favor?", "¿Puedo salir antes, por favor?"], a: 0 },
        { en: "The meeting is at three.", o: ["La cena es a las tres.", "La reunión es a las tres.", "La reunión es a las cuatro."], a: 1 },
        { en: "I am sorry, I am late.", o: ["Lo siento, llego tarde.", "Lo siento, me voy ya.", "Gracias, llego pronto."], a: 0 },
        { en: "Please send me the invoice.", o: ["Por favor, dame el informe.", "Por favor, envíame la factura.", "Por favor, llama al cliente."], a: 1 },
        { en: "Where is the printer?", o: ["¿Dónde está el baño?", "¿Dónde está el jefe?", "¿Dónde está la impresora?"], a: 2 },
        { en: "I need a day off.", o: ["Necesito un día libre.", "Necesito un café.", "Necesito un ordenador."], a: 0 }
      ],
      escenarios: [
        {
          ctx: "Tu jefa se acerca a tu mesa por la mañana.",
          say: "Good morning! Do you have a minute?",
          o: [
            { t: "Yes, of course. How can I help you?", ok: true, why: "Educada y natural. Muestra que estás disponible." },
            { t: "No.", ok: false, why: "Es demasiado seca para hablar con tu jefa." },
            { t: "I am eat lunch.", ok: false, why: "Gramática incorrecta: sería «I am eating lunch», y además no responde a la pregunta." }
          ]
        },
        {
          ctx: "Un cliente llama por teléfono a la empresa.",
          say: "Hello, I would like to speak to the manager.",
          o: [
            { t: "The manager is not here, bye.", ok: false, why: "Corta la llamada de forma muy brusca." },
            { t: "One moment, please. I will transfer you.", ok: true, why: "Perfecta: amable y profesional («transfer» = pasar la llamada)." },
            { t: "I don't know.", ok: false, why: "No ayuda al cliente ni resulta profesional." }
          ]
        },
        {
          ctx: "Un compañero te invita a comer.",
          say: "Are you free for lunch?",
          o: [
            { t: "Lunch yesterday I.", ok: false, why: "El orden de las palabras no es correcto en inglés." },
            { t: "I am free no.", ok: false, why: "Debería ser «No, I am not free»." },
            { t: "Sure, let's go at one.", ok: true, why: "Natural y amable: «Sure» = claro, «let's go» = vamos." }
          ]
        },
        {
          ctx: "Tu jefe te pide un informe.",
          say: "Can you send me the report by Friday?",
          o: [
            { t: "I send it ago Friday.", ok: false, why: "«Ago» no se usa así; se dice «by Friday» (para el viernes)." },
            { t: "No, never.", ok: false, why: "Una negativa tan seca no es profesional." },
            { t: "Yes, I will send it by Friday.", ok: true, why: "Clara y correcta: confirmas que cumplirás el plazo." }
          ]
        }
      ]
    },

    /* ─────────────────────── INTERMEDIO ─────────────────────── */
    intermedio: {
      nombre: "Intermedio",
      emoji: "🌿",
      desc: "Correos, reuniones, plazos y respuestas más completas.",
      vocab: [
        { en: "agenda", es: "orden del día" },
        { en: "follow up", es: "hacer seguimiento" },
        { en: "attach", es: "adjuntar" },
        { en: "reschedule", es: "reprogramar" },
        { en: "budget", es: "presupuesto" },
        { en: "feedback", es: "opinión / comentarios" },
        { en: "workload", es: "carga de trabajo" },
        { en: "postpone", es: "aplazar" },
        { en: "handle", es: "encargarse de" },
        { en: "supplier", es: "proveedor" },
        { en: "urgent", es: "urgente" },
        { en: "confirm", es: "confirmar" }
      ],
      cloze: [
        { t: "I am writing to ___ our appointment.", o: ["confirm", "confirms", "confirming"], a: "confirm", es: "Después de «to» usamos el verbo base: «to confirm»." },
        { t: "Please find the document ___.", o: ["attached", "attach", "attaching"], a: "attached", es: "La fórmula habitual en correos es «Please find the document attached»." },
        { t: "Could we ___ the meeting to Thursday?", o: ["reschedule", "rescheduled", "rescheduling"], a: "reschedule", es: "Tras «could we» va el verbo base: «reschedule» (cambiar la fecha)." },
        { t: "I will ___ up with the client tomorrow.", o: ["follow", "following", "followed"], a: "follow", es: "«Follow up with» = hacer seguimiento con alguien. Tras «will» va el verbo base." },
        { t: "We are running ___ of time.", o: ["out", "off", "over"], a: "out", es: "«Run out of time» = quedarse sin tiempo." },
        { t: "I look forward ___ hearing from you.", o: ["to", "for", "at"], a: "to", es: "La expresión fija es «look forward to» + -ing." }
      ],
      orden: [
        { en: "I am writing to confirm our meeting on Monday", es: "Te escribo para confirmar nuestra reunión del lunes" },
        { en: "Could we move the deadline to next week?", es: "¿Podríamos mover la fecha límite a la semana que viene?" },
        { en: "I will get back to you as soon as possible", es: "Te responderé lo antes posible" },
        { en: "Please find the invoice attached", es: "Adjunto encontrarás la factura" },
        { en: "I apologise for the delay in my reply", es: "Pido disculpas por el retraso en mi respuesta" },
        { en: "Let me know if you need anything else", es: "Avísame si necesitas algo más" }
      ],
      escuchar: [
        { en: "Let's postpone the call until tomorrow.", o: ["Hagamos la llamada ahora mismo.", "Aplacemos la llamada hasta mañana.", "Cancelemos la reunión de mañana."], a: 1 },
        { en: "I will get back to you shortly.", o: ["Te respondo en breve.", "Te llamo ayer.", "No te voy a responder."], a: 0 },
        { en: "We are over budget this month.", o: ["Estamos por debajo del presupuesto.", "Este mes no hay presupuesto.", "Nos hemos pasado del presupuesto este mes."], a: 2 },
        { en: "Could you give me some feedback?", o: ["¿Podrías darme tu opinión?", "¿Podrías darme tu número?", "¿Podrías darme un descanso?"], a: 0 },
        { en: "I am working from home today.", o: ["Hoy llego tarde a casa.", "Hoy trabajo desde casa.", "Hoy no trabajo."], a: 1 },
        { en: "The supplier has not replied yet.", o: ["El proveedor todavía no ha respondido.", "El cliente ya ha respondido.", "El proveedor llega mañana."], a: 0 }
      ],
      escenarios: [
        {
          ctx: "Un cliente está molesto por un retraso en la entrega.",
          say: "The delivery is late again. What is going on?",
          o: [
            { t: "It is not my problem.", ok: false, why: "Poco profesional: el cliente se sentirá ignorado." },
            { t: "I apologise for the delay. I will check it and call you back today.", ok: true, why: "Pides disculpas, te comprometes a investigar y das un plazo." },
            { t: "Delay is happen because traffic.", ok: false, why: "Gramática incorrecta y suena a excusa. Mejor: «The delay was caused by traffic»." }
          ]
        },
        {
          ctx: "Tu jefe quiere darte otro proyecto, pero ya vas muy cargado/a.",
          say: "Can you take on this project too?",
          o: [
            { t: "No, I won't.", ok: false, why: "Es una negativa demasiado dura y sin explicación." },
            { t: "Yes yes yes, everything.", ok: false, why: "Aceptar todo sin pensar puede perjudicarte y no suena profesional." },
            { t: "I would be happy to, but my workload is full. Could we adjust the deadlines?", ok: true, why: "Muestras disposición, explicas el problema y propones una solución." }
          ]
        },
        {
          ctx: "Un compañero no puede ir a la reunión de mañana.",
          say: "I can't attend the meeting. Can we reschedule?",
          o: [
            { t: "No problem. How about Thursday at 11?", ok: true, why: "Flexible y proactivo: propones una alternativa concreta." },
            { t: "Reschedule not possible.", ok: false, why: "Suena brusco y la frase está incompleta." },
            { t: "You are always absent.", ok: false, why: "Es un reproche innecesario que genera mal ambiente." }
          ]
        },
        {
          ctx: "Un cliente potencial te pide precios por correo.",
          say: "Could you send me a quote for 50 units?",
          o: [
            { t: "Quote is expensive.", ok: false, why: "No responde a lo que pide y no es una frase correcta." },
            { t: "Thank you for your enquiry. I will send you a quote by tomorrow.", ok: true, why: "Agradeces, confirmas la petición y das un plazo." },
            { t: "Send me the number first.", ok: false, why: "Demasiado directo y sin cortesía para un cliente." }
          ]
        }
      ]
    },

    /* ───────────────────────── AVANZADO ───────────────────────── */
    avanzado: {
      nombre: "Avanzado",
      emoji: "🌳",
      desc: "Negociar, gestionar problemas y hablar con seguridad en reuniones.",
      vocab: [
        { en: "negotiate", es: "negociar" },
        { en: "stakeholder", es: "parte interesada" },
        { en: "delegate", es: "delegar" },
        { en: "milestone", es: "hito" },
        { en: "streamline", es: "agilizar / optimizar" },
        { en: "bottleneck", es: "cuello de botella" },
        { en: "escalate", es: "escalar (a un superior)" },
        { en: "deliverable", es: "entregable" },
        { en: "align", es: "alinear / ponerse de acuerdo" },
        { en: "leverage", es: "aprovechar" },
        { en: "onboard", es: "incorporar a un nuevo empleado" },
        { en: "turnaround time", es: "plazo de entrega" }
      ],
      cloze: [
        { t: "We need to ___ this issue to senior management.", o: ["escalate", "escalator", "escalated"], a: "escalate", es: "Tras «need to» va el verbo base: «escalate» (elevar un problema a la dirección)." },
        { t: "The main ___ in the process is the approval stage.", o: ["bottleneck", "bottle", "neckline"], a: "bottleneck", es: "«Bottleneck» (cuello de botella) es el punto que frena todo el proceso." },
        { t: "Let's ___ our priorities before the launch.", o: ["align", "aligns", "aligned"], a: "align", es: "Con «let's» usamos el verbo base: «align» (ponernos de acuerdo)." },
        { t: "I would like to ___ some tasks to the team.", o: ["delegate", "delegation", "delegated"], a: "delegate", es: "Tras «would like to» va el verbo base: «delegate» (delegar)." },
        { t: "Despite the delays, we are on ___ to meet the deadline.", o: ["track", "time", "road"], a: "track", es: "«On track» = en el buen camino, según lo previsto." },
        { t: "As agreed, I am ___ the signed contract.", o: ["enclosing", "enclosure", "encloses"], a: "enclosing", es: "«I am enclosing…» es una fórmula formal para decir «adjunto»." }
      ],
      orden: [
        { en: "We should streamline the approval process to reduce delays", es: "Deberíamos agilizar el proceso de aprobación para reducir retrasos" },
        { en: "I would appreciate it if you could review the proposal", es: "Le agradecería que pudiera revisar la propuesta" },
        { en: "Let's schedule a call to align on the next steps", es: "Programemos una llamada para ponernos de acuerdo en los siguientes pasos" },
        { en: "Unfortunately, we are unable to meet the original deadline", es: "Lamentablemente, no podemos cumplir el plazo original" },
        { en: "I would like to raise a concern about the budget", es: "Me gustaría plantear una preocupación sobre el presupuesto" },
        { en: "Could you walk me through the main findings?", es: "¿Podrías explicarme paso a paso las conclusiones principales?" }
      ],
      escuchar: [
        { en: "We need to escalate this to the management team.", o: ["Tenemos que escalar esto a la dirección.", "Tenemos que cancelar esto con el equipo.", "Tenemos que contratar a un nuevo equipo."], a: 0 },
        { en: "Let's circle back on this next week.", o: ["Demos una vuelta a la oficina la semana que viene.", "Retomemos esto la semana que viene.", "Olvidemos esto para siempre."], a: 1 },
        { en: "The turnaround time is five working days.", o: ["La reunión dura cinco días.", "El descanso es de cinco días.", "El plazo de entrega es de cinco días laborables."], a: 2 },
        { en: "I will keep you in the loop.", o: ["Te mantendré informado.", "Te dejaré fuera del proyecto.", "Te llamaré en bucle."], a: 0 },
        { en: "Could you walk me through the figures?", o: ["¿Podrías acompañarme a la salida?", "¿Podrías explicarme las cifras paso a paso?", "¿Podrías cambiar las cifras?"], a: 1 },
        { en: "We are slightly behind schedule.", o: ["Vamos un poco adelantados.", "Vamos algo retrasados.", "No tenemos horario."], a: 1 }
      ],
      escenarios: [
        {
          ctx: "Un cliente importante está muy enfadado por un retraso.",
          say: "We were promised the deliverables last week. This is unacceptable.",
          o: [
            { t: "Calm down.", ok: false, why: "Decirle a alguien enfadado que se calme suele empeorar la situación." },
            { t: "I understand your frustration and I apologise. Let me explain what happened and propose a solution.", ok: true, why: "Empatía + disculpa + plan. Es la fórmula ideal para gestionar una queja." },
            { t: "It was not our fault, check your email.", ok: false, why: "Culpar al cliente destruye la confianza." }
          ]
        },
        {
          ctx: "En una reunión, la dirección pide ideas para reducir gastos.",
          say: "We need to cut costs by ten percent. Any ideas?",
          o: [
            { t: "Fire people.", ok: false, why: "Poco matizado y nada constructivo." },
            { t: "I don't have an opinion.", ok: false, why: "Pierdes la oportunidad de aportar valor." },
            { t: "I suggest we streamline the approval process and renegotiate with our main supplier.", ok: true, why: "Propones medidas concretas con vocabulario profesional." }
          ]
        },
        {
          ctx: "Estás negociando con un cliente que quiere un descuento.",
          say: "Your price is too high. Can you offer a discount?",
          o: [
            { t: "No discount, take it or leave it.", ok: false, why: "Cierra la negociación de golpe y suena arrogante." },
            { t: "We could offer five percent if you commit to a longer contract.", ok: true, why: "Cedes algo, pero pides algo a cambio: así se negocia." },
            { t: "Discount is yes.", ok: false, why: "Frase incorrecta y concedes sin condiciones." }
          ]
        },
        {
          ctx: "Una compañera está desbordada de trabajo.",
          say: "I'm swamped today. Could you cover for me this morning?",
          o: [
            { t: "Sure, I can cover the morning. Let me know what needs to be done.", ok: true, why: "Ayudas, concretas el horario y preguntas por las tareas." },
            { t: "Not my job.", ok: false, why: "Seca y poco colaborativa." },
            { t: "Cover is difficult for me.", ok: false, why: "Frase poco natural: «cover for someone» es el verbo que se usa." }
          ]
        }
      ]
    }

  }
};
