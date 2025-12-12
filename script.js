
const resultForm = document.getElementById('resultForm');
const formSection = document.getElementById('form-section');
const listSection = document.getElementById('list-section');
const studentTableBody = document.getElementById('studentTableBody');


resultForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    if (!resultForm.checkValidity()) {
        event.stopPropagation();
        resultForm.classList.add('was-validated'); 
        return;
    }

   
    const rollNo = document.getElementById('rollNo').value;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const score = document.getElementById('score').value;

  
    addStudentToTable(rollNo, name, dob, score);

    
    alert('Student result added successfully!');
    resultForm.reset();
    resultForm.classList.remove('was-validated');
    
    
    showResults(); 
});


function addStudentToTable(rollNo, name, dob, score) {
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${rollNo}</td>
        <td>${name}</td>
        <td>${dob}</td>
        <td>${score}</td>
    `;
    
    studentTableBody.appendChild(newRow);
}


function showResults() {
    formSection.classList.add('d-none');
    listSection.classList.remove('d-none');
}


function showForm() {
    listSection.classList.add('d-none');
    formSection.classList.remove('d-none');
}