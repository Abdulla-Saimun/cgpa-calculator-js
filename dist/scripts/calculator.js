const cal_button = document.getElementById('cal-btn');
const cal_form = document.getElementById('calform');
const result_box = document.querySelector('.box2');
const selectedSemester = document.getElementById('semester_select');
const remarks_box = document.querySelector('.remarks_text');
const total_credit_box = document.querySelector('.credit_text');

selectedSemester.addEventListener('change', () => {
    const semesterQuantity = selectedSemester.value;
    createForm(semesterQuantity);
});

function createForm(quantity){
    cal_form.innerHTML = '';
    document.getElementById('result').innerHTML = '';
    let i;
    for(i=0; i < quantity; i++) {
        const x = document.createElement('input');
        x.type = 'text';
        x.placeholder = `SGPA of Semester ${i+1} `;
        x.setAttribute('class', 'sgpa');
        x.classList.add('mb-1');
        
        const y = document.createElement('input');
        y.type = 'text';
        y.placeholder = `credit of Semester ${i+1}`;
        y.setAttribute('class', 'credit');
        y.classList.add('mb-1');

        cal_form.appendChild(x);
        cal_form.appendChild(y);
    }
}

const cgpaCalculate = () => {
    const sgpa = document.querySelectorAll('.sgpa');
    const credit = document.querySelectorAll('.credit');
    let totalCreditnSgpa = 0,
      totalCredit = 0,
      remarks = '';
    for (let i = 0; i < sgpa.length; i++) {
      if (sgpa[i].value == '' || credit[i].value == '') {
        alert('Fill all input box.');
        return;
      } else if (sgpa[i].value == '' && credit[i].value == '') {
        alert('Fill all input box.');
        return;
      } else if (!+sgpa[i].value || !+credit[i].value) {
        alert('Invalid input and must be Number!');
        return;
      } else if (+sgpa[i].value > 4) {
        alert("SGPA can't be greater then 4!");
        return;
      } else {
        totalCreditnSgpa +=
          parseFloat(sgpa[i].value) * parseFloat(credit[i].value);
        totalCredit += parseFloat(credit[i].value);
        result_box.classList.remove('box2_hidden');
  
        total_credit_box.innerHTML = `Total Credit : ${totalCredit}`;
        const cgpa = parseFloat(totalCreditnSgpa / totalCredit).toFixed(2);
        console.log(cgpa);
              
        remarks =
        cgpa > 3.75
          ? 'Outstanding 🔥'
          : cgpa <= 3.75 && cgpa > 3.5
          ? 'Excellent 🎉'
          : cgpa <= 3.5 && cgpa > 3.25
          ? 'Very Good 😍'
          : cgpa <= 3.25 && cgpa > 3
          ? 'Good 👍'
          : cgpa <= 3 && cgpa > 2.75
          ? 'Satisfactory 🙂'
          : cgpa <= 2.75 && cgpa > 2.5
          ? 'Above Average 😕'
          : cgpa <= 2.5 && cgpa > 2.25
          ? 'Average 😟'
          : cgpa <= 2.25 && cgpa > 2
          ? 'Below Average 😔'
          : cgpa <= 2 && cgpa > 1.99
          ? 'Pass 🙄'
          : 'Fail 😞';
  
        document.getElementById('result').innerHTML = `Your CGPA : ${cgpa}`;
        remarks_box.innerHTML = `Remarks : ${remarks}`;
      }
    }
  };

cal_button.addEventListener('click', cgpaCalculate);
