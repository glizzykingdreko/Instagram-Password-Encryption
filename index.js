const crypto = require('crypto').webcrypto;

const {
    decodeUTF8,
    formatPublicKey,
    toHex,
    encodeBase64
} = require('./helpers/utils');


function encryptPassword(
    password,
    version = "10",
    keyID = "143",
    publicKey = "f219393f2381eab7abd6d20130bfa274cc4ffc8b67988da60abeffc88c1b9b15"
) {
    let d = decodeUTF8(password),
        timestamp = Math.floor(Date.now() / 1e3).toString(),
        e = decodeUTF8(timestamp),
        j = 1, k = 1, l = 48, m = 2, n = 32, o = 16, p = j + k + m + n + l + o,
        f = 100 + d.length,
        a = +keyID;
    
    if (publicKey.length !== 64)
        throw new Error("public key is not a valid hex sting");
    var s = toHex(publicKey);
    if (!s)
        throw new Error("public key is not a valid hex string");
    var t = new Uint8Array(f)
        , u = 0;
    t[u] = 1;
    u += 1;
    t[u] = a;
    u += 1;
    c = {
        length: 32 * 8,
        name: "AES-GCM"
    };
    var v = {
        additionalData: e,
        iv: new Uint8Array(12),
        name: "AES-GCM",
        tagLen: 16
    }

    return crypto.subtle.generateKey(c, true, ['encrypt', 'decrypt']).then(function (a) {
        var c = crypto.subtle.exportKey('raw', a);
        a = crypto.subtle.encrypt(v, a, d.buffer);
        return Promise.all([c, a]);
    }).then(function (a) {
        var b = new Uint8Array(a[0]);
        b = formatPublicKey(b, s);
        t[u] = b.length & 255;
        t[u + 1] = b.length >> 8 & 255;
        u += m;
        t.set(b, u);
        u += n;
        u += l;
        if (b.length !== n + l)
            throw new Error("encrypted key is the wrong length");
        b = new Uint8Array(a[1]);
        a = b.slice(-o);
        b = b.slice(0, -o);
        t.set(a, u);
        u += o;
        t.set(b, u);
        password = encodeBase64(t);
        return ["#PWD_INSTAGRAM_BROWSER", version, timestamp, password].join(":")
    })["catch"](function (a) {
        throw a
    })
}

module.exports = {
    encryptPassword,
};