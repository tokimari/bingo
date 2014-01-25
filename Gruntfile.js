module.exports = function(grunt) {

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      },
      sprite: {
        options: {
          imageDir: 'img',
          sassDir: 'sass/sprite',
          cssDir: 'css/',
          environment: 'production'
        }
      }
    },
    cssmin: {
      compress: {
        files: {
          'assets/app.min.css': ['css/app.css', 'css/sprite.css']
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
      tasks: ['compass:dist', 'cssmin', 'concat']
    }
    
  });

  grunt.registerTask('default', [
    'compass:sprite', 'compass:dist', 'cssmin', 'concat'
  ]);

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
