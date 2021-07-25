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

  document.querySelectorAll('.circle').forEach((circle) =>
    circle.addEventListener('click', () => {
      setActiveImg(circle.id);
    })
  );
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
  let set = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains('active') && i === 0) {
      arr[i].classList.toggle('active');
      arr[arr.length - 1].classList.toggle('active');
      set = true;
    } else if (arr[i].classList.contains('active') && !set) {
      arr[i].classList.toggle('active');
      arr[i - 1].classList.toggle('active');
    }
  }
}

function setActiveImg(id) {
  removeActiveImg();
  document
    .querySelector('.img-container')
    .querySelector(`.box${id}`)
    .classList.toggle('active');
}

function removeActiveImg() {
  document
    .querySelector('.img-container')
    .querySelector('.active')
    .classList.toggle('active');
}
/* END "img" carousel*/
