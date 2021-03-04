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

chunkArrayInGroups(["a", "b", "c", "d"], 2);