const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  nav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
  link.classList.add('active');
}));
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const email = String(data.get('email') || '');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = 'Пожалуйста, укажите корректный Email.';
    status.style.color = '#ff8d9b';
    return;
  }
  const subject = encodeURIComponent('Заявка с сайта DEVFOLIO от ' + data.get('name'));
  const body = encodeURIComponent('Имя: ' + data.get('name') + '\nEmail: ' + email + '\n\n' + data.get('message'));
  status.textContent = 'Откроется почтовая программа для отправки сообщения.';
  window.location.href = 'mailto:example@mail.ru?subject=' + subject + '&body=' + body;
});
