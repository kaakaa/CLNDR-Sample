watch( 'haml/(.*)\.haml' )      {|md| system("bundle exec haml haml/#{md[1]}.haml #{md[1]}.html") }
watch( 'sass/(.*)\.scss' )      {|md| system("bundle exec sass --style expanded sass/#{md[1]}.scss css/#{md[1]}.css") }
