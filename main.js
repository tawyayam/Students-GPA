let inputs = document.querySelectorAll('.input-group input[type=number]')
// Focus On First Input When Page Load
window.onload = function() {
  inputs[0].focus()
}
// Prevent User To Write More than 3 Nums
inputs.forEach(input => {
  input.addEventListener("input", ()=>{
    if(input.value.length > 3){
      input.value = input.value.substr(0,3);
    }
  });
});


function getGPA(grade) {
  if (grade >= 95) return 4.0;
  if (grade >= 90 && grade < 95) return 3.7;
  if (grade >= 87 && grade < 90) return 3.3;
  if (grade >= 83 && grade < 87) return 3.0;
  if (grade >= 80 && grade < 83) return 2.7;
  if (grade >= 77 && grade < 80) return 2.3;
  if (grade >= 73 && grade < 77) return 2.0;
  if (grade >= 70 && grade < 73) return 1.7;
  if (grade >= 65 && grade < 70) return 1.3;
  if (grade >= 60 && grade < 65) return 1.0;
  return 0.0;
}

document.querySelector('form').onsubmit = function(e) {
  e.preventDefault()
  calculateGPA()
}

function calculateGPA() {
  const grade1 = parseFloat(
    document.getElementById("subject1Grade").value
  );
  const grade2 = parseFloat(
    document.getElementById("subject2Grade").value
  );
  const grade3 = parseFloat(
    document.getElementById("subject3Grade").value
  );
  const grade4 = parseFloat(
    document.getElementById("subject4Grade").value
  );
  const grade5 = parseFloat(
    document.getElementById("subject5Grade").value
  );
  const grade6 = parseFloat(
    document.getElementById("subject6Grade").value
  );
  const grade7 = parseFloat(
    document.getElementById("subject7Grade").value
  );

  // عدد الساعات الثابتة
  const hours1 = 3; // أصول الفقه (1)
  const hours2 = 3; // فقه الأسرة
  const hours3 = 3; // فقه المعاملات
  const hours4 = 2; // مدخل العلوم القانونية
  const hours5 = 3; // الفقه الجنائي
  const hours6 = 2; // التطبيقات اللغوية
  const hours7 = 1; // القرآن الكريم (5)

  const gpa1 = getGPA(grade1) * hours1;
  const gpa2 = getGPA(grade2) * hours2;
  const gpa3 = getGPA(grade3) * hours3;
  const gpa4 = getGPA(grade4) * hours4;
  const gpa5 = getGPA(grade5) * hours5;
  const gpa6 = getGPA(grade6) * hours6;
  const gpa7 = getGPA(grade7) * hours7;

  const totalGPA = gpa1 + gpa2 + gpa3 + gpa4 + gpa5 + gpa6 + gpa7;
  const totalHours =
    hours1 + hours2 + hours3 + hours4 + hours5 + hours6 + hours7;
  const finalGPA = totalGPA / totalHours;

  document.getElementById(
    "result"
  ).innerHTML = `المعدل الفصلي: <span>${finalGPA.toFixed(2)}</span>`;
  alert("تنبيه: بعض الفواصل تقريبية")
}