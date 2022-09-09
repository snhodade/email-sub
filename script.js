let email = document.getElementById("input-email");
    let submit = document.getElementById('submit-btn');
    let form = document.getElementById('emailForm');

    submit.addEventListener("click", (e)=> {
      e.preventDefault();
      const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if(email.value.match(validEmail)){
        form.classList.remove("error");
      }else{
        form.classList.add("error");
      }
    })