/**
 * Created by lingshan on 2016/5/4.
 */
function putNumb(numb) {
    var show = document.getElementById("edit").value;
    show = show + numb;
    document.getElementById("edit").value = show;
}

function clearEdit() {
    document.getElementById("edit").value = "";
}

function deleteOne() {
    var show = document.getElementById("edit").value;
    var length = show.length;
    var str = show.substring(0,length-1);
    document.getElementById("edit").value = str;
}

function calculator() {
    
}