function fatorial(n) {
    let total = 1
    for (n; n > 1; n--) {
        total *= n
    }
    return total
}
console.log(fatorial(6))
