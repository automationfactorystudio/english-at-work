# English at Work

Mini-app web para practicar **inglés del trabajo** con minijuegos, puntos, vidas, estrellas y racha diaria. Funciona en móvil y ordenador, sin registro y sin instalar nada.

## Qué incluye

**3 niveles:** Básico, Intermedio y Avanzado. Se puede cambiar de nivel en cualquier momento.

**6 secciones:**

| Sección | Qué se hace |
|---|---|
| Aprender | Repasar vocabulario y frases útiles con audio |
| Emparejar | Unir cada palabra en inglés con su significado |
| Completar huecos | Elegir la palabra que falta en una frase |
| Ordenar frases | Poner las palabras en el orden correcto |
| Escuchar | Oír una frase en inglés y elegir su significado |
| Responde en el trabajo | Situaciones reales con jefe, clientes y compañeros |

El progreso (puntos, estrellas y racha) se guarda en el propio dispositivo.

## Archivos

- `index.html`: la app (diseño y juegos).
- `contenido.js`: **todo el texto** (vocabulario, frases y situaciones).

Los dos archivos deben estar **en la misma carpeta**.

## Publicarla en GitHub Pages

1. Crea un repositorio **público** y sube `index.html`, `contenido.js` y este `README.md`.
2. Entra en **Settings → Pages**.
3. En *Build and deployment*, elige **Deploy from a branch**, rama **main** y carpeta **/ (root)**. Guarda.
4. Espera uno o dos minutos. El enlace aparecerá arriba, con esta forma: `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`
5. Para verlo como app en el móvil: abre el enlace y usa **Añadir a pantalla de inicio**.

## Cambiar el contenido

Abre `contenido.js` y edita solo los textos entre comillas. Cada nivel tiene 5 bloques:

| Bloque | Formato |
|---|---|
| `vocab` | `{ en: "meeting", es: "reunión" }` |
| `cloze` | `{ t: "I have a ___ at 10.", o: ["meeting","meet","meets"], a: "meeting", es: "Explicación" }` |
| `orden` | `{ en: "Nice to meet you", es: "Encantado de conocerte" }` |
| `escuchar` | `{ en: "Where is the printer?", o: ["opción 0","opción 1","opción 2"], a: 2 }` (`a` es la posición de la correcta: 0, 1 o 2) |
| `escenarios` | `{ ctx: "Situación", say: "Lo que te dicen", o: [{ t: "Respuesta", ok: true, why: "Por qué" }, ...] }` |

Reglas que conviene respetar:

- En `cloze`, la frase `t` lleva **un solo** `___`, y la respuesta `a` debe estar escrita igual que en `o`.
- En `escenarios`, solo **una** opción lleva `ok: true`.
- Cada línea termina en coma, excepto la última de cada lista.
- Si tocas algo y la app deja de cargar, normalmente falta una coma o una comilla. Revisa la línea que acabas de editar.

Para adaptarla a otro sector (oficina, tienda, hostelería…), cambia las frases y el vocabulario en `contenido.js`; el resto no hace falta tocarlo.

## Notas

- La voz en inglés es la del navegador. Suena mejor en Chrome y Safari, y puede variar según el móvil.
- Si el dispositivo no tiene voz, el juego «Escuchar» avisa y el resto sigue funcionando.
- Para borrar el progreso, usa **Borrar mi progreso** al final del menú.

Hecho con HTML y JavaScript, sin librerías externas.
