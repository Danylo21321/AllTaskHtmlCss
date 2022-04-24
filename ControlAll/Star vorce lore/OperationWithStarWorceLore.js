
function register(){
    let data = prompt("enter your age")
    while (true){
        if (data > 3){
            alert("you register")
            break
        }else {
            register()
            break
        }
    }
}
register()
