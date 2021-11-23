var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));// Подключаем sсss пакет
var browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Конвертируем Sass в CSS через gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browser Sync
		server: { // Определяем параметры сервера
			baseDir: 'app' // Директория для сервера - app
		},
		notify: false // Отключаем уведомления
	});
});

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
