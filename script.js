
var generated=[];
var test=[];
for(var i=0;i<document.querySelectorAll("button").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function (event)
{
    console.log("Key pressed!"+this.innerHTML);
    change_back(this.innerText);
});
}

function change_back(keys)
{
    switch(keys)
    {
        case "b1": fun1(); break;
        case "b2": fun2(); break;
        case "b3": fun3(); break;
        case "b4": fun4(); break;
        default: fun4(); 
    }
}

function fun1()
{
  var sou = new Audio("./Attachments/tom-2.mp3");
  sou.play();
  document.querySelector("#bt1").style.backgroundColor="green";
  generated.push(1);
  setTimeout(function() { document.querySelector("#bt1").style.backgroundColor="white";},200);
}

function fun2()
{
    var sou = new Audio("./Attachments/tom-2.mp3");
    sou.play();
    document.querySelector("#bt2").style.backgroundColor="red";
    setTimeout(function() { document.querySelector("#bt2").style.backgroundColor="white";},200);
    generated.push(2);
}

function fun3()
{
    var sou = new Audio("./Attachments/tom-2.mp3");
    sou.play();
    document.querySelector("#bt3").style.backgroundColor="yellow";
    setTimeout(function() { document.querySelector("#bt3").style.backgroundColor="white";},200);
    generated.push(3);

}

function fun4()
{
    var sou = new Audio("./Attachments/tom-2.mp3");
    sou.play();
    document.querySelector("#bt4").style.backgroundColor="blue";
    setTimeout(function() { document.querySelector("#bt4").style.backgroundColor="white";},200);
    generated.push(4);
}

document.querySelector("#heading_tab").addEventListener("click",function ()
{
    document.querySelector("#heading_tab").innerHTML="<h1>LeveL: 1</h1>";
    console.log("hello!");
    generate_random(0);

});


function generate_random(k)
{
    test=[];
    for(var i=0;i<=k;i++)
    {
        var nums=Math.random()*3;
        nums=Math.round(nums)+1;
        test.push(nums);
    }
    button_disabled();
    play(test);
}

function button_disabled()
{
    for(var i=0;i<document.querySelectorAll("button").length;i++)
    {
        document.querySelectorAll("button")[i].disabled=true;
    }
}

function play(temp)
{
    var i=0;
    function oper()
    {
  
        switch(temp[i])
        {
            case 1: fun1(); break;
            case 2: fun2(); break;
            case 3: fun3(); break;
            case 4: fun4(); break;
            default:
        }
        i++;
        if(i<temp.length)
        {
            setTimeout(oper,2000);
        }else
        {
            generated=[];
            setTimeout(button_enable,2000);
            console.log("Provide the input");
            return takeinput();
        }
    }

    setTimeout(oper,2000);
}

function button_enable()
{
    for(var i=0;i<document.querySelectorAll("button").length;i++)
    {
        document.querySelectorAll("button")[i].disabled=false;
    }
}

function takeinput()
{
    if(generated.length<test.length)
    {
        console.log("Current length"+generated.length);
        setTimeout(takeinput,2000);
    }

    if(generated.length>=test.length)
    {
       if(check_both(generated,test))
       {
        var len=test.length;
        generate_random(len);
        len=len+1;
        document.querySelector("h1").innerHTML="Level:"+len;
       }else
       {
        var len=test.length;
        alert("GAME OVER!")
        document.querySelector("h1").innerHTML=len+": Final Score! <br> click to contiue"; 
       }
    }
}


function check_both(temp,gener)
{
    for(var i=0;i<temp.length;i++)
    {
        if(temp[i]!=gener[i])
        {
            return false;
        }
    }
    return true;
}


