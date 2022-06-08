$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){ 
            $(this).prev().attr('type','text');
        }
        else{
            $(this).prev().attr('type','password');
        }
    });
});

/*
function signup(e) {
    event.preventDefault(); 
    var ID = document.getElementById("txtID").value;
    var Password = document.getElementById("pw").value;
    var user = {
        ID: ID,
        Password: Password,
    };
    var json = JSON.stringify(ID);
    localStorage.setItem(user, json);

}
  function login(e) {
    event.preventDefault();
    var ID = document.getElementById("txtID").value;
    var Password = document.getElementById("pw").value;
    var data = JSON.parse(user);
    if (!user) {
      alert("vui long nhap username password");
    } else if (
        ID == data.ID && Password == data.Password
    ){
      alert("dang nhap thanh cong");
      window.location.href = "todolist.html";
    } else {
      alert("dang nhap that bai");
    }
  }*/