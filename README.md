#ETSII ULL Grado de Informatica 
#Práctica:

#Comma Separated Values

For more information look at:

* La sección *Práctica: Comma Separated Values. CSV* de los [apuntes](http://crguezl.github.io/pl-html/node11.html)
* La [descripción de la práctica](https://casianorodriguezleon.gitbooks.io/pl1516/content/practicas/csv.html)
* See it working at [CSV en GitHub Pages](http://crguezl.github.io/csv/)
* See also [CSV](http://en.wikipedia.org/wiki/Comma-separated_values) at Wikipedia.

Dependencias globales:
* `gulp`
* `bower`
* `jshint`
* `jscs`

Hay que tener instaladas las gemas `sass` y `scss-lint`
##Anotación sobre Heroku.
* Heroku sólo realiza el deploy en la rama master, cualquier archivo subido a otra rama (Ejemplo de este proyecto rama Heroku) al realizar git push heroku master no funcionará. Importante también que se debe realizar el npm install de node.js para instalar las dependencias del proyecto.

##Enlace de tutorial de Heroku:
[Tutorial Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

##Comandos más importantes de Heroku:
* heroku login
* heroku create
* heroku apps
* heroku logs
