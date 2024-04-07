
for (let index = 0; index < 16; index++) {
    const containerGridBox = document.createElement('div')
    containerGridBox.classList.toggle('container-grid-box')
    document.body.appendChild(containerGridBox)

    for (let index = 0; index < 16; index++) {
        const gridBox = document.createElement('div')
        gridBox.classList.toggle('grid-box')    
        containerGridBox.appendChild(gridBox)
        gridBox.addEventListener('mouseover', () => {
            gridBox.style.backgroundColor = 'pink'
        })
    }
    
}