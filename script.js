const paragraph = document.createElement('p');
document.body.append(paragraph);

const input = document.createElement('input');
document.body.append(input);

const textInput = () => {
  paragraph.replaceChildren(input.value);
};

input.addEventListener('input', (e) => {
  e.preventDefault();
  setTimeout(textInput, 300);
});

