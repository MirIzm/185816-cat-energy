"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var mininfy = require ("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");

gulp.task("style", function() {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe (mininfy())
    .pipe(gulp.dest("source/css"))
    .pipe(rename("style.min.css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

gulp.task("images", function () {
   return gulp.src("source/img/**/*.{png,jpg,svg}")
     .pipe(imagemin([
       imagemin.optipng({optimizationLevel: 3}),
       imagemin.jpegtran({progressive: true}),
       imagemin.svgo()
     ]))
     .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});

  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/*.html").on("change", server.reload);
});
