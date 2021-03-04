function chunkArrayInGroups(arr, size) {
    let a = []
    a.push(arr.slice(0, size))
    for (let i = size; i < arr.length; i += size) {
        if (i + size > arr.length) {
            a.push(arr.slice(i, arr.length))
        } else {
            a.push(arr.slice(i, i + size))
        }
    }
    return a
}
  
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)