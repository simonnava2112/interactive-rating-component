
//First step: take all ids and classes from DOM(HTML). 
// id of box of content and everything inside.
let circulos = document.querySelectorAll('.circulos');
let btn = document.querySelector('.btn');
let container1 = document.querySelector('.content');
let container2 = document.querySelector('.container-thanks');
let number = document.querySelector('#number');

//Second step: iterating between of the "ciculos" element.
for(let i of circulos) {
    i.onclick = function() {
        for (let circulo of circulos) {
            circulo.style.background = 'var(--DarkBlue)';
            circulo.style.color = 'var(--MediumGrey)';        
        }
            i.style.background = 'var(--Orange)';
            i.style.color = 'var(--White)';
            number.innerText = `${i.innerText}`;
    }
        document.addEventListener('mousemove', function(e){
            if(e.target == i && i.style.background == 'var(--DarkBlue)') {
                i.style.background = 'var(--LightGrey)';
                i.style.color = 'var(--White)'; 
            }
            if(e.target != i && i.style.background != 'var(--Orange)') {
                i.style.background = 'var(--DarkBlue)';
                i.style.color = 'var(--MediumGrey)';
            }
        });
        }

    //third step: make a btn onclick function with conditional.
        btn.onclick = function() {
            //
            if(number.innerText == ''){
                alert('Seleccione una Puntuación:');
        }
        else {
            container1.style.display = 'none';
            container2.style.display = 'flex';
    
        }
}



