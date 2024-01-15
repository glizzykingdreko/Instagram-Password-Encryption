const crypto = require('crypto');
b = {};
var g = {
    exports: b
};
function h() {
    (function (a) {
        var b = function (a) {
            var b, c = new Float64Array(16);
            if (a)
                for (b = 0; b < a.length; b++)
                    c[b] = a[b];
            return c
        }
            , c = function () {
                throw new Error("no PRNG")
            }
            , d = new Uint8Array(16)
            , e = new Uint8Array(32);
        e[0] = 9;
        var f = b()
            , g = b([1])
            , h = b([56129, 1])
            , i = b([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
            , j = b([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
            , k = b([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
            , l = b([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
            , m = b([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function n(a, b, c, d) {
            a[b] = c >> 24 & 255,
                a[b + 1] = c >> 16 & 255,
                a[b + 2] = c >> 8 & 255,
                a[b + 3] = c & 255,
                a[b + 4] = d >> 24 & 255,
                a[b + 5] = d >> 16 & 255,
                a[b + 6] = d >> 8 & 255,
                a[b + 7] = d & 255
        }
        function o(a, b, c, d, e) {
            var f, g = 0;
            for (f = 0; f < e; f++)
                g |= a[b + f] ^ c[d + f];
            return (1 & g - 1 >>> 8) - 1
        }
        function p(a, b, c, d) {
            return o(a, b, c, d, 16)
        }
        function q(a, b, c, d) {
            return o(a, b, c, d, 32)
        }
        function r(a, b, c, d) {
            var e = d[0] & 255 | (d[1] & 255) << 8 | (d[2] & 255) << 16 | (d[3] & 255) << 24
                , f = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24
                , g = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24
                , h = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24
                , i = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24
                , j = d[4] & 255 | (d[5] & 255) << 8 | (d[6] & 255) << 16 | (d[7] & 255) << 24
                , k = b[0] & 255 | (b[1] & 255) << 8 | (b[2] & 255) << 16 | (b[3] & 255) << 24
                , l = b[4] & 255 | (b[5] & 255) << 8 | (b[6] & 255) << 16 | (b[7] & 255) << 24
                , m = b[8] & 255 | (b[9] & 255) << 8 | (b[10] & 255) << 16 | (b[11] & 255) << 24;
            b = b[12] & 255 | (b[13] & 255) << 8 | (b[14] & 255) << 16 | (b[15] & 255) << 24;
            var n = d[8] & 255 | (d[9] & 255) << 8 | (d[10] & 255) << 16 | (d[11] & 255) << 24
                , o = c[16] & 255 | (c[17] & 255) << 8 | (c[18] & 255) << 16 | (c[19] & 255) << 24
                , p = c[20] & 255 | (c[21] & 255) << 8 | (c[22] & 255) << 16 | (c[23] & 255) << 24
                , q = c[24] & 255 | (c[25] & 255) << 8 | (c[26] & 255) << 16 | (c[27] & 255) << 24;
            c = c[28] & 255 | (c[29] & 255) << 8 | (c[30] & 255) << 16 | (c[31] & 255) << 24;
            d = d[12] & 255 | (d[13] & 255) << 8 | (d[14] & 255) << 16 | (d[15] & 255) << 24;
            var r = e, s = f, t = g, u = h, v = i, w = j, x = k, y = l, z = m, A = b, B = n, C = o, D = p, E = q, F = c, G = d, H;
            for (var I = 0; I < 20; I += 2)
                H = r + D | 0,
                    v ^= H << 7 | H >>> 32 - 7,
                    H = v + r | 0,
                    z ^= H << 9 | H >>> 32 - 9,
                    H = z + v | 0,
                    D ^= H << 13 | H >>> 32 - 13,
                    H = D + z | 0,
                    r ^= H << 18 | H >>> 32 - 18,
                    H = w + s | 0,
                    A ^= H << 7 | H >>> 32 - 7,
                    H = A + w | 0,
                    E ^= H << 9 | H >>> 32 - 9,
                    H = E + A | 0,
                    s ^= H << 13 | H >>> 32 - 13,
                    H = s + E | 0,
                    w ^= H << 18 | H >>> 32 - 18,
                    H = B + x | 0,
                    F ^= H << 7 | H >>> 32 - 7,
                    H = F + B | 0,
                    t ^= H << 9 | H >>> 32 - 9,
                    H = t + F | 0,
                    x ^= H << 13 | H >>> 32 - 13,
                    H = x + t | 0,
                    B ^= H << 18 | H >>> 32 - 18,
                    H = G + C | 0,
                    u ^= H << 7 | H >>> 32 - 7,
                    H = u + G | 0,
                    y ^= H << 9 | H >>> 32 - 9,
                    H = y + u | 0,
                    C ^= H << 13 | H >>> 32 - 13,
                    H = C + y | 0,
                    G ^= H << 18 | H >>> 32 - 18,
                    H = r + u | 0,
                    s ^= H << 7 | H >>> 32 - 7,
                    H = s + r | 0,
                    t ^= H << 9 | H >>> 32 - 9,
                    H = t + s | 0,
                    u ^= H << 13 | H >>> 32 - 13,
                    H = u + t | 0,
                    r ^= H << 18 | H >>> 32 - 18,
                    H = w + v | 0,
                    x ^= H << 7 | H >>> 32 - 7,
                    H = x + w | 0,
                    y ^= H << 9 | H >>> 32 - 9,
                    H = y + x | 0,
                    v ^= H << 13 | H >>> 32 - 13,
                    H = v + y | 0,
                    w ^= H << 18 | H >>> 32 - 18,
                    H = B + A | 0,
                    C ^= H << 7 | H >>> 32 - 7,
                    H = C + B | 0,
                    z ^= H << 9 | H >>> 32 - 9,
                    H = z + C | 0,
                    A ^= H << 13 | H >>> 32 - 13,
                    H = A + z | 0,
                    B ^= H << 18 | H >>> 32 - 18,
                    H = G + F | 0,
                    D ^= H << 7 | H >>> 32 - 7,
                    H = D + G | 0,
                    E ^= H << 9 | H >>> 32 - 9,
                    H = E + D | 0,
                    F ^= H << 13 | H >>> 32 - 13,
                    H = F + E | 0,
                    G ^= H << 18 | H >>> 32 - 18;
            r = r + e | 0;
            s = s + f | 0;
            t = t + g | 0;
            u = u + h | 0;
            v = v + i | 0;
            w = w + j | 0;
            x = x + k | 0;
            y = y + l | 0;
            z = z + m | 0;
            A = A + b | 0;
            B = B + n | 0;
            C = C + o | 0;
            D = D + p | 0;
            E = E + q | 0;
            F = F + c | 0;
            G = G + d | 0;
            a[0] = r >>> 0 & 255;
            a[1] = r >>> 8 & 255;
            a[2] = r >>> 16 & 255;
            a[3] = r >>> 24 & 255;
            a[4] = s >>> 0 & 255;
            a[5] = s >>> 8 & 255;
            a[6] = s >>> 16 & 255;
            a[7] = s >>> 24 & 255;
            a[8] = t >>> 0 & 255;
            a[9] = t >>> 8 & 255;
            a[10] = t >>> 16 & 255;
            a[11] = t >>> 24 & 255;
            a[12] = u >>> 0 & 255;
            a[13] = u >>> 8 & 255;
            a[14] = u >>> 16 & 255;
            a[15] = u >>> 24 & 255;
            a[16] = v >>> 0 & 255;
            a[17] = v >>> 8 & 255;
            a[18] = v >>> 16 & 255;
            a[19] = v >>> 24 & 255;
            a[20] = w >>> 0 & 255;
            a[21] = w >>> 8 & 255;
            a[22] = w >>> 16 & 255;
            a[23] = w >>> 24 & 255;
            a[24] = x >>> 0 & 255;
            a[25] = x >>> 8 & 255;
            a[26] = x >>> 16 & 255;
            a[27] = x >>> 24 & 255;
            a[28] = y >>> 0 & 255;
            a[29] = y >>> 8 & 255;
            a[30] = y >>> 16 & 255;
            a[31] = y >>> 24 & 255;
            a[32] = z >>> 0 & 255;
            a[33] = z >>> 8 & 255;
            a[34] = z >>> 16 & 255;
            a[35] = z >>> 24 & 255;
            a[36] = A >>> 0 & 255;
            a[37] = A >>> 8 & 255;
            a[38] = A >>> 16 & 255;
            a[39] = A >>> 24 & 255;
            a[40] = B >>> 0 & 255;
            a[41] = B >>> 8 & 255;
            a[42] = B >>> 16 & 255;
            a[43] = B >>> 24 & 255;
            a[44] = C >>> 0 & 255;
            a[45] = C >>> 8 & 255;
            a[46] = C >>> 16 & 255;
            a[47] = C >>> 24 & 255;
            a[48] = D >>> 0 & 255;
            a[49] = D >>> 8 & 255;
            a[50] = D >>> 16 & 255;
            a[51] = D >>> 24 & 255;
            a[52] = E >>> 0 & 255;
            a[53] = E >>> 8 & 255;
            a[54] = E >>> 16 & 255;
            a[55] = E >>> 24 & 255;
            a[56] = F >>> 0 & 255;
            a[57] = F >>> 8 & 255;
            a[58] = F >>> 16 & 255;
            a[59] = F >>> 24 & 255;
            a[60] = G >>> 0 & 255;
            a[61] = G >>> 8 & 255;
            a[62] = G >>> 16 & 255;
            a[63] = G >>> 24 & 255
        }
        function s(a, b, c, d) {
            var e = d[0] & 255 | (d[1] & 255) << 8 | (d[2] & 255) << 16 | (d[3] & 255) << 24
                , f = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24
                , g = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24
                , h = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24
                , i = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24
                , j = d[4] & 255 | (d[5] & 255) << 8 | (d[6] & 255) << 16 | (d[7] & 255) << 24
                , k = b[0] & 255 | (b[1] & 255) << 8 | (b[2] & 255) << 16 | (b[3] & 255) << 24
                , l = b[4] & 255 | (b[5] & 255) << 8 | (b[6] & 255) << 16 | (b[7] & 255) << 24
                , m = b[8] & 255 | (b[9] & 255) << 8 | (b[10] & 255) << 16 | (b[11] & 255) << 24;
            b = b[12] & 255 | (b[13] & 255) << 8 | (b[14] & 255) << 16 | (b[15] & 255) << 24;
            var n = d[8] & 255 | (d[9] & 255) << 8 | (d[10] & 255) << 16 | (d[11] & 255) << 24
                , o = c[16] & 255 | (c[17] & 255) << 8 | (c[18] & 255) << 16 | (c[19] & 255) << 24
                , p = c[20] & 255 | (c[21] & 255) << 8 | (c[22] & 255) << 16 | (c[23] & 255) << 24
                , q = c[24] & 255 | (c[25] & 255) << 8 | (c[26] & 255) << 16 | (c[27] & 255) << 24;
            c = c[28] & 255 | (c[29] & 255) << 8 | (c[30] & 255) << 16 | (c[31] & 255) << 24;
            d = d[12] & 255 | (d[13] & 255) << 8 | (d[14] & 255) << 16 | (d[15] & 255) << 24;
            e = e;
            f = f;
            g = g;
            h = h;
            i = i;
            j = j;
            k = k;
            l = l;
            m = m;
            b = b;
            n = n;
            o = o;
            p = p;
            q = q;
            c = c;
            d = d;
            var r;
            for (var s = 0; s < 20; s += 2)
                r = e + p | 0,
                    i ^= r << 7 | r >>> 32 - 7,
                    r = i + e | 0,
                    m ^= r << 9 | r >>> 32 - 9,
                    r = m + i | 0,
                    p ^= r << 13 | r >>> 32 - 13,
                    r = p + m | 0,
                    e ^= r << 18 | r >>> 32 - 18,
                    r = j + f | 0,
                    b ^= r << 7 | r >>> 32 - 7,
                    r = b + j | 0,
                    q ^= r << 9 | r >>> 32 - 9,
                    r = q + b | 0,
                    f ^= r << 13 | r >>> 32 - 13,
                    r = f + q | 0,
                    j ^= r << 18 | r >>> 32 - 18,
                    r = n + k | 0,
                    c ^= r << 7 | r >>> 32 - 7,
                    r = c + n | 0,
                    g ^= r << 9 | r >>> 32 - 9,
                    r = g + c | 0,
                    k ^= r << 13 | r >>> 32 - 13,
                    r = k + g | 0,
                    n ^= r << 18 | r >>> 32 - 18,
                    r = d + o | 0,
                    h ^= r << 7 | r >>> 32 - 7,
                    r = h + d | 0,
                    l ^= r << 9 | r >>> 32 - 9,
                    r = l + h | 0,
                    o ^= r << 13 | r >>> 32 - 13,
                    r = o + l | 0,
                    d ^= r << 18 | r >>> 32 - 18,
                    r = e + h | 0,
                    f ^= r << 7 | r >>> 32 - 7,
                    r = f + e | 0,
                    g ^= r << 9 | r >>> 32 - 9,
                    r = g + f | 0,
                    h ^= r << 13 | r >>> 32 - 13,
                    r = h + g | 0,
                    e ^= r << 18 | r >>> 32 - 18,
                    r = j + i | 0,
                    k ^= r << 7 | r >>> 32 - 7,
                    r = k + j | 0,
                    l ^= r << 9 | r >>> 32 - 9,
                    r = l + k | 0,
                    i ^= r << 13 | r >>> 32 - 13,
                    r = i + l | 0,
                    j ^= r << 18 | r >>> 32 - 18,
                    r = n + b | 0,
                    o ^= r << 7 | r >>> 32 - 7,
                    r = o + n | 0,
                    m ^= r << 9 | r >>> 32 - 9,
                    r = m + o | 0,
                    b ^= r << 13 | r >>> 32 - 13,
                    r = b + m | 0,
                    n ^= r << 18 | r >>> 32 - 18,
                    r = d + c | 0,
                    p ^= r << 7 | r >>> 32 - 7,
                    r = p + d | 0,
                    q ^= r << 9 | r >>> 32 - 9,
                    r = q + p | 0,
                    c ^= r << 13 | r >>> 32 - 13,
                    r = c + q | 0,
                    d ^= r << 18 | r >>> 32 - 18;
            a[0] = e >>> 0 & 255;
            a[1] = e >>> 8 & 255;
            a[2] = e >>> 16 & 255;
            a[3] = e >>> 24 & 255;
            a[4] = j >>> 0 & 255;
            a[5] = j >>> 8 & 255;
            a[6] = j >>> 16 & 255;
            a[7] = j >>> 24 & 255;
            a[8] = n >>> 0 & 255;
            a[9] = n >>> 8 & 255;
            a[10] = n >>> 16 & 255;
            a[11] = n >>> 24 & 255;
            a[12] = d >>> 0 & 255;
            a[13] = d >>> 8 & 255;
            a[14] = d >>> 16 & 255;
            a[15] = d >>> 24 & 255;
            a[16] = k >>> 0 & 255;
            a[17] = k >>> 8 & 255;
            a[18] = k >>> 16 & 255;
            a[19] = k >>> 24 & 255;
            a[20] = l >>> 0 & 255;
            a[21] = l >>> 8 & 255;
            a[22] = l >>> 16 & 255;
            a[23] = l >>> 24 & 255;
            a[24] = m >>> 0 & 255;
            a[25] = m >>> 8 & 255;
            a[26] = m >>> 16 & 255;
            a[27] = m >>> 24 & 255;
            a[28] = b >>> 0 & 255;
            a[29] = b >>> 8 & 255;
            a[30] = b >>> 16 & 255;
            a[31] = b >>> 24 & 255
        }
        function t(a, b, c, d) {
            r(a, b, c, d)
        }
        function u(a, b, c, d) {
            s(a, b, c, d)
        }
        var v = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
        function w(a, b, c, d, e, f, g) {
            var h = new Uint8Array(16), i = new Uint8Array(64), j;
            for (j = 0; j < 16; j++)
                h[j] = 0;
            for (j = 0; j < 8; j++)
                h[j] = f[j];
            while (e >= 64) {
                t(i, h, g, v);
                for (j = 0; j < 64; j++)
                    a[b + j] = c[d + j] ^ i[j];
                f = 1;
                for (j = 8; j < 16; j++)
                    f = f + (h[j] & 255) | 0,
                        h[j] = f & 255,
                        f >>>= 8;
                e -= 64;
                b += 64;
                d += 64
            }
            if (e > 0) {
                t(i, h, g, v);
                for (j = 0; j < e; j++)
                    a[b + j] = c[d + j] ^ i[j]
            }
            return 0
        }
        function x(a, b, c, d, e) {
            var f = new Uint8Array(16), g = new Uint8Array(64), h;
            for (h = 0; h < 16; h++)
                f[h] = 0;
            for (h = 0; h < 8; h++)
                f[h] = d[h];
            while (c >= 64) {
                t(g, f, e, v);
                for (h = 0; h < 64; h++)
                    a[b + h] = g[h];
                d = 1;
                for (h = 8; h < 16; h++)
                    d = d + (f[h] & 255) | 0,
                        f[h] = d & 255,
                        d >>>= 8;
                c -= 64;
                b += 64
            }
            if (c > 0) {
                t(g, f, e, v);
                for (h = 0; h < c; h++)
                    a[b + h] = g[h]
            }
            return 0
        }
        function y(a, b, c, d, e) {
            var f = new Uint8Array(32);
            u(f, d, e, v);
            e = new Uint8Array(8);
            for (var g = 0; g < 8; g++)
                e[g] = d[g + 16];
            return x(a, b, c, e, f)
        }
        function z(a, b, c, d, e, f, g) {
            var h = new Uint8Array(32);
            u(h, f, g, v);
            g = new Uint8Array(8);
            for (var i = 0; i < 8; i++)
                g[i] = f[i + 16];
            return w(a, b, c, d, e, g, h)
        }
        var A = function (a) {
            this.buffer = new Uint8Array(16);
            this.r = new Uint16Array(10);
            this.h = new Uint16Array(10);
            this.pad = new Uint16Array(8);
            this.leftover = 0;
            this.fin = 0;
            var b, c;
            b = a[0] & 255 | (a[1] & 255) << 8;
            this.r[0] = b & 8191;
            c = a[2] & 255 | (a[3] & 255) << 8;
            this.r[1] = (b >>> 13 | c << 3) & 8191;
            b = a[4] & 255 | (a[5] & 255) << 8;
            this.r[2] = (c >>> 10 | b << 6) & 7939;
            c = a[6] & 255 | (a[7] & 255) << 8;
            this.r[3] = (b >>> 7 | c << 9) & 8191;
            b = a[8] & 255 | (a[9] & 255) << 8;
            this.r[4] = (c >>> 4 | b << 12) & 255;
            this.r[5] = b >>> 1 & 8190;
            c = a[10] & 255 | (a[11] & 255) << 8;
            this.r[6] = (b >>> 14 | c << 2) & 8191;
            b = a[12] & 255 | (a[13] & 255) << 8;
            this.r[7] = (c >>> 11 | b << 5) & 8065;
            c = a[14] & 255 | (a[15] & 255) << 8;
            this.r[8] = (b >>> 8 | c << 8) & 8191;
            this.r[9] = c >>> 5 & 127;
            this.pad[0] = a[16] & 255 | (a[17] & 255) << 8;
            this.pad[1] = a[18] & 255 | (a[19] & 255) << 8;
            this.pad[2] = a[20] & 255 | (a[21] & 255) << 8;
            this.pad[3] = a[22] & 255 | (a[23] & 255) << 8;
            this.pad[4] = a[24] & 255 | (a[25] & 255) << 8;
            this.pad[5] = a[26] & 255 | (a[27] & 255) << 8;
            this.pad[6] = a[28] & 255 | (a[29] & 255) << 8;
            this.pad[7] = a[30] & 255 | (a[31] & 255) << 8
        };
        A.prototype.blocks = function (a, b, c) {
            var d = this.fin ? 0 : 1 << 11, e, f, g, h, i, j, k, l, m, n, o, p = this.h[0], q = this.h[1], r = this.h[2], s = this.h[3], t = this.h[4], u = this.h[5], v = this.h[6], w = this.h[7], x = this.h[8], y = this.h[9], z = this.r[0], A = this.r[1], B = this.r[2], C = this.r[3], D = this.r[4], E = this.r[5], F = this.r[6], G = this.r[7], H = this.r[8], I = this.r[9];
            while (c >= 16)
                e = a[b + 0] & 255 | (a[b + 1] & 255) << 8,
                    p += e & 8191,
                    f = a[b + 2] & 255 | (a[b + 3] & 255) << 8,
                    q += (e >>> 13 | f << 3) & 8191,
                    e = a[b + 4] & 255 | (a[b + 5] & 255) << 8,
                    r += (f >>> 10 | e << 6) & 8191,
                    f = a[b + 6] & 255 | (a[b + 7] & 255) << 8,
                    s += (e >>> 7 | f << 9) & 8191,
                    e = a[b + 8] & 255 | (a[b + 9] & 255) << 8,
                    t += (f >>> 4 | e << 12) & 8191,
                    u += e >>> 1 & 8191,
                    f = a[b + 10] & 255 | (a[b + 11] & 255) << 8,
                    v += (e >>> 14 | f << 2) & 8191,
                    e = a[b + 12] & 255 | (a[b + 13] & 255) << 8,
                    w += (f >>> 11 | e << 5) & 8191,
                    f = a[b + 14] & 255 | (a[b + 15] & 255) << 8,
                    x += (e >>> 8 | f << 8) & 8191,
                    y += f >>> 5 | d,
                    e = 0,
                    f = e,
                    f += p * z,
                    f += q * (5 * I),
                    f += r * (5 * H),
                    f += s * (5 * G),
                    f += t * (5 * F),
                    e = f >>> 13,
                    f &= 8191,
                    f += u * (5 * E),
                    f += v * (5 * D),
                    f += w * (5 * C),
                    f += x * (5 * B),
                    f += y * (5 * A),
                    e += f >>> 13,
                    f &= 8191,
                    g = e,
                    g += p * A,
                    g += q * z,
                    g += r * (5 * I),
                    g += s * (5 * H),
                    g += t * (5 * G),
                    e = g >>> 13,
                    g &= 8191,
                    g += u * (5 * F),
                    g += v * (5 * E),
                    g += w * (5 * D),
                    g += x * (5 * C),
                    g += y * (5 * B),
                    e += g >>> 13,
                    g &= 8191,
                    h = e,
                    h += p * B,
                    h += q * A,
                    h += r * z,
                    h += s * (5 * I),
                    h += t * (5 * H),
                    e = h >>> 13,
                    h &= 8191,
                    h += u * (5 * G),
                    h += v * (5 * F),
                    h += w * (5 * E),
                    h += x * (5 * D),
                    h += y * (5 * C),
                    e += h >>> 13,
                    h &= 8191,
                    i = e,
                    i += p * C,
                    i += q * B,
                    i += r * A,
                    i += s * z,
                    i += t * (5 * I),
                    e = i >>> 13,
                    i &= 8191,
                    i += u * (5 * H),
                    i += v * (5 * G),
                    i += w * (5 * F),
                    i += x * (5 * E),
                    i += y * (5 * D),
                    e += i >>> 13,
                    i &= 8191,
                    j = e,
                    j += p * D,
                    j += q * C,
                    j += r * B,
                    j += s * A,
                    j += t * z,
                    e = j >>> 13,
                    j &= 8191,
                    j += u * (5 * I),
                    j += v * (5 * H),
                    j += w * (5 * G),
                    j += x * (5 * F),
                    j += y * (5 * E),
                    e += j >>> 13,
                    j &= 8191,
                    k = e,
                    k += p * E,
                    k += q * D,
                    k += r * C,
                    k += s * B,
                    k += t * A,
                    e = k >>> 13,
                    k &= 8191,
                    k += u * z,
                    k += v * (5 * I),
                    k += w * (5 * H),
                    k += x * (5 * G),
                    k += y * (5 * F),
                    e += k >>> 13,
                    k &= 8191,
                    l = e,
                    l += p * F,
                    l += q * E,
                    l += r * D,
                    l += s * C,
                    l += t * B,
                    e = l >>> 13,
                    l &= 8191,
                    l += u * A,
                    l += v * z,
                    l += w * (5 * I),
                    l += x * (5 * H),
                    l += y * (5 * G),
                    e += l >>> 13,
                    l &= 8191,
                    m = e,
                    m += p * G,
                    m += q * F,
                    m += r * E,
                    m += s * D,
                    m += t * C,
                    e = m >>> 13,
                    m &= 8191,
                    m += u * B,
                    m += v * A,
                    m += w * z,
                    m += x * (5 * I),
                    m += y * (5 * H),
                    e += m >>> 13,
                    m &= 8191,
                    n = e,
                    n += p * H,
                    n += q * G,
                    n += r * F,
                    n += s * E,
                    n += t * D,
                    e = n >>> 13,
                    n &= 8191,
                    n += u * C,
                    n += v * B,
                    n += w * A,
                    n += x * z,
                    n += y * (5 * I),
                    e += n >>> 13,
                    n &= 8191,
                    o = e,
                    o += p * I,
                    o += q * H,
                    o += r * G,
                    o += s * F,
                    o += t * E,
                    e = o >>> 13,
                    o &= 8191,
                    o += u * D,
                    o += v * C,
                    o += w * B,
                    o += x * A,
                    o += y * z,
                    e += o >>> 13,
                    o &= 8191,
                    e = (e << 2) + e | 0,
                    e = e + f | 0,
                    f = e & 8191,
                    e = e >>> 13,
                    g += e,
                    p = f,
                    q = g,
                    r = h,
                    s = i,
                    t = j,
                    u = k,
                    v = l,
                    w = m,
                    x = n,
                    y = o,
                    b += 16,
                    c -= 16;
            this.h[0] = p;
            this.h[1] = q;
            this.h[2] = r;
            this.h[3] = s;
            this.h[4] = t;
            this.h[5] = u;
            this.h[6] = v;
            this.h[7] = w;
            this.h[8] = x;
            this.h[9] = y
        }
            ;
        A.prototype.finish = function (a, b) {
            var c = new Uint16Array(10), d, e;
            if (this.leftover) {
                e = this.leftover;
                this.buffer[e++] = 1;
                for (; e < 16; e++)
                    this.buffer[e] = 0;
                this.fin = 1;
                this.blocks(this.buffer, 0, 16)
            }
            d = this.h[1] >>> 13;
            this.h[1] &= 8191;
            for (e = 2; e < 10; e++)
                this.h[e] += d,
                    d = this.h[e] >>> 13,
                    this.h[e] &= 8191;
            this.h[0] += d * 5;
            d = this.h[0] >>> 13;
            this.h[0] &= 8191;
            this.h[1] += d;
            d = this.h[1] >>> 13;
            this.h[1] &= 8191;
            this.h[2] += d;
            c[0] = this.h[0] + 5;
            d = c[0] >>> 13;
            c[0] &= 8191;
            for (e = 1; e < 10; e++)
                c[e] = this.h[e] + d,
                    d = c[e] >>> 13,
                    c[e] &= 8191;
            c[9] -= 1 << 13;
            d = (d ^ 1) - 1;
            for (e = 0; e < 10; e++)
                c[e] &= d;
            d = ~d;
            for (e = 0; e < 10; e++)
                this.h[e] = this.h[e] & d | c[e];
            this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
            this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
            this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
            this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
            this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
            this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
            this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
            this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
            c = this.h[0] + this.pad[0];
            this.h[0] = c & 65535;
            for (e = 1; e < 8; e++)
                c = (this.h[e] + this.pad[e] | 0) + (c >>> 16) | 0,
                    this.h[e] = c & 65535;
            a[b + 0] = this.h[0] >>> 0 & 255;
            a[b + 1] = this.h[0] >>> 8 & 255;
            a[b + 2] = this.h[1] >>> 0 & 255;
            a[b + 3] = this.h[1] >>> 8 & 255;
            a[b + 4] = this.h[2] >>> 0 & 255;
            a[b + 5] = this.h[2] >>> 8 & 255;
            a[b + 6] = this.h[3] >>> 0 & 255;
            a[b + 7] = this.h[3] >>> 8 & 255;
            a[b + 8] = this.h[4] >>> 0 & 255;
            a[b + 9] = this.h[4] >>> 8 & 255;
            a[b + 10] = this.h[5] >>> 0 & 255;
            a[b + 11] = this.h[5] >>> 8 & 255;
            a[b + 12] = this.h[6] >>> 0 & 255;
            a[b + 13] = this.h[6] >>> 8 & 255;
            a[b + 14] = this.h[7] >>> 0 & 255;
            a[b + 15] = this.h[7] >>> 8 & 255
        }
            ;
        A.prototype.update = function (a, b, c) {
            var d, e;
            if (this.leftover) {
                e = 16 - this.leftover;
                e > c && (e = c);
                for (d = 0; d < e; d++)
                    this.buffer[this.leftover + d] = a[b + d];
                c -= e;
                b += e;
                this.leftover += e;
                if (this.leftover < 16)
                    return;
                this.blocks(this.buffer, 0, 16);
                this.leftover = 0
            }
            c >= 16 && (e = c - c % 16,
                this.blocks(a, b, e),
                b += e,
                c -= e);
            if (c) {
                for (d = 0; d < c; d++)
                    this.buffer[this.leftover + d] = a[b + d];
                this.leftover += c
            }
        }
            ;
        function B(a, b, c, d, e, f) {
            f = new A(f);
            f.update(c, d, e);
            f.finish(a, b);
            return 0
        }
        function C(a, b, c, d, e, f) {
            var g = new Uint8Array(16);
            B(g, 0, c, d, e, f);
            return p(a, b, g, 0)
        }
        function D(a, b, c, d, e) {
            if (c < 32)
                return -1;
            z(a, 0, b, 0, c, d, e);
            B(a, 16, a, 32, c - 32, a);
            for (b = 0; b < 16; b++)
                a[b] = 0;
            return 0
        }
        function E(a, b, c, d, e) {
            var f = new Uint8Array(32);
            if (c < 32)
                return -1;
            y(f, 0, 32, d, e);
            if (C(b, 16, b, 32, c - 32, f) !== 0)
                return -1;
            z(a, 0, b, 0, c, d, e);
            for (f = 0; f < 32; f++)
                a[f] = 0;
            return 0
        }
        function F(a, b) {
            var c;
            for (c = 0; c < 16; c++)
                a[c] = b[c] | 0
        }
        function G(a) {
            var b, c, d = 1;
            for (b = 0; b < 16; b++)
                c = a[b] + d + 65535,
                    d = Math.floor(c / 65536),
                    a[b] = c - d * 65536;
            a[0] += d - 1 + 37 * (d - 1)
        }
        function H(a, b, c) {
            var d;
            c = ~(c - 1);
            for (var e = 0; e < 16; e++)
                d = c & (a[e] ^ b[e]),
                    a[e] ^= d,
                    b[e] ^= d
        }
        function I(a, c) {
            var d, e, f = b(), g = b();
            for (d = 0; d < 16; d++)
                g[d] = c[d];
            G(g);
            G(g);
            G(g);
            for (c = 0; c < 2; c++) {
                f[0] = g[0] - 65517;
                for (d = 1; d < 15; d++)
                    f[d] = g[d] - 65535 - (f[d - 1] >> 16 & 1),
                        f[d - 1] &= 65535;
                f[15] = g[15] - 32767 - (f[14] >> 16 & 1);
                e = f[15] >> 16 & 1;
                f[14] &= 65535;
                H(g, f, 1 - e)
            }
            for (d = 0; d < 16; d++)
                a[2 * d] = g[d] & 255,
                    a[2 * d + 1] = g[d] >> 8
        }
        function J(a, b) {
            var c = new Uint8Array(32)
                , d = new Uint8Array(32);
            I(c, a);
            I(d, b);
            return q(c, 0, d, 0)
        }
        function K(a) {
            var b = new Uint8Array(32);
            I(b, a);
            return b[0] & 1
        }
        function L(a, b) {
            var c;
            for (c = 0; c < 16; c++)
                a[c] = b[2 * c] + (b[2 * c + 1] << 8);
            a[15] &= 32767
        }
        function M(a, b, c) {
            for (var d = 0; d < 16; d++)
                a[d] = b[d] + c[d]
        }
        function N(a, b, c) {
            for (var d = 0; d < 16; d++)
                a[d] = b[d] - c[d]
        }
        function O(a, b, c) {
            var d, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = c[0], K = c[1], L = c[2], M = c[3], N = c[4], O = c[5], P = c[6], Q = c[7], R = c[8], S = c[9], T = c[10], U = c[11], V = c[12], W = c[13], X = c[14];
            c = c[15];
            d = b[0];
            e += d * J;
            f += d * K;
            g += d * L;
            h += d * M;
            i += d * N;
            j += d * O;
            k += d * P;
            l += d * Q;
            m += d * R;
            n += d * S;
            o += d * T;
            p += d * U;
            q += d * V;
            r += d * W;
            s += d * X;
            t += d * c;
            d = b[1];
            f += d * J;
            g += d * K;
            h += d * L;
            i += d * M;
            j += d * N;
            k += d * O;
            l += d * P;
            m += d * Q;
            n += d * R;
            o += d * S;
            p += d * T;
            q += d * U;
            r += d * V;
            s += d * W;
            t += d * X;
            u += d * c;
            d = b[2];
            g += d * J;
            h += d * K;
            i += d * L;
            j += d * M;
            k += d * N;
            l += d * O;
            m += d * P;
            n += d * Q;
            o += d * R;
            p += d * S;
            q += d * T;
            r += d * U;
            s += d * V;
            t += d * W;
            u += d * X;
            v += d * c;
            d = b[3];
            h += d * J;
            i += d * K;
            j += d * L;
            k += d * M;
            l += d * N;
            m += d * O;
            n += d * P;
            o += d * Q;
            p += d * R;
            q += d * S;
            r += d * T;
            s += d * U;
            t += d * V;
            u += d * W;
            v += d * X;
            w += d * c;
            d = b[4];
            i += d * J;
            j += d * K;
            k += d * L;
            l += d * M;
            m += d * N;
            n += d * O;
            o += d * P;
            p += d * Q;
            q += d * R;
            r += d * S;
            s += d * T;
            t += d * U;
            u += d * V;
            v += d * W;
            w += d * X;
            x += d * c;
            d = b[5];
            j += d * J;
            k += d * K;
            l += d * L;
            m += d * M;
            n += d * N;
            o += d * O;
            p += d * P;
            q += d * Q;
            r += d * R;
            s += d * S;
            t += d * T;
            u += d * U;
            v += d * V;
            w += d * W;
            x += d * X;
            y += d * c;
            d = b[6];
            k += d * J;
            l += d * K;
            m += d * L;
            n += d * M;
            o += d * N;
            p += d * O;
            q += d * P;
            r += d * Q;
            s += d * R;
            t += d * S;
            u += d * T;
            v += d * U;
            w += d * V;
            x += d * W;
            y += d * X;
            z += d * c;
            d = b[7];
            l += d * J;
            m += d * K;
            n += d * L;
            o += d * M;
            p += d * N;
            q += d * O;
            r += d * P;
            s += d * Q;
            t += d * R;
            u += d * S;
            v += d * T;
            w += d * U;
            x += d * V;
            y += d * W;
            z += d * X;
            A += d * c;
            d = b[8];
            m += d * J;
            n += d * K;
            o += d * L;
            p += d * M;
            q += d * N;
            r += d * O;
            s += d * P;
            t += d * Q;
            u += d * R;
            v += d * S;
            w += d * T;
            x += d * U;
            y += d * V;
            z += d * W;
            A += d * X;
            B += d * c;
            d = b[9];
            n += d * J;
            o += d * K;
            p += d * L;
            q += d * M;
            r += d * N;
            s += d * O;
            t += d * P;
            u += d * Q;
            v += d * R;
            w += d * S;
            x += d * T;
            y += d * U;
            z += d * V;
            A += d * W;
            B += d * X;
            C += d * c;
            d = b[10];
            o += d * J;
            p += d * K;
            q += d * L;
            r += d * M;
            s += d * N;
            t += d * O;
            u += d * P;
            v += d * Q;
            w += d * R;
            x += d * S;
            y += d * T;
            z += d * U;
            A += d * V;
            B += d * W;
            C += d * X;
            D += d * c;
            d = b[11];
            p += d * J;
            q += d * K;
            r += d * L;
            s += d * M;
            t += d * N;
            u += d * O;
            v += d * P;
            w += d * Q;
            x += d * R;
            y += d * S;
            z += d * T;
            A += d * U;
            B += d * V;
            C += d * W;
            D += d * X;
            E += d * c;
            d = b[12];
            q += d * J;
            r += d * K;
            s += d * L;
            t += d * M;
            u += d * N;
            v += d * O;
            w += d * P;
            x += d * Q;
            y += d * R;
            z += d * S;
            A += d * T;
            B += d * U;
            C += d * V;
            D += d * W;
            E += d * X;
            F += d * c;
            d = b[13];
            r += d * J;
            s += d * K;
            t += d * L;
            u += d * M;
            v += d * N;
            w += d * O;
            x += d * P;
            y += d * Q;
            z += d * R;
            A += d * S;
            B += d * T;
            C += d * U;
            D += d * V;
            E += d * W;
            F += d * X;
            G += d * c;
            d = b[14];
            s += d * J;
            t += d * K;
            u += d * L;
            v += d * M;
            w += d * N;
            x += d * O;
            y += d * P;
            z += d * Q;
            A += d * R;
            B += d * S;
            C += d * T;
            D += d * U;
            E += d * V;
            F += d * W;
            G += d * X;
            H += d * c;
            d = b[15];
            t += d * J;
            u += d * K;
            v += d * L;
            w += d * M;
            x += d * N;
            y += d * O;
            z += d * P;
            A += d * Q;
            B += d * R;
            C += d * S;
            D += d * T;
            E += d * U;
            F += d * V;
            G += d * W;
            H += d * X;
            I += d * c;
            e += 38 * u;
            f += 38 * v;
            g += 38 * w;
            h += 38 * x;
            i += 38 * y;
            j += 38 * z;
            k += 38 * A;
            l += 38 * B;
            m += 38 * C;
            n += 38 * D;
            o += 38 * E;
            p += 38 * F;
            q += 38 * G;
            r += 38 * H;
            s += 38 * I;
            b = 1;
            d = e + b + 65535;
            b = Math.floor(d / 65536);
            e = d - b * 65536;
            d = f + b + 65535;
            b = Math.floor(d / 65536);
            f = d - b * 65536;
            d = g + b + 65535;
            b = Math.floor(d / 65536);
            g = d - b * 65536;
            d = h + b + 65535;
            b = Math.floor(d / 65536);
            h = d - b * 65536;
            d = i + b + 65535;
            b = Math.floor(d / 65536);
            i = d - b * 65536;
            d = j + b + 65535;
            b = Math.floor(d / 65536);
            j = d - b * 65536;
            d = k + b + 65535;
            b = Math.floor(d / 65536);
            k = d - b * 65536;
            d = l + b + 65535;
            b = Math.floor(d / 65536);
            l = d - b * 65536;
            d = m + b + 65535;
            b = Math.floor(d / 65536);
            m = d - b * 65536;
            d = n + b + 65535;
            b = Math.floor(d / 65536);
            n = d - b * 65536;
            d = o + b + 65535;
            b = Math.floor(d / 65536);
            o = d - b * 65536;
            d = p + b + 65535;
            b = Math.floor(d / 65536);
            p = d - b * 65536;
            d = q + b + 65535;
            b = Math.floor(d / 65536);
            q = d - b * 65536;
            d = r + b + 65535;
            b = Math.floor(d / 65536);
            r = d - b * 65536;
            d = s + b + 65535;
            b = Math.floor(d / 65536);
            s = d - b * 65536;
            d = t + b + 65535;
            b = Math.floor(d / 65536);
            t = d - b * 65536;
            e += b - 1 + 37 * (b - 1);
            b = 1;
            d = e + b + 65535;
            b = Math.floor(d / 65536);
            e = d - b * 65536;
            d = f + b + 65535;
            b = Math.floor(d / 65536);
            f = d - b * 65536;
            d = g + b + 65535;
            b = Math.floor(d / 65536);
            g = d - b * 65536;
            d = h + b + 65535;
            b = Math.floor(d / 65536);
            h = d - b * 65536;
            d = i + b + 65535;
            b = Math.floor(d / 65536);
            i = d - b * 65536;
            d = j + b + 65535;
            b = Math.floor(d / 65536);
            j = d - b * 65536;
            d = k + b + 65535;
            b = Math.floor(d / 65536);
            k = d - b * 65536;
            d = l + b + 65535;
            b = Math.floor(d / 65536);
            l = d - b * 65536;
            d = m + b + 65535;
            b = Math.floor(d / 65536);
            m = d - b * 65536;
            d = n + b + 65535;
            b = Math.floor(d / 65536);
            n = d - b * 65536;
            d = o + b + 65535;
            b = Math.floor(d / 65536);
            o = d - b * 65536;
            d = p + b + 65535;
            b = Math.floor(d / 65536);
            p = d - b * 65536;
            d = q + b + 65535;
            b = Math.floor(d / 65536);
            q = d - b * 65536;
            d = r + b + 65535;
            b = Math.floor(d / 65536);
            r = d - b * 65536;
            d = s + b + 65535;
            b = Math.floor(d / 65536);
            s = d - b * 65536;
            d = t + b + 65535;
            b = Math.floor(d / 65536);
            t = d - b * 65536;
            e += b - 1 + 37 * (b - 1);
            a[0] = e;
            a[1] = f;
            a[2] = g;
            a[3] = h;
            a[4] = i;
            a[5] = j;
            a[6] = k;
            a[7] = l;
            a[8] = m;
            a[9] = n;
            a[10] = o;
            a[11] = p;
            a[12] = q;
            a[13] = r;
            a[14] = s;
            a[15] = t
        }
        function P(a, b) {
            O(a, b, b)
        }
        function Q(a, c) {
            var d = b(), e;
            for (e = 0; e < 16; e++)
                d[e] = c[e];
            for (e = 253; e >= 0; e--)
                P(d, d),
                    e !== 2 && e !== 4 && O(d, d, c);
            for (e = 0; e < 16; e++)
                a[e] = d[e]
        }
        function R(a, c) {
            var d = b(), e;
            for (e = 0; e < 16; e++)
                d[e] = c[e];
            for (e = 250; e >= 0; e--)
                P(d, d),
                    e !== 1 && O(d, d, c);
            for (e = 0; e < 16; e++)
                a[e] = d[e]
        }
        function S(a, c, d) {
            var e = new Uint8Array(32), f = new Float64Array(80), g, i = b(), j = b(), k = b(), l = b(), m = b(), n = b();
            for (g = 0; g < 31; g++)
                e[g] = c[g];
            e[31] = c[31] & 127 | 64;
            e[0] &= 248;
            L(f, d);
            for (g = 0; g < 16; g++)
                j[g] = f[g],
                    l[g] = i[g] = k[g] = 0;
            i[0] = l[0] = 1;
            for (g = 254; g >= 0; --g)
                c = e[g >>> 3] >>> (g & 7) & 1,
                    H(i, j, c),
                    H(k, l, c),
                    M(m, i, k),
                    N(i, i, k),
                    M(k, j, l),
                    N(j, j, l),
                    P(l, m),
                    P(n, i),
                    O(i, k, i),
                    O(k, j, m),
                    M(m, i, k),
                    N(i, i, k),
                    P(j, i),
                    N(k, l, n),
                    O(i, k, h),
                    M(i, i, l),
                    O(k, k, i),
                    O(i, l, n),
                    O(l, j, f),
                    P(j, m),
                    H(i, j, c),
                    H(k, l, c);
            for (g = 0; g < 16; g++)
                f[g + 16] = i[g],
                    f[g + 32] = k[g],
                    f[g + 48] = j[g],
                    f[g + 64] = l[g];
            d = f.subarray(32);
            c = f.subarray(16);
            Q(d, d);
            O(c, c, d);
            I(a, c);
            return 0
        }
        function T(a, b) {
            return S(a, b, e)
        }
        function U(a, b) {
            c(b, 32);
            return T(a, b)
        }
        function V(a, b, c) {
            var e = new Uint8Array(32);
            S(e, c, b);
            return u(a, d, e, v)
        }
        var W = D
            , X = E;
        function aa(a, b, c, d, e, f) {
            var g = new Uint8Array(32);
            V(g, e, f);
            return W(a, b, c, d, g)
        }
        function ba(a, b, c, d, e, f) {
            var g = new Uint8Array(32);
            V(g, e, f);
            return X(a, b, c, d, g)
        }
        var ca = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
        function da(a, b, c, d) {
            var e = new Int32Array(16), f = new Int32Array(16), g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = a[0], H = a[1], I = a[2], J = a[3], K = a[4], L = a[5], M = a[6], N = a[7], O = b[0], P = b[1], Q = b[2], R = b[3], S = b[4], T = b[5], U = b[6], V = b[7], W = 0;
            while (d >= 128) {
                for (y = 0; y < 16; y++)
                    z = 8 * y + W,
                        e[y] = c[z + 0] << 24 | c[z + 1] << 16 | c[z + 2] << 8 | c[z + 3],
                        f[y] = c[z + 4] << 24 | c[z + 5] << 16 | c[z + 6] << 8 | c[z + 7];
                for (y = 0; y < 80; y++) {
                    g = G;
                    h = H;
                    i = I;
                    j = J;
                    k = K;
                    l = L;
                    m = M;
                    N;
                    o = O;
                    p = P;
                    q = Q;
                    r = R;
                    s = S;
                    t = T;
                    u = U;
                    V;
                    A = N;
                    B = V;
                    C = B & 65535;
                    D = B >>> 16;
                    E = A & 65535;
                    F = A >>> 16;
                    A = (K >>> 14 | S << 32 - 14) ^ (K >>> 18 | S << 32 - 18) ^ (S >>> 41 - 32 | K << 32 - (41 - 32));
                    B = (S >>> 14 | K << 32 - 14) ^ (S >>> 18 | K << 32 - 18) ^ (K >>> 41 - 32 | S << 32 - (41 - 32));
                    C += B & 65535;
                    D += B >>> 16;
                    E += A & 65535;
                    F += A >>> 16;
                    A = K & L ^ ~K & M;
                    B = S & T ^ ~S & U;
                    C += B & 65535;
                    D += B >>> 16;
                    E += A & 65535;
                    F += A >>> 16;
                    A = ca[y * 2];
                    B = ca[y * 2 + 1];
                    C += B & 65535;
                    D += B >>> 16;
                    E += A & 65535;
                    F += A >>> 16;
                    A = e[y % 16];
                    B = f[y % 16];
                    C += B & 65535;
                    D += B >>> 16;
                    E += A & 65535;
                    F += A >>> 16;
                    D += C >>> 16;
                    E += D >>> 16;
                    F += E >>> 16;
                    w = E & 65535 | F << 16;
                    x = C & 65535 | D << 16;
                    A = w;
                    B = x;
                    C = B & 65535;
                    D = B >>> 16;
                    E = A & 65535;
                    F = A >>> 16;
                    A = (G >>> 28 | O << 32 - 28) ^ (O >>> 34 - 32 | G << 32 - (34 - 32)) ^ (O >>> 39 - 32 | G << 32 - (39 - 32));
                    B = (O >>> 28 | G << 32 - 28) ^ (G >>> 34 - 32 | O << 32 - (34 - 32)) ^ (G >>> 39 - 32 | O << 32 - (39 - 32));
                    C += B & 65535;
                    D += B >>> 16;
                    E += A & 65535;
                    F += A >>> 16;
                    A = G & H ^ G & I ^ H & I;
                    B = O & P ^ O & Q ^ P & Q;
                    C += B & 65535;
                    D += B >>> 16;
                    E += A & 65535;
                    F += A >>> 16;
                    D += C >>> 16;
                    E += D >>> 16;
                    F += E >>> 16;
                    n = E & 65535 | F << 16;
                    v = C & 65535 | D << 16;
                    A = j;
                    B = r;
                    C = B & 65535;
                    D = B >>> 16;
                    E = A & 65535;
                    F = A >>> 16;
                    A = w;
                    B = x;
                    C += B & 65535;
                    D += B >>> 16;
                    E += A & 65535;
                    F += A >>> 16;
                    D += C >>> 16;
                    E += D >>> 16;
                    F += E >>> 16;
                    j = E & 65535 | F << 16;
                    r = C & 65535 | D << 16;
                    H = g;
                    I = h;
                    J = i;
                    K = j;
                    L = k;
                    M = l;
                    N = m;
                    G = n;
                    P = o;
                    Q = p;
                    R = q;
                    S = r;
                    T = s;
                    U = t;
                    V = u;
                    O = v;
                    if (y % 16 === 15)
                        for (z = 0; z < 16; z++)
                            A = e[z],
                                B = f[z],
                                C = B & 65535,
                                D = B >>> 16,
                                E = A & 65535,
                                F = A >>> 16,
                                A = e[(z + 9) % 16],
                                B = f[(z + 9) % 16],
                                C += B & 65535,
                                D += B >>> 16,
                                E += A & 65535,
                                F += A >>> 16,
                                w = e[(z + 1) % 16],
                                x = f[(z + 1) % 16],
                                A = (w >>> 1 | x << 32 - 1) ^ (w >>> 8 | x << 32 - 8) ^ w >>> 7,
                                B = (x >>> 1 | w << 32 - 1) ^ (x >>> 8 | w << 32 - 8) ^ (x >>> 7 | w << 32 - 7),
                                C += B & 65535,
                                D += B >>> 16,
                                E += A & 65535,
                                F += A >>> 16,
                                w = e[(z + 14) % 16],
                                x = f[(z + 14) % 16],
                                A = (w >>> 19 | x << 32 - 19) ^ (x >>> 61 - 32 | w << 32 - (61 - 32)) ^ w >>> 6,
                                B = (x >>> 19 | w << 32 - 19) ^ (w >>> 61 - 32 | x << 32 - (61 - 32)) ^ (x >>> 6 | w << 32 - 6),
                                C += B & 65535,
                                D += B >>> 16,
                                E += A & 65535,
                                F += A >>> 16,
                                D += C >>> 16,
                                E += D >>> 16,
                                F += E >>> 16,
                                e[z] = E & 65535 | F << 16,
                                f[z] = C & 65535 | D << 16
                }
                A = G;
                B = O;
                C = B & 65535;
                D = B >>> 16;
                E = A & 65535;
                F = A >>> 16;
                A = a[0];
                B = b[0];
                C += B & 65535;
                D += B >>> 16;
                E += A & 65535;
                F += A >>> 16;
                D += C >>> 16;
                E += D >>> 16;
                F += E >>> 16;
                a[0] = G = E & 65535 | F << 16;
                b[0] = O = C & 65535 | D << 16;
                A = H;
                B = P;
                C = B & 65535;
                D = B >>> 16;
                E = A & 65535;
                F = A >>> 16;
                A = a[1];
                B = b[1];
                C += B & 65535;
                D += B >>> 16;
                E += A & 65535;
                F += A >>> 16;
                D += C >>> 16;
                E += D >>> 16;
                F += E >>> 16;
                a[1] = H = E & 65535 | F << 16;
                b[1] = P = C & 65535 | D << 16;
                A = I;
                B = Q;
                C = B & 65535;
                D = B >>> 16;
                E = A & 65535;
                F = A >>> 16;
                A = a[2];
                B = b[2];
                C += B & 65535;
                D += B >>> 16;
                E += A & 65535;
                F += A >>> 16;
                D += C >>> 16;
                E += D >>> 16;
                F += E >>> 16;
                a[2] = I = E & 65535 | F << 16;
                b[2] = Q = C & 65535 | D << 16;
                A = J;
                B = R;
                C = B & 65535;
                D = B >>> 16;
                E = A & 65535;
                F = A >>> 16;
                A = a[3];
                B = b[3];
                C += B & 65535;
                D += B >>> 16;
                E += A & 65535;
                F += A >>> 16;
                D += C >>> 16;
                E += D >>> 16;
                F += E >>> 16;
                a[3] = J = E & 65535 | F << 16;
                b[3] = R = C & 65535 | D << 16;
                A = K;
                B = S;
                C = B & 65535;
                D = B >>> 16;
                E = A & 65535;
                F = A >>> 16;
                A = a[4];
                B = b[4];
                C += B & 65535;
                D += B >>> 16;
                E += A & 65535;
                F += A >>> 16;
                D += C >>> 16;
                E += D >>> 16;
                F += E >>> 16;
                a[4] = K = E & 65535 | F << 16;
                b[4] = S = C & 65535 | D << 16;
                A = L;
                B = T;
                C = B & 65535;
                D = B >>> 16;
                E = A & 65535;
                F = A >>> 16;
                A = a[5];
                B = b[5];
                C += B & 65535;
                D += B >>> 16;
                E += A & 65535;
                F += A >>> 16;
                D += C >>> 16;
                E += D >>> 16;
                F += E >>> 16;
                a[5] = L = E & 65535 | F << 16;
                b[5] = T = C & 65535 | D << 16;
                A = M;
                B = U;
                C = B & 65535;
                D = B >>> 16;
                E = A & 65535;
                F = A >>> 16;
                A = a[6];
                B = b[6];
                C += B & 65535;
                D += B >>> 16;
                E += A & 65535;
                F += A >>> 16;
                D += C >>> 16;
                E += D >>> 16;
                F += E >>> 16;
                a[6] = M = E & 65535 | F << 16;
                b[6] = U = C & 65535 | D << 16;
                A = N;
                B = V;
                C = B & 65535;
                D = B >>> 16;
                E = A & 65535;
                F = A >>> 16;
                A = a[7];
                B = b[7];
                C += B & 65535;
                D += B >>> 16;
                E += A & 65535;
                F += A >>> 16;
                D += C >>> 16;
                E += D >>> 16;
                F += E >>> 16;
                a[7] = N = E & 65535 | F << 16;
                b[7] = V = C & 65535 | D << 16;
                W += 128;
                d -= 128
            }
            return d
        }
        function Y(a, b, c) {
            var d = new Int32Array(8), e = new Int32Array(8), f = new Uint8Array(256), g, h = c;
            d[0] = 1779033703;
            d[1] = 3144134277;
            d[2] = 1013904242;
            d[3] = 2773480762;
            d[4] = 1359893119;
            d[5] = 2600822924;
            d[6] = 528734635;
            d[7] = 1541459225;
            e[0] = 4089235720;
            e[1] = 2227873595;
            e[2] = 4271175723;
            e[3] = 1595750129;
            e[4] = 2917565137;
            e[5] = 725511199;
            e[6] = 4215389547;
            e[7] = 327033209;
            da(d, e, b, c);
            c %= 128;
            for (g = 0; g < c; g++)
                f[g] = b[h - c + g];
            f[c] = 128;
            c = 256 - 128 * (c < 112 ? 1 : 0);
            f[c - 9] = 0;
            n(f, c - 8, h / 536870912 | 0, h << 3);
            da(d, e, f, c);
            for (g = 0; g < 8; g++)
                n(a, 8 * g, d[g], e[g]);
            return 0
        }
        function ea(a, c) {
            var d = b()
                , e = b()
                , f = b()
                , g = b()
                , h = b()
                , i = b()
                , k = b()
                , l = b()
                , m = b();
            N(d, a[1], a[0]);
            N(m, c[1], c[0]);
            O(d, d, m);
            M(e, a[0], a[1]);
            M(m, c[0], c[1]);
            O(e, e, m);
            O(f, a[3], c[3]);
            O(f, f, j);
            O(g, a[2], c[2]);
            M(g, g, g);
            N(h, e, d);
            N(i, g, f);
            M(k, g, f);
            M(l, e, d);
            O(a[0], h, i);
            O(a[1], l, k);
            O(a[2], k, i);
            O(a[3], h, l)
        }
        function fa(a, b, c) {
            var d;
            for (d = 0; d < 4; d++)
                H(a[d], b[d], c)
        }
        function ga(a, c) {
            var d = b()
                , e = b()
                , f = b();
            Q(f, c[2]);
            O(d, c[0], f);
            O(e, c[1], f);
            I(a, e);
            a[31] ^= K(d) << 7
        }
        function ha(a, b, c) {
            var d, e;
            F(a[0], f);
            F(a[1], g);
            F(a[2], g);
            F(a[3], f);
            for (e = 255; e >= 0; --e)
                d = c[e / 8 | 0] >> (e & 7) & 1,
                    fa(a, b, d),
                    ea(b, a),
                    ea(a, a),
                    fa(a, b, d)
        }
        function ia(a, c) {
            var d = [b(), b(), b(), b()];
            F(d[0], k);
            F(d[1], l);
            F(d[2], g);
            O(d[3], k, l);
            ha(a, d, c)
        }
        function ja(a, d, e) {
            var f = new Uint8Array(64)
                , g = [b(), b(), b(), b()];
            e || c(d, 32);
            Y(f, d, 32);
            f[0] &= 248;
            f[31] &= 127;
            f[31] |= 64;
            ia(g, f);
            ga(a, g);
            for (e = 0; e < 32; e++)
                d[e + 32] = a[e];
            return 0
        }
        var ka = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function la(a, b) {
            var c, d, e, f;
            for (d = 63; d >= 32; --d) {
                c = 0;
                for (e = d - 32,
                    f = d - 12; e < f; ++e)
                    b[e] += c - 16 * b[d] * ka[e - (d - 32)],
                        c = b[e] + 128 >> 8,
                        b[e] -= c * 256;
                b[e] += c;
                b[d] = 0
            }
            c = 0;
            for (e = 0; e < 32; e++)
                b[e] += c - (b[31] >> 4) * ka[e],
                    c = b[e] >> 8,
                    b[e] &= 255;
            for (e = 0; e < 32; e++)
                b[e] -= c * ka[e];
            for (d = 0; d < 32; d++)
                b[d + 1] += b[d] >> 8,
                    a[d] = b[d] & 255
        }
        function ma(a) {
            var b = new Float64Array(64), c;
            for (c = 0; c < 64; c++)
                b[c] = a[c];
            for (c = 0; c < 64; c++)
                a[c] = 0;
            la(a, b)
        }
        function na(a, c, d, e) {
            var f = new Uint8Array(64), g = new Uint8Array(64), h = new Uint8Array(64), i, j = new Float64Array(64), k = [b(), b(), b(), b()];
            Y(f, e, 32);
            f[0] &= 248;
            f[31] &= 127;
            f[31] |= 64;
            var l = d + 64;
            for (i = 0; i < d; i++)
                a[64 + i] = c[i];
            for (i = 0; i < 32; i++)
                a[32 + i] = f[32 + i];
            Y(h, a.subarray(32), d + 32);
            ma(h);
            ia(k, h);
            ga(a, k);
            for (i = 32; i < 64; i++)
                a[i] = e[i];
            Y(g, a, d + 64);
            ma(g);
            for (i = 0; i < 64; i++)
                j[i] = 0;
            for (i = 0; i < 32; i++)
                j[i] = h[i];
            for (i = 0; i < 32; i++)
                for (c = 0; c < 32; c++)
                    j[i + c] += g[i] * f[c];
            la(a.subarray(32), j);
            return l
        }
        function oa(a, c) {
            var d = b()
                , e = b()
                , h = b()
                , j = b()
                , k = b()
                , l = b()
                , n = b();
            F(a[2], g);
            L(a[1], c);
            P(h, a[1]);
            O(j, h, i);
            N(h, h, a[2]);
            M(j, a[2], j);
            P(k, j);
            P(l, k);
            O(n, l, k);
            O(d, n, h);
            O(d, d, j);
            R(d, d);
            O(d, d, h);
            O(d, d, j);
            O(d, d, j);
            O(a[0], d, j);
            P(e, a[0]);
            O(e, e, j);
            J(e, h) && O(a[0], a[0], m);
            P(e, a[0]);
            O(e, e, j);
            if (J(e, h))
                return -1;
            K(a[0]) === c[31] >> 7 && N(a[0], f, a[0]);
            O(a[3], a[0], a[1]);
            return 0
        }
        function pa(a, c, d, e) {
            var f, g = new Uint8Array(32), h = new Uint8Array(64), i = [b(), b(), b(), b()], j = [b(), b(), b(), b()];
            if (d < 64)
                return -1;
            if (oa(j, e))
                return -1;
            for (f = 0; f < d; f++)
                a[f] = c[f];
            for (f = 0; f < 32; f++)
                a[f + 32] = e[f];
            Y(h, a, d);
            ma(h);
            ha(i, j, h);
            ia(j, c.subarray(32));
            ea(i, j);
            ga(g, i);
            d -= 64;
            if (q(c, 0, g, 0)) {
                for (f = 0; f < d; f++)
                    a[f] = 0;
                return -1
            }
            for (f = 0; f < d; f++)
                a[f] = c[f + 64];
            e = d;
            return e
        }
        var qa = 32
            , ra = 24
            , sa = 32
            , ta = 16
            , ua = 32
            , va = 32
            , wa = 32
            , xa = 32
            , ya = 32
            , za = ra
            , Aa = sa
            , Ba = ta
            , Z = 64
            , Ca = 32
            , Da = 64
            , Ea = 32
            , Fa = 64;
        a.lowlevel = {
            crypto_core_hsalsa20: u,
            crypto_stream_xor: z,
            crypto_stream: y,
            crypto_stream_salsa20_xor: w,
            crypto_stream_salsa20: x,
            crypto_onetimeauth: B,
            crypto_onetimeauth_verify: C,
            crypto_verify_16: p,
            crypto_verify_32: q,
            crypto_secretbox: D,
            crypto_secretbox_open: E,
            crypto_scalarmult: S,
            crypto_scalarmult_base: T,
            crypto_box_beforenm: V,
            crypto_box_afternm: W,
            crypto_box: aa,
            crypto_box_open: ba,
            crypto_box_keypair: U,
            crypto_hash: Y,
            crypto_sign: na,
            crypto_sign_keypair: ja,
            crypto_sign_open: pa,
            crypto_secretbox_KEYBYTES: qa,
            crypto_secretbox_NONCEBYTES: ra,
            crypto_secretbox_ZEROBYTES: sa,
            crypto_secretbox_BOXZEROBYTES: ta,
            crypto_scalarmult_BYTES: ua,
            crypto_scalarmult_SCALARBYTES: va,
            crypto_box_PUBLICKEYBYTES: wa,
            crypto_box_SECRETKEYBYTES: xa,
            crypto_box_BEFORENMBYTES: ya,
            crypto_box_NONCEBYTES: za,
            crypto_box_ZEROBYTES: Aa,
            crypto_box_BOXZEROBYTES: Ba,
            crypto_sign_BYTES: Z,
            crypto_sign_PUBLICKEYBYTES: Ca,
            crypto_sign_SECRETKEYBYTES: Da,
            crypto_sign_SEEDBYTES: Ea,
            crypto_hash_BYTES: Fa
        };
        function Ga(a, b) {
            if (a.length !== qa)
                throw new Error("bad key size");
            if (b.length !== ra)
                throw new Error("bad nonce size")
        }
        function Ha(a, b) {
            if (a.length !== wa)
                throw new Error("bad public key size");
            if (b.length !== xa)
                throw new Error("bad secret key size")
        }
        function $() {
            for (var a = 0; a < arguments.length; a++)
                if (!(arguments[a] instanceof Uint8Array))
                    throw new TypeError("unexpected type, use Uint8Array")
        }
        function Ia(a) {
            for (var b = 0; b < a.length; b++)
                a[b] = 0
        }
        a.randomBytes = function (a) {
            var b = new Uint8Array(a);
            c(b, a);
            return b
        }
            ;
        a.secretbox = function (a, b, c) {
            $(a, b, c);
            Ga(c, b);
            var d = new Uint8Array(sa + a.length)
                , e = new Uint8Array(d.length);
            for (var f = 0; f < a.length; f++)
                d[f + sa] = a[f];
            D(e, d, d.length, b, c);
            return e.subarray(ta)
        }
            ;
        a.secretbox.open = function (a, b, c) {
            $(a, b, c);
            Ga(c, b);
            var d = new Uint8Array(ta + a.length)
                , e = new Uint8Array(d.length);
            for (var f = 0; f < a.length; f++)
                d[f + ta] = a[f];
            if (d.length < 32)
                return null;
            return E(e, d, d.length, b, c) !== 0 ? null : e.subarray(sa)
        }
            ;
        a.secretbox.keyLength = qa;
        a.secretbox.nonceLength = ra;
        a.secretbox.overheadLength = ta;
        a.scalarMult = function (a, b) {
            $(a, b);
            if (a.length !== va)
                throw new Error("bad n size");
            if (b.length !== ua)
                throw new Error("bad p size");
            var c = new Uint8Array(ua);
            S(c, a, b);
            return c
        }
            ;
        a.scalarMult.base = function (a) {
            $(a);
            if (a.length !== va)
                throw new Error("bad n size");
            var b = new Uint8Array(ua);
            T(b, a);
            return b
        }
            ;
        a.scalarMult.scalarLength = va;
        a.scalarMult.groupElementLength = ua;
        a.box = function (b, c, d, e) {
            d = a.box.before(d, e);
            return a.secretbox(b, c, d)
        }
            ;
        a.box.before = function (a, b) {
            $(a, b);
            Ha(a, b);
            var c = new Uint8Array(ya);
            V(c, a, b);
            return c
        }
            ;
        a.box.after = a.secretbox;
        a.box.open = function (b, c, d, e) {
            d = a.box.before(d, e);
            return a.secretbox.open(b, c, d)
        }
            ;
        a.box.open.after = a.secretbox.open;
        a.box.keyPair = function () {
            var a = new Uint8Array(wa)
                , b = new Uint8Array(xa);
            U(a, b);
            return {
                publicKey: a,
                secretKey: b
            }
        }
            ;
        a.box.keyPair.fromSecretKey = function (a) {
            $(a);
            if (a.length !== xa)
                throw new Error("bad secret key size");
            var b = new Uint8Array(wa);
            T(b, a);
            return {
                publicKey: b,
                secretKey: new Uint8Array(a)
            }
        }
            ;
        a.box.publicKeyLength = wa;
        a.box.secretKeyLength = xa;
        a.box.sharedKeyLength = ya;
        a.box.nonceLength = za;
        a.box.overheadLength = a.secretbox.overheadLength;
        a.sign = function (a, b) {
            $(a, b);
            if (b.length !== Da)
                throw new Error("bad secret key size");
            var c = new Uint8Array(Z + a.length);
            na(c, a, a.length, b);
            return c
        }
            ;
        a.sign.open = function (a, b) {
            $(a, b);
            if (b.length !== Ca)
                throw new Error("bad public key size");
            var c = new Uint8Array(a.length);
            a = pa(c, a, a.length, b);
            if (a < 0)
                return null;
            b = new Uint8Array(a);
            for (a = 0; a < b.length; a++)
                b[a] = c[a];
            return b
        }
            ;
        a.sign.detached = function (b, c) {
            b = a.sign(b, c);
            c = new Uint8Array(Z);
            for (var d = 0; d < c.length; d++)
                c[d] = b[d];
            return c
        }
            ;
        a.sign.detached.verify = function (a, b, c) {
            $(a, b, c);
            if (b.length !== Z)
                throw new Error("bad signature size");
            if (c.length !== Ca)
                throw new Error("bad public key size");
            var d = new Uint8Array(Z + a.length), e = new Uint8Array(Z + a.length), f;
            for (f = 0; f < Z; f++)
                d[f] = b[f];
            for (f = 0; f < a.length; f++)
                d[f + Z] = a[f];
            return pa(e, d, d.length, c) >= 0
        }
            ;
        a.sign.keyPair = function () {
            var a = new Uint8Array(Ca)
                , b = new Uint8Array(Da);
            ja(a, b);
            return {
                publicKey: a,
                secretKey: b
            }
        }
            ;
        a.sign.keyPair.fromSecretKey = function (a) {
            $(a);
            if (a.length !== Da)
                throw new Error("bad secret key size");
            var b = new Uint8Array(Ca);
            for (var c = 0; c < b.length; c++)
                b[c] = a[32 + c];
            return {
                publicKey: b,
                secretKey: new Uint8Array(a)
            }
        }
            ;
        a.sign.keyPair.fromSeed = function (a) {
            $(a);
            if (a.length !== Ea)
                throw new Error("bad seed size");
            var b = new Uint8Array(Ca)
                , c = new Uint8Array(Da);
            for (var d = 0; d < 32; d++)
                c[d] = a[d];
            ja(b, c, !0);
            return {
                publicKey: b,
                secretKey: c
            }
        }
            ;
        a.sign.publicKeyLength = Ca;
        a.sign.secretKeyLength = Da;
        a.sign.seedLength = Ea;
        a.sign.signatureLength = Z;
        a.hash = function (a) {
            $(a);
            var b = new Uint8Array(Fa);
            Y(b, a, a.length);
            return b
        }
            ;
        a.hash.hashLength = Fa;
        a.verify = function (a, b) {
            $(a, b);
            if (a.length === 0 || b.length === 0)
                return !1;
            return a.length !== b.length ? !1 : o(a, 0, b, 0, a.length) === 0 ? !0 : !1
        }
            ;
        a.setPRNG = function (a) {
            c = a
        }
            ;
        (function () {
            var getRandomValues = function (buf) {
                if (!(buf instanceof Uint8Array)) {
                    throw new TypeError("Expected input to be an Uint8Array");
                }
                var bytes = crypto.randomBytes(buf.length);
                buf.set(bytes);
            };

            var c = 65536;
            a.setPRNG(function (a, d) {
                var e, f = new Uint8Array(d);
                for (e = 0; e < d; e += c)
                    getRandomValues(f.subarray(e, e + Math.min(d - e, c)));
                for (e = 0; e < d; e++)
                    a[e] = f[e];
                Ia(f)
            })
        }
        )()
    }
    )(typeof g !== "undefined" && g.exports ? g.exports : self.nacl = self.nacl || {})
}
var i = !1;
function j() {
    i || (i = !0,
        h());
    return g.exports
}
function tweetnacl(a) {
    switch (a) {
        case void 0:
            return j()
    }
}
module.exports = tweetnacl;