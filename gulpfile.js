'use strict';

// 非推奨のtask()APIを使わないやり方。
// タスクごとに関数を作り、CommonJSのmodule機能を使う
// https://ics.media/entry/3290/

const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// コンパイルタスク本体
const compileSass = () =>
  src("src/sass/**/*.scss")
    .pipe(
      sass({outputStyle: "expanded"}).on('error', sass.logError)
    )
    .pipe(dest("dist/css"));

// ファイル監視の部分
const watchSassFile = () => watch("src/sass/**/*.scss", compileSass);

// "default"タスクとして公開
exports.default = watchSassFile;
