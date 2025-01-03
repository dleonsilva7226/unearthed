const renderGifts = async () => {
    const response = await fetch('/gifts')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        // data = 
        data.map((gift) => {
            const card = document.createElement('div')
            card.classList.add('card')
    
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
    
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
    
            topContainer.style.backgroundImage = `url(${gift.image})`
    
            const name = document.createElement('h3')
            name.textContent = gift.name
            bottomContainer.appendChild(name)
    
            const pricePoint = document.createElement('p')
            pricePoint.textContent = `Price: ${gift.pricePoint}`
            bottomContainer.appendChild(pricePoint)
    
            const audience = document.createElement('p')
            audience.textContent = `Great For: ${gift.audience}`
            bottomContainer.appendChild(audience)
            
            const readMoreLink = document.createElement('a')
            readMoreLink.textContent = 'Read More'
            readMoreLink.href = `/gifts/${gift.id}`
            readMoreLink.setAttribute('role', 'button')
            bottomContainer.appendChild(readMoreLink)


            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)

        })
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(message)
    }
}

// 404 page error
const requestedURL = window.location.href.split('/').pop()
if (requestedURL) {
   window.location.href = `../404.html` 
}
else {
    renderGifts()
}