function generateGradeButton(grade) {
    return '<button class="default-tabs2 grade-button">' + grade + '</button>';
  }
  
  document.querySelector("#sd").onclick = function () {
    const slots = document.querySelectorAll('.tabs-kelas div');
    
    slots.forEach((slot, index) => {
      if (index < 6) {
          slot.innerHTML = generateGradeButton(index  + 1);
        }; 
        });
      }
  
  
  document.querySelector("#smp").onclick = function () {
    const slots = document.querySelectorAll('.tabs-kelas div');
    
    slots.forEach((slot, index) => {
      if (index < 6) {
        if (index === 0) {
          slot.innerHTML = generateGradeButton(7);
        } else if (index === 2) {
          slot.innerHTML = generateGradeButton(8);
        } else if (index === 4) {
          slot.innerHTML = generateGradeButton(9);
        } else {
          slot.innerHTML = '';
        }
      }
    });
  };
  
  document.querySelector("#sma").onclick = function () {
    const slots = document.querySelectorAll('.tabs-kelas div');
    
    slots.forEach((slot, index) => {
      if (index < 6) {
        if (index === 0) {
          slot.innerHTML = generateGradeButton(10);
        } else if (index === 2) {
          slot.innerHTML = generateGradeButton(11);
        } else if (index === 4) {
          slot.innerHTML = generateGradeButton(12);
        } else {
          slot.innerHTML = '';
        }
      }
    });
  };
  
  document.addEventListener('click', function (event) {
    if (event.target.matches('.grade-button')) {
      const selectedGrade = event.target.textContent;
      console.log('Grade ' + selectedGrade + ' button clicked.');
    }
  });