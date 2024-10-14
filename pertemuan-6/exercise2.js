// Ubah / Modifikasi Exercise 1
// Menggunakan
//1. IIFE
//2. Callback Function

//1. IIFE
let BMI = (function (berat, tinggi) {
    return berat / (tinggi*tinggi)
}) (40, 1.7);

console.log("Hasil Hitung BMI :", BMI.toFixed(2))

//2. Callback Function
function index(callback) {
    let result= callback(40, 1.7)
    return result;
}
let bodyMiss = index(function(berat, tinggi) {
    return berat/(tinggi*tinggi)
})
console.log("Hasil Hitung BMI :",bodyMiss.toFixed(2))