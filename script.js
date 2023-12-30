let tablinks=document.getElementsByClassName('tab-links');
let tabcontents=document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")

}

var sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwDSZmzYKsTe6mC8CFccQ3tbgKeKBJA63YG4XhB8j1OrTPZkHDguHW-f_KxO0hNg8jV/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { msg.innerHTML="Message sent Successfully"
                        setTimeout(function(){
                            msg.innerHTML=""
                        },3000)
                        form.reset()
                    })
      .catch(error => console.error('Error!', error.message))
  })





function handleSeeMore(btn_id,textId){
    const cardText =  document.querySelector("#"+textId)
    // console.log(textId);
    // console.log(cardText);
    cardText.classList.toggle('hideDisplay');
   let btn = document.querySelector("#"+btn_id)
   console.log(btn.innerHTML);
    if(btn.innerHTML == "Read Less")
    {
        document.querySelector("#"+btn_id).innerHTML = "Read More";

    }
    else
    {
    document.querySelector("#"+btn_id).innerHTML = "Read Less";

    }
}
