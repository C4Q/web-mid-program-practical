document.addEventListener('DOMContentLoaded', () => {
  console.log('hello world');

  let modP = document.querySelector('#modP');
  let nullB = document.querySelector('#nullB');

  nullB.addEventListener('click', (event) => {
    modP.innerText = 'you clicked this thing';
  });
});
