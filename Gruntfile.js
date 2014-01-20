module.exports = function(grunt) {
  grunt.initConfig({
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      },
    },
    cssmin: {
      compress: {
        files: {
          'assets/app.min.css': ['css/app.css']
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/intro.js', 'js/logo.js', 'js/base.js', 'js/main.js', 'js/outro.js'],
        dest: 'assets/app.js',
      },
    },
    watch: {
      files: ['sass/*.scss', 'js/*.js'],
      tasks: ['compass', 'cssmin', 'concat']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
