# Sulparang Ambient Free 0.1.1

## Instala con la URL del repositorio en HACS

Añade la edición gratuita a Home Assistant con HACS configurado. Selecciona el tipo Dashboard.

Si aún no tienes HACS, sigue primero su guía oficial. [HACS](https://www.hacs.xyz/docs/use/download/download/)

### 1. Abre los repositorios personalizados

En Home Assistant, abre HACS → menú ⋮ arriba a la derecha → Custom repositories.

### 2. Añade el repositorio

Pega la URL siguiente, selecciona Dashboard como tipo y pulsa Add.

```
https://github.com/glory-stone/sulparang-ambient
```

### 3. Descarga la edición gratuita

Busca Sulparang Ambient en HACS, ábrelo y descárgalo. Actualiza el navegador al terminar. Añade primero el repositorio personalizado; aún no aparece en el catálogo predeterminado.

### 4. Añade la tarjeta

Edita el panel → Añadir tarjeta → Manual. Guarda esta configuración y pulsa un icono para escuchar en este dispositivo.

```
type: custom:sulparang-ambient
language: es
```

Si no se encuentra la tarjeta, revisa Ajustes → Paneles → Recursos y comprueba que la URL siguiente esté registrada como módulo JavaScript. Los paneles YAML pueden requerir registro manual. Al migrar desde la instalación manual, elimina el recurso anterior /local/sulparang-ambient/ y conserva solo el de HACS.

```
/hacsfiles/sulparang-ambient/sulparang-ambient.js
```

Descarga las actualizaciones en HACS y actualiza el navegador. Para desinstalar, elimina la tarjeta del panel y la descarga de HACS.

## Instalar manualmente con ZIP


Necesitas una cuenta de administrador de Home Assistant y acceso a su carpeta de configuración. Utiliza un navegador compatible con Web Audio, como Chrome, Edge, Firefox o Safari.

## 1. Descarga y extrae

Descomprime el ZIP. Conserva juntos el archivo JavaScript y los archivos MP3 dentro de sulparang-ambient.

## 2. Copia a Home Assistant

Usa Samba, Studio Code Server u otra herramienta para copiar la carpeta completa a esta ruta. Crea www si no existe y reinicia Home Assistant si es la primera vez que la creas. En Container, usa www dentro del volumen de configuración.

```
/config/www/sulparang-ambient/
  sulparang-ambient.js
  rain.mp3
  fire.mp3
```

## 3. Registra el recurso

Activa el modo avanzado en tu perfil. Abre Ajustes → Paneles → menú superior derecho → Recursos. Añade esta URL y selecciona Módulo JavaScript.

```
/local/sulparang-ambient/sulparang-ambient.js?v=0.1.1
```

## 4. Añade la tarjeta

Edita el panel → Añadir tarjeta → Manual. Pega y guarda esta configuración. Idiomas disponibles: ko, en, zh, es, ja.

```
type: custom:sulparang-ambient
language: es
```

## 5. Actualiza y escucha

Actualiza la página y pulsa un icono. Púlsalo de nuevo para detenerlo. Selecciona varios sonidos para mezclarlos. El audio sale por el dispositivo del navegador actual.

## 6. Actualiza o desinstala

Antes de actualizar, guarda una copia de la carpeta, sustituye los archivos, cambia la versión de la URL del recurso y actualiza la página. Para desinstalar, elimina la tarjeta y el recurso, y después la carpeta.

## FAQ

### ¿No se encuentra la tarjeta?

Revisa la URL y el tipo Módulo JavaScript. Abre /local/sulparang-ambient/sulparang-ambient.js en el navegador con sesión iniciada y fuerza la recarga.

### ¿No se oye nada?

Comprueba el volumen, la pestaña silenciada y la salida de audio. Los archivos MP3 deben estar junto al archivo JavaScript. Puede ser necesario pulsar primero para permitir el audio.

### ¿Puedo controlar otro altavoz?

La edición gratuita reproduce en el navegador actual. No incluye altavoces remotos, radio, campanadas horarias ni supervisión del sistema.
