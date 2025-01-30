// Toggle the overlay menu
function toggleMenu() {
    const overlayMenu = document.getElementById('overlayMenu');
    overlayMenu.classList.toggle('active');
}

// Open the sub-menu page
function openSubMenuPage() {
    const subMenuPage = document.getElementById('subMenuPage');
    subMenuPage.classList.add('active');
}

// Close the sub-menu page
function closeSubMenuPage() {
    const subMenuPage = document.getElementById('subMenuPage');
    subMenuPage.classList.remove('active');
}