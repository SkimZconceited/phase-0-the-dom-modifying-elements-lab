const rmMain = document.querySelector('main');
rmMain.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = `Stanley 'SkimZ' Kimambo is the champion.`;

console.log(newHeader.nodeName);
console.log(newHeader.id);
console.log(newHeader.innerHTML);