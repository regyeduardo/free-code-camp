function ordenaLista(lista) {
  let a = []
  while (!lista.indexOf(lista[0]) === -1) {
    let min = lista[0];
    for (let i=0;i<lista.length;i++){
      if (lista[i] < min){
        min = lista[i]
      }
    }
    a.push(min)
    lista.splice(lista.indexOf(min), 1);
  }

  return a;
}
