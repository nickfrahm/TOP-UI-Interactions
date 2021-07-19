/*
Find the element that I need to show the dropdown for, 
then call a reusable function to grab the hidden list assigned to the item and show it.
*/

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.link').forEach((link) => {
    link.addEventListener('mouseover', (e) => {
      showDropDownMenu(e);
    });
    link.addEventListener('mouseleave', (e) => {
      hideDropDownMenu(e);
    });
  });

  document.querySelector('.menu-icon').addEventListener('click', (e) => {
    showMobileMenu(e);
  });
});

function showDropDownMenu(link) {
  if (link.target.classList.contains('link')) {
    link.target.querySelector('.dropdown').style.display = 'block';
  }
}

function hideDropDownMenu(link) {
  if (link.target.classList.contains('link')) {
    link.target.querySelector('.dropdown').style.display = 'none';
  }
}

function showMobileMenu(icon) {
  document.querySelector('.mobile');
}
