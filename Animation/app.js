const System = {
    out:{
        println(message){
            console.log(message);
        }
    }
}
// const PHOTO_LIST= ["rose.jpg","rose-1.jpg","rose-red.jpg"];
// //
// //
// //
// // function createImage(src){
// //     const image =document.createElement('img');
// //     image.src =src;
// //     image.height ="100";
// //     return image ;
// // }
// // const albumView =document.querySelector('#album-view');
// // const modalView =document.querySelector('#modal-view');
// //
// // for (let i=0;i<PHOTO_LIST.length;i++){
// //     const photoSrc =PHOTO_LIST[i];
// //     const image =createImage(photoSrc);
// //     image.addEventListener('click',onThumbnailClick);
// //     albumView.appendChild(image);
// // }
// // function onThumbnailClick(event){
// //     const image =createImage(event.currentTarget.src);
// //
// //
// //     modalView.appendChild(image);
// //     modalView.style.top =window.pageYOffset+"px";
// //     modalView.classList.remove('hidden')
// // }


const btnOk =document.querySelector('button');
btnOk.onclick=()=>{

   if(btnOk.style.backgroundColor==="white"){
       btnOk.style.backgroundColor="black";
       btnOk.style.color="white";
   }else{
       btnOk.style.backgroundColor="white";
       btnOk.style.color="black";

   }
    // btnOk.style.color="blue";
};




console.log("hello world!");




