import '@warpjs/engine';
import backend from './.backend/backend';
import './styles/app.css';

const { hello, fetchMovies } = new backend();

hello().then((msg) => {
  document.getElementById('message').innerHTML = msg;
});

fetchMovies('Star Trek').then((data) => {
  document.getElementById('movies').innerHTML = JSON.stringify(data, null, 2);
});
