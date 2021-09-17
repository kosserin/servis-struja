const clickSection = () => {

    const popup = document.querySelector('.section1-popup');
    const popupImage = document.querySelector('.section1-popup img')
    const images = document.querySelectorAll('.section1 .service');
    const imagesURL = [
        '/servis-struja/section1/1.jpg',
        '/servis-struja/section1/21.jpg',
        '/servis-struja/section1/23.jpg',
        '/servis-struja/section1/28.jpg',
        '/servis-struja/section1/6.jpg'
    ]

    console.log(images)
    images.forEach((image, i) => {
        image.addEventListener('click', () => {
            popupImage.src = imagesURL[i];
            popup.classList.add('show-popup');

            popup.addEventListener('click', e => {
                console.log(e.target)
                if (!e.target.classList.contains('section1-popup')) {
                    return
                } else {
                    popup.classList.remove('show-popup');
                }
            })
        })
    })

}

clickSection();