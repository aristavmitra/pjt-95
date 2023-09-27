function adduser(){

    username = document.getElementById("textbox1").value;

    localStorage.setItem("username",username);
    window.location ="letschatroom.html"

}