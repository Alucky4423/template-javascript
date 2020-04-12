function main(event = null) {
  console.log('hello world!');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}

// webpack hot module replacement.
if (module.hot) {
  module.hot.accept('./index.js', () => {
    main();
  });
}
