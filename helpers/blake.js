
b = {};
var g = {
    exports: b
};
function h() {
    var a = "Input must be an string, Buffer or Uint8Array";
    function b(b) {
        var c;
        if (b instanceof Uint8Array)
            c = b;
        else if (b instanceof Buffer)
            c = new Uint8Array(b);
        else if (typeof b === "string")
            c = new Uint8Array(Buffer.from(b, "utf8"));
        else
            throw new Error(a);
        return c
    }
    function c(a) {
        return Array.prototype.map.call(a, function (a) {
            return (a < 16 ? "0" : "") + a.toString(16)
        }).join("")
    }
    function d(a) {
        return (4294967296 + a).toString(16).substring(1)
    }
    function e(a, b, c) {
        var e = "\n" + a + " = ";
        for (var f = 0; f < b.length; f += 2) {
            if (c === 32)
                e += d(b[f]).toUpperCase(),
                    e += " ",
                    e += d(b[f + 1]).toUpperCase();
            else if (c === 64)
                e += d(b[f + 1]).toUpperCase(),
                    e += d(b[f]).toUpperCase();
            else
                throw new Error("Invalid size " + c);
            f % 6 === 4 ? e += "\n" + new Array(a.length + 4).join(" ") : f < b.length - 2 && (e += " ")
        }
    }
    function f(a, b, c) {
        var d = new Date().getTime()
            , e = new Uint8Array(b);
        for (var f = 0; f < b; f++)
            e[f] = f % 256;
        b = new Date().getTime();
        d = b;
        for (f = 0; f < c; f++) {
            b = a(e);
            b = new Date().getTime();
            var g = b - d;
            d = b
        }
    }
    g.exports = {
        normalizeInput: b,
        toHex: c,
        debugPrint: e,
        testSpeed: f
    }
}
var i = !1;
function j() {
    i || (i = !0,
        h());
    return g.exports
}
c = {};
var k = {
    exports: c
};
function l() {
    var a = j();
    function b(a, b, c) {
        var d = a[b] + a[c];
        c = a[b + 1] + a[c + 1];
        d >= 4294967296 && c++;
        a[b] = d;
        a[b + 1] = c
    }
    function c(a, b, c, d) {
        var e = a[b] + c;
        c < 0 && (e += 4294967296);
        c = a[b + 1] + d;
        e >= 4294967296 && c++;
        a[b] = e;
        a[b + 1] = c
    }
    function d(a, b) {
        return a[b] ^ a[b + 1] << 8 ^ a[b + 2] << 16 ^ a[b + 3] << 24
    }
    function e(a, d, e, f, g, h) {
        var j = l[g];
        g = l[g + 1];
        var k = l[h];
        h = l[h + 1];
        b(i, a, d);
        c(i, a, j, g);
        j = i[f] ^ i[a];
        g = i[f + 1] ^ i[a + 1];
        i[f] = g;
        i[f + 1] = j;
        b(i, e, f);
        j = i[d] ^ i[e];
        g = i[d + 1] ^ i[e + 1];
        i[d] = j >>> 24 ^ g << 8;
        i[d + 1] = g >>> 24 ^ j << 8;
        b(i, a, d);
        c(i, a, k, h);
        j = i[f] ^ i[a];
        g = i[f + 1] ^ i[a + 1];
        i[f] = j >>> 16 ^ g << 16;
        i[f + 1] = g >>> 16 ^ j << 16;
        b(i, e, f);
        j = i[d] ^ i[e];
        g = i[d + 1] ^ i[e + 1];
        i[d] = g >>> 31 ^ j << 1;
        i[d + 1] = j >>> 31 ^ g << 1
    }
    var f = new Uint32Array([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225])
        , g = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3]
        , h = new Uint8Array(g.map(function (a) {
            return a * 2
        }))
        , i = new Uint32Array(32)
        , l = new Uint32Array(32);
    function m(a, b) {
        var c = 0;
        for (c = 0; c < 16; c++)
            i[c] = a.h[c],
                i[c + 16] = f[c];
        i[24] = i[24] ^ a.t;
        i[25] = i[25] ^ a.t / 4294967296;
        b && (i[28] = ~i[28],
            i[29] = ~i[29]);
        for (c = 0; c < 32; c++)
            l[c] = d(a.b, 4 * c);
        for (c = 0; c < 12; c++)
            e(0, 8, 16, 24, h[c * 16 + 0], h[c * 16 + 1]),
                e(2, 10, 18, 26, h[c * 16 + 2], h[c * 16 + 3]),
                e(4, 12, 20, 28, h[c * 16 + 4], h[c * 16 + 5]),
                e(6, 14, 22, 30, h[c * 16 + 6], h[c * 16 + 7]),
                e(0, 10, 20, 30, h[c * 16 + 8], h[c * 16 + 9]),
                e(2, 12, 22, 24, h[c * 16 + 10], h[c * 16 + 11]),
                e(4, 14, 16, 26, h[c * 16 + 12], h[c * 16 + 13]),
                e(6, 8, 18, 28, h[c * 16 + 14], h[c * 16 + 15]);
        for (c = 0; c < 16; c++)
            a.h[c] = a.h[c] ^ i[c] ^ i[c + 16]
    }
    function n(a, b) {
        if (a === 0 || a > 64)
            throw new Error("Illegal output length, expected 0 < length <= 64");
        if (b && b.length > 64)
            throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
        var c = {
            b: new Uint8Array(128),
            h: new Uint32Array(16),
            t: 0,
            c: 0,
            outlen: a
        };
        for (var d = 0; d < 16; d++)
            c.h[d] = f[d];
        d = b ? b.length : 0;
        c.h[0] ^= 16842752 ^ d << 8 ^ a;
        b && (o(c, b),
            c.c = 128);
        return c
    }
    function o(a, b) {
        for (var c = 0; c < b.length; c++)
            a.c === 128 && (a.t += a.c,
                m(a, !1),
                a.c = 0),
                a.b[a.c++] = b[c]
    }
    function p(a) {
        a.t += a.c;
        while (a.c < 128)
            a.b[a.c++] = 0;
        m(a, !0);
        var b = new Uint8Array(a.outlen);
        for (var c = 0; c < a.outlen; c++)
            b[c] = a.h[c >> 2] >> 8 * (c & 3);
        return b
    }
    function q(b, c, d) {
        d = d || 64;
        b = a.normalizeInput(b);
        d = n(d, c);
        o(d, b);
        return p(d)
    }
    function r(b, c, d) {
        b = q(b, c, d);
        return a.toHex(b)
    }
    k.exports = {
        blake2b: q,
        blake2bHex: r,
        blake2bInit: n,
        blake2bUpdate: o,
        blake2bFinal: p
    }
}
var m = !1;
function n() {
    m || (m = !0,
        l());
    return k.exports
}
d = {};
var o = {
    exports: d
};
function p() {
    var a = j();
    function b(a, b) {
        return a[b] ^ a[b + 1] << 8 ^ a[b + 2] << 16 ^ a[b + 3] << 24
    }
    function c(a, b, c, e, f, h) {
        g[a] = g[a] + g[b] + f,
            g[e] = d(g[e] ^ g[a], 16),
            g[c] = g[c] + g[e],
            g[b] = d(g[b] ^ g[c], 12),
            g[a] = g[a] + g[b] + h,
            g[e] = d(g[e] ^ g[a], 8),
            g[c] = g[c] + g[e],
            g[b] = d(g[b] ^ g[c], 7)
    }
    function d(a, b) {
        return a >>> b ^ a << 32 - b
    }
    var e = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])
        , f = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0])
        , g = new Uint32Array(16)
        , h = new Uint32Array(16);
    function i(a, d) {
        var i = 0;
        for (i = 0; i < 8; i++)
            g[i] = a.h[i],
                g[i + 8] = e[i];
        g[12] ^= a.t;
        g[13] ^= a.t / 4294967296;
        d && (g[14] = ~g[14]);
        for (i = 0; i < 16; i++)
            h[i] = b(a.b, 4 * i);
        for (i = 0; i < 10; i++)
            c(0, 4, 8, 12, h[f[i * 16 + 0]], h[f[i * 16 + 1]]),
                c(1, 5, 9, 13, h[f[i * 16 + 2]], h[f[i * 16 + 3]]),
                c(2, 6, 10, 14, h[f[i * 16 + 4]], h[f[i * 16 + 5]]),
                c(3, 7, 11, 15, h[f[i * 16 + 6]], h[f[i * 16 + 7]]),
                c(0, 5, 10, 15, h[f[i * 16 + 8]], h[f[i * 16 + 9]]),
                c(1, 6, 11, 12, h[f[i * 16 + 10]], h[f[i * 16 + 11]]),
                c(2, 7, 8, 13, h[f[i * 16 + 12]], h[f[i * 16 + 13]]),
                c(3, 4, 9, 14, h[f[i * 16 + 14]], h[f[i * 16 + 15]]);
        for (i = 0; i < 8; i++)
            a.h[i] ^= g[i] ^ g[i + 8]
    }
    function k(a, b) {
        if (!(a > 0 && a <= 32))
            throw new Error("Incorrect output length, should be in [1, 32]");
        var c = b ? b.length : 0;
        if (b && !(c > 0 && c <= 32))
            throw new Error("Incorrect key length, should be in [1, 32]");
        var d = {
            h: new Uint32Array(e),
            b: new Uint32Array(64),
            c: 0,
            t: 0,
            outlen: a
        };
        d.h[0] ^= 16842752 ^ c << 8 ^ a;
        c > 0 && (l(d, b),
            d.c = 64);
        return d
    }
    function l(a, b) {
        for (var c = 0; c < b.length; c++)
            a.c === 64 && (a.t += a.c,
                i(a, !1),
                a.c = 0),
                a.b[a.c++] = b[c]
    }
    function m(a) {
        a.t += a.c;
        while (a.c < 64)
            a.b[a.c++] = 0;
        i(a, !0);
        var b = new Uint8Array(a.outlen);
        for (var c = 0; c < a.outlen; c++)
            b[c] = a.h[c >> 2] >> 8 * (c & 3) & 255;
        return b
    }
    function n(b, c, d) {
        d = d || 32;
        b = a.normalizeInput(b);
        d = k(d, c);
        l(d, b);
        return m(d)
    }
    function p(b, c, d) {
        b = n(b, c, d);
        return a.toHex(b)
    }
    o.exports = {
        blake2s: n,
        blake2sHex: p,
        blake2sInit: k,
        blake2sUpdate: l,
        blake2sFinal: m
    }
}
var q = !1;
function r() {
    q || (q = !0,
        p());
    return o.exports
}
f = {};
var s = {
    exports: f
};
function t() {
    var a = n()
        , b = r();
    s.exports = {
        blake2b: a.blake2b,
        blake2bHex: a.blake2bHex,
        blake2bInit: a.blake2bInit,
        blake2bUpdate: a.blake2bUpdate,
        blake2bFinal: a.blake2bFinal,
        blake2s: b.blake2s,
        blake2sHex: b.blake2sHex,
        blake2sInit: b.blake2sInit,
        blake2sUpdate: b.blake2sUpdate,
        blake2sFinal: b.blake2sFinal
    }
}
var u = !1;
function v() {
    u || (u = !0,
        t());
    return s.exports
}
function blake(a) {
    switch (a) {
        case void 0:
            return v();
        case "/blake2b":
            return n()
    }
}
module.exports = blake;