const { src, dest } = require("gulp");
// const sass = require('gulp-sass');
const sass = require("gulp-sass")(require("sass"));
const csso = require("csso");
const include = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
// const {deleteAsync} = require('del');
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync").create();
function html() {
  return src("src/**.html")
    .pipe(
      include({
        prefix: "@@",
      })
    )
    .pipe(dest("dist"));
}
function scss() {
  return (
    src("src/scss/**.scss")
      .pipe(sass())
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 2 versions"],
        })
      )
      // .pipe(csso())
      .pipe(concat("index.css"))
      .pipe(dest("dist"))
  );
}

exports.html = html;
exports.scss = scss;
