var list = document.getElementById("list");

function additem() {
    var item = document.getElementById("input");
    if (item.value === "") {
        alert('Enter Item name');
        return;
    }
    var li = document.createElement("li");
    var button = document.createElement('button');
    var para = document.createElement("p");
    para.innerHTML = item.value;
    button.innerHTML = "X";
    button.setAttribute('onclick', `del('${item.value}')`);
    li.setAttribute('id', item.value);
    li.setAttribute('onclick', `strick('${item.value}')`)
    li.appendChild(para);
    li.appendChild(button);
    list.appendChild(li)
    item.value = "";
}
function del(par) {
    var child = document.getElementById(par);
    child.remove();

}
function strick(params, num) {
    var li = document.getElementById(params);
    li.style.textDecoration = 'line-through 1px white';
}