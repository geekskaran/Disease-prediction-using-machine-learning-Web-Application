// Modal close 
 // Get the modal
 var modal = document.getElementById('id01');
        
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }



 const freeCheckupBtn = document.getElementById('free-checkup-btn');

freeCheckupBtn.addEventListener('click', () => {
  alert('Thank you for booking an appointment! We will contact you soon.');
});
