/* Importamos gulp */
const gulp = require('gulp');

/* Otros módulos que vayamos a necesitar */
// Importamos el Server para usarlo
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

// creamos el Concat 
var concat = require('gulp-concat');
 
 // lo definimos para q concatene los archivos en el archivo all.js de dist
gulp.task('scripts', function() {
  return gulp.src(['./src/**/*.js','!mocks/**','!vendor/**'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});


// watch lanzamos el validador formal de codigo
const eslint = require('gulp-eslint');
/*Los * son los cops o comodines si le antepongo ! no coge ese archivo*/
gulp.task('lint', () => {
  return gulp.src(['src/**/*.js','!mocks/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Server,  lanzamos el servidor browserSync, es una tarea importante, 
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src',
      index: 'index.html',
      https: false/*,
      middleware: [ apiFallback() ] */
    },
  });

  gulp.watch("src/app/**/*.js").on("change", reload);
});
/*copia el archivo pez en la carpeta mar sin modificaciones*/
gulp.task('sinTrabajoEnLasTuberias', function() {
   return gulp.src('pez.js')
   .pipe(gulp.dest('./mar/'));
});

/*copia el archivo pez en la carpeta mar pero haciendo modificaciones, concateno pipe*/
gulp.task('conTrabajoEnLasTuberias', function() {
   return gulp.src('pez.js')
   .pipe()
   .pipe()
   .
   .
   .pipe(gulp.dest('./mar/'));
});

/* El task default es el que se ejecuta cuando
no le pasamos ninguna a gulp   */
/*gulp.task('default', function() {
    console.log('Default');
});*/

/* Definimos un array con los tasks que deben ejecutarse concluida esta*/
gulp.task('default', ['sinTrabajoEnLasTuberias'], function() {
  console.log('Executing gulp...');
});
 
gulp.task('default', ['browserSync'], function() {
    console.log('Default');
});
