const count = document.querySelectorAll('.count');
const modalBg = document.querySelector('.info_win');
const modal = document.querySelector('.info');

//обработчик событий - стрелочная функция
count.forEach(count => {
    count.addEventListener('click', function() {
        modal.querySelector('.info_title').innerText = this.dataset.title;
        modal.querySelector('.info_photo').setAttribute('src', this.dataset.photo);
        modal.querySelector('.info_text').innerText = this.dataset.text;
        modal.querySelector('.info_sunday').innerText = this.dataset.sunday;
        modal.querySelector('.info_koef').innerText = this.dataset.koef;
        modal.querySelector('.info_perform').innerText = this.dataset.perform;
        modal.querySelector('.info_wind').innerText = this.dataset.wind;
        modal.querySelector('.info_share').innerText = this.dataset.share;
        modalBg.classList.add('active');
    });
});


document.addEventListener('click', (e) =>{
    if(e.target === modalBg ){
        modalBg.classList.remove('active');
    }
});