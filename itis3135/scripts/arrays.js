let persons = [];
let salaries = [];

// Function to add a person and salary
function addSalary() {
    const nameInput = document.getElementById("nameInput");
    const salaryInput = document.getElementById("salaryInput");

    const name = nameInput.value.trim();
    const salary = parseFloat(salaryInput.value.trim());

    if (name === "" || isNaN(salary)) {
        alert("Please enter valid name and numeric salary.");
        return;
    }

    persons.push(name);
    salaries.push(salary);

    nameInput.value = "";
    salaryInput.value = "";

    nameInput.focus();

    const modifySelect = document.getElementById("modifySelect");
    const option = document.createElement("option");
    option.text = name;
    modifySelect.add(option);
    
    displaySalary();
}

// Function to modify salary of a person
function modifySalary() {
    const modifySelect = document.getElementById("modifySelect");
    const newSalaryInput = document.getElementById("newSalaryInput");

    const selectedPersonIndex = modifySelect.selectedIndex;
    const newSalary = parseFloat(newSalaryInput.value.trim());

    if (selectedPersonIndex === -1 || isNaN(newSalary)) {
        alert("Please select a person and enter a numeric salary.");
        return;
    }

    salaries[selectedPersonIndex] = newSalary;

    newSalaryInput.value = "";

    modifySelect.selectedIndex = -1;
}

// Function to display average and highest salary
function displayResults() {
    const resultsDiv = document.getElementById("results");

    if (salaries.length === 0) {
        resultsDiv.innerHTML = "<p>No data available.</p>";
        return;
    }

    const average = salaries.reduce((acc, curr) => acc + curr, 0) / salaries.length;
    const highest = Math.max(...salaries);

    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: ${average.toFixed(2)}</p>
        <p>Highest Salary: ${highest.toFixed(2)}</p>
    `;
}

// Function to display salaries in a table
function displaySalary() {
    const tableBody = document.querySelector("#results_table tbody");
    tableBody.innerHTML = "";

    for (let i = 0; i < persons.length; i++) {
        const row = `
            <tr>
                <td>${persons[i]}</td>
                <td>${salaries[i].toFixed(2)}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    }
}

// Move cursor to name field when the application starts
window.onload = function() {
    document.getElementById("nameInput").focus();
};