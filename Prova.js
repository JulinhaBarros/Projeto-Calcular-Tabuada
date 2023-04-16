function calcularTabuada() {
     let tabu = document.getElementById ("tabu").value
     let tabu2 = document.getElementById ("tabu2").value
     let mostrar = document.getElementById ("mostrar")

     for ( let i = 1; i <= tabu2; i ++) {
        mostrar.innerHTML +=`
        <p> ${tabu} x ${i} = ${tabu * i}`
     }
}