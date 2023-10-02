var students = ["Engin Demiroğ", "Salih Demiroğ", 25];
// document.getElementById("demo").innerHTML = students;
students[1] = "Ulaş Demiroğ";
students.push("Ahmet Sait Duran");
students[students.length] = "Derin Demiroğ";

document.getElementById("demo").innerHTML = students[4];
