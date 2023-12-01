
document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll(".menu li a");
    var sections = document.querySelectorAll(".halaman");
    var scrollThreshold = 200; // Atur ambang batas pengguliran di sini (misalnya, 100 pixel)

    function activateMenu(index) {
        menuLinks.forEach(function(item) {
            item.classList.remove("active");
        });
        menuLinks[index].classList.add("active");
    }

    function updateActiveSection() {
        var scrollPosition = window.scrollY;

        sections.forEach(function(section, index) {
            var topOffset = section.offsetTop;
            var bottomOffset = topOffset + section.offsetHeight;

            if (scrollPosition >= topOffset - scrollThreshold && scrollPosition < bottomOffset - scrollThreshold) {
                activateMenu(index);
            }
        });
    }
    window.addEventListener("scroll", updateActiveSection);
    updateActiveSection(); // Aktifkan menu saat halaman dimuat
});





function toggleMenu() {
  var menuBtn = document.querySelector('.menuSidebar');
  var sidebar = document.querySelector('.sidebar');

  if (menuBtn.innerHTML === '☰') {
    menuBtn.innerHTML = '✖';
    sidebar.classList.add("active");
  } else {
    menuBtn.innerHTML = '☰'; 
    sidebar.classList.remove("active");
  }
}




function refresh() {
  setTimeout(() => {
    location.reload();
  }, 100);
}
