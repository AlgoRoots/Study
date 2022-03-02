const moreBtn = document.querySelector('.maintitle .maininfo .moreBtn');
const title = document.querySelector('.maintitle .maininfo .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});
