const modal = document.getElementById('myModal')

const closeModal = document.querySelector('.close')

const openModal = document.querySelectorAll('.skin__block')

openModal.forEach((item) => {
   item.addEventListener('click', ()=>{
      modal.classList.add('active')
      document.body.style.overflow = 'hidden';
   });
})

closeModal.addEventListener('click', ()=>{
   modal.classList.remove('active')
   document.body.style.overflow = 'auto';
});

