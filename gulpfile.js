const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const browserify = require('browserify')
const watchify = require('watchify')
const babel = require('babelify')

const compile = (doWatch, example) => {
  const file = !example ? 'AccessibleFAIcon' : 'example'
  const dest = !example ? 'dist' : 'example'
  var bundler = browserify(`./src/${file}.js`,
                    {debug: true}).transform(babel)
  if (doWatch) { bundler = watchify(bundler) }
  function rebundle() {
    bundler.bundle()
      .on('error', (err) => {console.error(err); this.emit('end')})
      .pipe(source(`${file}.js`))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest(`./${dest}`))
  }

  if (doWatch) {
    bundler.on('update', () => {
      console.log('-> bundling...')
      rebundle()
    })
  }

  rebundle()
}

const watch = () => { compile(true) }
const watchExample = () => { compile(true, true) }

gulp.task('build', () => { compile() })
gulp.task('build:example', () => { compile(false, true) })
gulp.task('watch', () => { watch() })
gulp.task('watch:example', () => { watchExample() })
