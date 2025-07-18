alert(prompt("enter the your name!"));
function bookTable(){
    alert("Thank You! Your table has been reserved.");
}
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}
document.getElementById("Contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank You! Your Message has been sent.");
    this.reset();
});
document.getElementById("reservation-form").addEventListener("submit", function(e){
 e.preventDefault();
 alert("🎉 Reservation Confirmed! We'll see You Soon.");
 this.rest();
});