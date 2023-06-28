// El reto es dibujar la diagonal principal
for(let i = 0;  i < 10; i++){
    let fila = '';
      for(let j = 0; j < 10; j++){
        if(i === j){
            fila += '* ';   
        }else{
            fila += ' '
        }
          
        
      }
      console.log(fila);
  }