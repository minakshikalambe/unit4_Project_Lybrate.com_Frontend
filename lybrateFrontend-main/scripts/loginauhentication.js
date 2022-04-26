
function authenticate(){
    let loginData= JSON.parse(localStorage.getItem("loginData"));
let isLogin= localStorage.getItem("isLogin")

let signine=document.getElementById("loginUser");
let logOut=document.getElementById("logout");
logOut.addEventListener("click",()=>{
    location.reload()
    isLogin=false;
    localStorage.setItem("isLogin",isLogin);
    if(isLogin=="true"){
        location.reload()
    signine.textContent=`Hello ${loginData.user.name}`;

}else if(isLogin=="false"){
    location.reload()
    signine.textContent=`Hello, Sign in`
}
})

if(isLogin=="true"){
    signine.textContent=`Hello ${loginData.user.name}`;

}else if(isLogin=="false"){
    signine.textContent=`Hello, Sign in`
}
return loginData
}
export default authenticate;