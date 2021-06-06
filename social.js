window.addEventListener('load', init);

function init() {
    
    const quotes = document.querySelectorAll('.quote');
    const prevButton = document.querySelector('.fa-arrow-left')
    const nextButton = document.querySelector('.fa-arrow-right')

    let index = 0;

    for(let quote of quotes){
        quote.dataset.index = index;
        index++;
    }
    

    nextButton.addEventListener('click',()=>{
        let activeQuote = document.querySelector('.active-quote');
        let currentIndex = activeQuote.dataset.index;

        let quotes = document.querySelectorAll('.quote');

        currentIndex++;
        
        currentIndex = currentIndex % quotes.length;

        activeQuote.classList.remove('active-quote');
        quotes[currentIndex].classList.add('active-quote');
    })

    prevButton.addEventListener('click',()=>{
        let activeQuote = document.querySelector('.active-quote');
        let currentIndex = activeQuote.dataset.index;

        let quotes = document.querySelectorAll('.quote');

        currentIndex--;
        
        if(currentIndex < 0){
            currentIndex = quotes.length-1;
        }


        
        activeQuote.classList.remove('active-quote');
        quotes[currentIndex].classList.add('active-quote');
    })








    /* prevButton.addEventListener('click', ()=>{
         console.log(quotes);

         for(let quote of quotes){
             quote.addEventListener('click', showQuote);
         }
    }) */
}