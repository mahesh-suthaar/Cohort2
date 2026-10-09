// Debounce function
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

document.querySelector("#search").addEventListener(
  "input",
  debounce(function () {
    console.log("debounce chala");
  }, 500)
);



// Throttle function
function throttle(fn, delay) {
  let last = 0;
  return function () {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn();
    }
  };
}

window.addEventListener('mousemove',throttle(function(){
    console.log('throttle chala');
    
}, 1000))



// JSON.parse() and JSON.stringify()
let obj={name:'mkkk',
    wallet:888,
    phone:999,
    city:'jaipur'
}

let str = JSON.stringify(obj) // JS object->JSON string
let reObj = JSON.parse(string) // JSON string->JS object

console.log(str,reObj);


