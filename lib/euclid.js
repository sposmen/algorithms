'use strict';

function gcd(p, q){
    var r;
    if (q === 0) {
        return p;
    }
    r = p % q;
    return gcd(q, r);
}