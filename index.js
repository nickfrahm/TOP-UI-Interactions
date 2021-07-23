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

  document.querySelector('#close').addEventListener('click', (e) => {
    if (e.target.id === 'close') {
      showMobileMenu(e);
    }
  });

  document
    .querySelector('.arrow-right')
    .addEventListener('click', advanceIndex);

  document.querySelector('.arrow-left').addEventListener('click', reduceIndex);
});

/* Dropdown menu on hover */
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
/* END Dropdown menu on hover */

/* Toggle a mobile menu on click*/
function showMobileMenu() {
  document.querySelector('.mobile').classList.toggle('mobileShowing');
}
/* END Toggle a mobile menu on click*/

/* "img" carousel*/
function getCarouselArray() {
  return Array.from(document.querySelectorAll('.box'));
}

function advanceIndex() {
  const arr = getCarouselArray();
  let advance = false;
  arr.forEach((box, index) => {
    if (box.classList.contains('active')) {
      box.classList.toggle('active');
      advance = true;
      if (index === arr.length - 1) {
        arr[0].classList.toggle('active');
      }
    } else {
      if (advance) {
        box.classList.toggle('active');
        advance = false;
      }
    }
  });
}

function reduceIndex() {
  const arr = getCarouselArray();
  let reduce = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].classList.contains('active')) {
      arr[i].classList.toggle('active');
      reduce = true;
      if (i === 0) {
        arr[arr.length - 1].classList.toggle('active');
      }
    } else {
      if (reduce) {
        arr[i].classList.toggle('active');
        advance = false;
      }
    }
  }
}
/* END "img" carousel*/
