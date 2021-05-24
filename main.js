// Controls top slideshow with buttons
var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
    showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlidestops");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
    }

// Controls bottoms slideshow with buttons
var slideIndexb = 1;
        showDivsb(slideIndexb);
        
        function plusDivsb(n) {
        showDivsb(slideIndexb += n);
        }
        
        function showDivsb(n) {
        var i;
        var x = document.getElementsByClassName("mySlidesbottoms");
        if (n > x.length) {slideIndexb = 1}
        if (n < 1) {slideIndexb = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        x[slideIndexb-1].style.display = "block";  
        }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}