/* helper.js
   Fungsi-fungsi dasar untuk perhitungan vektor dan matrix.
   Meskipun dalam demo ini kita sudah menggunakan gl-matrix,
   file ini bisa digunakan untuk fungsi tambahan atau pembungkus
   operasi vektor/matriks sesuai kebutuhan.
*/

// Contoh fungsi membuat vektor 3D
function createVec3(x, y, z) {
  return [x, y, z];
}

// Fungsi penjumlahan dua vektor
function addVec3(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

// Fungsi perkalian vektor dengan skalar
function scaleVec3(v, s) {
  return [v[0] * s, v[1] * s, v[2] * s];
}

// Fungsi dot product dari dua vektor
function dotVec3(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

// Ekspos fungsi jika diperlukan di global scope
window.helper = {
  createVec3: createVec3,
  addVec3: addVec3,
  scaleVec3: scaleVec3,
  dotVec3: dotVec3,
};
