const containerGridBox = document.createElement('div')
containerGridBox.classList.toggle('container-grid-box')
document.body.appendChild(containerGridBox)

const gridBox = document.createElement('div')
gridBox.classList.toggle('grid-box')    
containerGridBox.appendChild(gridBox)