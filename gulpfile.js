'use strict';

const gulp = require('gulp'); // gulpを読み込む
var uglify = require('gulp-uglify'); // gulp-uglifyを読み込む

// 「uglify」タスクを定義する
gulp.task('uglify', function () {
  // タスクを実行するファイルを指定
  // gulp.src('./src/js/example.js')
  gulp.src('./src/js/example.js', {"allowEmpty": true})
    // 実行する処理をpipeでつないでいく
    .pipe(uglify()) // uglifyを実行
    .pipe(gulp.dest('dist')) // 圧縮したファイルをdistに出力
});

gulp.task('task1', function () {
  return consolo.log('hello');
});

// gulp.task('task2', ['task1'], function () {        // ←3系での書き方。4系だとエラーになる
gulp.task('task2', gulp.task('task1'), function () {
  console.log('world');
});

gulp.task('default', gulp.task('task2'));


// var sass = require("gulp-sass");                   // gulp-sass単体にはsassコンパイラーが含まれなくなったため、"sass"をインストールして、↓の書き方にする必要がある
const sass = require('gulp-sass')(require('sass'));

gulp.task("sass", function () {
  gulp.src("./src/sass/**/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("./dist/css"))
});
