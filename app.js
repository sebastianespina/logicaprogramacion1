    //variables
    let numeroMaximoPosible = 100;
    let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible) + 1;
    let numeroUsuario = 0;
    let intentos = 1;
    //let palabraVeces = 'vez';
    let maximosIntentos =6;

    
    while (numeroUsuario != numeroSecreto) {
        numeroUsuario = parseInt(prompt(`Me Indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

        console.log(typeof(numeroUsuario));
        if(numeroUsuario == numeroSecreto) {
            //acertamos la condicion se cumplio
            alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
        } else {
            if (numeroUsuario > numeroSecreto) {
                alert('El numero secreto es menor');    
            } else {
                alert('el numero secreto es mayor');
            }
            //incrementamos el contador cuando no acierta
            //intentos = intentos + 1;
            //intentos += 1;
            intentos ++;

            //palabraVeces = 'veces';
            if (intentos > maximosIntentos) {
                alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
                break;
            }
            //la condicion no se cumple
            //alert('Lo siento no acertaste el numero');
    }
}    

