const container = document.getElementById('Hoverboard');
let color = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
let squares = 500;
for(let i = 0; i < squares; i++){
    let squares = document.createElement('div');
    squares.classList.add('squares');
    squares.addEventListener('mouseover', () => setColor(squares));
    squares.addEventListener('mouseout', () => removeColor(squares));
    container.appendChild(squares);
}
function setColor(element){
    let colors = getRandomColor();
    element.style.background = colors;
    element.style.boxShadow = '0 0 2px ${color}, 0 0 10px ${color}';
}
function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000';
}
function getRandomColor(){
    return color[Math.floor(Math.random() * color.length)]
}