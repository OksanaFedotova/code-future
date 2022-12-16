const body = document.getElementsByTagName('body')[0];
const container = document.createElement('div');
container.style.width = '100vw';
container.style.display = 'flex';
const arrDiv = ['1','2','3'].map((el, i) => {
  const div = document.createElement('div');
  const r = Math.floor(Math.random() * (256));
  const g = Math.floor(Math.random() * (256));
  const b = Math.floor(Math.random() * (256));
  const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  div.innerText = el;
  div.style.minWidth = '100vw';
  div.style.backgroundColor = color;
  div.style.height = '500px';
  div.style.transition = 'transform .5s';
  container.append(div);
});
body.append(container)
const buttonPrev = document.createElement('button');
buttonPrev.innerText = 'Prev';
const buttonNext = document.createElement('button');
buttonNext.innerText = 'Next';
let counter = 0;
buttonNext.addEventListener('click', () => {
  counter++;
  if (counter > 1) counter = 2;
  container.style.transform = `translate3d(-${counter * 100}%, 0, 0)`;
});
buttonPrev.addEventListener('click', () => {
  if (counter <= 1) counter = 1;
  const x = counter*100-100;
  container.style.transform = `translate3d(-${x}%, 0, 0)`;
  counter--;
})
body.append(buttonPrev, buttonNext);
