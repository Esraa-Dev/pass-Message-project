//  select elements
 let message=document.getElementById("message");
 let form = document.querySelector('#message-form')
 let feedback=document.querySelector(".feedback");
   const messageContent = document.querySelector('.message-content')

//  call the function
form.addEventListener('submit',myfunc);
 function myfunc(e){
  e.preventDefault();
    if (message.value === ''){
        feedback.classList.add('show')
        setTimeout(function(){
        feedback.classList.remove('show')
        }, 2000)
    } else {
      
        messageContent.textContent = message.value
     
    }
    }
