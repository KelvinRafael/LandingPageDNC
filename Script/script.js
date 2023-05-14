var button = document.querySelector('button')
var dialog = document.querySelector('dialog')
var btn_close = document.querySelector('dialogbutton')

button.onclick = function openDialog(){
    dialog.showModal()
}

btn_close.onclick = function(){
    dialog.close()
}