function par_impar(n) {
    if (n % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}
let res = par_impar(2)
console.log(`O número é ${res}.`)
