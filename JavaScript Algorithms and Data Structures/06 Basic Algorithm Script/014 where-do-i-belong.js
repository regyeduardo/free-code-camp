function getIndexToIns(arr, num) {
    function ordenaLista(lista) {
      let a = []
      while (!(lista.length === 0)) {
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
    let a = ordenaLista(arr);
    let result = 0;
    for (let i = 0;i < a.length;i++) {
      if (a[i] >= num) {
        result = a.indexOf(a[i])
        break;
      }
    }
    return (num > a[a.length - 1] ? a.length : result);
  }

getIndexToIns([40, 60], 50);