import './style.css';
import { Teac, Lang } from './dist/teac.js';
const input = document.getElementById('greg');
const num = document.getElementById('num');
const yc = document.getElementById('yc');
const yk = document.getElementById('yk');
const yp = document.getElementById('yp');
const sin = document.getElementById('sin');
const texto = document.getElementById('texto');
const today = new Date().toISOString().slice(0, 10);
document.querySelector('#greg').value = today;
const conversion = () => {
  const e = input.value;
  const sino = new Teac(e).sino(0);
  num.innerText = JSON.stringify(new Teac(e).num());
  yc.innerText = JSON.stringify(new Teac(e).yearIn('zh'));
  yk.innerText = JSON.stringify(new Teac(e).yearIn('ko'));
  yp.innerText = JSON.stringify(new Teac(e).yearIn('en'));
  sin.innerText = JSON.stringify(sino);
  texto.innerText = `${sino[0]}${sino[1]}${sino[2]}`;
};
conversion(today);
input.addEventListener('change', conversion);
console.log(Lang.dayString);
