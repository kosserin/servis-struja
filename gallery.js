const images = document.querySelectorAll('.gallery-grid img');
const modal = document.querySelector('#modal');
const modalImg = document.querySelector('#modalImg');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
let counter = 0;

images.forEach((image,index) => {
    image.addEventListener('click', ()=>{
        counter = index+1;
        modal.classList.add('show');
        modalImg.src = image.getAttribute('link');
    })
});

modal.addEventListener('click', (e) =>{
    if (e.target !=modal) {
        return;
    } else{
        modal.classList.remove('show');
    }
})


prevBtn.addEventListener('click', ()=>{
    counter--;
    if (counter === 0) {
        counter = images.length;

    }
    modalImg.src = `./services/${counter}.jpg`;

})

nextBtn.addEventListener('click', ()=>{
    counter++;
    if (counter === 21) {
        counter = 1;

    }
    modalImg.src = `./services/${counter}.jpg`;

})