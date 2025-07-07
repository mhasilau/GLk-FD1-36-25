export const page2 = () => {
    const red = document.getElementById('red');
    const blue = document.getElementById('blue');
    const green = document.getElementById('green');

    const divs = document.querySelectorAll('.wh');


    red.onclick = () => {
        console.log(divs)
        divs.forEach(div => {
            if (div.classList.contains('red')) {
                console.log(div)
                div.style.display = 'block';
            } else {
                div.style.display = 'none';

            }
        })
    }

    blue.onclick = () => {
        console.log(divs)
        divs.forEach(div => {
            if (div.classList.contains('blue')) {
                console.log(div)
                div.style.display = 'block';
            } else {
                div.style.display = 'none';

            }
        })
    }

    green.onclick = () => {
        console.log(divs)
        divs.forEach(div => {
            if (div.classList.contains('green')) {
                console.log(div)
                div.style.display = 'block';
            } else {
                div.style.display = 'none';

            }
        })
    }


}