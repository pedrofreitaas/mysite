function rotateParent( call_html_component ) {
    let number = 10;

    setTimeout( () => {
        call_html_component.parentElement.style.transform = "rotate(30%)";
    }, 3000);
};