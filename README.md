# Prueba tecnica MONOMA

1. Login: esta página debe tener 2 inputs con sus respectivas validaciones (campo de
email: Que sea un email correcto y que sea requerido, password: que se pueda
cambiar el type mediante un icono, de password a text mediante un evento click).
Para la lógica de ingreso o login debes utilizar un archivo .json para poder validar
tanto el correo electrónico como el password ingresado, debe contener un loading,
se deben lanzar alertas que se avisen que respuesta se obtuvo de la validación del
usuario (puedes utilizar la librería sweetalert 2 o maquetarlo desde 0 o los alerts de
los frameworks de diseño).

## Solución Login 
Para la solución del sistema de logueo propuse la siguiente vista:
![login monoma](https://github.com/juxnmxG/Prueba-tecnica-monoma/assets/61563571/fb12a266-0538-47f0-8784-76de2440aba2)

colocando dos inputs requeridos con los campos de email y contraseña y se utilizo el logo de MONOMA, para la verificación de datos se despliega una alerta en caso de que alguno haya dado error como se podra ver en la imagen siguiente:

![alertas monoma](https://github.com/juxnmxG/Prueba-tecnica-monoma/assets/61563571/7ec68893-4682-45bc-bc69-0c20bd1a5cf3)

en caso de que no haya error el usuario podra acceder sin ningun inconveniente al dashboard.

## Nota:
para poder hacer el respectivo ingreso a la plataforma he creado un json como se indicaba en uno de los requerimientos de la prueba, los datos de ingresos son:

```json
   [
  {
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJjb3JyZW8iOiJ1c3VhcmlvMUBleGFtcGxlLmNvbSIsImNvbnRyYXNlw7FhIjoiY29udHJhc2XDsWExIn0.HgK8s623iKDGj-YjEKT-_2wLXc8PGjihQvsZ6r8r0E0",
    "email": "usuario1@example.com",
    "password": "contraseña1"
  },
  {
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJjb3JyZW8iOiJ1c3VhcmlvMkBleGFtcGxlLmNvbSIsImNvbnRyYXNlw7FhIjoiY29udHJhc2XDsWEyIn0.FP_wQAt4NuNgtpC6cCtyOXP5ptQM_hBwUPu-A0cxDds",
    "email": "usuario2@example.com",
    "password": "contraseña2"
  },
  {
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJjb3JyZW8iOiJ1c3VhcmlvM0BleGFtcGxlLmNvbSIsImNvbnRyYXNlw7FhIjoiY29udHJhc2XDsWEzIn0.bHKv7yq3wUzQPb9xg06RfZBKjtEvUswZMs2o4zpX1Fw",
    "email": "usuario3@example.com",
    "password": "contraseña3"
  },
  {
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJjb3JyZW8iOiJ1c3VhcmlvNEBleGFtcGxlLmNvbSIsImNvbnRyYXNlw7FhIjoiY29udHJhc2XDsWE0In0.oVS2AbHPfJTEcoOm9I7Fo4-FcH7WpAANbBy93mziXfw",
    "email": "usuario4@example.com",
    "password": "contraseña4"
  },
  {
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJjb3JyZW8iOiJ1c3VhcmlvNUBleGFtcGxlLmNvbSIsImNvbnRyYXNlw7FhIjoiY29udHJhc2XDsWE1In0.sUXhYlyTfBp5uTEpK4NNe6H5fyR-bf8LbrPPvgFlI8U",
    "email": "usuario5@example.com",
    "password": "contraseña5"
  }
]
```
##
Principal o dashboard: En esta página debe contener un navbar o header en el
que pueda ver el logo o texto de como llamarias el proyecto (Puedes utilizar el logo
de monoma sin inconveniente), y debe tener una lista de cartas de máximo 10 cartas
de pokemones por página, y en la parte final de la página debe haber una
“paginación” indicando cuantas paginas tengo para poder ver los distintos
pokemons.
Cada una de las cartas debe abrir un modal o página donde aparezca la información
del pokémon seleccionado. En el header del dashboard debe haber un avatar que al
momento de hacer click se me despliegue un menú donde uno de ellos se el botón
de cerrar sesión (Sería un plus si se pudiera ver una página con la información del
usuario logueado)
Debes generar un token (puedes crear un token en la página de JWT token y
colocarlo en la respuesta del endpoint o del objeto que creaste en el archivo json)
que debes guardar en el localStorage o sessionStorage como gustes para poder
validar que este mismo existe, si ingresas a la página del dashboard y no existe este
token debes enviarlo a la página de login y si ingresas a la pagina del login y existe
este token debes enviarlo a la página del dashboard.

## Solución dashboard
Para esta solución he propuesto la siguiente vista:
![Dasboard monoma](https://github.com/juxnmxG/Prueba-tecnica-monoma/assets/61563571/fa70857d-d819-4f42-9795-862890c07654)

donde se puede evidenciar el diseño requerido, y poniendo colores personalizados dependiendo el tipo de pokemon que se muestre, cada tipo de pokemon tiene un color que lo identifica como se muestra en la imagen. Tambien se puede observar la paginación.

![paginate](https://github.com/juxnmxG/Prueba-tecnica-monoma/assets/61563571/814aa290-a7a4-4a0f-8d92-052be80bc67a)

Al dar click en cada carta se depliega un popup con la información de pokemon de manera que podremos ver los detalles del pokemon:
![details monoma](https://github.com/juxnmxG/Prueba-tecnica-monoma/assets/61563571/4e289df3-4e54-4324-820c-b7d56ba6bab0)

para el  header he colocado el logo de MONOMA y un botón que muestra una imagén del usuario que al dar click despliega un dropdwon con diferentes opciones 
![logo monoma](https://github.com/juxnmxG/Prueba-tecnica-monoma/assets/61563571/477ebce1-b3f2-4ecc-937a-b9602ede9bed)

al dar click en cuenta nos llevara hacia la inforación del usuario, en este caso hice un diseño básico
![account monoma](https://github.com/juxnmxG/Prueba-tecnica-monoma/assets/61563571/322c0b6b-02bb-46ef-adc1-8ffd0a9f23dd)


## Notas:

para poder ejecutar la aplicación se realiza con el comando npm run dev ya que esta creada apartir de vite
