let $calc = '0';
let $click = false;
let $round = 1000;
let $result;

function funcClear(){
    $calc ='0';
    $click = false;
}

function funcResult(){
    try{
        $result = eval($calc);
        $result = Math.round($result*$round)/$round;
    } catch(e){
        $result = '??'
    }
    setTimeout(funcResult, 100);
}

function funcReloadElements(){
    document.getElementById('calc').textContent=$calc;
    document.getElementById('result').textContent=$result;
    setTimeout(funcReloadElements, 100);
}

function funcClick($element){
    $element.style.scale=0.9;
    setTimeout(function(){
        $element.style.scale=1;
    }, 100);
    if (!$click){
        $calc = '';
        $click = true;
    }
    if ($element === document.getElementById('button1')){
        $calc += '1';
    }
    if ($element === document.getElementById('button2')){
        $calc += '2';
    }
    if ($element === document.getElementById('button3')){
        $calc += '3';
    }
    if ($element === document.getElementById('button4')){
        $calc += '4';
    }
    if ($element === document.getElementById('button5')){
        $calc += '5';
    }
    if ($element === document.getElementById('button6')){
        $calc += '6';
    }
    if ($element === document.getElementById('button7')){
        $calc += '7';
    }
    if ($element === document.getElementById('button8')){
        $calc += '8';
    }
    if ($element === document.getElementById('button9')){
        $calc += '9';
    }
    if ($element === document.getElementById('buttonParLeft')){
        $calc += '(';
    }
    if ($element === document.getElementById('button0')){
        $calc += '0';
    }
    if ($element === document.getElementById('buttonParRight')){
        $calc += ')';
    }
    if ($element === document.getElementById('buttonPlus')){
        $calc += '+';
    }
    if ($element === document.getElementById('buttonMinus')){
        $calc += '-';
    }
    if ($element === document.getElementById('buttonMulti')){
        $calc += '*';
    }
    if ($element === document.getElementById('buttonSlash')){
        $calc += '/';
    }
    if ($element === document.getElementById('buttonPower')){
        $calc += '**';
    }
    if ($element === document.getElementById('buttonClear')){
        $calc = $calc.slice(0, -1);
        if ($calc.length === 0){
            $calc = '0';
            $click = false;
        }

    }
}

function funcMouseLeave($element){
    $element.style.backgroundColor='white';
}

function funcMouseEnter($element){
    $element.style.backgroundColor='cyan';
}

funcReloadElements();
funcResult();
