$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('select').formSelect();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
    
});


$('.tenth_books').click(function(){

  $('.main').css({
    'display':'none'
  });

  $('#tenth').css({
    'display':'block'
  });

});

$('.ninth_books').click(function(){

  $('.main').css({
    'display':'none'
  });

  $('#ninth').css({
    'display':'block'
  });

});

$('.eighth_books').click(function(){

  $('.main').css({
    'display':'none'
  });

  $('#eighth').css({
    'display':'block'
  });

});

$('.e_books').click(function(){

  $('.main').css({
    'display':'none'
  });

  $('#ebooks').css({
    'display':'block'
  });

});

function check()
{

    let mobile = document.getElementById('number');
    let message = document.getElementById('message');
    
    if(mobile.value.length!=10){
        message.innerHTML = "required 10 digits, match requested format!";
    }
    if(mobile.value.length==10){
      message.innerHTML= "";
    }
    if(mobile.value.length>10){
      message.innerHTML= "Mobile number must be 10 digits.";
    }

  
}


function sendMsg(){
  let std_name=document.getElementById("std_name").value;
  let father_name=document.getElementById("father_name").value;
  let cls=document.getElementById("select_class").value;
  let campus=document.getElementById("campus").value;
  let ph_num=document.getElementById("number").value;
  let email=document.getElementById("email").value;
  let campus_email=(campus=='singarayakonda') ? "stjosephskonda@gmail.com" : "stjosephulavapadu1@gmail.com";
  let enquiry_msg=document.getElementById("enquiry_msg");
  enquiry_msg.innerHTML="";

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "saintjosephschool0@gmail.com",
    Password : "EF876FEFC24B6A248796C58E230E6B6B6F46",
    To : campus_email,
    From : "saintjosephschool0@gmail.com",
    Subject : `We got an Admission Enquiry from ${std_name}`,
    Body : `Details of Student <br>
    Student Name : ${std_name} <br>
    Father Name : ${father_name} <br>
    Admission for class : ${cls} <br>
    Phone Number : ${ph_num} <br>
    Email Id : ${email}`
  }).then(
    enquiry_msg.innerHTML=`${std_name} we received Your enquiry, We will get back to you!`
);
setTimeout(()=>{
  enquiry_msg.innerHTML=``
},2000);
}