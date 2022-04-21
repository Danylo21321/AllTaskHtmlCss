let data = prompt("enter your age")
function register(){
    while (true){
        if (data > 3){
            alert("you register")
            break
        }else if (data === null){
            register()
            break
        }else {
            register()
            break
        }
    }
}
register()