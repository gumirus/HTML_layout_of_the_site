const gulp = require('gulp');
const deploy = require('gulp-gh-pages');
const ghPages = require('gh-pages'); 


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


gulp.task('deploy', function (cb) {

  const deployPath = './build';


  return gulp.src(deployPath + '/**/*')
    .pipe(deploy({
      remoteUrl: "https://github.com/gumirus/HTML_layout_of_the_site.git",
      branch: "gh-pages"
    }))
    .on('error', function(err) {
      console.log(err); 
      cb(err); 
    });
});
