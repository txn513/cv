module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    concat: {
      build: {
          files: {
            'dist/<%= pkg.name %>.js' : ['js/*.js']
          },
        },
    },

    jshint: {
      all: ['Gruntfile.js', 'js/cv.js']
    },

    less: {
      development: {
        files: {
          'css/style1.css': 'less/style.less'
        }
      },
    },

    watch: {
      scripts: {
        files: 'js/*.js',
        tasks: ['jshint','uglify'],
        options: {
          interrupt: true,
        },
      },
      less: {
        files: 'less/*.js',
        tasks: ['less'],
        options: {
          interrupt: true,
        },
      }
    },


  });

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('compress', ['concat','jshint','uglify']);
  grunt.registerTask('watchfile', ['watch']);
  grunt.registerTask('compileless', ['less']);

};