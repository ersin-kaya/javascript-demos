// var counter = 0;
// function add() {
//   counter += 1;
//   return counter;
// }

// function someOtherFunction() {
//   counter += 10;
// }

// Function Closure
var add = (function () {
  // burada add'i self-invoking function dediğimiz bir yöntemle oluşturuyoruz: (function (){})(); --> uygulama derlendiğinde bu fonksiyon bir kereliğine otomatik olarak çalışıyor...
  // Tanımlanan değişkenler bir seferliğine oluşturulur ve ondan sonra tekrar oluşturulmaz!!
  // Değişkenlere sadece add işlemi içerisinden erişilebilir, add için protect edilen/korunan değişkenler olarak düşünebiliriz!!
  var counter = 0;
  return function () {
    return (counter += 1);
  };
})();
