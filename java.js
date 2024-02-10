document.addEventListener("DOMContentLoaded", function() {
  // Modal functionality
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var dateTimeElement = document.getElementById('date-time');

  // Function to update the date and time
  function updateDateTime() {
      var now = new Date();
      var dateTimeStr = now.toLocaleString(); // Automatically uses the user's local timezone
      dateTimeElement.textContent = dateTimeStr;
  }

  // Check if the dateTimeElement is found
  if (dateTimeElement) {
      // Update the time every second
      setInterval(updateDateTime, 1000);

      // Initialize the date and time update on page load
      updateDateTime();
  } else {
      console.error("The date-time element was not found.");
  }

  // Attach click event to images within specified containers
  document.querySelectorAll('.media-container img, .second-container img').forEach(img => {
      img.onclick = function() {
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
      };
  });

  // Close the modal when the user clicks on <span> (x)
  var span = document.getElementsByClassName("close")[0];
  if (span) {
      span.onclick = function() {
          modal.style.display = "none";
      };
  } else {
      console.error("The close button element was not found.");
  }
});
