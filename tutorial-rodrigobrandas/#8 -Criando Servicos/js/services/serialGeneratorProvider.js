angular.module("listaTelefonicaApp").provider("serialGenerator", function serialGeneratorProvider() {

  var _length = 10;

  this.getLength = function(){
    return _length;
  };

  this.setLength = function(valLength){
    _length = valLength;
  };

  this.$get = function(){

    return {
        generator: function(){
          var serial = "";

          while (serial.length < _length) {
              serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
          }

          return serial;
        }
    };
  };
});
