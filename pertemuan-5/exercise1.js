//Buatlah fungsi untuk menghitung BMI (Body Mass Index)
//Rumus : BMI = berat / (tinggi * tinggi),
//berat dalam kg dan tinggi dalam meter
//170cm = 1.7 m
//Fungsi tersebut menerima 2 parameter yaitu berat dan tinggi
//Dan mengembalikan output berupa BMI

let berat = 40;
let tinggi = 1.58;

function BMI () {
    console.log ("Berat = " +  berat)
    console.log("Tinggi = " +  tinggi)

    let hasil = berat / (tinggi * tinggi)
    console.log("Hasil Hitung BMI = "  + hasil.toFixed(2))
}

BMI();