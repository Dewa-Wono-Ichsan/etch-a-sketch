const btn = document.createElement('button')
btn.classList.toggle('request-user')
document.body.appendChild(btn)
btn.textContent = 'request grid'
btn.addEventListener('click', totalGrid)

function totalGrid() {

    let total = parseInt(prompt())

    for (let index = 0; index < total; index++) {
        
        const gridBox2 = document.createElement('div')
        gridBox2.classList.toggle('grid-box2')
        document.body.appendChild(gridBox2)
        gridBox2.style.height = `${100/total}%`
        gridBox2.style.width = '100%'
        gridBox2.style.display = 'flex'

        for (let index = 0; index < total; index++) {

            const gridBox3 = document.createElement('div')
            gridBox3.classList.toggle('grid-box3')
            gridBox2.appendChild(gridBox3)
            gridBox3.style.height = '100%'
            gridBox3.style.width = `${100/total}%`
            gridBox3.addEventListener('mouseover', () => {
                gridBox3.style.backgroundColor = 
                `rgb(
                    ${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()}
                    )`
            })
            
            
        }

    }

}