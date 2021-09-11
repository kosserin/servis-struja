const clickSection = () => {

    const popup = document.querySelector('.section1-popup');
    const popupImage = document.querySelector('.section1-popup img')
    const images = document.querySelectorAll('.section1 .service');
    const imagesURL = [
        '/struja100/section1/1.jpg',
        '/struja100/section1/21.jpg',
        '/struja100/section1/23.jpg',
        '/struja100/section1/28.jpg',
        '/struja100/section1/6.jpg'
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