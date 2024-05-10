const texts = ['Holis Mami', 'Un Mini Detallito Para Ustes', 'Feliz Dia De Las Madres', 'Gfita'];
let count = 0; 
let index = 0;

function type() {
  const currentText = texts[count];
  const letter = currentText.slice(0, ++index);

  document.getElementById('text').textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(erase, 2000);
  } else {
    setTimeout(type, 200);
  }
}

function erase() {
  const currentText = texts[count];
  const letter = currentText.slice(0, --index);

  document.getElementById('text').textContent = letter;

  if (letter.length === 0) {
    count++;
    if (count === texts.length) {
      count = 0;
    }
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 100);
  }
}
type();