const myEmptyDiv = document.querySelector('#myEmptyDiv');

// create the heading element
const heading = document.createElement('h2');
heading.innerHTML = 'Llama you glad I didn\'t say banana';

// attach to DOM
heading.addEventListener('click', handleHeadingClick); // see this function below
heading.style.cursor = 'pointer';
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
  document.body.style.backgroundColor = '#999acf';
  console.log('duck duck llama! You clicked on the llama heading');
}
