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

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
