var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    scsslint = require('gulp-scss-lint');

// Tarea que debería encapsular todo.
// Tiene que recargar el servidor si se produce algún cambio
//                    el navegador si se produce algún cambio
//                    mantener la tarea watch de sass
//                    ejecutar la tarea sass, por si hubo algún cambioee
gulp.task('serve', ['browser-sync', 'sass:watch', 'sass']);

// Browser sync, espera a que nodemon se reinicie y si lo hace, recarga el
// navegador del cliente.
gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: 'http://0.0.0.0:8080',
        files: ['public/**/*.*', 'views/*.ejs', 'routes/*.js'],
        port: 7000
    });
});

// Esta tarea abre el servidor en el puerto 8080 y lo reinicia si detecta
// cambios en los ficheros .js, .html y .ejs. TODO: añadir los css
gulp.task('nodemon', function() {
    nodemon({
        script: 'bin/www',
        ext: 'js html ejs css',
        env: {'NODE_ENV': 'development'}
    }).on('start', function() {
        if (!called) {
            called = true;
            cb();
        }
    });
});

// Tarea que compila todos los sass del directorio /public/sass y los coloca
// en /public/css.
gulp.task('sass', function() {
    return gulp.src('./public/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

// Esta tarea vigila el directorio /public/sass y relanza la tarea sass en
// en caso de que cambie algún fichero.
gulp.task('sass:watch', function() {
    gulp.watch('./public/sass/*.scss', ['sass']);
});

gulp.task('lint', ['lint:jshint', 'lint:jscs', 'lint:scss']);

// Tarea para pasar el JSHint a el código
gulp.task('lint:jshint', function() {
    gulp.src(['public/js/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

// Tarea para pasar el JSCS a el código
gulp.task('lint:jscs', function() {
    return gulp.src(['gulpfile.js', 'public/js/*.js', 'routes/*.js'])
        .pipe(jscs())
        .pipe(jscs.reporter());
});

// Tarea para pasar el SCSS-Lint a el código
gulp.task('lint:scss', function() {
    return gulp.src('public/sass/*.scss')
        .pipe(scsslint());
});
