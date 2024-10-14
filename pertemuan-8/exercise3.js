

let hitung = {
    firstName: "Nisa",
    weight: 40, 
    height: 1.7, 
  
    hitungBMI: function () {
      let formula = this.weight / (this.height * this.height);
      this.BMI = formula.toFixed(2);
    },
  
    kategori: function () {
      if (this.BMI <= 16.0) {
        return "Severly Underweight";
      } else if (this.BMI >= 16.0 && this.BMI <= 18.4) {
        return "Underweight";
      } else if (this.BMI >= 18.5 && this.BMI <= 24.9) {
        return "Normal";
      } else if (this.BMI >= 25.0 && this.BMI <= 29.9) {
        return "Overweight";
      } else if (this.BMI >= 30.0 && this.BMI <= 34.9) {
        return "Moderately Obese";
      } else if (this.BMI >= 35.0 && this.BMI <= 39.9) {
        return "Severely Obese";
      } else if (this.BMI >= 40.0) {
        return "Morbidly Obese";
      } else {
        return "Not Found";
      }
    },
  };
  
  hitung.hitungBMI();
  
  console.log("Name: " + hitung.firstName);
  console.log("Weight: " + hitung.weight + " kg");
  console.log("Height: " + hitung.height + " m");
  console.log("Calculated BMI: " + hitung.BMI);
  console.log("KategoriBMI: " + hitung.kategori());