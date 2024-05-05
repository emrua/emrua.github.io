$(document).ready(function() {
    // Initialize date picker for the start date
    $("#start-date").datepicker({
        dateFormat: "mm/dd/yy",
        minDate: 1 // Tomorrow or later
    });

    // Event listener for inquiry type change
    $("#inquiry-type").on("change", function() {
        var selectedType = $(this).val();

        // Reset additional sections visibility
        $("#additional-info").hide();
        $("#porch-sqft").hide();
        $("#roof-sqft").hide();
        $("#details").hide();

        // Show corresponding section based on inquiry type
        if (selectedType === "porch_update" || selectedType === "porch_screening") {
            $("#additional-info").show();
            $("#porch-sqft").show(); // Show porch square footage options
        } else if (selectedType === "roofing") {
            $("#additional-info").show();
            $("#roof-sqft").show(); // Show roof square footage options
        } else if (selectedType === "odds_ends" || selectedType === "other") {
            $("#additional-info").show();
            $("#details").show(); // Show details text box for custom inquiries
        }
    });

    // Initialize with no additional info showing
    $("#additional-info").hide();


    $("#start-date").datepicker({
        dateFormat: "mm/dd/yy",
        minDate: 1 // Start from tomorrow to avoid past dates
    });

    // Handle form submission
    $("#inquiry-form").on("submit", function(event) {
        // Check if the start date is empty
        const startDate = $("#start-date").val();
        if (!startDate) {
            // Prevent form submission and show alert
            event.preventDefault();
            alert("Please select a preferred start date.");
        } else {
            // Show confirmation alert
            alert("Thank you! We will reach out shortly.");
            document.getElementById("inquiry-form").reset();
            return false;
        }
    });
});
