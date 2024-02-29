function displayTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const dayOfMonth = currentDate.getDate();
    const year = currentDate.getFullYear();

    const timeString = `Today is ${hours}:${minutes} on ${dayOfWeek}, ${dayOfMonth} ${month}, ${year}`;
    document.getElementById('timeDate').textContent = timeString;
}

function submitForm() {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const userMood = document.getElementById('userMood').value;
    const favoriteNumber = Math.abs(Math.round(parseFloat(document.getElementById('favoriteNumber').value)));

    document.getElementById('greeting').innerHTML = `
        <p>Empathetic Armadillo welcomes you, ${userName}!</p>
        <p>We're glad you are feeling ${userMood}!</p>
    `;

    getPolygon(favoriteNumber);
}

function provideInsult() {
    alert("You're as graceful as a herd of elephants in a china shop!");
}

function calculateTax() {
    const income = parseFloat(prompt("Enter your income:"));
    const taxRate = 0.2;
    const taxAmount = income * taxRate;
    alert(`Your tax amount is $${taxAmount.toFixed(2)}.`);
}

function playSound() {
    alert("Woof woof! 🐶");
}

function countSheep() {
    const numSheep = Math.floor(Math.random() * 10) + 1;
    alert(`Counting sheep... ${numSheep} sheep jumped over the fence.`);
}

function getPolygon() {
    const number = Math.abs(Math.round(parseFloat(prompt("Enter your favorite number (0-10):"))));
    const polygons = ['Point', 'Monogon', 'Digon', 'Triangle', 'Quadrilateral', 'Pentagon', 'Hexagon', 'Heptagon', 'Octagon', 'Nonagon', 'Decagon'];
    const polygonName = (number >= 0 && number <= 10) ? polygons[number] : 'Polygon with ' + number + ' sides';
    alert(`Your favorite polygon is: ${polygonName}`);
}

// Call the displayTime function when the page is loaded
window.onload = function() {
    displayTime();
};
