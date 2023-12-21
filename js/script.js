document.addEventListener('DOMContentLoaded', function () {
  const homeAnchor = document.querySelector('.menu div:nth-child(1) a');
  const serviceAnchor = document.querySelector('.menu div:nth-child(2) a');
  const contactAnchor = document.querySelector('.menu div:nth-child(3) a');

  homeAnchor.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('.content-1');
  });

  serviceAnchor.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('.content-2');
  });

  contactAnchor.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('.content-3');
  });

  function scrollToSection(sectionClass) {
    const section = document.querySelector(sectionClass);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
      event.preventDefault();
      alert('Nama dan Email harus diisi!');
    }
  });
});

function cancelForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}