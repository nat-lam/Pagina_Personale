
    
    
    window.onload = function buttons (){
        
        let display = document.createElement('div');
        display.setAttribute('id', 'display');
        display.innerHTML = 0;
        document.body.append(display)

        let btnMinus = document.createElement('button');
        btnMinus.setAttribute('id', 'decrease');
        btnMinus.onclick  = 'decrease()';
        btnMinus.innerHTML = '-';
        document.body.appendChild(btnMinus);

        let btnReset = document.createElement('button');
        btnReset.setAttribute('id', 'reset');
        btnReset.onclick = 'reset()';
        btnReset.innerHTML = 'reset';
        document.body.appendChild(btnReset);

        let btnPlus = document.createElement('button');
        btnPlus.setAttribute('id', 'increase');
        btnPlus.onclick = 'increase()';
        btnPlus.innerHTML = '+';
        document.body.appendChild(btnPlus);

        var counter = 0;
 
    var plus = document.getElementById('increase');

    plus.addEventListener('click', increase)
    function increase(){
        counter++;
        if(counter > 0){
        document.getElementById('display').style.color = 'green';
        } else if( counter == 0){
        document.getElementById('display').style.color = 'black';
        }
        document.getElementById('display').innerHTML = counter;
    }

    var min = document.getElementById('decrease');

    min.addEventListener('click', decrease);
    function decrease(){
        counter--;
        if(counter < 0){ 
        document.getElementById('display').style.color = 'red';
        }else if(counter == 0){
        document.getElementById('display').style.color = 'black';
        }
        document.getElementById('display').innerHTML = counter;
        }

    var res = document.getElementById('reset');
    res.addEventListener('click', reset);
    function reset(){
    counter = 0;
    
    document.getElementById('display').style.color = 'black';
    document.getElementById('display').innerHTML = counter;
    }

    
}


