const blake = require('./blake')();
const tweetnacl = require('./tweetnacl')();

function decodeUTF8(a) {
    if (typeof a !== "string")
        throw new TypeError("expected string");
    var b;
    a = unescape(encodeURIComponent(a));
    var c = new Uint8Array(a.length);
    for (b = 0; b < a.length; b++)
        c[b] = a.charCodeAt(b);
    return c
}

function blakeShit(a, b) {
    var c = blake.blake2bInit(tweetnacl.box.nonceLength, null);
    blake.blake2bUpdate(c, a);
    blake.blake2bUpdate(c, b);
    return blake.blake2bFinal(c)
}

function ad(a) {
    for (var b = 0; b < a.length; b++)
        a[b] = 0
}
function formatPublicKey(a, b) {
    var c = new Uint8Array(48 + a.length)
        , e = tweetnacl.box.keyPair();
    c.set(e.publicKey);
    var i = Object(blakeShit)(e.publicKey, b);
    a = tweetnacl.box(a, i, b, e.secretKey);
    c.set(a, e.publicKey.length);
    Object(ad)(e.secretKey);
    return c
}

function toHex(a) {
    var b = [];
    for (var c = 0; c < a.length; c += 2)
        b.push(parseInt(a.slice(c, c + 2), 16));
    return new Uint8Array(b)
}

function encodeBase64(a) {
    var b, c = [], d = a.length;
    for (b = 0; b < d; b++)
        c.push(String.fromCharCode(a[b]));
    return btoa(c.join(""))
}

module.exports = {
    decodeUTF8,
    formatPublicKey,
    toHex,
    encodeBase64
}