const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);

const btnModalClose=document.getElementById('icon-modal');
const btnModalOpen=document.getElementById('show-modal');
const modalEl=$('.modal');
const listSlider=$('.slider__img');
const sliderImgs=$$('.slider__img img');
const sliderBtnLeft=document.getElementById('prve');
const sliderBtnRight=document.getElementById('next');
const dotsSliders=$$('.slider__dot span');
const cateList=$('.category__list');
const cateItems=$$('.category__item');
const cateBtns=$$('.category__bnt .item');
const productSaleList=$('.product-sale__list');
const productSaleItmes=$$('.product-sale__item');
function handleModal(){
    btnModalClose.onclick=function(){
        modalEl.style.display="none";
    }
    btnModalOpen.onclick=function(){
        modalEl.style.display="block";
        
    
    }
}
function handleSlider() {
    let active = 0;
    let widthEl = listSlider.offsetWidth;
    let l = sliderImgs.length - 1;

    sliderBtnRight.onclick = function () {
        if(active +1>l){
            active=0;
        }
        else{
            active+=1;
        }
        handle();
    }
    sliderBtnLeft.onclick = function () {
        if(active-1<0){
            active=l;
        }
        else{
            active-=1;
        }
        handle();
    }

    function handle() {
        let valueEl = -widthEl * active;
        listSlider.style.transform = `translateX(${valueEl}px)`;
        let lastActiveDot=$('.slider__dot span.active');
        lastActiveDot.classList.remove("active");
        dotsSliders[active].classList.add("active");
    }
    dotsSliders.forEach((dot,index) =>{
        dot.addEventListener("click" , function(){
            active=index;
            handle();
        })
    })
    setInterval(function(){
        sliderBtnRight.click();
    },7000);
}


function handleCate(el){
    let isDragging = false;

    function dragging(e){
        if(!isDragging){
            return ;
        }
        el.classList.add("dragging");
        el.scrollLeft -=e.movementX;

    }
    function mouseDown(){
        return isDragging=true;
    }
    function mouseUp(){
        el.classList.remove("dragging");
        return isDragging=false;

    }
    el.addEventListener("mousemove",dragging);
    el.addEventListener("mousedown",mouseDown);
    el.addEventListener("mouseup",mouseUp);

    
    cateBtns.forEach(function(btn){
        btn.addEventListener("click",() =>{
            if(btn.id=="btn-next"){
                el.scrollLeft +=350;
            }
            else{
                el.scrollLeft -=350;
                
            }
        })
    });

}
handleSlider();
handleCate(cateList)
handleCate(productSaleList)
handleModal();