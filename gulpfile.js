const gulp = require('gulp');
const deploy = require('gulp-gh-pages');
const ghPages = require('gh-pages'); // Добавляем gh-pages

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev', 'js:dev'),
		gulp.parallel('server:dev', 'watch:dev')
	)
);

gulp.task(
	'docs',
	gulp.series(
		'clean:docs',
		gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'fonts:docs', 'files:docs', 'js:docs'),
		gulp.parallel('server:docs')
	)
);

// Объединяем задачи deploy в одну
gulp.task('deploy', function (cb) {
  // Замените на имя вашего репозитория и путь к сборке вашего проекта
  const deployPath = './build';

  // Развертываем на GitHub Pages с использованием gulp-gh-pages
  return gulp.src(deployPath + '/**/*')
    .pipe(deploy({
      remoteUrl: "https://github.com/gumirus/HTML_layout_of_the_site.git",
      branch: "gh-pages"
    }))
    .on('error', function(err) {
      console.log(err); // Выводим ошибки в консоль, если есть
      cb(err); // Прерываем выполнение задачи при ошибке
    });
});
