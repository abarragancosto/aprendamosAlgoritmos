# Aprendamos Algoritmos

El proyecto contenido en este repositorio es un proyecto creado para un Trabajo Fin de Grado del Grado de Ingeniería Informática.

En este repositorio está contenido el código de una skill de Alexa junto con un .apk de una aplicación Android con la que se conecta mediante un WebSocket. Además, contiene la memoria utilizada para la defensa del proyecto.

El objetivo principal de la skill es que el usuario aprenda a resolver un problema basado en el problema de los caminos mínimos. Para ello, la skill dispone de un problema a modo de ejemplo mediante el cual se le va explicando al usuario cómo debe resolver dicho ejemplo. Además, la skill dispone de un problema que el usuario debe resolver. Esta resolución se va realizando mediante preguntas y respuesta. Cuando el usuario falla en la respuesta a una pregunta, la skill le proporcionará información sobre cómo debe resolver la pregunta realizada anteriormente.

## Tecnologías usadas:
Para la realización de la skill se ha utilizado NodeJS
Para la realización de la aplicación Android se ha utilizado Kotlin
Para la comunicación entre aplicaciones se ha utilizado un herramientas de AWS como son:
  * API Gateway para disponibilizar un WebSocket
  * Lambdas para ejecutar funciones para la conexión y desconexión con el WebSocket y para la comunicación entre las aplicaciones
  * DynamoDB para el almacenamiento de datos en la nube.


## Comunicación entre la skill y la aplicación Android

Lo más atractivo de este proyecto es la comunicación entre la skill de Alexa y la aplicación Android. Para hacer esta comunicación posible se ha disponibilizado un API de webSocket con 3 endpoint. Cada endpoint activará una función lamba que realizará acciones en la base de datos de DynamoDB. A continuación se detallan estas 3 rutas disponibles:
* “connect”: Ruta a la que llamarán tanto la aplicación Android como la skill para conectarse al webSocket. Esta ruta, cuando es llamada, activa una función lambda que se encarga de guardar en la base de datos un identificador del cliente que ha realizado la llamada a la ruta.
* “disconnect”: Ruta que será llamada para la desconexión del webSocket. La llamada a esta ruta activa una función lambda que se encarga de ir a la base de datos y eliminar ese dispositivo de ella y de esta manera cortar la conexión.
* “sendMessage”: Ruta a la que se llamará para enviar mensajes a través del webSocket. Esta ruta, activa una función lambda que recupera el mensaje recibido en el cuerpo de la petición, accede a la base de datos y envía mensajes a los dispositivos conectados.
