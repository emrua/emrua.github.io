function preventSubmission(event) {
    event.preventDefault();

    // Perform form validation
    const form = document.getElementById("introForm");
    const name = form.elements["name"].value.trim();
    const mascot = form.elements["mascot"].value.trim();
    const image = form.elements["image"].files[0];
    const imageCaption = form.elements["imageCaption"].value.trim();
    const personalBackground = form.elements["personalBackground"].value.trim();
    const professionalBackground = form.elements["professionalBackground"].value.trim();
    const academicBackground = form.elements["academicBackground"].value.trim();
    const webDevelopmentBackground = form.elements["webDevelopmentBackground"].value.trim();
    const primaryPlatform = form.elements["primaryPlatform"].value.trim();

    if (name === "" || mascot === "" || !image || imageCaption === "" || personalBackground === "" || professionalBackground === "" || academicBackground === "" || webDevelopmentBackground === "" || primaryPlatform === "") {
        alert("Please fill out all the required fields.");
        return false;
    }

    // Check if image is of type PNG or JPG
    const imageType = image.type.split("/")[1];
    if (imageType !== "png" && imageType !== "jpg" && imageType !== "jpeg") {
        alert("Please upload a PNG or JPG image.");
        return false;
    }

    // Proceed with form submission
    submitForm();
}

function resetForm() {
    document.getElementById("introForm").reset();
    document.getElementById("formResult").innerHTML = "";
}

function addCourseTextBox() {
    const courseList = document.getElementById("courseList");
    const newCourseInput = document.createElement("input");
    newCourseInput.type = "text";
    newCourseInput.name = "course";
    newCourseInput.placeholder = "Enter course name";
    courseList.appendChild(newCourseInput);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        courseList.removeChild(newCourseInput);
        courseList.removeChild(deleteButton);
    };
    courseList.appendChild(deleteButton);
}

document.getElementById("addCourseButton").addEventListener("click", addCourseTextBox);

function submitForm() {
    const form = document.getElementById("introForm");
    const formData = new FormData(form);

    let resultHTML = "<h2>Introduction Page</h2>";
    formData.forEach((value, key) => {
        resultHTML += `<p><strong>${key}:</strong> ${value}</p>`;
    });

    document.getElementById("formResult").innerHTML = resultHTML;
}