if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'button-generator'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'button-generator'.");
}
this['button-generator'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    println('Hello JavaScript!');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('button-generator', _);
  return _;
}(typeof this['button-generator'] === 'undefined' ? {} : this['button-generator'], kotlin);
