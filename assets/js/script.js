/* Author: 

*/

const background = document.querySelector('.blurry_loading'),
  incrementText = document.querySelector('.incremental_text');

window.addEventListener('load', () => {
  let count = 0,
    maxcount = 100;
  let textInterval = setInterval(() => {
    count++;
    incrementText.innerHTML = `${count}%`;
    if (count === maxcount) {
      clearInterval(textInterval);
    }
    incrementText.style.opacity = scale(count, 0, 100, 1, 0)
    background.style.filter = `blur(${scale(count, 0, 100, 10, 0)}px)`
  }, 65)

  const scale = (num, minval, maxvalue, valueoutmin, valueoutmax) => {
    return ((num - minval) * (valueoutmax - valueoutmin)) / (maxvalue - minval) + valueoutmin
  }
})



















