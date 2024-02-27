let cookies = document.cookie
let list = document.getElementById("ft_list");

console.log(cookies)
if (cookies.length > 0) {
    let cookie = cookies.split(";")
    cookie.forEach(element => {
        const newNode = document.createElement("div");
        newNode.innerHTML = element.split("=")[1]
        console.log(newNode);
        newNode.onclick = ()=>{
            let remove = confirm("Do you want to remove this to-do?")
            if (remove) {
                newNode.remove()
                console.log(element.split("=")[0])
                document.cookie = element.split("=")[0] + "=; expires=Mon, 31 Dec 2042 00:00:00 UTC;";
            }
        }
        list.prepend(newNode);
    });
}

function newTodo() {
    let todo = prompt("Create a new To-do")
    if (todo != null && todo != "") {
        let name = new Date().getTime();
        document.cookie = name + "=" + todo;
        const newNode = document.createElement("div");
        newNode.innerHTML = todo;
        newNode.onclick = ()=>{
            let remove = confirm("Do you want to remove this to-do?")
            if (remove) {
                newNode.remove()
                document.cookie = name + "=; expires=Mon, 31 Dec 2042 00:00:00 UTC;";
            }
        }
        list.prepend(newNode);
    }
}