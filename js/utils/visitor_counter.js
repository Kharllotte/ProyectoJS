const count = () => {
    let contador = localStorage.getItem('count')
    let count2 = document.getElementById('contador');
    count2.innerHTML = contador;
    if(!contador){
        contador = 0;
    }
    contador++;
    localStorage.setItem('count', contador);
} 



count();