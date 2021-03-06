var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    gulp.watch('app/**/*').on('change' , browserSync.reload);
});
