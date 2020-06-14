import hello from 'hello';

function main(event = null) {
  console.log(hello());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
