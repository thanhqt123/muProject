const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);

const btnModalClose=document.getElementById('icon-modal');
const btnModalOpen=document.getElementById('show-modal');
const modalEl=$('.modal');
btnModalClose.onclick=function(){
    modalEl.style.display="none";
}
btnModalOpen.onclick=function(){
    modalEl.style.display="block";
    

}