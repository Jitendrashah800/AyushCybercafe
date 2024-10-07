function handleFormSubmit() {
    var formdata = $('#myForm').serializeArray();
    if (myfile.data) {
        formdata.push({ name: 'myfile', value: myfile });
    }

    // Convert formdata to a JSON object
    var formObject = {};
    formdata.forEach(function(item) {
        formObject[item.name] = item.value;
    });

    // Send form data to the Google Apps Script web app URL
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwXSRzj93ptjqdRJGBJQb6KqBiBkcjmVj6al2sWPTneRkAuBbnRVzzOdB_hz5vPPU2A8g/exec",
        method: "POST",
        data: JSON.stringify(formObject),
        contentType: "application/json",
        success: function(response) {
            success(); // Show success message
        },
        error: function(error) {
            console.error("Error:", error);
            alert("An error occurred while submitting the form.");
        }
    });

    return false; // Prevent default form submission
}

function success() {
    document.getElementById("myForm").reset();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Data successfully saved!',
        showConfirmButton: false,
        timer: 1500
    });
}

