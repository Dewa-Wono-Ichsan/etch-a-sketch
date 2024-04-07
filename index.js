
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

const btn = document.createElement('button')
btn.classList.toggle('request-user')
document.body.appendChild(btn)
btn.
textContent = 'request grid'
btn.addEventListener('click', () => {
    console.log(typeof prompt('enter ypur number of grid box', '16'))
})