# Práctica 2 - La Sociedad de la Justicia de los Mondongos

## Descripción

"Tierra 2 se encuentra en un momento crítico de su existencia, el Antimonitor amenaza con acabar con la existencia tal y como la conocemos. Mundos vivirán, mundos morirán, nada volverá a ser lo mismo."

En este contexto, se ha creado un portal web destinado a reunir a los mejores héroes de Tierra 2 para enfrentar la amenaza. Este portal permite visualizar los héroes disponibles y añadir nuevos posibles defensores.

### Características Principales

- **Página Principal**: Muestra todos los héroes disponibles. Incluye:
  - Un componente principal que envuelve el resto de elementos de la página.
  - Un componente genérico para cada héroe que muestra su imagen, nombre y permite reproducir un sonido asociado.
  - Opción para eliminar a un héroe, preferentemente mediante un modal, integrando un método de autenticación basado en el creador del héroe.

- **Página Única por Héroe**: Cada héroe tiene su propia página dedicada con información detallada.

- **Página de Búsqueda de Héroes**: Permite buscar héroes específicos dentro del portal.

- **Página de Creación de Héroe**:
  - Incluye un formulario para añadir nuevos héroes, solicitando imagen, sonido, nombre, y un string `creator` para autenticación de eliminación.
  - Es esencial que la imagen y el sonido sean archivos reales y funcionales, ya que afectarán la evaluación del proyecto. Se recomienda usar servicios como [catbox.moe](https://catbox.moe/) para subir archivos.

