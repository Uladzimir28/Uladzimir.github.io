const headerLocal= document.querySelector('.header');
window.addEventListener('scroll', function (){
    if(screen.height <= window.pageYOffset){
        headerLocal.style.background = 'red';
    }
    else{ headerLocal.style.background = 'none';}
})
const  ButtonPlay = document.querySelector('.button-video');
const  video = document.querySelector('.video')
const  contentBlock = document.querySelector('.help-content');;

function Play(){
    contentBlock.style.display = 'none';
    video.play();
}
ButtonPlay.addEventListener('click',Play);
$('.switch-btn').click(function(){
    $(this).toggleClass('switch-on');
});