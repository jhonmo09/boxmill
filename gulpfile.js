const gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	notify = require("gulp-notify");

gulp.task('sass', ()=>
	gulp.src('assets/sass/style.scss')
		.pipe(sourcemaps.init())
		.pipe(plumber({ errorHandler: function(err) {
        notify.onError({
            title: "Gulp error in " + err.plugin,
            message:  err.toString()
        })(err);
    }}))
		.pipe(sass({
			outputStyle: 'compressed',
		}))
		.pipe(autoprefixer({
			versions: ['last 2 browsers']
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./assets/css'))
		.pipe(notify({message: "Sass task complete"}))
);



gulp.task('watch', () => {
	gulp.watch('assets/sass/**/**.scss', ['sass']);
})

gulp.task('default',['sass', 'watch']);
