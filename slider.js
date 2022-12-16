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
  div.style.transform = `translate3d(-${i * 100}%, 0, 0)`;
  container.append(div);
});
body.append(container);
const arrowLeft = document.createElement('button');
//https://habr.com/ru/post/501258/