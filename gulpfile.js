var gulp           = require('gulp'),
    minifyCss      = require('gulp-clean-css'), //css压缩
    uglify         = require('gulp-uglify'),     //js压缩
    watch          = require('gulp-watch'),      //监控文件
    autoprefixer   = require('gulp-autoprefixer'), //css3自动添加前缀
    babel          = require("gulp-babel"),    //ES6编译成ES5
    rename         = require('gulp-rename'),     // 重命名
    sourcemaps     = require('gulp-sourcemaps'),  // 生成maps文件
    concat         = require('gulp-concat'),      //合并文件
    less           = require('gulp-less');       //编译less成css

function byless(name){
 return gulp.src([name +'/less/*.less'])
    .pipe(watch(name+'/less/*.less'))
    .pipe(less())
    // .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(gulp.dest(name +'/css'));
}
gulp.task('homeLess',function(){
  return byless('home');
});
gulp.task('clothesLess',function(){
  return byless('clothes');
});
gulp.task('houseLess',function(){
  return byless('house');
});
gulp.task('snacksLess',function(){
  return byless('snacks');
});
gulp.task('Less',['homeLess','clothesLess','houseLess','snacksLess']);


function byjs(name){
  return gulp.src([name+'/js/*.js'])
      .pipe(watch(name+'/js/*.js'))
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(uglify())
      .pipe(rename({"suffix":'.min'}))
      .pipe(sourcemaps.write("../js_map"))
      .pipe(gulp.dest(name+"/js_min"));
}

gulp.task("homeJs",function(){
  return byjs('home');
});
gulp.task("clothesJs",function(){
  return byjs('clothes');
});
gulp.task("houseJs",function(){
  return byjs('house');
});
gulp.task("snacksJs",function(){
  return byjs('snacks');
});
gulp.task('libjs',function(){
  return byjs('libs');
})

gulp.task("Js",['homeJs','clothesJs','houseJs','snacksJs']);


gulp.task('concat',function(){
  gulp.src('libs/js_min/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('libs'));
})




