module.exports = function reverse(n) {

    if (n < 0)
        n *= -1;

    n = String(n);
    let temp = '';
    let j = n.length - 1;
    for (let i = 0; i < n.length; i++) {
        temp += n[j];
        j--;
    }

    temp -= '';
    return temp;
}
