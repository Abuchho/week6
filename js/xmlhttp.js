


window.addEventListener('DOMContentLoaded', function(){
    // Loads page 1 content on-load
    let xhr = new XMLHttpRequest();
        xhr.onload = function() {
        pContent.innerText = this.responseText;};
        xhr.open('GET', '/files/page1.html');
        xhr.send();
    

    let p1 = document.getElementById('page1');
    let p2 = document.getElementById('page2');
    let p3 = document.getElementById('page3');
    let pContent = document.getElementById('page_content');

    
    // Button click events 
    
    p1.addEventListener('click', function(){

    let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            pContent.innerText = this.responseText;};
            xhr.open('GET', '/files/page1.html');
            xhr.send();
        });

    p2.addEventListener('click', function(){

    let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            pContent.innerText = this.responseText;};
            xhr.open('GET', '/files/page2.html');
            xhr.send();
        });

    p3.addEventListener('click', function(){

    let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            pContent.innerText = this.responseText;};
            xhr.open('GET', '/files/page3.html');
            xhr.send();
        });
    
    
});


