const button=document.querySelector('.calc')
const display=document.querySelector('.display');
    let result = 0;
    let changingVariable=0;
    let pressedButton=0;
button.addEventListener('click', function(event) {
  if(event.target.tagName ===  'BUTTON'){
    let clicked=event.target.innerText;
    //To store user input
    if(!isNaN(clicked)){
      if(parseInt( display.innerText)===0)
      {
        display.innerText=clicked;
      } else {
      display.innerText+=clicked;
      }
    } 
    //button functions
    if(clicked==='C')
    {
      display.innerText=0;
    }
    if(clicked==='<-')
    {
      display.innerText=Math.floor(display.innerText/10);
    } else {           
       if((clicked==='+')||(clicked==='-')||(clicked==='*')||(clicked==='/'))
      {
        changingVariable=display.innerText;
        display.innerText=0;
        pressedButton=clicked;
      }
      //To calculate negative integers
      
      if((clicked==='-')&&(changingVariable==='0'))
      {
        display.innerText=clicked;
      }
    } 
    if(clicked==='=')
        {
        switch(pressedButton)
        {
          case "+":
            result=parseInt(changingVariable)+parseInt(display.innerText);
            break;
          case "-":
            result=parseInt(changingVariable)-parseInt(display.innerText);
            break;
          case "*":
            result=parseInt(changingVariable)*parseInt(display.innerText);
            break;
          case "/":
            result=parseInt(changingVariable)/parseInt(display.innerText);
            break;   
        }
        //to display the result after clicking equal
        display.innerText=result;
      }
  }   
});

