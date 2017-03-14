QUnit.test( "Suma", function( assert ) {
  assert.equal(suma(5,4), 9, "Suma correcta" );
});

QUnit.test( "Resta", function( assert ) {
  assert.equal(resta(5,4), 1, "Resta correcta" );
});

QUnit.test( "Multiplicacion", function( assert ) {
  assert.equal(multiplicacion(5,4), 20, "Multiplicación Correcta" );
});

QUnit.test( "División", function( assert ) {
  assert.equal(division(5,4), 1.25, "División correcta" );
});

QUnit.test( "Hola", function( assert ) {
  assert.equal(hola("Mundo"), "Hola Mundo", "Hola correcto" );
});

QUnit.test( "Negacion", function( assert ) {
  assert.equal(negacion(true), false, "Negación correcta" );
  assert.equal(negacion(false), true, "Negación correcta" );
});

QUnit.test( "Iguales", function( assert ) {
  assert.equal(iguales(1,1), true, "Iguales correcto" );
  assert.equal(iguales(1,2), false, "Iguales correcto" );
});
