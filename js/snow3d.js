!(function () {
  var t = {
      802: function (t) {
        t.exports =
          "precision mediump float;\nuniform sampler2D texture;\nvarying float distanceCamera;\n// varying float op;\n\nvoid main() {\n    vec4 color = vec4(texture2D(texture, gl_PointCoord));\n    color.w *= pow(1.0 - distanceCamera / 1500.0, 2.0);// * op;\n    gl_FragColor = color;\n}\n";
      },
      769: function (t) {
        t.exports =
          "precision mediump float;\n\nattribute vec3 position;\nattribute vec2 opacity;\n\nuniform vec3 cameraPosition;\nvarying float distanceCamera;\n// varying float op;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nuniform float size;\n\nvoid main() {\n    distanceCamera = distance(cameraPosition, position);\n    // op = 1.0;//opacity.x;\n    vec4 modelViewPosition = modelViewMatrix * vec4(position, 0.9);\n    gl_PointSize = (200.0 / length(modelViewPosition.xyz)) * size * opacity.x;\n    gl_Position = projectionMatrix * modelViewPosition;\n}\n";
      },
    },
    e = {};
  function n(i) {
    var r = e[i];
    if (void 0 !== r) return r.exports;
    var a = (e[i] = { exports: {} });
    return t[i](a, a.exports, n), a.exports;
  }
  (n.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return n.d(e, { a: e }), e;
  }),
    (n.d = function (t, e) {
      for (var i in e)
        n.o(e, i) &&
          !n.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (function () {
      "use strict";
      const t = [
          "00",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "0a",
          "0b",
          "0c",
          "0d",
          "0e",
          "0f",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "1a",
          "1b",
          "1c",
          "1d",
          "1e",
          "1f",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "2a",
          "2b",
          "2c",
          "2d",
          "2e",
          "2f",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "3a",
          "3b",
          "3c",
          "3d",
          "3e",
          "3f",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "4a",
          "4b",
          "4c",
          "4d",
          "4e",
          "4f",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "5a",
          "5b",
          "5c",
          "5d",
          "5e",
          "5f",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "6a",
          "6b",
          "6c",
          "6d",
          "6e",
          "6f",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "7a",
          "7b",
          "7c",
          "7d",
          "7e",
          "7f",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "8a",
          "8b",
          "8c",
          "8d",
          "8e",
          "8f",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "9a",
          "9b",
          "9c",
          "9d",
          "9e",
          "9f",
          "a0",
          "a1",
          "a2",
          "a3",
          "a4",
          "a5",
          "a6",
          "a7",
          "a8",
          "a9",
          "aa",
          "ab",
          "ac",
          "ad",
          "ae",
          "af",
          "b0",
          "b1",
          "b2",
          "b3",
          "b4",
          "b5",
          "b6",
          "b7",
          "b8",
          "b9",
          "ba",
          "bb",
          "bc",
          "bd",
          "be",
          "bf",
          "c0",
          "c1",
          "c2",
          "c3",
          "c4",
          "c5",
          "c6",
          "c7",
          "c8",
          "c9",
          "ca",
          "cb",
          "cc",
          "cd",
          "ce",
          "cf",
          "d0",
          "d1",
          "d2",
          "d3",
          "d4",
          "d5",
          "d6",
          "d7",
          "d8",
          "d9",
          "da",
          "db",
          "dc",
          "dd",
          "de",
          "df",
          "e0",
          "e1",
          "e2",
          "e3",
          "e4",
          "e5",
          "e6",
          "e7",
          "e8",
          "e9",
          "ea",
          "eb",
          "ec",
          "ed",
          "ee",
          "ef",
          "f0",
          "f1",
          "f2",
          "f3",
          "f4",
          "f5",
          "f6",
          "f7",
          "f8",
          "f9",
          "fa",
          "fb",
          "fc",
          "fd",
          "fe",
          "ff",
        ],
        e = Math.PI / 180,
        i = 180 / Math.PI;
      function r() {
        const e = (4294967295 * Math.random()) | 0,
          n = (4294967295 * Math.random()) | 0,
          i = (4294967295 * Math.random()) | 0,
          r = (4294967295 * Math.random()) | 0;
        return (
          t[255 & e] +
          t[(e >> 8) & 255] +
          t[(e >> 16) & 255] +
          t[(e >> 24) & 255] +
          "-" +
          t[255 & n] +
          t[(n >> 8) & 255] +
          "-" +
          t[((n >> 16) & 15) | 64] +
          t[(n >> 24) & 255] +
          "-" +
          t[(63 & i) | 128] +
          t[(i >> 8) & 255] +
          "-" +
          t[(i >> 16) & 255] +
          t[(i >> 24) & 255] +
          t[255 & r] +
          t[(r >> 8) & 255] +
          t[(r >> 16) & 255] +
          t[(r >> 24) & 255]
        ).toLowerCase();
      }
      function a(t, e, n) {
        return Math.max(e, Math.min(n, t));
      }
      function s(t, e, n) {
        return (1 - n) * t + n * e;
      }
      function o(t) {
        return 0 == (t & (t - 1)) && 0 !== t;
      }
      function l(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
      }
      function c(t, e) {
        switch (e.constructor) {
          case Float32Array:
            return t;
          case Uint16Array:
            return t / 65535;
          case Uint8Array:
            return t / 255;
          case Int16Array:
            return Math.max(t / 32767, -1);
          case Int8Array:
            return Math.max(t / 127, -1);
          default:
            throw new Error("Invalid component type.");
        }
      }
      function u(t, e) {
        switch (e.constructor) {
          case Float32Array:
            return t;
          case Uint16Array:
            return Math.round(65535 * t);
          case Uint8Array:
            return Math.round(255 * t);
          case Int16Array:
            return Math.round(32767 * t);
          case Int8Array:
            return Math.round(127 * t);
          default:
            throw new Error("Invalid component type.");
        }
      }
      class h {
        constructor(t = 0, e = 0, n = 0, i = 1) {
          (this.isQuaternion = !0),
            (this._x = t),
            (this._y = e),
            (this._z = n),
            (this._w = i);
        }
        static slerpFlat(t, e, n, i, r, a, s) {
          let o = n[i + 0],
            l = n[i + 1],
            c = n[i + 2],
            u = n[i + 3];
          const h = r[a + 0],
            d = r[a + 1],
            p = r[a + 2],
            f = r[a + 3];
          if (0 === s)
            return (
              (t[e + 0] = o),
              (t[e + 1] = l),
              (t[e + 2] = c),
              void (t[e + 3] = u)
            );
          if (1 === s)
            return (
              (t[e + 0] = h),
              (t[e + 1] = d),
              (t[e + 2] = p),
              void (t[e + 3] = f)
            );
          if (u !== f || o !== h || l !== d || c !== p) {
            let t = 1 - s;
            const e = o * h + l * d + c * p + u * f,
              n = e >= 0 ? 1 : -1,
              i = 1 - e * e;
            if (i > Number.EPSILON) {
              const r = Math.sqrt(i),
                a = Math.atan2(r, e * n);
              (t = Math.sin(t * a) / r), (s = Math.sin(s * a) / r);
            }
            const r = s * n;
            if (
              ((o = o * t + h * r),
              (l = l * t + d * r),
              (c = c * t + p * r),
              (u = u * t + f * r),
              t === 1 - s)
            ) {
              const t = 1 / Math.sqrt(o * o + l * l + c * c + u * u);
              (o *= t), (l *= t), (c *= t), (u *= t);
            }
          }
          (t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = u);
        }
        static multiplyQuaternionsFlat(t, e, n, i, r, a) {
          const s = n[i],
            o = n[i + 1],
            l = n[i + 2],
            c = n[i + 3],
            u = r[a],
            h = r[a + 1],
            d = r[a + 2],
            p = r[a + 3];
          return (
            (t[e] = s * p + c * u + o * d - l * h),
            (t[e + 1] = o * p + c * h + l * u - s * d),
            (t[e + 2] = l * p + c * d + s * h - o * u),
            (t[e + 3] = c * p - s * u - o * h - l * d),
            t
          );
        }
        get x() {
          return this._x;
        }
        set x(t) {
          (this._x = t), this._onChangeCallback();
        }
        get y() {
          return this._y;
        }
        set y(t) {
          (this._y = t), this._onChangeCallback();
        }
        get z() {
          return this._z;
        }
        set z(t) {
          (this._z = t), this._onChangeCallback();
        }
        get w() {
          return this._w;
        }
        set w(t) {
          (this._w = t), this._onChangeCallback();
        }
        set(t, e, n, i) {
          return (
            (this._x = t),
            (this._y = e),
            (this._z = n),
            (this._w = i),
            this._onChangeCallback(),
            this
          );
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t) {
          return (
            (this._x = t.x),
            (this._y = t.y),
            (this._z = t.z),
            (this._w = t.w),
            this._onChangeCallback(),
            this
          );
        }
        setFromEuler(t, e) {
          const n = t._x,
            i = t._y,
            r = t._z,
            a = t._order,
            s = Math.cos,
            o = Math.sin,
            l = s(n / 2),
            c = s(i / 2),
            u = s(r / 2),
            h = o(n / 2),
            d = o(i / 2),
            p = o(r / 2);
          switch (a) {
            case "XYZ":
              (this._x = h * c * u + l * d * p),
                (this._y = l * d * u - h * c * p),
                (this._z = l * c * p + h * d * u),
                (this._w = l * c * u - h * d * p);
              break;
            case "YXZ":
              (this._x = h * c * u + l * d * p),
                (this._y = l * d * u - h * c * p),
                (this._z = l * c * p - h * d * u),
                (this._w = l * c * u + h * d * p);
              break;
            case "ZXY":
              (this._x = h * c * u - l * d * p),
                (this._y = l * d * u + h * c * p),
                (this._z = l * c * p + h * d * u),
                (this._w = l * c * u - h * d * p);
              break;
            case "ZYX":
              (this._x = h * c * u - l * d * p),
                (this._y = l * d * u + h * c * p),
                (this._z = l * c * p - h * d * u),
                (this._w = l * c * u + h * d * p);
              break;
            case "YZX":
              (this._x = h * c * u + l * d * p),
                (this._y = l * d * u + h * c * p),
                (this._z = l * c * p - h * d * u),
                (this._w = l * c * u - h * d * p);
              break;
            case "XZY":
              (this._x = h * c * u - l * d * p),
                (this._y = l * d * u - h * c * p),
                (this._z = l * c * p + h * d * u),
                (this._w = l * c * u + h * d * p);
              break;
            default:
              console.warn(
                "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
                  a
              );
          }
          return !1 !== e && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t, e) {
          const n = e / 2,
            i = Math.sin(n);
          return (
            (this._x = t.x * i),
            (this._y = t.y * i),
            (this._z = t.z * i),
            (this._w = Math.cos(n)),
            this._onChangeCallback(),
            this
          );
        }
        setFromRotationMatrix(t) {
          const e = t.elements,
            n = e[0],
            i = e[4],
            r = e[8],
            a = e[1],
            s = e[5],
            o = e[9],
            l = e[2],
            c = e[6],
            u = e[10],
            h = n + s + u;
          if (h > 0) {
            const t = 0.5 / Math.sqrt(h + 1);
            (this._w = 0.25 / t),
              (this._x = (c - o) * t),
              (this._y = (r - l) * t),
              (this._z = (a - i) * t);
          } else if (n > s && n > u) {
            const t = 2 * Math.sqrt(1 + n - s - u);
            (this._w = (c - o) / t),
              (this._x = 0.25 * t),
              (this._y = (i + a) / t),
              (this._z = (r + l) / t);
          } else if (s > u) {
            const t = 2 * Math.sqrt(1 + s - n - u);
            (this._w = (r - l) / t),
              (this._x = (i + a) / t),
              (this._y = 0.25 * t),
              (this._z = (o + c) / t);
          } else {
            const t = 2 * Math.sqrt(1 + u - n - s);
            (this._w = (a - i) / t),
              (this._x = (r + l) / t),
              (this._y = (o + c) / t),
              (this._z = 0.25 * t);
          }
          return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t, e) {
          let n = t.dot(e) + 1;
          return (
            n < Number.EPSILON
              ? ((n = 0),
                Math.abs(t.x) > Math.abs(t.z)
                  ? ((this._x = -t.y),
                    (this._y = t.x),
                    (this._z = 0),
                    (this._w = n))
                  : ((this._x = 0),
                    (this._y = -t.z),
                    (this._z = t.y),
                    (this._w = n)))
              : ((this._x = t.y * e.z - t.z * e.y),
                (this._y = t.z * e.x - t.x * e.z),
                (this._z = t.x * e.y - t.y * e.x),
                (this._w = n)),
            this.normalize()
          );
        }
        angleTo(t) {
          return 2 * Math.acos(Math.abs(a(this.dot(t), -1, 1)));
        }
        rotateTowards(t, e) {
          const n = this.angleTo(t);
          if (0 === n) return this;
          const i = Math.min(1, e / n);
          return this.slerp(t, i), this;
        }
        identity() {
          return this.set(0, 0, 0, 1);
        }
        invert() {
          return this.conjugate();
        }
        conjugate() {
          return (
            (this._x *= -1),
            (this._y *= -1),
            (this._z *= -1),
            this._onChangeCallback(),
            this
          );
        }
        dot(t) {
          return (
            this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
          );
        }
        lengthSq() {
          return (
            this._x * this._x +
            this._y * this._y +
            this._z * this._z +
            this._w * this._w
          );
        }
        length() {
          return Math.sqrt(
            this._x * this._x +
              this._y * this._y +
              this._z * this._z +
              this._w * this._w
          );
        }
        normalize() {
          let t = this.length();
          return (
            0 === t
              ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
              : ((t = 1 / t),
                (this._x = this._x * t),
                (this._y = this._y * t),
                (this._z = this._z * t),
                (this._w = this._w * t)),
            this._onChangeCallback(),
            this
          );
        }
        multiply(t) {
          return this.multiplyQuaternions(this, t);
        }
        premultiply(t) {
          return this.multiplyQuaternions(t, this);
        }
        multiplyQuaternions(t, e) {
          const n = t._x,
            i = t._y,
            r = t._z,
            a = t._w,
            s = e._x,
            o = e._y,
            l = e._z,
            c = e._w;
          return (
            (this._x = n * c + a * s + i * l - r * o),
            (this._y = i * c + a * o + r * s - n * l),
            (this._z = r * c + a * l + n * o - i * s),
            (this._w = a * c - n * s - i * o - r * l),
            this._onChangeCallback(),
            this
          );
        }
        slerp(t, e) {
          if (0 === e) return this;
          if (1 === e) return this.copy(t);
          const n = this._x,
            i = this._y,
            r = this._z,
            a = this._w;
          let s = a * t._w + n * t._x + i * t._y + r * t._z;
          if (
            (s < 0
              ? ((this._w = -t._w),
                (this._x = -t._x),
                (this._y = -t._y),
                (this._z = -t._z),
                (s = -s))
              : this.copy(t),
            s >= 1)
          )
            return (
              (this._w = a), (this._x = n), (this._y = i), (this._z = r), this
            );
          const o = 1 - s * s;
          if (o <= Number.EPSILON) {
            const t = 1 - e;
            return (
              (this._w = t * a + e * this._w),
              (this._x = t * n + e * this._x),
              (this._y = t * i + e * this._y),
              (this._z = t * r + e * this._z),
              this.normalize(),
              this._onChangeCallback(),
              this
            );
          }
          const l = Math.sqrt(o),
            c = Math.atan2(l, s),
            u = Math.sin((1 - e) * c) / l,
            h = Math.sin(e * c) / l;
          return (
            (this._w = a * u + this._w * h),
            (this._x = n * u + this._x * h),
            (this._y = i * u + this._y * h),
            (this._z = r * u + this._z * h),
            this._onChangeCallback(),
            this
          );
        }
        slerpQuaternions(t, e, n) {
          return this.copy(t).slerp(e, n);
        }
        random() {
          const t = Math.random(),
            e = Math.sqrt(1 - t),
            n = Math.sqrt(t),
            i = 2 * Math.PI * Math.random(),
            r = 2 * Math.PI * Math.random();
          return this.set(
            e * Math.cos(i),
            n * Math.sin(r),
            n * Math.cos(r),
            e * Math.sin(i)
          );
        }
        equals(t) {
          return (
            t._x === this._x &&
            t._y === this._y &&
            t._z === this._z &&
            t._w === this._w
          );
        }
        fromArray(t, e = 0) {
          return (
            (this._x = t[e]),
            (this._y = t[e + 1]),
            (this._z = t[e + 2]),
            (this._w = t[e + 3]),
            this._onChangeCallback(),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this._x),
            (t[e + 1] = this._y),
            (t[e + 2] = this._z),
            (t[e + 3] = this._w),
            t
          );
        }
        fromBufferAttribute(t, e) {
          return (
            (this._x = t.getX(e)),
            (this._y = t.getY(e)),
            (this._z = t.getZ(e)),
            (this._w = t.getW(e)),
            this
          );
        }
        _onChange(t) {
          return (this._onChangeCallback = t), this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
          yield this._x, yield this._y, yield this._z, yield this._w;
        }
      }
      class d {
        constructor(t = 0, e = 0, n = 0) {
          (d.prototype.isVector3 = !0),
            (this.x = t),
            (this.y = e),
            (this.z = n);
        }
        set(t, e, n) {
          return (
            void 0 === n && (n = this.z),
            (this.x = t),
            (this.y = e),
            (this.z = n),
            this
          );
        }
        setScalar(t) {
          return (this.x = t), (this.y = t), (this.z = t), this;
        }
        setX(t) {
          return (this.x = t), this;
        }
        setY(t) {
          return (this.y = t), this;
        }
        setZ(t) {
          return (this.z = t), this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            default:
              throw new Error("index is out of range: " + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y, this.z);
        }
        copy(t) {
          return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
        }
        add(t) {
          return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
        }
        addScalar(t) {
          return (this.x += t), (this.y += t), (this.z += t), this;
        }
        addVectors(t, e) {
          return (
            (this.x = t.x + e.x),
            (this.y = t.y + e.y),
            (this.z = t.z + e.z),
            this
          );
        }
        addScaledVector(t, e) {
          return (
            (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
          );
        }
        sub(t) {
          return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
        }
        subScalar(t) {
          return (this.x -= t), (this.y -= t), (this.z -= t), this;
        }
        subVectors(t, e) {
          return (
            (this.x = t.x - e.x),
            (this.y = t.y - e.y),
            (this.z = t.z - e.z),
            this
          );
        }
        multiply(t) {
          return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this;
        }
        multiplyScalar(t) {
          return (this.x *= t), (this.y *= t), (this.z *= t), this;
        }
        multiplyVectors(t, e) {
          return (
            (this.x = t.x * e.x),
            (this.y = t.y * e.y),
            (this.z = t.z * e.z),
            this
          );
        }
        applyEuler(t) {
          return this.applyQuaternion(f.setFromEuler(t));
        }
        applyAxisAngle(t, e) {
          return this.applyQuaternion(f.setFromAxisAngle(t, e));
        }
        applyMatrix3(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
          return (
            (this.x = r[0] * e + r[3] * n + r[6] * i),
            (this.y = r[1] * e + r[4] * n + r[7] * i),
            (this.z = r[2] * e + r[5] * n + r[8] * i),
            this
          );
        }
        applyNormalMatrix(t) {
          return this.applyMatrix3(t).normalize();
        }
        applyMatrix4(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements,
            a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
          return (
            (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a),
            (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a),
            (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a),
            this
          );
        }
        applyQuaternion(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.x,
            a = t.y,
            s = t.z,
            o = t.w,
            l = o * e + a * i - s * n,
            c = o * n + s * e - r * i,
            u = o * i + r * n - a * e,
            h = -r * e - a * n - s * i;
          return (
            (this.x = l * o + h * -r + c * -s - u * -a),
            (this.y = c * o + h * -a + u * -r - l * -s),
            (this.z = u * o + h * -s + l * -a - c * -r),
            this
          );
        }
        project(t) {
          return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
            t.projectionMatrix
          );
        }
        unproject(t) {
          return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
            t.matrixWorld
          );
        }
        transformDirection(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
          return (
            (this.x = r[0] * e + r[4] * n + r[8] * i),
            (this.y = r[1] * e + r[5] * n + r[9] * i),
            (this.z = r[2] * e + r[6] * n + r[10] * i),
            this.normalize()
          );
        }
        divide(t) {
          return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        min(t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            (this.z = Math.min(this.z, t.z)),
            this
          );
        }
        max(t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            (this.z = Math.max(this.z, t.z)),
            this
          );
        }
        clamp(t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            (this.z = Math.max(t.z, Math.min(e.z, this.z))),
            this
          );
        }
        clampScalar(t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            (this.z = Math.max(t, Math.min(e, this.z))),
            this
          );
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(t, Math.min(e, n))
          );
        }
        floor() {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            this
          );
        }
        ceil() {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            this
          );
        }
        round() {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            this
          );
        }
        roundToZero() {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            this
          );
        }
        negate() {
          return (
            (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this
          );
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z;
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return (
            (this.x += (t.x - this.x) * e),
            (this.y += (t.y - this.y) * e),
            (this.z += (t.z - this.z) * e),
            this
          );
        }
        lerpVectors(t, e, n) {
          return (
            (this.x = t.x + (e.x - t.x) * n),
            (this.y = t.y + (e.y - t.y) * n),
            (this.z = t.z + (e.z - t.z) * n),
            this
          );
        }
        cross(t) {
          return this.crossVectors(this, t);
        }
        crossVectors(t, e) {
          const n = t.x,
            i = t.y,
            r = t.z,
            a = e.x,
            s = e.y,
            o = e.z;
          return (
            (this.x = i * o - r * s),
            (this.y = r * a - n * o),
            (this.z = n * s - i * a),
            this
          );
        }
        projectOnVector(t) {
          const e = t.lengthSq();
          if (0 === e) return this.set(0, 0, 0);
          const n = t.dot(this) / e;
          return this.copy(t).multiplyScalar(n);
        }
        projectOnPlane(t) {
          return p.copy(this).projectOnVector(t), this.sub(p);
        }
        reflect(t) {
          return this.sub(p.copy(t).multiplyScalar(2 * this.dot(t)));
        }
        angleTo(t) {
          const e = Math.sqrt(this.lengthSq() * t.lengthSq());
          if (0 === e) return Math.PI / 2;
          const n = this.dot(t) / e;
          return Math.acos(a(n, -1, 1));
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
          const e = this.x - t.x,
            n = this.y - t.y,
            i = this.z - t.z;
          return e * e + n * n + i * i;
        }
        manhattanDistanceTo(t) {
          return (
            Math.abs(this.x - t.x) +
            Math.abs(this.y - t.y) +
            Math.abs(this.z - t.z)
          );
        }
        setFromSpherical(t) {
          return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
        }
        setFromSphericalCoords(t, e, n) {
          const i = Math.sin(e) * t;
          return (
            (this.x = i * Math.sin(n)),
            (this.y = Math.cos(e) * t),
            (this.z = i * Math.cos(n)),
            this
          );
        }
        setFromCylindrical(t) {
          return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
        }
        setFromCylindricalCoords(t, e, n) {
          return (
            (this.x = t * Math.sin(e)),
            (this.y = n),
            (this.z = t * Math.cos(e)),
            this
          );
        }
        setFromMatrixPosition(t) {
          const e = t.elements;
          return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
        }
        setFromMatrixScale(t) {
          const e = this.setFromMatrixColumn(t, 0).length(),
            n = this.setFromMatrixColumn(t, 1).length(),
            i = this.setFromMatrixColumn(t, 2).length();
          return (this.x = e), (this.y = n), (this.z = i), this;
        }
        setFromMatrixColumn(t, e) {
          return this.fromArray(t.elements, 4 * e);
        }
        setFromMatrix3Column(t, e) {
          return this.fromArray(t.elements, 3 * e);
        }
        setFromEuler(t) {
          return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
        }
        equals(t) {
          return t.x === this.x && t.y === this.y && t.z === this.z;
        }
        fromArray(t, e = 0) {
          return (
            (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this
          );
        }
        toArray(t = [], e = 0) {
          return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
        }
        fromBufferAttribute(t, e) {
          return (
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            (this.z = t.getZ(e)),
            this
          );
        }
        random() {
          return (
            (this.x = Math.random()),
            (this.y = Math.random()),
            (this.z = Math.random()),
            this
          );
        }
        randomDirection() {
          const t = 2 * (Math.random() - 0.5),
            e = Math.random() * Math.PI * 2,
            n = Math.sqrt(1 - t ** 2);
          return (
            (this.x = n * Math.cos(e)),
            (this.y = n * Math.sin(e)),
            (this.z = t),
            this
          );
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z;
        }
      }
      const p = new d(),
        f = new h();
      class m {
        constructor() {
          (m.prototype.isMatrix4 = !0),
            (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        }
        set(t, e, n, i, r, a, s, o, l, c, u, h, d, p, f, m) {
          const g = this.elements;
          return (
            (g[0] = t),
            (g[4] = e),
            (g[8] = n),
            (g[12] = i),
            (g[1] = r),
            (g[5] = a),
            (g[9] = s),
            (g[13] = o),
            (g[2] = l),
            (g[6] = c),
            (g[10] = u),
            (g[14] = h),
            (g[3] = d),
            (g[7] = p),
            (g[11] = f),
            (g[15] = m),
            this
          );
        }
        identity() {
          return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
          return new m().fromArray(this.elements);
        }
        copy(t) {
          const e = this.elements,
            n = t.elements;
          return (
            (e[0] = n[0]),
            (e[1] = n[1]),
            (e[2] = n[2]),
            (e[3] = n[3]),
            (e[4] = n[4]),
            (e[5] = n[5]),
            (e[6] = n[6]),
            (e[7] = n[7]),
            (e[8] = n[8]),
            (e[9] = n[9]),
            (e[10] = n[10]),
            (e[11] = n[11]),
            (e[12] = n[12]),
            (e[13] = n[13]),
            (e[14] = n[14]),
            (e[15] = n[15]),
            this
          );
        }
        copyPosition(t) {
          const e = this.elements,
            n = t.elements;
          return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
        }
        setFromMatrix3(t) {
          const e = t.elements;
          return (
            this.set(
              e[0],
              e[3],
              e[6],
              0,
              e[1],
              e[4],
              e[7],
              0,
              e[2],
              e[5],
              e[8],
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        }
        extractBasis(t, e, n) {
          return (
            t.setFromMatrixColumn(this, 0),
            e.setFromMatrixColumn(this, 1),
            n.setFromMatrixColumn(this, 2),
            this
          );
        }
        makeBasis(t, e, n) {
          return (
            this.set(
              t.x,
              e.x,
              n.x,
              0,
              t.y,
              e.y,
              n.y,
              0,
              t.z,
              e.z,
              n.z,
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        }
        extractRotation(t) {
          const e = this.elements,
            n = t.elements,
            i = 1 / g.setFromMatrixColumn(t, 0).length(),
            r = 1 / g.setFromMatrixColumn(t, 1).length(),
            a = 1 / g.setFromMatrixColumn(t, 2).length();
          return (
            (e[0] = n[0] * i),
            (e[1] = n[1] * i),
            (e[2] = n[2] * i),
            (e[3] = 0),
            (e[4] = n[4] * r),
            (e[5] = n[5] * r),
            (e[6] = n[6] * r),
            (e[7] = 0),
            (e[8] = n[8] * a),
            (e[9] = n[9] * a),
            (e[10] = n[10] * a),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            this
          );
        }
        makeRotationFromEuler(t) {
          const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z,
            a = Math.cos(n),
            s = Math.sin(n),
            o = Math.cos(i),
            l = Math.sin(i),
            c = Math.cos(r),
            u = Math.sin(r);
          if ("XYZ" === t.order) {
            const t = a * c,
              n = a * u,
              i = s * c,
              r = s * u;
            (e[0] = o * c),
              (e[4] = -o * u),
              (e[8] = l),
              (e[1] = n + i * l),
              (e[5] = t - r * l),
              (e[9] = -s * o),
              (e[2] = r - t * l),
              (e[6] = i + n * l),
              (e[10] = a * o);
          } else if ("YXZ" === t.order) {
            const t = o * c,
              n = o * u,
              i = l * c,
              r = l * u;
            (e[0] = t + r * s),
              (e[4] = i * s - n),
              (e[8] = a * l),
              (e[1] = a * u),
              (e[5] = a * c),
              (e[9] = -s),
              (e[2] = n * s - i),
              (e[6] = r + t * s),
              (e[10] = a * o);
          } else if ("ZXY" === t.order) {
            const t = o * c,
              n = o * u,
              i = l * c,
              r = l * u;
            (e[0] = t - r * s),
              (e[4] = -a * u),
              (e[8] = i + n * s),
              (e[1] = n + i * s),
              (e[5] = a * c),
              (e[9] = r - t * s),
              (e[2] = -a * l),
              (e[6] = s),
              (e[10] = a * o);
          } else if ("ZYX" === t.order) {
            const t = a * c,
              n = a * u,
              i = s * c,
              r = s * u;
            (e[0] = o * c),
              (e[4] = i * l - n),
              (e[8] = t * l + r),
              (e[1] = o * u),
              (e[5] = r * l + t),
              (e[9] = n * l - i),
              (e[2] = -l),
              (e[6] = s * o),
              (e[10] = a * o);
          } else if ("YZX" === t.order) {
            const t = a * o,
              n = a * l,
              i = s * o,
              r = s * l;
            (e[0] = o * c),
              (e[4] = r - t * u),
              (e[8] = i * u + n),
              (e[1] = u),
              (e[5] = a * c),
              (e[9] = -s * c),
              (e[2] = -l * c),
              (e[6] = n * u + i),
              (e[10] = t - r * u);
          } else if ("XZY" === t.order) {
            const t = a * o,
              n = a * l,
              i = s * o,
              r = s * l;
            (e[0] = o * c),
              (e[4] = -u),
              (e[8] = l * c),
              (e[1] = t * u + r),
              (e[5] = a * c),
              (e[9] = n * u - i),
              (e[2] = i * u - n),
              (e[6] = s * c),
              (e[10] = r * u + t);
          }
          return (
            (e[3] = 0),
            (e[7] = 0),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            this
          );
        }
        makeRotationFromQuaternion(t) {
          return this.compose(v, t, x);
        }
        lookAt(t, e, n) {
          const i = this.elements;
          return (
            y.subVectors(t, e),
            0 === y.lengthSq() && (y.z = 1),
            y.normalize(),
            _x.crossVectors(n, y),
            0 === _x.lengthSq() &&
              (1 === Math.abs(n.z) ? (y.x += 1e-4) : (y.z += 1e-4),
              y.normalize(),
              _x.crossVectors(n, y)),
            _x.normalize(),
            M.crossVectors(y, _x),
            (i[0] = _x.x),
            (i[4] = M.x),
            (i[8] = y.x),
            (i[1] = _x.y),
            (i[5] = M.y),
            (i[9] = y.y),
            (i[2] = _x.z),
            (i[6] = M.z),
            (i[10] = y.z),
            this
          );
        }
        multiply(t) {
          return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
          const n = t.elements,
            i = e.elements,
            r = this.elements,
            a = n[0],
            s = n[4],
            o = n[8],
            l = n[12],
            c = n[1],
            u = n[5],
            h = n[9],
            d = n[13],
            p = n[2],
            f = n[6],
            m = n[10],
            g = n[14],
            _ = n[3],
            v = n[7],
            x = n[11],
            M = n[15],
            y = i[0],
            E = i[4],
            S = i[8],
            b = i[12],
            T = i[1],
            w = i[5],
            A = i[9],
            R = i[13],
            C = i[2],
            L = i[6],
            D = i[10],
            P = i[14],
            I = i[3],
            U = i[7],
            N = i[11],
            O = i[15];
          return (
            (r[0] = a * y + s * T + o * C + l * I),
            (r[4] = a * E + s * w + o * L + l * U),
            (r[8] = a * S + s * A + o * D + l * N),
            (r[12] = a * b + s * R + o * P + l * O),
            (r[1] = c * y + u * T + h * C + d * I),
            (r[5] = c * E + u * w + h * L + d * U),
            (r[9] = c * S + u * A + h * D + d * N),
            (r[13] = c * b + u * R + h * P + d * O),
            (r[2] = p * y + f * T + m * C + g * I),
            (r[6] = p * E + f * w + m * L + g * U),
            (r[10] = p * S + f * A + m * D + g * N),
            (r[14] = p * b + f * R + m * P + g * O),
            (r[3] = _ * y + v * T + x * C + M * I),
            (r[7] = _ * E + v * w + x * L + M * U),
            (r[11] = _ * S + v * A + x * D + M * N),
            (r[15] = _ * b + v * R + x * P + M * O),
            this
          );
        }
        multiplyScalar(t) {
          const e = this.elements;
          return (
            (e[0] *= t),
            (e[4] *= t),
            (e[8] *= t),
            (e[12] *= t),
            (e[1] *= t),
            (e[5] *= t),
            (e[9] *= t),
            (e[13] *= t),
            (e[2] *= t),
            (e[6] *= t),
            (e[10] *= t),
            (e[14] *= t),
            (e[3] *= t),
            (e[7] *= t),
            (e[11] *= t),
            (e[15] *= t),
            this
          );
        }
        determinant() {
          const t = this.elements,
            e = t[0],
            n = t[4],
            i = t[8],
            r = t[12],
            a = t[1],
            s = t[5],
            o = t[9],
            l = t[13],
            c = t[2],
            u = t[6],
            h = t[10],
            d = t[14];
          return (
            t[3] *
              (+r * o * u -
                i * l * u -
                r * s * h +
                n * l * h +
                i * s * d -
                n * o * d) +
            t[7] *
              (+e * o * d -
                e * l * h +
                r * a * h -
                i * a * d +
                i * l * c -
                r * o * c) +
            t[11] *
              (+e * l * u -
                e * s * d -
                r * a * u +
                n * a * d +
                r * s * c -
                n * l * c) +
            t[15] *
              (-i * s * c -
                e * o * u +
                e * s * h +
                i * a * u -
                n * a * h +
                n * o * c)
          );
        }
        transpose() {
          const t = this.elements;
          let e;
          return (
            (e = t[1]),
            (t[1] = t[4]),
            (t[4] = e),
            (e = t[2]),
            (t[2] = t[8]),
            (t[8] = e),
            (e = t[6]),
            (t[6] = t[9]),
            (t[9] = e),
            (e = t[3]),
            (t[3] = t[12]),
            (t[12] = e),
            (e = t[7]),
            (t[7] = t[13]),
            (t[13] = e),
            (e = t[11]),
            (t[11] = t[14]),
            (t[14] = e),
            this
          );
        }
        setPosition(t, e, n) {
          const i = this.elements;
          return (
            t.isVector3
              ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
              : ((i[12] = t), (i[13] = e), (i[14] = n)),
            this
          );
        }
        invert() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            a = t[4],
            s = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            u = t[9],
            h = t[10],
            d = t[11],
            p = t[12],
            f = t[13],
            m = t[14],
            g = t[15],
            _ =
              u * m * l -
              f * h * l +
              f * o * d -
              s * m * d -
              u * o * g +
              s * h * g,
            v =
              p * h * l -
              c * m * l -
              p * o * d +
              a * m * d +
              c * o * g -
              a * h * g,
            x =
              c * f * l -
              p * u * l +
              p * s * d -
              a * f * d -
              c * s * g +
              a * u * g,
            M =
              p * u * o -
              c * f * o -
              p * s * h +
              a * f * h +
              c * s * m -
              a * u * m,
            y = e * _ + n * v + i * x + r * M;
          if (0 === y)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          const E = 1 / y;
          return (
            (t[0] = _ * E),
            (t[1] =
              (f * h * r -
                u * m * r -
                f * i * d +
                n * m * d +
                u * i * g -
                n * h * g) *
              E),
            (t[2] =
              (s * m * r -
                f * o * r +
                f * i * l -
                n * m * l -
                s * i * g +
                n * o * g) *
              E),
            (t[3] =
              (u * o * r -
                s * h * r -
                u * i * l +
                n * h * l +
                s * i * d -
                n * o * d) *
              E),
            (t[4] = v * E),
            (t[5] =
              (c * m * r -
                p * h * r +
                p * i * d -
                e * m * d -
                c * i * g +
                e * h * g) *
              E),
            (t[6] =
              (p * o * r -
                a * m * r -
                p * i * l +
                e * m * l +
                a * i * g -
                e * o * g) *
              E),
            (t[7] =
              (a * h * r -
                c * o * r +
                c * i * l -
                e * h * l -
                a * i * d +
                e * o * d) *
              E),
            (t[8] = x * E),
            (t[9] =
              (p * u * r -
                c * f * r -
                p * n * d +
                e * f * d +
                c * n * g -
                e * u * g) *
              E),
            (t[10] =
              (a * f * r -
                p * s * r +
                p * n * l -
                e * f * l -
                a * n * g +
                e * s * g) *
              E),
            (t[11] =
              (c * s * r -
                a * u * r -
                c * n * l +
                e * u * l +
                a * n * d -
                e * s * d) *
              E),
            (t[12] = M * E),
            (t[13] =
              (c * f * i -
                p * u * i +
                p * n * h -
                e * f * h -
                c * n * m +
                e * u * m) *
              E),
            (t[14] =
              (p * s * i -
                a * f * i -
                p * n * o +
                e * f * o +
                a * n * m -
                e * s * m) *
              E),
            (t[15] =
              (a * u * i -
                c * s * i +
                c * n * o -
                e * u * o -
                a * n * h +
                e * s * h) *
              E),
            this
          );
        }
        scale(t) {
          const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z;
          return (
            (e[0] *= n),
            (e[4] *= i),
            (e[8] *= r),
            (e[1] *= n),
            (e[5] *= i),
            (e[9] *= r),
            (e[2] *= n),
            (e[6] *= i),
            (e[10] *= r),
            (e[3] *= n),
            (e[7] *= i),
            (e[11] *= r),
            this
          );
        }
        getMaxScaleOnAxis() {
          const t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
          return Math.sqrt(Math.max(e, n, i));
        }
        makeTranslation(t, e, n) {
          return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
        }
        makeRotationX(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return (
            this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
          );
        }
        makeRotationY(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return (
            this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
          );
        }
        makeRotationZ(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return (
            this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
          );
        }
        makeRotationAxis(t, e) {
          const n = Math.cos(e),
            i = Math.sin(e),
            r = 1 - n,
            a = t.x,
            s = t.y,
            o = t.z,
            l = r * a,
            c = r * s;
          return (
            this.set(
              l * a + n,
              l * s - i * o,
              l * o + i * s,
              0,
              l * s + i * o,
              c * s + n,
              c * o - i * a,
              0,
              l * o - i * s,
              c * o + i * a,
              r * o * o + n,
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        }
        makeScale(t, e, n) {
          return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
        }
        makeShear(t, e, n, i, r, a) {
          return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t, e, n) {
          const i = this.elements,
            r = e._x,
            a = e._y,
            s = e._z,
            o = e._w,
            l = r + r,
            c = a + a,
            u = s + s,
            h = r * l,
            d = r * c,
            p = r * u,
            f = a * c,
            m = a * u,
            g = s * u,
            _ = o * l,
            v = o * c,
            x = o * u,
            M = n.x,
            y = n.y,
            E = n.z;
          return (
            (i[0] = (1 - (f + g)) * M),
            (i[1] = (d + x) * M),
            (i[2] = (p - v) * M),
            (i[3] = 0),
            (i[4] = (d - x) * y),
            (i[5] = (1 - (h + g)) * y),
            (i[6] = (m + _) * y),
            (i[7] = 0),
            (i[8] = (p + v) * E),
            (i[9] = (m - _) * E),
            (i[10] = (1 - (h + f)) * E),
            (i[11] = 0),
            (i[12] = t.x),
            (i[13] = t.y),
            (i[14] = t.z),
            (i[15] = 1),
            this
          );
        }
        decompose(t, e, n) {
          const i = this.elements;
          let r = g.set(i[0], i[1], i[2]).length();
          const a = g.set(i[4], i[5], i[6]).length(),
            s = g.set(i[8], i[9], i[10]).length();
          this.determinant() < 0 && (r = -r),
            (t.x = i[12]),
            (t.y = i[13]),
            (t.z = i[14]),
            _.copy(this);
          const o = 1 / r,
            l = 1 / a,
            c = 1 / s;
          return (
            (_.elements[0] *= o),
            (_.elements[1] *= o),
            (_.elements[2] *= o),
            (_.elements[4] *= l),
            (_.elements[5] *= l),
            (_.elements[6] *= l),
            (_.elements[8] *= c),
            (_.elements[9] *= c),
            (_.elements[10] *= c),
            e.setFromRotationMatrix(_),
            (n.x = r),
            (n.y = a),
            (n.z = s),
            this
          );
        }
        makePerspective(t, e, n, i, r, a) {
          const s = this.elements,
            o = (2 * r) / (e - t),
            l = (2 * r) / (n - i),
            c = (e + t) / (e - t),
            u = (n + i) / (n - i),
            h = -(a + r) / (a - r),
            d = (-2 * a * r) / (a - r);
          return (
            (s[0] = o),
            (s[4] = 0),
            (s[8] = c),
            (s[12] = 0),
            (s[1] = 0),
            (s[5] = l),
            (s[9] = u),
            (s[13] = 0),
            (s[2] = 0),
            (s[6] = 0),
            (s[10] = h),
            (s[14] = d),
            (s[3] = 0),
            (s[7] = 0),
            (s[11] = -1),
            (s[15] = 0),
            this
          );
        }
        makeOrthographic(t, e, n, i, r, a) {
          const s = this.elements,
            o = 1 / (e - t),
            l = 1 / (n - i),
            c = 1 / (a - r),
            u = (e + t) * o,
            h = (n + i) * l,
            d = (a + r) * c;
          return (
            (s[0] = 2 * o),
            (s[4] = 0),
            (s[8] = 0),
            (s[12] = -u),
            (s[1] = 0),
            (s[5] = 2 * l),
            (s[9] = 0),
            (s[13] = -h),
            (s[2] = 0),
            (s[6] = 0),
            (s[10] = -2 * c),
            (s[14] = -d),
            (s[3] = 0),
            (s[7] = 0),
            (s[11] = 0),
            (s[15] = 1),
            this
          );
        }
        equals(t) {
          const e = this.elements,
            n = t.elements;
          for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
          return !0;
        }
        fromArray(t, e = 0) {
          for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
          return this;
        }
        toArray(t = [], e = 0) {
          const n = this.elements;
          return (
            (t[e] = n[0]),
            (t[e + 1] = n[1]),
            (t[e + 2] = n[2]),
            (t[e + 3] = n[3]),
            (t[e + 4] = n[4]),
            (t[e + 5] = n[5]),
            (t[e + 6] = n[6]),
            (t[e + 7] = n[7]),
            (t[e + 8] = n[8]),
            (t[e + 9] = n[9]),
            (t[e + 10] = n[10]),
            (t[e + 11] = n[11]),
            (t[e + 12] = n[12]),
            (t[e + 13] = n[13]),
            (t[e + 14] = n[14]),
            (t[e + 15] = n[15]),
            t
          );
        }
      }
      const g = new d(),
        _ = new m(),
        v = new d(0, 0, 0),
        x = new d(1, 1, 1),
        _x = new d(),
        M = new d(),
        y = new d();
      class E {
        addEventListener(t, e) {
          void 0 === this._listeners && (this._listeners = {});
          const n = this._listeners;
          void 0 === n[t] && (n[t] = []),
            -1 === n[t].indexOf(e) && n[t].push(e);
        }
        hasEventListener(t, e) {
          if (void 0 === this._listeners) return !1;
          const n = this._listeners;
          return void 0 !== n[t] && -1 !== n[t].indexOf(e);
        }
        removeEventListener(t, e) {
          if (void 0 === this._listeners) return;
          const n = this._listeners[t];
          if (void 0 !== n) {
            const t = n.indexOf(e);
            -1 !== t && n.splice(t, 1);
          }
        }
        dispatchEvent(t) {
          if (void 0 === this._listeners) return;
          const e = this._listeners[t.type];
          if (void 0 !== e) {
            t.target = this;
            const n = e.slice(0);
            for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
            t.target = null;
          }
        }
      }
      const S = new m(),
        b = new h();
      class T {
        constructor(t = 0, e = 0, n = 0, i = T.DefaultOrder) {
          (this.isEuler = !0),
            (this._x = t),
            (this._y = e),
            (this._z = n),
            (this._order = i);
        }
        get x() {
          return this._x;
        }
        set x(t) {
          (this._x = t), this._onChangeCallback();
        }
        get y() {
          return this._y;
        }
        set y(t) {
          (this._y = t), this._onChangeCallback();
        }
        get z() {
          return this._z;
        }
        set z(t) {
          (this._z = t), this._onChangeCallback();
        }
        get order() {
          return this._order;
        }
        set order(t) {
          (this._order = t), this._onChangeCallback();
        }
        set(t, e, n, i = this._order) {
          return (
            (this._x = t),
            (this._y = e),
            (this._z = n),
            (this._order = i),
            this._onChangeCallback(),
            this
          );
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t) {
          return (
            (this._x = t._x),
            (this._y = t._y),
            (this._z = t._z),
            (this._order = t._order),
            this._onChangeCallback(),
            this
          );
        }
        setFromRotationMatrix(t, e = this._order, n = !0) {
          const i = t.elements,
            r = i[0],
            s = i[4],
            o = i[8],
            l = i[1],
            c = i[5],
            u = i[9],
            h = i[2],
            d = i[6],
            p = i[10];
          switch (e) {
            case "XYZ":
              (this._y = Math.asin(a(o, -1, 1))),
                Math.abs(o) < 0.9999999
                  ? ((this._x = Math.atan2(-u, p)),
                    (this._z = Math.atan2(-s, r)))
                  : ((this._x = Math.atan2(d, c)), (this._z = 0));
              break;
            case "YXZ":
              (this._x = Math.asin(-a(u, -1, 1))),
                Math.abs(u) < 0.9999999
                  ? ((this._y = Math.atan2(o, p)), (this._z = Math.atan2(l, c)))
                  : ((this._y = Math.atan2(-h, r)), (this._z = 0));
              break;
            case "ZXY":
              (this._x = Math.asin(a(d, -1, 1))),
                Math.abs(d) < 0.9999999
                  ? ((this._y = Math.atan2(-h, p)),
                    (this._z = Math.atan2(-s, c)))
                  : ((this._y = 0), (this._z = Math.atan2(l, r)));
              break;
            case "ZYX":
              (this._y = Math.asin(-a(h, -1, 1))),
                Math.abs(h) < 0.9999999
                  ? ((this._x = Math.atan2(d, p)), (this._z = Math.atan2(l, r)))
                  : ((this._x = 0), (this._z = Math.atan2(-s, c)));
              break;
            case "YZX":
              (this._z = Math.asin(a(l, -1, 1))),
                Math.abs(l) < 0.9999999
                  ? ((this._x = Math.atan2(-u, c)),
                    (this._y = Math.atan2(-h, r)))
                  : ((this._x = 0), (this._y = Math.atan2(o, p)));
              break;
            case "XZY":
              (this._z = Math.asin(-a(s, -1, 1))),
                Math.abs(s) < 0.9999999
                  ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(o, r)))
                  : ((this._x = Math.atan2(-u, p)), (this._y = 0));
              break;
            default:
              console.warn(
                "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
                  e
              );
          }
          return (this._order = e), !0 === n && this._onChangeCallback(), this;
        }
        setFromQuaternion(t, e, n) {
          return (
            S.makeRotationFromQuaternion(t), this.setFromRotationMatrix(S, e, n)
          );
        }
        setFromVector3(t, e = this._order) {
          return this.set(t.x, t.y, t.z, e);
        }
        reorder(t) {
          return b.setFromEuler(this), this.setFromQuaternion(b, t);
        }
        equals(t) {
          return (
            t._x === this._x &&
            t._y === this._y &&
            t._z === this._z &&
            t._order === this._order
          );
        }
        fromArray(t) {
          return (
            (this._x = t[0]),
            (this._y = t[1]),
            (this._z = t[2]),
            void 0 !== t[3] && (this._order = t[3]),
            this._onChangeCallback(),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this._x),
            (t[e + 1] = this._y),
            (t[e + 2] = this._z),
            (t[e + 3] = this._order),
            t
          );
        }
        _onChange(t) {
          return (this._onChangeCallback = t), this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
          yield this._x, yield this._y, yield this._z, yield this._order;
        }
        toVector3() {
          console.error(
            "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
          );
        }
      }
      (T.DefaultOrder = "XYZ"),
        (T.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]);
      class w {
        constructor() {
          this.mask = 1;
        }
        set(t) {
          this.mask = ((1 << t) | 0) >>> 0;
        }
        enable(t) {
          this.mask |= (1 << t) | 0;
        }
        enableAll() {
          this.mask = -1;
        }
        toggle(t) {
          this.mask ^= (1 << t) | 0;
        }
        disable(t) {
          this.mask &= ~((1 << t) | 0);
        }
        disableAll() {
          this.mask = 0;
        }
        test(t) {
          return 0 != (this.mask & t.mask);
        }
        isEnabled(t) {
          return 0 != (this.mask & ((1 << t) | 0));
        }
      }
      class A {
        constructor() {
          (A.prototype.isMatrix3 = !0),
            (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
        }
        set(t, e, n, i, r, a, s, o, l) {
          const c = this.elements;
          return (
            (c[0] = t),
            (c[1] = i),
            (c[2] = s),
            (c[3] = e),
            (c[4] = r),
            (c[5] = o),
            (c[6] = n),
            (c[7] = a),
            (c[8] = l),
            this
          );
        }
        identity() {
          return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t) {
          const e = this.elements,
            n = t.elements;
          return (
            (e[0] = n[0]),
            (e[1] = n[1]),
            (e[2] = n[2]),
            (e[3] = n[3]),
            (e[4] = n[4]),
            (e[5] = n[5]),
            (e[6] = n[6]),
            (e[7] = n[7]),
            (e[8] = n[8]),
            this
          );
        }
        extractBasis(t, e, n) {
          return (
            t.setFromMatrix3Column(this, 0),
            e.setFromMatrix3Column(this, 1),
            n.setFromMatrix3Column(this, 2),
            this
          );
        }
        setFromMatrix4(t) {
          const e = t.elements;
          return (
            this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
          );
        }
        multiply(t) {
          return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
          const n = t.elements,
            i = e.elements,
            r = this.elements,
            a = n[0],
            s = n[3],
            o = n[6],
            l = n[1],
            c = n[4],
            u = n[7],
            h = n[2],
            d = n[5],
            p = n[8],
            f = i[0],
            m = i[3],
            g = i[6],
            _ = i[1],
            v = i[4],
            x = i[7],
            M = i[2],
            y = i[5],
            E = i[8];
          return (
            (r[0] = a * f + s * _ + o * M),
            (r[3] = a * m + s * v + o * y),
            (r[6] = a * g + s * x + o * E),
            (r[1] = l * f + c * _ + u * M),
            (r[4] = l * m + c * v + u * y),
            (r[7] = l * g + c * x + u * E),
            (r[2] = h * f + d * _ + p * M),
            (r[5] = h * m + d * v + p * y),
            (r[8] = h * g + d * x + p * E),
            this
          );
        }
        multiplyScalar(t) {
          const e = this.elements;
          return (
            (e[0] *= t),
            (e[3] *= t),
            (e[6] *= t),
            (e[1] *= t),
            (e[4] *= t),
            (e[7] *= t),
            (e[2] *= t),
            (e[5] *= t),
            (e[8] *= t),
            this
          );
        }
        determinant() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            a = t[4],
            s = t[5],
            o = t[6],
            l = t[7],
            c = t[8];
          return (
            e * a * c -
            e * s * l -
            n * r * c +
            n * s * o +
            i * r * l -
            i * a * o
          );
        }
        invert() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            a = t[4],
            s = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            u = c * a - s * l,
            h = s * o - c * r,
            d = l * r - a * o,
            p = e * u + n * h + i * d;
          if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
          const f = 1 / p;
          return (
            (t[0] = u * f),
            (t[1] = (i * l - c * n) * f),
            (t[2] = (s * n - i * a) * f),
            (t[3] = h * f),
            (t[4] = (c * e - i * o) * f),
            (t[5] = (i * r - s * e) * f),
            (t[6] = d * f),
            (t[7] = (n * o - l * e) * f),
            (t[8] = (a * e - n * r) * f),
            this
          );
        }
        transpose() {
          let t;
          const e = this.elements;
          return (
            (t = e[1]),
            (e[1] = e[3]),
            (e[3] = t),
            (t = e[2]),
            (e[2] = e[6]),
            (e[6] = t),
            (t = e[5]),
            (e[5] = e[7]),
            (e[7] = t),
            this
          );
        }
        getNormalMatrix(t) {
          return this.setFromMatrix4(t).invert().transpose();
        }
        transposeIntoArray(t) {
          const e = this.elements;
          return (
            (t[0] = e[0]),
            (t[1] = e[3]),
            (t[2] = e[6]),
            (t[3] = e[1]),
            (t[4] = e[4]),
            (t[5] = e[7]),
            (t[6] = e[2]),
            (t[7] = e[5]),
            (t[8] = e[8]),
            this
          );
        }
        setUvTransform(t, e, n, i, r, a, s) {
          const o = Math.cos(r),
            l = Math.sin(r);
          return (
            this.set(
              n * o,
              n * l,
              -n * (o * a + l * s) + a + t,
              -i * l,
              i * o,
              -i * (-l * a + o * s) + s + e,
              0,
              0,
              1
            ),
            this
          );
        }
        scale(t, e) {
          const n = this.elements;
          return (
            (n[0] *= t),
            (n[3] *= t),
            (n[6] *= t),
            (n[1] *= e),
            (n[4] *= e),
            (n[7] *= e),
            this
          );
        }
        rotate(t) {
          const e = Math.cos(t),
            n = Math.sin(t),
            i = this.elements,
            r = i[0],
            a = i[3],
            s = i[6],
            o = i[1],
            l = i[4],
            c = i[7];
          return (
            (i[0] = e * r + n * o),
            (i[3] = e * a + n * l),
            (i[6] = e * s + n * c),
            (i[1] = -n * r + e * o),
            (i[4] = -n * a + e * l),
            (i[7] = -n * s + e * c),
            this
          );
        }
        translate(t, e) {
          const n = this.elements;
          return (
            (n[0] += t * n[2]),
            (n[3] += t * n[5]),
            (n[6] += t * n[8]),
            (n[1] += e * n[2]),
            (n[4] += e * n[5]),
            (n[7] += e * n[8]),
            this
          );
        }
        equals(t) {
          const e = this.elements,
            n = t.elements;
          for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
          return !0;
        }
        fromArray(t, e = 0) {
          for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
          return this;
        }
        toArray(t = [], e = 0) {
          const n = this.elements;
          return (
            (t[e] = n[0]),
            (t[e + 1] = n[1]),
            (t[e + 2] = n[2]),
            (t[e + 3] = n[3]),
            (t[e + 4] = n[4]),
            (t[e + 5] = n[5]),
            (t[e + 6] = n[6]),
            (t[e + 7] = n[7]),
            (t[e + 8] = n[8]),
            t
          );
        }
        clone() {
          return new this.constructor().fromArray(this.elements);
        }
      }
      let R = 0;
      const C = new d(),
        L = new h(),
        D = new m(),
        P = new d(),
        I = new d(),
        U = new d(),
        N = new h(),
        O = new d(1, 0, 0),
        F = new d(0, 1, 0),
        z = new d(0, 0, 1),
        B = { type: "added" },
        G = { type: "removed" };
      class H extends E {
        constructor() {
          super(),
            (this.isObject3D = !0),
            Object.defineProperty(this, "id", { value: R++ }),
            (this.uuid = r()),
            (this.name = ""),
            (this.type = "Object3D"),
            (this.parent = null),
            (this.children = []),
            (this.up = H.DefaultUp.clone());
          const t = new d(),
            e = new T(),
            n = new h(),
            i = new d(1, 1, 1);
          e._onChange(function () {
            n.setFromEuler(e, !1);
          }),
            n._onChange(function () {
              e.setFromQuaternion(n, void 0, !1);
            }),
            Object.defineProperties(this, {
              position: { configurable: !0, enumerable: !0, value: t },
              rotation: { configurable: !0, enumerable: !0, value: e },
              quaternion: { configurable: !0, enumerable: !0, value: n },
              scale: { configurable: !0, enumerable: !0, value: i },
              modelViewMatrix: { value: new m() },
              normalMatrix: { value: new A() },
            }),
            (this.matrix = new m()),
            (this.matrixWorld = new m()),
            (this.matrixAutoUpdate = H.DefaultMatrixAutoUpdate),
            (this.matrixWorldNeedsUpdate = !1),
            (this.matrixWorldAutoUpdate = H.DefaultMatrixWorldAutoUpdate),
            (this.layers = new w()),
            (this.visible = !0),
            (this.castShadow = !1),
            (this.receiveShadow = !1),
            (this.frustumCulled = !0),
            (this.renderOrder = 0),
            (this.animations = []),
            (this.userData = {});
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t) {
          this.matrixAutoUpdate && this.updateMatrix(),
            this.matrix.premultiply(t),
            this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t) {
          return this.quaternion.premultiply(t), this;
        }
        setRotationFromAxisAngle(t, e) {
          this.quaternion.setFromAxisAngle(t, e);
        }
        setRotationFromEuler(t) {
          this.quaternion.setFromEuler(t, !0);
        }
        setRotationFromMatrix(t) {
          this.quaternion.setFromRotationMatrix(t);
        }
        setRotationFromQuaternion(t) {
          this.quaternion.copy(t);
        }
        rotateOnAxis(t, e) {
          return L.setFromAxisAngle(t, e), this.quaternion.multiply(L), this;
        }
        rotateOnWorldAxis(t, e) {
          return L.setFromAxisAngle(t, e), this.quaternion.premultiply(L), this;
        }
        rotateX(t) {
          return this.rotateOnAxis(O, t);
        }
        rotateY(t) {
          return this.rotateOnAxis(F, t);
        }
        rotateZ(t) {
          return this.rotateOnAxis(z, t);
        }
        translateOnAxis(t, e) {
          return (
            C.copy(t).applyQuaternion(this.quaternion),
            this.position.add(C.multiplyScalar(e)),
            this
          );
        }
        translateX(t) {
          return this.translateOnAxis(O, t);
        }
        translateY(t) {
          return this.translateOnAxis(F, t);
        }
        translateZ(t) {
          return this.translateOnAxis(z, t);
        }
        localToWorld(t) {
          return t.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t) {
          return t.applyMatrix4(D.copy(this.matrixWorld).invert());
        }
        lookAt(t, e, n) {
          t.isVector3 ? P.copy(t) : P.set(t, e, n);
          const i = this.parent;
          this.updateWorldMatrix(!0, !1),
            I.setFromMatrixPosition(this.matrixWorld),
            this.isCamera || this.isLight
              ? D.lookAt(I, P, this.up)
              : D.lookAt(P, I, this.up),
            this.quaternion.setFromRotationMatrix(D),
            i &&
              (D.extractRotation(i.matrixWorld),
              L.setFromRotationMatrix(D),
              this.quaternion.premultiply(L.invert()));
        }
        add(t) {
          if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this;
          }
          return t === this
            ? (console.error(
                "THREE.Object3D.add: object can't be added as a child of itself.",
                t
              ),
              this)
            : (t && t.isObject3D
                ? (null !== t.parent && t.parent.remove(t),
                  (t.parent = this),
                  this.children.push(t),
                  t.dispatchEvent(B))
                : console.error(
                    "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                    t
                  ),
              this);
        }
        remove(t) {
          if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++)
              this.remove(arguments[t]);
            return this;
          }
          const e = this.children.indexOf(t);
          return (
            -1 !== e &&
              ((t.parent = null),
              this.children.splice(e, 1),
              t.dispatchEvent(G)),
            this
          );
        }
        removeFromParent() {
          const t = this.parent;
          return null !== t && t.remove(this), this;
        }
        clear() {
          for (let t = 0; t < this.children.length; t++) {
            const e = this.children[t];
            (e.parent = null), e.dispatchEvent(G);
          }
          return (this.children.length = 0), this;
        }
        attach(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            D.copy(this.matrixWorld).invert(),
            null !== t.parent &&
              (t.parent.updateWorldMatrix(!0, !1),
              D.multiply(t.parent.matrixWorld)),
            t.applyMatrix4(D),
            this.add(t),
            t.updateWorldMatrix(!1, !0),
            this
          );
        }
        getObjectById(t) {
          return this.getObjectByProperty("id", t);
        }
        getObjectByName(t) {
          return this.getObjectByProperty("name", t);
        }
        getObjectByProperty(t, e) {
          if (this[t] === e) return this;
          for (let n = 0, i = this.children.length; n < i; n++) {
            const i = this.children[n].getObjectByProperty(t, e);
            if (void 0 !== i) return i;
          }
        }
        getWorldPosition(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            t.setFromMatrixPosition(this.matrixWorld)
          );
        }
        getWorldQuaternion(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(I, t, U),
            t
          );
        }
        getWorldScale(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(I, N, t),
            t
          );
        }
        getWorldDirection(t) {
          this.updateWorldMatrix(!0, !1);
          const e = this.matrixWorld.elements;
          return t.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t) {
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
        }
        traverseVisible(t) {
          if (!1 === this.visible) return;
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
        }
        traverseAncestors(t) {
          const e = this.parent;
          null !== e && (t(e), e.traverseAncestors(t));
        }
        updateMatrix() {
          this.matrix.compose(this.position, this.quaternion, this.scale),
            (this.matrixWorldNeedsUpdate = !0);
        }
        updateMatrixWorld(t) {
          this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || t) &&
              (null === this.parent
                ? this.matrixWorld.copy(this.matrix)
                : this.matrixWorld.multiplyMatrices(
                    this.parent.matrixWorld,
                    this.matrix
                  ),
              (this.matrixWorldNeedsUpdate = !1),
              (t = !0));
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) {
            const i = e[n];
            (!0 !== i.matrixWorldAutoUpdate && !0 !== t) ||
              i.updateMatrixWorld(t);
          }
        }
        updateWorldMatrix(t, e) {
          const n = this.parent;
          if (
            (!0 === t &&
              null !== n &&
              !0 === n.matrixWorldAutoUpdate &&
              n.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate && this.updateMatrix(),
            null === this.parent
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix
                ),
            !0 === e)
          ) {
            const t = this.children;
            for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e];
              !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0);
            }
          }
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t,
            n = {};
          e &&
            ((t = {
              geometries: {},
              materials: {},
              textures: {},
              images: {},
              shapes: {},
              skeletons: {},
              animations: {},
              nodes: {},
            }),
            (n.metadata = {
              version: 4.5,
              type: "Object",
              generator: "Object3D.toJSON",
            }));
          const i = {};
          function r(e, n) {
            return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
          }
          if (
            ((i.uuid = this.uuid),
            (i.type = this.type),
            "" !== this.name && (i.name = this.name),
            !0 === this.castShadow && (i.castShadow = !0),
            !0 === this.receiveShadow && (i.receiveShadow = !0),
            !1 === this.visible && (i.visible = !1),
            !1 === this.frustumCulled && (i.frustumCulled = !1),
            0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
            "{}" !== JSON.stringify(this.userData) &&
              (i.userData = this.userData),
            (i.layers = this.layers.mask),
            (i.matrix = this.matrix.toArray()),
            !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
            this.isInstancedMesh &&
              ((i.type = "InstancedMesh"),
              (i.count = this.count),
              (i.instanceMatrix = this.instanceMatrix.toJSON()),
              null !== this.instanceColor &&
                (i.instanceColor = this.instanceColor.toJSON())),
            this.isScene)
          )
            this.background &&
              (this.background.isColor
                ? (i.background = this.background.toJSON())
                : this.background.isTexture &&
                  (i.background = this.background.toJSON(t).uuid)),
              this.environment &&
                this.environment.isTexture &&
                !0 !== this.environment.isRenderTargetTexture &&
                (i.environment = this.environment.toJSON(t).uuid);
          else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = r(t.geometries, this.geometry);
            const e = this.geometry.parameters;
            if (void 0 !== e && void 0 !== e.shapes) {
              const n = e.shapes;
              if (Array.isArray(n))
                for (let e = 0, i = n.length; e < i; e++) {
                  const i = n[e];
                  r(t.shapes, i);
                }
              else r(t.shapes, n);
            }
          }
          if (
            (this.isSkinnedMesh &&
              ((i.bindMode = this.bindMode),
              (i.bindMatrix = this.bindMatrix.toArray()),
              void 0 !== this.skeleton &&
                (r(t.skeletons, this.skeleton),
                (i.skeleton = this.skeleton.uuid))),
            void 0 !== this.material)
          )
            if (Array.isArray(this.material)) {
              const e = [];
              for (let n = 0, i = this.material.length; n < i; n++)
                e.push(r(t.materials, this.material[n]));
              i.material = e;
            } else i.material = r(t.materials, this.material);
          if (this.children.length > 0) {
            i.children = [];
            for (let e = 0; e < this.children.length; e++)
              i.children.push(this.children[e].toJSON(t).object);
          }
          if (this.animations.length > 0) {
            i.animations = [];
            for (let e = 0; e < this.animations.length; e++) {
              const n = this.animations[e];
              i.animations.push(r(t.animations, n));
            }
          }
          if (e) {
            const e = a(t.geometries),
              i = a(t.materials),
              r = a(t.textures),
              s = a(t.images),
              o = a(t.shapes),
              l = a(t.skeletons),
              c = a(t.animations),
              u = a(t.nodes);
            e.length > 0 && (n.geometries = e),
              i.length > 0 && (n.materials = i),
              r.length > 0 && (n.textures = r),
              s.length > 0 && (n.images = s),
              o.length > 0 && (n.shapes = o),
              l.length > 0 && (n.skeletons = l),
              c.length > 0 && (n.animations = c),
              u.length > 0 && (n.nodes = u);
          }
          return (n.object = i), n;
          function a(t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              delete i.metadata, e.push(i);
            }
            return e;
          }
        }
        clone(t) {
          return new this.constructor().copy(this, t);
        }
        copy(t, e = !0) {
          if (
            ((this.name = t.name),
            this.up.copy(t.up),
            this.position.copy(t.position),
            (this.rotation.order = t.rotation.order),
            this.quaternion.copy(t.quaternion),
            this.scale.copy(t.scale),
            this.matrix.copy(t.matrix),
            this.matrixWorld.copy(t.matrixWorld),
            (this.matrixAutoUpdate = t.matrixAutoUpdate),
            (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
            (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
            (this.layers.mask = t.layers.mask),
            (this.visible = t.visible),
            (this.castShadow = t.castShadow),
            (this.receiveShadow = t.receiveShadow),
            (this.frustumCulled = t.frustumCulled),
            (this.renderOrder = t.renderOrder),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            !0 === e)
          )
            for (let e = 0; e < t.children.length; e++) {
              const n = t.children[e];
              this.add(n.clone());
            }
          return this;
        }
      }
      (H.DefaultUp = new d(0, 1, 0)),
        (H.DefaultMatrixAutoUpdate = !0),
        (H.DefaultMatrixWorldAutoUpdate = !0);
      class V extends H {
        constructor() {
          super(),
            (this.isCamera = !0),
            (this.type = "Camera"),
            (this.matrixWorldInverse = new m()),
            (this.projectionMatrix = new m()),
            (this.projectionMatrixInverse = new m());
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            this.matrixWorldInverse.copy(t.matrixWorldInverse),
            this.projectionMatrix.copy(t.projectionMatrix),
            this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
            this
          );
        }
        getWorldDirection(t) {
          this.updateWorldMatrix(!0, !1);
          const e = this.matrixWorld.elements;
          return t.set(-e[8], -e[9], -e[10]).normalize();
        }
        updateMatrixWorld(t) {
          super.updateMatrixWorld(t),
            this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(t, e) {
          super.updateWorldMatrix(t, e),
            this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      class k extends V {
        constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
          super(),
            (this.isPerspectiveCamera = !0),
            (this.type = "PerspectiveCamera"),
            (this.fov = t),
            (this.zoom = 1),
            (this.near = n),
            (this.far = i),
            (this.focus = 10),
            (this.aspect = e),
            (this.view = null),
            (this.filmGauge = 35),
            (this.filmOffset = 0),
            this.updateProjectionMatrix();
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            (this.fov = t.fov),
            (this.zoom = t.zoom),
            (this.near = t.near),
            (this.far = t.far),
            (this.focus = t.focus),
            (this.aspect = t.aspect),
            (this.view = null === t.view ? null : Object.assign({}, t.view)),
            (this.filmGauge = t.filmGauge),
            (this.filmOffset = t.filmOffset),
            this
          );
        }
        setFocalLength(t) {
          const e = (0.5 * this.getFilmHeight()) / t;
          (this.fov = 2 * i * Math.atan(e)), this.updateProjectionMatrix();
        }
        getFocalLength() {
          const t = Math.tan(0.5 * e * this.fov);
          return (0.5 * this.getFilmHeight()) / t;
        }
        getEffectiveFOV() {
          return 2 * i * Math.atan(Math.tan(0.5 * e * this.fov) / this.zoom);
        }
        getFilmWidth() {
          return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
          return this.filmGauge / Math.max(this.aspect, 1);
        }
        setViewOffset(t, e, n, i, r, a) {
          (this.aspect = t / e),
            null === this.view &&
              (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1,
              }),
            (this.view.enabled = !0),
            (this.view.fullWidth = t),
            (this.view.fullHeight = e),
            (this.view.offsetX = n),
            (this.view.offsetY = i),
            (this.view.width = r),
            (this.view.height = a),
            this.updateProjectionMatrix();
        }
        clearViewOffset() {
          null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
          const t = this.near;
          let n = (t * Math.tan(0.5 * e * this.fov)) / this.zoom,
            i = 2 * n,
            r = this.aspect * i,
            a = -0.5 * r;
          const s = this.view;
          if (null !== this.view && this.view.enabled) {
            const t = s.fullWidth,
              e = s.fullHeight;
            (a += (s.offsetX * r) / t),
              (n -= (s.offsetY * i) / e),
              (r *= s.width / t),
              (i *= s.height / e);
          }
          const o = this.filmOffset;
          0 !== o && (a += (t * o) / this.getFilmWidth()),
            this.projectionMatrix.makePerspective(
              a,
              a + r,
              n,
              n - i,
              t,
              this.far
            ),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return (
            (e.object.fov = this.fov),
            (e.object.zoom = this.zoom),
            (e.object.near = this.near),
            (e.object.far = this.far),
            (e.object.focus = this.focus),
            (e.object.aspect = this.aspect),
            null !== this.view &&
              (e.object.view = Object.assign({}, this.view)),
            (e.object.filmGauge = this.filmGauge),
            (e.object.filmOffset = this.filmOffset),
            e
          );
        }
      }
      class W {
        constructor(t = 0, e = 0) {
          (W.prototype.isVector2 = !0), (this.x = t), (this.y = e);
        }
        get width() {
          return this.x;
        }
        set width(t) {
          this.x = t;
        }
        get height() {
          return this.y;
        }
        set height(t) {
          this.y = t;
        }
        set(t, e) {
          return (this.x = t), (this.y = e), this;
        }
        setScalar(t) {
          return (this.x = t), (this.y = t), this;
        }
        setX(t) {
          return (this.x = t), this;
        }
        setY(t) {
          return (this.y = t), this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            default:
              throw new Error("index is out of range: " + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y);
        }
        copy(t) {
          return (this.x = t.x), (this.y = t.y), this;
        }
        add(t) {
          return (this.x += t.x), (this.y += t.y), this;
        }
        addScalar(t) {
          return (this.x += t), (this.y += t), this;
        }
        addVectors(t, e) {
          return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
        }
        addScaledVector(t, e) {
          return (this.x += t.x * e), (this.y += t.y * e), this;
        }
        sub(t) {
          return (this.x -= t.x), (this.y -= t.y), this;
        }
        subScalar(t) {
          return (this.x -= t), (this.y -= t), this;
        }
        subVectors(t, e) {
          return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
        }
        multiply(t) {
          return (this.x *= t.x), (this.y *= t.y), this;
        }
        multiplyScalar(t) {
          return (this.x *= t), (this.y *= t), this;
        }
        divide(t) {
          return (this.x /= t.x), (this.y /= t.y), this;
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        applyMatrix3(t) {
          const e = this.x,
            n = this.y,
            i = t.elements;
          return (
            (this.x = i[0] * e + i[3] * n + i[6]),
            (this.y = i[1] * e + i[4] * n + i[7]),
            this
          );
        }
        min(t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            this
          );
        }
        max(t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            this
          );
        }
        clamp(t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            this
          );
        }
        clampScalar(t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            this
          );
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(t, Math.min(e, n))
          );
        }
        floor() {
          return (
            (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
          );
        }
        ceil() {
          return (
            (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
          );
        }
        round() {
          return (
            (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
          );
        }
        roundToZero() {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            this
          );
        }
        negate() {
          return (this.x = -this.x), (this.y = -this.y), this;
        }
        dot(t) {
          return this.x * t.x + this.y * t.y;
        }
        cross(t) {
          return this.x * t.y - this.y * t.x;
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y;
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        angle() {
          return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
          const e = this.x - t.x,
            n = this.y - t.y;
          return e * e + n * n;
        }
        manhattanDistanceTo(t) {
          return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return (
            (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
          );
        }
        lerpVectors(t, e, n) {
          return (
            (this.x = t.x + (e.x - t.x) * n),
            (this.y = t.y + (e.y - t.y) * n),
            this
          );
        }
        equals(t) {
          return t.x === this.x && t.y === this.y;
        }
        fromArray(t, e = 0) {
          return (this.x = t[e]), (this.y = t[e + 1]), this;
        }
        toArray(t = [], e = 0) {
          return (t[e] = this.x), (t[e + 1] = this.y), t;
        }
        fromBufferAttribute(t, e) {
          return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
        }
        rotateAround(t, e) {
          const n = Math.cos(e),
            i = Math.sin(e),
            r = this.x - t.x,
            a = this.y - t.y;
          return (
            (this.x = r * n - a * i + t.x), (this.y = r * i + a * n + t.y), this
          );
        }
        random() {
          return (this.x = Math.random()), (this.y = Math.random()), this;
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y;
        }
      }
      class X {
        constructor(
          t = new d(1 / 0, 1 / 0, 1 / 0),
          e = new d(-1 / 0, -1 / 0, -1 / 0)
        ) {
          (this.isBox3 = !0), (this.min = t), (this.max = e);
        }
        set(t, e) {
          return this.min.copy(t), this.max.copy(e), this;
        }
        setFromArray(t) {
          let e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            a = -1 / 0,
            s = -1 / 0;
          for (let o = 0, l = t.length; o < l; o += 3) {
            const l = t[o],
              c = t[o + 1],
              u = t[o + 2];
            l < e && (e = l),
              c < n && (n = c),
              u < i && (i = u),
              l > r && (r = l),
              c > a && (a = c),
              u > s && (s = u);
          }
          return this.min.set(e, n, i), this.max.set(r, a, s), this;
        }
        setFromBufferAttribute(t) {
          let e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            a = -1 / 0,
            s = -1 / 0;
          for (let o = 0, l = t.count; o < l; o++) {
            const l = t.getX(o),
              c = t.getY(o),
              u = t.getZ(o);
            l < e && (e = l),
              c < n && (n = c),
              u < i && (i = u),
              l > r && (r = l),
              c > a && (a = c),
              u > s && (s = u);
          }
          return this.min.set(e, n, i), this.max.set(r, a, s), this;
        }
        setFromPoints(t) {
          this.makeEmpty();
          for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
          return this;
        }
        setFromCenterAndSize(t, e) {
          const n = j.copy(e).multiplyScalar(0.5);
          return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        setFromObject(t, e = !1) {
          return this.makeEmpty(), this.expandByObject(t, e);
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
          return (
            (this.min.x = this.min.y = this.min.z = 1 / 0),
            (this.max.x = this.max.y = this.max.z = -1 / 0),
            this
          );
        }
        isEmpty() {
          return (
            this.max.x < this.min.x ||
            this.max.y < this.min.y ||
            this.max.z < this.min.z
          );
        }
        getCenter(t) {
          return this.isEmpty()
            ? t.set(0, 0, 0)
            : t.addVectors(this.min, this.max).multiplyScalar(0.5);
        }
        getSize(t) {
          return this.isEmpty()
            ? t.set(0, 0, 0)
            : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
          return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
          return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        expandByObject(t, e = !1) {
          t.updateWorldMatrix(!1, !1);
          const n = t.geometry;
          if (void 0 !== n)
            if (e && null != n.attributes && void 0 !== n.attributes.position) {
              const e = n.attributes.position;
              for (let n = 0, i = e.count; n < i; n++)
                j.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld),
                  this.expandByPoint(j);
            } else
              null === n.boundingBox && n.computeBoundingBox(),
                Y.copy(n.boundingBox),
                Y.applyMatrix4(t.matrixWorld),
                this.union(Y);
          const i = t.children;
          for (let t = 0, n = i.length; t < n; t++)
            this.expandByObject(i[t], e);
          return this;
        }
        containsPoint(t) {
          return !(
            t.x < this.min.x ||
            t.x > this.max.x ||
            t.y < this.min.y ||
            t.y > this.max.y ||
            t.z < this.min.z ||
            t.z > this.max.z
          );
        }
        containsBox(t) {
          return (
            this.min.x <= t.min.x &&
            t.max.x <= this.max.x &&
            this.min.y <= t.min.y &&
            t.max.y <= this.max.y &&
            this.min.z <= t.min.z &&
            t.max.z <= this.max.z
          );
        }
        getParameter(t, e) {
          return e.set(
            (t.x - this.min.x) / (this.max.x - this.min.x),
            (t.y - this.min.y) / (this.max.y - this.min.y),
            (t.z - this.min.z) / (this.max.z - this.min.z)
          );
        }
        intersectsBox(t) {
          return !(
            t.max.x < this.min.x ||
            t.min.x > this.max.x ||
            t.max.y < this.min.y ||
            t.min.y > this.max.y ||
            t.max.z < this.min.z ||
            t.min.z > this.max.z
          );
        }
        intersectsSphere(t) {
          return (
            this.clampPoint(t.center, j),
            j.distanceToSquared(t.center) <= t.radius * t.radius
          );
        }
        intersectsPlane(t) {
          let e, n;
          return (
            t.normal.x > 0
              ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
              : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
            t.normal.y > 0
              ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
              : ((e += t.normal.y * this.max.y),
                (n += t.normal.y * this.min.y)),
            t.normal.z > 0
              ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
              : ((e += t.normal.z * this.max.z),
                (n += t.normal.z * this.min.z)),
            e <= -t.constant && n >= -t.constant
          );
        }
        intersectsTriangle(t) {
          if (this.isEmpty()) return !1;
          this.getCenter(et),
            nt.subVectors(this.max, et),
            Z.subVectors(t.a, et),
            K.subVectors(t.b, et),
            J.subVectors(t.c, et),
            Q.subVectors(K, Z),
            $.subVectors(J, K),
            tt.subVectors(Z, J);
          let e = [
            0,
            -Q.z,
            Q.y,
            0,
            -$.z,
            $.y,
            0,
            -tt.z,
            tt.y,
            Q.z,
            0,
            -Q.x,
            $.z,
            0,
            -$.x,
            tt.z,
            0,
            -tt.x,
            -Q.y,
            Q.x,
            0,
            -$.y,
            $.x,
            0,
            -tt.y,
            tt.x,
            0,
          ];
          return (
            !!at(e, Z, K, J, nt) &&
            ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
            !!at(e, Z, K, J, nt) &&
              (it.crossVectors(Q, $),
              (e = [it.x, it.y, it.z]),
              at(e, Z, K, J, nt)))
          );
        }
        clampPoint(t, e) {
          return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
          return j.copy(t).clamp(this.min, this.max).sub(t).length();
        }
        getBoundingSphere(t) {
          return (
            this.getCenter(t.center),
            (t.radius = 0.5 * this.getSize(j).length()),
            t
          );
        }
        intersect(t) {
          return (
            this.min.max(t.min),
            this.max.min(t.max),
            this.isEmpty() && this.makeEmpty(),
            this
          );
        }
        union(t) {
          return this.min.min(t.min), this.max.max(t.max), this;
        }
        applyMatrix4(t) {
          return (
            this.isEmpty() ||
              (q[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
              q[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
              q[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
              q[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
              q[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
              q[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
              q[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
              q[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
              this.setFromPoints(q)),
            this
          );
        }
        translate(t) {
          return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
          return t.min.equals(this.min) && t.max.equals(this.max);
        }
      }
      const q = [
          new d(),
          new d(),
          new d(),
          new d(),
          new d(),
          new d(),
          new d(),
          new d(),
        ],
        j = new d(),
        Y = new X(),
        Z = new d(),
        K = new d(),
        J = new d(),
        Q = new d(),
        $ = new d(),
        tt = new d(),
        et = new d(),
        nt = new d(),
        it = new d(),
        rt = new d();
      function at(t, e, n, i, r) {
        for (let a = 0, s = t.length - 3; a <= s; a += 3) {
          rt.fromArray(t, a);
          const s =
              r.x * Math.abs(rt.x) +
              r.y * Math.abs(rt.y) +
              r.z * Math.abs(rt.z),
            o = e.dot(rt),
            l = n.dot(rt),
            c = i.dot(rt);
          if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1;
        }
        return !0;
      }
      const st = 100,
        ot = 301,
        lt = 302,
        ct = 306,
        ut = 1e3,
        ht = 1001,
        dt = 1002,
        pt = 1003,
        ft = 1006,
        mt = 1008,
        gt = 1009,
        _t = 1014,
        vt = 1015,
        xt = 1016,
        Mt = 1020,
        yt = 1023,
        Et = 1026,
        St = 1027,
        bt = 33776,
        Tt = 33777,
        wt = 33778,
        At = 33779,
        Rt = 3e3,
        Ct = 3001,
        Lt = "srgb",
        Dt = "srgb-linear",
        Pt = 7680,
        It = "300 es",
        Ut = 1035,
        Nt = new d(),
        Ot = new W();
      class Ft {
        constructor(t, e, n) {
          if (Array.isArray(t))
            throw new TypeError(
              "THREE.BufferAttribute: array should be a Typed Array."
            );
          (this.isBufferAttribute = !0),
            (this.name = ""),
            (this.array = t),
            (this.itemSize = e),
            (this.count = void 0 !== t ? t.length / e : 0),
            (this.normalized = !0 === n),
            (this.usage = 35044),
            (this.updateRange = { offset: 0, count: -1 }),
            (this.version = 0);
        }
        onUploadCallback() {}
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
        setUsage(t) {
          return (this.usage = t), this;
        }
        copy(t) {
          return (
            (this.name = t.name),
            (this.array = new t.array.constructor(t.array)),
            (this.itemSize = t.itemSize),
            (this.count = t.count),
            (this.normalized = t.normalized),
            (this.usage = t.usage),
            this
          );
        }
        copyAt(t, e, n) {
          (t *= this.itemSize), (n *= e.itemSize);
          for (let i = 0, r = this.itemSize; i < r; i++)
            this.array[t + i] = e.array[n + i];
          return this;
        }
        copyArray(t) {
          return this.array.set(t), this;
        }
        applyMatrix3(t) {
          if (2 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++)
              Ot.fromBufferAttribute(this, e),
                Ot.applyMatrix3(t),
                this.setXY(e, Ot.x, Ot.y);
          else if (3 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++)
              Nt.fromBufferAttribute(this, e),
                Nt.applyMatrix3(t),
                this.setXYZ(e, Nt.x, Nt.y, Nt.z);
          return this;
        }
        applyMatrix4(t) {
          for (let e = 0, n = this.count; e < n; e++)
            Nt.fromBufferAttribute(this, e),
              Nt.applyMatrix4(t),
              this.setXYZ(e, Nt.x, Nt.y, Nt.z);
          return this;
        }
        applyNormalMatrix(t) {
          for (let e = 0, n = this.count; e < n; e++)
            Nt.fromBufferAttribute(this, e),
              Nt.applyNormalMatrix(t),
              this.setXYZ(e, Nt.x, Nt.y, Nt.z);
          return this;
        }
        transformDirection(t) {
          for (let e = 0, n = this.count; e < n; e++)
            Nt.fromBufferAttribute(this, e),
              Nt.transformDirection(t),
              this.setXYZ(e, Nt.x, Nt.y, Nt.z);
          return this;
        }
        set(t, e = 0) {
          return this.array.set(t, e), this;
        }
        getX(t) {
          let e = this.array[t * this.itemSize];
          return this.normalized && (e = c(e, this.array)), e;
        }
        setX(t, e) {
          return (
            this.normalized && (e = u(e, this.array)),
            (this.array[t * this.itemSize] = e),
            this
          );
        }
        getY(t) {
          let e = this.array[t * this.itemSize + 1];
          return this.normalized && (e = c(e, this.array)), e;
        }
        setY(t, e) {
          return (
            this.normalized && (e = u(e, this.array)),
            (this.array[t * this.itemSize + 1] = e),
            this
          );
        }
        getZ(t) {
          let e = this.array[t * this.itemSize + 2];
          return this.normalized && (e = c(e, this.array)), e;
        }
        setZ(t, e) {
          return (
            this.normalized && (e = u(e, this.array)),
            (this.array[t * this.itemSize + 2] = e),
            this
          );
        }
        getW(t) {
          let e = this.array[t * this.itemSize + 3];
          return this.normalized && (e = c(e, this.array)), e;
        }
        setW(t, e) {
          return (
            this.normalized && (e = u(e, this.array)),
            (this.array[t * this.itemSize + 3] = e),
            this
          );
        }
        setXY(t, e, n) {
          return (
            (t *= this.itemSize),
            this.normalized && ((e = u(e, this.array)), (n = u(n, this.array))),
            (this.array[t + 0] = e),
            (this.array[t + 1] = n),
            this
          );
        }
        setXYZ(t, e, n, i) {
          return (
            (t *= this.itemSize),
            this.normalized &&
              ((e = u(e, this.array)),
              (n = u(n, this.array)),
              (i = u(i, this.array))),
            (this.array[t + 0] = e),
            (this.array[t + 1] = n),
            (this.array[t + 2] = i),
            this
          );
        }
        setXYZW(t, e, n, i, r) {
          return (
            (t *= this.itemSize),
            this.normalized &&
              ((e = u(e, this.array)),
              (n = u(n, this.array)),
              (i = u(i, this.array)),
              (r = u(r, this.array))),
            (this.array[t + 0] = e),
            (this.array[t + 1] = n),
            (this.array[t + 2] = i),
            (this.array[t + 3] = r),
            this
          );
        }
        onUpload(t) {
          return (this.onUploadCallback = t), this;
        }
        clone() {
          return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
          const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized,
          };
          return (
            "" !== this.name && (t.name = this.name),
            35044 !== this.usage && (t.usage = this.usage),
            (0 === this.updateRange.offset && -1 === this.updateRange.count) ||
              (t.updateRange = this.updateRange),
            t
          );
        }
        copyColorsArray() {
          console.error(
            "THREE.BufferAttribute: copyColorsArray() was removed in r144."
          );
        }
        copyVector2sArray() {
          console.error(
            "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
          );
        }
        copyVector3sArray() {
          console.error(
            "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
          );
        }
        copyVector4sArray() {
          console.error(
            "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
          );
        }
      }
      class zt extends Ft {
        constructor(t, e, n) {
          super(new Uint16Array(t), e, n);
        }
      }
      class Bt extends Ft {
        constructor(t, e, n) {
          super(new Uint32Array(t), e, n);
        }
      }
      class Gt extends Ft {
        constructor(t, e, n) {
          super(new Float32Array(t), e, n);
        }
      }
      const Ht = new X(),
        Vt = new d(),
        kt = new d();
      class Wt {
        constructor(t = new d(), e = -1) {
          (this.center = t), (this.radius = e);
        }
        set(t, e) {
          return this.center.copy(t), (this.radius = e), this;
        }
        setFromPoints(t, e) {
          const n = this.center;
          void 0 !== e ? n.copy(e) : Ht.setFromPoints(t).getCenter(n);
          let i = 0;
          for (let e = 0, r = t.length; e < r; e++)
            i = Math.max(i, n.distanceToSquared(t[e]));
          return (this.radius = Math.sqrt(i)), this;
        }
        copy(t) {
          return this.center.copy(t.center), (this.radius = t.radius), this;
        }
        isEmpty() {
          return this.radius < 0;
        }
        makeEmpty() {
          return this.center.set(0, 0, 0), (this.radius = -1), this;
        }
        containsPoint(t) {
          return t.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t) {
          return t.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t) {
          const e = this.radius + t.radius;
          return t.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t) {
          return t.intersectsSphere(this);
        }
        intersectsPlane(t) {
          return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t, e) {
          const n = this.center.distanceToSquared(t);
          return (
            e.copy(t),
            n > this.radius * this.radius &&
              (e.sub(this.center).normalize(),
              e.multiplyScalar(this.radius).add(this.center)),
            e
          );
        }
        getBoundingBox(t) {
          return this.isEmpty()
            ? (t.makeEmpty(), t)
            : (t.set(this.center, this.center),
              t.expandByScalar(this.radius),
              t);
        }
        applyMatrix4(t) {
          return (
            this.center.applyMatrix4(t),
            (this.radius = this.radius * t.getMaxScaleOnAxis()),
            this
          );
        }
        translate(t) {
          return this.center.add(t), this;
        }
        expandByPoint(t) {
          if (this.isEmpty())
            return this.center.copy(t), (this.radius = 0), this;
          Vt.subVectors(t, this.center);
          const e = Vt.lengthSq();
          if (e > this.radius * this.radius) {
            const t = Math.sqrt(e),
              n = 0.5 * (t - this.radius);
            this.center.addScaledVector(Vt, n / t), (this.radius += n);
          }
          return this;
        }
        union(t) {
          return t.isEmpty()
            ? this
            : this.isEmpty()
            ? (this.copy(t), this)
            : (!0 === this.center.equals(t.center)
                ? (this.radius = Math.max(this.radius, t.radius))
                : (kt.subVectors(t.center, this.center).setLength(t.radius),
                  this.expandByPoint(Vt.copy(t.center).add(kt)),
                  this.expandByPoint(Vt.copy(t.center).sub(kt))),
              this);
        }
        equals(t) {
          return t.center.equals(this.center) && t.radius === this.radius;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      function Xt(t) {
        for (let e = t.length - 1; e >= 0; --e) if (t[e] >= 65535) return !0;
        return !1;
      }
      function qt(t) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", t);
      }
      Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array;
      let jt = 0;
      const Yt = new m(),
        Zt = new H(),
        Kt = new d(),
        Jt = new X(),
        Qt = new X(),
        $t = new d();
      class te extends E {
        constructor() {
          super(),
            (this.isBufferGeometry = !0),
            Object.defineProperty(this, "id", { value: jt++ }),
            (this.uuid = r()),
            (this.name = ""),
            (this.type = "BufferGeometry"),
            (this.index = null),
            (this.attributes = {}),
            (this.morphAttributes = {}),
            (this.morphTargetsRelative = !1),
            (this.groups = []),
            (this.boundingBox = null),
            (this.boundingSphere = null),
            (this.drawRange = { start: 0, count: 1 / 0 }),
            (this.userData = {});
        }
        getIndex() {
          return this.index;
        }
        setIndex(t) {
          return (
            Array.isArray(t)
              ? (this.index = new (Xt(t) ? Bt : zt)(t, 1))
              : (this.index = t),
            this
          );
        }
        getAttribute(t) {
          return this.attributes[t];
        }
        setAttribute(t, e) {
          return (this.attributes[t] = e), this;
        }
        deleteAttribute(t) {
          return delete this.attributes[t], this;
        }
        hasAttribute(t) {
          return void 0 !== this.attributes[t];
        }
        addGroup(t, e, n = 0) {
          this.groups.push({ start: t, count: e, materialIndex: n });
        }
        clearGroups() {
          this.groups = [];
        }
        setDrawRange(t, e) {
          (this.drawRange.start = t), (this.drawRange.count = e);
        }
        applyMatrix4(t) {
          const e = this.attributes.position;
          void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
          const n = this.attributes.normal;
          if (void 0 !== n) {
            const e = new A().getNormalMatrix(t);
            n.applyNormalMatrix(e), (n.needsUpdate = !0);
          }
          const i = this.attributes.tangent;
          return (
            void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
            null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
          );
        }
        applyQuaternion(t) {
          return Yt.makeRotationFromQuaternion(t), this.applyMatrix4(Yt), this;
        }
        rotateX(t) {
          return Yt.makeRotationX(t), this.applyMatrix4(Yt), this;
        }
        rotateY(t) {
          return Yt.makeRotationY(t), this.applyMatrix4(Yt), this;
        }
        rotateZ(t) {
          return Yt.makeRotationZ(t), this.applyMatrix4(Yt), this;
        }
        translate(t, e, n) {
          return Yt.makeTranslation(t, e, n), this.applyMatrix4(Yt), this;
        }
        scale(t, e, n) {
          return Yt.makeScale(t, e, n), this.applyMatrix4(Yt), this;
        }
        lookAt(t) {
          return (
            Zt.lookAt(t), Zt.updateMatrix(), this.applyMatrix4(Zt.matrix), this
          );
        }
        center() {
          return (
            this.computeBoundingBox(),
            this.boundingBox.getCenter(Kt).negate(),
            this.translate(Kt.x, Kt.y, Kt.z),
            this
          );
        }
        setFromPoints(t) {
          const e = [];
          for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            e.push(i.x, i.y, i.z || 0);
          }
          return this.setAttribute("position", new Gt(e, 3)), this;
        }
        computeBoundingBox() {
          null === this.boundingBox && (this.boundingBox = new X());
          const t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute)
            return (
              console.error(
                'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
                this
              ),
              void this.boundingBox.set(
                new d(-1 / 0, -1 / 0, -1 / 0),
                new d(1 / 0, 1 / 0, 1 / 0)
              )
            );
          if (void 0 !== t) {
            if ((this.boundingBox.setFromBufferAttribute(t), e))
              for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                Jt.setFromBufferAttribute(n),
                  this.morphTargetsRelative
                    ? ($t.addVectors(this.boundingBox.min, Jt.min),
                      this.boundingBox.expandByPoint($t),
                      $t.addVectors(this.boundingBox.max, Jt.max),
                      this.boundingBox.expandByPoint($t))
                    : (this.boundingBox.expandByPoint(Jt.min),
                      this.boundingBox.expandByPoint(Jt.max));
              }
          } else this.boundingBox.makeEmpty();
          (isNaN(this.boundingBox.min.x) ||
            isNaN(this.boundingBox.min.y) ||
            isNaN(this.boundingBox.min.z)) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
              this
            );
        }
        computeBoundingSphere() {
          null === this.boundingSphere && (this.boundingSphere = new Wt());
          const t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute)
            return (
              console.error(
                'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
                this
              ),
              void this.boundingSphere.set(new d(), 1 / 0)
            );
          if (t) {
            const n = this.boundingSphere.center;
            if ((Jt.setFromBufferAttribute(t), e))
              for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                Qt.setFromBufferAttribute(n),
                  this.morphTargetsRelative
                    ? ($t.addVectors(Jt.min, Qt.min),
                      Jt.expandByPoint($t),
                      $t.addVectors(Jt.max, Qt.max),
                      Jt.expandByPoint($t))
                    : (Jt.expandByPoint(Qt.min), Jt.expandByPoint(Qt.max));
              }
            Jt.getCenter(n);
            let i = 0;
            for (let e = 0, r = t.count; e < r; e++)
              $t.fromBufferAttribute(t, e),
                (i = Math.max(i, n.distanceToSquared($t)));
            if (e)
              for (let r = 0, a = e.length; r < a; r++) {
                const a = e[r],
                  s = this.morphTargetsRelative;
                for (let e = 0, r = a.count; e < r; e++)
                  $t.fromBufferAttribute(a, e),
                    s && (Kt.fromBufferAttribute(t, e), $t.add(Kt)),
                    (i = Math.max(i, n.distanceToSquared($t)));
              }
            (this.boundingSphere.radius = Math.sqrt(i)),
              isNaN(this.boundingSphere.radius) &&
                console.error(
                  'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
                  this
                );
          }
        }
        computeTangents() {
          const t = this.index,
            e = this.attributes;
          if (
            null === t ||
            void 0 === e.position ||
            void 0 === e.normal ||
            void 0 === e.uv
          )
            return void console.error(
              "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
            );
          const n = t.array,
            i = e.position.array,
            r = e.normal.array,
            a = e.uv.array,
            s = i.length / 3;
          !1 === this.hasAttribute("tangent") &&
            this.setAttribute("tangent", new Ft(new Float32Array(4 * s), 4));
          const o = this.getAttribute("tangent").array,
            l = [],
            c = [];
          for (let t = 0; t < s; t++) (l[t] = new d()), (c[t] = new d());
          const u = new d(),
            h = new d(),
            p = new d(),
            f = new W(),
            m = new W(),
            g = new W(),
            _ = new d(),
            v = new d();
          function x(t, e, n) {
            u.fromArray(i, 3 * t),
              h.fromArray(i, 3 * e),
              p.fromArray(i, 3 * n),
              f.fromArray(a, 2 * t),
              m.fromArray(a, 2 * e),
              g.fromArray(a, 2 * n),
              h.sub(u),
              p.sub(u),
              m.sub(f),
              g.sub(f);
            const r = 1 / (m.x * g.y - g.x * m.y);
            isFinite(r) &&
              (_.copy(h)
                .multiplyScalar(g.y)
                .addScaledVector(p, -m.y)
                .multiplyScalar(r),
              v
                .copy(p)
                .multiplyScalar(m.x)
                .addScaledVector(h, -g.x)
                .multiplyScalar(r),
              l[t].add(_),
              l[e].add(_),
              l[n].add(_),
              c[t].add(v),
              c[e].add(v),
              c[n].add(v));
          }
          let M = this.groups;
          0 === M.length && (M = [{ start: 0, count: n.length }]);
          for (let t = 0, e = M.length; t < e; ++t) {
            const e = M[t],
              i = e.start;
            for (let t = i, r = i + e.count; t < r; t += 3)
              x(n[t + 0], n[t + 1], n[t + 2]);
          }
          const y = new d(),
            E = new d(),
            S = new d(),
            b = new d();
          function T(t) {
            S.fromArray(r, 3 * t), b.copy(S);
            const e = l[t];
            y.copy(e),
              y.sub(S.multiplyScalar(S.dot(e))).normalize(),
              E.crossVectors(b, e);
            const n = E.dot(c[t]) < 0 ? -1 : 1;
            (o[4 * t] = y.x),
              (o[4 * t + 1] = y.y),
              (o[4 * t + 2] = y.z),
              (o[4 * t + 3] = n);
          }
          for (let t = 0, e = M.length; t < e; ++t) {
            const e = M[t],
              i = e.start;
            for (let t = i, r = i + e.count; t < r; t += 3)
              T(n[t + 0]), T(n[t + 1]), T(n[t + 2]);
          }
        }
        computeVertexNormals() {
          const t = this.index,
            e = this.getAttribute("position");
          if (void 0 !== e) {
            let n = this.getAttribute("normal");
            if (void 0 === n)
              (n = new Ft(new Float32Array(3 * e.count), 3)),
                this.setAttribute("normal", n);
            else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
            const i = new d(),
              r = new d(),
              a = new d(),
              s = new d(),
              o = new d(),
              l = new d(),
              c = new d(),
              u = new d();
            if (t)
              for (let h = 0, d = t.count; h < d; h += 3) {
                const d = t.getX(h + 0),
                  p = t.getX(h + 1),
                  f = t.getX(h + 2);
                i.fromBufferAttribute(e, d),
                  r.fromBufferAttribute(e, p),
                  a.fromBufferAttribute(e, f),
                  c.subVectors(a, r),
                  u.subVectors(i, r),
                  c.cross(u),
                  s.fromBufferAttribute(n, d),
                  o.fromBufferAttribute(n, p),
                  l.fromBufferAttribute(n, f),
                  s.add(c),
                  o.add(c),
                  l.add(c),
                  n.setXYZ(d, s.x, s.y, s.z),
                  n.setXYZ(p, o.x, o.y, o.z),
                  n.setXYZ(f, l.x, l.y, l.z);
              }
            else
              for (let t = 0, s = e.count; t < s; t += 3)
                i.fromBufferAttribute(e, t + 0),
                  r.fromBufferAttribute(e, t + 1),
                  a.fromBufferAttribute(e, t + 2),
                  c.subVectors(a, r),
                  u.subVectors(i, r),
                  c.cross(u),
                  n.setXYZ(t + 0, c.x, c.y, c.z),
                  n.setXYZ(t + 1, c.x, c.y, c.z),
                  n.setXYZ(t + 2, c.x, c.y, c.z);
            this.normalizeNormals(), (n.needsUpdate = !0);
          }
        }
        merge() {
          return (
            console.error(
              "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."
            ),
            this
          );
        }
        normalizeNormals() {
          const t = this.attributes.normal;
          for (let e = 0, n = t.count; e < n; e++)
            $t.fromBufferAttribute(t, e),
              $t.normalize(),
              t.setXYZ(e, $t.x, $t.y, $t.z);
        }
        toNonIndexed() {
          function t(t, e) {
            const n = t.array,
              i = t.itemSize,
              r = t.normalized,
              a = new n.constructor(e.length * i);
            let s = 0,
              o = 0;
            for (let r = 0, l = e.length; r < l; r++) {
              s = t.isInterleavedBufferAttribute
                ? e[r] * t.data.stride + t.offset
                : e[r] * i;
              for (let t = 0; t < i; t++) a[o++] = n[s++];
            }
            return new Ft(a, i, r);
          }
          if (null === this.index)
            return (
              console.warn(
                "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
              ),
              this
            );
          const e = new te(),
            n = this.index.array,
            i = this.attributes;
          for (const r in i) {
            const a = t(i[r], n);
            e.setAttribute(r, a);
          }
          const r = this.morphAttributes;
          for (const i in r) {
            const a = [],
              s = r[i];
            for (let e = 0, i = s.length; e < i; e++) {
              const i = t(s[e], n);
              a.push(i);
            }
            e.morphAttributes[i] = a;
          }
          e.morphTargetsRelative = this.morphTargetsRelative;
          const a = this.groups;
          for (let t = 0, n = a.length; t < n; t++) {
            const n = a[t];
            e.addGroup(n.start, n.count, n.materialIndex);
          }
          return e;
        }
        toJSON() {
          const t = {
            metadata: {
              version: 4.5,
              type: "BufferGeometry",
              generator: "BufferGeometry.toJSON",
            },
          };
          if (
            ((t.uuid = this.uuid),
            (t.type = this.type),
            "" !== this.name && (t.name = this.name),
            Object.keys(this.userData).length > 0 &&
              (t.userData = this.userData),
            void 0 !== this.parameters)
          ) {
            const e = this.parameters;
            for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
            return t;
          }
          t.data = { attributes: {} };
          const e = this.index;
          null !== e &&
            (t.data.index = {
              type: e.array.constructor.name,
              array: Array.prototype.slice.call(e.array),
            });
          const n = this.attributes;
          for (const e in n) {
            const i = n[e];
            t.data.attributes[e] = i.toJSON(t.data);
          }
          const i = {};
          let r = !1;
          for (const e in this.morphAttributes) {
            const n = this.morphAttributes[e],
              a = [];
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e];
              a.push(i.toJSON(t.data));
            }
            a.length > 0 && ((i[e] = a), (r = !0));
          }
          r &&
            ((t.data.morphAttributes = i),
            (t.data.morphTargetsRelative = this.morphTargetsRelative));
          const a = this.groups;
          a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
          const s = this.boundingSphere;
          return (
            null !== s &&
              (t.data.boundingSphere = {
                center: s.center.toArray(),
                radius: s.radius,
              }),
            t
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          (this.index = null),
            (this.attributes = {}),
            (this.morphAttributes = {}),
            (this.groups = []),
            (this.boundingBox = null),
            (this.boundingSphere = null);
          const e = {};
          this.name = t.name;
          const n = t.index;
          null !== n && this.setIndex(n.clone(e));
          const i = t.attributes;
          for (const t in i) {
            const n = i[t];
            this.setAttribute(t, n.clone(e));
          }
          const r = t.morphAttributes;
          for (const t in r) {
            const n = [],
              i = r[t];
            for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
            this.morphAttributes[t] = n;
          }
          this.morphTargetsRelative = t.morphTargetsRelative;
          const a = t.groups;
          for (let t = 0, e = a.length; t < e; t++) {
            const e = a[t];
            this.addGroup(e.start, e.count, e.materialIndex);
          }
          const s = t.boundingBox;
          null !== s && (this.boundingBox = s.clone());
          const o = t.boundingSphere;
          return (
            null !== o && (this.boundingSphere = o.clone()),
            (this.drawRange.start = t.drawRange.start),
            (this.drawRange.count = t.drawRange.count),
            (this.userData = t.userData),
            void 0 !== t.parameters &&
              (this.parameters = Object.assign({}, t.parameters)),
            this
          );
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
      }
      let ee = 0;
      class ne extends E {
        constructor() {
          super(),
            (this.isMaterial = !0),
            Object.defineProperty(this, "id", { value: ee++ }),
            (this.uuid = r()),
            (this.name = ""),
            (this.type = "Material"),
            (this.blending = 1),
            (this.side = 0),
            (this.vertexColors = !1),
            (this.opacity = 1),
            (this.transparent = !1),
            (this.blendSrc = 204),
            (this.blendDst = 205),
            (this.blendEquation = st),
            (this.blendSrcAlpha = null),
            (this.blendDstAlpha = null),
            (this.blendEquationAlpha = null),
            (this.depthFunc = 3),
            (this.depthTest = !0),
            (this.depthWrite = !0),
            (this.stencilWriteMask = 255),
            (this.stencilFunc = 519),
            (this.stencilRef = 0),
            (this.stencilFuncMask = 255),
            (this.stencilFail = Pt),
            (this.stencilZFail = Pt),
            (this.stencilZPass = Pt),
            (this.stencilWrite = !1),
            (this.clippingPlanes = null),
            (this.clipIntersection = !1),
            (this.clipShadows = !1),
            (this.shadowSide = null),
            (this.colorWrite = !0),
            (this.precision = null),
            (this.polygonOffset = !1),
            (this.polygonOffsetFactor = 0),
            (this.polygonOffsetUnits = 0),
            (this.dithering = !1),
            (this.alphaToCoverage = !1),
            (this.premultipliedAlpha = !1),
            (this.visible = !0),
            (this.toneMapped = !0),
            (this.userData = {}),
            (this.version = 0),
            (this._alphaTest = 0);
        }
        get alphaTest() {
          return this._alphaTest;
        }
        set alphaTest(t) {
          this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
          return this.onBeforeCompile.toString();
        }
        setValues(t) {
          if (void 0 !== t)
            for (const e in t) {
              const n = t[e];
              if (void 0 === n) {
                console.warn(
                  "THREE.Material: '" + e + "' parameter is undefined."
                );
                continue;
              }
              const i = this[e];
              void 0 !== i
                ? i && i.isColor
                  ? i.set(n)
                  : i && i.isVector3 && n && n.isVector3
                  ? i.copy(n)
                  : (this[e] = n)
                : console.warn(
                    "THREE." +
                      this.type +
                      ": '" +
                      e +
                      "' is not a property of this material."
                  );
            }
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t;
          e && (t = { textures: {}, images: {} });
          const n = {
            metadata: {
              version: 4.5,
              type: "Material",
              generator: "Material.toJSON",
            },
          };
          function i(t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              delete i.metadata, e.push(i);
            }
            return e;
          }
          if (
            ((n.uuid = this.uuid),
            (n.type = this.type),
            "" !== this.name && (n.name = this.name),
            this.color && this.color.isColor && (n.color = this.color.getHex()),
            void 0 !== this.roughness && (n.roughness = this.roughness),
            void 0 !== this.metalness && (n.metalness = this.metalness),
            void 0 !== this.sheen && (n.sheen = this.sheen),
            this.sheenColor &&
              this.sheenColor.isColor &&
              (n.sheenColor = this.sheenColor.getHex()),
            void 0 !== this.sheenRoughness &&
              (n.sheenRoughness = this.sheenRoughness),
            this.emissive &&
              this.emissive.isColor &&
              (n.emissive = this.emissive.getHex()),
            this.emissiveIntensity &&
              1 !== this.emissiveIntensity &&
              (n.emissiveIntensity = this.emissiveIntensity),
            this.specular &&
              this.specular.isColor &&
              (n.specular = this.specular.getHex()),
            void 0 !== this.specularIntensity &&
              (n.specularIntensity = this.specularIntensity),
            this.specularColor &&
              this.specularColor.isColor &&
              (n.specularColor = this.specularColor.getHex()),
            void 0 !== this.shininess && (n.shininess = this.shininess),
            void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
            void 0 !== this.clearcoatRoughness &&
              (n.clearcoatRoughness = this.clearcoatRoughness),
            this.clearcoatMap &&
              this.clearcoatMap.isTexture &&
              (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
            this.clearcoatRoughnessMap &&
              this.clearcoatRoughnessMap.isTexture &&
              (n.clearcoatRoughnessMap =
                this.clearcoatRoughnessMap.toJSON(t).uuid),
            this.clearcoatNormalMap &&
              this.clearcoatNormalMap.isTexture &&
              ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
              (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
            void 0 !== this.iridescence && (n.iridescence = this.iridescence),
            void 0 !== this.iridescenceIOR &&
              (n.iridescenceIOR = this.iridescenceIOR),
            void 0 !== this.iridescenceThicknessRange &&
              (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
            this.iridescenceMap &&
              this.iridescenceMap.isTexture &&
              (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
            this.iridescenceThicknessMap &&
              this.iridescenceThicknessMap.isTexture &&
              (n.iridescenceThicknessMap =
                this.iridescenceThicknessMap.toJSON(t).uuid),
            this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
            this.matcap &&
              this.matcap.isTexture &&
              (n.matcap = this.matcap.toJSON(t).uuid),
            this.alphaMap &&
              this.alphaMap.isTexture &&
              (n.alphaMap = this.alphaMap.toJSON(t).uuid),
            this.lightMap &&
              this.lightMap.isTexture &&
              ((n.lightMap = this.lightMap.toJSON(t).uuid),
              (n.lightMapIntensity = this.lightMapIntensity)),
            this.aoMap &&
              this.aoMap.isTexture &&
              ((n.aoMap = this.aoMap.toJSON(t).uuid),
              (n.aoMapIntensity = this.aoMapIntensity)),
            this.bumpMap &&
              this.bumpMap.isTexture &&
              ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
              (n.bumpScale = this.bumpScale)),
            this.normalMap &&
              this.normalMap.isTexture &&
              ((n.normalMap = this.normalMap.toJSON(t).uuid),
              (n.normalMapType = this.normalMapType),
              (n.normalScale = this.normalScale.toArray())),
            this.displacementMap &&
              this.displacementMap.isTexture &&
              ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
              (n.displacementScale = this.displacementScale),
              (n.displacementBias = this.displacementBias)),
            this.roughnessMap &&
              this.roughnessMap.isTexture &&
              (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
            this.metalnessMap &&
              this.metalnessMap.isTexture &&
              (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
            this.emissiveMap &&
              this.emissiveMap.isTexture &&
              (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
            this.specularMap &&
              this.specularMap.isTexture &&
              (n.specularMap = this.specularMap.toJSON(t).uuid),
            this.specularIntensityMap &&
              this.specularIntensityMap.isTexture &&
              (n.specularIntensityMap =
                this.specularIntensityMap.toJSON(t).uuid),
            this.specularColorMap &&
              this.specularColorMap.isTexture &&
              (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
            this.envMap &&
              this.envMap.isTexture &&
              ((n.envMap = this.envMap.toJSON(t).uuid),
              void 0 !== this.combine && (n.combine = this.combine)),
            void 0 !== this.envMapIntensity &&
              (n.envMapIntensity = this.envMapIntensity),
            void 0 !== this.reflectivity &&
              (n.reflectivity = this.reflectivity),
            void 0 !== this.refractionRatio &&
              (n.refractionRatio = this.refractionRatio),
            this.gradientMap &&
              this.gradientMap.isTexture &&
              (n.gradientMap = this.gradientMap.toJSON(t).uuid),
            void 0 !== this.transmission &&
              (n.transmission = this.transmission),
            this.transmissionMap &&
              this.transmissionMap.isTexture &&
              (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
            void 0 !== this.thickness && (n.thickness = this.thickness),
            this.thicknessMap &&
              this.thicknessMap.isTexture &&
              (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
            void 0 !== this.attenuationDistance &&
              this.attenuationDistance !== 1 / 0 &&
              (n.attenuationDistance = this.attenuationDistance),
            void 0 !== this.attenuationColor &&
              (n.attenuationColor = this.attenuationColor.getHex()),
            void 0 !== this.size && (n.size = this.size),
            null !== this.shadowSide && (n.shadowSide = this.shadowSide),
            void 0 !== this.sizeAttenuation &&
              (n.sizeAttenuation = this.sizeAttenuation),
            1 !== this.blending && (n.blending = this.blending),
            0 !== this.side && (n.side = this.side),
            this.vertexColors && (n.vertexColors = !0),
            this.opacity < 1 && (n.opacity = this.opacity),
            !0 === this.transparent && (n.transparent = this.transparent),
            (n.depthFunc = this.depthFunc),
            (n.depthTest = this.depthTest),
            (n.depthWrite = this.depthWrite),
            (n.colorWrite = this.colorWrite),
            (n.stencilWrite = this.stencilWrite),
            (n.stencilWriteMask = this.stencilWriteMask),
            (n.stencilFunc = this.stencilFunc),
            (n.stencilRef = this.stencilRef),
            (n.stencilFuncMask = this.stencilFuncMask),
            (n.stencilFail = this.stencilFail),
            (n.stencilZFail = this.stencilZFail),
            (n.stencilZPass = this.stencilZPass),
            void 0 !== this.rotation &&
              0 !== this.rotation &&
              (n.rotation = this.rotation),
            !0 === this.polygonOffset && (n.polygonOffset = !0),
            0 !== this.polygonOffsetFactor &&
              (n.polygonOffsetFactor = this.polygonOffsetFactor),
            0 !== this.polygonOffsetUnits &&
              (n.polygonOffsetUnits = this.polygonOffsetUnits),
            void 0 !== this.linewidth &&
              1 !== this.linewidth &&
              (n.linewidth = this.linewidth),
            void 0 !== this.dashSize && (n.dashSize = this.dashSize),
            void 0 !== this.gapSize && (n.gapSize = this.gapSize),
            void 0 !== this.scale && (n.scale = this.scale),
            !0 === this.dithering && (n.dithering = !0),
            this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
            !0 === this.alphaToCoverage &&
              (n.alphaToCoverage = this.alphaToCoverage),
            !0 === this.premultipliedAlpha &&
              (n.premultipliedAlpha = this.premultipliedAlpha),
            !0 === this.wireframe && (n.wireframe = this.wireframe),
            this.wireframeLinewidth > 1 &&
              (n.wireframeLinewidth = this.wireframeLinewidth),
            "round" !== this.wireframeLinecap &&
              (n.wireframeLinecap = this.wireframeLinecap),
            "round" !== this.wireframeLinejoin &&
              (n.wireframeLinejoin = this.wireframeLinejoin),
            !0 === this.flatShading && (n.flatShading = this.flatShading),
            !1 === this.visible && (n.visible = !1),
            !1 === this.toneMapped && (n.toneMapped = !1),
            !1 === this.fog && (n.fog = !1),
            "{}" !== JSON.stringify(this.userData) &&
              (n.userData = this.userData),
            e)
          ) {
            const e = i(t.textures),
              r = i(t.images);
            e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
          }
          return n;
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          (this.name = t.name),
            (this.blending = t.blending),
            (this.side = t.side),
            (this.vertexColors = t.vertexColors),
            (this.opacity = t.opacity),
            (this.transparent = t.transparent),
            (this.blendSrc = t.blendSrc),
            (this.blendDst = t.blendDst),
            (this.blendEquation = t.blendEquation),
            (this.blendSrcAlpha = t.blendSrcAlpha),
            (this.blendDstAlpha = t.blendDstAlpha),
            (this.blendEquationAlpha = t.blendEquationAlpha),
            (this.depthFunc = t.depthFunc),
            (this.depthTest = t.depthTest),
            (this.depthWrite = t.depthWrite),
            (this.stencilWriteMask = t.stencilWriteMask),
            (this.stencilFunc = t.stencilFunc),
            (this.stencilRef = t.stencilRef),
            (this.stencilFuncMask = t.stencilFuncMask),
            (this.stencilFail = t.stencilFail),
            (this.stencilZFail = t.stencilZFail),
            (this.stencilZPass = t.stencilZPass),
            (this.stencilWrite = t.stencilWrite);
          const e = t.clippingPlanes;
          let n = null;
          if (null !== e) {
            const t = e.length;
            n = new Array(t);
            for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
          }
          return (
            (this.clippingPlanes = n),
            (this.clipIntersection = t.clipIntersection),
            (this.clipShadows = t.clipShadows),
            (this.shadowSide = t.shadowSide),
            (this.colorWrite = t.colorWrite),
            (this.precision = t.precision),
            (this.polygonOffset = t.polygonOffset),
            (this.polygonOffsetFactor = t.polygonOffsetFactor),
            (this.polygonOffsetUnits = t.polygonOffsetUnits),
            (this.dithering = t.dithering),
            (this.alphaTest = t.alphaTest),
            (this.alphaToCoverage = t.alphaToCoverage),
            (this.premultipliedAlpha = t.premultipliedAlpha),
            (this.visible = t.visible),
            (this.toneMapped = t.toneMapped),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            this
          );
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
      }
      function ie(t) {
        const e = {};
        for (const n in t) {
          e[n] = {};
          for (const i in t[n]) {
            const r = t[n][i];
            r &&
            (r.isColor ||
              r.isMatrix3 ||
              r.isMatrix4 ||
              r.isVector2 ||
              r.isVector3 ||
              r.isVector4 ||
              r.isTexture ||
              r.isQuaternion)
              ? (e[n][i] = r.clone())
              : Array.isArray(r)
              ? (e[n][i] = r.slice())
              : (e[n][i] = r);
          }
        }
        return e;
      }
      function re(t) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
          const i = ie(t[n]);
          for (const t in i) e[t] = i[t];
        }
        return e;
      }
      const ae = { clone: ie, merge: re };
      class se extends ne {
        constructor(t) {
          super(),
            (this.isShaderMaterial = !0),
            (this.type = "ShaderMaterial"),
            (this.defines = {}),
            (this.uniforms = {}),
            (this.uniformsGroups = []),
            (this.vertexShader =
              "\nvoid main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n"),
            (this.fragmentShader =
              "\nvoid main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}\n"),
            (this.linewidth = 1),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.fog = !1),
            (this.lights = !1),
            (this.clipping = !1),
            (this.extensions = {
              derivatives: !1,
              fragDepth: !1,
              drawBuffers: !1,
              shaderTextureLOD: !1,
            }),
            (this.defaultAttributeValues = {
              color: [1, 1, 1],
              uv: [0, 0],
              uv2: [0, 0],
            }),
            (this.index0AttributeName = void 0),
            (this.uniformsNeedUpdate = !1),
            (this.glslVersion = null),
            void 0 !== t && this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            (this.fragmentShader = t.fragmentShader),
            (this.vertexShader = t.vertexShader),
            (this.uniforms = ie(t.uniforms)),
            (this.uniformsGroups = (function (t) {
              const e = [];
              for (let n = 0; n < t.length; n++) e.push(t[n].clone());
              return e;
            })(t.uniformsGroups)),
            (this.defines = Object.assign({}, t.defines)),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.fog = t.fog),
            (this.lights = t.lights),
            (this.clipping = t.clipping),
            (this.extensions = Object.assign({}, t.extensions)),
            (this.glslVersion = t.glslVersion),
            this
          );
        }
        toJSON(t) {
          const e = super.toJSON(t);
          (e.glslVersion = this.glslVersion), (e.uniforms = {});
          for (const n in this.uniforms) {
            const i = this.uniforms[n].value;
            i && i.isTexture
              ? (e.uniforms[n] = { type: "t", value: i.toJSON(t).uuid })
              : i && i.isColor
              ? (e.uniforms[n] = { type: "c", value: i.getHex() })
              : i && i.isVector2
              ? (e.uniforms[n] = { type: "v2", value: i.toArray() })
              : i && i.isVector3
              ? (e.uniforms[n] = { type: "v3", value: i.toArray() })
              : i && i.isVector4
              ? (e.uniforms[n] = { type: "v4", value: i.toArray() })
              : i && i.isMatrix3
              ? (e.uniforms[n] = { type: "m3", value: i.toArray() })
              : i && i.isMatrix4
              ? (e.uniforms[n] = { type: "m4", value: i.toArray() })
              : (e.uniforms[n] = { value: i });
          }
          Object.keys(this.defines).length > 0 && (e.defines = this.defines),
            (e.vertexShader = this.vertexShader),
            (e.fragmentShader = this.fragmentShader);
          const n = {};
          for (const t in this.extensions)
            !0 === this.extensions[t] && (n[t] = !0);
          return Object.keys(n).length > 0 && (e.extensions = n), e;
        }
      }
      class oe extends se {
        constructor(t) {
          super(t),
            (this.isRawShaderMaterial = !0),
            (this.type = "RawShaderMaterial");
        }
      }
      const le = new d(),
        ce = new d(),
        ue = new d(),
        he = new d(),
        de = new d(),
        pe = new d(),
        fe = new d();
      class me {
        constructor(t = new d(), e = new d(0, 0, -1)) {
          (this.origin = t), (this.direction = e);
        }
        set(t, e) {
          return this.origin.copy(t), this.direction.copy(e), this;
        }
        copy(t) {
          return (
            this.origin.copy(t.origin), this.direction.copy(t.direction), this
          );
        }
        at(t, e) {
          return e.copy(this.direction).multiplyScalar(t).add(this.origin);
        }
        lookAt(t) {
          return this.direction.copy(t).sub(this.origin).normalize(), this;
        }
        recast(t) {
          return this.origin.copy(this.at(t, le)), this;
        }
        closestPointToPoint(t, e) {
          e.subVectors(t, this.origin);
          const n = e.dot(this.direction);
          return n < 0
            ? e.copy(this.origin)
            : e.copy(this.direction).multiplyScalar(n).add(this.origin);
        }
        distanceToPoint(t) {
          return Math.sqrt(this.distanceSqToPoint(t));
        }
        distanceSqToPoint(t) {
          const e = le.subVectors(t, this.origin).dot(this.direction);
          return e < 0
            ? this.origin.distanceToSquared(t)
            : (le.copy(this.direction).multiplyScalar(e).add(this.origin),
              le.distanceToSquared(t));
        }
        distanceSqToSegment(t, e, n, i) {
          ce.copy(t).add(e).multiplyScalar(0.5),
            ue.copy(e).sub(t).normalize(),
            he.copy(this.origin).sub(ce);
          const r = 0.5 * t.distanceTo(e),
            a = -this.direction.dot(ue),
            s = he.dot(this.direction),
            o = -he.dot(ue),
            l = he.lengthSq(),
            c = Math.abs(1 - a * a);
          let u, h, d, p;
          if (c > 0)
            if (((u = a * o - s), (h = a * s - o), (p = r * c), u >= 0))
              if (h >= -p)
                if (h <= p) {
                  const t = 1 / c;
                  (u *= t),
                    (h *= t),
                    (d = u * (u + a * h + 2 * s) + h * (a * u + h + 2 * o) + l);
                } else
                  (h = r),
                    (u = Math.max(0, -(a * h + s))),
                    (d = -u * u + h * (h + 2 * o) + l);
              else
                (h = -r),
                  (u = Math.max(0, -(a * h + s))),
                  (d = -u * u + h * (h + 2 * o) + l);
            else
              h <= -p
                ? ((u = Math.max(0, -(-a * r + s))),
                  (h = u > 0 ? -r : Math.min(Math.max(-r, -o), r)),
                  (d = -u * u + h * (h + 2 * o) + l))
                : h <= p
                ? ((u = 0),
                  (h = Math.min(Math.max(-r, -o), r)),
                  (d = h * (h + 2 * o) + l))
                : ((u = Math.max(0, -(a * r + s))),
                  (h = u > 0 ? r : Math.min(Math.max(-r, -o), r)),
                  (d = -u * u + h * (h + 2 * o) + l));
          else
            (h = a > 0 ? -r : r),
              (u = Math.max(0, -(a * h + s))),
              (d = -u * u + h * (h + 2 * o) + l);
          return (
            n && n.copy(this.direction).multiplyScalar(u).add(this.origin),
            i && i.copy(ue).multiplyScalar(h).add(ce),
            d
          );
        }
        intersectSphere(t, e) {
          le.subVectors(t.center, this.origin);
          const n = le.dot(this.direction),
            i = le.dot(le) - n * n,
            r = t.radius * t.radius;
          if (i > r) return null;
          const a = Math.sqrt(r - i),
            s = n - a,
            o = n + a;
          return s < 0 && o < 0 ? null : s < 0 ? this.at(o, e) : this.at(s, e);
        }
        intersectsSphere(t) {
          return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
        }
        distanceToPlane(t) {
          const e = t.normal.dot(this.direction);
          if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
          const n = -(this.origin.dot(t.normal) + t.constant) / e;
          return n >= 0 ? n : null;
        }
        intersectPlane(t, e) {
          const n = this.distanceToPlane(t);
          return null === n ? null : this.at(n, e);
        }
        intersectsPlane(t) {
          const e = t.distanceToPoint(this.origin);
          return 0 === e || t.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t, e) {
          let n, i, r, a, s, o;
          const l = 1 / this.direction.x,
            c = 1 / this.direction.y,
            u = 1 / this.direction.z,
            h = this.origin;
          return (
            l >= 0
              ? ((n = (t.min.x - h.x) * l), (i = (t.max.x - h.x) * l))
              : ((n = (t.max.x - h.x) * l), (i = (t.min.x - h.x) * l)),
            c >= 0
              ? ((r = (t.min.y - h.y) * c), (a = (t.max.y - h.y) * c))
              : ((r = (t.max.y - h.y) * c), (a = (t.min.y - h.y) * c)),
            n > a || r > i
              ? null
              : ((r > n || isNaN(n)) && (n = r),
                (a < i || isNaN(i)) && (i = a),
                u >= 0
                  ? ((s = (t.min.z - h.z) * u), (o = (t.max.z - h.z) * u))
                  : ((s = (t.max.z - h.z) * u), (o = (t.min.z - h.z) * u)),
                n > o || s > i
                  ? null
                  : ((s > n || n != n) && (n = s),
                    (o < i || i != i) && (i = o),
                    i < 0 ? null : this.at(n >= 0 ? n : i, e)))
          );
        }
        intersectsBox(t) {
          return null !== this.intersectBox(t, le);
        }
        intersectTriangle(t, e, n, i, r) {
          de.subVectors(e, t), pe.subVectors(n, t), fe.crossVectors(de, pe);
          let a,
            s = this.direction.dot(fe);
          if (s > 0) {
            if (i) return null;
            a = 1;
          } else {
            if (!(s < 0)) return null;
            (a = -1), (s = -s);
          }
          he.subVectors(this.origin, t);
          const o = a * this.direction.dot(pe.crossVectors(he, pe));
          if (o < 0) return null;
          const l = a * this.direction.dot(de.cross(he));
          if (l < 0) return null;
          if (o + l > s) return null;
          const c = -a * he.dot(fe);
          return c < 0 ? null : this.at(c / s, r);
        }
        applyMatrix4(t) {
          return (
            this.origin.applyMatrix4(t),
            this.direction.transformDirection(t),
            this
          );
        }
        equals(t) {
          return (
            t.origin.equals(this.origin) && t.direction.equals(this.direction)
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      function ge(t) {
        return t < 0.04045
          ? 0.0773993808 * t
          : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
      }
      function _e(t) {
        return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
      }
      const ve = { [Lt]: { [Dt]: ge }, [Dt]: { [Lt]: _e } },
        xe = {
          legacyMode: !0,
          get workingColorSpace() {
            return Dt;
          },
          set workingColorSpace(t) {
            console.warn(
              "THREE.ColorManagement: .workingColorSpace is readonly."
            );
          },
          convert: function (t, e, n) {
            if (this.legacyMode || e === n || !e || !n) return t;
            if (ve[e] && void 0 !== ve[e][n]) {
              const i = ve[e][n];
              return (t.r = i(t.r)), (t.g = i(t.g)), (t.b = i(t.b)), t;
            }
            throw new Error("Unsupported color space conversion.");
          },
          fromWorkingColorSpace: function (t, e) {
            return this.convert(t, this.workingColorSpace, e);
          },
          toWorkingColorSpace: function (t, e) {
            return this.convert(t, e, this.workingColorSpace);
          },
        },
        Me = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        },
        ye = { r: 0, g: 0, b: 0 },
        Ee = { h: 0, s: 0, l: 0 },
        Se = { h: 0, s: 0, l: 0 };
      function be(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + 6 * (e - t) * (2 / 3 - n)
            : t
        );
      }
      function Te(t, e) {
        return (e.r = t.r), (e.g = t.g), (e.b = t.b), e;
      }
      class we {
        constructor(t, e, n) {
          return (
            (this.isColor = !0),
            (this.r = 1),
            (this.g = 1),
            (this.b = 1),
            void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
          );
        }
        set(t) {
          return (
            t && t.isColor
              ? this.copy(t)
              : "number" == typeof t
              ? this.setHex(t)
              : "string" == typeof t && this.setStyle(t),
            this
          );
        }
        setScalar(t) {
          return (this.r = t), (this.g = t), (this.b = t), this;
        }
        setHex(t, e = "srgb") {
          return (
            (t = Math.floor(t)),
            (this.r = ((t >> 16) & 255) / 255),
            (this.g = ((t >> 8) & 255) / 255),
            (this.b = (255 & t) / 255),
            xe.toWorkingColorSpace(this, e),
            this
          );
        }
        setRGB(t, e, n, i = "srgb-linear") {
          return (
            (this.r = t),
            (this.g = e),
            (this.b = n),
            xe.toWorkingColorSpace(this, i),
            this
          );
        }
        setHSL(t, e, n, i = "srgb-linear") {
          if (
            ((t = ((t % (r = 1)) + r) % r),
            (e = a(e, 0, 1)),
            (n = a(n, 0, 1)),
            0 === e)
          )
            this.r = this.g = this.b = n;
          else {
            const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
              r = 2 * n - i;
            (this.r = be(r, i, t + 1 / 3)),
              (this.g = be(r, i, t)),
              (this.b = be(r, i, t - 1 / 3));
          }
          var r;
          return xe.toWorkingColorSpace(this, i), this;
        }
        setStyle(t, e = "srgb") {
          function n(e) {
            void 0 !== e &&
              parseFloat(e) < 1 &&
              console.warn(
                "THREE.Color: Alpha component of " + t + " will be ignored."
              );
          }
          let i;
          if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t))) {
            let t;
            const r = i[1],
              a = i[2];
            switch (r) {
              case "rgb":
              case "rgba":
                if (
                  (t =
                    /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                      a
                    ))
                )
                  return (
                    (this.r = Math.min(255, parseInt(t[1], 10)) / 255),
                    (this.g = Math.min(255, parseInt(t[2], 10)) / 255),
                    (this.b = Math.min(255, parseInt(t[3], 10)) / 255),
                    xe.toWorkingColorSpace(this, e),
                    n(t[4]),
                    this
                  );
                if (
                  (t =
                    /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                      a
                    ))
                )
                  return (
                    (this.r = Math.min(100, parseInt(t[1], 10)) / 100),
                    (this.g = Math.min(100, parseInt(t[2], 10)) / 100),
                    (this.b = Math.min(100, parseInt(t[3], 10)) / 100),
                    xe.toWorkingColorSpace(this, e),
                    n(t[4]),
                    this
                  );
                break;
              case "hsl":
              case "hsla":
                if (
                  (t =
                    /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                      a
                    ))
                ) {
                  const i = parseFloat(t[1]) / 360,
                    r = parseFloat(t[2]) / 100,
                    a = parseFloat(t[3]) / 100;
                  return n(t[4]), this.setHSL(i, r, a, e);
                }
            }
          } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(t))) {
            const t = i[1],
              n = t.length;
            if (3 === n)
              return (
                (this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255),
                (this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255),
                (this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255),
                xe.toWorkingColorSpace(this, e),
                this
              );
            if (6 === n)
              return (
                (this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255),
                (this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255),
                (this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255),
                xe.toWorkingColorSpace(this, e),
                this
              );
          }
          return t && t.length > 0 ? this.setColorName(t, e) : this;
        }
        setColorName(t, e = "srgb") {
          const n = Me[t.toLowerCase()];
          return (
            void 0 !== n
              ? this.setHex(n, e)
              : console.warn("THREE.Color: Unknown color " + t),
            this
          );
        }
        clone() {
          return new this.constructor(this.r, this.g, this.b);
        }
        copy(t) {
          return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
        }
        copySRGBToLinear(t) {
          return (
            (this.r = ge(t.r)), (this.g = ge(t.g)), (this.b = ge(t.b)), this
          );
        }
        copyLinearToSRGB(t) {
          return (
            (this.r = _e(t.r)), (this.g = _e(t.g)), (this.b = _e(t.b)), this
          );
        }
        convertSRGBToLinear() {
          return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
          return this.copyLinearToSRGB(this), this;
        }
        getHex(t = "srgb") {
          return (
            xe.fromWorkingColorSpace(Te(this, ye), t),
            (a(255 * ye.r, 0, 255) << 16) ^
              (a(255 * ye.g, 0, 255) << 8) ^
              (a(255 * ye.b, 0, 255) << 0)
          );
        }
        getHexString(t = "srgb") {
          return ("000000" + this.getHex(t).toString(16)).slice(-6);
        }
        getHSL(t, e = "srgb-linear") {
          xe.fromWorkingColorSpace(Te(this, ye), e);
          const n = ye.r,
            i = ye.g,
            r = ye.b,
            a = Math.max(n, i, r),
            s = Math.min(n, i, r);
          let o, l;
          const c = (s + a) / 2;
          if (s === a) (o = 0), (l = 0);
          else {
            const t = a - s;
            switch (((l = c <= 0.5 ? t / (a + s) : t / (2 - a - s)), a)) {
              case n:
                o = (i - r) / t + (i < r ? 6 : 0);
                break;
              case i:
                o = (r - n) / t + 2;
                break;
              case r:
                o = (n - i) / t + 4;
            }
            o /= 6;
          }
          return (t.h = o), (t.s = l), (t.l = c), t;
        }
        getRGB(t, e = "srgb-linear") {
          return (
            xe.fromWorkingColorSpace(Te(this, ye), e),
            (t.r = ye.r),
            (t.g = ye.g),
            (t.b = ye.b),
            t
          );
        }
        getStyle(t = "srgb") {
          return (
            xe.fromWorkingColorSpace(Te(this, ye), t),
            t !== Lt
              ? `color(${t} ${ye.r} ${ye.g} ${ye.b})`
              : `rgb(${(255 * ye.r) | 0},${(255 * ye.g) | 0},${
                  (255 * ye.b) | 0
                })`
          );
        }
        offsetHSL(t, e, n) {
          return (
            this.getHSL(Ee),
            (Ee.h += t),
            (Ee.s += e),
            (Ee.l += n),
            this.setHSL(Ee.h, Ee.s, Ee.l),
            this
          );
        }
        add(t) {
          return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
        }
        addColors(t, e) {
          return (
            (this.r = t.r + e.r),
            (this.g = t.g + e.g),
            (this.b = t.b + e.b),
            this
          );
        }
        addScalar(t) {
          return (this.r += t), (this.g += t), (this.b += t), this;
        }
        sub(t) {
          return (
            (this.r = Math.max(0, this.r - t.r)),
            (this.g = Math.max(0, this.g - t.g)),
            (this.b = Math.max(0, this.b - t.b)),
            this
          );
        }
        multiply(t) {
          return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
        }
        multiplyScalar(t) {
          return (this.r *= t), (this.g *= t), (this.b *= t), this;
        }
        lerp(t, e) {
          return (
            (this.r += (t.r - this.r) * e),
            (this.g += (t.g - this.g) * e),
            (this.b += (t.b - this.b) * e),
            this
          );
        }
        lerpColors(t, e, n) {
          return (
            (this.r = t.r + (e.r - t.r) * n),
            (this.g = t.g + (e.g - t.g) * n),
            (this.b = t.b + (e.b - t.b) * n),
            this
          );
        }
        lerpHSL(t, e) {
          this.getHSL(Ee), t.getHSL(Se);
          const n = s(Ee.h, Se.h, e),
            i = s(Ee.s, Se.s, e),
            r = s(Ee.l, Se.l, e);
          return this.setHSL(n, i, r), this;
        }
        equals(t) {
          return t.r === this.r && t.g === this.g && t.b === this.b;
        }
        fromArray(t, e = 0) {
          return (
            (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this
          );
        }
        toArray(t = [], e = 0) {
          return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
        }
        fromBufferAttribute(t, e) {
          return (
            (this.r = t.getX(e)),
            (this.g = t.getY(e)),
            (this.b = t.getZ(e)),
            this
          );
        }
        toJSON() {
          return this.getHex();
        }
        *[Symbol.iterator]() {
          yield this.r, yield this.g, yield this.b;
        }
      }
      we.NAMES = Me;
      class Ae extends ne {
        constructor(t) {
          super(),
            (this.isPointsMaterial = !0),
            (this.type = "PointsMaterial"),
            (this.color = new we(16777215)),
            (this.map = null),
            (this.alphaMap = null),
            (this.size = 1),
            (this.sizeAttenuation = !0),
            (this.fog = !0),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.size = t.size),
            (this.sizeAttenuation = t.sizeAttenuation),
            (this.fog = t.fog),
            this
          );
        }
      }
      const Re = new m(),
        Ce = new me(),
        Le = new Wt(),
        De = new d();
      class Pe extends H {
        constructor(t = new te(), e = new Ae()) {
          super(),
            (this.isPoints = !0),
            (this.type = "Points"),
            (this.geometry = t),
            (this.material = e),
            this.updateMorphTargets();
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            (this.material = t.material),
            (this.geometry = t.geometry),
            this
          );
        }
        raycast(t, e) {
          const n = this.geometry,
            i = this.matrixWorld,
            r = t.params.Points.threshold,
            a = n.drawRange;
          if (
            (null === n.boundingSphere && n.computeBoundingSphere(),
            Le.copy(n.boundingSphere),
            Le.applyMatrix4(i),
            (Le.radius += r),
            !1 === t.ray.intersectsSphere(Le))
          )
            return;
          Re.copy(i).invert(), Ce.copy(t.ray).applyMatrix4(Re);
          const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = s * s,
            l = n.index,
            c = n.attributes.position;
          if (null !== l)
            for (
              let n = Math.max(0, a.start),
                r = Math.min(l.count, a.start + a.count);
              n < r;
              n++
            ) {
              const r = l.getX(n);
              De.fromBufferAttribute(c, r), Ie(De, r, o, i, t, e, this);
            }
          else
            for (
              let n = Math.max(0, a.start),
                r = Math.min(c.count, a.start + a.count);
              n < r;
              n++
            )
              De.fromBufferAttribute(c, n), Ie(De, n, o, i, t, e, this);
        }
        updateMorphTargets() {
          const t = this.geometry.morphAttributes,
            e = Object.keys(t);
          if (e.length > 0) {
            const n = t[e[0]];
            if (void 0 !== n) {
              (this.morphTargetInfluences = []),
                (this.morphTargetDictionary = {});
              for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t].name || String(t);
                this.morphTargetInfluences.push(0),
                  (this.morphTargetDictionary[e] = t);
              }
            }
          }
        }
      }
      function Ie(t, e, n, i, r, a, s) {
        const o = Ce.distanceSqToPoint(t);
        if (o < n) {
          const n = new d();
          Ce.closestPointToPoint(t, n), n.applyMatrix4(i);
          const l = r.ray.origin.distanceTo(n);
          if (l < r.near || l > r.far) return;
          a.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: n,
            index: e,
            face: null,
            object: s,
          });
        }
      }
      const Ue = new d(),
        Ne = new d(),
        Oe = new A();
      class Fe {
        constructor(t = new d(1, 0, 0), e = 0) {
          (this.isPlane = !0), (this.normal = t), (this.constant = e);
        }
        set(t, e) {
          return this.normal.copy(t), (this.constant = e), this;
        }
        setComponents(t, e, n, i) {
          return this.normal.set(t, e, n), (this.constant = i), this;
        }
        setFromNormalAndCoplanarPoint(t, e) {
          return (
            this.normal.copy(t), (this.constant = -e.dot(this.normal)), this
          );
        }
        setFromCoplanarPoints(t, e, n) {
          const i = Ue.subVectors(n, e).cross(Ne.subVectors(t, e)).normalize();
          return this.setFromNormalAndCoplanarPoint(i, t), this;
        }
        copy(t) {
          return this.normal.copy(t.normal), (this.constant = t.constant), this;
        }
        normalize() {
          const t = 1 / this.normal.length();
          return this.normal.multiplyScalar(t), (this.constant *= t), this;
        }
        negate() {
          return (this.constant *= -1), this.normal.negate(), this;
        }
        distanceToPoint(t) {
          return this.normal.dot(t) + this.constant;
        }
        distanceToSphere(t) {
          return this.distanceToPoint(t.center) - t.radius;
        }
        projectPoint(t, e) {
          return e
            .copy(this.normal)
            .multiplyScalar(-this.distanceToPoint(t))
            .add(t);
        }
        intersectLine(t, e) {
          const n = t.delta(Ue),
            i = this.normal.dot(n);
          if (0 === i)
            return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
          const r = -(t.start.dot(this.normal) + this.constant) / i;
          return r < 0 || r > 1
            ? null
            : e.copy(n).multiplyScalar(r).add(t.start);
        }
        intersectsLine(t) {
          const e = this.distanceToPoint(t.start),
            n = this.distanceToPoint(t.end);
          return (e < 0 && n > 0) || (n < 0 && e > 0);
        }
        intersectsBox(t) {
          return t.intersectsPlane(this);
        }
        intersectsSphere(t) {
          return t.intersectsPlane(this);
        }
        coplanarPoint(t) {
          return t.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t, e) {
          const n = e || Oe.getNormalMatrix(t),
            i = this.coplanarPoint(Ue).applyMatrix4(t),
            r = this.normal.applyMatrix3(n).normalize();
          return (this.constant = -i.dot(r)), this;
        }
        translate(t) {
          return (this.constant -= t.dot(this.normal)), this;
        }
        equals(t) {
          return t.normal.equals(this.normal) && t.constant === this.constant;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      const ze = new Wt(),
        Be = new d();
      class Ge {
        constructor(
          t = new Fe(),
          e = new Fe(),
          n = new Fe(),
          i = new Fe(),
          r = new Fe(),
          a = new Fe()
        ) {
          this.planes = [t, e, n, i, r, a];
        }
        set(t, e, n, i, r, a) {
          const s = this.planes;
          return (
            s[0].copy(t),
            s[1].copy(e),
            s[2].copy(n),
            s[3].copy(i),
            s[4].copy(r),
            s[5].copy(a),
            this
          );
        }
        copy(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
          return this;
        }
        setFromProjectionMatrix(t) {
          const e = this.planes,
            n = t.elements,
            i = n[0],
            r = n[1],
            a = n[2],
            s = n[3],
            o = n[4],
            l = n[5],
            c = n[6],
            u = n[7],
            h = n[8],
            d = n[9],
            p = n[10],
            f = n[11],
            m = n[12],
            g = n[13],
            _ = n[14],
            v = n[15];
          return (
            e[0].setComponents(s - i, u - o, f - h, v - m).normalize(),
            e[1].setComponents(s + i, u + o, f + h, v + m).normalize(),
            e[2].setComponents(s + r, u + l, f + d, v + g).normalize(),
            e[3].setComponents(s - r, u - l, f - d, v - g).normalize(),
            e[4].setComponents(s - a, u - c, f - p, v - _).normalize(),
            e[5].setComponents(s + a, u + c, f + p, v + _).normalize(),
            this
          );
        }
        intersectsObject(t) {
          const e = t.geometry;
          return (
            null === e.boundingSphere && e.computeBoundingSphere(),
            ze.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
            this.intersectsSphere(ze)
          );
        }
        intersectsSprite(t) {
          return (
            ze.center.set(0, 0, 0),
            (ze.radius = 0.7071067811865476),
            ze.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(ze)
          );
        }
        intersectsSphere(t) {
          const e = this.planes,
            n = t.center,
            i = -t.radius;
          for (let t = 0; t < 6; t++)
            if (e[t].distanceToPoint(n) < i) return !1;
          return !0;
        }
        intersectsBox(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) {
            const i = e[n];
            if (
              ((Be.x = i.normal.x > 0 ? t.max.x : t.min.x),
              (Be.y = i.normal.y > 0 ? t.max.y : t.min.y),
              (Be.z = i.normal.z > 0 ? t.max.z : t.min.z),
              i.distanceToPoint(Be) < 0)
            )
              return !1;
          }
          return !0;
        }
        containsPoint(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++)
            if (e[n].distanceToPoint(t) < 0) return !1;
          return !0;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      class He {
        constructor(t = 0, e = 0, n = 0, i = 1) {
          (He.prototype.isVector4 = !0),
            (this.x = t),
            (this.y = e),
            (this.z = n),
            (this.w = i);
        }
        get width() {
          return this.z;
        }
        set width(t) {
          this.z = t;
        }
        get height() {
          return this.w;
        }
        set height(t) {
          this.w = t;
        }
        set(t, e, n, i) {
          return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
        }
        setScalar(t) {
          return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
        }
        setX(t) {
          return (this.x = t), this;
        }
        setY(t) {
          return (this.y = t), this;
        }
        setZ(t) {
          return (this.z = t), this;
        }
        setW(t) {
          return (this.w = t), this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            case 3:
              this.w = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            case 3:
              return this.w;
            default:
              throw new Error("index is out of range: " + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t) {
          return (
            (this.x = t.x),
            (this.y = t.y),
            (this.z = t.z),
            (this.w = void 0 !== t.w ? t.w : 1),
            this
          );
        }
        add(t) {
          return (
            (this.x += t.x),
            (this.y += t.y),
            (this.z += t.z),
            (this.w += t.w),
            this
          );
        }
        addScalar(t) {
          return (
            (this.x += t), (this.y += t), (this.z += t), (this.w += t), this
          );
        }
        addVectors(t, e) {
          return (
            (this.x = t.x + e.x),
            (this.y = t.y + e.y),
            (this.z = t.z + e.z),
            (this.w = t.w + e.w),
            this
          );
        }
        addScaledVector(t, e) {
          return (
            (this.x += t.x * e),
            (this.y += t.y * e),
            (this.z += t.z * e),
            (this.w += t.w * e),
            this
          );
        }
        sub(t) {
          return (
            (this.x -= t.x),
            (this.y -= t.y),
            (this.z -= t.z),
            (this.w -= t.w),
            this
          );
        }
        subScalar(t) {
          return (
            (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this
          );
        }
        subVectors(t, e) {
          return (
            (this.x = t.x - e.x),
            (this.y = t.y - e.y),
            (this.z = t.z - e.z),
            (this.w = t.w - e.w),
            this
          );
        }
        multiply(t) {
          return (
            (this.x *= t.x),
            (this.y *= t.y),
            (this.z *= t.z),
            (this.w *= t.w),
            this
          );
        }
        multiplyScalar(t) {
          return (
            (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
          );
        }
        applyMatrix4(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = this.w,
            a = t.elements;
          return (
            (this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r),
            (this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r),
            (this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r),
            (this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r),
            this
          );
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        setAxisAngleFromQuaternion(t) {
          this.w = 2 * Math.acos(t.w);
          const e = Math.sqrt(1 - t.w * t.w);
          return (
            e < 1e-4
              ? ((this.x = 1), (this.y = 0), (this.z = 0))
              : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
            this
          );
        }
        setAxisAngleFromRotationMatrix(t) {
          let e, n, i, r;
          const a = 0.01,
            s = 0.1,
            o = t.elements,
            l = o[0],
            c = o[4],
            u = o[8],
            h = o[1],
            d = o[5],
            p = o[9],
            f = o[2],
            m = o[6],
            g = o[10];
          if (
            Math.abs(c - h) < a &&
            Math.abs(u - f) < a &&
            Math.abs(p - m) < a
          ) {
            if (
              Math.abs(c + h) < s &&
              Math.abs(u + f) < s &&
              Math.abs(p + m) < s &&
              Math.abs(l + d + g - 3) < s
            )
              return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            const t = (l + 1) / 2,
              o = (d + 1) / 2,
              _ = (g + 1) / 2,
              v = (c + h) / 4,
              x = (u + f) / 4,
              M = (p + m) / 4;
            return (
              t > o && t > _
                ? t < a
                  ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
                  : ((n = Math.sqrt(t)), (i = v / n), (r = x / n))
                : o > _
                ? o < a
                  ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
                  : ((i = Math.sqrt(o)), (n = v / i), (r = M / i))
                : _ < a
                ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
                : ((r = Math.sqrt(_)), (n = x / r), (i = M / r)),
              this.set(n, i, r, e),
              this
            );
          }
          let _ = Math.sqrt(
            (m - p) * (m - p) + (u - f) * (u - f) + (h - c) * (h - c)
          );
          return (
            Math.abs(_) < 0.001 && (_ = 1),
            (this.x = (m - p) / _),
            (this.y = (u - f) / _),
            (this.z = (h - c) / _),
            (this.w = Math.acos((l + d + g - 1) / 2)),
            this
          );
        }
        min(t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            (this.z = Math.min(this.z, t.z)),
            (this.w = Math.min(this.w, t.w)),
            this
          );
        }
        max(t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            (this.z = Math.max(this.z, t.z)),
            (this.w = Math.max(this.w, t.w)),
            this
          );
        }
        clamp(t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            (this.z = Math.max(t.z, Math.min(e.z, this.z))),
            (this.w = Math.max(t.w, Math.min(e.w, this.w))),
            this
          );
        }
        clampScalar(t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            (this.z = Math.max(t, Math.min(e, this.z))),
            (this.w = Math.max(t, Math.min(e, this.w))),
            this
          );
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(t, Math.min(e, n))
          );
        }
        floor() {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            (this.w = Math.floor(this.w)),
            this
          );
        }
        ceil() {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            (this.w = Math.ceil(this.w)),
            this
          );
        }
        round() {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            (this.w = Math.round(this.w)),
            this
          );
        }
        roundToZero() {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
            this
          );
        }
        negate() {
          return (
            (this.x = -this.x),
            (this.y = -this.y),
            (this.z = -this.z),
            (this.w = -this.w),
            this
          );
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
        }
        lengthSq() {
          return (
            this.x * this.x +
            this.y * this.y +
            this.z * this.z +
            this.w * this.w
          );
        }
        length() {
          return Math.sqrt(
            this.x * this.x +
              this.y * this.y +
              this.z * this.z +
              this.w * this.w
          );
        }
        manhattanLength() {
          return (
            Math.abs(this.x) +
            Math.abs(this.y) +
            Math.abs(this.z) +
            Math.abs(this.w)
          );
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return (
            (this.x += (t.x - this.x) * e),
            (this.y += (t.y - this.y) * e),
            (this.z += (t.z - this.z) * e),
            (this.w += (t.w - this.w) * e),
            this
          );
        }
        lerpVectors(t, e, n) {
          return (
            (this.x = t.x + (e.x - t.x) * n),
            (this.y = t.y + (e.y - t.y) * n),
            (this.z = t.z + (e.z - t.z) * n),
            (this.w = t.w + (e.w - t.w) * n),
            this
          );
        }
        equals(t) {
          return (
            t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
          );
        }
        fromArray(t, e = 0) {
          return (
            (this.x = t[e]),
            (this.y = t[e + 1]),
            (this.z = t[e + 2]),
            (this.w = t[e + 3]),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this.x),
            (t[e + 1] = this.y),
            (t[e + 2] = this.z),
            (t[e + 3] = this.w),
            t
          );
        }
        fromBufferAttribute(t, e) {
          return (
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            (this.z = t.getZ(e)),
            (this.w = t.getW(e)),
            this
          );
        }
        random() {
          return (
            (this.x = Math.random()),
            (this.y = Math.random()),
            (this.z = Math.random()),
            (this.w = Math.random()),
            this
          );
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z, yield this.w;
        }
      }
      function Ve() {
        let t = null,
          e = !1,
          n = null,
          i = null;
        function r(e, a) {
          n(e, a), (i = t.requestAnimationFrame(r));
        }
        return {
          start: function () {
            !0 !== e &&
              null !== n &&
              ((i = t.requestAnimationFrame(r)), (e = !0));
          },
          stop: function () {
            t.cancelAnimationFrame(i), (e = !1);
          },
          setAnimationLoop: function (t) {
            n = t;
          },
          setContext: function (e) {
            t = e;
          },
        };
      }
      function ke(t, e) {
        const n = e.isWebGL2,
          i = new WeakMap();
        return {
          get: function (t) {
            return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
          },
          remove: function (e) {
            e.isInterleavedBufferAttribute && (e = e.data);
            const n = i.get(e);
            n && (t.deleteBuffer(n.buffer), i.delete(e));
          },
          update: function (e, r) {
            if (e.isGLBufferAttribute) {
              const t = i.get(e);
              return void (
                (!t || t.version < e.version) &&
                i.set(e, {
                  buffer: e.buffer,
                  type: e.type,
                  bytesPerElement: e.elementSize,
                  version: e.version,
                })
              );
            }
            e.isInterleavedBufferAttribute && (e = e.data);
            const a = i.get(e);
            void 0 === a
              ? i.set(
                  e,
                  (function (e, i) {
                    const r = e.array,
                      a = e.usage,
                      s = t.createBuffer();
                    let o;
                    if (
                      (t.bindBuffer(i, s),
                      t.bufferData(i, r, a),
                      e.onUploadCallback(),
                      r instanceof Float32Array)
                    )
                      o = t.FLOAT;
                    else if (r instanceof Uint16Array)
                      if (e.isFloat16BufferAttribute) {
                        if (!n)
                          throw new Error(
                            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
                          );
                        o = t.HALF_FLOAT;
                      } else o = t.UNSIGNED_SHORT;
                    else if (r instanceof Int16Array) o = t.SHORT;
                    else if (r instanceof Uint32Array) o = t.UNSIGNED_INT;
                    else if (r instanceof Int32Array) o = t.INT;
                    else if (r instanceof Int8Array) o = t.BYTE;
                    else if (r instanceof Uint8Array) o = t.UNSIGNED_BYTE;
                    else {
                      if (!(r instanceof Uint8ClampedArray))
                        throw new Error(
                          "THREE.WebGLAttributes: Unsupported buffer data format: " +
                            r
                        );
                      o = t.UNSIGNED_BYTE;
                    }
                    return {
                      buffer: s,
                      type: o,
                      bytesPerElement: r.BYTES_PER_ELEMENT,
                      version: e.version,
                    };
                  })(e, r)
                )
              : a.version < e.version &&
                ((function (e, i, r) {
                  const a = i.array,
                    s = i.updateRange;
                  t.bindBuffer(r, e),
                    -1 === s.count
                      ? t.bufferSubData(r, 0, a)
                      : (n
                          ? t.bufferSubData(
                              r,
                              s.offset * a.BYTES_PER_ELEMENT,
                              a,
                              s.offset,
                              s.count
                            )
                          : t.bufferSubData(
                              r,
                              s.offset * a.BYTES_PER_ELEMENT,
                              a.subarray(s.offset, s.offset + s.count)
                            ),
                        (s.count = -1));
                })(a.buffer, e, r),
                (a.version = e.version));
          },
        };
      }
      class We extends te {
        constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
          super(),
            (this.type = "BoxGeometry"),
            (this.parameters = {
              width: t,
              height: e,
              depth: n,
              widthSegments: i,
              heightSegments: r,
              depthSegments: a,
            });
          const s = this;
          (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
          const o = [],
            l = [],
            c = [],
            u = [];
          let h = 0,
            p = 0;
          function f(t, e, n, i, r, a, f, m, g, _, v) {
            const x = a / g,
              M = f / _,
              y = a / 2,
              E = f / 2,
              S = m / 2,
              b = g + 1,
              T = _ + 1;
            let w = 0,
              A = 0;
            const R = new d();
            for (let a = 0; a < T; a++) {
              const s = a * M - E;
              for (let o = 0; o < b; o++) {
                const h = o * x - y;
                (R[t] = h * i),
                  (R[e] = s * r),
                  (R[n] = S),
                  l.push(R.x, R.y, R.z),
                  (R[t] = 0),
                  (R[e] = 0),
                  (R[n] = m > 0 ? 1 : -1),
                  c.push(R.x, R.y, R.z),
                  u.push(o / g),
                  u.push(1 - a / _),
                  (w += 1);
              }
            }
            for (let t = 0; t < _; t++)
              for (let e = 0; e < g; e++) {
                const n = h + e + b * t,
                  i = h + e + b * (t + 1),
                  r = h + (e + 1) + b * (t + 1),
                  a = h + (e + 1) + b * t;
                o.push(n, i, a), o.push(i, r, a), (A += 6);
              }
            s.addGroup(p, A, v), (p += A), (h += w);
          }
          f("z", "y", "x", -1, -1, n, e, t, a, r, 0),
            f("z", "y", "x", 1, -1, n, e, -t, a, r, 1),
            f("x", "z", "y", 1, 1, t, n, e, i, a, 2),
            f("x", "z", "y", 1, -1, t, n, -e, i, a, 3),
            f("x", "y", "z", 1, -1, t, e, n, i, r, 4),
            f("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
            this.setIndex(o),
            this.setAttribute("position", new Gt(l, 3)),
            this.setAttribute("normal", new Gt(c, 3)),
            this.setAttribute("uv", new Gt(u, 2));
        }
        static fromJSON(t) {
          return new We(
            t.width,
            t.height,
            t.depth,
            t.widthSegments,
            t.heightSegments,
            t.depthSegments
          );
        }
      }
      class Xe extends te {
        constructor(t = 1, e = 1, n = 1, i = 1) {
          super(),
            (this.type = "PlaneGeometry"),
            (this.parameters = {
              width: t,
              height: e,
              widthSegments: n,
              heightSegments: i,
            });
          const r = t / 2,
            a = e / 2,
            s = Math.floor(n),
            o = Math.floor(i),
            l = s + 1,
            c = o + 1,
            u = t / s,
            h = e / o,
            d = [],
            p = [],
            f = [],
            m = [];
          for (let t = 0; t < c; t++) {
            const e = t * h - a;
            for (let n = 0; n < l; n++) {
              const i = n * u - r;
              p.push(i, -e, 0),
                f.push(0, 0, 1),
                m.push(n / s),
                m.push(1 - t / o);
            }
          }
          for (let t = 0; t < o; t++)
            for (let e = 0; e < s; e++) {
              const n = e + l * t,
                i = e + l * (t + 1),
                r = e + 1 + l * (t + 1),
                a = e + 1 + l * t;
              d.push(n, i, a), d.push(i, r, a);
            }
          this.setIndex(d),
            this.setAttribute("position", new Gt(p, 3)),
            this.setAttribute("normal", new Gt(f, 3)),
            this.setAttribute("uv", new Gt(m, 2));
        }
        static fromJSON(t) {
          return new Xe(t.width, t.height, t.widthSegments, t.heightSegments);
        }
      }
      const qe = new d(),
        je = new d(),
        Ye = new d(),
        Ze = new d(),
        Ke = new d(),
        Je = new d(),
        Qe = new d(),
        $e = new d(),
        tn = new d(),
        en = new d();
      class nn {
        constructor(t = new d(), e = new d(), n = new d()) {
          (this.a = t), (this.b = e), (this.c = n);
        }
        static getNormal(t, e, n, i) {
          i.subVectors(n, e), qe.subVectors(t, e), i.cross(qe);
          const r = i.lengthSq();
          return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
        }
        static getBarycoord(t, e, n, i, r) {
          qe.subVectors(i, e), je.subVectors(n, e), Ye.subVectors(t, e);
          const a = qe.dot(qe),
            s = qe.dot(je),
            o = qe.dot(Ye),
            l = je.dot(je),
            c = je.dot(Ye),
            u = a * l - s * s;
          if (0 === u) return r.set(-2, -1, -1);
          const h = 1 / u,
            d = (l * o - s * c) * h,
            p = (a * c - s * o) * h;
          return r.set(1 - d - p, p, d);
        }
        static containsPoint(t, e, n, i) {
          return (
            this.getBarycoord(t, e, n, i, Ze),
            Ze.x >= 0 && Ze.y >= 0 && Ze.x + Ze.y <= 1
          );
        }
        static getUV(t, e, n, i, r, a, s, o) {
          return (
            this.getBarycoord(t, e, n, i, Ze),
            o.set(0, 0),
            o.addScaledVector(r, Ze.x),
            o.addScaledVector(a, Ze.y),
            o.addScaledVector(s, Ze.z),
            o
          );
        }
        static isFrontFacing(t, e, n, i) {
          return (
            qe.subVectors(n, e), je.subVectors(t, e), qe.cross(je).dot(i) < 0
          );
        }
        set(t, e, n) {
          return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
        }
        setFromPointsAndIndices(t, e, n, i) {
          return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
        }
        setFromAttributeAndIndices(t, e, n, i) {
          return (
            this.a.fromBufferAttribute(t, e),
            this.b.fromBufferAttribute(t, n),
            this.c.fromBufferAttribute(t, i),
            this
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
        }
        getArea() {
          return (
            qe.subVectors(this.c, this.b),
            je.subVectors(this.a, this.b),
            0.5 * qe.cross(je).length()
          );
        }
        getMidpoint(t) {
          return t
            .addVectors(this.a, this.b)
            .add(this.c)
            .multiplyScalar(1 / 3);
        }
        getNormal(t) {
          return nn.getNormal(this.a, this.b, this.c, t);
        }
        getPlane(t) {
          return t.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t, e) {
          return nn.getBarycoord(t, this.a, this.b, this.c, e);
        }
        getUV(t, e, n, i, r) {
          return nn.getUV(t, this.a, this.b, this.c, e, n, i, r);
        }
        containsPoint(t) {
          return nn.containsPoint(t, this.a, this.b, this.c);
        }
        isFrontFacing(t) {
          return nn.isFrontFacing(this.a, this.b, this.c, t);
        }
        intersectsBox(t) {
          return t.intersectsTriangle(this);
        }
        closestPointToPoint(t, e) {
          const n = this.a,
            i = this.b,
            r = this.c;
          let a, s;
          Ke.subVectors(i, n), Je.subVectors(r, n), $e.subVectors(t, n);
          const o = Ke.dot($e),
            l = Je.dot($e);
          if (o <= 0 && l <= 0) return e.copy(n);
          tn.subVectors(t, i);
          const c = Ke.dot(tn),
            u = Je.dot(tn);
          if (c >= 0 && u <= c) return e.copy(i);
          const h = o * u - c * l;
          if (h <= 0 && o >= 0 && c <= 0)
            return (a = o / (o - c)), e.copy(n).addScaledVector(Ke, a);
          en.subVectors(t, r);
          const d = Ke.dot(en),
            p = Je.dot(en);
          if (p >= 0 && d <= p) return e.copy(r);
          const f = d * l - o * p;
          if (f <= 0 && l >= 0 && p <= 0)
            return (s = l / (l - p)), e.copy(n).addScaledVector(Je, s);
          const m = c * p - d * u;
          if (m <= 0 && u - c >= 0 && d - p >= 0)
            return (
              Qe.subVectors(r, i),
              (s = (u - c) / (u - c + (d - p))),
              e.copy(i).addScaledVector(Qe, s)
            );
          const g = 1 / (m + f + h);
          return (
            (a = f * g),
            (s = h * g),
            e.copy(n).addScaledVector(Ke, a).addScaledVector(Je, s)
          );
        }
        equals(t) {
          return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
        }
      }
      class rn extends ne {
        constructor(t) {
          super(),
            (this.isMeshBasicMaterial = !0),
            (this.type = "MeshBasicMaterial"),
            (this.color = new we(16777215)),
            (this.map = null),
            (this.lightMap = null),
            (this.lightMapIntensity = 1),
            (this.aoMap = null),
            (this.aoMapIntensity = 1),
            (this.specularMap = null),
            (this.alphaMap = null),
            (this.envMap = null),
            (this.combine = 0),
            (this.reflectivity = 1),
            (this.refractionRatio = 0.98),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.wireframeLinecap = "round"),
            (this.wireframeLinejoin = "round"),
            (this.fog = !0),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.lightMap = t.lightMap),
            (this.lightMapIntensity = t.lightMapIntensity),
            (this.aoMap = t.aoMap),
            (this.aoMapIntensity = t.aoMapIntensity),
            (this.specularMap = t.specularMap),
            (this.alphaMap = t.alphaMap),
            (this.envMap = t.envMap),
            (this.combine = t.combine),
            (this.reflectivity = t.reflectivity),
            (this.refractionRatio = t.refractionRatio),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.wireframeLinecap = t.wireframeLinecap),
            (this.wireframeLinejoin = t.wireframeLinejoin),
            (this.fog = t.fog),
            this
          );
        }
      }
      const an = new m(),
        sn = new me(),
        on = new Wt(),
        ln = new d(),
        cn = new d(),
        un = new d(),
        hn = new d(),
        dn = new d(),
        pn = new d(),
        fn = new d(),
        mn = new d(),
        gn = new d(),
        vn = new W(),
        xn = new W(),
        Mn = new W(),
        yn = new d(),
        En = new d();
      class Sn extends H {
        constructor(t = new te(), e = new rn()) {
          super(),
            (this.isMesh = !0),
            (this.type = "Mesh"),
            (this.geometry = t),
            (this.material = e),
            this.updateMorphTargets();
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            void 0 !== t.morphTargetInfluences &&
              (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
            void 0 !== t.morphTargetDictionary &&
              (this.morphTargetDictionary = Object.assign(
                {},
                t.morphTargetDictionary
              )),
            (this.material = t.material),
            (this.geometry = t.geometry),
            this
          );
        }
        updateMorphTargets() {
          const t = this.geometry.morphAttributes,
            e = Object.keys(t);
          if (e.length > 0) {
            const n = t[e[0]];
            if (void 0 !== n) {
              (this.morphTargetInfluences = []),
                (this.morphTargetDictionary = {});
              for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t].name || String(t);
                this.morphTargetInfluences.push(0),
                  (this.morphTargetDictionary[e] = t);
              }
            }
          }
        }
        raycast(t, e) {
          const n = this.geometry,
            i = this.material,
            r = this.matrixWorld;
          if (void 0 === i) return;
          if (
            (null === n.boundingSphere && n.computeBoundingSphere(),
            on.copy(n.boundingSphere),
            on.applyMatrix4(r),
            !1 === t.ray.intersectsSphere(on))
          )
            return;
          if (
            (an.copy(r).invert(),
            sn.copy(t.ray).applyMatrix4(an),
            null !== n.boundingBox && !1 === sn.intersectsBox(n.boundingBox))
          )
            return;
          let a;
          const s = n.index,
            o = n.attributes.position,
            l = n.morphAttributes.position,
            c = n.morphTargetsRelative,
            u = n.attributes.uv,
            h = n.attributes.uv2,
            d = n.groups,
            p = n.drawRange;
          if (null !== s)
            if (Array.isArray(i))
              for (let n = 0, r = d.length; n < r; n++) {
                const r = d[n],
                  f = i[r.materialIndex];
                for (
                  let n = Math.max(r.start, p.start),
                    i = Math.min(
                      s.count,
                      Math.min(r.start + r.count, p.start + p.count)
                    );
                  n < i;
                  n += 3
                ) {
                  const i = s.getX(n),
                    d = s.getX(n + 1),
                    p = s.getX(n + 2);
                  (a = bn(this, f, t, sn, o, l, c, u, h, i, d, p)),
                    a &&
                      ((a.faceIndex = Math.floor(n / 3)),
                      (a.face.materialIndex = r.materialIndex),
                      e.push(a));
                }
              }
            else
              for (
                let n = Math.max(0, p.start),
                  r = Math.min(s.count, p.start + p.count);
                n < r;
                n += 3
              ) {
                const r = s.getX(n),
                  d = s.getX(n + 1),
                  p = s.getX(n + 2);
                (a = bn(this, i, t, sn, o, l, c, u, h, r, d, p)),
                  a && ((a.faceIndex = Math.floor(n / 3)), e.push(a));
              }
          else if (void 0 !== o)
            if (Array.isArray(i))
              for (let n = 0, r = d.length; n < r; n++) {
                const r = d[n],
                  s = i[r.materialIndex];
                for (
                  let n = Math.max(r.start, p.start),
                    i = Math.min(
                      o.count,
                      Math.min(r.start + r.count, p.start + p.count)
                    );
                  n < i;
                  n += 3
                )
                  (a = bn(this, s, t, sn, o, l, c, u, h, n, n + 1, n + 2)),
                    a &&
                      ((a.faceIndex = Math.floor(n / 3)),
                      (a.face.materialIndex = r.materialIndex),
                      e.push(a));
              }
            else
              for (
                let n = Math.max(0, p.start),
                  r = Math.min(o.count, p.start + p.count);
                n < r;
                n += 3
              )
                (a = bn(this, i, t, sn, o, l, c, u, h, n, n + 1, n + 2)),
                  a && ((a.faceIndex = Math.floor(n / 3)), e.push(a));
        }
      }
      function bn(t, e, n, i, r, a, s, o, l, c, u, h) {
        ln.fromBufferAttribute(r, c),
          cn.fromBufferAttribute(r, u),
          un.fromBufferAttribute(r, h);
        const p = t.morphTargetInfluences;
        if (a && p) {
          fn.set(0, 0, 0), mn.set(0, 0, 0), gn.set(0, 0, 0);
          for (let t = 0, e = a.length; t < e; t++) {
            const e = p[t],
              n = a[t];
            0 !== e &&
              (hn.fromBufferAttribute(n, c),
              dn.fromBufferAttribute(n, u),
              pn.fromBufferAttribute(n, h),
              s
                ? (fn.addScaledVector(hn, e),
                  mn.addScaledVector(dn, e),
                  gn.addScaledVector(pn, e))
                : (fn.addScaledVector(hn.sub(ln), e),
                  mn.addScaledVector(dn.sub(cn), e),
                  gn.addScaledVector(pn.sub(un), e)));
          }
          ln.add(fn), cn.add(mn), un.add(gn);
        }
        t.isSkinnedMesh &&
          (t.boneTransform(c, ln),
          t.boneTransform(u, cn),
          t.boneTransform(h, un));
        const f = (function (t, e, n, i, r, a, s, o) {
          let l;
          if (
            ((l =
              1 === e.side
                ? i.intersectTriangle(s, a, r, !0, o)
                : i.intersectTriangle(r, a, s, 2 !== e.side, o)),
            null === l)
          )
            return null;
          En.copy(o), En.applyMatrix4(t.matrixWorld);
          const c = n.ray.origin.distanceTo(En);
          return c < n.near || c > n.far
            ? null
            : { distance: c, point: En.clone(), object: t };
        })(t, e, n, i, ln, cn, un, yn);
        if (f) {
          o &&
            (vn.fromBufferAttribute(o, c),
            xn.fromBufferAttribute(o, u),
            Mn.fromBufferAttribute(o, h),
            (f.uv = nn.getUV(yn, ln, cn, un, vn, xn, Mn, new W()))),
            l &&
              (vn.fromBufferAttribute(l, c),
              xn.fromBufferAttribute(l, u),
              Mn.fromBufferAttribute(l, h),
              (f.uv2 = nn.getUV(yn, ln, cn, un, vn, xn, Mn, new W())));
          const t = { a: c, b: u, c: h, normal: new d(), materialIndex: 0 };
          nn.getNormal(ln, cn, un, t.normal), (f.face = t);
        }
        return f;
      }
      const Tn = {
          alphamap_fragment:
            "\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n",
          alphamap_pars_fragment:
            "\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n",
          alphatest_fragment:
            "\n#ifdef USE_ALPHATEST\n\n\tif ( diffuseColor.a < alphaTest ) discard;\n\n#endif\n",
          alphatest_pars_fragment:
            "\n#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif\n",
          aomap_fragment:
            "\n#ifdef USE_AOMAP\n\n\t// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\n\t#endif\n\n#endif\n",
          aomap_pars_fragment:
            "\n#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif\n",
          begin_vertex: "\nvec3 transformed = vec3( position );\n",
          beginnormal_vertex:
            "\nvec3 objectNormal = vec3( normal );\n\n#ifdef USE_TANGENT\n\n\tvec3 objectTangent = vec3( tangent.xyz );\n\n#endif\n",
          bsdfs:
            "\n\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\n\treturn RECIPROCAL_PI * diffuseColor;\n\n} // validated\n\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\n\t// Original approximation by Christophe Schlick '94\n\t// float fresnel = pow( 1.0 - dotVH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH '13)\n\t// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n\n} // validated\n\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\n\t// Original approximation by Christophe Schlick '94\n\t// float fresnel = pow( 1.0 - dotVH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH '13)\n\t// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n\n} // validated\n\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\n\n// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2\n// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\n\treturn 0.5 / max( gv + gl, EPSILON );\n\n}\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (33)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is \"roughness squared\" in Disney’s reparameterization\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\n\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n\n}\n\n// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\n\tfloat alpha = pow2( roughness ); // UE4's roughness\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n\tfloat D = D_GGX( alpha, dotNH );\n\n\treturn F * ( V * D );\n\n}\n\n#ifdef USE_IRIDESCENCE\n\n\tvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\n\t\tfloat alpha = pow2( roughness ); // UE4's roughness\n\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\t\tvec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n\t\tfloat D = D_GGX( alpha, dotNH );\n\n\t\treturn F * ( V * D );\n\n\t}\n\n#endif\n\n// Rect Area Light\n\n// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines\n// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt\n// code: https://github.com/selfshadow/ltc_code/\n\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\n\tfloat dotNV = saturate( dot( N, V ) );\n\n\t// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\treturn uv;\n\n}\n\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\n\t// Real-Time Area Lighting: a Journey from Research to Production (p.102)\n\t// An approximation of the form factor of a horizon-clipped rectangle.\n\n\tfloat l = length( f );\n\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n\n}\n\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\n\tfloat x = dot( v1, v2 );\n\n\tfloat y = abs( x );\n\n\t// rational polynomial approximation to theta / sin( theta ) / 2PI\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\n\treturn cross( v1, v2 ) * theta_sintheta;\n\n}\n\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\n\t// bail if point is on back side of plane of light\n\t// assumes ccw winding order of light vertices\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\n\t// construct orthonormal basis around N\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system\n\n\t// compute transform\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\n\t// transform rect\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\n\t// project rect onto sphere\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\n\t// calculate vector form factor\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\n\t// adjust for horizon clipping\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\n/*\n\t// alternate method of adjusting for horizon clipping (see referece)\n\t// refactoring required\n\tfloat len = length( vectorFormFactor );\n\tfloat z = vectorFormFactor.z / len;\n\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\n\t// tabulated horizon-clipped sphere, apparently...\n\tvec2 uv = vec2( z * 0.5 + 0.5, len );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\tfloat scale = texture2D( ltc_2, uv ).w;\n\n\tfloat result = len * scale;\n*/\n\n\treturn vec3( result );\n\n}\n\n// End Rect Area Light\n\n\nfloat G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {\n\n\t// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n#if defined( USE_SHEEN )\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs\nfloat D_Charlie( float roughness, float dotNH ) {\n\n\tfloat alpha = pow2( roughness );\n\n\t// Estevez and Kulla 2017, \"Production Friendly Microfacet Sheen BRDF\"\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16\n\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n\n}\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\n\t// Neubelt and Pettineo 2013, \"Crafting a Next-gen Material Pipeline for The Order: 1886\"\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n\n}\n\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\n\treturn sheenColor * ( D * V );\n\n}\n\n#endif\n",
          iridescence_fragment:
            "\n\n#ifdef USE_IRIDESCENCE\n\n\t// XYZ to linear-sRGB color space\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\n\t// Assume air interface for top\n\t// Note: We don't handle the case fresnel0 == 1\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\n\t}\n\n\t// Conversion FO/IOR\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\n\t}\n\n\t// ior is a value between 1.0 and 3.0. 1.0 is air interface\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\n\t}\n\n\t// Fresnel equations for dielectric/dielectric interfaces.\n\t// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html\n\t// Evaluation XYZ sensitivity curves in Fourier space\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\n\t}\n\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\n\t\tvec3 I;\n\n\t\t// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\t// Evaluate the cosTheta on the base layer (Snell law)\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\n\t\t// Handle TIR:\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\n\t\t\t return vec3( 1.0 );\n\n\t\t}\n\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\n\t\t// First interface\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\n\t\t// Second interface\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0\n\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\n\t\t// Phase shift\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\n\t\t// Compound terms\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\n\t\t// Reflectance term for m = 0 (DC term amplitude)\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\n\t\t// Reflectance term for m > 0 (pairs of diracs)\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\n\t\t}\n\n\t\t// Since out of gamut colors might be produced, negative color values are clamped to 0.\n\t\treturn max( I, vec3( 0.0 ) );\n\n\t}\n\n#endif\n\n",
          bumpmap_pars_fragment:
            "\n#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen\n\t// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm; // normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n",
          clipping_planes_fragment:
            "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvec4 plane;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\n\t\tbool clipped = true;\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t\tif ( clipped ) discard;\n\n\t#endif\n\n#endif\n",
          clipping_planes_pars_fragment:
            "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvarying vec3 vClipPosition;\n\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n\n#endif\n",
          clipping_planes_pars_vertex:
            "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvarying vec3 vClipPosition;\n\n#endif\n",
          clipping_planes_vertex:
            "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvClipPosition = - mvPosition.xyz;\n\n#endif\n",
          color_fragment:
            "\n#if defined( USE_COLOR_ALPHA )\n\n\tdiffuseColor *= vColor;\n\n#elif defined( USE_COLOR )\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif\n",
          color_pars_fragment:
            "\n#if defined( USE_COLOR_ALPHA )\n\n\tvarying vec4 vColor;\n\n#elif defined( USE_COLOR )\n\n\tvarying vec3 vColor;\n\n#endif\n",
          color_pars_vertex:
            "\n#if defined( USE_COLOR_ALPHA )\n\n\tvarying vec4 vColor;\n\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\n\tvarying vec3 vColor;\n\n#endif\n",
          color_vertex:
            "\n#if defined( USE_COLOR_ALPHA )\n\n\tvColor = vec4( 1.0 );\n\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\n\tvColor = vec3( 1.0 );\n\n#endif\n\n#ifdef USE_COLOR\n\n\tvColor *= color;\n\n#endif\n\n#ifdef USE_INSTANCING_COLOR\n\n\tvColor.xyz *= instanceColor.xyz;\n\n#endif\n",
          common:
            "\n#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n\n#ifndef saturate\n// <tonemapping_pars_fragment> may have defined saturate() already\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\n\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand( const in vec2 uv ) {\n\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\n\treturn fract( sin( sn ) * c );\n\n}\n\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\n\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\n\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t// dir can be either a direction vector or a normal vector\n\t// upper-left 3x3 of matrix is assumed to be orthogonal\n\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nmat3 transposeMat3( const in mat3 m ) {\n\n\tmat3 tmp;\n\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\n\treturn tmp;\n\n}\n\nfloat luminance( const in vec3 rgb ) {\n\n\t// assumes rgb is in linear color space with sRGB primaries and D65 white point\n\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\n\treturn dot( weights, rgb );\n\n}\n\nbool isPerspectiveMatrix( mat4 m ) {\n\n\treturn m[ 2 ][ 3 ] == - 1.0;\n\n}\n\nvec2 equirectUv( in vec3 dir ) {\n\n\t// dir is assumed to be unit length\n\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\n\treturn vec2( u, v );\n\n}\n",
          cube_uv_reflection_fragment:
            "\n#ifdef ENVMAP_TYPE_CUBE_UV\n\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\n\t// These shader functions convert between the UV coordinates of a single face of\n\t// a cubemap, the 0-5 integer index of a cube face, and the direction vector for\n\t// sampling a textureCube (not generally normalized ).\n\n\tfloat getFace( vec3 direction ) {\n\n\t\tvec3 absDirection = abs( direction );\n\n\t\tfloat face = - 1.0;\n\n\t\tif ( absDirection.x > absDirection.z ) {\n\n\t\t\tif ( absDirection.x > absDirection.y )\n\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\n\t\t\telse\n\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\n\t\t} else {\n\n\t\t\tif ( absDirection.z > absDirection.y )\n\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\n\t\t\telse\n\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\n\t\t}\n\n\t\treturn face;\n\n\t}\n\n\t// RH coordinate system; PMREM face-indexing convention\n\tvec2 getUV( vec3 direction, float face ) {\n\n\t\tvec2 uv;\n\n\t\tif ( face == 0.0 ) {\n\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x\n\n\t\t} else if ( face == 1.0 ) {\n\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y\n\n\t\t} else if ( face == 2.0 ) {\n\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z\n\n\t\t} else if ( face == 3.0 ) {\n\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x\n\n\t\t} else if ( face == 4.0 ) {\n\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y\n\n\t\t} else {\n\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z\n\n\t\t}\n\n\t\treturn 0.5 * ( uv + 1.0 );\n\n\t}\n\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\n\t\tfloat face = getFace( direction );\n\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\n\t\tfloat faceSize = exp2( mipInt );\n\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\n\t\tif ( face > 2.0 ) {\n\n\t\t\tuv.y += faceSize;\n\n\t\t\tface -= 3.0;\n\n\t\t}\n\n\t\tuv.x += face * faceSize;\n\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\n\t\t#ifdef texture2DGradEXT\n\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering\n\n\t\t#else\n\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\n\t\t#endif\n\n\t}\n\n\t// These defines must match with PMREMGenerator\n\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\n\tfloat roughnessToMip( float roughness ) {\n\n\t\tfloat mip = 0.0;\n\n\t\tif ( roughness >= cubeUV_r1 ) {\n\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\n\t\t} else {\n\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25\n\t\t}\n\n\t\treturn mip;\n\n\t}\n\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\n\t\tfloat mipF = fract( mip );\n\n\t\tfloat mipInt = floor( mip );\n\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\n\t\tif ( mipF == 0.0 ) {\n\n\t\t\treturn vec4( color0, 1.0 );\n\n\t\t} else {\n\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\n\t\t}\n\n\t}\n\n#endif\n",
          defaultnormal_vertex:
            "\nvec3 transformedNormal = objectNormal;\n\n#ifdef USE_INSTANCING\n\n\t// this is in lieu of a per-instance normal-matrix\n\t// shear transforms in the instance matrix are not supported\n\n\tmat3 m = mat3( instanceMatrix );\n\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\n\ttransformedNormal = m * transformedNormal;\n\n#endif\n\ntransformedNormal = normalMatrix * transformedNormal;\n\n#ifdef FLIP_SIDED\n\n\ttransformedNormal = - transformedNormal;\n\n#endif\n\n#ifdef USE_TANGENT\n\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#ifdef FLIP_SIDED\n\n\t\ttransformedTangent = - transformedTangent;\n\n\t#endif\n\n#endif\n",
          displacementmap_pars_vertex:
            "\n#ifdef USE_DISPLACEMENTMAP\n\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n\n#endif\n",
          displacementmap_vertex:
            "\n#ifdef USE_DISPLACEMENTMAP\n\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n\n#endif\n",
          emissivemap_fragment:
            "\n#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n\n#endif\n",
          emissivemap_pars_fragment:
            "\n#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n",
          encodings_fragment:
            "\ngl_FragColor = linearToOutputTexel( gl_FragColor );\n",
          encodings_pars_fragment:
            "\n\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\n\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\n\n",
          envmap_fragment:
            "\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvec3 cameraToFrag;\n\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\n\t\t}\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#else\n\n\t\tvec4 envColor = vec4( 0.0 );\n\n\t#endif\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n",
          envmap_common_pars_fragment:
            "\n#ifdef USE_ENVMAP\n\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif\n",
          envmap_pars_fragment:
            "\n#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n\n#endif\n",
          envmap_pars_vertex:
            "\n#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\n\t#endif\n\n#endif\n",
          envmap_physical_pars_fragment:
            "\n#if defined( USE_ENVMAP )\n\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\n\t\t#else\n\n\t\t\treturn vec3( 0.0 );\n\n\t\t#endif\n\n\t}\n\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\n\t\t\t// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\n\t\t#else\n\n\t\t\treturn vec3( 0.0 );\n\n\t\t#endif\n\n\t}\n\n#endif\n",
          envmap_vertex:
            "\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvWorldPosition = worldPosition.xyz;\n\n\t#else\n\n\t\tvec3 cameraToVertex;\n\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t\t}\n\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n",
          fog_vertex:
            "\n#ifdef USE_FOG\n\n\tvFogDepth = - mvPosition.z;\n\n#endif\n",
          fog_pars_vertex:
            "\n#ifdef USE_FOG\n\n\tvarying float vFogDepth;\n\n#endif\n",
          fog_fragment:
            "\n#ifdef USE_FOG\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\n\t#endif\n\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n",
          fog_pars_fragment:
            "\n#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\n\t#endif\n\n#endif\n",
          gradientmap_pars_fragment:
            "\n\n#ifdef USE_GRADIENTMAP\n\n\tuniform sampler2D gradientMap;\n\n#endif\n\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\n\t// dotNL will be from -1.0 to 1.0\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\n\t#ifdef USE_GRADIENTMAP\n\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\n\t#else\n\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\n\t#endif\n\n}\n",
          lightmap_fragment:
            "\n#ifdef USE_LIGHTMAP\n\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n\n#endif\n",
          lightmap_pars_fragment:
            "\n#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif\n",
          lights_lambert_fragment:
            "\nLambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;\n",
          lights_lambert_pars_fragment:
            "\nvarying vec3 vViewPosition;\n\nstruct LambertMaterial {\n\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n\n};\n\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert\n\n#define Material_LightProbeLOD( material )\t(0)\n",
          lights_pars_begin:
            "\nuniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\n\n// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere\n// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\n\t// normal is assumed to have unit length\n\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\n\t// band 0\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\n\t// band 1\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\n\t// band 2\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\n\treturn result;\n\n}\n\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\n\treturn irradiance;\n\n}\n\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\n\tvec3 irradiance = ambientLightColor;\n\n\treturn irradiance;\n\n}\n\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\n\t\t// based upon Frostbite 3 Moving to Physically-based Rendering\n\t\t// page 32, equation 26: E[window1]\n\t\t// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\n\t\tif ( cutoffDistance > 0.0 ) {\n\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\n\t\t}\n\n\t\treturn distanceFalloff;\n\n\t#else\n\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n\t\t}\n\n\t\treturn 1.0;\n\n\t#endif\n\n}\n\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n\n}\n\n#if NUM_DIR_LIGHTS > 0\n\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\n\t}\n\n#endif\n\n\n#if NUM_POINT_LIGHTS > 0\n\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\n\t// light is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\n\t\tlight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\n\t}\n\n#endif\n\n\n#if NUM_SPOT_LIGHTS > 0\n\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\n\t// light is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\n\t\tlight.direction = normalize( lVector );\n\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\n\t\tif ( spotAttenuation > 0.0 ) {\n\n\t\t\tfloat lightDistance = length( lVector );\n\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\n\t\t} else {\n\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\n\t\t}\n\n\t}\n\n#endif\n\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\n\t// Pre-computed values of LinearTransformedCosine approximation of BRDF\n\t// BRDF approximation Texture is 64x64\n\tuniform sampler2D ltc_1; // RGBA Float\n\tuniform sampler2D ltc_2; // RGBA Float\n\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n\n#endif\n\n\n#if NUM_HEMI_LIGHTS > 0\n\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\n\t\treturn irradiance;\n\n\t}\n\n#endif\n",
          lights_toon_fragment:
            "\nToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\n",
          lights_toon_pars_fragment:
            "\nvarying vec3 vViewPosition;\n\nstruct ToonMaterial {\n\n\tvec3 diffuseColor;\n\n};\n\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n\n#define Material_LightProbeLOD( material )\t(0)\n",
          lights_phong_fragment:
            "\nBlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
          lights_phong_pars_fragment:
            "\nvarying vec3 vViewPosition;\n\nstruct BlinnPhongMaterial {\n\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n\n};\n\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n\n}\n\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n\n#define Material_LightProbeLOD( material )\t(0)\n",
          lights_physical_fragment:
            "\nPhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\n\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\n\nmaterial.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.\nmaterial.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n\n#ifdef IOR\n\n\tmaterial.ior = ior;\n\n\t#ifdef SPECULAR\n\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\n\t\t#endif\n\n\t\t#ifdef USE_SPECULARCOLORMAP\n\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\n\t\t#endif\n\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\n\t#else\n\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\n\t#endif\n\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n\n#else\n\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n\n#endif\n\n#ifdef USE_CLEARCOAT\n\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\n\t#ifdef USE_CLEARCOATMAP\n\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\n\t#endif\n\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\n\t#endif\n\n\tmaterial.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model\n\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n\n#endif\n\n#ifdef USE_IRIDESCENCE\n\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\n\t#ifdef USE_IRIDESCENCEMAP\n\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\n\t#endif\n\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\n\t#else\n\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\n\t#endif\n\n#endif\n\n#ifdef USE_SHEEN\n\n\tmaterial.sheenColor = sheenColor;\n\n\t#ifdef USE_SHEENCOLORMAP\n\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\n\t#endif\n\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\n\t#ifdef USE_SHEENROUGHNESSMAP\n\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\n\t#endif\n\n#endif\n",
          lights_physical_pars_fragment:
            '\nstruct PhysicalMaterial {\n\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\n};\n\n// temporary\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\n\n// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from \n// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found\n// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\n\tfloat r2 = roughness * roughness;\n\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\n\treturn saturate( DG * RECIPROCAL_PI );\n\n}\n\n// Analytical approximation of the DFG LUT, one half of the\n// split-sum approximation used in indirect specular lighting.\n// via \'environmentBRDF\' from "Physically Based Shading on Mobile"\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\n\tvec4 r = roughness * c0 + c1;\n\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\n\treturn fab;\n\n}\n\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\n\treturn specularColor * fab.x + specularF90 * fab.y;\n\n}\n\n// Fdez-Agüera\'s "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"\n// Approximates multiscattering in order to preserve energy.\n// http://www.jcgt.org/published/0008/01/03/\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\n\t#ifdef USE_IRIDESCENCE\n\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\n\t#else\n\n\t\tvec3 Fr = specularColor;\n\n\t#endif\n\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21\n\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n\n}\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction\n\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\n\t\t// LTC Fresnel Approximation by Stephen Hill\n\t\t// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\n\t}\n\n#endif\n\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\n\t#endif\n\n\t#ifdef USE_SHEEN\n\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\n\t#endif\n\n\t#ifdef USE_IRIDESCENCE\n\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\n\t#else\n\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\n\t#endif\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\n\t#endif\n\n\t#ifdef USE_SHEEN\n\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\n\t#endif\n\n\t// Both indirect specular and indirect diffuse light accumulate here\n\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\n\t#ifdef USE_IRIDESCENCE\n\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\n\t#else\n\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\n\t#endif\n\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n\n// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n\n}\n',
          lights_fragment_begin:
            "\n/**\n * This is a template that can be used to light a material, it uses pluggable\n * RenderEquations (RE)for specific lighting scenarios.\n *\n * Instructions for use:\n * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\n * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???\n * - Create a material parameter that is to be passed as the third parameter to your lighting functions.\n *\n * TODO:\n * - Add area light support.\n * - Add sphere light support.\n * - Add diffuse light probe (irradiance cubemap) support.\n */\n\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\n#ifdef USE_CLEARCOAT\n\n\tgeometry.clearcoatNormal = clearcoatNormal;\n\n#endif\n\n#ifdef USE_IRIDESCENCE\n\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\n\tif ( material.iridescenceThickness == 0.0 ) {\n\n\t\tmaterial.iridescence = 0.0;\n\n\t} else {\n\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\n\t}\n\n\tif ( material.iridescence > 0.0 ) {\n\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\n\t\t// Iridescence F0 approximation\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\n\t}\n\n#endif\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\n\t\t// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n\tRectAreaLight rectAreaLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 iblIrradiance = vec3( 0.0 );\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n\n#endif\n",
          lights_fragment_maps:
            "\n#if defined( RE_IndirectDiffuse )\n\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\n\t\tirradiance += lightMapIrradiance;\n\n\t#endif\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\n\t#endif\n\n#endif\n\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\n\t#endif\n\n#endif\n",
          lights_fragment_end:
            "\n#if defined( RE_IndirectDiffuse )\n\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n\n#endif\n",
          logdepthbuf_fragment:
            "\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\t// Doing a strict comparison with == 1.0 can cause noise artifacts\n\t// on some platforms. See issue #17623.\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n\n#endif\n",
          logdepthbuf_pars_fragment:
            "\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n\n#endif\n",
          logdepthbuf_pars_vertex:
            "\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\n\t#else\n\n\t\tuniform float logDepthBufFC;\n\n\t#endif\n\n#endif\n",
          logdepthbuf_vertex:
            "\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\n\t#else\n\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\n\t\t\tgl_Position.z *= gl_Position.w;\n\n\t\t}\n\n\t#endif\n\n#endif\n",
          map_fragment:
            "\n#ifdef USE_MAP\n\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\n\t#ifdef DECODE_VIDEO_TEXTURE\n\n\t\t// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)\n\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\n\t#endif\n\n\tdiffuseColor *= sampledDiffuseColor;\n\n#endif\n",
          map_pars_fragment:
            "\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n",
          map_particle_fragment:
            "\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\n#endif\n\n#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, uv );\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n\n#endif\n",
          map_particle_pars_fragment:
            "\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\tuniform mat3 uvTransform;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n",
          metalnessmap_fragment:
            "\nfloat metalnessFactor = metalness;\n\n#ifdef USE_METALNESSMAP\n\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\n\t// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tmetalnessFactor *= texelMetalness.b;\n\n#endif\n",
          metalnessmap_pars_fragment:
            "\n#ifdef USE_METALNESSMAP\n\n\tuniform sampler2D metalnessMap;\n\n#endif\n",
          morphcolor_vertex:
            "\n#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\tvColor *= morphTargetBaseInfluence;\n\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t#if defined( USE_COLOR_ALPHA )\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\n\t\t#elif defined( USE_COLOR )\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\n\t\t#endif\n\n\t}\n\n#endif\n",
          morphnormal_vertex:
            "\n#ifdef USE_MORPHNORMALS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\tobjectNormal *= morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\n\t\t}\n\n\t#else\n\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\n\t#endif\n\n#endif\n",
          morphtarget_pars_vertex:
            "\n#ifdef USE_MORPHTARGETS\n\n\tuniform float morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\n\t\t}\n\n\t#else\n\n\t\t#ifndef USE_MORPHNORMALS\n\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\n\t\t#else\n\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\n\t\t#endif\n\n\t#endif\n\n#endif\n",
          morphtarget_vertex:
            "\n#ifdef USE_MORPHTARGETS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\ttransformed *= morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\n\t\t}\n\n\t#else\n\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\n\t\t#ifndef USE_MORPHNORMALS\n\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\n\t\t#endif\n\n\t#endif\n\n#endif\n",
          normal_fragment_begin:
            "\nfloat faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n\n#ifdef FLAT_SHADED\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#else\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * faceDirection;\n\n\t#endif\n\n\t#ifdef USE_TANGENT\n\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\n\t\t#endif\n\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n\n// non perturbed normal for clearcoat among others\n\nvec3 geometryNormal = normal;\n\n",
          normal_fragment_maps:
            "\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals\n\n\t#ifdef FLIP_SIDED\n\n\t\tnormal = - normal;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * faceDirection;\n\n\t#endif\n\n\tnormal = normalize( normalMatrix * normal );\n\n#elif defined( TANGENTSPACE_NORMALMAP )\n\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\n\t#ifdef USE_TANGENT\n\n\t\tnormal = normalize( vTBN * mapN );\n\n\t#else\n\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\n\t#endif\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n\n#endif\n",
          normal_pars_fragment:
            "\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n",
          normal_pars_vertex:
            "\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n",
          normal_vertex:
            "\n#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n\t#ifdef USE_TANGENT\n\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\n\t#endif\n\n#endif\n",
          normalmap_pars_fragment:
            "\n#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n#endif\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n\tuniform mat3 normalMatrix;\n\n#endif\n\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\n\t// Normal Mapping Without Precomputed Tangents\n\t// http://www.thetenthplanet.de/archives/1180\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 N = surf_norm; // normalized\n\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\n\t}\n\n#endif\n",
          clearcoat_normal_fragment_begin:
            "\n#ifdef USE_CLEARCOAT\n\n\tvec3 clearcoatNormal = geometryNormal;\n\n#endif\n",
          clearcoat_normal_fragment_maps:
            "\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\n\t#ifdef USE_TANGENT\n\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\n\t#else\n\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\n\t#endif\n\n#endif\n",
          clearcoat_pars_fragment:
            "\n\n#ifdef USE_CLEARCOATMAP\n\n\tuniform sampler2D clearcoatMap;\n\n#endif\n\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\tuniform sampler2D clearcoatRoughnessMap;\n\n#endif\n\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n\n#endif\n",
          iridescence_pars_fragment:
            "\n\n#ifdef USE_IRIDESCENCEMAP\n\n\tuniform sampler2D iridescenceMap;\n\n#endif\n\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n\tuniform sampler2D iridescenceThicknessMap;\n\n#endif\n",
          output_fragment:
            "\n#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n\n// https://github.com/mrdoob/three.js/pull/22425\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\n\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );\n",
          packing:
            "\nvec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\n\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\n\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\n\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n\nconst float ShiftRight8 = 1. / 256.;\n\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8; // tidy overflow\n\treturn r * PackUpscale;\n}\n\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\n\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\n\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\n\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\n\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\n\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\n\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\n\n// NOTE: https://twitter.com/gonnavis/status/1377183786949959682\n\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
          premultiplied_alpha_fragment:
            "\n#ifdef PREMULTIPLIED_ALPHA\n\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n",
          project_vertex:
            "\nvec4 mvPosition = vec4( transformed, 1.0 );\n\n#ifdef USE_INSTANCING\n\n\tmvPosition = instanceMatrix * mvPosition;\n\n#endif\n\nmvPosition = modelViewMatrix * mvPosition;\n\ngl_Position = projectionMatrix * mvPosition;\n",
          dithering_fragment:
            "\n#ifdef DITHERING\n\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n\n#endif\n",
          dithering_pars_fragment:
            "\n#ifdef DITHERING\n\n\t// based on https://www.shadertoy.com/view/MslGR8\n\tvec3 dithering( vec3 color ) {\n\t\t//Calculate grid position\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\n\t\t//Shift the individual colors differently, thus making it even harder to see the dithering pattern\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\n\t\t//modify shift according to grid position.\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\n\t\t//shift the color by dither_shift\n\t\treturn color + dither_shift_RGB;\n\t}\n\n#endif\n",
          roughnessmap_fragment:
            "\nfloat roughnessFactor = roughness;\n\n#ifdef USE_ROUGHNESSMAP\n\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\n\t// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\troughnessFactor *= texelRoughness.g;\n\n#endif\n",
          roughnessmap_pars_fragment:
            "\n#ifdef USE_ROUGHNESSMAP\n\n\tuniform sampler2D roughnessMap;\n\n#endif\n",
          shadowmap_pars_fragment:
            "\n#if NUM_SPOT_LIGHT_COORDS > 0\n\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n\n#endif\n\n#if NUM_SPOT_LIGHT_MAPS > 0\n\n  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n\n#endif\n\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): create uniforms for area light shadows\n\n\t#endif\n\t*/\n\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\n\t}\n\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\n\t}\n\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\n\t\tfloat occlusion = 1.0;\n\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\n\t\tfloat hard_shadow = step( compare , distribution.x ); // Hard Shadow\n\n\t\tif (hard_shadow != 1.0 ) {\n\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality\n\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed\n\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\n\t\t}\n\t\treturn occlusion;\n\n\t}\n\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n\t\tfloat shadow = 1.0;\n\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\n\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#else // no percentage-closer filtering:\n\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#endif\n\n\t\t}\n\n\t\treturn shadow;\n\n\t}\n\n\t// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D\n\t// vector suitable for 2D texture mapping. This code uses the following layout for the\n\t// 2D texture:\n\t//\n\t// xzXZ\n\t//  y Y\n\t//\n\t// Y - Positive y direction\n\t// y - Negative y direction\n\t// X - Positive x direction\n\t// x - Negative x direction\n\t// Z - Positive z direction\n\t// z - Negative z direction\n\t//\n\t// Source and test bed:\n\t// https://gist.github.com/tschw/da10c43c467ce8afd0c4\n\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n\t\t// Number of texels to avoid at the edge of each square\n\n\t\tvec3 absV = abs( v );\n\n\t\t// Intersect unit cube\n\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\n\t\t// Apply scale to avoid seams\n\n\t\t// two texels less per square (one texel will do for NEAREST)\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n\t\t// Unwrap\n\n\t\t// space: -1 ... 1 range for each square\n\t\t//\n\t\t// #X##\t\tdim    := ( 4 , 2 )\n\t\t//  # #\t\tcenter := ( 1 , 1 )\n\n\t\tvec2 planar = v.xy;\n\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\n\t\tif ( absV.z >= almostOne ) {\n\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\n\t\t} else if ( absV.x >= almostOne ) {\n\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\n\t\t} else if ( absV.y >= almostOne ) {\n\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\n\t\t}\n\n\t\t// Transform to UV space\n\n\t\t// scale := 0.5 / dim\n\t\t// translate := ( center + 0.5 ) / dim\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n\t}\n\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\n\t\t// for point lights, the uniform @vShadowCoord is re-purposed to hold\n\t\t// the vector from the light to the world-space position of the fragment.\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\n\t\t// dp = normalized distance from light to fragment position\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?\n\t\tdp += shadowBias;\n\n\t\t// bd3D = base direction 3D\n\t\tvec3 bd3D = normalize( lightToPosition );\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#else // no percentage-closer filtering\n\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\n\t\t#endif\n\n\t}\n\n#endif\n",
          shadowmap_pars_vertex:
            "\n\n#if NUM_SPOT_LIGHT_COORDS > 0\n\n  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n\n#endif\n\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): uniforms for area light shadows\n\n\t#endif\n\t*/\n\n#endif\n",
          shadowmap_vertex:
            "\n#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\t// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\n\t#endif\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_COORDS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update vAreaShadowCoord with area light info\n\n\t#endif\n\t*/\n\n#endif\n",
          shadowmask_pars_fragment:
            "\nfloat getShadowMask() {\n\n\tfloat shadow = 1.0;\n\n\t#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\tDirectionalLightShadow directionalLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\tSpotLightShadow spotLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\tPointLightShadow pointLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update shadow for Area light\n\n\t#endif\n\t*/\n\n\t#endif\n\n\treturn shadow;\n\n}\n",
          skinbase_vertex:
            "\n#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif\n",
          skinning_pars_vertex:
            "\n#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\n\tmat4 getBoneMatrix( const in float i ) {\n\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\n\t\ty = dy * ( y + 0.5 );\n\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\treturn bone;\n\n\t}\n\n#endif\n",
          skinning_vertex:
            "\n#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n\n#endif\n",
          skinnormal_vertex:
            "\n#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n\t#ifdef USE_TANGENT\n\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#endif\n\n#endif\n",
          specularmap_fragment:
            "\nfloat specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif\n",
          specularmap_pars_fragment:
            "\n#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif\n",
          tonemapping_fragment:
            "\n#if defined( TONE_MAPPING )\n\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n",
          tonemapping_pars_fragment:
            "\n#ifndef saturate\n// <common> may have defined saturate() already\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n\nuniform float toneMappingExposure;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n\treturn toneMappingExposure * color;\n\n}\n\n// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf\nvec3 ReinhardToneMapping( vec3 color ) {\n\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n\t// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n\n// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs\nvec3 RRTAndODTFit( vec3 v ) {\n\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n\n}\n\n// this implementation of ACES is modified to accommodate a brighter viewing environment.\n// the scale factor of 1/0.6 is subjective. see discussion in #19621.\n\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\n\t// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ), // transposed from source\n\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\n\t// ODT_SAT => XYZ => D60_2_D65 => sRGB\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ), // transposed from source\n\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\n\tcolor *= toneMappingExposure / 0.6;\n\n\tcolor = ACESInputMat * color;\n\n\t// Apply RRT and ODT\n\tcolor = RRTAndODTFit( color );\n\n\tcolor = ACESOutputMat * color;\n\n\t// Clamp to [0, 1]\n\treturn saturate( color );\n\n}\n\nvec3 CustomToneMapping( vec3 color ) { return color; }\n",
          transmission_fragment:
            "\n#ifdef USE_TRANSMISSION\n\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\n\t#ifdef USE_TRANSMISSIONMAP\n\n\t\tmaterial.transmission *= texture2D( transmissionMap, vUv ).r;\n\n\t#endif\n\n\t#ifdef USE_THICKNESSMAP\n\n\t\tmaterial.thickness *= texture2D( thicknessMap, vUv ).g;\n\n\t#endif\n\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n\n#endif\n",
          transmission_pars_fragment:
            "\n#ifdef USE_TRANSMISSION\n\n\t// Transmission code is based on glTF-Sampler-Viewer\n\t// https://github.com/KhronosGroup/glTF-Sample-Viewer\n\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\n\t#ifdef USE_TRANSMISSIONMAP\n\n\t\tuniform sampler2D transmissionMap;\n\n\t#endif\n\n\t#ifdef USE_THICKNESSMAP\n\n\t\tuniform sampler2D thicknessMap;\n\n\t#endif\n\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\n\tvarying vec3 vWorldPosition;\n\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\n\t\t// Direction of refracted light.\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\n\t\t// Compute rotation-independant scaling of the model matrix.\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\n\t\t// The thickness is specified in local space.\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\n\t}\n\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\n\t\t// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and\n\t\t// an IOR of 1.5 results in the default amount of microfacet refraction.\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\n\t}\n\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\n\t\t#ifdef texture2DLodEXT\n\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\n\t\t#else\n\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\n\t\t#endif\n\n\t}\n\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\n\t\tif ( isinf( attenuationDistance ) ) {\n\n\t\t\t// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.\n\t\t\treturn radiance;\n\n\t\t} else {\n\n\t\t\t// Compute light attenuation using Beer's law.\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law\n\t\t\treturn transmittance * radiance;\n\n\t\t}\n\n\t}\n\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\n\t\t// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\n\t\t// Sample framebuffer to get pixel the refracted ray hits.\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\n\t\t// Get the specular component.\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\n\t}\n#endif\n",
          uv_pars_fragment:
            "\n#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\n\tvarying vec2 vUv;\n\n#endif\n",
          uv_pars_vertex:
            "\n#ifdef USE_UV\n\n\t#ifdef UVS_VERTEX_ONLY\n\n\t\tvec2 vUv;\n\n\t#else\n\n\t\tvarying vec2 vUv;\n\n\t#endif\n\n\tuniform mat3 uvTransform;\n\n#endif\n",
          uv_vertex:
            "\n#ifdef USE_UV\n\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n#endif\n",
          uv2_pars_fragment:
            "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif\n",
          uv2_pars_vertex:
            "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n\tuniform mat3 uv2Transform;\n\n#endif\n",
          uv2_vertex:
            "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n\n#endif\n",
          worldpos_vertex:
            "\n#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\n\t#ifdef USE_INSTANCING\n\n\t\tworldPosition = instanceMatrix * worldPosition;\n\n\t#endif\n\n\tworldPosition = modelMatrix * worldPosition;\n\n#endif\n",
          background_vert:
            "\nvarying vec2 vUv;\nuniform mat3 uvTransform;\n\nvoid main() {\n\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n\n}\n",
          background_frag:
            "\nuniform sampler2D t2D;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n\tgl_FragColor = texture2D( t2D, vUv );\n\n\t#ifdef DECODE_VIDEO_TEXTURE\n\n\t\t// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)\n\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\n\t#endif\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
          backgroundCube_vert:
            "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n\tgl_Position.z = gl_Position.w; // set z to camera.far\n\n}\n",
          backgroundCube_frag:
            "\n\n#ifdef ENVMAP_TYPE_CUBE\n\n\tuniform samplerCube envMap;\n\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\tuniform sampler2D envMap;\n\n#endif\n\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\n\nvarying vec3 vWorldDirection;\n\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n\n\t#else\n\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t#endif\n\n\tgl_FragColor = texColor;\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
          cube_vert:
            "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n\tgl_Position.z = gl_Position.w; // set z to camera.far\n\n}\n",
          cube_frag:
            "\nuniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\n\nvarying vec3 vWorldDirection;\n\nvoid main() {\n\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
          depth_vert:
            "\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.\n// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for\n// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.\nvarying vec2 vHighPrecisionZW;\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvHighPrecisionZW = gl_Position.zw;\n\n}\n",
          depth_frag:
            "\n#if DEPTH_PACKING == 3200\n\n\tuniform float opacity;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvarying vec2 vHighPrecisionZW;\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tdiffuseColor.a = opacity;\n\n\t#endif\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\t#include <logdepthbuf_fragment>\n\n\t// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\n\t#elif DEPTH_PACKING == 3201\n\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\n\t#endif\n\n}\n",
          distanceRGBA_vert:
            "\n#define DISTANCE\n\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvWorldPosition = worldPosition.xyz;\n\n}\n",
          distanceRGBA_frag:
            "\n#define DISTANCE\n\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main () {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist ); // clamp to [ 0, 1 ]\n\n\tgl_FragColor = packDepthToRGBA( dist );\n\n}\n",
          equirect_vert:
            "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n}\n",
          equirect_frag:
            "\nuniform sampler2D tEquirect;\n\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvec3 direction = normalize( vWorldDirection );\n\n\tvec2 sampleUV = equirectUv( direction );\n\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
          linedashed_vert:
            "\nuniform float scale;\nattribute float lineDistance;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\tvLineDistance = scale * lineDistance;\n\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n",
          linedashed_frag:
            "\nuniform vec3 diffuse;\nuniform float opacity;\n\nuniform float dashSize;\nuniform float totalSize;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\n\t\tdiscard;\n\n\t}\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\n\toutgoingLight = diffuseColor.rgb; // simple shader\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\n}\n",
          meshbasic_vert:
            "\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
          meshbasic_frag:
            "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\n\t// accumulation (baked indirect lighting only)\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\n\t#endif\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n\t#include <envmap_fragment>\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
          meshlambert_vert:
            "\n#define LAMBERT\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
          meshlambert_frag:
            "\n#define LAMBERT\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
          meshmatcap_vert:
            "\n#define MATCAP\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n}\n",
          meshmatcap_frag:
            "\n#define MATCAP\n\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks\n\n\t#ifdef USE_MATCAP\n\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\n\t#else\n\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing\n\n\t#endif\n\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
          meshnormal_vert:
            "\n#define NORMAL\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvViewPosition = - mvPosition.xyz;\n\n#endif\n\n}\n",
          meshnormal_frag:
            "\n#define NORMAL\n\nuniform float opacity;\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\n\t#ifdef OPAQUE\n\n\t\tgl_FragColor.a = 1.0;\n\n\t#endif\n\n}\n",
          meshphong_vert:
            "\n#define PHONG\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
          meshphong_frag:
            "\n#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
          meshphysical_vert:
            "\n#define STANDARD\n\nvarying vec3 vViewPosition;\n\n#ifdef USE_TRANSMISSION\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n#ifdef USE_TRANSMISSION\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif\n}\n",
          meshphysical_frag:
            "\n#define STANDARD\n\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\n#ifdef IOR\n\tuniform float ior;\n#endif\n\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\n\t#include <transmission_fragment>\n\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\n\t#ifdef USE_SHEEN\n\n\t\t// Sheen energy compensation approximation calculation can be found at the end of\n\t\t// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\n\t#endif\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\n\t#endif\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
          meshtoon_vert:
            "\n#define TOON\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
          meshtoon_frag:
            "\n#define TOON\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
          points_vert:
            "\nuniform float size;\nuniform float scale;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\n\tgl_PointSize = size;\n\n\t#ifdef USE_SIZEATTENUATION\n\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\n\t#endif\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n\n}\n",
          points_frag:
            "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\n}\n",
          shadow_vert:
            "\n#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n\nvoid main() {\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
          shadow_frag:
            "\nuniform vec3 color;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n\nvoid main() {\n\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n",
          sprite_vert:
            "\nuniform float rotation;\nuniform vec2 center;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\n\t#ifndef USE_SIZEATTENUATION\n\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\n\t#endif\n\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\n\tmvPosition.xy += rotatedPosition;\n\n\tgl_Position = projectionMatrix * mvPosition;\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n",
          sprite_frag:
            "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n",
        },
        wn = {
          common: {
            diffuse: { value: new we(16777215) },
            opacity: { value: 1 },
            map: { value: null },
            uvTransform: { value: new A() },
            uv2Transform: { value: new A() },
            alphaMap: { value: null },
            alphaTest: { value: 0 },
          },
          specularmap: { specularMap: { value: null } },
          envmap: {
            envMap: { value: null },
            flipEnvMap: { value: -1 },
            reflectivity: { value: 1 },
            ior: { value: 1.5 },
            refractionRatio: { value: 0.98 },
          },
          aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
          lightmap: {
            lightMap: { value: null },
            lightMapIntensity: { value: 1 },
          },
          emissivemap: { emissiveMap: { value: null } },
          bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
          normalmap: {
            normalMap: { value: null },
            normalScale: { value: new W(1, 1) },
          },
          displacementmap: {
            displacementMap: { value: null },
            displacementScale: { value: 1 },
            displacementBias: { value: 0 },
          },
          roughnessmap: { roughnessMap: { value: null } },
          metalnessmap: { metalnessMap: { value: null } },
          gradientmap: { gradientMap: { value: null } },
          fog: {
            fogDensity: { value: 25e-5 },
            fogNear: { value: 1 },
            fogFar: { value: 2e3 },
            fogColor: { value: new we(16777215) },
          },
          lights: {
            ambientLightColor: { value: [] },
            lightProbe: { value: [] },
            directionalLights: {
              value: [],
              properties: { direction: {}, color: {} },
            },
            directionalLightShadows: {
              value: [],
              properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
              },
            },
            directionalShadowMap: { value: [] },
            directionalShadowMatrix: { value: [] },
            spotLights: {
              value: [],
              properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {},
              },
            },
            spotLightShadows: {
              value: [],
              properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
              },
            },
            spotLightMap: { value: [] },
            spotShadowMap: { value: [] },
            spotLightMatrix: { value: [] },
            pointLights: {
              value: [],
              properties: { color: {}, position: {}, decay: {}, distance: {} },
            },
            pointLightShadows: {
              value: [],
              properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {},
              },
            },
            pointShadowMap: { value: [] },
            pointShadowMatrix: { value: [] },
            hemisphereLights: {
              value: [],
              properties: { direction: {}, skyColor: {}, groundColor: {} },
            },
            rectAreaLights: {
              value: [],
              properties: { color: {}, position: {}, width: {}, height: {} },
            },
            ltc_1: { value: null },
            ltc_2: { value: null },
          },
          points: {
            diffuse: { value: new we(16777215) },
            opacity: { value: 1 },
            size: { value: 1 },
            scale: { value: 1 },
            map: { value: null },
            alphaMap: { value: null },
            alphaTest: { value: 0 },
            uvTransform: { value: new A() },
          },
          sprite: {
            diffuse: { value: new we(16777215) },
            opacity: { value: 1 },
            center: { value: new W(0.5, 0.5) },
            rotation: { value: 0 },
            map: { value: null },
            alphaMap: { value: null },
            alphaTest: { value: 0 },
            uvTransform: { value: new A() },
          },
        },
        An = {
          basic: {
            uniforms: re([
              wn.common,
              wn.specularmap,
              wn.envmap,
              wn.aomap,
              wn.lightmap,
              wn.fog,
            ]),
            vertexShader: Tn.meshbasic_vert,
            fragmentShader: Tn.meshbasic_frag,
          },
          lambert: {
            uniforms: re([
              wn.common,
              wn.specularmap,
              wn.envmap,
              wn.aomap,
              wn.lightmap,
              wn.emissivemap,
              wn.bumpmap,
              wn.normalmap,
              wn.displacementmap,
              wn.fog,
              wn.lights,
              { emissive: { value: new we(0) } },
            ]),
            vertexShader: Tn.meshlambert_vert,
            fragmentShader: Tn.meshlambert_frag,
          },
          phong: {
            uniforms: re([
              wn.common,
              wn.specularmap,
              wn.envmap,
              wn.aomap,
              wn.lightmap,
              wn.emissivemap,
              wn.bumpmap,
              wn.normalmap,
              wn.displacementmap,
              wn.fog,
              wn.lights,
              {
                emissive: { value: new we(0) },
                specular: { value: new we(1118481) },
                shininess: { value: 30 },
              },
            ]),
            vertexShader: Tn.meshphong_vert,
            fragmentShader: Tn.meshphong_frag,
          },
          standard: {
            uniforms: re([
              wn.common,
              wn.envmap,
              wn.aomap,
              wn.lightmap,
              wn.emissivemap,
              wn.bumpmap,
              wn.normalmap,
              wn.displacementmap,
              wn.roughnessmap,
              wn.metalnessmap,
              wn.fog,
              wn.lights,
              {
                emissive: { value: new we(0) },
                roughness: { value: 1 },
                metalness: { value: 0 },
                envMapIntensity: { value: 1 },
              },
            ]),
            vertexShader: Tn.meshphysical_vert,
            fragmentShader: Tn.meshphysical_frag,
          },
          toon: {
            uniforms: re([
              wn.common,
              wn.aomap,
              wn.lightmap,
              wn.emissivemap,
              wn.bumpmap,
              wn.normalmap,
              wn.displacementmap,
              wn.gradientmap,
              wn.fog,
              wn.lights,
              { emissive: { value: new we(0) } },
            ]),
            vertexShader: Tn.meshtoon_vert,
            fragmentShader: Tn.meshtoon_frag,
          },
          matcap: {
            uniforms: re([
              wn.common,
              wn.bumpmap,
              wn.normalmap,
              wn.displacementmap,
              wn.fog,
              { matcap: { value: null } },
            ]),
            vertexShader: Tn.meshmatcap_vert,
            fragmentShader: Tn.meshmatcap_frag,
          },
          points: {
            uniforms: re([wn.points, wn.fog]),
            vertexShader: Tn.points_vert,
            fragmentShader: Tn.points_frag,
          },
          dashed: {
            uniforms: re([
              wn.common,
              wn.fog,
              {
                scale: { value: 1 },
                dashSize: { value: 1 },
                totalSize: { value: 2 },
              },
            ]),
            vertexShader: Tn.linedashed_vert,
            fragmentShader: Tn.linedashed_frag,
          },
          depth: {
            uniforms: re([wn.common, wn.displacementmap]),
            vertexShader: Tn.depth_vert,
            fragmentShader: Tn.depth_frag,
          },
          normal: {
            uniforms: re([
              wn.common,
              wn.bumpmap,
              wn.normalmap,
              wn.displacementmap,
              { opacity: { value: 1 } },
            ]),
            vertexShader: Tn.meshnormal_vert,
            fragmentShader: Tn.meshnormal_frag,
          },
          sprite: {
            uniforms: re([wn.sprite, wn.fog]),
            vertexShader: Tn.sprite_vert,
            fragmentShader: Tn.sprite_frag,
          },
          background: {
            uniforms: { uvTransform: { value: new A() }, t2D: { value: null } },
            vertexShader: Tn.background_vert,
            fragmentShader: Tn.background_frag,
          },
          backgroundCube: {
            uniforms: {
              envMap: { value: null },
              flipEnvMap: { value: -1 },
              backgroundBlurriness: { value: 0 },
            },
            vertexShader: Tn.backgroundCube_vert,
            fragmentShader: Tn.backgroundCube_frag,
          },
          cube: {
            uniforms: {
              tCube: { value: null },
              tFlip: { value: -1 },
              opacity: { value: 1 },
            },
            vertexShader: Tn.cube_vert,
            fragmentShader: Tn.cube_frag,
          },
          equirect: {
            uniforms: { tEquirect: { value: null } },
            vertexShader: Tn.equirect_vert,
            fragmentShader: Tn.equirect_frag,
          },
          distanceRGBA: {
            uniforms: re([
              wn.common,
              wn.displacementmap,
              {
                referencePosition: { value: new d() },
                nearDistance: { value: 1 },
                farDistance: { value: 1e3 },
              },
            ]),
            vertexShader: Tn.distanceRGBA_vert,
            fragmentShader: Tn.distanceRGBA_frag,
          },
          shadow: {
            uniforms: re([
              wn.lights,
              wn.fog,
              { color: { value: new we(0) }, opacity: { value: 1 } },
            ]),
            vertexShader: Tn.shadow_vert,
            fragmentShader: Tn.shadow_frag,
          },
        };
      function Rn(t, e, n, i, r, a, s) {
        const o = new we(0);
        let l,
          c,
          u = !0 === a ? 0 : 1,
          h = null,
          d = 0,
          p = null;
        function f(t, e) {
          i.buffers.color.setClear(t.r, t.g, t.b, e, s);
        }
        return {
          getClearColor: function () {
            return o;
          },
          setClearColor: function (t, e = 1) {
            o.set(t), (u = e), f(o, u);
          },
          getClearAlpha: function () {
            return u;
          },
          setClearAlpha: function (t) {
            (u = t), f(o, u);
          },
          render: function (i, a) {
            let s = !1,
              m = !0 === a.isScene ? a.background : null;
            m &&
              m.isTexture &&
              (m = (a.backgroundBlurriness > 0 ? n : e).get(m));
            const g = t.xr,
              _ = g.getSession && g.getSession();
            _ && "additive" === _.environmentBlendMode && (m = null),
              null === m ? f(o, u) : m && m.isColor && (f(m, 1), (s = !0)),
              (t.autoClear || s) &&
                t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
              m && (m.isCubeTexture || m.mapping === ct)
                ? (void 0 === c &&
                    ((c = new Sn(
                      new We(1, 1, 1),
                      new se({
                        name: "BackgroundCubeMaterial",
                        uniforms: ie(An.backgroundCube.uniforms),
                        vertexShader: An.backgroundCube.vertexShader,
                        fragmentShader: An.backgroundCube.fragmentShader,
                        side: 1,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1,
                      })
                    )),
                    c.geometry.deleteAttribute("normal"),
                    c.geometry.deleteAttribute("uv"),
                    (c.onBeforeRender = function (t, e, n) {
                      this.matrixWorld.copyPosition(n.matrixWorld);
                    }),
                    Object.defineProperty(c.material, "envMap", {
                      get: function () {
                        return this.uniforms.envMap.value;
                      },
                    }),
                    r.update(c)),
                  (c.material.uniforms.envMap.value = m),
                  (c.material.uniforms.flipEnvMap.value =
                    m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1),
                  (c.material.uniforms.backgroundBlurriness.value =
                    a.backgroundBlurriness),
                  (h === m && d === m.version && p === t.toneMapping) ||
                    ((c.material.needsUpdate = !0),
                    (h = m),
                    (d = m.version),
                    (p = t.toneMapping)),
                  c.layers.enableAll(),
                  i.unshift(c, c.geometry, c.material, 0, 0, null))
                : m &&
                  m.isTexture &&
                  (void 0 === l &&
                    ((l = new Sn(
                      new Xe(2, 2),
                      new se({
                        name: "BackgroundMaterial",
                        uniforms: ie(An.background.uniforms),
                        vertexShader: An.background.vertexShader,
                        fragmentShader: An.background.fragmentShader,
                        side: 0,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1,
                      })
                    )),
                    l.geometry.deleteAttribute("normal"),
                    Object.defineProperty(l.material, "map", {
                      get: function () {
                        return this.uniforms.t2D.value;
                      },
                    }),
                    r.update(l)),
                  (l.material.uniforms.t2D.value = m),
                  !0 === m.matrixAutoUpdate && m.updateMatrix(),
                  l.material.uniforms.uvTransform.value.copy(m.matrix),
                  (h === m && d === m.version && p === t.toneMapping) ||
                    ((l.material.needsUpdate = !0),
                    (h = m),
                    (d = m.version),
                    (p = t.toneMapping)),
                  l.layers.enableAll(),
                  i.unshift(l, l.geometry, l.material, 0, 0, null));
          },
        };
      }
      function Cn(t, e, n, i) {
        const r = t.getParameter(t.MAX_VERTEX_ATTRIBS),
          a = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
          s = i.isWebGL2 || null !== a,
          o = {},
          l = p(null);
        let c = l,
          u = !1;
        function h(e) {
          return i.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e);
        }
        function d(e) {
          return i.isWebGL2
            ? t.deleteVertexArray(e)
            : a.deleteVertexArrayOES(e);
        }
        function p(t) {
          const e = [],
            n = [],
            i = [];
          for (let t = 0; t < r; t++) (e[t] = 0), (n[t] = 0), (i[t] = 0);
          return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: e,
            enabledAttributes: n,
            attributeDivisors: i,
            object: t,
            attributes: {},
            index: null,
          };
        }
        function f() {
          const t = c.newAttributes;
          for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
        }
        function m(t) {
          g(t, 0);
        }
        function g(n, r) {
          const a = c.newAttributes,
            s = c.enabledAttributes,
            o = c.attributeDivisors;
          (a[n] = 1),
            0 === s[n] && (t.enableVertexAttribArray(n), (s[n] = 1)),
            o[n] !== r &&
              ((i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[
                i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
              ](n, r),
              (o[n] = r));
        }
        function _() {
          const e = c.newAttributes,
            n = c.enabledAttributes;
          for (let i = 0, r = n.length; i < r; i++)
            n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
        }
        function v(e, n, r, a, s, o) {
          !0 !== i.isWebGL2 || (r !== t.INT && r !== t.UNSIGNED_INT)
            ? t.vertexAttribPointer(e, n, r, a, s, o)
            : t.vertexAttribIPointer(e, n, r, s, o);
        }
        function x() {
          M(), (u = !0), c !== l && ((c = l), h(c.object));
        }
        function M() {
          (l.geometry = null), (l.program = null), (l.wireframe = !1);
        }
        return {
          setup: function (r, l, d, x, M) {
            let y = !1;
            if (s) {
              const e = (function (e, n, r) {
                const s = !0 === r.wireframe;
                let l = o[e.id];
                void 0 === l && ((l = {}), (o[e.id] = l));
                let c = l[n.id];
                void 0 === c && ((c = {}), (l[n.id] = c));
                let u = c[s];
                return (
                  void 0 === u &&
                    ((u = p(
                      i.isWebGL2
                        ? t.createVertexArray()
                        : a.createVertexArrayOES()
                    )),
                    (c[s] = u)),
                  u
                );
              })(x, d, l);
              c !== e && ((c = e), h(c.object)),
                (y = (function (t, e, n, i) {
                  const r = c.attributes,
                    a = e.attributes;
                  let s = 0;
                  const o = n.getAttributes();
                  for (const e in o)
                    if (o[e].location >= 0) {
                      const n = r[e];
                      let i = a[e];
                      if (
                        (void 0 === i &&
                          ("instanceMatrix" === e &&
                            t.instanceMatrix &&
                            (i = t.instanceMatrix),
                          "instanceColor" === e &&
                            t.instanceColor &&
                            (i = t.instanceColor)),
                        void 0 === n)
                      )
                        return !0;
                      if (n.attribute !== i) return !0;
                      if (i && n.data !== i.data) return !0;
                      s++;
                    }
                  return c.attributesNum !== s || c.index !== i;
                })(r, x, d, M)),
                y &&
                  (function (t, e, n, i) {
                    const r = {},
                      a = e.attributes;
                    let s = 0;
                    const o = n.getAttributes();
                    for (const e in o)
                      if (o[e].location >= 0) {
                        let n = a[e];
                        void 0 === n &&
                          ("instanceMatrix" === e &&
                            t.instanceMatrix &&
                            (n = t.instanceMatrix),
                          "instanceColor" === e &&
                            t.instanceColor &&
                            (n = t.instanceColor));
                        const i = {};
                        (i.attribute = n),
                          n && n.data && (i.data = n.data),
                          (r[e] = i),
                          s++;
                      }
                    (c.attributes = r), (c.attributesNum = s), (c.index = i);
                  })(r, x, d, M);
            } else {
              const t = !0 === l.wireframe;
              (c.geometry === x.id &&
                c.program === d.id &&
                c.wireframe === t) ||
                ((c.geometry = x.id),
                (c.program = d.id),
                (c.wireframe = t),
                (y = !0));
            }
            null !== M && n.update(M, t.ELEMENT_ARRAY_BUFFER),
              (y || u) &&
                ((u = !1),
                (function (r, a, s, o) {
                  if (
                    !1 === i.isWebGL2 &&
                    (r.isInstancedMesh || o.isInstancedBufferGeometry) &&
                    null === e.get("ANGLE_instanced_arrays")
                  )
                    return;
                  f();
                  const l = o.attributes,
                    c = s.getAttributes(),
                    u = a.defaultAttributeValues;
                  for (const e in c) {
                    const i = c[e];
                    if (i.location >= 0) {
                      let a = l[e];
                      if (
                        (void 0 === a &&
                          ("instanceMatrix" === e &&
                            r.instanceMatrix &&
                            (a = r.instanceMatrix),
                          "instanceColor" === e &&
                            r.instanceColor &&
                            (a = r.instanceColor)),
                        void 0 !== a)
                      ) {
                        const e = a.normalized,
                          s = a.itemSize,
                          l = n.get(a);
                        if (void 0 === l) continue;
                        const c = l.buffer,
                          u = l.type,
                          h = l.bytesPerElement;
                        if (a.isInterleavedBufferAttribute) {
                          const n = a.data,
                            l = n.stride,
                            d = a.offset;
                          if (n.isInstancedInterleavedBuffer) {
                            for (let t = 0; t < i.locationSize; t++)
                              g(i.location + t, n.meshPerAttribute);
                            !0 !== r.isInstancedMesh &&
                              void 0 === o._maxInstanceCount &&
                              (o._maxInstanceCount =
                                n.meshPerAttribute * n.count);
                          } else
                            for (let t = 0; t < i.locationSize; t++)
                              m(i.location + t);
                          t.bindBuffer(t.ARRAY_BUFFER, c);
                          for (let t = 0; t < i.locationSize; t++)
                            v(
                              i.location + t,
                              s / i.locationSize,
                              u,
                              e,
                              l * h,
                              (d + (s / i.locationSize) * t) * h
                            );
                        } else {
                          if (a.isInstancedBufferAttribute) {
                            for (let t = 0; t < i.locationSize; t++)
                              g(i.location + t, a.meshPerAttribute);
                            !0 !== r.isInstancedMesh &&
                              void 0 === o._maxInstanceCount &&
                              (o._maxInstanceCount =
                                a.meshPerAttribute * a.count);
                          } else
                            for (let t = 0; t < i.locationSize; t++)
                              m(i.location + t);
                          t.bindBuffer(t.ARRAY_BUFFER, c);
                          for (let t = 0; t < i.locationSize; t++)
                            v(
                              i.location + t,
                              s / i.locationSize,
                              u,
                              e,
                              s * h,
                              (s / i.locationSize) * t * h
                            );
                        }
                      } else if (void 0 !== u) {
                        const n = u[e];
                        if (void 0 !== n)
                          switch (n.length) {
                            case 2:
                              t.vertexAttrib2fv(i.location, n);
                              break;
                            case 3:
                              t.vertexAttrib3fv(i.location, n);
                              break;
                            case 4:
                              t.vertexAttrib4fv(i.location, n);
                              break;
                            default:
                              t.vertexAttrib1fv(i.location, n);
                          }
                      }
                    }
                  }
                  _();
                })(r, l, d, x),
                null !== M &&
                  t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n.get(M).buffer));
          },
          reset: x,
          resetDefaultState: M,
          dispose: function () {
            x();
            for (const t in o) {
              const e = o[t];
              for (const t in e) {
                const n = e[t];
                for (const t in n) d(n[t].object), delete n[t];
                delete e[t];
              }
              delete o[t];
            }
          },
          releaseStatesOfGeometry: function (t) {
            if (void 0 === o[t.id]) return;
            const e = o[t.id];
            for (const t in e) {
              const n = e[t];
              for (const t in n) d(n[t].object), delete n[t];
              delete e[t];
            }
            delete o[t.id];
          },
          releaseStatesOfProgram: function (t) {
            for (const e in o) {
              const n = o[e];
              if (void 0 === n[t.id]) continue;
              const i = n[t.id];
              for (const t in i) d(i[t].object), delete i[t];
              delete n[t.id];
            }
          },
          initAttributes: f,
          enableAttribute: m,
          disableUnusedAttributes: _,
        };
      }
      function Ln(t, e, n, i) {
        const r = i.isWebGL2;
        let a;
        (this.setMode = function (t) {
          a = t;
        }),
          (this.render = function (e, i) {
            t.drawArrays(a, e, i), n.update(i, a, 1);
          }),
          (this.renderInstances = function (i, s, o) {
            if (0 === o) return;
            let l, c;
            if (r) (l = t), (c = "drawArraysInstanced");
            else if (
              ((l = e.get("ANGLE_instanced_arrays")),
              (c = "drawArraysInstancedANGLE"),
              null === l)
            )
              return void console.error(
                "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
              );
            l[c](a, i, s, o), n.update(s, a, o);
          });
      }
      function Dn(t, e, n) {
        let i;
        function r(e) {
          if ("highp" === e) {
            if (
              t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT)
                .precision > 0 &&
              t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT)
                .precision > 0
            )
              return "highp";
            e = "mediump";
          }
          return "mediump" === e &&
            t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT)
              .precision > 0 &&
            t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT)
              .precision > 0
            ? "mediump"
            : "lowp";
        }
        const a =
          ("undefined" != typeof WebGL2RenderingContext &&
            t instanceof WebGL2RenderingContext) ||
          ("undefined" != typeof WebGL2ComputeRenderingContext &&
            t instanceof WebGL2ComputeRenderingContext);
        let s = void 0 !== n.precision ? n.precision : "highp";
        const o = r(s);
        o !== s &&
          (console.warn(
            "THREE.WebGLRenderer:",
            s,
            "not supported, using",
            o,
            "instead."
          ),
          (s = o));
        const l = a || e.has("WEBGL_draw_buffers"),
          c = !0 === n.logarithmicDepthBuffer,
          u = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
          h = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          d = t.getParameter(t.MAX_TEXTURE_SIZE),
          p = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
          f = t.getParameter(t.MAX_VERTEX_ATTRIBS),
          m = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
          g = t.getParameter(t.MAX_VARYING_VECTORS),
          _ = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
          v = h > 0,
          x = a || e.has("OES_texture_float");
        return {
          isWebGL2: a,
          drawBuffers: l,
          getMaxAnisotropy: function () {
            if (void 0 !== i) return i;
            if (!0 === e.has("EXT_texture_filter_anisotropic")) {
              const n = e.get("EXT_texture_filter_anisotropic");
              i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            } else i = 0;
            return i;
          },
          getMaxPrecision: r,
          precision: s,
          logarithmicDepthBuffer: c,
          maxTextures: u,
          maxVertexTextures: h,
          maxTextureSize: d,
          maxCubemapSize: p,
          maxAttributes: f,
          maxVertexUniforms: m,
          maxVaryings: g,
          maxFragmentUniforms: _,
          vertexTextures: v,
          floatFragmentTextures: x,
          floatVertexTextures: v && x,
          maxSamples: a ? t.getParameter(t.MAX_SAMPLES) : 0,
        };
      }
      function Pn(t) {
        const e = this;
        let n = null,
          i = 0,
          r = !1,
          a = !1;
        const s = new Fe(),
          o = new A(),
          l = { value: null, needsUpdate: !1 };
        function c() {
          l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)),
            (e.numPlanes = i),
            (e.numIntersection = 0);
        }
        function u(t, n, i, r) {
          const a = null !== t ? t.length : 0;
          let c = null;
          if (0 !== a) {
            if (((c = l.value), !0 !== r || null === c)) {
              const e = i + 4 * a,
                r = n.matrixWorldInverse;
              o.getNormalMatrix(r),
                (null === c || c.length < e) && (c = new Float32Array(e));
              for (let e = 0, n = i; e !== a; ++e, n += 4)
                s.copy(t[e]).applyMatrix4(r, o),
                  s.normal.toArray(c, n),
                  (c[n + 3] = s.constant);
            }
            (l.value = c), (l.needsUpdate = !0);
          }
          return (e.numPlanes = a), (e.numIntersection = 0), c;
        }
        (this.uniform = l),
          (this.numPlanes = 0),
          (this.numIntersection = 0),
          (this.init = function (t, e, a) {
            const s = 0 !== t.length || e || 0 !== i || r;
            return (r = e), (n = u(t, a, 0)), (i = t.length), s;
          }),
          (this.beginShadows = function () {
            (a = !0), u(null);
          }),
          (this.endShadows = function () {
            (a = !1), c();
          }),
          (this.setState = function (e, s, o) {
            const h = e.clippingPlanes,
              d = e.clipIntersection,
              p = e.clipShadows,
              f = t.get(e);
            if (!r || null === h || 0 === h.length || (a && !p))
              a ? u(null) : c();
            else {
              const t = a ? 0 : i,
                e = 4 * t;
              let r = f.clippingState || null;
              (l.value = r), (r = u(h, s, e, o));
              for (let t = 0; t !== e; ++t) r[t] = n[t];
              (f.clippingState = r),
                (this.numIntersection = d ? this.numPlanes : 0),
                (this.numPlanes += t);
            }
          });
      }
      let In;
      An.physical = {
        uniforms: re([
          An.standard.uniforms,
          {
            clearcoat: { value: 0 },
            clearcoatMap: { value: null },
            clearcoatRoughness: { value: 0 },
            clearcoatRoughnessMap: { value: null },
            clearcoatNormalScale: { value: new W(1, 1) },
            clearcoatNormalMap: { value: null },
            iridescence: { value: 0 },
            iridescenceMap: { value: null },
            iridescenceIOR: { value: 1.3 },
            iridescenceThicknessMinimum: { value: 100 },
            iridescenceThicknessMaximum: { value: 400 },
            iridescenceThicknessMap: { value: null },
            sheen: { value: 0 },
            sheenColor: { value: new we(0) },
            sheenColorMap: { value: null },
            sheenRoughness: { value: 1 },
            sheenRoughnessMap: { value: null },
            transmission: { value: 0 },
            transmissionMap: { value: null },
            transmissionSamplerSize: { value: new W() },
            transmissionSamplerMap: { value: null },
            thickness: { value: 0 },
            thicknessMap: { value: null },
            attenuationDistance: { value: 0 },
            attenuationColor: { value: new we(0) },
            specularIntensity: { value: 1 },
            specularIntensityMap: { value: null },
            specularColor: { value: new we(1, 1, 1) },
            specularColorMap: { value: null },
          },
        ]),
        vertexShader: Tn.meshphysical_vert,
        fragmentShader: Tn.meshphysical_frag,
      };
      class Un {
        static getDataURL(t) {
          if (/^data:/i.test(t.src)) return t.src;
          if ("undefined" == typeof HTMLCanvasElement) return t.src;
          let e;
          if (t instanceof HTMLCanvasElement) e = t;
          else {
            void 0 === In && (In = qt("canvas")),
              (In.width = t.width),
              (In.height = t.height);
            const n = In.getContext("2d");
            t instanceof ImageData
              ? n.putImageData(t, 0, 0)
              : n.drawImage(t, 0, 0, t.width, t.height),
              (e = In);
          }
          return e.width > 2048 || e.height > 2048
            ? (console.warn(
                "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
                t
              ),
              e.toDataURL("image/jpeg", 0.6))
            : e.toDataURL("image/png");
        }
        static sRGBToLinear(t) {
          if (
            ("undefined" != typeof HTMLImageElement &&
              t instanceof HTMLImageElement) ||
            ("undefined" != typeof HTMLCanvasElement &&
              t instanceof HTMLCanvasElement) ||
            ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
          ) {
            const e = qt("canvas");
            (e.width = t.width), (e.height = t.height);
            const n = e.getContext("2d");
            n.drawImage(t, 0, 0, t.width, t.height);
            const i = n.getImageData(0, 0, t.width, t.height),
              r = i.data;
            for (let t = 0; t < r.length; t++) r[t] = 255 * ge(r[t] / 255);
            return n.putImageData(i, 0, 0), e;
          }
          if (t.data) {
            const e = t.data.slice(0);
            for (let t = 0; t < e.length; t++)
              e instanceof Uint8Array || e instanceof Uint8ClampedArray
                ? (e[t] = Math.floor(255 * ge(e[t] / 255)))
                : (e[t] = ge(e[t]));
            return { data: e, width: t.width, height: t.height };
          }
          return (
            console.warn(
              "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
            ),
            t
          );
        }
      }
      class Nn {
        constructor(t = null) {
          (this.isSource = !0),
            (this.uuid = r()),
            (this.data = t),
            (this.version = 0);
        }
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t;
          if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
          const n = { uuid: this.uuid, url: "" },
            i = this.data;
          if (null !== i) {
            let t;
            if (Array.isArray(i)) {
              t = [];
              for (let e = 0, n = i.length; e < n; e++)
                i[e].isDataTexture ? t.push(On(i[e].image)) : t.push(On(i[e]));
            } else t = On(i);
            n.url = t;
          }
          return e || (t.images[this.uuid] = n), n;
        }
      }
      function On(t) {
        return ("undefined" != typeof HTMLImageElement &&
          t instanceof HTMLImageElement) ||
          ("undefined" != typeof HTMLCanvasElement &&
            t instanceof HTMLCanvasElement) ||
          ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
          ? Un.getDataURL(t)
          : t.data
          ? {
              data: Array.from(t.data),
              width: t.width,
              height: t.height,
              type: t.data.constructor.name,
            }
          : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
      }
      let Fn = 0;
      class zn extends E {
        constructor(
          t = zn.DEFAULT_IMAGE,
          e = zn.DEFAULT_MAPPING,
          n = 1001,
          i = 1001,
          a = 1006,
          s = 1008,
          o = 1023,
          l = 1009,
          c = 1,
          u = 3e3
        ) {
          super(),
            (this.isTexture = !0),
            Object.defineProperty(this, "id", { value: Fn++ }),
            (this.uuid = r()),
            (this.name = ""),
            (this.source = new Nn(t)),
            (this.mipmaps = []),
            (this.mapping = e),
            (this.wrapS = n),
            (this.wrapT = i),
            (this.magFilter = a),
            (this.minFilter = s),
            (this.anisotropy = c),
            (this.format = o),
            (this.internalFormat = null),
            (this.type = l),
            (this.offset = new W(0, 0)),
            (this.repeat = new W(1, 1)),
            (this.center = new W(0, 0)),
            (this.rotation = 0),
            (this.matrixAutoUpdate = !0),
            (this.matrix = new A()),
            (this.generateMipmaps = !0),
            (this.premultiplyAlpha = !1),
            (this.flipY = !0),
            (this.unpackAlignment = 4),
            (this.encoding = u),
            (this.userData = {}),
            (this.version = 0),
            (this.onUpdate = null),
            (this.isRenderTargetTexture = !1),
            (this.needsPMREMUpdate = !1);
        }
        get image() {
          return this.source.data;
        }
        set image(t) {
          this.source.data = t;
        }
        updateMatrix() {
          this.matrix.setUvTransform(
            this.offset.x,
            this.offset.y,
            this.repeat.x,
            this.repeat.y,
            this.rotation,
            this.center.x,
            this.center.y
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return (
            (this.name = t.name),
            (this.source = t.source),
            (this.mipmaps = t.mipmaps.slice(0)),
            (this.mapping = t.mapping),
            (this.wrapS = t.wrapS),
            (this.wrapT = t.wrapT),
            (this.magFilter = t.magFilter),
            (this.minFilter = t.minFilter),
            (this.anisotropy = t.anisotropy),
            (this.format = t.format),
            (this.internalFormat = t.internalFormat),
            (this.type = t.type),
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            this.center.copy(t.center),
            (this.rotation = t.rotation),
            (this.matrixAutoUpdate = t.matrixAutoUpdate),
            this.matrix.copy(t.matrix),
            (this.generateMipmaps = t.generateMipmaps),
            (this.premultiplyAlpha = t.premultiplyAlpha),
            (this.flipY = t.flipY),
            (this.unpackAlignment = t.unpackAlignment),
            (this.encoding = t.encoding),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            (this.needsUpdate = !0),
            this
          );
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t;
          if (!e && void 0 !== t.textures[this.uuid])
            return t.textures[this.uuid];
          const n = {
            metadata: {
              version: 4.5,
              type: "Texture",
              generator: "Texture.toJSON",
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment,
          };
          return (
            "{}" !== JSON.stringify(this.userData) &&
              (n.userData = this.userData),
            e || (t.textures[this.uuid] = n),
            n
          );
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
        transformUv(t) {
          if (300 !== this.mapping) return t;
          if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
            switch (this.wrapS) {
              case ut:
                t.x = t.x - Math.floor(t.x);
                break;
              case ht:
                t.x = t.x < 0 ? 0 : 1;
                break;
              case dt:
                1 === Math.abs(Math.floor(t.x) % 2)
                  ? (t.x = Math.ceil(t.x) - t.x)
                  : (t.x = t.x - Math.floor(t.x));
            }
          if (t.y < 0 || t.y > 1)
            switch (this.wrapT) {
              case ut:
                t.y = t.y - Math.floor(t.y);
                break;
              case ht:
                t.y = t.y < 0 ? 0 : 1;
                break;
              case dt:
                1 === Math.abs(Math.floor(t.y) % 2)
                  ? (t.y = Math.ceil(t.y) - t.y)
                  : (t.y = t.y - Math.floor(t.y));
            }
          return this.flipY && (t.y = 1 - t.y), t;
        }
        set needsUpdate(t) {
          !0 === t && (this.version++, (this.source.needsUpdate = !0));
        }
      }
      (zn.DEFAULT_IMAGE = null), (zn.DEFAULT_MAPPING = 300);
      class Bn extends E {
        constructor(t = 1, e = 1, n = {}) {
          super(),
            (this.isWebGLRenderTarget = !0),
            (this.width = t),
            (this.height = e),
            (this.depth = 1),
            (this.scissor = new He(0, 0, t, e)),
            (this.scissorTest = !1),
            (this.viewport = new He(0, 0, t, e));
          const i = { width: t, height: e, depth: 1 };
          (this.texture = new zn(
            i,
            n.mapping,
            n.wrapS,
            n.wrapT,
            n.magFilter,
            n.minFilter,
            n.format,
            n.type,
            n.anisotropy,
            n.encoding
          )),
            (this.texture.isRenderTargetTexture = !0),
            (this.texture.flipY = !1),
            (this.texture.generateMipmaps =
              void 0 !== n.generateMipmaps && n.generateMipmaps),
            (this.texture.internalFormat =
              void 0 !== n.internalFormat ? n.internalFormat : null),
            (this.texture.minFilter =
              void 0 !== n.minFilter ? n.minFilter : ft),
            (this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
            (this.stencilBuffer =
              void 0 !== n.stencilBuffer && n.stencilBuffer),
            (this.depthTexture =
              void 0 !== n.depthTexture ? n.depthTexture : null),
            (this.samples = void 0 !== n.samples ? n.samples : 0);
        }
        setSize(t, e, n = 1) {
          (this.width === t && this.height === e && this.depth === n) ||
            ((this.width = t),
            (this.height = e),
            (this.depth = n),
            (this.texture.image.width = t),
            (this.texture.image.height = e),
            (this.texture.image.depth = n),
            this.dispose()),
            this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e);
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          (this.width = t.width),
            (this.height = t.height),
            (this.depth = t.depth),
            this.viewport.copy(t.viewport),
            (this.texture = t.texture.clone()),
            (this.texture.isRenderTargetTexture = !0);
          const e = Object.assign({}, t.texture.image);
          return (
            (this.texture.source = new Nn(e)),
            (this.depthBuffer = t.depthBuffer),
            (this.stencilBuffer = t.stencilBuffer),
            null !== t.depthTexture &&
              (this.depthTexture = t.depthTexture.clone()),
            (this.samples = t.samples),
            this
          );
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
      }
      const Gn = 90;
      class Hn extends H {
        constructor(t, e, n) {
          super(), (this.type = "CubeCamera"), (this.renderTarget = n);
          const i = new k(Gn, 1, t, e);
          (i.layers = this.layers),
            i.up.set(0, -1, 0),
            i.lookAt(new d(1, 0, 0)),
            this.add(i);
          const r = new k(Gn, 1, t, e);
          (r.layers = this.layers),
            r.up.set(0, -1, 0),
            r.lookAt(new d(-1, 0, 0)),
            this.add(r);
          const a = new k(Gn, 1, t, e);
          (a.layers = this.layers),
            a.up.set(0, 0, 1),
            a.lookAt(new d(0, 1, 0)),
            this.add(a);
          const s = new k(Gn, 1, t, e);
          (s.layers = this.layers),
            s.up.set(0, 0, -1),
            s.lookAt(new d(0, -1, 0)),
            this.add(s);
          const o = new k(Gn, 1, t, e);
          (o.layers = this.layers),
            o.up.set(0, -1, 0),
            o.lookAt(new d(0, 0, 1)),
            this.add(o);
          const l = new k(Gn, 1, t, e);
          (l.layers = this.layers),
            l.up.set(0, -1, 0),
            l.lookAt(new d(0, 0, -1)),
            this.add(l);
        }
        update(t, e) {
          null === this.parent && this.updateMatrixWorld();
          const n = this.renderTarget,
            [i, r, a, s, o, l] = this.children,
            c = t.getRenderTarget(),
            u = t.toneMapping,
            h = t.xr.enabled;
          (t.toneMapping = 0), (t.xr.enabled = !1);
          const d = n.texture.generateMipmaps;
          (n.texture.generateMipmaps = !1),
            t.setRenderTarget(n, 0),
            t.render(e, i),
            t.setRenderTarget(n, 1),
            t.render(e, r),
            t.setRenderTarget(n, 2),
            t.render(e, a),
            t.setRenderTarget(n, 3),
            t.render(e, s),
            t.setRenderTarget(n, 4),
            t.render(e, o),
            (n.texture.generateMipmaps = d),
            t.setRenderTarget(n, 5),
            t.render(e, l),
            t.setRenderTarget(c),
            (t.toneMapping = u),
            (t.xr.enabled = h),
            (n.texture.needsPMREMUpdate = !0);
        }
      }
      class Vn extends zn {
        constructor(t, e, n, i, r, a, s, o, l, c) {
          super(
            (t = void 0 !== t ? t : []),
            (e = void 0 !== e ? e : ot),
            n,
            i,
            r,
            a,
            s,
            o,
            l,
            c
          ),
            (this.isCubeTexture = !0),
            (this.flipY = !1);
        }
        get images() {
          return this.image;
        }
        set images(t) {
          this.image = t;
        }
      }
      class kn extends Bn {
        constructor(t = 1, e = {}) {
          super(t, t, e), (this.isWebGLCubeRenderTarget = !0);
          const n = { width: t, height: t, depth: 1 },
            i = [n, n, n, n, n, n];
          (this.texture = new Vn(
            i,
            e.mapping,
            e.wrapS,
            e.wrapT,
            e.magFilter,
            e.minFilter,
            e.format,
            e.type,
            e.anisotropy,
            e.encoding
          )),
            (this.texture.isRenderTargetTexture = !0),
            (this.texture.generateMipmaps =
              void 0 !== e.generateMipmaps && e.generateMipmaps),
            (this.texture.minFilter =
              void 0 !== e.minFilter ? e.minFilter : ft);
        }
        fromEquirectangularTexture(t, e) {
          (this.texture.type = e.type),
            (this.texture.encoding = e.encoding),
            (this.texture.generateMipmaps = e.generateMipmaps),
            (this.texture.minFilter = e.minFilter),
            (this.texture.magFilter = e.magFilter);
          const n = { tEquirect: { value: null } },
            i =
              "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
            r =
              "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
            a = new We(5, 5, 5),
            s = new se({
              name: "CubemapFromEquirect",
              uniforms: ie(n),
              vertexShader: i,
              fragmentShader: r,
              side: 1,
              blending: 0,
            });
          s.uniforms.tEquirect.value = e;
          const o = new Sn(a, s),
            l = e.minFilter;
          return (
            e.minFilter === mt && (e.minFilter = ft),
            new Hn(1, 10, this).update(t, o),
            (e.minFilter = l),
            o.geometry.dispose(),
            o.material.dispose(),
            this
          );
        }
        clear(t, e, n, i) {
          const r = t.getRenderTarget();
          for (let r = 0; r < 6; r++)
            t.setRenderTarget(this, r), t.clear(e, n, i);
          t.setRenderTarget(r);
        }
      }
      function Wn(t) {
        let e = new WeakMap();
        function n(t, e) {
          return (
            303 === e ? (t.mapping = ot) : 304 === e && (t.mapping = lt), t
          );
        }
        function i(t) {
          const n = t.target;
          n.removeEventListener("dispose", i);
          const r = e.get(n);
          void 0 !== r && (e.delete(n), r.dispose());
        }
        return {
          get: function (r) {
            if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
              const a = r.mapping;
              if (303 === a || 304 === a) {
                if (e.has(r)) return n(e.get(r).texture, r.mapping);
                {
                  const a = r.image;
                  if (a && a.height > 0) {
                    const s = new kn(a.height / 2);
                    return (
                      s.fromEquirectangularTexture(t, r),
                      e.set(r, s),
                      r.addEventListener("dispose", i),
                      n(s.texture, r.mapping)
                    );
                  }
                  return null;
                }
              }
            }
            return r;
          },
          dispose: function () {
            e = new WeakMap();
          },
        };
      }
      class Xn extends V {
        constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
          super(),
            (this.isOrthographicCamera = !0),
            (this.type = "OrthographicCamera"),
            (this.zoom = 1),
            (this.view = null),
            (this.left = t),
            (this.right = e),
            (this.top = n),
            (this.bottom = i),
            (this.near = r),
            (this.far = a),
            this.updateProjectionMatrix();
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            (this.left = t.left),
            (this.right = t.right),
            (this.top = t.top),
            (this.bottom = t.bottom),
            (this.near = t.near),
            (this.far = t.far),
            (this.zoom = t.zoom),
            (this.view = null === t.view ? null : Object.assign({}, t.view)),
            this
          );
        }
        setViewOffset(t, e, n, i, r, a) {
          null === this.view &&
            (this.view = {
              enabled: !0,
              fullWidth: 1,
              fullHeight: 1,
              offsetX: 0,
              offsetY: 0,
              width: 1,
              height: 1,
            }),
            (this.view.enabled = !0),
            (this.view.fullWidth = t),
            (this.view.fullHeight = e),
            (this.view.offsetX = n),
            (this.view.offsetY = i),
            (this.view.width = r),
            (this.view.height = a),
            this.updateProjectionMatrix();
        }
        clearViewOffset() {
          null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
          const t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2;
          let r = n - t,
            a = n + t,
            s = i + e,
            o = i - e;
          if (null !== this.view && this.view.enabled) {
            const t =
                (this.right - this.left) / this.view.fullWidth / this.zoom,
              e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            (r += t * this.view.offsetX),
              (a = r + t * this.view.width),
              (s -= e * this.view.offsetY),
              (o = s - e * this.view.height);
          }
          this.projectionMatrix.makeOrthographic(
            r,
            a,
            s,
            o,
            this.near,
            this.far
          ),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return (
            (e.object.zoom = this.zoom),
            (e.object.left = this.left),
            (e.object.right = this.right),
            (e.object.top = this.top),
            (e.object.bottom = this.bottom),
            (e.object.near = this.near),
            (e.object.far = this.far),
            null !== this.view &&
              (e.object.view = Object.assign({}, this.view)),
            e
          );
        }
      }
      const qn = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
        jn = new Xn(),
        Yn = new we();
      let Zn = null;
      const Kn = (1 + Math.sqrt(5)) / 2,
        Jn = 1 / Kn,
        Qn = [
          new d(1, 1, 1),
          new d(-1, 1, 1),
          new d(1, 1, -1),
          new d(-1, 1, -1),
          new d(0, Kn, Jn),
          new d(0, Kn, -Jn),
          new d(Jn, 0, Kn),
          new d(-Jn, 0, Kn),
          new d(Kn, Jn, 0),
          new d(-Kn, Jn, 0),
        ];
      class $n {
        constructor(t) {
          (this._renderer = t),
            (this._pingPongRenderTarget = null),
            (this._lodMax = 0),
            (this._cubeSize = 0),
            (this._lodPlanes = []),
            (this._sizeLods = []),
            (this._sigmas = []),
            (this._blurMaterial = null),
            (this._cubemapMaterial = null),
            (this._equirectMaterial = null),
            this._compileMaterial(this._blurMaterial);
        }
        fromScene(t, e = 0, n = 0.1, i = 100) {
          (Zn = this._renderer.getRenderTarget()), this._setSize(256);
          const r = this._allocateTargets();
          return (
            (r.depthBuffer = !0),
            this._sceneToCubeUV(t, n, i, r),
            e > 0 && this._blur(r, 0, 0, e),
            this._applyPMREM(r),
            this._cleanup(r),
            r
          );
        }
        fromEquirectangular(t, e = null) {
          return this._fromTexture(t, e);
        }
        fromCubemap(t, e = null) {
          return this._fromTexture(t, e);
        }
        compileCubemapShader() {
          null === this._cubemapMaterial &&
            ((this._cubemapMaterial = ii()),
            this._compileMaterial(this._cubemapMaterial));
        }
        compileEquirectangularShader() {
          null === this._equirectMaterial &&
            ((this._equirectMaterial = ni()),
            this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
          this._dispose(),
            null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
            null !== this._equirectMaterial && this._equirectMaterial.dispose();
        }
        _setSize(t) {
          (this._lodMax = Math.floor(Math.log2(t))),
            (this._cubeSize = Math.pow(2, this._lodMax));
        }
        _dispose() {
          null !== this._blurMaterial && this._blurMaterial.dispose(),
            null !== this._pingPongRenderTarget &&
              this._pingPongRenderTarget.dispose();
          for (let t = 0; t < this._lodPlanes.length; t++)
            this._lodPlanes[t].dispose();
        }
        _cleanup(t) {
          this._renderer.setRenderTarget(Zn),
            (t.scissorTest = !1),
            ei(t, 0, 0, t.width, t.height);
        }
        _fromTexture(t, e) {
          t.mapping === ot || t.mapping === lt
            ? this._setSize(
                0 === t.image.length
                  ? 16
                  : t.image[0].width || t.image[0].image.width
              )
            : this._setSize(t.image.width / 4),
            (Zn = this._renderer.getRenderTarget());
          const n = e || this._allocateTargets();
          return (
            this._textureToCubeUV(t, n),
            this._applyPMREM(n),
            this._cleanup(n),
            n
          );
        }
        _allocateTargets() {
          const t = 3 * Math.max(this._cubeSize, 112),
            e = 4 * this._cubeSize,
            n = {
              magFilter: ft,
              minFilter: ft,
              generateMipmaps: !1,
              type: xt,
              format: yt,
              encoding: Rt,
              depthBuffer: !1,
            },
            i = ti(t, e, n);
          if (
            null === this._pingPongRenderTarget ||
            this._pingPongRenderTarget.width !== t
          ) {
            null !== this._pingPongRenderTarget && this._dispose(),
              (this._pingPongRenderTarget = ti(t, e, n));
            const { _lodMax: i } = this;
            ({
              sizeLods: this._sizeLods,
              lodPlanes: this._lodPlanes,
              sigmas: this._sigmas,
            } = (function (t) {
              const e = [],
                n = [],
                i = [];
              let r = t;
              const a = t - 4 + 1 + qn.length;
              for (let s = 0; s < a; s++) {
                const a = Math.pow(2, r);
                n.push(a);
                let o = 1 / a;
                s > t - 4 ? (o = qn[s - t + 4 - 1]) : 0 === s && (o = 0),
                  i.push(o);
                const l = 1 / (a - 2),
                  c = -l,
                  u = 1 + l,
                  h = [c, c, u, c, u, u, c, c, u, u, c, u],
                  d = 6,
                  p = 6,
                  f = 3,
                  m = 2,
                  g = 1,
                  _ = new Float32Array(f * p * d),
                  v = new Float32Array(m * p * d),
                  x = new Float32Array(g * p * d);
                for (let t = 0; t < d; t++) {
                  const e = ((t % 3) * 2) / 3 - 1,
                    n = t > 2 ? 0 : -1,
                    i = [
                      e,
                      n,
                      0,
                      e + 2 / 3,
                      n,
                      0,
                      e + 2 / 3,
                      n + 1,
                      0,
                      e,
                      n,
                      0,
                      e + 2 / 3,
                      n + 1,
                      0,
                      e,
                      n + 1,
                      0,
                    ];
                  _.set(i, f * p * t), v.set(h, m * p * t);
                  const r = [t, t, t, t, t, t];
                  x.set(r, g * p * t);
                }
                const M = new te();
                M.setAttribute("position", new Ft(_, f)),
                  M.setAttribute("uv", new Ft(v, m)),
                  M.setAttribute("faceIndex", new Ft(x, g)),
                  e.push(M),
                  r > 4 && r--;
              }
              return { lodPlanes: e, sizeLods: n, sigmas: i };
            })(i)),
              (this._blurMaterial = (function (t, e, n) {
                const i = new Float32Array(20),
                  r = new d(0, 1, 0);
                return new se({
                  name: "SphericalGaussianBlur",
                  defines: {
                    n: 20,
                    CUBEUV_TEXEL_WIDTH: 1 / e,
                    CUBEUV_TEXEL_HEIGHT: 1 / n,
                    CUBEUV_MAX_MIP: `${t}.0`,
                  },
                  uniforms: {
                    envMap: { value: null },
                    samples: { value: 1 },
                    weights: { value: i },
                    latitudinal: { value: !1 },
                    dTheta: { value: 0 },
                    mipInt: { value: 0 },
                    poleAxis: { value: r },
                  },
                  vertexShader:
                    "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
                  fragmentShader:
                    "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                  blending: 0,
                  depthTest: !1,
                  depthWrite: !1,
                });
              })(i, t, e));
          }
          return i;
        }
        _compileMaterial(t) {
          const e = new Sn(this._lodPlanes[0], t);
          this._renderer.compile(e, jn);
        }
        _sceneToCubeUV(t, e, n, i) {
          const r = new k(90, 1, e, n),
            a = [1, -1, 1, 1, 1, 1],
            s = [1, 1, 1, -1, -1, -1],
            o = this._renderer,
            l = o.autoClear,
            c = o.toneMapping;
          o.getClearColor(Yn), (o.toneMapping = 0), (o.autoClear = !1);
          const u = new rn({
              name: "PMREM.Background",
              side: 1,
              depthWrite: !1,
              depthTest: !1,
            }),
            h = new Sn(new We(), u);
          let d = !1;
          const p = t.background;
          p
            ? p.isColor && (u.color.copy(p), (t.background = null), (d = !0))
            : (u.color.copy(Yn), (d = !0));
          for (let e = 0; e < 6; e++) {
            const n = e % 3;
            0 === n
              ? (r.up.set(0, a[e], 0), r.lookAt(s[e], 0, 0))
              : 1 === n
              ? (r.up.set(0, 0, a[e]), r.lookAt(0, s[e], 0))
              : (r.up.set(0, a[e], 0), r.lookAt(0, 0, s[e]));
            const l = this._cubeSize;
            ei(i, n * l, e > 2 ? l : 0, l, l),
              o.setRenderTarget(i),
              d && o.render(h, r),
              o.render(t, r);
          }
          h.geometry.dispose(),
            h.material.dispose(),
            (o.toneMapping = c),
            (o.autoClear = l),
            (t.background = p);
        }
        _textureToCubeUV(t, e) {
          const n = this._renderer,
            i = t.mapping === ot || t.mapping === lt;
          i
            ? (null === this._cubemapMaterial && (this._cubemapMaterial = ii()),
              (this._cubemapMaterial.uniforms.flipEnvMap.value =
                !1 === t.isRenderTargetTexture ? -1 : 1))
            : null === this._equirectMaterial &&
              (this._equirectMaterial = ni());
          const r = i ? this._cubemapMaterial : this._equirectMaterial,
            a = new Sn(this._lodPlanes[0], r);
          r.uniforms.envMap.value = t;
          const s = this._cubeSize;
          ei(e, 0, 0, 3 * s, 2 * s), n.setRenderTarget(e), n.render(a, jn);
        }
        _applyPMREM(t) {
          const e = this._renderer,
            n = e.autoClear;
          e.autoClear = !1;
          for (let e = 1; e < this._lodPlanes.length; e++) {
            const n = Math.sqrt(
                this._sigmas[e] * this._sigmas[e] -
                  this._sigmas[e - 1] * this._sigmas[e - 1]
              ),
              i = Qn[(e - 1) % Qn.length];
            this._blur(t, e - 1, e, n, i);
          }
          e.autoClear = n;
        }
        _blur(t, e, n, i, r) {
          const a = this._pingPongRenderTarget;
          this._halfBlur(t, a, e, n, i, "latitudinal", r),
            this._halfBlur(a, t, n, n, i, "longitudinal", r);
        }
        _halfBlur(t, e, n, i, r, a, s) {
          const o = this._renderer,
            l = this._blurMaterial;
          "latitudinal" !== a &&
            "longitudinal" !== a &&
            console.error(
              "blur direction must be either latitudinal or longitudinal!"
            );
          const c = new Sn(this._lodPlanes[i], l),
            u = l.uniforms,
            h = this._sizeLods[n] - 1,
            d = isFinite(r) ? Math.PI / (2 * h) : (2 * Math.PI) / 39,
            p = r / d,
            f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
          f > 20 &&
            console.warn(
              `sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`
            );
          const m = [];
          let g = 0;
          for (let t = 0; t < 20; ++t) {
            const e = t / p,
              n = Math.exp((-e * e) / 2);
            m.push(n), 0 === t ? (g += n) : t < f && (g += 2 * n);
          }
          for (let t = 0; t < m.length; t++) m[t] = m[t] / g;
          (u.envMap.value = t.texture),
            (u.samples.value = f),
            (u.weights.value = m),
            (u.latitudinal.value = "latitudinal" === a),
            s && (u.poleAxis.value = s);
          const { _lodMax: _ } = this;
          (u.dTheta.value = d), (u.mipInt.value = _ - n);
          const v = this._sizeLods[i];
          ei(
            e,
            3 * v * (i > _ - 4 ? i - _ + 4 : 0),
            4 * (this._cubeSize - v),
            3 * v,
            2 * v
          ),
            o.setRenderTarget(e),
            o.render(c, jn);
        }
      }
      function ti(t, e, n) {
        const i = new Bn(t, e, n);
        return (
          (i.texture.mapping = ct),
          (i.texture.name = "PMREM.cubeUv"),
          (i.scissorTest = !0),
          i
        );
      }
      function ei(t, e, n, i, r) {
        t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
      }
      function ni() {
        return new se({
          name: "EquirectangularToCubeUV",
          uniforms: { envMap: { value: null } },
          vertexShader:
            "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
          fragmentShader:
            "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
          blending: 0,
          depthTest: !1,
          depthWrite: !1,
        });
      }
      function ii() {
        return new se({
          name: "CubemapToCubeUV",
          uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
          vertexShader:
            "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
          fragmentShader:
            "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
          blending: 0,
          depthTest: !1,
          depthWrite: !1,
        });
      }
      function ri(t) {
        let e = new WeakMap(),
          n = null;
        function i(t) {
          const n = t.target;
          n.removeEventListener("dispose", i);
          const r = e.get(n);
          void 0 !== r && (e.delete(n), r.dispose());
        }
        return {
          get: function (r) {
            if (r && r.isTexture) {
              const a = r.mapping,
                s = 303 === a || 304 === a,
                o = a === ot || a === lt;
              if (s || o) {
                if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
                  r.needsPMREMUpdate = !1;
                  let i = e.get(r);
                  return (
                    null === n && (n = new $n(t)),
                    (i = s ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i)),
                    e.set(r, i),
                    i.texture
                  );
                }
                if (e.has(r)) return e.get(r).texture;
                {
                  const a = r.image;
                  if (
                    (s && a && a.height > 0) ||
                    (o &&
                      a &&
                      (function (t) {
                        let e = 0;
                        for (let n = 0; n < 6; n++) void 0 !== t[n] && e++;
                        return 6 === e;
                      })(a))
                  ) {
                    null === n && (n = new $n(t));
                    const a = s ? n.fromEquirectangular(r) : n.fromCubemap(r);
                    return (
                      e.set(r, a), r.addEventListener("dispose", i), a.texture
                    );
                  }
                  return null;
                }
              }
            }
            return r;
          },
          dispose: function () {
            (e = new WeakMap()), null !== n && (n.dispose(), (n = null));
          },
        };
      }
      function ai(t) {
        const e = {};
        function n(n) {
          if (void 0 !== e[n]) return e[n];
          let i;
          switch (n) {
            case "WEBGL_depth_texture":
              i =
                t.getExtension("WEBGL_depth_texture") ||
                t.getExtension("MOZ_WEBGL_depth_texture") ||
                t.getExtension("WEBKIT_WEBGL_depth_texture");
              break;
            case "EXT_texture_filter_anisotropic":
              i =
                t.getExtension("EXT_texture_filter_anisotropic") ||
                t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
                t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
              break;
            case "WEBGL_compressed_texture_s3tc":
              i =
                t.getExtension("WEBGL_compressed_texture_s3tc") ||
                t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
                t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
              break;
            case "WEBGL_compressed_texture_pvrtc":
              i =
                t.getExtension("WEBGL_compressed_texture_pvrtc") ||
                t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
              break;
            default:
              i = t.getExtension(n);
          }
          return (e[n] = i), i;
        }
        return {
          has: function (t) {
            return null !== n(t);
          },
          init: function (t) {
            t.isWebGL2
              ? n("EXT_color_buffer_float")
              : (n("WEBGL_depth_texture"),
                n("OES_texture_float"),
                n("OES_texture_half_float"),
                n("OES_texture_half_float_linear"),
                n("OES_standard_derivatives"),
                n("OES_element_index_uint"),
                n("OES_vertex_array_object"),
                n("ANGLE_instanced_arrays")),
              n("OES_texture_float_linear"),
              n("EXT_color_buffer_half_float"),
              n("WEBGL_multisampled_render_to_texture");
          },
          get: function (t) {
            const e = n(t);
            return (
              null === e &&
                console.warn(
                  "THREE.WebGLRenderer: " + t + " extension not supported."
                ),
              e
            );
          },
        };
      }
      function si(t, e, n, i) {
        const r = {},
          a = new WeakMap();
        function s(t) {
          const o = t.target;
          null !== o.index && e.remove(o.index);
          for (const t in o.attributes) e.remove(o.attributes[t]);
          o.removeEventListener("dispose", s), delete r[o.id];
          const l = a.get(o);
          l && (e.remove(l), a.delete(o)),
            i.releaseStatesOfGeometry(o),
            !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
            n.memory.geometries--;
        }
        function o(t) {
          const n = [],
            i = t.index,
            r = t.attributes.position;
          let s = 0;
          if (null !== i) {
            const t = i.array;
            s = i.version;
            for (let e = 0, i = t.length; e < i; e += 3) {
              const i = t[e + 0],
                r = t[e + 1],
                a = t[e + 2];
              n.push(i, r, r, a, a, i);
            }
          } else {
            const t = r.array;
            s = r.version;
            for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
              const t = e + 0,
                i = e + 1,
                r = e + 2;
              n.push(t, i, i, r, r, t);
            }
          }
          const o = new (Xt(n) ? Bt : zt)(n, 1);
          o.version = s;
          const l = a.get(t);
          l && e.remove(l), a.set(t, o);
        }
        return {
          get: function (t, e) {
            return (
              !0 === r[e.id] ||
                (e.addEventListener("dispose", s),
                (r[e.id] = !0),
                n.memory.geometries++),
              e
            );
          },
          update: function (n) {
            const i = n.attributes;
            for (const n in i) e.update(i[n], t.ARRAY_BUFFER);
            const r = n.morphAttributes;
            for (const n in r) {
              const i = r[n];
              for (let n = 0, r = i.length; n < r; n++)
                e.update(i[n], t.ARRAY_BUFFER);
            }
          },
          getWireframeAttribute: function (t) {
            const e = a.get(t);
            if (e) {
              const n = t.index;
              null !== n && e.version < n.version && o(t);
            } else o(t);
            return a.get(t);
          },
        };
      }
      function oi(t, e, n, i) {
        const r = i.isWebGL2;
        let a, s, o;
        (this.setMode = function (t) {
          a = t;
        }),
          (this.setIndex = function (t) {
            (s = t.type), (o = t.bytesPerElement);
          }),
          (this.render = function (e, i) {
            t.drawElements(a, i, s, e * o), n.update(i, a, 1);
          }),
          (this.renderInstances = function (i, l, c) {
            if (0 === c) return;
            let u, h;
            if (r) (u = t), (h = "drawElementsInstanced");
            else if (
              ((u = e.get("ANGLE_instanced_arrays")),
              (h = "drawElementsInstancedANGLE"),
              null === u)
            )
              return void console.error(
                "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
              );
            u[h](a, l, s, i * o, c), n.update(l, a, c);
          });
      }
      function li(t) {
        const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
        return {
          memory: { geometries: 0, textures: 0 },
          render: e,
          programs: null,
          autoReset: !0,
          reset: function () {
            e.frame++,
              (e.calls = 0),
              (e.triangles = 0),
              (e.points = 0),
              (e.lines = 0);
          },
          update: function (n, i, r) {
            switch ((e.calls++, i)) {
              case t.TRIANGLES:
                e.triangles += r * (n / 3);
                break;
              case t.LINES:
                e.lines += r * (n / 2);
                break;
              case t.LINE_STRIP:
                e.lines += r * (n - 1);
                break;
              case t.LINE_LOOP:
                e.lines += r * n;
                break;
              case t.POINTS:
                e.points += r * n;
                break;
              default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", i);
            }
          },
        };
      }
      class ci extends zn {
        constructor(t = null, e = 1, n = 1, i = 1) {
          super(null),
            (this.isDataArrayTexture = !0),
            (this.image = { data: t, width: e, height: n, depth: i }),
            (this.magFilter = pt),
            (this.minFilter = pt),
            (this.wrapR = ht),
            (this.generateMipmaps = !1),
            (this.flipY = !1),
            (this.unpackAlignment = 1);
        }
      }
      function ui(t, e) {
        return t[0] - e[0];
      }
      function hi(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1]);
      }
      function di(t, e, n) {
        const i = {},
          r = new Float32Array(8),
          a = new WeakMap(),
          s = new He(),
          o = [];
        for (let t = 0; t < 8; t++) o[t] = [t, 0];
        return {
          update: function (l, c, u, h) {
            const d = l.morphTargetInfluences;
            if (!0 === e.isWebGL2) {
              const i =
                  c.morphAttributes.position ||
                  c.morphAttributes.normal ||
                  c.morphAttributes.color,
                r = void 0 !== i ? i.length : 0;
              let o = a.get(c);
              if (void 0 === o || o.count !== r) {
                void 0 !== o && o.texture.dispose();
                const t = void 0 !== c.morphAttributes.position,
                  n = void 0 !== c.morphAttributes.normal,
                  i = void 0 !== c.morphAttributes.color,
                  l = c.morphAttributes.position || [],
                  u = c.morphAttributes.normal || [],
                  h = c.morphAttributes.color || [];
                let d = 0;
                !0 === t && (d = 1), !0 === n && (d = 2), !0 === i && (d = 3);
                let p = c.attributes.position.count * d,
                  f = 1;
                p > e.maxTextureSize &&
                  ((f = Math.ceil(p / e.maxTextureSize)),
                  (p = e.maxTextureSize));
                const m = new Float32Array(p * f * 4 * r),
                  g = new ci(m, p, f, r);
                (g.type = vt), (g.needsUpdate = !0);
                const _ = 4 * d;
                for (let e = 0; e < r; e++) {
                  const r = l[e],
                    a = u[e],
                    o = h[e],
                    c = p * f * 4 * e;
                  for (let e = 0; e < r.count; e++) {
                    const l = e * _;
                    !0 === t &&
                      (s.fromBufferAttribute(r, e),
                      (m[c + l + 0] = s.x),
                      (m[c + l + 1] = s.y),
                      (m[c + l + 2] = s.z),
                      (m[c + l + 3] = 0)),
                      !0 === n &&
                        (s.fromBufferAttribute(a, e),
                        (m[c + l + 4] = s.x),
                        (m[c + l + 5] = s.y),
                        (m[c + l + 6] = s.z),
                        (m[c + l + 7] = 0)),
                      !0 === i &&
                        (s.fromBufferAttribute(o, e),
                        (m[c + l + 8] = s.x),
                        (m[c + l + 9] = s.y),
                        (m[c + l + 10] = s.z),
                        (m[c + l + 11] = 4 === o.itemSize ? s.w : 1));
                  }
                }
                function v() {
                  g.dispose(), a.delete(c), c.removeEventListener("dispose", v);
                }
                (o = { count: r, texture: g, size: new W(p, f) }),
                  a.set(c, o),
                  c.addEventListener("dispose", v);
              }
              let l = 0;
              for (let t = 0; t < d.length; t++) l += d[t];
              const u = c.morphTargetsRelative ? 1 : 1 - l;
              h.getUniforms().setValue(t, "morphTargetBaseInfluence", u),
                h.getUniforms().setValue(t, "morphTargetInfluences", d),
                h
                  .getUniforms()
                  .setValue(t, "morphTargetsTexture", o.texture, n),
                h.getUniforms().setValue(t, "morphTargetsTextureSize", o.size);
            } else {
              const e = void 0 === d ? 0 : d.length;
              let n = i[c.id];
              if (void 0 === n || n.length !== e) {
                n = [];
                for (let t = 0; t < e; t++) n[t] = [t, 0];
                i[c.id] = n;
              }
              for (let t = 0; t < e; t++) {
                const e = n[t];
                (e[0] = t), (e[1] = d[t]);
              }
              n.sort(hi);
              for (let t = 0; t < 8; t++)
                t < e && n[t][1]
                  ? ((o[t][0] = n[t][0]), (o[t][1] = n[t][1]))
                  : ((o[t][0] = Number.MAX_SAFE_INTEGER), (o[t][1] = 0));
              o.sort(ui);
              const a = c.morphAttributes.position,
                s = c.morphAttributes.normal;
              let l = 0;
              for (let t = 0; t < 8; t++) {
                const e = o[t],
                  n = e[0],
                  i = e[1];
                n !== Number.MAX_SAFE_INTEGER && i
                  ? (a &&
                      c.getAttribute("morphTarget" + t) !== a[n] &&
                      c.setAttribute("morphTarget" + t, a[n]),
                    s &&
                      c.getAttribute("morphNormal" + t) !== s[n] &&
                      c.setAttribute("morphNormal" + t, s[n]),
                    (r[t] = i),
                    (l += i))
                  : (a &&
                      !0 === c.hasAttribute("morphTarget" + t) &&
                      c.deleteAttribute("morphTarget" + t),
                    s &&
                      !0 === c.hasAttribute("morphNormal" + t) &&
                      c.deleteAttribute("morphNormal" + t),
                    (r[t] = 0));
              }
              const u = c.morphTargetsRelative ? 1 : 1 - l;
              h.getUniforms().setValue(t, "morphTargetBaseInfluence", u),
                h.getUniforms().setValue(t, "morphTargetInfluences", r);
            }
          },
        };
      }
      function pi(t, e, n, i) {
        let r = new WeakMap();
        function a(t) {
          const e = t.target;
          e.removeEventListener("dispose", a),
            n.remove(e.instanceMatrix),
            null !== e.instanceColor && n.remove(e.instanceColor);
        }
        return {
          update: function (s) {
            const o = i.render.frame,
              l = s.geometry,
              c = e.get(s, l);
            return (
              r.get(c) !== o && (e.update(c), r.set(c, o)),
              s.isInstancedMesh &&
                (!1 === s.hasEventListener("dispose", a) &&
                  s.addEventListener("dispose", a),
                n.update(s.instanceMatrix, t.ARRAY_BUFFER),
                null !== s.instanceColor &&
                  n.update(s.instanceColor, t.ARRAY_BUFFER)),
              c
            );
          },
          dispose: function () {
            r = new WeakMap();
          },
        };
      }
      class fi extends zn {
        constructor(t = null, e = 1, n = 1, i = 1) {
          super(null),
            (this.isData3DTexture = !0),
            (this.image = { data: t, width: e, height: n, depth: i }),
            (this.magFilter = pt),
            (this.minFilter = pt),
            (this.wrapR = ht),
            (this.generateMipmaps = !1),
            (this.flipY = !1),
            (this.unpackAlignment = 1);
        }
      }
      const mi = new zn(),
        gi = new ci(),
        _i = new fi(),
        vi = new Vn(),
        xi = [],
        Mi = [],
        yi = new Float32Array(16),
        Ei = new Float32Array(9),
        Si = new Float32Array(4);
      function bi(t, e, n) {
        const i = t[0];
        if (i <= 0 || i > 0) return t;
        const r = e * n;
        let a = xi[r];
        if (
          (void 0 === a && ((a = new Float32Array(r)), (xi[r] = a)), 0 !== e)
        ) {
          i.toArray(a, 0);
          for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(a, r);
        }
        return a;
      }
      function Ti(t, e) {
        if (t.length !== e.length) return !1;
        for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function wi(t, e) {
        for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
      }
      function Ai(t, e) {
        let n = Mi[e];
        void 0 === n && ((n = new Int32Array(e)), (Mi[e] = n));
        for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
        return n;
      }
      function Ri(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
      }
      function Ci(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y) ||
            (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
        else {
          if (Ti(n, e)) return;
          t.uniform2fv(this.addr, e), wi(n, e);
        }
      }
      function Li(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
            (t.uniform3f(this.addr, e.x, e.y, e.z),
            (n[0] = e.x),
            (n[1] = e.y),
            (n[2] = e.z));
        else if (void 0 !== e.r)
          (n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
            (t.uniform3f(this.addr, e.r, e.g, e.b),
            (n[0] = e.r),
            (n[1] = e.g),
            (n[2] = e.b));
        else {
          if (Ti(n, e)) return;
          t.uniform3fv(this.addr, e), wi(n, e);
        }
      }
      function Di(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
            (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
            (n[0] = e.x),
            (n[1] = e.y),
            (n[2] = e.z),
            (n[3] = e.w));
        else {
          if (Ti(n, e)) return;
          t.uniform4fv(this.addr, e), wi(n, e);
        }
      }
      function Pi(t, e) {
        const n = this.cache,
          i = e.elements;
        if (void 0 === i) {
          if (Ti(n, e)) return;
          t.uniformMatrix2fv(this.addr, !1, e), wi(n, e);
        } else {
          if (Ti(n, i)) return;
          Si.set(i), t.uniformMatrix2fv(this.addr, !1, Si), wi(n, i);
        }
      }
      function Ii(t, e) {
        const n = this.cache,
          i = e.elements;
        if (void 0 === i) {
          if (Ti(n, e)) return;
          t.uniformMatrix3fv(this.addr, !1, e), wi(n, e);
        } else {
          if (Ti(n, i)) return;
          Ei.set(i), t.uniformMatrix3fv(this.addr, !1, Ei), wi(n, i);
        }
      }
      function Ui(t, e) {
        const n = this.cache,
          i = e.elements;
        if (void 0 === i) {
          if (Ti(n, e)) return;
          t.uniformMatrix4fv(this.addr, !1, e), wi(n, e);
        } else {
          if (Ti(n, i)) return;
          yi.set(i), t.uniformMatrix4fv(this.addr, !1, yi), wi(n, i);
        }
      }
      function Ni(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
      }
      function Oi(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y) ||
            (t.uniform2i(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
        else {
          if (Ti(n, e)) return;
          t.uniform2iv(this.addr, e), wi(n, e);
        }
      }
      function Fi(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
            (t.uniform3i(this.addr, e.x, e.y, e.z),
            (n[0] = e.x),
            (n[1] = e.y),
            (n[2] = e.z));
        else {
          if (Ti(n, e)) return;
          t.uniform3iv(this.addr, e), wi(n, e);
        }
      }
      function zi(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
            (t.uniform4i(this.addr, e.x, e.y, e.z, e.w),
            (n[0] = e.x),
            (n[1] = e.y),
            (n[2] = e.z),
            (n[3] = e.w));
        else {
          if (Ti(n, e)) return;
          t.uniform4iv(this.addr, e), wi(n, e);
        }
      }
      function Bi(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
      }
      function Gi(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y) ||
            (t.uniform2ui(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
        else {
          if (Ti(n, e)) return;
          t.uniform2uiv(this.addr, e), wi(n, e);
        }
      }
      function Hi(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
            (t.uniform3ui(this.addr, e.x, e.y, e.z),
            (n[0] = e.x),
            (n[1] = e.y),
            (n[2] = e.z));
        else {
          if (Ti(n, e)) return;
          t.uniform3uiv(this.addr, e), wi(n, e);
        }
      }
      function Vi(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
            (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
            (n[0] = e.x),
            (n[1] = e.y),
            (n[2] = e.z),
            (n[3] = e.w));
        else {
          if (Ti(n, e)) return;
          t.uniform4uiv(this.addr, e), wi(n, e);
        }
      }
      function ki(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
          n.setTexture2D(e || mi, r);
      }
      function Wi(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
          n.setTexture3D(e || _i, r);
      }
      function Xi(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
          n.setTextureCube(e || vi, r);
      }
      function qi(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
          n.setTexture2DArray(e || gi, r);
      }
      function ji(t, e) {
        t.uniform1fv(this.addr, e);
      }
      function Yi(t, e) {
        const n = bi(e, this.size, 2);
        t.uniform2fv(this.addr, n);
      }
      function Zi(t, e) {
        const n = bi(e, this.size, 3);
        t.uniform3fv(this.addr, n);
      }
      function Ki(t, e) {
        const n = bi(e, this.size, 4);
        t.uniform4fv(this.addr, n);
      }
      function Ji(t, e) {
        const n = bi(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, n);
      }
      function Qi(t, e) {
        const n = bi(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, n);
      }
      function $i(t, e) {
        const n = bi(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, n);
      }
      function tr(t, e) {
        t.uniform1iv(this.addr, e);
      }
      function er(t, e) {
        t.uniform2iv(this.addr, e);
      }
      function nr(t, e) {
        t.uniform3iv(this.addr, e);
      }
      function ir(t, e) {
        t.uniform4iv(this.addr, e);
      }
      function rr(t, e) {
        t.uniform1uiv(this.addr, e);
      }
      function ar(t, e) {
        t.uniform2uiv(this.addr, e);
      }
      function sr(t, e) {
        t.uniform3uiv(this.addr, e);
      }
      function or(t, e) {
        t.uniform4uiv(this.addr, e);
      }
      function lr(t, e, n) {
        const i = this.cache,
          r = e.length,
          a = Ai(n, r);
        Ti(i, a) || (t.uniform1iv(this.addr, a), wi(i, a));
        for (let t = 0; t !== r; ++t) n.setTexture2D(e[t] || mi, a[t]);
      }
      function cr(t, e, n) {
        const i = this.cache,
          r = e.length,
          a = Ai(n, r);
        Ti(i, a) || (t.uniform1iv(this.addr, a), wi(i, a));
        for (let t = 0; t !== r; ++t) n.setTexture3D(e[t] || _i, a[t]);
      }
      function ur(t, e, n) {
        const i = this.cache,
          r = e.length,
          a = Ai(n, r);
        Ti(i, a) || (t.uniform1iv(this.addr, a), wi(i, a));
        for (let t = 0; t !== r; ++t) n.setTextureCube(e[t] || vi, a[t]);
      }
      function hr(t, e, n) {
        const i = this.cache,
          r = e.length,
          a = Ai(n, r);
        Ti(i, a) || (t.uniform1iv(this.addr, a), wi(i, a));
        for (let t = 0; t !== r; ++t) n.setTexture2DArray(e[t] || gi, a[t]);
      }
      class dr {
        constructor(t, e, n) {
          (this.id = t),
            (this.addr = n),
            (this.cache = []),
            (this.setValue = (function (t) {
              switch (t) {
                case 5126:
                  return Ri;
                case 35664:
                  return Ci;
                case 35665:
                  return Li;
                case 35666:
                  return Di;
                case 35674:
                  return Pi;
                case 35675:
                  return Ii;
                case 35676:
                  return Ui;
                case 5124:
                case 35670:
                  return Ni;
                case 35667:
                case 35671:
                  return Oi;
                case 35668:
                case 35672:
                  return Fi;
                case 35669:
                case 35673:
                  return zi;
                case 5125:
                  return Bi;
                case 36294:
                  return Gi;
                case 36295:
                  return Hi;
                case 36296:
                  return Vi;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                  return ki;
                case 35679:
                case 36299:
                case 36307:
                  return Wi;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                  return Xi;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                  return qi;
              }
            })(e.type));
        }
      }
      class pr {
        constructor(t, e, n) {
          (this.id = t),
            (this.addr = n),
            (this.cache = []),
            (this.size = e.size),
            (this.setValue = (function (t) {
              switch (t) {
                case 5126:
                  return ji;
                case 35664:
                  return Yi;
                case 35665:
                  return Zi;
                case 35666:
                  return Ki;
                case 35674:
                  return Ji;
                case 35675:
                  return Qi;
                case 35676:
                  return $i;
                case 5124:
                case 35670:
                  return tr;
                case 35667:
                case 35671:
                  return er;
                case 35668:
                case 35672:
                  return nr;
                case 35669:
                case 35673:
                  return ir;
                case 5125:
                  return rr;
                case 36294:
                  return ar;
                case 36295:
                  return sr;
                case 36296:
                  return or;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                  return lr;
                case 35679:
                case 36299:
                case 36307:
                  return cr;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                  return ur;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                  return hr;
              }
            })(e.type));
        }
      }
      class fr {
        constructor(t) {
          (this.id = t), (this.seq = []), (this.map = {});
        }
        setValue(t, e, n) {
          const i = this.seq;
          for (let r = 0, a = i.length; r !== a; ++r) {
            const a = i[r];
            a.setValue(t, e[a.id], n);
          }
        }
      }
      const mr = /(\w+)(\])?(\[|\.)?/g;
      function gr(t, e) {
        t.seq.push(e), (t.map[e.id] = e);
      }
      function _r(t, e, n) {
        const i = t.name,
          r = i.length;
        for (mr.lastIndex = 0; ; ) {
          const a = mr.exec(i),
            s = mr.lastIndex;
          let o = a[1];
          const l = "]" === a[2],
            c = a[3];
          if ((l && (o |= 0), void 0 === c || ("[" === c && s + 2 === r))) {
            gr(n, void 0 === c ? new dr(o, t, e) : new pr(o, t, e));
            break;
          }
          {
            let t = n.map[o];
            void 0 === t && ((t = new fr(o)), gr(n, t)), (n = t);
          }
        }
      }
      class vr {
        constructor(t, e) {
          (this.seq = []), (this.map = {});
          const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
          for (let i = 0; i < n; ++i) {
            const n = t.getActiveUniform(e, i);
            _r(n, t.getUniformLocation(e, n.name), this);
          }
        }
        setValue(t, e, n, i) {
          const r = this.map[e];
          void 0 !== r && r.setValue(t, n, i);
        }
        setOptional(t, e, n) {
          const i = e[n];
          void 0 !== i && this.setValue(t, n, i);
        }
        static upload(t, e, n, i) {
          for (let r = 0, a = e.length; r !== a; ++r) {
            const a = e[r],
              s = n[a.id];
            !1 !== s.needsUpdate && a.setValue(t, s.value, i);
          }
        }
        static seqWithValue(t, e) {
          const n = [];
          for (let i = 0, r = t.length; i !== r; ++i) {
            const r = t[i];
            r.id in e && n.push(r);
          }
          return n;
        }
      }
      function xr(t, e, n) {
        const i = t.createShader(e);
        return t.shaderSource(i, n), t.compileShader(i), i;
      }
      let Mr = 0;
      function yr(t, e, n) {
        const i = t.getShaderParameter(e, t.COMPILE_STATUS),
          r = t.getShaderInfoLog(e).trim();
        if (i && "" === r) return "";
        const a = /ERROR: 0:(\d+)/.exec(r);
        if (a) {
          const i = parseInt(a[1]);
          return (
            n.toUpperCase() +
            "\n\n" +
            r +
            "\n\n" +
            (function (t, e) {
              const n = t.split("\n"),
                i = [],
                r = Math.max(e - 6, 0),
                a = Math.min(e + 6, n.length);
              for (let t = r; t < a; t++) {
                const r = t + 1;
                i.push(`${r === e ? ">" : " "} ${r}: ${n[t]}`);
              }
              return i.join("\n");
            })(t.getShaderSource(e), i)
          );
        }
        return r;
      }
      function Er(t, e) {
        const n = (function (t) {
          switch (t) {
            case Rt:
              return ["Linear", "( value )"];
            case Ct:
              return ["sRGB", "( value )"];
            default:
              return (
                console.warn("THREE.WebGLProgram: Unsupported encoding:", t),
                ["Linear", "( value )"]
              );
          }
        })(e);
        return (
          "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
        );
      }
      function Sr(t, e) {
        let n;
        switch (e) {
          case 1:
            n = "Linear";
            break;
          case 2:
            n = "Reinhard";
            break;
          case 3:
            n = "OptimizedCineon";
            break;
          case 4:
            n = "ACESFilmic";
            break;
          case 5:
            n = "Custom";
            break;
          default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
              (n = "Linear");
        }
        return (
          "vec3 " +
          t +
          "( vec3 color ) { return " +
          n +
          "ToneMapping( color ); }"
        );
      }
      function br(t) {
        return "" !== t;
      }
      function Tr(t, e) {
        const n =
          e.numSpotLightShadows +
          e.numSpotLightMaps -
          e.numSpotLightShadowsWithMaps;
        return t
          .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
          .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
          .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
          .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
          .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
          .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
          .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
          .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
          .replace(
            /NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,
            e.numSpotLightShadowsWithMaps
          )
          .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
          .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
      }
      function wr(t, e) {
        return t
          .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
          .replace(
            /UNION_CLIPPING_PLANES/g,
            e.numClippingPlanes - e.numClipIntersection
          );
      }
      const Ar = /^[ \t]*#include +<([\w\d./]+)>/gm;
      function Rr(t) {
        return t.replace(Ar, Cr);
      }
      function Cr(t, e) {
        const n = Tn[e];
        if (void 0 === n)
          throw new Error("Can not resolve #include <" + e + ">");
        return Rr(n);
      }
      const Lr =
        /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
      function Dr(t) {
        return t.replace(Lr, Pr);
      }
      function Pr(t, e, n, i) {
        let r = "";
        for (let t = parseInt(e); t < parseInt(n); t++)
          r += i
            .replace(/\[\s*i\s*\]/g, "[ " + t + " ]")
            .replace(/UNROLLED_LOOP_INDEX/g, t);
        return r;
      }
      function Ir(t) {
        let e =
          "precision " +
          t.precision +
          " float;\nprecision " +
          t.precision +
          " int;";
        return (
          "highp" === t.precision
            ? (e += "\n#define HIGH_PRECISION")
            : "mediump" === t.precision
            ? (e += "\n#define MEDIUM_PRECISION")
            : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
          e
        );
      }
      function Ur(t, e, n, i) {
        const r = t.getContext(),
          a = n.defines;
        let s = n.vertexShader,
          o = n.fragmentShader;
        const l = (function (t) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return (
              1 === t.shadowMapType
                ? (e = "SHADOWMAP_TYPE_PCF")
                : 2 === t.shadowMapType
                ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
                : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
              e
            );
          })(n),
          c = (function (t) {
            let e = "ENVMAP_TYPE_CUBE";
            if (t.envMap)
              switch (t.envMapMode) {
                case ot:
                case lt:
                  e = "ENVMAP_TYPE_CUBE";
                  break;
                case ct:
                  e = "ENVMAP_TYPE_CUBE_UV";
              }
            return e;
          })(n),
          u = (function (t) {
            let e = "ENVMAP_MODE_REFLECTION";
            return (
              t.envMap && t.envMapMode === lt && (e = "ENVMAP_MODE_REFRACTION"),
              e
            );
          })(n),
          h = (function (t) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t.envMap)
              switch (t.combine) {
                case 0:
                  e = "ENVMAP_BLENDING_MULTIPLY";
                  break;
                case 1:
                  e = "ENVMAP_BLENDING_MIX";
                  break;
                case 2:
                  e = "ENVMAP_BLENDING_ADD";
              }
            return e;
          })(n),
          d = (function (t) {
            const e = t.envMapCubeUVHeight;
            if (null === e) return null;
            const n = Math.log2(e) - 2,
              i = 1 / e;
            return {
              texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
              texelHeight: i,
              maxMip: n,
            };
          })(n),
          p = n.isWebGL2
            ? ""
            : (function (t) {
                return [
                  t.extensionDerivatives ||
                  t.envMapCubeUVHeight ||
                  t.bumpMap ||
                  t.tangentSpaceNormalMap ||
                  t.clearcoatNormalMap ||
                  t.flatShading ||
                  "physical" === t.shaderID
                    ? "#extension GL_OES_standard_derivatives : enable"
                    : "",
                  (t.extensionFragDepth || t.logarithmicDepthBuffer) &&
                  t.rendererExtensionFragDepth
                    ? "#extension GL_EXT_frag_depth : enable"
                    : "",
                  t.extensionDrawBuffers && t.rendererExtensionDrawBuffers
                    ? "#extension GL_EXT_draw_buffers : require"
                    : "",
                  (t.extensionShaderTextureLOD || t.envMap || t.transmission) &&
                  t.rendererExtensionShaderTextureLod
                    ? "#extension GL_EXT_shader_texture_lod : enable"
                    : "",
                ]
                  .filter(br)
                  .join("\n");
              })(n),
          f = (function (t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              !1 !== i && e.push("#define " + n + " " + i);
            }
            return e.join("\n");
          })(a),
          m = r.createProgram();
        let g,
          _,
          v = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
        n.isRawShaderMaterial
          ? ((g = [f].filter(br).join("\n")),
            g.length > 0 && (g += "\n"),
            (_ = [p, f].filter(br).join("\n")),
            _.length > 0 && (_ += "\n"))
          : ((g = [
              Ir(n),
              "#define SHADER_NAME " + n.shaderName,
              f,
              n.instancing ? "#define USE_INSTANCING" : "",
              n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
              n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
              n.useFog && n.fog ? "#define USE_FOG" : "",
              n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
              n.map ? "#define USE_MAP" : "",
              n.envMap ? "#define USE_ENVMAP" : "",
              n.envMap ? "#define " + u : "",
              n.lightMap ? "#define USE_LIGHTMAP" : "",
              n.aoMap ? "#define USE_AOMAP" : "",
              n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
              n.bumpMap ? "#define USE_BUMPMAP" : "",
              n.normalMap ? "#define USE_NORMALMAP" : "",
              n.normalMap && n.objectSpaceNormalMap
                ? "#define OBJECTSPACE_NORMALMAP"
                : "",
              n.normalMap && n.tangentSpaceNormalMap
                ? "#define TANGENTSPACE_NORMALMAP"
                : "",
              n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
              n.clearcoatRoughnessMap
                ? "#define USE_CLEARCOAT_ROUGHNESSMAP"
                : "",
              n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
              n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
              n.iridescenceThicknessMap
                ? "#define USE_IRIDESCENCE_THICKNESSMAP"
                : "",
              n.displacementMap && n.supportsVertexTextures
                ? "#define USE_DISPLACEMENTMAP"
                : "",
              n.specularMap ? "#define USE_SPECULARMAP" : "",
              n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
              n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
              n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
              n.metalnessMap ? "#define USE_METALNESSMAP" : "",
              n.alphaMap ? "#define USE_ALPHAMAP" : "",
              n.transmission ? "#define USE_TRANSMISSION" : "",
              n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
              n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
              n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
              n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
              n.vertexTangents ? "#define USE_TANGENT" : "",
              n.vertexColors ? "#define USE_COLOR" : "",
              n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
              n.vertexUvs ? "#define USE_UV" : "",
              n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
              n.flatShading ? "#define FLAT_SHADED" : "",
              n.skinning ? "#define USE_SKINNING" : "",
              n.morphTargets ? "#define USE_MORPHTARGETS" : "",
              n.morphNormals && !1 === n.flatShading
                ? "#define USE_MORPHNORMALS"
                : "",
              n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
              n.morphTargetsCount > 0 && n.isWebGL2
                ? "#define MORPHTARGETS_TEXTURE"
                : "",
              n.morphTargetsCount > 0 && n.isWebGL2
                ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride
                : "",
              n.morphTargetsCount > 0 && n.isWebGL2
                ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
                : "",
              n.doubleSided ? "#define DOUBLE_SIDED" : "",
              n.flipSided ? "#define FLIP_SIDED" : "",
              n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
              n.shadowMapEnabled ? "#define " + l : "",
              n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
              n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
              n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
                ? "#define USE_LOGDEPTHBUF_EXT"
                : "",
              "uniform mat4 modelMatrix;",
              "uniform mat4 modelViewMatrix;",
              "uniform mat4 projectionMatrix;",
              "uniform mat4 viewMatrix;",
              "uniform mat3 normalMatrix;",
              "uniform vec3 cameraPosition;",
              "uniform bool isOrthographic;",
              "#ifdef USE_INSTANCING",
              "\tattribute mat4 instanceMatrix;",
              "#endif",
              "#ifdef USE_INSTANCING_COLOR",
              "\tattribute vec3 instanceColor;",
              "#endif",
              "attribute vec3 position;",
              "attribute vec3 normal;",
              "attribute vec2 uv;",
              "#ifdef USE_TANGENT",
              "\tattribute vec4 tangent;",
              "#endif",
              "#if defined( USE_COLOR_ALPHA )",
              "\tattribute vec4 color;",
              "#elif defined( USE_COLOR )",
              "\tattribute vec3 color;",
              "#endif",
              "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
              "\tattribute vec3 morphTarget0;",
              "\tattribute vec3 morphTarget1;",
              "\tattribute vec3 morphTarget2;",
              "\tattribute vec3 morphTarget3;",
              "\t#ifdef USE_MORPHNORMALS",
              "\t\tattribute vec3 morphNormal0;",
              "\t\tattribute vec3 morphNormal1;",
              "\t\tattribute vec3 morphNormal2;",
              "\t\tattribute vec3 morphNormal3;",
              "\t#else",
              "\t\tattribute vec3 morphTarget4;",
              "\t\tattribute vec3 morphTarget5;",
              "\t\tattribute vec3 morphTarget6;",
              "\t\tattribute vec3 morphTarget7;",
              "\t#endif",
              "#endif",
              "#ifdef USE_SKINNING",
              "\tattribute vec4 skinIndex;",
              "\tattribute vec4 skinWeight;",
              "#endif",
              "\n",
            ]
              .filter(br)
              .join("\n")),
            (_ = [
              p,
              Ir(n),
              "#define SHADER_NAME " + n.shaderName,
              f,
              n.useFog && n.fog ? "#define USE_FOG" : "",
              n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
              n.map ? "#define USE_MAP" : "",
              n.matcap ? "#define USE_MATCAP" : "",
              n.envMap ? "#define USE_ENVMAP" : "",
              n.envMap ? "#define " + c : "",
              n.envMap ? "#define " + u : "",
              n.envMap ? "#define " + h : "",
              d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
              d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
              d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
              n.lightMap ? "#define USE_LIGHTMAP" : "",
              n.aoMap ? "#define USE_AOMAP" : "",
              n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
              n.bumpMap ? "#define USE_BUMPMAP" : "",
              n.normalMap ? "#define USE_NORMALMAP" : "",
              n.normalMap && n.objectSpaceNormalMap
                ? "#define OBJECTSPACE_NORMALMAP"
                : "",
              n.normalMap && n.tangentSpaceNormalMap
                ? "#define TANGENTSPACE_NORMALMAP"
                : "",
              n.clearcoat ? "#define USE_CLEARCOAT" : "",
              n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
              n.clearcoatRoughnessMap
                ? "#define USE_CLEARCOAT_ROUGHNESSMAP"
                : "",
              n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
              n.iridescence ? "#define USE_IRIDESCENCE" : "",
              n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
              n.iridescenceThicknessMap
                ? "#define USE_IRIDESCENCE_THICKNESSMAP"
                : "",
              n.specularMap ? "#define USE_SPECULARMAP" : "",
              n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
              n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
              n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
              n.metalnessMap ? "#define USE_METALNESSMAP" : "",
              n.alphaMap ? "#define USE_ALPHAMAP" : "",
              n.alphaTest ? "#define USE_ALPHATEST" : "",
              n.sheen ? "#define USE_SHEEN" : "",
              n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
              n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
              n.transmission ? "#define USE_TRANSMISSION" : "",
              n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
              n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
              n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
              n.vertexTangents ? "#define USE_TANGENT" : "",
              n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
              n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
              n.vertexUvs ? "#define USE_UV" : "",
              n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
              n.gradientMap ? "#define USE_GRADIENTMAP" : "",
              n.flatShading ? "#define FLAT_SHADED" : "",
              n.doubleSided ? "#define DOUBLE_SIDED" : "",
              n.flipSided ? "#define FLIP_SIDED" : "",
              n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
              n.shadowMapEnabled ? "#define " + l : "",
              n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
              n.physicallyCorrectLights
                ? "#define PHYSICALLY_CORRECT_LIGHTS"
                : "",
              n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
              n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
                ? "#define USE_LOGDEPTHBUF_EXT"
                : "",
              "uniform mat4 viewMatrix;",
              "uniform vec3 cameraPosition;",
              "uniform bool isOrthographic;",
              0 !== n.toneMapping ? "#define TONE_MAPPING" : "",
              0 !== n.toneMapping ? Tn.tonemapping_pars_fragment : "",
              0 !== n.toneMapping ? Sr("toneMapping", n.toneMapping) : "",
              n.dithering ? "#define DITHERING" : "",
              n.opaque ? "#define OPAQUE" : "",
              Tn.encodings_pars_fragment,
              Er("linearToOutputTexel", n.outputEncoding),
              n.useDepthPacking
                ? "#define DEPTH_PACKING " + n.depthPacking
                : "",
              "\n",
            ]
              .filter(br)
              .join("\n"))),
          (s = Rr(s)),
          (s = Tr(s, n)),
          (s = wr(s, n)),
          (o = Rr(o)),
          (o = Tr(o, n)),
          (o = wr(o, n)),
          (s = Dr(s)),
          (o = Dr(o)),
          n.isWebGL2 &&
            !0 !== n.isRawShaderMaterial &&
            ((v = "#version 300 es\n"),
            (g =
              [
                "precision mediump sampler2DArray;",
                "#define attribute in",
                "#define varying out",
                "#define texture2D texture",
              ].join("\n") +
              "\n" +
              g),
            (_ =
              [
                "#define varying in",
                n.glslVersion === It
                  ? ""
                  : "layout(location = 0) out highp vec4 pc_fragColor;",
                n.glslVersion === It ? "" : "#define gl_FragColor pc_fragColor",
                "#define gl_FragDepthEXT gl_FragDepth",
                "#define texture2D texture",
                "#define textureCube texture",
                "#define texture2DProj textureProj",
                "#define texture2DLodEXT textureLod",
                "#define texture2DProjLodEXT textureProjLod",
                "#define textureCubeLodEXT textureLod",
                "#define texture2DGradEXT textureGrad",
                "#define texture2DProjGradEXT textureProjGrad",
                "#define textureCubeGradEXT textureGrad",
              ].join("\n") +
              "\n" +
              _));
        const x = v + g + s,
          M = v + _ + o,
          y = xr(r, r.VERTEX_SHADER, x),
          E = xr(r, r.FRAGMENT_SHADER, M);
        if (
          (r.attachShader(m, y),
          r.attachShader(m, E),
          void 0 !== n.index0AttributeName
            ? r.bindAttribLocation(m, 0, n.index0AttributeName)
            : !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"),
          r.linkProgram(m),
          t.debug.checkShaderErrors)
        ) {
          const t = r.getProgramInfoLog(m).trim(),
            e = r.getShaderInfoLog(y).trim(),
            n = r.getShaderInfoLog(E).trim();
          let i = !0,
            a = !0;
          if (!1 === r.getProgramParameter(m, r.LINK_STATUS)) {
            i = !1;
            const e = yr(r, y, "vertex"),
              n = yr(r, E, "fragment");
            console.error(
              "THREE.WebGLProgram: Shader Error " +
                r.getError() +
                " - VALIDATE_STATUS " +
                r.getProgramParameter(m, r.VALIDATE_STATUS) +
                "\n\nProgram Info Log: " +
                t +
                "\n" +
                e +
                "\n" +
                n
            );
          } else
            "" !== t
              ? console.warn("THREE.WebGLProgram: Program Info Log:", t)
              : ("" !== e && "" !== n) || (a = !1);
          a &&
            (this.diagnostics = {
              runnable: i,
              programLog: t,
              vertexShader: { log: e, prefix: g },
              fragmentShader: { log: n, prefix: _ },
            });
        }
        let S, b;
        return (
          r.deleteShader(y),
          r.deleteShader(E),
          (this.getUniforms = function () {
            return void 0 === S && (S = new vr(r, m)), S;
          }),
          (this.getAttributes = function () {
            return (
              void 0 === b &&
                (b = (function (t, e) {
                  const n = {},
                    i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
                  for (let r = 0; r < i; r++) {
                    const i = t.getActiveAttrib(e, r),
                      a = i.name;
                    let s = 1;
                    i.type === t.FLOAT_MAT2 && (s = 2),
                      i.type === t.FLOAT_MAT3 && (s = 3),
                      i.type === t.FLOAT_MAT4 && (s = 4),
                      (n[a] = {
                        type: i.type,
                        location: t.getAttribLocation(e, a),
                        locationSize: s,
                      });
                  }
                  return n;
                })(r, m)),
              b
            );
          }),
          (this.destroy = function () {
            i.releaseStatesOfProgram(this),
              r.deleteProgram(m),
              (this.program = void 0);
          }),
          (this.name = n.shaderName),
          (this.id = Mr++),
          (this.cacheKey = e),
          (this.usedTimes = 1),
          (this.program = m),
          (this.vertexShader = y),
          (this.fragmentShader = E),
          this
        );
      }
      let Nr = 0;
      class Or {
        constructor() {
          (this.shaderCache = new Map()), (this.materialCache = new Map());
        }
        update(t) {
          const e = t.vertexShader,
            n = t.fragmentShader,
            i = this._getShaderStage(e),
            r = this._getShaderStage(n),
            a = this._getShaderCacheForMaterial(t);
          return (
            !1 === a.has(i) && (a.add(i), i.usedTimes++),
            !1 === a.has(r) && (a.add(r), r.usedTimes++),
            this
          );
        }
        remove(t) {
          const e = this.materialCache.get(t);
          for (const t of e)
            t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
          return this.materialCache.delete(t), this;
        }
        getVertexShaderID(t) {
          return this._getShaderStage(t.vertexShader).id;
        }
        getFragmentShaderID(t) {
          return this._getShaderStage(t.fragmentShader).id;
        }
        dispose() {
          this.shaderCache.clear(), this.materialCache.clear();
        }
        _getShaderCacheForMaterial(t) {
          const e = this.materialCache;
          let n = e.get(t);
          return void 0 === n && ((n = new Set()), e.set(t, n)), n;
        }
        _getShaderStage(t) {
          const e = this.shaderCache;
          let n = e.get(t);
          return void 0 === n && ((n = new Fr(t)), e.set(t, n)), n;
        }
      }
      class Fr {
        constructor(t) {
          (this.id = Nr++), (this.code = t), (this.usedTimes = 0);
        }
      }
      function zr(t, e, n, i, r, a, s) {
        const o = new w(),
          l = new Or(),
          c = [],
          u = r.isWebGL2,
          h = r.logarithmicDepthBuffer,
          d = r.vertexTextures;
        let p = r.precision;
        const f = {
          MeshDepthMaterial: "depth",
          MeshDistanceMaterial: "distanceRGBA",
          MeshNormalMaterial: "normal",
          MeshBasicMaterial: "basic",
          MeshLambertMaterial: "lambert",
          MeshPhongMaterial: "phong",
          MeshToonMaterial: "toon",
          MeshStandardMaterial: "physical",
          MeshPhysicalMaterial: "physical",
          MeshMatcapMaterial: "matcap",
          LineBasicMaterial: "basic",
          LineDashedMaterial: "dashed",
          PointsMaterial: "points",
          ShadowMaterial: "shadow",
          SpriteMaterial: "sprite",
        };
        return {
          getParameters: function (a, o, c, m, g) {
            const _ = m.fog,
              v = g.geometry,
              x = a.isMeshStandardMaterial ? m.environment : null,
              M = (a.isMeshStandardMaterial ? n : e).get(a.envMap || x),
              y = M && M.mapping === ct ? M.image.height : null,
              E = f[a.type];
            null !== a.precision &&
              ((p = r.getMaxPrecision(a.precision)),
              p !== a.precision &&
                console.warn(
                  "THREE.WebGLProgram.getParameters:",
                  a.precision,
                  "not supported, using",
                  p,
                  "instead."
                ));
            const S =
                v.morphAttributes.position ||
                v.morphAttributes.normal ||
                v.morphAttributes.color,
              b = void 0 !== S ? S.length : 0;
            let T,
              w,
              A,
              R,
              C = 0;
            if (
              (void 0 !== v.morphAttributes.position && (C = 1),
              void 0 !== v.morphAttributes.normal && (C = 2),
              void 0 !== v.morphAttributes.color && (C = 3),
              E)
            ) {
              const t = An[E];
              (T = t.vertexShader), (w = t.fragmentShader);
            } else
              (T = a.vertexShader),
                (w = a.fragmentShader),
                l.update(a),
                (A = l.getVertexShaderID(a)),
                (R = l.getFragmentShaderID(a));
            const L = t.getRenderTarget(),
              D = a.alphaTest > 0,
              P = a.clearcoat > 0,
              I = a.iridescence > 0;
            return {
              isWebGL2: u,
              shaderID: E,
              shaderName: a.type,
              vertexShader: T,
              fragmentShader: w,
              defines: a.defines,
              customVertexShaderID: A,
              customFragmentShaderID: R,
              isRawShaderMaterial: !0 === a.isRawShaderMaterial,
              glslVersion: a.glslVersion,
              precision: p,
              instancing: !0 === g.isInstancedMesh,
              instancingColor:
                !0 === g.isInstancedMesh && null !== g.instanceColor,
              supportsVertexTextures: d,
              outputEncoding:
                null === L
                  ? t.outputEncoding
                  : !0 === L.isXRRenderTarget
                  ? L.texture.encoding
                  : Rt,
              map: !!a.map,
              matcap: !!a.matcap,
              envMap: !!M,
              envMapMode: M && M.mapping,
              envMapCubeUVHeight: y,
              lightMap: !!a.lightMap,
              aoMap: !!a.aoMap,
              emissiveMap: !!a.emissiveMap,
              bumpMap: !!a.bumpMap,
              normalMap: !!a.normalMap,
              objectSpaceNormalMap: 1 === a.normalMapType,
              tangentSpaceNormalMap: 0 === a.normalMapType,
              decodeVideoTexture:
                !!a.map && !0 === a.map.isVideoTexture && a.map.encoding === Ct,
              clearcoat: P,
              clearcoatMap: P && !!a.clearcoatMap,
              clearcoatRoughnessMap: P && !!a.clearcoatRoughnessMap,
              clearcoatNormalMap: P && !!a.clearcoatNormalMap,
              iridescence: I,
              iridescenceMap: I && !!a.iridescenceMap,
              iridescenceThicknessMap: I && !!a.iridescenceThicknessMap,
              displacementMap: !!a.displacementMap,
              roughnessMap: !!a.roughnessMap,
              metalnessMap: !!a.metalnessMap,
              specularMap: !!a.specularMap,
              specularIntensityMap: !!a.specularIntensityMap,
              specularColorMap: !!a.specularColorMap,
              opaque: !1 === a.transparent && 1 === a.blending,
              alphaMap: !!a.alphaMap,
              alphaTest: D,
              gradientMap: !!a.gradientMap,
              sheen: a.sheen > 0,
              sheenColorMap: !!a.sheenColorMap,
              sheenRoughnessMap: !!a.sheenRoughnessMap,
              transmission: a.transmission > 0,
              transmissionMap: !!a.transmissionMap,
              thicknessMap: !!a.thicknessMap,
              combine: a.combine,
              vertexTangents: !!a.normalMap && !!v.attributes.tangent,
              vertexColors: a.vertexColors,
              vertexAlphas:
                !0 === a.vertexColors &&
                !!v.attributes.color &&
                4 === v.attributes.color.itemSize,
              vertexUvs: !!(
                a.map ||
                a.bumpMap ||
                a.normalMap ||
                a.specularMap ||
                a.alphaMap ||
                a.emissiveMap ||
                a.roughnessMap ||
                a.metalnessMap ||
                a.clearcoatMap ||
                a.clearcoatRoughnessMap ||
                a.clearcoatNormalMap ||
                a.iridescenceMap ||
                a.iridescenceThicknessMap ||
                a.displacementMap ||
                a.transmissionMap ||
                a.thicknessMap ||
                a.specularIntensityMap ||
                a.specularColorMap ||
                a.sheenColorMap ||
                a.sheenRoughnessMap
              ),
              uvsVertexOnly: !(
                a.map ||
                a.bumpMap ||
                a.normalMap ||
                a.specularMap ||
                a.alphaMap ||
                a.emissiveMap ||
                a.roughnessMap ||
                a.metalnessMap ||
                a.clearcoatNormalMap ||
                a.iridescenceMap ||
                a.iridescenceThicknessMap ||
                a.transmission > 0 ||
                a.transmissionMap ||
                a.thicknessMap ||
                a.specularIntensityMap ||
                a.specularColorMap ||
                a.sheen > 0 ||
                a.sheenColorMap ||
                a.sheenRoughnessMap ||
                !a.displacementMap
              ),
              fog: !!_,
              useFog: !0 === a.fog,
              fogExp2: _ && _.isFogExp2,
              flatShading: !!a.flatShading,
              sizeAttenuation: a.sizeAttenuation,
              logarithmicDepthBuffer: h,
              skinning: !0 === g.isSkinnedMesh,
              morphTargets: void 0 !== v.morphAttributes.position,
              morphNormals: void 0 !== v.morphAttributes.normal,
              morphColors: void 0 !== v.morphAttributes.color,
              morphTargetsCount: b,
              morphTextureStride: C,
              numDirLights: o.directional.length,
              numPointLights: o.point.length,
              numSpotLights: o.spot.length,
              numSpotLightMaps: o.spotLightMap.length,
              numRectAreaLights: o.rectArea.length,
              numHemiLights: o.hemi.length,
              numDirLightShadows: o.directionalShadowMap.length,
              numPointLightShadows: o.pointShadowMap.length,
              numSpotLightShadows: o.spotShadowMap.length,
              numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
              numClippingPlanes: s.numPlanes,
              numClipIntersection: s.numIntersection,
              dithering: a.dithering,
              shadowMapEnabled: t.shadowMap.enabled && c.length > 0,
              shadowMapType: t.shadowMap.type,
              toneMapping: a.toneMapped ? t.toneMapping : 0,
              physicallyCorrectLights: t.physicallyCorrectLights,
              premultipliedAlpha: a.premultipliedAlpha,
              doubleSided: 2 === a.side,
              flipSided: 1 === a.side,
              useDepthPacking: !!a.depthPacking,
              depthPacking: a.depthPacking || 0,
              index0AttributeName: a.index0AttributeName,
              extensionDerivatives: a.extensions && a.extensions.derivatives,
              extensionFragDepth: a.extensions && a.extensions.fragDepth,
              extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
              extensionShaderTextureLOD:
                a.extensions && a.extensions.shaderTextureLOD,
              rendererExtensionFragDepth: u || i.has("EXT_frag_depth"),
              rendererExtensionDrawBuffers: u || i.has("WEBGL_draw_buffers"),
              rendererExtensionShaderTextureLod:
                u || i.has("EXT_shader_texture_lod"),
              customProgramCacheKey: a.customProgramCacheKey(),
            };
          },
          getProgramCacheKey: function (e) {
            const n = [];
            if (
              (e.shaderID
                ? n.push(e.shaderID)
                : (n.push(e.customVertexShaderID),
                  n.push(e.customFragmentShaderID)),
              void 0 !== e.defines)
            )
              for (const t in e.defines) n.push(t), n.push(e.defines[t]);
            return (
              !1 === e.isRawShaderMaterial &&
                ((function (t, e) {
                  t.push(e.precision),
                    t.push(e.outputEncoding),
                    t.push(e.envMapMode),
                    t.push(e.envMapCubeUVHeight),
                    t.push(e.combine),
                    t.push(e.vertexUvs),
                    t.push(e.fogExp2),
                    t.push(e.sizeAttenuation),
                    t.push(e.morphTargetsCount),
                    t.push(e.morphAttributeCount),
                    t.push(e.numDirLights),
                    t.push(e.numPointLights),
                    t.push(e.numSpotLights),
                    t.push(e.numSpotLightMaps),
                    t.push(e.numHemiLights),
                    t.push(e.numRectAreaLights),
                    t.push(e.numDirLightShadows),
                    t.push(e.numPointLightShadows),
                    t.push(e.numSpotLightShadows),
                    t.push(e.numSpotLightShadowsWithMaps),
                    t.push(e.shadowMapType),
                    t.push(e.toneMapping),
                    t.push(e.numClippingPlanes),
                    t.push(e.numClipIntersection),
                    t.push(e.depthPacking);
                })(n, e),
                (function (t, e) {
                  o.disableAll(),
                    e.isWebGL2 && o.enable(0),
                    e.supportsVertexTextures && o.enable(1),
                    e.instancing && o.enable(2),
                    e.instancingColor && o.enable(3),
                    e.map && o.enable(4),
                    e.matcap && o.enable(5),
                    e.envMap && o.enable(6),
                    e.lightMap && o.enable(7),
                    e.aoMap && o.enable(8),
                    e.emissiveMap && o.enable(9),
                    e.bumpMap && o.enable(10),
                    e.normalMap && o.enable(11),
                    e.objectSpaceNormalMap && o.enable(12),
                    e.tangentSpaceNormalMap && o.enable(13),
                    e.clearcoat && o.enable(14),
                    e.clearcoatMap && o.enable(15),
                    e.clearcoatRoughnessMap && o.enable(16),
                    e.clearcoatNormalMap && o.enable(17),
                    e.iridescence && o.enable(18),
                    e.iridescenceMap && o.enable(19),
                    e.iridescenceThicknessMap && o.enable(20),
                    e.displacementMap && o.enable(21),
                    e.specularMap && o.enable(22),
                    e.roughnessMap && o.enable(23),
                    e.metalnessMap && o.enable(24),
                    e.gradientMap && o.enable(25),
                    e.alphaMap && o.enable(26),
                    e.alphaTest && o.enable(27),
                    e.vertexColors && o.enable(28),
                    e.vertexAlphas && o.enable(29),
                    e.vertexUvs && o.enable(30),
                    e.vertexTangents && o.enable(31),
                    e.uvsVertexOnly && o.enable(32),
                    t.push(o.mask),
                    o.disableAll(),
                    e.fog && o.enable(0),
                    e.useFog && o.enable(1),
                    e.flatShading && o.enable(2),
                    e.logarithmicDepthBuffer && o.enable(3),
                    e.skinning && o.enable(4),
                    e.morphTargets && o.enable(5),
                    e.morphNormals && o.enable(6),
                    e.morphColors && o.enable(7),
                    e.premultipliedAlpha && o.enable(8),
                    e.shadowMapEnabled && o.enable(9),
                    e.physicallyCorrectLights && o.enable(10),
                    e.doubleSided && o.enable(11),
                    e.flipSided && o.enable(12),
                    e.useDepthPacking && o.enable(13),
                    e.dithering && o.enable(14),
                    e.specularIntensityMap && o.enable(15),
                    e.specularColorMap && o.enable(16),
                    e.transmission && o.enable(17),
                    e.transmissionMap && o.enable(18),
                    e.thicknessMap && o.enable(19),
                    e.sheen && o.enable(20),
                    e.sheenColorMap && o.enable(21),
                    e.sheenRoughnessMap && o.enable(22),
                    e.decodeVideoTexture && o.enable(23),
                    e.opaque && o.enable(24),
                    t.push(o.mask);
                })(n, e),
                n.push(t.outputEncoding)),
              n.push(e.customProgramCacheKey),
              n.join()
            );
          },
          getUniforms: function (t) {
            const e = f[t.type];
            let n;
            if (e) {
              const t = An[e];
              n = ae.clone(t.uniforms);
            } else n = t.uniforms;
            return n;
          },
          acquireProgram: function (e, n) {
            let i;
            for (let t = 0, e = c.length; t < e; t++) {
              const e = c[t];
              if (e.cacheKey === n) {
                (i = e), ++i.usedTimes;
                break;
              }
            }
            return void 0 === i && ((i = new Ur(t, n, e, a)), c.push(i)), i;
          },
          releaseProgram: function (t) {
            if (0 == --t.usedTimes) {
              const e = c.indexOf(t);
              (c[e] = c[c.length - 1]), c.pop(), t.destroy();
            }
          },
          releaseShaderCache: function (t) {
            l.remove(t);
          },
          programs: c,
          dispose: function () {
            l.dispose();
          },
        };
      }
      function Br() {
        let t = new WeakMap();
        return {
          get: function (e) {
            let n = t.get(e);
            return void 0 === n && ((n = {}), t.set(e, n)), n;
          },
          remove: function (e) {
            t.delete(e);
          },
          update: function (e, n, i) {
            t.get(e)[n] = i;
          },
          dispose: function () {
            t = new WeakMap();
          },
        };
      }
      function Gr(t, e) {
        return t.groupOrder !== e.groupOrder
          ? t.groupOrder - e.groupOrder
          : t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.material.id !== e.material.id
          ? t.material.id - e.material.id
          : t.z !== e.z
          ? t.z - e.z
          : t.id - e.id;
      }
      function Hr(t, e) {
        return t.groupOrder !== e.groupOrder
          ? t.groupOrder - e.groupOrder
          : t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.z !== e.z
          ? e.z - t.z
          : t.id - e.id;
      }
      function Vr() {
        const t = [];
        let e = 0;
        const n = [],
          i = [],
          r = [];
        function a(n, i, r, a, s, o) {
          let l = t[e];
          return (
            void 0 === l
              ? ((l = {
                  id: n.id,
                  object: n,
                  geometry: i,
                  material: r,
                  groupOrder: a,
                  renderOrder: n.renderOrder,
                  z: s,
                  group: o,
                }),
                (t[e] = l))
              : ((l.id = n.id),
                (l.object = n),
                (l.geometry = i),
                (l.material = r),
                (l.groupOrder = a),
                (l.renderOrder = n.renderOrder),
                (l.z = s),
                (l.group = o)),
            e++,
            l
          );
        }
        return {
          opaque: n,
          transmissive: i,
          transparent: r,
          init: function () {
            (e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
          },
          push: function (t, e, s, o, l, c) {
            const u = a(t, e, s, o, l, c);
            s.transmission > 0
              ? i.push(u)
              : !0 === s.transparent
              ? r.push(u)
              : n.push(u);
          },
          unshift: function (t, e, s, o, l, c) {
            const u = a(t, e, s, o, l, c);
            s.transmission > 0
              ? i.unshift(u)
              : !0 === s.transparent
              ? r.unshift(u)
              : n.unshift(u);
          },
          finish: function () {
            for (let n = e, i = t.length; n < i; n++) {
              const e = t[n];
              if (null === e.id) break;
              (e.id = null),
                (e.object = null),
                (e.geometry = null),
                (e.material = null),
                (e.group = null);
            }
          },
          sort: function (t, e) {
            n.length > 1 && n.sort(t || Gr),
              i.length > 1 && i.sort(e || Hr),
              r.length > 1 && r.sort(e || Hr);
          },
        };
      }
      function kr() {
        let t = new WeakMap();
        return {
          get: function (e, n) {
            const i = t.get(e);
            let r;
            return (
              void 0 === i
                ? ((r = new Vr()), t.set(e, [r]))
                : n >= i.length
                ? ((r = new Vr()), i.push(r))
                : (r = i[n]),
              r
            );
          },
          dispose: function () {
            t = new WeakMap();
          },
        };
      }
      function Wr() {
        const t = {};
        return {
          get: function (e) {
            if (void 0 !== t[e.id]) return t[e.id];
            let n;
            switch (e.type) {
              case "DirectionalLight":
                n = { direction: new d(), color: new we() };
                break;
              case "SpotLight":
                n = {
                  position: new d(),
                  direction: new d(),
                  color: new we(),
                  distance: 0,
                  coneCos: 0,
                  penumbraCos: 0,
                  decay: 0,
                };
                break;
              case "PointLight":
                n = {
                  position: new d(),
                  color: new we(),
                  distance: 0,
                  decay: 0,
                };
                break;
              case "HemisphereLight":
                n = {
                  direction: new d(),
                  skyColor: new we(),
                  groundColor: new we(),
                };
                break;
              case "RectAreaLight":
                n = {
                  color: new we(),
                  position: new d(),
                  halfWidth: new d(),
                  halfHeight: new d(),
                };
            }
            return (t[e.id] = n), n;
          },
        };
      }
      let Xr = 0;
      function qr(t, e) {
        return (
          (e.castShadow ? 2 : 0) -
          (t.castShadow ? 2 : 0) +
          (e.map ? 1 : 0) -
          (t.map ? 1 : 0)
        );
      }
      function jr(t, e) {
        const n = new Wr(),
          i = (function () {
            const t = {};
            return {
              get: function (e) {
                if (void 0 !== t[e.id]) return t[e.id];
                let n;
                switch (e.type) {
                  case "DirectionalLight":
                  case "SpotLight":
                    n = {
                      shadowBias: 0,
                      shadowNormalBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new W(),
                    };
                    break;
                  case "PointLight":
                    n = {
                      shadowBias: 0,
                      shadowNormalBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new W(),
                      shadowCameraNear: 1,
                      shadowCameraFar: 1e3,
                    };
                }
                return (t[e.id] = n), n;
              },
            };
          })(),
          r = {
            version: 0,
            hash: {
              directionalLength: -1,
              pointLength: -1,
              spotLength: -1,
              rectAreaLength: -1,
              hemiLength: -1,
              numDirectionalShadows: -1,
              numPointShadows: -1,
              numSpotShadows: -1,
              numSpotMaps: -1,
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotLightMap: [],
            spotShadow: [],
            spotShadowMap: [],
            spotLightMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            numSpotLightShadowsWithMaps: 0,
          };
        for (let t = 0; t < 9; t++) r.probe.push(new d());
        const a = new d(),
          s = new m(),
          o = new m();
        return {
          setup: function (a, s) {
            let o = 0,
              l = 0,
              c = 0;
            for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
            let u = 0,
              h = 0,
              d = 0,
              p = 0,
              f = 0,
              m = 0,
              g = 0,
              _ = 0,
              v = 0,
              x = 0;
            a.sort(qr);
            const M = !0 !== s ? Math.PI : 1;
            for (let t = 0, e = a.length; t < e; t++) {
              const e = a[t],
                s = e.color,
                y = e.intensity,
                E = e.distance,
                S = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
              if (e.isAmbientLight)
                (o += s.r * y * M), (l += s.g * y * M), (c += s.b * y * M);
              else if (e.isLightProbe)
                for (let t = 0; t < 9; t++)
                  r.probe[t].addScaledVector(e.sh.coefficients[t], y);
              else if (e.isDirectionalLight) {
                const t = n.get(e);
                if (
                  (t.color.copy(e.color).multiplyScalar(e.intensity * M),
                  e.castShadow)
                ) {
                  const t = e.shadow,
                    n = i.get(e);
                  (n.shadowBias = t.bias),
                    (n.shadowNormalBias = t.normalBias),
                    (n.shadowRadius = t.radius),
                    (n.shadowMapSize = t.mapSize),
                    (r.directionalShadow[u] = n),
                    (r.directionalShadowMap[u] = S),
                    (r.directionalShadowMatrix[u] = e.shadow.matrix),
                    m++;
                }
                (r.directional[u] = t), u++;
              } else if (e.isSpotLight) {
                const t = n.get(e);
                t.position.setFromMatrixPosition(e.matrixWorld),
                  t.color.copy(s).multiplyScalar(y * M),
                  (t.distance = E),
                  (t.coneCos = Math.cos(e.angle)),
                  (t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra))),
                  (t.decay = e.decay),
                  (r.spot[d] = t);
                const a = e.shadow;
                if (
                  (e.map &&
                    ((r.spotLightMap[v] = e.map),
                    v++,
                    a.updateMatrices(e),
                    e.castShadow && x++),
                  (r.spotLightMatrix[d] = a.matrix),
                  e.castShadow)
                ) {
                  const t = i.get(e);
                  (t.shadowBias = a.bias),
                    (t.shadowNormalBias = a.normalBias),
                    (t.shadowRadius = a.radius),
                    (t.shadowMapSize = a.mapSize),
                    (r.spotShadow[d] = t),
                    (r.spotShadowMap[d] = S),
                    _++;
                }
                d++;
              } else if (e.isRectAreaLight) {
                const t = n.get(e);
                t.color.copy(s).multiplyScalar(y),
                  t.halfWidth.set(0.5 * e.width, 0, 0),
                  t.halfHeight.set(0, 0.5 * e.height, 0),
                  (r.rectArea[p] = t),
                  p++;
              } else if (e.isPointLight) {
                const t = n.get(e);
                if (
                  (t.color.copy(e.color).multiplyScalar(e.intensity * M),
                  (t.distance = e.distance),
                  (t.decay = e.decay),
                  e.castShadow)
                ) {
                  const t = e.shadow,
                    n = i.get(e);
                  (n.shadowBias = t.bias),
                    (n.shadowNormalBias = t.normalBias),
                    (n.shadowRadius = t.radius),
                    (n.shadowMapSize = t.mapSize),
                    (n.shadowCameraNear = t.camera.near),
                    (n.shadowCameraFar = t.camera.far),
                    (r.pointShadow[h] = n),
                    (r.pointShadowMap[h] = S),
                    (r.pointShadowMatrix[h] = e.shadow.matrix),
                    g++;
                }
                (r.point[h] = t), h++;
              } else if (e.isHemisphereLight) {
                const t = n.get(e);
                t.skyColor.copy(e.color).multiplyScalar(y * M),
                  t.groundColor.copy(e.groundColor).multiplyScalar(y * M),
                  (r.hemi[f] = t),
                  f++;
              }
            }
            p > 0 &&
              (e.isWebGL2 || !0 === t.has("OES_texture_float_linear")
                ? ((r.rectAreaLTC1 = wn.LTC_FLOAT_1),
                  (r.rectAreaLTC2 = wn.LTC_FLOAT_2))
                : !0 === t.has("OES_texture_half_float_linear")
                ? ((r.rectAreaLTC1 = wn.LTC_HALF_1),
                  (r.rectAreaLTC2 = wn.LTC_HALF_2))
                : console.error(
                    "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
                  )),
              (r.ambient[0] = o),
              (r.ambient[1] = l),
              (r.ambient[2] = c);
            const y = r.hash;
            (y.directionalLength === u &&
              y.pointLength === h &&
              y.spotLength === d &&
              y.rectAreaLength === p &&
              y.hemiLength === f &&
              y.numDirectionalShadows === m &&
              y.numPointShadows === g &&
              y.numSpotShadows === _ &&
              y.numSpotMaps === v) ||
              ((r.directional.length = u),
              (r.spot.length = d),
              (r.rectArea.length = p),
              (r.point.length = h),
              (r.hemi.length = f),
              (r.directionalShadow.length = m),
              (r.directionalShadowMap.length = m),
              (r.pointShadow.length = g),
              (r.pointShadowMap.length = g),
              (r.spotShadow.length = _),
              (r.spotShadowMap.length = _),
              (r.directionalShadowMatrix.length = m),
              (r.pointShadowMatrix.length = g),
              (r.spotLightMatrix.length = _ + v - x),
              (r.spotLightMap.length = v),
              (r.numSpotLightShadowsWithMaps = x),
              (y.directionalLength = u),
              (y.pointLength = h),
              (y.spotLength = d),
              (y.rectAreaLength = p),
              (y.hemiLength = f),
              (y.numDirectionalShadows = m),
              (y.numPointShadows = g),
              (y.numSpotShadows = _),
              (y.numSpotMaps = v),
              (r.version = Xr++));
          },
          setupView: function (t, e) {
            let n = 0,
              i = 0,
              l = 0,
              c = 0,
              u = 0;
            const h = e.matrixWorldInverse;
            for (let e = 0, d = t.length; e < d; e++) {
              const d = t[e];
              if (d.isDirectionalLight) {
                const t = r.directional[n];
                t.direction.setFromMatrixPosition(d.matrixWorld),
                  a.setFromMatrixPosition(d.target.matrixWorld),
                  t.direction.sub(a),
                  t.direction.transformDirection(h),
                  n++;
              } else if (d.isSpotLight) {
                const t = r.spot[l];
                t.position.setFromMatrixPosition(d.matrixWorld),
                  t.position.applyMatrix4(h),
                  t.direction.setFromMatrixPosition(d.matrixWorld),
                  a.setFromMatrixPosition(d.target.matrixWorld),
                  t.direction.sub(a),
                  t.direction.transformDirection(h),
                  l++;
              } else if (d.isRectAreaLight) {
                const t = r.rectArea[c];
                t.position.setFromMatrixPosition(d.matrixWorld),
                  t.position.applyMatrix4(h),
                  o.identity(),
                  s.copy(d.matrixWorld),
                  s.premultiply(h),
                  o.extractRotation(s),
                  t.halfWidth.set(0.5 * d.width, 0, 0),
                  t.halfHeight.set(0, 0.5 * d.height, 0),
                  t.halfWidth.applyMatrix4(o),
                  t.halfHeight.applyMatrix4(o),
                  c++;
              } else if (d.isPointLight) {
                const t = r.point[i];
                t.position.setFromMatrixPosition(d.matrixWorld),
                  t.position.applyMatrix4(h),
                  i++;
              } else if (d.isHemisphereLight) {
                const t = r.hemi[u];
                t.direction.setFromMatrixPosition(d.matrixWorld),
                  t.direction.transformDirection(h),
                  u++;
              }
            }
          },
          state: r,
        };
      }
      function Yr(t, e) {
        const n = new jr(t, e),
          i = [],
          r = [];
        return {
          init: function () {
            (i.length = 0), (r.length = 0);
          },
          state: { lightsArray: i, shadowsArray: r, lights: n },
          setupLights: function (t) {
            n.setup(i, t);
          },
          setupLightsView: function (t) {
            n.setupView(i, t);
          },
          pushLight: function (t) {
            i.push(t);
          },
          pushShadow: function (t) {
            r.push(t);
          },
        };
      }
      function Zr(t, e) {
        let n = new WeakMap();
        return {
          get: function (i, r = 0) {
            const a = n.get(i);
            let s;
            return (
              void 0 === a
                ? ((s = new Yr(t, e)), n.set(i, [s]))
                : r >= a.length
                ? ((s = new Yr(t, e)), a.push(s))
                : (s = a[r]),
              s
            );
          },
          dispose: function () {
            n = new WeakMap();
          },
        };
      }
      class Kr extends ne {
        constructor(t) {
          super(),
            (this.isMeshDepthMaterial = !0),
            (this.type = "MeshDepthMaterial"),
            (this.depthPacking = 3200),
            (this.map = null),
            (this.alphaMap = null),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            (this.depthPacking = t.depthPacking),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            this
          );
        }
      }
      class Jr extends ne {
        constructor(t) {
          super(),
            (this.isMeshDistanceMaterial = !0),
            (this.type = "MeshDistanceMaterial"),
            (this.referencePosition = new d()),
            (this.nearDistance = 1),
            (this.farDistance = 1e3),
            (this.map = null),
            (this.alphaMap = null),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.referencePosition.copy(t.referencePosition),
            (this.nearDistance = t.nearDistance),
            (this.farDistance = t.farDistance),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            this
          );
        }
      }
      function Qr(t, e, n) {
        let i = new Ge();
        const r = new W(),
          a = new W(),
          s = new He(),
          o = new Kr({ depthPacking: 3201 }),
          l = new Jr(),
          c = {},
          u = n.maxTextureSize,
          h = { 0: 1, 1: 0, 2: 2 },
          d = new se({
            defines: { VSM_SAMPLES: 8 },
            uniforms: {
              shadow_pass: { value: null },
              resolution: { value: new W() },
              radius: { value: 4 },
            },
            vertexShader:
              "\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}\n",
            fragmentShader:
              "\nuniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n\n#include <packing>\n\nvoid main() {\n\n\tconst float samples = float( VSM_SAMPLES );\n\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\n\t\t#ifdef HORIZONTAL_PASS\n\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\n\t\t#else\n\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\n\t\t#endif\n\n\t}\n\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n\n}\n",
          }),
          p = d.clone();
        p.defines.HORIZONTAL_PASS = 1;
        const f = new te();
        f.setAttribute(
          "position",
          new Ft(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
        );
        const m = new Sn(f, d),
          g = this;
        function _(n, i) {
          const a = e.update(m);
          d.defines.VSM_SAMPLES !== n.blurSamples &&
            ((d.defines.VSM_SAMPLES = n.blurSamples),
            (p.defines.VSM_SAMPLES = n.blurSamples),
            (d.needsUpdate = !0),
            (p.needsUpdate = !0)),
            null === n.mapPass && (n.mapPass = new Bn(r.x, r.y)),
            (d.uniforms.shadow_pass.value = n.map.texture),
            (d.uniforms.resolution.value = n.mapSize),
            (d.uniforms.radius.value = n.radius),
            t.setRenderTarget(n.mapPass),
            t.clear(),
            t.renderBufferDirect(i, null, a, d, m, null),
            (p.uniforms.shadow_pass.value = n.mapPass.texture),
            (p.uniforms.resolution.value = n.mapSize),
            (p.uniforms.radius.value = n.radius),
            t.setRenderTarget(n.map),
            t.clear(),
            t.renderBufferDirect(i, null, a, p, m, null);
        }
        function v(e, n, i, r, a, s) {
          let u = null;
          const d =
            !0 === i.isPointLight
              ? e.customDistanceMaterial
              : e.customDepthMaterial;
          if (
            ((u = void 0 !== d ? d : !0 === i.isPointLight ? l : o),
            (t.localClippingEnabled &&
              !0 === n.clipShadows &&
              Array.isArray(n.clippingPlanes) &&
              0 !== n.clippingPlanes.length) ||
              (n.displacementMap && 0 !== n.displacementScale) ||
              (n.alphaMap && n.alphaTest > 0))
          ) {
            const t = u.uuid,
              e = n.uuid;
            let i = c[t];
            void 0 === i && ((i = {}), (c[t] = i));
            let r = i[e];
            void 0 === r && ((r = u.clone()), (i[e] = r)), (u = r);
          }
          return (
            (u.visible = n.visible),
            (u.wireframe = n.wireframe),
            (u.side =
              3 === s
                ? null !== n.shadowSide
                  ? n.shadowSide
                  : n.side
                : null !== n.shadowSide
                ? n.shadowSide
                : h[n.side]),
            (u.alphaMap = n.alphaMap),
            (u.alphaTest = n.alphaTest),
            (u.clipShadows = n.clipShadows),
            (u.clippingPlanes = n.clippingPlanes),
            (u.clipIntersection = n.clipIntersection),
            (u.displacementMap = n.displacementMap),
            (u.displacementScale = n.displacementScale),
            (u.displacementBias = n.displacementBias),
            (u.wireframeLinewidth = n.wireframeLinewidth),
            (u.linewidth = n.linewidth),
            !0 === i.isPointLight &&
              !0 === u.isMeshDistanceMaterial &&
              (u.referencePosition.setFromMatrixPosition(i.matrixWorld),
              (u.nearDistance = r),
              (u.farDistance = a)),
            u
          );
        }
        function x(n, r, a, s, o) {
          if (!1 === n.visible) return;
          if (
            n.layers.test(r.layers) &&
            (n.isMesh || n.isLine || n.isPoints) &&
            (n.castShadow || (n.receiveShadow && 3 === o)) &&
            (!n.frustumCulled || i.intersectsObject(n))
          ) {
            n.modelViewMatrix.multiplyMatrices(
              a.matrixWorldInverse,
              n.matrixWorld
            );
            const i = e.update(n),
              r = n.material;
            if (Array.isArray(r)) {
              const e = i.groups;
              for (let l = 0, c = e.length; l < c; l++) {
                const c = e[l],
                  u = r[c.materialIndex];
                if (u && u.visible) {
                  const e = v(n, u, s, a.near, a.far, o);
                  t.renderBufferDirect(a, null, i, e, n, c);
                }
              }
            } else if (r.visible) {
              const e = v(n, r, s, a.near, a.far, o);
              t.renderBufferDirect(a, null, i, e, n, null);
            }
          }
          const l = n.children;
          for (let t = 0, e = l.length; t < e; t++) x(l[t], r, a, s, o);
        }
        (this.enabled = !1),
          (this.autoUpdate = !0),
          (this.needsUpdate = !1),
          (this.type = 1),
          (this.render = function (e, n, o) {
            if (!1 === g.enabled) return;
            if (!1 === g.autoUpdate && !1 === g.needsUpdate) return;
            if (0 === e.length) return;
            const l = t.getRenderTarget(),
              c = t.getActiveCubeFace(),
              h = t.getActiveMipmapLevel(),
              d = t.state;
            d.setBlending(0),
              d.buffers.color.setClear(1, 1, 1, 1),
              d.buffers.depth.setTest(!0),
              d.setScissorTest(!1);
            for (let l = 0, c = e.length; l < c; l++) {
              const c = e[l],
                h = c.shadow;
              if (void 0 === h) {
                console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                continue;
              }
              if (!1 === h.autoUpdate && !1 === h.needsUpdate) continue;
              r.copy(h.mapSize);
              const p = h.getFrameExtents();
              if (
                (r.multiply(p),
                a.copy(h.mapSize),
                (r.x > u || r.y > u) &&
                  (r.x > u &&
                    ((a.x = Math.floor(u / p.x)),
                    (r.x = a.x * p.x),
                    (h.mapSize.x = a.x)),
                  r.y > u &&
                    ((a.y = Math.floor(u / p.y)),
                    (r.y = a.y * p.y),
                    (h.mapSize.y = a.y))),
                null === h.map)
              ) {
                const t =
                  3 !== this.type ? { minFilter: pt, magFilter: pt } : {};
                (h.map = new Bn(r.x, r.y, t)),
                  (h.map.texture.name = c.name + ".shadowMap"),
                  h.camera.updateProjectionMatrix();
              }
              t.setRenderTarget(h.map), t.clear();
              const f = h.getViewportCount();
              for (let t = 0; t < f; t++) {
                const e = h.getViewport(t);
                s.set(a.x * e.x, a.y * e.y, a.x * e.z, a.y * e.w),
                  d.viewport(s),
                  h.updateMatrices(c, t),
                  (i = h.getFrustum()),
                  x(n, o, h.camera, c, this.type);
              }
              !0 !== h.isPointLightShadow && 3 === this.type && _(h, o),
                (h.needsUpdate = !1);
            }
            (g.needsUpdate = !1), t.setRenderTarget(l, c, h);
          });
      }
      function $r(t, e, n) {
        const i = n.isWebGL2,
          r = new (function () {
            let e = !1;
            const n = new He();
            let i = null;
            const r = new He(0, 0, 0, 0);
            return {
              setMask: function (n) {
                i === n || e || (t.colorMask(n, n, n, n), (i = n));
              },
              setLocked: function (t) {
                e = t;
              },
              setClear: function (e, i, a, s, o) {
                !0 === o && ((e *= s), (i *= s), (a *= s)),
                  n.set(e, i, a, s),
                  !1 === r.equals(n) && (t.clearColor(e, i, a, s), r.copy(n));
              },
              reset: function () {
                (e = !1), (i = null), r.set(-1, 0, 0, 0);
              },
            };
          })(),
          a = new (function () {
            let e = !1,
              n = null,
              i = null,
              r = null;
            return {
              setTest: function (e) {
                e ? G(t.DEPTH_TEST) : H(t.DEPTH_TEST);
              },
              setMask: function (i) {
                n === i || e || (t.depthMask(i), (n = i));
              },
              setFunc: function (e) {
                if (i !== e) {
                  switch (e) {
                    case 0:
                      t.depthFunc(t.NEVER);
                      break;
                    case 1:
                      t.depthFunc(t.ALWAYS);
                      break;
                    case 2:
                      t.depthFunc(t.LESS);
                      break;
                    case 3:
                    default:
                      t.depthFunc(t.LEQUAL);
                      break;
                    case 4:
                      t.depthFunc(t.EQUAL);
                      break;
                    case 5:
                      t.depthFunc(t.GEQUAL);
                      break;
                    case 6:
                      t.depthFunc(t.GREATER);
                      break;
                    case 7:
                      t.depthFunc(t.NOTEQUAL);
                  }
                  i = e;
                }
              },
              setLocked: function (t) {
                e = t;
              },
              setClear: function (e) {
                r !== e && (t.clearDepth(e), (r = e));
              },
              reset: function () {
                (e = !1), (n = null), (i = null), (r = null);
              },
            };
          })(),
          s = new (function () {
            let e = !1,
              n = null,
              i = null,
              r = null,
              a = null,
              s = null,
              o = null,
              l = null,
              c = null;
            return {
              setTest: function (n) {
                e || (n ? G(t.STENCIL_TEST) : H(t.STENCIL_TEST));
              },
              setMask: function (i) {
                n === i || e || (t.stencilMask(i), (n = i));
              },
              setFunc: function (e, n, s) {
                (i === e && r === n && a === s) ||
                  (t.stencilFunc(e, n, s), (i = e), (r = n), (a = s));
              },
              setOp: function (e, n, i) {
                (s === e && o === n && l === i) ||
                  (t.stencilOp(e, n, i), (s = e), (o = n), (l = i));
              },
              setLocked: function (t) {
                e = t;
              },
              setClear: function (e) {
                c !== e && (t.clearStencil(e), (c = e));
              },
              reset: function () {
                (e = !1),
                  (n = null),
                  (i = null),
                  (r = null),
                  (a = null),
                  (s = null),
                  (o = null),
                  (l = null),
                  (c = null);
              },
            };
          })(),
          o = new WeakMap(),
          l = new WeakMap();
        let c = {},
          u = {},
          h = new WeakMap(),
          d = [],
          p = null,
          f = !1,
          m = null,
          g = null,
          _ = null,
          v = null,
          x = null,
          M = null,
          y = null,
          E = !1,
          S = null,
          b = null,
          T = null,
          w = null,
          A = null;
        const R = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        let C = !1,
          L = 0;
        const D = t.getParameter(t.VERSION);
        -1 !== D.indexOf("WebGL")
          ? ((L = parseFloat(/^WebGL (\d)/.exec(D)[1])), (C = L >= 1))
          : -1 !== D.indexOf("OpenGL ES") &&
            ((L = parseFloat(/^OpenGL ES (\d)/.exec(D)[1])), (C = L >= 2));
        let P = null,
          I = {};
        const U = t.getParameter(t.SCISSOR_BOX),
          N = t.getParameter(t.VIEWPORT),
          O = new He().fromArray(U),
          F = new He().fromArray(N);
        function z(e, n, i) {
          const r = new Uint8Array(4),
            a = t.createTexture();
          t.bindTexture(e, a),
            t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
            t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
          for (let e = 0; e < i; e++)
            t.texImage2D(n + e, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
          return a;
        }
        const B = {};
        function G(e) {
          !0 !== c[e] && (t.enable(e), (c[e] = !0));
        }
        function H(e) {
          !1 !== c[e] && (t.disable(e), (c[e] = !1));
        }
        (B[t.TEXTURE_2D] = z(t.TEXTURE_2D, t.TEXTURE_2D, 1)),
          (B[t.TEXTURE_CUBE_MAP] = z(
            t.TEXTURE_CUBE_MAP,
            t.TEXTURE_CUBE_MAP_POSITIVE_X,
            6
          )),
          r.setClear(0, 0, 0, 1),
          a.setClear(1),
          s.setClear(0),
          G(t.DEPTH_TEST),
          a.setFunc(3),
          X(!1),
          q(1),
          G(t.CULL_FACE),
          W(0);
        const V = {
          [st]: t.FUNC_ADD,
          101: t.FUNC_SUBTRACT,
          102: t.FUNC_REVERSE_SUBTRACT,
        };
        if (i) (V[103] = t.MIN), (V[104] = t.MAX);
        else {
          const t = e.get("EXT_blend_minmax");
          null !== t && ((V[103] = t.MIN_EXT), (V[104] = t.MAX_EXT));
        }
        const k = {
          200: t.ZERO,
          201: t.ONE,
          202: t.SRC_COLOR,
          204: t.SRC_ALPHA,
          210: t.SRC_ALPHA_SATURATE,
          208: t.DST_COLOR,
          206: t.DST_ALPHA,
          203: t.ONE_MINUS_SRC_COLOR,
          205: t.ONE_MINUS_SRC_ALPHA,
          209: t.ONE_MINUS_DST_COLOR,
          207: t.ONE_MINUS_DST_ALPHA,
        };
        function W(e, n, i, r, a, s, o, l) {
          if (0 !== e) {
            if ((!1 === f && (G(t.BLEND), (f = !0)), 5 === e))
              (a = a || n),
                (s = s || i),
                (o = o || r),
                (n === g && a === x) ||
                  (t.blendEquationSeparate(V[n], V[a]), (g = n), (x = a)),
                (i === _ && r === v && s === M && o === y) ||
                  (t.blendFuncSeparate(k[i], k[r], k[s], k[o]),
                  (_ = i),
                  (v = r),
                  (M = s),
                  (y = o)),
                (m = e),
                (E = null);
            else if (e !== m || l !== E) {
              if (
                ((g === st && x === st) ||
                  (t.blendEquation(t.FUNC_ADD), (g = st), (x = st)),
                l)
              )
                switch (e) {
                  case 1:
                    t.blendFuncSeparate(
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA,
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA
                    );
                    break;
                  case 2:
                    t.blendFunc(t.ONE, t.ONE);
                    break;
                  case 3:
                    t.blendFuncSeparate(
                      t.ZERO,
                      t.ONE_MINUS_SRC_COLOR,
                      t.ZERO,
                      t.ONE
                    );
                    break;
                  case 4:
                    t.blendFuncSeparate(
                      t.ZERO,
                      t.SRC_COLOR,
                      t.ZERO,
                      t.SRC_ALPHA
                    );
                    break;
                  default:
                    console.error("THREE.WebGLState: Invalid blending: ", e);
                }
              else
                switch (e) {
                  case 1:
                    t.blendFuncSeparate(
                      t.SRC_ALPHA,
                      t.ONE_MINUS_SRC_ALPHA,
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA
                    );
                    break;
                  case 2:
                    t.blendFunc(t.SRC_ALPHA, t.ONE);
                    break;
                  case 3:
                    t.blendFuncSeparate(
                      t.ZERO,
                      t.ONE_MINUS_SRC_COLOR,
                      t.ZERO,
                      t.ONE
                    );
                    break;
                  case 4:
                    t.blendFunc(t.ZERO, t.SRC_COLOR);
                    break;
                  default:
                    console.error("THREE.WebGLState: Invalid blending: ", e);
                }
              (_ = null), (v = null), (M = null), (y = null), (m = e), (E = l);
            }
          } else !0 === f && (H(t.BLEND), (f = !1));
        }
        function X(e) {
          S !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), (S = e));
        }
        function q(e) {
          0 !== e
            ? (G(t.CULL_FACE),
              e !== b &&
                (1 === e
                  ? t.cullFace(t.BACK)
                  : 2 === e
                  ? t.cullFace(t.FRONT)
                  : t.cullFace(t.FRONT_AND_BACK)))
            : H(t.CULL_FACE),
            (b = e);
        }
        function j(e, n, i) {
          e
            ? (G(t.POLYGON_OFFSET_FILL),
              (w === n && A === i) || (t.polygonOffset(n, i), (w = n), (A = i)))
            : H(t.POLYGON_OFFSET_FILL);
        }
        return {
          buffers: { color: r, depth: a, stencil: s },
          enable: G,
          disable: H,
          bindFramebuffer: function (e, n) {
            return (
              u[e] !== n &&
              (t.bindFramebuffer(e, n),
              (u[e] = n),
              i &&
                (e === t.DRAW_FRAMEBUFFER && (u[t.FRAMEBUFFER] = n),
                e === t.FRAMEBUFFER && (u[t.DRAW_FRAMEBUFFER] = n)),
              !0)
            );
          },
          drawBuffers: function (i, r) {
            let a = d,
              s = !1;
            if (i)
              if (
                ((a = h.get(r)),
                void 0 === a && ((a = []), h.set(r, a)),
                i.isWebGLMultipleRenderTargets)
              ) {
                const e = i.texture;
                if (a.length !== e.length || a[0] !== t.COLOR_ATTACHMENT0) {
                  for (let n = 0, i = e.length; n < i; n++)
                    a[n] = t.COLOR_ATTACHMENT0 + n;
                  (a.length = e.length), (s = !0);
                }
              } else
                a[0] !== t.COLOR_ATTACHMENT0 &&
                  ((a[0] = t.COLOR_ATTACHMENT0), (s = !0));
            else a[0] !== t.BACK && ((a[0] = t.BACK), (s = !0));
            s &&
              (n.isWebGL2
                ? t.drawBuffers(a)
                : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(a));
          },
          useProgram: function (e) {
            return p !== e && (t.useProgram(e), (p = e), !0);
          },
          setBlending: W,
          setMaterial: function (e, n) {
            2 === e.side ? H(t.CULL_FACE) : G(t.CULL_FACE);
            let i = 1 === e.side;
            n && (i = !i),
              X(i),
              1 === e.blending && !1 === e.transparent
                ? W(0)
                : W(
                    e.blending,
                    e.blendEquation,
                    e.blendSrc,
                    e.blendDst,
                    e.blendEquationAlpha,
                    e.blendSrcAlpha,
                    e.blendDstAlpha,
                    e.premultipliedAlpha
                  ),
              a.setFunc(e.depthFunc),
              a.setTest(e.depthTest),
              a.setMask(e.depthWrite),
              r.setMask(e.colorWrite);
            const o = e.stencilWrite;
            s.setTest(o),
              o &&
                (s.setMask(e.stencilWriteMask),
                s.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
                s.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
              j(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
              !0 === e.alphaToCoverage
                ? G(t.SAMPLE_ALPHA_TO_COVERAGE)
                : H(t.SAMPLE_ALPHA_TO_COVERAGE);
          },
          setFlipSided: X,
          setCullFace: q,
          setLineWidth: function (e) {
            e !== T && (C && t.lineWidth(e), (T = e));
          },
          setPolygonOffset: j,
          setScissorTest: function (e) {
            e ? G(t.SCISSOR_TEST) : H(t.SCISSOR_TEST);
          },
          activeTexture: function (e) {
            void 0 === e && (e = t.TEXTURE0 + R - 1),
              P !== e && (t.activeTexture(e), (P = e));
          },
          bindTexture: function (e, n, i) {
            void 0 === i && (i = null === P ? t.TEXTURE0 + R - 1 : P);
            let r = I[i];
            void 0 === r &&
              ((r = { type: void 0, texture: void 0 }), (I[i] = r)),
              (r.type === e && r.texture === n) ||
                (P !== i && (t.activeTexture(i), (P = i)),
                t.bindTexture(e, n || B[e]),
                (r.type = e),
                (r.texture = n));
          },
          unbindTexture: function () {
            const e = I[P];
            void 0 !== e &&
              void 0 !== e.type &&
              (t.bindTexture(e.type, null),
              (e.type = void 0),
              (e.texture = void 0));
          },
          compressedTexImage2D: function () {
            try {
              t.compressedTexImage2D.apply(t, arguments);
            } catch (t) {
              console.error("THREE.WebGLState:", t);
            }
          },
          compressedTexImage3D: function () {
            try {
              t.compressedTexImage3D.apply(t, arguments);
            } catch (t) {
              console.error("THREE.WebGLState:", t);
            }
          },
          texImage2D: function () {
            try {
              t.texImage2D.apply(t, arguments);
            } catch (t) {
              console.error("THREE.WebGLState:", t);
            }
          },
          texImage3D: function () {
            try {
              t.texImage3D.apply(t, arguments);
            } catch (t) {
              console.error("THREE.WebGLState:", t);
            }
          },
          updateUBOMapping: function (e, n) {
            let i = l.get(n);
            void 0 === i && ((i = new WeakMap()), l.set(n, i));
            let r = i.get(e);
            void 0 === r &&
              ((r = t.getUniformBlockIndex(n, e.name)), i.set(e, r));
          },
          uniformBlockBinding: function (e, n) {
            const i = l.get(n).get(e);
            o.get(e) !== i &&
              (t.uniformBlockBinding(n, i, e.__bindingPointIndex), o.set(e, i));
          },
          texStorage2D: function () {
            try {
              t.texStorage2D.apply(t, arguments);
            } catch (t) {
              console.error("THREE.WebGLState:", t);
            }
          },
          texStorage3D: function () {
            try {
              t.texStorage3D.apply(t, arguments);
            } catch (t) {
              console.error("THREE.WebGLState:", t);
            }
          },
          texSubImage2D: function () {
            try {
              t.texSubImage2D.apply(t, arguments);
            } catch (t) {
              console.error("THREE.WebGLState:", t);
            }
          },
          texSubImage3D: function () {
            try {
              t.texSubImage3D.apply(t, arguments);
            } catch (t) {
              console.error("THREE.WebGLState:", t);
            }
          },
          compressedTexSubImage2D: function () {
            try {
              t.compressedTexSubImage2D.apply(t, arguments);
            } catch (t) {
              console.error("THREE.WebGLState:", t);
            }
          },
          compressedTexSubImage3D: function () {
            try {
              t.compressedTexSubImage3D.apply(t, arguments);
            } catch (t) {
              console.error("THREE.WebGLState:", t);
            }
          },
          scissor: function (e) {
            !1 === O.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), O.copy(e));
          },
          viewport: function (e) {
            !1 === F.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), F.copy(e));
          },
          reset: function () {
            t.disable(t.BLEND),
              t.disable(t.CULL_FACE),
              t.disable(t.DEPTH_TEST),
              t.disable(t.POLYGON_OFFSET_FILL),
              t.disable(t.SCISSOR_TEST),
              t.disable(t.STENCIL_TEST),
              t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),
              t.blendEquation(t.FUNC_ADD),
              t.blendFunc(t.ONE, t.ZERO),
              t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO),
              t.colorMask(!0, !0, !0, !0),
              t.clearColor(0, 0, 0, 0),
              t.depthMask(!0),
              t.depthFunc(t.LESS),
              t.clearDepth(1),
              t.stencilMask(4294967295),
              t.stencilFunc(t.ALWAYS, 0, 4294967295),
              t.stencilOp(t.KEEP, t.KEEP, t.KEEP),
              t.clearStencil(0),
              t.cullFace(t.BACK),
              t.frontFace(t.CCW),
              t.polygonOffset(0, 0),
              t.activeTexture(t.TEXTURE0),
              t.bindFramebuffer(t.FRAMEBUFFER, null),
              !0 === i &&
                (t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
                t.bindFramebuffer(t.READ_FRAMEBUFFER, null)),
              t.useProgram(null),
              t.lineWidth(1),
              t.scissor(0, 0, t.canvas.width, t.canvas.height),
              t.viewport(0, 0, t.canvas.width, t.canvas.height),
              (c = {}),
              (P = null),
              (I = {}),
              (u = {}),
              (h = new WeakMap()),
              (d = []),
              (p = null),
              (f = !1),
              (m = null),
              (g = null),
              (_ = null),
              (v = null),
              (x = null),
              (M = null),
              (y = null),
              (E = !1),
              (S = null),
              (b = null),
              (T = null),
              (w = null),
              (A = null),
              O.set(0, 0, t.canvas.width, t.canvas.height),
              F.set(0, 0, t.canvas.width, t.canvas.height),
              r.reset(),
              a.reset(),
              s.reset();
          },
        };
      }
      function ta(t, e, n, i, r, a, s) {
        const c = r.isWebGL2,
          u = r.maxTextures,
          h = r.maxCubemapSize,
          d = r.maxTextureSize,
          p = r.maxSamples,
          f = e.has("WEBGL_multisampled_render_to_texture")
            ? e.get("WEBGL_multisampled_render_to_texture")
            : null,
          m = /OculusBrowser/g.test(
            "undefined" == typeof navigator ? "" : navigator.userAgent
          ),
          g = new WeakMap();
        let _;
        const v = new WeakMap();
        let x = !1;
        try {
          x =
            "undefined" != typeof OffscreenCanvas &&
            null !== new OffscreenCanvas(1, 1).getContext("2d");
        } catch (t) {}
        function M(t, e) {
          return x ? new OffscreenCanvas(t, e) : qt("canvas");
        }
        function y(t, e, n, i) {
          let r = 1;
          if (
            ((t.width > i || t.height > i) &&
              (r = i / Math.max(t.width, t.height)),
            r < 1 || !0 === e)
          ) {
            if (
              ("undefined" != typeof HTMLImageElement &&
                t instanceof HTMLImageElement) ||
              ("undefined" != typeof HTMLCanvasElement &&
                t instanceof HTMLCanvasElement) ||
              ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
            ) {
              const i = e ? l : Math.floor,
                a = i(r * t.width),
                s = i(r * t.height);
              void 0 === _ && (_ = M(a, s));
              const o = n ? M(a, s) : _;
              return (
                (o.width = a),
                (o.height = s),
                o.getContext("2d").drawImage(t, 0, 0, a, s),
                console.warn(
                  "THREE.WebGLRenderer: Texture has been resized from (" +
                    t.width +
                    "x" +
                    t.height +
                    ") to (" +
                    a +
                    "x" +
                    s +
                    ")."
                ),
                o
              );
            }
            return (
              "data" in t &&
                console.warn(
                  "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                    t.width +
                    "x" +
                    t.height +
                    ")."
                ),
              t
            );
          }
          return t;
        }
        function E(t) {
          return o(t.width) && o(t.height);
        }
        function S(t, e) {
          return (
            t.generateMipmaps && e && t.minFilter !== pt && t.minFilter !== ft
          );
        }
        function b(e) {
          t.generateMipmap(e);
        }
        function T(n, i, r, a, s = !1) {
          if (!1 === c) return i;
          if (null !== n) {
            if (void 0 !== t[n]) return t[n];
            console.warn(
              "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
                n +
                "'"
            );
          }
          let o = i;
          return (
            i === t.RED &&
              (r === t.FLOAT && (o = t.R32F),
              r === t.HALF_FLOAT && (o = t.R16F),
              r === t.UNSIGNED_BYTE && (o = t.R8)),
            i === t.RG &&
              (r === t.FLOAT && (o = t.RG32F),
              r === t.HALF_FLOAT && (o = t.RG16F),
              r === t.UNSIGNED_BYTE && (o = t.RG8)),
            i === t.RGBA &&
              (r === t.FLOAT && (o = t.RGBA32F),
              r === t.HALF_FLOAT && (o = t.RGBA16F),
              r === t.UNSIGNED_BYTE &&
                (o = a === Ct && !1 === s ? t.SRGB8_ALPHA8 : t.RGBA8),
              r === t.UNSIGNED_SHORT_4_4_4_4 && (o = t.RGBA4),
              r === t.UNSIGNED_SHORT_5_5_5_1 && (o = t.RGB5_A1)),
            (o !== t.R16F &&
              o !== t.R32F &&
              o !== t.RG16F &&
              o !== t.RG32F &&
              o !== t.RGBA16F &&
              o !== t.RGBA32F) ||
              e.get("EXT_color_buffer_float"),
            o
          );
        }
        function w(t, e, n) {
          return !0 === S(t, n) ||
            (t.isFramebufferTexture && t.minFilter !== pt && t.minFilter !== ft)
            ? Math.log2(Math.max(e.width, e.height)) + 1
            : void 0 !== t.mipmaps && t.mipmaps.length > 0
            ? t.mipmaps.length
            : t.isCompressedTexture && Array.isArray(t.image)
            ? e.mipmaps.length
            : 1;
        }
        function A(e) {
          return e === pt || 1004 === e || 1005 === e ? t.NEAREST : t.LINEAR;
        }
        function R(t) {
          const e = t.target;
          e.removeEventListener("dispose", R),
            (function (t) {
              const e = i.get(t);
              if (void 0 === e.__webglInit) return;
              const n = t.source,
                r = v.get(n);
              if (r) {
                const i = r[e.__cacheKey];
                i.usedTimes--,
                  0 === i.usedTimes && L(t),
                  0 === Object.keys(r).length && v.delete(n);
              }
              i.remove(t);
            })(e),
            e.isVideoTexture && g.delete(e);
        }
        function C(e) {
          const n = e.target;
          n.removeEventListener("dispose", C),
            (function (e) {
              const n = e.texture,
                r = i.get(e),
                a = i.get(n);
              if (
                (void 0 !== a.__webglTexture &&
                  (t.deleteTexture(a.__webglTexture), s.memory.textures--),
                e.depthTexture && e.depthTexture.dispose(),
                e.isWebGLCubeRenderTarget)
              )
                for (let e = 0; e < 6; e++)
                  t.deleteFramebuffer(r.__webglFramebuffer[e]),
                    r.__webglDepthbuffer &&
                      t.deleteRenderbuffer(r.__webglDepthbuffer[e]);
              else {
                if (
                  (t.deleteFramebuffer(r.__webglFramebuffer),
                  r.__webglDepthbuffer &&
                    t.deleteRenderbuffer(r.__webglDepthbuffer),
                  r.__webglMultisampledFramebuffer &&
                    t.deleteFramebuffer(r.__webglMultisampledFramebuffer),
                  r.__webglColorRenderbuffer)
                )
                  for (let e = 0; e < r.__webglColorRenderbuffer.length; e++)
                    r.__webglColorRenderbuffer[e] &&
                      t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
                r.__webglDepthRenderbuffer &&
                  t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
              }
              if (e.isWebGLMultipleRenderTargets)
                for (let e = 0, r = n.length; e < r; e++) {
                  const r = i.get(n[e]);
                  r.__webglTexture &&
                    (t.deleteTexture(r.__webglTexture), s.memory.textures--),
                    i.remove(n[e]);
                }
              i.remove(n), i.remove(e);
            })(n);
        }
        function L(e) {
          const n = i.get(e);
          t.deleteTexture(n.__webglTexture);
          const r = e.source;
          delete v.get(r)[n.__cacheKey], s.memory.textures--;
        }
        let D = 0;
        function P(e, r) {
          const a = i.get(e);
          if (
            (e.isVideoTexture &&
              (function (t) {
                const e = s.render.frame;
                g.get(t) !== e && (g.set(t, e), t.update());
              })(e),
            !1 === e.isRenderTargetTexture &&
              e.version > 0 &&
              a.__version !== e.version)
          ) {
            const t = e.image;
            if (null === t)
              console.warn(
                "THREE.WebGLRenderer: Texture marked for update but no image data found."
              );
            else {
              if (!1 !== t.complete) return void F(a, e, r);
              console.warn(
                "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
              );
            }
          }
          n.bindTexture(t.TEXTURE_2D, a.__webglTexture, t.TEXTURE0 + r);
        }
        const I = {
            [ut]: t.REPEAT,
            [ht]: t.CLAMP_TO_EDGE,
            [dt]: t.MIRRORED_REPEAT,
          },
          U = {
            [pt]: t.NEAREST,
            1004: t.NEAREST_MIPMAP_NEAREST,
            1005: t.NEAREST_MIPMAP_LINEAR,
            [ft]: t.LINEAR,
            1007: t.LINEAR_MIPMAP_NEAREST,
            [mt]: t.LINEAR_MIPMAP_LINEAR,
          };
        function N(n, a, s) {
          if (
            (s
              ? (t.texParameteri(n, t.TEXTURE_WRAP_S, I[a.wrapS]),
                t.texParameteri(n, t.TEXTURE_WRAP_T, I[a.wrapT]),
                (n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY) ||
                  t.texParameteri(n, t.TEXTURE_WRAP_R, I[a.wrapR]),
                t.texParameteri(n, t.TEXTURE_MAG_FILTER, U[a.magFilter]),
                t.texParameteri(n, t.TEXTURE_MIN_FILTER, U[a.minFilter]))
              : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                (n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY) ||
                  t.texParameteri(n, t.TEXTURE_WRAP_R, t.CLAMP_TO_EDGE),
                (a.wrapS === ht && a.wrapT === ht) ||
                  console.warn(
                    "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
                  ),
                t.texParameteri(n, t.TEXTURE_MAG_FILTER, A(a.magFilter)),
                t.texParameteri(n, t.TEXTURE_MIN_FILTER, A(a.minFilter)),
                a.minFilter !== pt &&
                  a.minFilter !== ft &&
                  console.warn(
                    "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
                  )),
            !0 === e.has("EXT_texture_filter_anisotropic"))
          ) {
            const s = e.get("EXT_texture_filter_anisotropic");
            if (a.type === vt && !1 === e.has("OES_texture_float_linear"))
              return;
            if (
              !1 === c &&
              a.type === xt &&
              !1 === e.has("OES_texture_half_float_linear")
            )
              return;
            (a.anisotropy > 1 || i.get(a).__currentAnisotropy) &&
              (t.texParameterf(
                n,
                s.TEXTURE_MAX_ANISOTROPY_EXT,
                Math.min(a.anisotropy, r.getMaxAnisotropy())
              ),
              (i.get(a).__currentAnisotropy = a.anisotropy));
          }
        }
        function O(e, n) {
          let i = !1;
          void 0 === e.__webglInit &&
            ((e.__webglInit = !0), n.addEventListener("dispose", R));
          const r = n.source;
          let a = v.get(r);
          void 0 === a && ((a = {}), v.set(r, a));
          const o = (function (t) {
            const e = [];
            return (
              e.push(t.wrapS),
              e.push(t.wrapT),
              e.push(t.wrapR || 0),
              e.push(t.magFilter),
              e.push(t.minFilter),
              e.push(t.anisotropy),
              e.push(t.internalFormat),
              e.push(t.format),
              e.push(t.type),
              e.push(t.generateMipmaps),
              e.push(t.premultiplyAlpha),
              e.push(t.flipY),
              e.push(t.unpackAlignment),
              e.push(t.encoding),
              e.join()
            );
          })(n);
          if (o !== e.__cacheKey) {
            void 0 === a[o] &&
              ((a[o] = { texture: t.createTexture(), usedTimes: 0 }),
              s.memory.textures++,
              (i = !0)),
              a[o].usedTimes++;
            const r = a[e.__cacheKey];
            void 0 !== r &&
              (a[e.__cacheKey].usedTimes--, 0 === r.usedTimes && L(n)),
              (e.__cacheKey = o),
              (e.__webglTexture = a[o].texture);
          }
          return i;
        }
        function F(e, r, s) {
          let o = t.TEXTURE_2D;
          (r.isDataArrayTexture || r.isCompressedArrayTexture) &&
            (o = t.TEXTURE_2D_ARRAY),
            r.isData3DTexture && (o = t.TEXTURE_3D);
          const l = O(e, r),
            u = r.source;
          n.bindTexture(o, e.__webglTexture, t.TEXTURE0 + s);
          const h = i.get(u);
          if (u.version !== h.__version || !0 === l) {
            n.activeTexture(t.TEXTURE0 + s),
              t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY),
              t.pixelStorei(
                t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                r.premultiplyAlpha
              ),
              t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment),
              t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE);
            const e =
              (function (t) {
                return (
                  !c &&
                  (t.wrapS !== ht ||
                    t.wrapT !== ht ||
                    (t.minFilter !== pt && t.minFilter !== ft))
                );
              })(r) && !1 === E(r.image);
            let i = y(r.image, e, !1, d);
            i = k(r, i);
            const p = E(i) || c,
              f = a.convert(r.format, r.encoding);
            let m,
              g = a.convert(r.type),
              _ = T(r.internalFormat, f, g, r.encoding, r.isVideoTexture);
            N(o, r, p);
            const v = r.mipmaps,
              x = c && !0 !== r.isVideoTexture,
              M = void 0 === h.__version || !0 === l,
              A = w(r, i, p);
            if (r.isDepthTexture)
              (_ = t.DEPTH_COMPONENT),
                c
                  ? (_ =
                      r.type === vt
                        ? t.DEPTH_COMPONENT32F
                        : r.type === _t
                        ? t.DEPTH_COMPONENT24
                        : r.type === Mt
                        ? t.DEPTH24_STENCIL8
                        : t.DEPTH_COMPONENT16)
                  : r.type === vt &&
                    console.error(
                      "WebGLRenderer: Floating point depth texture requires WebGL2."
                    ),
                r.format === Et &&
                  _ === t.DEPTH_COMPONENT &&
                  1012 !== r.type &&
                  r.type !== _t &&
                  (console.warn(
                    "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
                  ),
                  (r.type = _t),
                  (g = a.convert(r.type))),
                r.format === St &&
                  _ === t.DEPTH_COMPONENT &&
                  ((_ = t.DEPTH_STENCIL),
                  r.type !== Mt &&
                    (console.warn(
                      "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
                    ),
                    (r.type = Mt),
                    (g = a.convert(r.type)))),
                M &&
                  (x
                    ? n.texStorage2D(t.TEXTURE_2D, 1, _, i.width, i.height)
                    : n.texImage2D(
                        t.TEXTURE_2D,
                        0,
                        _,
                        i.width,
                        i.height,
                        0,
                        f,
                        g,
                        null
                      ));
            else if (r.isDataTexture)
              if (v.length > 0 && p) {
                x &&
                  M &&
                  n.texStorage2D(t.TEXTURE_2D, A, _, v[0].width, v[0].height);
                for (let e = 0, i = v.length; e < i; e++)
                  (m = v[e]),
                    x
                      ? n.texSubImage2D(
                          t.TEXTURE_2D,
                          e,
                          0,
                          0,
                          m.width,
                          m.height,
                          f,
                          g,
                          m.data
                        )
                      : n.texImage2D(
                          t.TEXTURE_2D,
                          e,
                          _,
                          m.width,
                          m.height,
                          0,
                          f,
                          g,
                          m.data
                        );
                r.generateMipmaps = !1;
              } else
                x
                  ? (M && n.texStorage2D(t.TEXTURE_2D, A, _, i.width, i.height),
                    n.texSubImage2D(
                      t.TEXTURE_2D,
                      0,
                      0,
                      0,
                      i.width,
                      i.height,
                      f,
                      g,
                      i.data
                    ))
                  : n.texImage2D(
                      t.TEXTURE_2D,
                      0,
                      _,
                      i.width,
                      i.height,
                      0,
                      f,
                      g,
                      i.data
                    );
            else if (r.isCompressedTexture)
              if (r.isCompressedArrayTexture) {
                x &&
                  M &&
                  n.texStorage3D(
                    t.TEXTURE_2D_ARRAY,
                    A,
                    _,
                    v[0].width,
                    v[0].height,
                    i.depth
                  );
                for (let e = 0, a = v.length; e < a; e++)
                  (m = v[e]),
                    r.format !== yt
                      ? null !== f
                        ? x
                          ? n.compressedTexSubImage3D(
                              t.TEXTURE_2D_ARRAY,
                              e,
                              0,
                              0,
                              0,
                              m.width,
                              m.height,
                              i.depth,
                              f,
                              m.data,
                              0,
                              0
                            )
                          : n.compressedTexImage3D(
                              t.TEXTURE_2D_ARRAY,
                              e,
                              _,
                              m.width,
                              m.height,
                              i.depth,
                              0,
                              m.data,
                              0,
                              0
                            )
                        : console.warn(
                            "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                          )
                      : x
                      ? n.texSubImage3D(
                          t.TEXTURE_2D_ARRAY,
                          e,
                          0,
                          0,
                          0,
                          m.width,
                          m.height,
                          i.depth,
                          f,
                          g,
                          m.data
                        )
                      : n.texImage3D(
                          t.TEXTURE_2D_ARRAY,
                          e,
                          _,
                          m.width,
                          m.height,
                          i.depth,
                          0,
                          f,
                          g,
                          m.data
                        );
              } else {
                x &&
                  M &&
                  n.texStorage2D(t.TEXTURE_2D, A, _, v[0].width, v[0].height);
                for (let e = 0, i = v.length; e < i; e++)
                  (m = v[e]),
                    r.format !== yt
                      ? null !== f
                        ? x
                          ? n.compressedTexSubImage2D(
                              t.TEXTURE_2D,
                              e,
                              0,
                              0,
                              m.width,
                              m.height,
                              f,
                              m.data
                            )
                          : n.compressedTexImage2D(
                              t.TEXTURE_2D,
                              e,
                              _,
                              m.width,
                              m.height,
                              0,
                              m.data
                            )
                        : console.warn(
                            "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                          )
                      : x
                      ? n.texSubImage2D(
                          t.TEXTURE_2D,
                          e,
                          0,
                          0,
                          m.width,
                          m.height,
                          f,
                          g,
                          m.data
                        )
                      : n.texImage2D(
                          t.TEXTURE_2D,
                          e,
                          _,
                          m.width,
                          m.height,
                          0,
                          f,
                          g,
                          m.data
                        );
              }
            else if (r.isDataArrayTexture)
              x
                ? (M &&
                    n.texStorage3D(
                      t.TEXTURE_2D_ARRAY,
                      A,
                      _,
                      i.width,
                      i.height,
                      i.depth
                    ),
                  n.texSubImage3D(
                    t.TEXTURE_2D_ARRAY,
                    0,
                    0,
                    0,
                    0,
                    i.width,
                    i.height,
                    i.depth,
                    f,
                    g,
                    i.data
                  ))
                : n.texImage3D(
                    t.TEXTURE_2D_ARRAY,
                    0,
                    _,
                    i.width,
                    i.height,
                    i.depth,
                    0,
                    f,
                    g,
                    i.data
                  );
            else if (r.isData3DTexture)
              x
                ? (M &&
                    n.texStorage3D(
                      t.TEXTURE_3D,
                      A,
                      _,
                      i.width,
                      i.height,
                      i.depth
                    ),
                  n.texSubImage3D(
                    t.TEXTURE_3D,
                    0,
                    0,
                    0,
                    0,
                    i.width,
                    i.height,
                    i.depth,
                    f,
                    g,
                    i.data
                  ))
                : n.texImage3D(
                    t.TEXTURE_3D,
                    0,
                    _,
                    i.width,
                    i.height,
                    i.depth,
                    0,
                    f,
                    g,
                    i.data
                  );
            else if (r.isFramebufferTexture) {
              if (M)
                if (x) n.texStorage2D(t.TEXTURE_2D, A, _, i.width, i.height);
                else {
                  let e = i.width,
                    r = i.height;
                  for (let i = 0; i < A; i++)
                    n.texImage2D(t.TEXTURE_2D, i, _, e, r, 0, f, g, null),
                      (e >>= 1),
                      (r >>= 1);
                }
            } else if (v.length > 0 && p) {
              x &&
                M &&
                n.texStorage2D(t.TEXTURE_2D, A, _, v[0].width, v[0].height);
              for (let e = 0, i = v.length; e < i; e++)
                (m = v[e]),
                  x
                    ? n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, f, g, m)
                    : n.texImage2D(t.TEXTURE_2D, e, _, f, g, m);
              r.generateMipmaps = !1;
            } else
              x
                ? (M && n.texStorage2D(t.TEXTURE_2D, A, _, i.width, i.height),
                  n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, f, g, i))
                : n.texImage2D(t.TEXTURE_2D, 0, _, f, g, i);
            S(r, p) && b(o),
              (h.__version = u.version),
              r.onUpdate && r.onUpdate(r);
          }
          e.__version = r.version;
        }
        function z(e, r, s, o, l) {
          const c = a.convert(s.format, s.encoding),
            u = a.convert(s.type),
            h = T(s.internalFormat, c, u, s.encoding);
          i.get(r).__hasExternalTextures ||
            (l === t.TEXTURE_3D || l === t.TEXTURE_2D_ARRAY
              ? n.texImage3D(l, 0, h, r.width, r.height, r.depth, 0, c, u, null)
              : n.texImage2D(l, 0, h, r.width, r.height, 0, c, u, null)),
            n.bindFramebuffer(t.FRAMEBUFFER, e),
            V(r)
              ? f.framebufferTexture2DMultisampleEXT(
                  t.FRAMEBUFFER,
                  o,
                  l,
                  i.get(s).__webglTexture,
                  0,
                  H(r)
                )
              : (l === t.TEXTURE_2D ||
                  (l >= t.TEXTURE_CUBE_MAP_POSITIVE_X &&
                    l <= t.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
                t.framebufferTexture2D(
                  t.FRAMEBUFFER,
                  o,
                  l,
                  i.get(s).__webglTexture,
                  0
                ),
            n.bindFramebuffer(t.FRAMEBUFFER, null);
        }
        function B(e, n, i) {
          if (
            (t.bindRenderbuffer(t.RENDERBUFFER, e),
            n.depthBuffer && !n.stencilBuffer)
          ) {
            let r = t.DEPTH_COMPONENT16;
            if (i || V(n)) {
              const e = n.depthTexture;
              e &&
                e.isDepthTexture &&
                (e.type === vt
                  ? (r = t.DEPTH_COMPONENT32F)
                  : e.type === _t && (r = t.DEPTH_COMPONENT24));
              const i = H(n);
              V(n)
                ? f.renderbufferStorageMultisampleEXT(
                    t.RENDERBUFFER,
                    i,
                    r,
                    n.width,
                    n.height
                  )
                : t.renderbufferStorageMultisample(
                    t.RENDERBUFFER,
                    i,
                    r,
                    n.width,
                    n.height
                  );
            } else t.renderbufferStorage(t.RENDERBUFFER, r, n.width, n.height);
            t.framebufferRenderbuffer(
              t.FRAMEBUFFER,
              t.DEPTH_ATTACHMENT,
              t.RENDERBUFFER,
              e
            );
          } else if (n.depthBuffer && n.stencilBuffer) {
            const r = H(n);
            i && !1 === V(n)
              ? t.renderbufferStorageMultisample(
                  t.RENDERBUFFER,
                  r,
                  t.DEPTH24_STENCIL8,
                  n.width,
                  n.height
                )
              : V(n)
              ? f.renderbufferStorageMultisampleEXT(
                  t.RENDERBUFFER,
                  r,
                  t.DEPTH24_STENCIL8,
                  n.width,
                  n.height
                )
              : t.renderbufferStorage(
                  t.RENDERBUFFER,
                  t.DEPTH_STENCIL,
                  n.width,
                  n.height
                ),
              t.framebufferRenderbuffer(
                t.FRAMEBUFFER,
                t.DEPTH_STENCIL_ATTACHMENT,
                t.RENDERBUFFER,
                e
              );
          } else {
            const e =
              !0 === n.isWebGLMultipleRenderTargets ? n.texture : [n.texture];
            for (let r = 0; r < e.length; r++) {
              const s = e[r],
                o = a.convert(s.format, s.encoding),
                l = a.convert(s.type),
                c = T(s.internalFormat, o, l, s.encoding),
                u = H(n);
              i && !1 === V(n)
                ? t.renderbufferStorageMultisample(
                    t.RENDERBUFFER,
                    u,
                    c,
                    n.width,
                    n.height
                  )
                : V(n)
                ? f.renderbufferStorageMultisampleEXT(
                    t.RENDERBUFFER,
                    u,
                    c,
                    n.width,
                    n.height
                  )
                : t.renderbufferStorage(t.RENDERBUFFER, c, n.width, n.height);
            }
          }
          t.bindRenderbuffer(t.RENDERBUFFER, null);
        }
        function G(e) {
          const r = i.get(e),
            a = !0 === e.isWebGLCubeRenderTarget;
          if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
            if (a)
              throw new Error(
                "target.depthTexture not supported in Cube render targets"
              );
            !(function (e, r) {
              if (r && r.isWebGLCubeRenderTarget)
                throw new Error(
                  "Depth Texture with cube render targets is not supported"
                );
              if (
                (n.bindFramebuffer(t.FRAMEBUFFER, e),
                !r.depthTexture || !r.depthTexture.isDepthTexture)
              )
                throw new Error(
                  "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
                );
              (i.get(r.depthTexture).__webglTexture &&
                r.depthTexture.image.width === r.width &&
                r.depthTexture.image.height === r.height) ||
                ((r.depthTexture.image.width = r.width),
                (r.depthTexture.image.height = r.height),
                (r.depthTexture.needsUpdate = !0)),
                P(r.depthTexture, 0);
              const a = i.get(r.depthTexture).__webglTexture,
                s = H(r);
              if (r.depthTexture.format === Et)
                V(r)
                  ? f.framebufferTexture2DMultisampleEXT(
                      t.FRAMEBUFFER,
                      t.DEPTH_ATTACHMENT,
                      t.TEXTURE_2D,
                      a,
                      0,
                      s
                    )
                  : t.framebufferTexture2D(
                      t.FRAMEBUFFER,
                      t.DEPTH_ATTACHMENT,
                      t.TEXTURE_2D,
                      a,
                      0
                    );
              else {
                if (r.depthTexture.format !== St)
                  throw new Error("Unknown depthTexture format");
                V(r)
                  ? f.framebufferTexture2DMultisampleEXT(
                      t.FRAMEBUFFER,
                      t.DEPTH_STENCIL_ATTACHMENT,
                      t.TEXTURE_2D,
                      a,
                      0,
                      s
                    )
                  : t.framebufferTexture2D(
                      t.FRAMEBUFFER,
                      t.DEPTH_STENCIL_ATTACHMENT,
                      t.TEXTURE_2D,
                      a,
                      0
                    );
              }
            })(r.__webglFramebuffer, e);
          } else if (a) {
            r.__webglDepthbuffer = [];
            for (let i = 0; i < 6; i++)
              n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[i]),
                (r.__webglDepthbuffer[i] = t.createRenderbuffer()),
                B(r.__webglDepthbuffer[i], e, !1);
          } else
            n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer),
              (r.__webglDepthbuffer = t.createRenderbuffer()),
              B(r.__webglDepthbuffer, e, !1);
          n.bindFramebuffer(t.FRAMEBUFFER, null);
        }
        function H(t) {
          return Math.min(p, t.samples);
        }
        function V(t) {
          const n = i.get(t);
          return (
            c &&
            t.samples > 0 &&
            !0 === e.has("WEBGL_multisampled_render_to_texture") &&
            !1 !== n.__useRenderToTexture
          );
        }
        function k(t, n) {
          const i = t.encoding,
            r = t.format,
            a = t.type;
          return (
            !0 === t.isCompressedTexture ||
              !0 === t.isVideoTexture ||
              t.format === Ut ||
              (i !== Rt &&
                (i === Ct
                  ? !1 === c
                    ? !0 === e.has("EXT_sRGB") && r === yt
                      ? ((t.format = Ut),
                        (t.minFilter = ft),
                        (t.generateMipmaps = !1))
                      : (n = Un.sRGBToLinear(n))
                    : (r === yt && a === gt) ||
                      console.warn(
                        "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                      )
                  : console.error(
                      "THREE.WebGLTextures: Unsupported texture encoding:",
                      i
                    ))),
            n
          );
        }
        (this.allocateTextureUnit = function () {
          const t = D;
          return (
            t >= u &&
              console.warn(
                "THREE.WebGLTextures: Trying to use " +
                  t +
                  " texture units while this GPU supports only " +
                  u
              ),
            (D += 1),
            t
          );
        }),
          (this.resetTextureUnits = function () {
            D = 0;
          }),
          (this.setTexture2D = P),
          (this.setTexture2DArray = function (e, r) {
            const a = i.get(e);
            e.version > 0 && a.__version !== e.version
              ? F(a, e, r)
              : n.bindTexture(
                  t.TEXTURE_2D_ARRAY,
                  a.__webglTexture,
                  t.TEXTURE0 + r
                );
          }),
          (this.setTexture3D = function (e, r) {
            const a = i.get(e);
            e.version > 0 && a.__version !== e.version
              ? F(a, e, r)
              : n.bindTexture(t.TEXTURE_3D, a.__webglTexture, t.TEXTURE0 + r);
          }),
          (this.setTextureCube = function (e, r) {
            const s = i.get(e);
            e.version > 0 && s.__version !== e.version
              ? (function (e, r, s) {
                  if (6 !== r.image.length) return;
                  const o = O(e, r),
                    l = r.source;
                  n.bindTexture(
                    t.TEXTURE_CUBE_MAP,
                    e.__webglTexture,
                    t.TEXTURE0 + s
                  );
                  const u = i.get(l);
                  if (l.version !== u.__version || !0 === o) {
                    n.activeTexture(t.TEXTURE0 + s),
                      t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY),
                      t.pixelStorei(
                        t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                        r.premultiplyAlpha
                      ),
                      t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment),
                      t.pixelStorei(
                        t.UNPACK_COLORSPACE_CONVERSION_WEBGL,
                        t.NONE
                      );
                    const e =
                        r.isCompressedTexture || r.image[0].isCompressedTexture,
                      i = r.image[0] && r.image[0].isDataTexture,
                      d = [];
                    for (let t = 0; t < 6; t++)
                      (d[t] =
                        e || i
                          ? i
                            ? r.image[t].image
                            : r.image[t]
                          : y(r.image[t], !1, !0, h)),
                        (d[t] = k(r, d[t]));
                    const p = d[0],
                      f = E(p) || c,
                      m = a.convert(r.format, r.encoding),
                      g = a.convert(r.type),
                      _ = T(r.internalFormat, m, g, r.encoding),
                      v = c && !0 !== r.isVideoTexture,
                      x = void 0 === u.__version || !0 === o;
                    let M,
                      A = w(r, p, f);
                    if ((N(t.TEXTURE_CUBE_MAP, r, f), e)) {
                      v &&
                        x &&
                        n.texStorage2D(
                          t.TEXTURE_CUBE_MAP,
                          A,
                          _,
                          p.width,
                          p.height
                        );
                      for (let e = 0; e < 6; e++) {
                        M = d[e].mipmaps;
                        for (let i = 0; i < M.length; i++) {
                          const a = M[i];
                          r.format !== yt
                            ? null !== m
                              ? v
                                ? n.compressedTexSubImage2D(
                                    t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                    i,
                                    0,
                                    0,
                                    a.width,
                                    a.height,
                                    m,
                                    a.data
                                  )
                                : n.compressedTexImage2D(
                                    t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                    i,
                                    _,
                                    a.width,
                                    a.height,
                                    0,
                                    a.data
                                  )
                              : console.warn(
                                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                                )
                            : v
                            ? n.texSubImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                i,
                                0,
                                0,
                                a.width,
                                a.height,
                                m,
                                g,
                                a.data
                              )
                            : n.texImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                i,
                                _,
                                a.width,
                                a.height,
                                0,
                                m,
                                g,
                                a.data
                              );
                        }
                      }
                    } else {
                      (M = r.mipmaps),
                        v &&
                          x &&
                          (M.length > 0 && A++,
                          n.texStorage2D(
                            t.TEXTURE_CUBE_MAP,
                            A,
                            _,
                            d[0].width,
                            d[0].height
                          ));
                      for (let e = 0; e < 6; e++)
                        if (i) {
                          v
                            ? n.texSubImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                0,
                                0,
                                0,
                                d[e].width,
                                d[e].height,
                                m,
                                g,
                                d[e].data
                              )
                            : n.texImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                0,
                                _,
                                d[e].width,
                                d[e].height,
                                0,
                                m,
                                g,
                                d[e].data
                              );
                          for (let i = 0; i < M.length; i++) {
                            const r = M[i].image[e].image;
                            v
                              ? n.texSubImage2D(
                                  t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                  i + 1,
                                  0,
                                  0,
                                  r.width,
                                  r.height,
                                  m,
                                  g,
                                  r.data
                                )
                              : n.texImage2D(
                                  t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                  i + 1,
                                  _,
                                  r.width,
                                  r.height,
                                  0,
                                  m,
                                  g,
                                  r.data
                                );
                          }
                        } else {
                          v
                            ? n.texSubImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                0,
                                0,
                                0,
                                m,
                                g,
                                d[e]
                              )
                            : n.texImage2D(
                                t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                0,
                                _,
                                m,
                                g,
                                d[e]
                              );
                          for (let i = 0; i < M.length; i++) {
                            const r = M[i];
                            v
                              ? n.texSubImage2D(
                                  t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                  i + 1,
                                  0,
                                  0,
                                  m,
                                  g,
                                  r.image[e]
                                )
                              : n.texImage2D(
                                  t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                                  i + 1,
                                  _,
                                  m,
                                  g,
                                  r.image[e]
                                );
                          }
                        }
                    }
                    S(r, f) && b(t.TEXTURE_CUBE_MAP),
                      (u.__version = l.version),
                      r.onUpdate && r.onUpdate(r);
                  }
                  e.__version = r.version;
                })(s, e, r)
              : n.bindTexture(
                  t.TEXTURE_CUBE_MAP,
                  s.__webglTexture,
                  t.TEXTURE0 + r
                );
          }),
          (this.rebindTextures = function (e, n, r) {
            const a = i.get(e);
            void 0 !== n &&
              z(
                a.__webglFramebuffer,
                e,
                e.texture,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_2D
              ),
              void 0 !== r && G(e);
          }),
          (this.setupRenderTarget = function (e) {
            const o = e.texture,
              l = i.get(e),
              u = i.get(o);
            e.addEventListener("dispose", C),
              !0 !== e.isWebGLMultipleRenderTargets &&
                (void 0 === u.__webglTexture &&
                  (u.__webglTexture = t.createTexture()),
                (u.__version = o.version),
                s.memory.textures++);
            const h = !0 === e.isWebGLCubeRenderTarget,
              d = !0 === e.isWebGLMultipleRenderTargets,
              p = E(e) || c;
            if (h) {
              l.__webglFramebuffer = [];
              for (let e = 0; e < 6; e++)
                l.__webglFramebuffer[e] = t.createFramebuffer();
            } else {
              if (((l.__webglFramebuffer = t.createFramebuffer()), d))
                if (r.drawBuffers) {
                  const n = e.texture;
                  for (let e = 0, r = n.length; e < r; e++) {
                    const r = i.get(n[e]);
                    void 0 === r.__webglTexture &&
                      ((r.__webglTexture = t.createTexture()),
                      s.memory.textures++);
                  }
                } else
                  console.warn(
                    "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
                  );
              if (c && e.samples > 0 && !1 === V(e)) {
                const i = d ? o : [o];
                (l.__webglMultisampledFramebuffer = t.createFramebuffer()),
                  (l.__webglColorRenderbuffer = []),
                  n.bindFramebuffer(
                    t.FRAMEBUFFER,
                    l.__webglMultisampledFramebuffer
                  );
                for (let n = 0; n < i.length; n++) {
                  const r = i[n];
                  (l.__webglColorRenderbuffer[n] = t.createRenderbuffer()),
                    t.bindRenderbuffer(
                      t.RENDERBUFFER,
                      l.__webglColorRenderbuffer[n]
                    );
                  const s = a.convert(r.format, r.encoding),
                    o = a.convert(r.type),
                    c = T(
                      r.internalFormat,
                      s,
                      o,
                      r.encoding,
                      !0 === e.isXRRenderTarget
                    ),
                    u = H(e);
                  t.renderbufferStorageMultisample(
                    t.RENDERBUFFER,
                    u,
                    c,
                    e.width,
                    e.height
                  ),
                    t.framebufferRenderbuffer(
                      t.FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0 + n,
                      t.RENDERBUFFER,
                      l.__webglColorRenderbuffer[n]
                    );
                }
                t.bindRenderbuffer(t.RENDERBUFFER, null),
                  e.depthBuffer &&
                    ((l.__webglDepthRenderbuffer = t.createRenderbuffer()),
                    B(l.__webglDepthRenderbuffer, e, !0)),
                  n.bindFramebuffer(t.FRAMEBUFFER, null);
              }
            }
            if (h) {
              n.bindTexture(t.TEXTURE_CUBE_MAP, u.__webglTexture),
                N(t.TEXTURE_CUBE_MAP, o, p);
              for (let n = 0; n < 6; n++)
                z(
                  l.__webglFramebuffer[n],
                  e,
                  o,
                  t.COLOR_ATTACHMENT0,
                  t.TEXTURE_CUBE_MAP_POSITIVE_X + n
                );
              S(o, p) && b(t.TEXTURE_CUBE_MAP), n.unbindTexture();
            } else if (d) {
              const r = e.texture;
              for (let a = 0, s = r.length; a < s; a++) {
                const s = r[a],
                  o = i.get(s);
                n.bindTexture(t.TEXTURE_2D, o.__webglTexture),
                  N(t.TEXTURE_2D, s, p),
                  z(
                    l.__webglFramebuffer,
                    e,
                    s,
                    t.COLOR_ATTACHMENT0 + a,
                    t.TEXTURE_2D
                  ),
                  S(s, p) && b(t.TEXTURE_2D);
              }
              n.unbindTexture();
            } else {
              let i = t.TEXTURE_2D;
              (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) &&
                (c
                  ? (i = e.isWebGL3DRenderTarget
                      ? t.TEXTURE_3D
                      : t.TEXTURE_2D_ARRAY)
                  : console.error(
                      "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
                    )),
                n.bindTexture(i, u.__webglTexture),
                N(i, o, p),
                z(l.__webglFramebuffer, e, o, t.COLOR_ATTACHMENT0, i),
                S(o, p) && b(i),
                n.unbindTexture();
            }
            e.depthBuffer && G(e);
          }),
          (this.updateRenderTargetMipmap = function (e) {
            const r = E(e) || c,
              a =
                !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
            for (let s = 0, o = a.length; s < o; s++) {
              const o = a[s];
              if (S(o, r)) {
                const r = e.isWebGLCubeRenderTarget
                    ? t.TEXTURE_CUBE_MAP
                    : t.TEXTURE_2D,
                  a = i.get(o).__webglTexture;
                n.bindTexture(r, a), b(r), n.unbindTexture();
              }
            }
          }),
          (this.updateMultisampleRenderTarget = function (e) {
            if (c && e.samples > 0 && !1 === V(e)) {
              const r = e.isWebGLMultipleRenderTargets
                  ? e.texture
                  : [e.texture],
                a = e.width,
                s = e.height;
              let o = t.COLOR_BUFFER_BIT;
              const l = [],
                c = e.stencilBuffer
                  ? t.DEPTH_STENCIL_ATTACHMENT
                  : t.DEPTH_ATTACHMENT,
                u = i.get(e),
                h = !0 === e.isWebGLMultipleRenderTargets;
              if (h)
                for (let e = 0; e < r.length; e++)
                  n.bindFramebuffer(
                    t.FRAMEBUFFER,
                    u.__webglMultisampledFramebuffer
                  ),
                    t.framebufferRenderbuffer(
                      t.FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0 + e,
                      t.RENDERBUFFER,
                      null
                    ),
                    n.bindFramebuffer(t.FRAMEBUFFER, u.__webglFramebuffer),
                    t.framebufferTexture2D(
                      t.DRAW_FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0 + e,
                      t.TEXTURE_2D,
                      null,
                      0
                    );
              n.bindFramebuffer(
                t.READ_FRAMEBUFFER,
                u.__webglMultisampledFramebuffer
              ),
                n.bindFramebuffer(t.DRAW_FRAMEBUFFER, u.__webglFramebuffer);
              for (let n = 0; n < r.length; n++) {
                l.push(t.COLOR_ATTACHMENT0 + n), e.depthBuffer && l.push(c);
                const d =
                  void 0 !== u.__ignoreDepthValues && u.__ignoreDepthValues;
                if (
                  (!1 === d &&
                    (e.depthBuffer && (o |= t.DEPTH_BUFFER_BIT),
                    e.stencilBuffer && (o |= t.STENCIL_BUFFER_BIT)),
                  h &&
                    t.framebufferRenderbuffer(
                      t.READ_FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0,
                      t.RENDERBUFFER,
                      u.__webglColorRenderbuffer[n]
                    ),
                  !0 === d &&
                    (t.invalidateFramebuffer(t.READ_FRAMEBUFFER, [c]),
                    t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [c])),
                  h)
                ) {
                  const e = i.get(r[n]).__webglTexture;
                  t.framebufferTexture2D(
                    t.DRAW_FRAMEBUFFER,
                    t.COLOR_ATTACHMENT0,
                    t.TEXTURE_2D,
                    e,
                    0
                  );
                }
                t.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, t.NEAREST),
                  m && t.invalidateFramebuffer(t.READ_FRAMEBUFFER, l);
              }
              if (
                (n.bindFramebuffer(t.READ_FRAMEBUFFER, null),
                n.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
                h)
              )
                for (let e = 0; e < r.length; e++) {
                  n.bindFramebuffer(
                    t.FRAMEBUFFER,
                    u.__webglMultisampledFramebuffer
                  ),
                    t.framebufferRenderbuffer(
                      t.FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0 + e,
                      t.RENDERBUFFER,
                      u.__webglColorRenderbuffer[e]
                    );
                  const a = i.get(r[e]).__webglTexture;
                  n.bindFramebuffer(t.FRAMEBUFFER, u.__webglFramebuffer),
                    t.framebufferTexture2D(
                      t.DRAW_FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0 + e,
                      t.TEXTURE_2D,
                      a,
                      0
                    );
                }
              n.bindFramebuffer(
                t.DRAW_FRAMEBUFFER,
                u.__webglMultisampledFramebuffer
              );
            }
          }),
          (this.setupDepthRenderbuffer = G),
          (this.setupFrameBufferTexture = z),
          (this.useMultisampledRTT = V);
      }
      function ea(t, e, n) {
        const i = n.isWebGL2;
        return {
          convert: function (n, r = null) {
            let a;
            if (n === gt) return t.UNSIGNED_BYTE;
            if (1017 === n) return t.UNSIGNED_SHORT_4_4_4_4;
            if (1018 === n) return t.UNSIGNED_SHORT_5_5_5_1;
            if (1010 === n) return t.BYTE;
            if (1011 === n) return t.SHORT;
            if (1012 === n) return t.UNSIGNED_SHORT;
            if (1013 === n) return t.INT;
            if (n === _t) return t.UNSIGNED_INT;
            if (n === vt) return t.FLOAT;
            if (n === xt)
              return i
                ? t.HALF_FLOAT
                : ((a = e.get("OES_texture_half_float")),
                  null !== a ? a.HALF_FLOAT_OES : null);
            if (1021 === n) return t.ALPHA;
            if (n === yt) return t.RGBA;
            if (1024 === n) return t.LUMINANCE;
            if (1025 === n) return t.LUMINANCE_ALPHA;
            if (n === Et) return t.DEPTH_COMPONENT;
            if (n === St) return t.DEPTH_STENCIL;
            if (1028 === n) return t.RED;
            if (1022 === n)
              return (
                console.warn(
                  "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
                ),
                t.RGBA
              );
            if (n === Ut)
              return (
                (a = e.get("EXT_sRGB")), null !== a ? a.SRGB_ALPHA_EXT : null
              );
            if (1029 === n) return t.RED_INTEGER;
            if (1030 === n) return t.RG;
            if (1031 === n) return t.RG_INTEGER;
            if (1033 === n) return t.RGBA_INTEGER;
            if (n === bt || n === Tt || n === wt || n === At)
              if (r === Ct) {
                if (
                  ((a = e.get("WEBGL_compressed_texture_s3tc_srgb")),
                  null === a)
                )
                  return null;
                if (n === bt) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                if (n === Tt) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                if (n === wt) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                if (n === At) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
              } else {
                if (((a = e.get("WEBGL_compressed_texture_s3tc")), null === a))
                  return null;
                if (n === bt) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === Tt) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === wt) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === At) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
              }
            if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
              if (((a = e.get("WEBGL_compressed_texture_pvrtc")), null === a))
                return null;
              if (35840 === n) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
              if (35841 === n) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
              if (35842 === n) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
              if (35843 === n) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
            }
            if (36196 === n)
              return (
                (a = e.get("WEBGL_compressed_texture_etc1")),
                null !== a ? a.COMPRESSED_RGB_ETC1_WEBGL : null
              );
            if (37492 === n || 37496 === n) {
              if (((a = e.get("WEBGL_compressed_texture_etc")), null === a))
                return null;
              if (37492 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ETC2
                  : a.COMPRESSED_RGB8_ETC2;
              if (37496 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
                  : a.COMPRESSED_RGBA8_ETC2_EAC;
            }
            if (
              37808 === n ||
              37809 === n ||
              37810 === n ||
              37811 === n ||
              37812 === n ||
              37813 === n ||
              37814 === n ||
              37815 === n ||
              37816 === n ||
              37817 === n ||
              37818 === n ||
              37819 === n ||
              37820 === n ||
              37821 === n
            ) {
              if (((a = e.get("WEBGL_compressed_texture_astc")), null === a))
                return null;
              if (37808 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
                  : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
              if (37809 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
                  : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
              if (37810 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
                  : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
              if (37811 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
                  : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
              if (37812 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
                  : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
              if (37813 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
                  : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
              if (37814 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
                  : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
              if (37815 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
                  : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
              if (37816 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
                  : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
              if (37817 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
                  : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
              if (37818 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
                  : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
              if (37819 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
                  : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
              if (37820 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
                  : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
              if (37821 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
                  : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
            }
            if (36492 === n) {
              if (((a = e.get("EXT_texture_compression_bptc")), null === a))
                return null;
              if (36492 === n)
                return r === Ct
                  ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
                  : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
            }
            return n === Mt
              ? i
                ? t.UNSIGNED_INT_24_8
                : ((a = e.get("WEBGL_depth_texture")),
                  null !== a ? a.UNSIGNED_INT_24_8_WEBGL : null)
              : void 0 !== t[n]
              ? t[n]
              : null;
          },
        };
      }
      class na extends k {
        constructor(t = []) {
          super(), (this.isArrayCamera = !0), (this.cameras = t);
        }
      }
      class ia extends H {
        constructor() {
          super(), (this.isGroup = !0), (this.type = "Group");
        }
      }
      const ra = { type: "move" };
      class aa {
        constructor() {
          (this._targetRay = null), (this._grip = null), (this._hand = null);
        }
        getHandSpace() {
          return (
            null === this._hand &&
              ((this._hand = new ia()),
              (this._hand.matrixAutoUpdate = !1),
              (this._hand.visible = !1),
              (this._hand.joints = {}),
              (this._hand.inputState = { pinching: !1 })),
            this._hand
          );
        }
        getTargetRaySpace() {
          return (
            null === this._targetRay &&
              ((this._targetRay = new ia()),
              (this._targetRay.matrixAutoUpdate = !1),
              (this._targetRay.visible = !1),
              (this._targetRay.hasLinearVelocity = !1),
              (this._targetRay.linearVelocity = new d()),
              (this._targetRay.hasAngularVelocity = !1),
              (this._targetRay.angularVelocity = new d())),
            this._targetRay
          );
        }
        getGripSpace() {
          return (
            null === this._grip &&
              ((this._grip = new ia()),
              (this._grip.matrixAutoUpdate = !1),
              (this._grip.visible = !1),
              (this._grip.hasLinearVelocity = !1),
              (this._grip.linearVelocity = new d()),
              (this._grip.hasAngularVelocity = !1),
              (this._grip.angularVelocity = new d())),
            this._grip
          );
        }
        dispatchEvent(t) {
          return (
            null !== this._targetRay && this._targetRay.dispatchEvent(t),
            null !== this._grip && this._grip.dispatchEvent(t),
            null !== this._hand && this._hand.dispatchEvent(t),
            this
          );
        }
        disconnect(t) {
          return (
            this.dispatchEvent({ type: "disconnected", data: t }),
            null !== this._targetRay && (this._targetRay.visible = !1),
            null !== this._grip && (this._grip.visible = !1),
            null !== this._hand && (this._hand.visible = !1),
            this
          );
        }
        update(t, e, n) {
          let i = null,
            r = null,
            a = null;
          const s = this._targetRay,
            o = this._grip,
            l = this._hand;
          if (t && "visible-blurred" !== e.session.visibilityState) {
            if (l && t.hand) {
              a = !0;
              for (const i of t.hand.values()) {
                const t = e.getJointPose(i, n);
                if (void 0 === l.joints[i.jointName]) {
                  const t = new ia();
                  (t.matrixAutoUpdate = !1),
                    (t.visible = !1),
                    (l.joints[i.jointName] = t),
                    l.add(t);
                }
                const r = l.joints[i.jointName];
                null !== t &&
                  (r.matrix.fromArray(t.transform.matrix),
                  r.matrix.decompose(r.position, r.rotation, r.scale),
                  (r.jointRadius = t.radius)),
                  (r.visible = null !== t);
              }
              const i = l.joints["index-finger-tip"],
                r = l.joints["thumb-tip"],
                s = i.position.distanceTo(r.position),
                o = 0.02,
                c = 0.005;
              l.inputState.pinching && s > o + c
                ? ((l.inputState.pinching = !1),
                  this.dispatchEvent({
                    type: "pinchend",
                    handedness: t.handedness,
                    target: this,
                  }))
                : !l.inputState.pinching &&
                  s <= o - c &&
                  ((l.inputState.pinching = !0),
                  this.dispatchEvent({
                    type: "pinchstart",
                    handedness: t.handedness,
                    target: this,
                  }));
            } else
              null !== o &&
                t.gripSpace &&
                ((r = e.getPose(t.gripSpace, n)),
                null !== r &&
                  (o.matrix.fromArray(r.transform.matrix),
                  o.matrix.decompose(o.position, o.rotation, o.scale),
                  r.linearVelocity
                    ? ((o.hasLinearVelocity = !0),
                      o.linearVelocity.copy(r.linearVelocity))
                    : (o.hasLinearVelocity = !1),
                  r.angularVelocity
                    ? ((o.hasAngularVelocity = !0),
                      o.angularVelocity.copy(r.angularVelocity))
                    : (o.hasAngularVelocity = !1)));
            null !== s &&
              ((i = e.getPose(t.targetRaySpace, n)),
              null === i && null !== r && (i = r),
              null !== i &&
                (s.matrix.fromArray(i.transform.matrix),
                s.matrix.decompose(s.position, s.rotation, s.scale),
                i.linearVelocity
                  ? ((s.hasLinearVelocity = !0),
                    s.linearVelocity.copy(i.linearVelocity))
                  : (s.hasLinearVelocity = !1),
                i.angularVelocity
                  ? ((s.hasAngularVelocity = !0),
                    s.angularVelocity.copy(i.angularVelocity))
                  : (s.hasAngularVelocity = !1),
                this.dispatchEvent(ra)));
          }
          return (
            null !== s && (s.visible = null !== i),
            null !== o && (o.visible = null !== r),
            null !== l && (l.visible = null !== a),
            this
          );
        }
      }
      class sa extends zn {
        constructor(t, e, n, i, r, a, s, o, l, c) {
          if ((c = void 0 !== c ? c : Et) !== Et && c !== St)
            throw new Error(
              "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
            );
          void 0 === n && c === Et && (n = _t),
            void 0 === n && c === St && (n = Mt),
            super(null, i, r, a, s, o, c, n, l),
            (this.isDepthTexture = !0),
            (this.image = { width: t, height: e }),
            (this.magFilter = void 0 !== s ? s : pt),
            (this.minFilter = void 0 !== o ? o : pt),
            (this.flipY = !1),
            (this.generateMipmaps = !1);
        }
      }
      class oa extends E {
        constructor(t, e) {
          super();
          const n = this;
          let i = null,
            r = 1,
            a = null,
            s = "local-floor",
            o = null,
            l = null,
            c = null,
            u = null,
            h = null,
            p = null;
          const f = e.getContextAttributes();
          let m = null,
            g = null;
          const _ = [],
            v = [],
            x = new k();
          x.layers.enable(1), (x.viewport = new He());
          const M = new k();
          M.layers.enable(2), (M.viewport = new He());
          const y = [x, M],
            E = new na();
          E.layers.enable(1), E.layers.enable(2);
          let S = null,
            b = null;
          function T(t) {
            const e = v.indexOf(t.inputSource);
            if (-1 === e) return;
            const n = _[e];
            void 0 !== n &&
              n.dispatchEvent({ type: t.type, data: t.inputSource });
          }
          function w() {
            i.removeEventListener("select", T),
              i.removeEventListener("selectstart", T),
              i.removeEventListener("selectend", T),
              i.removeEventListener("squeeze", T),
              i.removeEventListener("squeezestart", T),
              i.removeEventListener("squeezeend", T),
              i.removeEventListener("end", w),
              i.removeEventListener("inputsourceschange", A);
            for (let t = 0; t < _.length; t++) {
              const e = v[t];
              null !== e && ((v[t] = null), _[t].disconnect(e));
            }
            (S = null),
              (b = null),
              t.setRenderTarget(m),
              (h = null),
              (u = null),
              (c = null),
              (i = null),
              (g = null),
              P.stop(),
              (n.isPresenting = !1),
              n.dispatchEvent({ type: "sessionend" });
          }
          function A(t) {
            for (let e = 0; e < t.removed.length; e++) {
              const n = t.removed[e],
                i = v.indexOf(n);
              i >= 0 &&
                ((v[i] = null),
                _[i].dispatchEvent({ type: "disconnected", data: n }));
            }
            for (let e = 0; e < t.added.length; e++) {
              const n = t.added[e];
              let i = v.indexOf(n);
              if (-1 === i) {
                for (let t = 0; t < _.length; t++) {
                  if (t >= v.length) {
                    v.push(n), (i = t);
                    break;
                  }
                  if (null === v[t]) {
                    (v[t] = n), (i = t);
                    break;
                  }
                }
                if (-1 === i) break;
              }
              const r = _[i];
              r && r.dispatchEvent({ type: "connected", data: n });
            }
          }
          (this.cameraAutoUpdate = !0),
            (this.enabled = !1),
            (this.isPresenting = !1),
            (this.getController = function (t) {
              let e = _[t];
              return (
                void 0 === e && ((e = new aa()), (_[t] = e)),
                e.getTargetRaySpace()
              );
            }),
            (this.getControllerGrip = function (t) {
              let e = _[t];
              return (
                void 0 === e && ((e = new aa()), (_[t] = e)), e.getGripSpace()
              );
            }),
            (this.getHand = function (t) {
              let e = _[t];
              return (
                void 0 === e && ((e = new aa()), (_[t] = e)), e.getHandSpace()
              );
            }),
            (this.setFramebufferScaleFactor = function (t) {
              (r = t),
                !0 === n.isPresenting &&
                  console.warn(
                    "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
                  );
            }),
            (this.setReferenceSpaceType = function (t) {
              (s = t),
                !0 === n.isPresenting &&
                  console.warn(
                    "THREE.WebXRManager: Cannot change reference space type while presenting."
                  );
            }),
            (this.getReferenceSpace = function () {
              return o || a;
            }),
            (this.setReferenceSpace = function (t) {
              o = t;
            }),
            (this.getBaseLayer = function () {
              return null !== u ? u : h;
            }),
            (this.getBinding = function () {
              return c;
            }),
            (this.getFrame = function () {
              return p;
            }),
            (this.getSession = function () {
              return i;
            }),
            (this.setSession = async function (l) {
              if (((i = l), null !== i)) {
                if (
                  ((m = t.getRenderTarget()),
                  i.addEventListener("select", T),
                  i.addEventListener("selectstart", T),
                  i.addEventListener("selectend", T),
                  i.addEventListener("squeeze", T),
                  i.addEventListener("squeezestart", T),
                  i.addEventListener("squeezeend", T),
                  i.addEventListener("end", w),
                  i.addEventListener("inputsourceschange", A),
                  !0 !== f.xrCompatible && (await e.makeXRCompatible()),
                  void 0 === i.renderState.layers ||
                    !1 === t.capabilities.isWebGL2)
                ) {
                  const n = {
                    antialias: void 0 !== i.renderState.layers || f.antialias,
                    alpha: f.alpha,
                    depth: f.depth,
                    stencil: f.stencil,
                    framebufferScaleFactor: r,
                  };
                  (h = new XRWebGLLayer(i, e, n)),
                    i.updateRenderState({ baseLayer: h }),
                    (g = new Bn(h.framebufferWidth, h.framebufferHeight, {
                      format: yt,
                      type: gt,
                      encoding: t.outputEncoding,
                      stencilBuffer: f.stencil,
                    }));
                } else {
                  let n = null,
                    a = null,
                    s = null;
                  f.depth &&
                    ((s = f.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
                    (n = f.stencil ? St : Et),
                    (a = f.stencil ? Mt : _t));
                  const o = {
                    colorFormat: e.RGBA8,
                    depthFormat: s,
                    scaleFactor: r,
                  };
                  (c = new XRWebGLBinding(i, e)),
                    (u = c.createProjectionLayer(o)),
                    i.updateRenderState({ layers: [u] }),
                    (g = new Bn(u.textureWidth, u.textureHeight, {
                      format: yt,
                      type: gt,
                      depthTexture: new sa(
                        u.textureWidth,
                        u.textureHeight,
                        a,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        n
                      ),
                      stencilBuffer: f.stencil,
                      encoding: t.outputEncoding,
                      samples: f.antialias ? 4 : 0,
                    })),
                    (t.properties.get(g).__ignoreDepthValues =
                      u.ignoreDepthValues);
                }
                (g.isXRRenderTarget = !0),
                  this.setFoveation(1),
                  (o = null),
                  (a = await i.requestReferenceSpace(s)),
                  P.setContext(i),
                  P.start(),
                  (n.isPresenting = !0),
                  n.dispatchEvent({ type: "sessionstart" });
              }
            });
          const R = new d(),
            C = new d();
          function L(t, e) {
            null === e
              ? t.matrixWorld.copy(t.matrix)
              : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
              t.matrixWorldInverse.copy(t.matrixWorld).invert();
          }
          (this.updateCamera = function (t) {
            if (null === i) return;
            (E.near = M.near = x.near = t.near),
              (E.far = M.far = x.far = t.far),
              (S === E.near && b === E.far) ||
                (i.updateRenderState({ depthNear: E.near, depthFar: E.far }),
                (S = E.near),
                (b = E.far));
            const e = t.parent,
              n = E.cameras;
            L(E, e);
            for (let t = 0; t < n.length; t++) L(n[t], e);
            E.matrixWorld.decompose(E.position, E.quaternion, E.scale),
              t.matrix.copy(E.matrix),
              t.matrix.decompose(t.position, t.quaternion, t.scale);
            const r = t.children;
            for (let t = 0, e = r.length; t < e; t++)
              r[t].updateMatrixWorld(!0);
            2 === n.length
              ? (function (t, e, n) {
                  R.setFromMatrixPosition(e.matrixWorld),
                    C.setFromMatrixPosition(n.matrixWorld);
                  const i = R.distanceTo(C),
                    r = e.projectionMatrix.elements,
                    a = n.projectionMatrix.elements,
                    s = r[14] / (r[10] - 1),
                    o = r[14] / (r[10] + 1),
                    l = (r[9] + 1) / r[5],
                    c = (r[9] - 1) / r[5],
                    u = (r[8] - 1) / r[0],
                    h = (a[8] + 1) / a[0],
                    d = s * u,
                    p = s * h,
                    f = i / (-u + h),
                    m = f * -u;
                  e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                    t.translateX(m),
                    t.translateZ(f),
                    t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                    t.matrixWorldInverse.copy(t.matrixWorld).invert();
                  const g = s + f,
                    _ = o + f,
                    v = d - m,
                    x = p + (i - m),
                    M = ((l * o) / _) * g,
                    y = ((c * o) / _) * g;
                  t.projectionMatrix.makePerspective(v, x, M, y, g, _);
                })(E, x, M)
              : E.projectionMatrix.copy(x.projectionMatrix);
          }),
            (this.getCamera = function () {
              return E;
            }),
            (this.getFoveation = function () {
              return null !== u
                ? u.fixedFoveation
                : null !== h
                ? h.fixedFoveation
                : void 0;
            }),
            (this.setFoveation = function (t) {
              null !== u && (u.fixedFoveation = t),
                null !== h &&
                  void 0 !== h.fixedFoveation &&
                  (h.fixedFoveation = t);
            });
          let D = null;
          const P = new Ve();
          P.setAnimationLoop(function (e, n) {
            if (((l = n.getViewerPose(o || a)), (p = n), null !== l)) {
              const e = l.views;
              null !== h &&
                (t.setRenderTargetFramebuffer(g, h.framebuffer),
                t.setRenderTarget(g));
              let n = !1;
              e.length !== E.cameras.length &&
                ((E.cameras.length = 0), (n = !0));
              for (let i = 0; i < e.length; i++) {
                const r = e[i];
                let a = null;
                if (null !== h) a = h.getViewport(r);
                else {
                  const e = c.getViewSubImage(u, r);
                  (a = e.viewport),
                    0 === i &&
                      (t.setRenderTargetTextures(
                        g,
                        e.colorTexture,
                        u.ignoreDepthValues ? void 0 : e.depthStencilTexture
                      ),
                      t.setRenderTarget(g));
                }
                let s = y[i];
                void 0 === s &&
                  ((s = new k()),
                  s.layers.enable(i),
                  (s.viewport = new He()),
                  (y[i] = s)),
                  s.matrix.fromArray(r.transform.matrix),
                  s.projectionMatrix.fromArray(r.projectionMatrix),
                  s.viewport.set(a.x, a.y, a.width, a.height),
                  0 === i && E.matrix.copy(s.matrix),
                  !0 === n && E.cameras.push(s);
              }
            }
            for (let t = 0; t < _.length; t++) {
              const e = v[t],
                i = _[t];
              null !== e && void 0 !== i && i.update(e, n, o || a);
            }
            D && D(e, n), (p = null);
          }),
            (this.setAnimationLoop = function (t) {
              D = t;
            }),
            (this.dispose = function () {});
        }
      }
      function la(t, e) {
        function n(n, i) {
          (n.opacity.value = i.opacity),
            i.color && n.diffuse.value.copy(i.color),
            i.emissive &&
              n.emissive.value
                .copy(i.emissive)
                .multiplyScalar(i.emissiveIntensity),
            i.map && (n.map.value = i.map),
            i.alphaMap && (n.alphaMap.value = i.alphaMap),
            i.bumpMap &&
              ((n.bumpMap.value = i.bumpMap),
              (n.bumpScale.value = i.bumpScale),
              1 === i.side && (n.bumpScale.value *= -1)),
            i.displacementMap &&
              ((n.displacementMap.value = i.displacementMap),
              (n.displacementScale.value = i.displacementScale),
              (n.displacementBias.value = i.displacementBias)),
            i.emissiveMap && (n.emissiveMap.value = i.emissiveMap),
            i.normalMap &&
              ((n.normalMap.value = i.normalMap),
              n.normalScale.value.copy(i.normalScale),
              1 === i.side && n.normalScale.value.negate()),
            i.specularMap && (n.specularMap.value = i.specularMap),
            i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
          const r = e.get(i).envMap;
          if (
            (r &&
              ((n.envMap.value = r),
              (n.flipEnvMap.value =
                r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1),
              (n.reflectivity.value = i.reflectivity),
              (n.ior.value = i.ior),
              (n.refractionRatio.value = i.refractionRatio)),
            i.lightMap)
          ) {
            n.lightMap.value = i.lightMap;
            const e = !0 !== t.physicallyCorrectLights ? Math.PI : 1;
            n.lightMapIntensity.value = i.lightMapIntensity * e;
          }
          let a, s;
          i.aoMap &&
            ((n.aoMap.value = i.aoMap),
            (n.aoMapIntensity.value = i.aoMapIntensity)),
            i.map
              ? (a = i.map)
              : i.specularMap
              ? (a = i.specularMap)
              : i.displacementMap
              ? (a = i.displacementMap)
              : i.normalMap
              ? (a = i.normalMap)
              : i.bumpMap
              ? (a = i.bumpMap)
              : i.roughnessMap
              ? (a = i.roughnessMap)
              : i.metalnessMap
              ? (a = i.metalnessMap)
              : i.alphaMap
              ? (a = i.alphaMap)
              : i.emissiveMap
              ? (a = i.emissiveMap)
              : i.clearcoatMap
              ? (a = i.clearcoatMap)
              : i.clearcoatNormalMap
              ? (a = i.clearcoatNormalMap)
              : i.clearcoatRoughnessMap
              ? (a = i.clearcoatRoughnessMap)
              : i.iridescenceMap
              ? (a = i.iridescenceMap)
              : i.iridescenceThicknessMap
              ? (a = i.iridescenceThicknessMap)
              : i.specularIntensityMap
              ? (a = i.specularIntensityMap)
              : i.specularColorMap
              ? (a = i.specularColorMap)
              : i.transmissionMap
              ? (a = i.transmissionMap)
              : i.thicknessMap
              ? (a = i.thicknessMap)
              : i.sheenColorMap
              ? (a = i.sheenColorMap)
              : i.sheenRoughnessMap && (a = i.sheenRoughnessMap),
            void 0 !== a &&
              (a.isWebGLRenderTarget && (a = a.texture),
              !0 === a.matrixAutoUpdate && a.updateMatrix(),
              n.uvTransform.value.copy(a.matrix)),
            i.aoMap ? (s = i.aoMap) : i.lightMap && (s = i.lightMap),
            void 0 !== s &&
              (s.isWebGLRenderTarget && (s = s.texture),
              !0 === s.matrixAutoUpdate && s.updateMatrix(),
              n.uv2Transform.value.copy(s.matrix));
        }
        return {
          refreshFogUniforms: function (t, e) {
            t.fogColor.value.copy(e.color),
              e.isFog
                ? ((t.fogNear.value = e.near), (t.fogFar.value = e.far))
                : e.isFogExp2 && (t.fogDensity.value = e.density);
          },
          refreshMaterialUniforms: function (t, i, r, a, s) {
            i.isMeshBasicMaterial || i.isMeshLambertMaterial
              ? n(t, i)
              : i.isMeshToonMaterial
              ? (n(t, i),
                (function (t, e) {
                  e.gradientMap && (t.gradientMap.value = e.gradientMap);
                })(t, i))
              : i.isMeshPhongMaterial
              ? (n(t, i),
                (function (t, e) {
                  t.specular.value.copy(e.specular),
                    (t.shininess.value = Math.max(e.shininess, 1e-4));
                })(t, i))
              : i.isMeshStandardMaterial
              ? (n(t, i),
                (function (t, n) {
                  (t.roughness.value = n.roughness),
                    (t.metalness.value = n.metalness),
                    n.roughnessMap && (t.roughnessMap.value = n.roughnessMap),
                    n.metalnessMap && (t.metalnessMap.value = n.metalnessMap),
                    e.get(n).envMap &&
                      (t.envMapIntensity.value = n.envMapIntensity);
                })(t, i),
                i.isMeshPhysicalMaterial &&
                  (function (t, e, n) {
                    (t.ior.value = e.ior),
                      e.sheen > 0 &&
                        (t.sheenColor.value
                          .copy(e.sheenColor)
                          .multiplyScalar(e.sheen),
                        (t.sheenRoughness.value = e.sheenRoughness),
                        e.sheenColorMap &&
                          (t.sheenColorMap.value = e.sheenColorMap),
                        e.sheenRoughnessMap &&
                          (t.sheenRoughnessMap.value = e.sheenRoughnessMap)),
                      e.clearcoat > 0 &&
                        ((t.clearcoat.value = e.clearcoat),
                        (t.clearcoatRoughness.value = e.clearcoatRoughness),
                        e.clearcoatMap &&
                          (t.clearcoatMap.value = e.clearcoatMap),
                        e.clearcoatRoughnessMap &&
                          (t.clearcoatRoughnessMap.value =
                            e.clearcoatRoughnessMap),
                        e.clearcoatNormalMap &&
                          (t.clearcoatNormalScale.value.copy(
                            e.clearcoatNormalScale
                          ),
                          (t.clearcoatNormalMap.value = e.clearcoatNormalMap),
                          1 === e.side &&
                            t.clearcoatNormalScale.value.negate())),
                      e.iridescence > 0 &&
                        ((t.iridescence.value = e.iridescence),
                        (t.iridescenceIOR.value = e.iridescenceIOR),
                        (t.iridescenceThicknessMinimum.value =
                          e.iridescenceThicknessRange[0]),
                        (t.iridescenceThicknessMaximum.value =
                          e.iridescenceThicknessRange[1]),
                        e.iridescenceMap &&
                          (t.iridescenceMap.value = e.iridescenceMap),
                        e.iridescenceThicknessMap &&
                          (t.iridescenceThicknessMap.value =
                            e.iridescenceThicknessMap)),
                      e.transmission > 0 &&
                        ((t.transmission.value = e.transmission),
                        (t.transmissionSamplerMap.value = n.texture),
                        t.transmissionSamplerSize.value.set(n.width, n.height),
                        e.transmissionMap &&
                          (t.transmissionMap.value = e.transmissionMap),
                        (t.thickness.value = e.thickness),
                        e.thicknessMap &&
                          (t.thicknessMap.value = e.thicknessMap),
                        (t.attenuationDistance.value = e.attenuationDistance),
                        t.attenuationColor.value.copy(e.attenuationColor)),
                      (t.specularIntensity.value = e.specularIntensity),
                      t.specularColor.value.copy(e.specularColor),
                      e.specularIntensityMap &&
                        (t.specularIntensityMap.value = e.specularIntensityMap),
                      e.specularColorMap &&
                        (t.specularColorMap.value = e.specularColorMap);
                  })(t, i, s))
              : i.isMeshMatcapMaterial
              ? (n(t, i),
                (function (t, e) {
                  e.matcap && (t.matcap.value = e.matcap);
                })(t, i))
              : i.isMeshDepthMaterial
              ? n(t, i)
              : i.isMeshDistanceMaterial
              ? (n(t, i),
                (function (t, e) {
                  t.referencePosition.value.copy(e.referencePosition),
                    (t.nearDistance.value = e.nearDistance),
                    (t.farDistance.value = e.farDistance);
                })(t, i))
              : i.isMeshNormalMaterial
              ? n(t, i)
              : i.isLineBasicMaterial
              ? ((function (t, e) {
                  t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity);
                })(t, i),
                i.isLineDashedMaterial &&
                  (function (t, e) {
                    (t.dashSize.value = e.dashSize),
                      (t.totalSize.value = e.dashSize + e.gapSize),
                      (t.scale.value = e.scale);
                  })(t, i))
              : i.isPointsMaterial
              ? (function (t, e, n, i) {
                  let r;
                  t.diffuse.value.copy(e.color),
                    (t.opacity.value = e.opacity),
                    (t.size.value = e.size * n),
                    (t.scale.value = 0.5 * i),
                    e.map && (t.map.value = e.map),
                    e.alphaMap && (t.alphaMap.value = e.alphaMap),
                    e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest),
                    e.map ? (r = e.map) : e.alphaMap && (r = e.alphaMap),
                    void 0 !== r &&
                      (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                      t.uvTransform.value.copy(r.matrix));
                })(t, i, r, a)
              : i.isSpriteMaterial
              ? (function (t, e) {
                  let n;
                  t.diffuse.value.copy(e.color),
                    (t.opacity.value = e.opacity),
                    (t.rotation.value = e.rotation),
                    e.map && (t.map.value = e.map),
                    e.alphaMap && (t.alphaMap.value = e.alphaMap),
                    e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest),
                    e.map ? (n = e.map) : e.alphaMap && (n = e.alphaMap),
                    void 0 !== n &&
                      (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                      t.uvTransform.value.copy(n.matrix));
                })(t, i)
              : i.isShadowMaterial
              ? (t.color.value.copy(i.color), (t.opacity.value = i.opacity))
              : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
          },
        };
      }
      function ca(t, e, n, i) {
        let r = {},
          a = {},
          s = [];
        const o = n.isWebGL2
          ? t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS)
          : 0;
        function l(t, e, n) {
          const i = t.value;
          if (void 0 === n[e])
            return (n[e] = "number" == typeof i ? i : i.clone()), !0;
          if ("number" == typeof i) {
            if (n[e] !== i) return (n[e] = i), !0;
          } else {
            const t = n[e];
            if (!1 === t.equals(i)) return t.copy(i), !0;
          }
          return !1;
        }
        function c(t) {
          const e = t.value,
            n = { boundary: 0, storage: 0 };
          return (
            "number" == typeof e
              ? ((n.boundary = 4), (n.storage = 4))
              : e.isVector2
              ? ((n.boundary = 8), (n.storage = 8))
              : e.isVector3 || e.isColor
              ? ((n.boundary = 16), (n.storage = 12))
              : e.isVector4
              ? ((n.boundary = 16), (n.storage = 16))
              : e.isMatrix3
              ? ((n.boundary = 48), (n.storage = 48))
              : e.isMatrix4
              ? ((n.boundary = 64), (n.storage = 64))
              : e.isTexture
              ? console.warn(
                  "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
                )
              : console.warn(
                  "THREE.WebGLRenderer: Unsupported uniform value type.",
                  e
                ),
            n
          );
        }
        function u(e) {
          const n = e.target;
          n.removeEventListener("dispose", u);
          const i = s.indexOf(n.__bindingPointIndex);
          s.splice(i, 1),
            t.deleteBuffer(r[n.id]),
            delete r[n.id],
            delete a[n.id];
        }
        return {
          bind: function (t, e) {
            const n = e.program;
            i.uniformBlockBinding(t, n);
          },
          update: function (n, h) {
            let d = r[n.id];
            void 0 === d &&
              ((function (t) {
                const e = t.uniforms;
                let n = 0;
                let i = 0;
                for (let t = 0, r = e.length; t < r; t++) {
                  const r = e[t],
                    a = c(r);
                  if (
                    ((r.__data = new Float32Array(
                      a.storage / Float32Array.BYTES_PER_ELEMENT
                    )),
                    (r.__offset = n),
                    t > 0)
                  ) {
                    i = n % 16;
                    const t = 16 - i;
                    0 !== i &&
                      t - a.boundary < 0 &&
                      ((n += 16 - i), (r.__offset = n));
                  }
                  n += a.storage;
                }
                (i = n % 16),
                  i > 0 && (n += 16 - i),
                  (t.__size = n),
                  (t.__cache = {});
              })(n),
              (d = (function (e) {
                const n = (function () {
                  for (let t = 0; t < o; t++)
                    if (-1 === s.indexOf(t)) return s.push(t), t;
                  return (
                    console.error(
                      "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
                    ),
                    0
                  );
                })();
                e.__bindingPointIndex = n;
                const i = t.createBuffer(),
                  r = e.__size,
                  a = e.usage;
                return (
                  t.bindBuffer(t.UNIFORM_BUFFER, i),
                  t.bufferData(t.UNIFORM_BUFFER, r, a),
                  t.bindBuffer(t.UNIFORM_BUFFER, null),
                  t.bindBufferBase(t.UNIFORM_BUFFER, n, i),
                  i
                );
              })(n)),
              (r[n.id] = d),
              n.addEventListener("dispose", u));
            const p = h.program;
            i.updateUBOMapping(n, p);
            const f = e.render.frame;
            a[n.id] !== f &&
              ((function (e) {
                const n = r[e.id],
                  i = e.uniforms,
                  a = e.__cache;
                t.bindBuffer(t.UNIFORM_BUFFER, n);
                for (let e = 0, n = i.length; e < n; e++) {
                  const n = i[e];
                  if (!0 === l(n, e, a)) {
                    const e = n.value,
                      i = n.__offset;
                    "number" == typeof e
                      ? ((n.__data[0] = e),
                        t.bufferSubData(t.UNIFORM_BUFFER, i, n.__data))
                      : (n.value.isMatrix3
                          ? ((n.__data[0] = n.value.elements[0]),
                            (n.__data[1] = n.value.elements[1]),
                            (n.__data[2] = n.value.elements[2]),
                            (n.__data[3] = n.value.elements[0]),
                            (n.__data[4] = n.value.elements[3]),
                            (n.__data[5] = n.value.elements[4]),
                            (n.__data[6] = n.value.elements[5]),
                            (n.__data[7] = n.value.elements[0]),
                            (n.__data[8] = n.value.elements[6]),
                            (n.__data[9] = n.value.elements[7]),
                            (n.__data[10] = n.value.elements[8]),
                            (n.__data[11] = n.value.elements[0]))
                          : e.toArray(n.__data),
                        t.bufferSubData(t.UNIFORM_BUFFER, i, n.__data));
                  }
                }
                t.bindBuffer(t.UNIFORM_BUFFER, null);
              })(n),
              (a[n.id] = f));
          },
          dispose: function () {
            for (const e in r) t.deleteBuffer(r[e]);
            (s = []), (r = {}), (a = {});
          },
        };
      }
      function ua(t = {}) {
        this.isWebGLRenderer = !0;
        const e =
            void 0 !== t.canvas
              ? t.canvas
              : (function () {
                  const t = qt("canvas");
                  return (t.style.display = "block"), t;
                })(),
          n = void 0 !== t.context ? t.context : null,
          i = void 0 === t.depth || t.depth,
          r = void 0 === t.stencil || t.stencil,
          a = void 0 !== t.antialias && t.antialias,
          s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
          o = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
          c = void 0 !== t.powerPreference ? t.powerPreference : "default",
          u =
            void 0 !== t.failIfMajorPerformanceCaveat &&
            t.failIfMajorPerformanceCaveat;
        let h;
        h =
          null !== n
            ? n.getContextAttributes().alpha
            : void 0 !== t.alpha && t.alpha;
        let p = null,
          f = null;
        const g = [],
          _ = [];
        (this.domElement = e),
          (this.debug = { checkShaderErrors: !0 }),
          (this.autoClear = !0),
          (this.autoClearColor = !0),
          (this.autoClearDepth = !0),
          (this.autoClearStencil = !0),
          (this.sortObjects = !0),
          (this.clippingPlanes = []),
          (this.localClippingEnabled = !1),
          (this.outputEncoding = Rt),
          (this.physicallyCorrectLights = !1),
          (this.toneMapping = 0),
          (this.toneMappingExposure = 1),
          Object.defineProperties(this, {
            gammaFactor: {
              get: function () {
                return (
                  console.warn(
                    "THREE.WebGLRenderer: .gammaFactor has been removed."
                  ),
                  2
                );
              },
              set: function () {
                console.warn(
                  "THREE.WebGLRenderer: .gammaFactor has been removed."
                );
              },
            },
          });
        const v = this;
        let x = !1,
          M = 0,
          y = 0,
          E = null,
          S = -1,
          b = null;
        const T = new He(),
          w = new He();
        let A = null,
          R = e.width,
          C = e.height,
          L = 1,
          D = null,
          P = null;
        const I = new He(0, 0, R, C),
          U = new He(0, 0, R, C);
        let N = !1;
        const O = new Ge();
        let F = !1,
          z = !1,
          B = null;
        const G = new m(),
          H = new W(),
          V = new d(),
          k = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0,
          };
        function X() {
          return null === E ? L : 1;
        }
        let q,
          j,
          Y,
          Z,
          K,
          J,
          Q,
          $,
          tt,
          et,
          nt,
          it,
          rt,
          at,
          st,
          ot,
          lt,
          ct,
          ut,
          ht,
          dt,
          pt,
          ft,
          _t,
          Mt = n;
        function Et(t, n) {
          for (let i = 0; i < t.length; i++) {
            const r = t[i],
              a = e.getContext(r, n);
            if (null !== a) return a;
          }
          return null;
        }
        try {
          const t = {
            alpha: !0,
            depth: i,
            stencil: r,
            antialias: a,
            premultipliedAlpha: s,
            preserveDrawingBuffer: o,
            powerPreference: c,
            failIfMajorPerformanceCaveat: u,
          };
          if (
            ("setAttribute" in e &&
              e.setAttribute("data-engine", "three.js r146"),
            e.addEventListener("webglcontextlost", Tt, !1),
            e.addEventListener("webglcontextrestored", wt, !1),
            e.addEventListener("webglcontextcreationerror", At, !1),
            null === Mt)
          ) {
            const e = ["webgl2", "webgl", "experimental-webgl"];
            if (
              (!0 === v.isWebGL1Renderer && e.shift(),
              (Mt = Et(e, t)),
              null === Mt)
            )
              throw Et(e)
                ? new Error(
                    "Error creating WebGL context with your selected attributes."
                  )
                : new Error("Error creating WebGL context.");
          }
          void 0 === Mt.getShaderPrecisionFormat &&
            (Mt.getShaderPrecisionFormat = function () {
              return { rangeMin: 1, rangeMax: 1, precision: 1 };
            });
        } catch (t) {
          throw (console.error("THREE.WebGLRenderer: " + t.message), t);
        }
        function St() {
          (q = new ai(Mt)),
            (j = new Dn(Mt, q, t)),
            q.init(j),
            (pt = new ea(Mt, q, j)),
            (Y = new $r(Mt, q, j)),
            (Z = new li(Mt)),
            (K = new Br()),
            (J = new ta(Mt, q, Y, K, j, pt, Z)),
            (Q = new Wn(v)),
            ($ = new ri(v)),
            (tt = new ke(Mt, j)),
            (ft = new Cn(Mt, q, tt, j)),
            (et = new si(Mt, tt, Z, ft)),
            (nt = new pi(Mt, et, tt, Z)),
            (ut = new di(Mt, j, J)),
            (ot = new Pn(K)),
            (it = new zr(v, Q, $, q, j, ft, ot)),
            (rt = new la(v, K)),
            (at = new kr()),
            (st = new Zr(q, j)),
            (ct = new Rn(v, Q, $, Y, nt, h, s)),
            (lt = new Qr(v, nt, j)),
            (_t = new ca(Mt, Z, j, Y)),
            (ht = new Ln(Mt, q, Z, j)),
            (dt = new oi(Mt, q, Z, j)),
            (Z.programs = it.programs),
            (v.capabilities = j),
            (v.extensions = q),
            (v.properties = K),
            (v.renderLists = at),
            (v.shadowMap = lt),
            (v.state = Y),
            (v.info = Z);
        }
        St();
        const bt = new oa(v, Mt);
        function Tt(t) {
          t.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            (x = !0);
        }
        function wt() {
          console.log("THREE.WebGLRenderer: Context Restored."), (x = !1);
          const t = Z.autoReset,
            e = lt.enabled,
            n = lt.autoUpdate,
            i = lt.needsUpdate,
            r = lt.type;
          St(),
            (Z.autoReset = t),
            (lt.enabled = e),
            (lt.autoUpdate = n),
            (lt.needsUpdate = i),
            (lt.type = r);
        }
        function At(t) {
          console.error(
            "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
            t.statusMessage
          );
        }
        function Ct(t) {
          const e = t.target;
          e.removeEventListener("dispose", Ct),
            (function (t) {
              (function (t) {
                const e = K.get(t).programs;
                void 0 !== e &&
                  (e.forEach(function (t) {
                    it.releaseProgram(t);
                  }),
                  t.isShaderMaterial && it.releaseShaderCache(t));
              })(t),
                K.remove(t);
            })(e);
        }
        (this.xr = bt),
          (this.getContext = function () {
            return Mt;
          }),
          (this.getContextAttributes = function () {
            return Mt.getContextAttributes();
          }),
          (this.forceContextLoss = function () {
            const t = q.get("WEBGL_lose_context");
            t && t.loseContext();
          }),
          (this.forceContextRestore = function () {
            const t = q.get("WEBGL_lose_context");
            t && t.restoreContext();
          }),
          (this.getPixelRatio = function () {
            return L;
          }),
          (this.setPixelRatio = function (t) {
            void 0 !== t && ((L = t), this.setSize(R, C, !1));
          }),
          (this.getSize = function (t) {
            return t.set(R, C);
          }),
          (this.setSize = function (t, n, i) {
            bt.isPresenting
              ? console.warn(
                  "THREE.WebGLRenderer: Can't change size while VR device is presenting."
                )
              : ((R = t),
                (C = n),
                (e.width = Math.floor(t * L)),
                (e.height = Math.floor(n * L)),
                !1 !== i &&
                  ((e.style.width = t + "px"), (e.style.height = n + "px")),
                this.setViewport(0, 0, t, n));
          }),
          (this.getDrawingBufferSize = function (t) {
            return t.set(R * L, C * L).floor();
          }),
          (this.setDrawingBufferSize = function (t, n, i) {
            (R = t),
              (C = n),
              (L = i),
              (e.width = Math.floor(t * i)),
              (e.height = Math.floor(n * i)),
              this.setViewport(0, 0, t, n);
          }),
          (this.getCurrentViewport = function (t) {
            return t.copy(T);
          }),
          (this.getViewport = function (t) {
            return t.copy(I);
          }),
          (this.setViewport = function (t, e, n, i) {
            t.isVector4 ? I.set(t.x, t.y, t.z, t.w) : I.set(t, e, n, i),
              Y.viewport(T.copy(I).multiplyScalar(L).floor());
          }),
          (this.getScissor = function (t) {
            return t.copy(U);
          }),
          (this.setScissor = function (t, e, n, i) {
            t.isVector4 ? U.set(t.x, t.y, t.z, t.w) : U.set(t, e, n, i),
              Y.scissor(w.copy(U).multiplyScalar(L).floor());
          }),
          (this.getScissorTest = function () {
            return N;
          }),
          (this.setScissorTest = function (t) {
            Y.setScissorTest((N = t));
          }),
          (this.setOpaqueSort = function (t) {
            D = t;
          }),
          (this.setTransparentSort = function (t) {
            P = t;
          }),
          (this.getClearColor = function (t) {
            return t.copy(ct.getClearColor());
          }),
          (this.setClearColor = function () {
            ct.setClearColor.apply(ct, arguments);
          }),
          (this.getClearAlpha = function () {
            return ct.getClearAlpha();
          }),
          (this.setClearAlpha = function () {
            ct.setClearAlpha.apply(ct, arguments);
          }),
          (this.clear = function (t = !0, e = !0, n = !0) {
            let i = 0;
            t && (i |= Mt.COLOR_BUFFER_BIT),
              e && (i |= Mt.DEPTH_BUFFER_BIT),
              n && (i |= Mt.STENCIL_BUFFER_BIT),
              Mt.clear(i);
          }),
          (this.clearColor = function () {
            this.clear(!0, !1, !1);
          }),
          (this.clearDepth = function () {
            this.clear(!1, !0, !1);
          }),
          (this.clearStencil = function () {
            this.clear(!1, !1, !0);
          }),
          (this.dispose = function () {
            e.removeEventListener("webglcontextlost", Tt, !1),
              e.removeEventListener("webglcontextrestored", wt, !1),
              e.removeEventListener("webglcontextcreationerror", At, !1),
              at.dispose(),
              st.dispose(),
              K.dispose(),
              Q.dispose(),
              $.dispose(),
              nt.dispose(),
              ft.dispose(),
              _t.dispose(),
              it.dispose(),
              bt.dispose(),
              bt.removeEventListener("sessionstart", Dt),
              bt.removeEventListener("sessionend", Pt),
              B && (B.dispose(), (B = null)),
              It.stop();
          }),
          (this.renderBufferDirect = function (t, e, n, i, r, a) {
            null === e && (e = k);
            const s = r.isMesh && r.matrixWorld.determinant() < 0,
              o = (function (t, e, n, i, r) {
                !0 !== e.isScene && (e = k), J.resetTextureUnits();
                const a = e.fog,
                  s = i.isMeshStandardMaterial ? e.environment : null,
                  o =
                    null === E
                      ? v.outputEncoding
                      : !0 === E.isXRRenderTarget
                      ? E.texture.encoding
                      : Rt,
                  l = (i.isMeshStandardMaterial ? $ : Q).get(i.envMap || s),
                  c =
                    !0 === i.vertexColors &&
                    !!n.attributes.color &&
                    4 === n.attributes.color.itemSize,
                  u = !!i.normalMap && !!n.attributes.tangent,
                  h = !!n.morphAttributes.position,
                  d = !!n.morphAttributes.normal,
                  p = !!n.morphAttributes.color,
                  m = i.toneMapped ? v.toneMapping : 0,
                  g =
                    n.morphAttributes.position ||
                    n.morphAttributes.normal ||
                    n.morphAttributes.color,
                  _ = void 0 !== g ? g.length : 0,
                  x = K.get(i),
                  M = f.state.lights;
                if (!0 === F && (!0 === z || t !== b)) {
                  const e = t === b && i.id === S;
                  ot.setState(i, t, e);
                }
                let y = !1;
                i.version === x.__version
                  ? (x.needsLights &&
                      x.lightsStateVersion !== M.state.version) ||
                    x.outputEncoding !== o ||
                    (r.isInstancedMesh && !1 === x.instancing)
                    ? (y = !0)
                    : r.isInstancedMesh || !0 !== x.instancing
                    ? r.isSkinnedMesh && !1 === x.skinning
                      ? (y = !0)
                      : r.isSkinnedMesh || !0 !== x.skinning
                      ? x.envMap !== l || (!0 === i.fog && x.fog !== a)
                        ? (y = !0)
                        : void 0 === x.numClippingPlanes ||
                          (x.numClippingPlanes === ot.numPlanes &&
                            x.numIntersection === ot.numIntersection)
                        ? (x.vertexAlphas !== c ||
                            x.vertexTangents !== u ||
                            x.morphTargets !== h ||
                            x.morphNormals !== d ||
                            x.morphColors !== p ||
                            x.toneMapping !== m ||
                            (!0 === j.isWebGL2 && x.morphTargetsCount !== _)) &&
                          (y = !0)
                        : (y = !0)
                      : (y = !0)
                    : (y = !0)
                  : ((y = !0), (x.__version = i.version));
                let T = x.currentProgram;
                !0 === y && (T = zt(i, e, r));
                let w = !1,
                  A = !1,
                  R = !1;
                const D = T.getUniforms(),
                  P = x.uniforms;
                if (
                  (Y.useProgram(T.program) && ((w = !0), (A = !0), (R = !0)),
                  i.id !== S && ((S = i.id), (A = !0)),
                  w || b !== t)
                ) {
                  if (
                    (D.setValue(Mt, "projectionMatrix", t.projectionMatrix),
                    j.logarithmicDepthBuffer &&
                      D.setValue(
                        Mt,
                        "logDepthBufFC",
                        2 / (Math.log(t.far + 1) / Math.LN2)
                      ),
                    b !== t && ((b = t), (A = !0), (R = !0)),
                    i.isShaderMaterial ||
                      i.isMeshPhongMaterial ||
                      i.isMeshToonMaterial ||
                      i.isMeshStandardMaterial ||
                      i.envMap)
                  ) {
                    const e = D.map.cameraPosition;
                    void 0 !== e &&
                      e.setValue(Mt, V.setFromMatrixPosition(t.matrixWorld));
                  }
                  (i.isMeshPhongMaterial ||
                    i.isMeshToonMaterial ||
                    i.isMeshLambertMaterial ||
                    i.isMeshBasicMaterial ||
                    i.isMeshStandardMaterial ||
                    i.isShaderMaterial) &&
                    D.setValue(
                      Mt,
                      "isOrthographic",
                      !0 === t.isOrthographicCamera
                    ),
                    (i.isMeshPhongMaterial ||
                      i.isMeshToonMaterial ||
                      i.isMeshLambertMaterial ||
                      i.isMeshBasicMaterial ||
                      i.isMeshStandardMaterial ||
                      i.isShaderMaterial ||
                      i.isShadowMaterial ||
                      r.isSkinnedMesh) &&
                      D.setValue(Mt, "viewMatrix", t.matrixWorldInverse);
                }
                if (r.isSkinnedMesh) {
                  D.setOptional(Mt, r, "bindMatrix"),
                    D.setOptional(Mt, r, "bindMatrixInverse");
                  const t = r.skeleton;
                  t &&
                    (j.floatVertexTextures
                      ? (null === t.boneTexture && t.computeBoneTexture(),
                        D.setValue(Mt, "boneTexture", t.boneTexture, J),
                        D.setValue(Mt, "boneTextureSize", t.boneTextureSize))
                      : console.warn(
                          "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
                        ));
                }
                const I = n.morphAttributes;
                var U, N;
                if (
                  ((void 0 !== I.position ||
                    void 0 !== I.normal ||
                    (void 0 !== I.color && !0 === j.isWebGL2)) &&
                    ut.update(r, n, i, T),
                  (A || x.receiveShadow !== r.receiveShadow) &&
                    ((x.receiveShadow = r.receiveShadow),
                    D.setValue(Mt, "receiveShadow", r.receiveShadow)),
                  i.isMeshGouraudMaterial &&
                    null !== i.envMap &&
                    ((P.envMap.value = l),
                    (P.flipEnvMap.value =
                      l.isCubeTexture && !1 === l.isRenderTargetTexture
                        ? -1
                        : 1)),
                  A &&
                    (D.setValue(
                      Mt,
                      "toneMappingExposure",
                      v.toneMappingExposure
                    ),
                    x.needsLights &&
                      ((N = R),
                      ((U = P).ambientLightColor.needsUpdate = N),
                      (U.lightProbe.needsUpdate = N),
                      (U.directionalLights.needsUpdate = N),
                      (U.directionalLightShadows.needsUpdate = N),
                      (U.pointLights.needsUpdate = N),
                      (U.pointLightShadows.needsUpdate = N),
                      (U.spotLights.needsUpdate = N),
                      (U.spotLightShadows.needsUpdate = N),
                      (U.rectAreaLights.needsUpdate = N),
                      (U.hemisphereLights.needsUpdate = N)),
                    a && !0 === i.fog && rt.refreshFogUniforms(P, a),
                    rt.refreshMaterialUniforms(P, i, L, C, B),
                    vr.upload(Mt, x.uniformsList, P, J)),
                  i.isShaderMaterial &&
                    !0 === i.uniformsNeedUpdate &&
                    (vr.upload(Mt, x.uniformsList, P, J),
                    (i.uniformsNeedUpdate = !1)),
                  i.isSpriteMaterial && D.setValue(Mt, "center", r.center),
                  D.setValue(Mt, "modelViewMatrix", r.modelViewMatrix),
                  D.setValue(Mt, "normalMatrix", r.normalMatrix),
                  D.setValue(Mt, "modelMatrix", r.matrixWorld),
                  i.isShaderMaterial || i.isRawShaderMaterial)
                ) {
                  const t = i.uniformsGroups;
                  for (let e = 0, n = t.length; e < n; e++)
                    if (j.isWebGL2) {
                      const n = t[e];
                      _t.update(n, T), _t.bind(n, T);
                    } else
                      console.warn(
                        "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
                      );
                }
                return T;
              })(t, e, n, i, r);
            Y.setMaterial(i, s);
            let l = n.index;
            const c = n.attributes.position;
            if (null === l) {
              if (void 0 === c || 0 === c.count) return;
            } else if (0 === l.count) return;
            let u,
              h = 1;
            !0 === i.wireframe && ((l = et.getWireframeAttribute(n)), (h = 2)),
              ft.setup(r, i, o, n, l);
            let d = ht;
            null !== l && ((u = tt.get(l)), (d = dt), d.setIndex(u));
            const p = null !== l ? l.count : c.count,
              m = n.drawRange.start * h,
              g = n.drawRange.count * h,
              _ = null !== a ? a.start * h : 0,
              x = null !== a ? a.count * h : 1 / 0,
              M = Math.max(m, _),
              y = Math.min(p, m + g, _ + x) - 1,
              T = Math.max(0, y - M + 1);
            if (0 !== T) {
              if (r.isMesh)
                !0 === i.wireframe
                  ? (Y.setLineWidth(i.wireframeLinewidth * X()),
                    d.setMode(Mt.LINES))
                  : d.setMode(Mt.TRIANGLES);
              else if (r.isLine) {
                let t = i.linewidth;
                void 0 === t && (t = 1),
                  Y.setLineWidth(t * X()),
                  r.isLineSegments
                    ? d.setMode(Mt.LINES)
                    : r.isLineLoop
                    ? d.setMode(Mt.LINE_LOOP)
                    : d.setMode(Mt.LINE_STRIP);
              } else
                r.isPoints
                  ? d.setMode(Mt.POINTS)
                  : r.isSprite && d.setMode(Mt.TRIANGLES);
              if (r.isInstancedMesh) d.renderInstances(M, T, r.count);
              else if (n.isInstancedBufferGeometry) {
                const t = Math.min(n.instanceCount, n._maxInstanceCount);
                d.renderInstances(M, T, t);
              } else d.render(M, T);
            }
          }),
          (this.compile = function (t, e) {
            function n(t, e, n) {
              !0 === t.transparent && 2 === t.side
                ? ((t.side = 1),
                  (t.needsUpdate = !0),
                  zt(t, e, n),
                  (t.side = 0),
                  (t.needsUpdate = !0),
                  zt(t, e, n),
                  (t.side = 2))
                : zt(t, e, n);
            }
            (f = st.get(t)),
              f.init(),
              _.push(f),
              t.traverseVisible(function (t) {
                t.isLight &&
                  t.layers.test(e.layers) &&
                  (f.pushLight(t), t.castShadow && f.pushShadow(t));
              }),
              f.setupLights(v.physicallyCorrectLights),
              t.traverse(function (e) {
                const i = e.material;
                if (i)
                  if (Array.isArray(i))
                    for (let r = 0; r < i.length; r++) n(i[r], t, e);
                  else n(i, t, e);
              }),
              _.pop(),
              (f = null);
          });
        let Lt = null;
        function Dt() {
          It.stop();
        }
        function Pt() {
          It.start();
        }
        const It = new Ve();
        function Ut(t, e, n, i) {
          if (!1 === t.visible) return;
          if (t.layers.test(e.layers))
            if (t.isGroup) n = t.renderOrder;
            else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
            else if (t.isLight) f.pushLight(t), t.castShadow && f.pushShadow(t);
            else if (t.isSprite) {
              if (!t.frustumCulled || O.intersectsSprite(t)) {
                i && V.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
                const e = nt.update(t),
                  r = t.material;
                r.visible && p.push(t, e, r, n, V.z, null);
              }
            } else if (
              (t.isMesh || t.isLine || t.isPoints) &&
              (t.isSkinnedMesh &&
                t.skeleton.frame !== Z.render.frame &&
                (t.skeleton.update(), (t.skeleton.frame = Z.render.frame)),
              !t.frustumCulled || O.intersectsObject(t))
            ) {
              i && V.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
              const e = nt.update(t),
                r = t.material;
              if (Array.isArray(r)) {
                const i = e.groups;
                for (let a = 0, s = i.length; a < s; a++) {
                  const s = i[a],
                    o = r[s.materialIndex];
                  o && o.visible && p.push(t, e, o, n, V.z, s);
                }
              } else r.visible && p.push(t, e, r, n, V.z, null);
            }
          const r = t.children;
          for (let t = 0, a = r.length; t < a; t++) Ut(r[t], e, n, i);
        }
        function Nt(t, e, n, i) {
          const r = t.opaque,
            s = t.transmissive,
            o = t.transparent;
          f.setupLightsView(n),
            s.length > 0 &&
              (function (t, e, n) {
                const i = j.isWebGL2;
                null === B &&
                  (B = new Bn(1, 1, {
                    generateMipmaps: !0,
                    type: q.has("EXT_color_buffer_half_float") ? xt : gt,
                    minFilter: mt,
                    samples: i && !0 === a ? 4 : 0,
                  })),
                  v.getDrawingBufferSize(H),
                  i ? B.setSize(H.x, H.y) : B.setSize(l(H.x), l(H.y));
                const r = v.getRenderTarget();
                v.setRenderTarget(B), v.clear();
                const s = v.toneMapping;
                (v.toneMapping = 0),
                  Ot(t, e, n),
                  (v.toneMapping = s),
                  J.updateMultisampleRenderTarget(B),
                  J.updateRenderTargetMipmap(B),
                  v.setRenderTarget(r);
              })(r, e, n),
            i && Y.viewport(T.copy(i)),
            r.length > 0 && Ot(r, e, n),
            s.length > 0 && Ot(s, e, n),
            o.length > 0 && Ot(o, e, n),
            Y.buffers.depth.setTest(!0),
            Y.buffers.depth.setMask(!0),
            Y.buffers.color.setMask(!0),
            Y.setPolygonOffset(!1);
        }
        function Ot(t, e, n) {
          const i = !0 === e.isScene ? e.overrideMaterial : null;
          for (let r = 0, a = t.length; r < a; r++) {
            const a = t[r],
              s = a.object,
              o = a.geometry,
              l = null === i ? a.material : i,
              c = a.group;
            s.layers.test(n.layers) && Ft(s, e, n, o, l, c);
          }
        }
        function Ft(t, e, n, i, r, a) {
          t.onBeforeRender(v, e, n, i, r, a),
            t.modelViewMatrix.multiplyMatrices(
              n.matrixWorldInverse,
              t.matrixWorld
            ),
            t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
            r.onBeforeRender(v, e, n, i, t, a),
            !0 === r.transparent && 2 === r.side
              ? ((r.side = 1),
                (r.needsUpdate = !0),
                v.renderBufferDirect(n, e, i, r, t, a),
                (r.side = 0),
                (r.needsUpdate = !0),
                v.renderBufferDirect(n, e, i, r, t, a),
                (r.side = 2))
              : v.renderBufferDirect(n, e, i, r, t, a),
            t.onAfterRender(v, e, n, i, r, a);
        }
        function zt(t, e, n) {
          !0 !== e.isScene && (e = k);
          const i = K.get(t),
            r = f.state.lights,
            a = f.state.shadowsArray,
            s = r.state.version,
            o = it.getParameters(t, r.state, a, e, n),
            l = it.getProgramCacheKey(o);
          let c = i.programs;
          (i.environment = t.isMeshStandardMaterial ? e.environment : null),
            (i.fog = e.fog),
            (i.envMap = (t.isMeshStandardMaterial ? $ : Q).get(
              t.envMap || i.environment
            )),
            void 0 === c &&
              (t.addEventListener("dispose", Ct),
              (c = new Map()),
              (i.programs = c));
          let u = c.get(l);
          if (void 0 !== u) {
            if (i.currentProgram === u && i.lightsStateVersion === s)
              return Bt(t, o), u;
          } else
            (o.uniforms = it.getUniforms(t)),
              t.onBuild(n, o, v),
              t.onBeforeCompile(o, v),
              (u = it.acquireProgram(o, l)),
              c.set(l, u),
              (i.uniforms = o.uniforms);
          const h = i.uniforms;
          ((t.isShaderMaterial || t.isRawShaderMaterial) &&
            !0 !== t.clipping) ||
            (h.clippingPlanes = ot.uniform),
            Bt(t, o),
            (i.needsLights = (function (t) {
              return (
                t.isMeshLambertMaterial ||
                t.isMeshToonMaterial ||
                t.isMeshPhongMaterial ||
                t.isMeshStandardMaterial ||
                t.isShadowMaterial ||
                (t.isShaderMaterial && !0 === t.lights)
              );
            })(t)),
            (i.lightsStateVersion = s),
            i.needsLights &&
              ((h.ambientLightColor.value = r.state.ambient),
              (h.lightProbe.value = r.state.probe),
              (h.directionalLights.value = r.state.directional),
              (h.directionalLightShadows.value = r.state.directionalShadow),
              (h.spotLights.value = r.state.spot),
              (h.spotLightShadows.value = r.state.spotShadow),
              (h.rectAreaLights.value = r.state.rectArea),
              (h.ltc_1.value = r.state.rectAreaLTC1),
              (h.ltc_2.value = r.state.rectAreaLTC2),
              (h.pointLights.value = r.state.point),
              (h.pointLightShadows.value = r.state.pointShadow),
              (h.hemisphereLights.value = r.state.hemi),
              (h.directionalShadowMap.value = r.state.directionalShadowMap),
              (h.directionalShadowMatrix.value =
                r.state.directionalShadowMatrix),
              (h.spotShadowMap.value = r.state.spotShadowMap),
              (h.spotLightMatrix.value = r.state.spotLightMatrix),
              (h.spotLightMap.value = r.state.spotLightMap),
              (h.pointShadowMap.value = r.state.pointShadowMap),
              (h.pointShadowMatrix.value = r.state.pointShadowMatrix));
          const d = u.getUniforms(),
            p = vr.seqWithValue(d.seq, h);
          return (i.currentProgram = u), (i.uniformsList = p), u;
        }
        function Bt(t, e) {
          const n = K.get(t);
          (n.outputEncoding = e.outputEncoding),
            (n.instancing = e.instancing),
            (n.skinning = e.skinning),
            (n.morphTargets = e.morphTargets),
            (n.morphNormals = e.morphNormals),
            (n.morphColors = e.morphColors),
            (n.morphTargetsCount = e.morphTargetsCount),
            (n.numClippingPlanes = e.numClippingPlanes),
            (n.numIntersection = e.numClipIntersection),
            (n.vertexAlphas = e.vertexAlphas),
            (n.vertexTangents = e.vertexTangents),
            (n.toneMapping = e.toneMapping);
        }
        It.setAnimationLoop(function (t) {
          Lt && Lt(t);
        }),
          "undefined" != typeof self && It.setContext(self),
          (this.setAnimationLoop = function (t) {
            (Lt = t),
              bt.setAnimationLoop(t),
              null === t ? It.stop() : It.start();
          }),
          bt.addEventListener("sessionstart", Dt),
          bt.addEventListener("sessionend", Pt),
          (this.render = function (t, e) {
            if (void 0 !== e && !0 !== e.isCamera)
              return void console.error(
                "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
              );
            if (!0 === x) return;
            !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(),
              null === e.parent &&
                !0 === e.matrixWorldAutoUpdate &&
                e.updateMatrixWorld(),
              !0 === bt.enabled &&
                !0 === bt.isPresenting &&
                (!0 === bt.cameraAutoUpdate && bt.updateCamera(e),
                (e = bt.getCamera())),
              !0 === t.isScene && t.onBeforeRender(v, t, e, E),
              (f = st.get(t, _.length)),
              f.init(),
              _.push(f),
              G.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
              O.setFromProjectionMatrix(G),
              (z = this.localClippingEnabled),
              (F = ot.init(this.clippingPlanes, z, e)),
              (p = at.get(t, g.length)),
              p.init(),
              g.push(p),
              Ut(t, e, 0, v.sortObjects),
              p.finish(),
              !0 === v.sortObjects && p.sort(D, P),
              !0 === F && ot.beginShadows();
            const n = f.state.shadowsArray;
            if (
              (lt.render(n, t, e),
              !0 === F && ot.endShadows(),
              !0 === this.info.autoReset && this.info.reset(),
              ct.render(p, t),
              f.setupLights(v.physicallyCorrectLights),
              e.isArrayCamera)
            ) {
              const n = e.cameras;
              for (let e = 0, i = n.length; e < i; e++) {
                const i = n[e];
                Nt(p, t, i, i.viewport);
              }
            } else Nt(p, t, e);
            null !== E &&
              (J.updateMultisampleRenderTarget(E),
              J.updateRenderTargetMipmap(E)),
              !0 === t.isScene && t.onAfterRender(v, t, e),
              ft.resetDefaultState(),
              (S = -1),
              (b = null),
              _.pop(),
              (f = _.length > 0 ? _[_.length - 1] : null),
              g.pop(),
              (p = g.length > 0 ? g[g.length - 1] : null);
          }),
          (this.getActiveCubeFace = function () {
            return M;
          }),
          (this.getActiveMipmapLevel = function () {
            return y;
          }),
          (this.getRenderTarget = function () {
            return E;
          }),
          (this.setRenderTargetTextures = function (t, e, n) {
            (K.get(t.texture).__webglTexture = e),
              (K.get(t.depthTexture).__webglTexture = n);
            const i = K.get(t);
            (i.__hasExternalTextures = !0),
              i.__hasExternalTextures &&
                ((i.__autoAllocateDepthBuffer = void 0 === n),
                i.__autoAllocateDepthBuffer ||
                  (!0 === q.has("WEBGL_multisampled_render_to_texture") &&
                    (console.warn(
                      "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                    ),
                    (i.__useRenderToTexture = !1))));
          }),
          (this.setRenderTargetFramebuffer = function (t, e) {
            const n = K.get(t);
            (n.__webglFramebuffer = e),
              (n.__useDefaultFramebuffer = void 0 === e);
          }),
          (this.setRenderTarget = function (t, e = 0, n = 0) {
            (E = t), (M = e), (y = n);
            let i = !0,
              r = null,
              a = !1,
              s = !1;
            if (t) {
              const n = K.get(t);
              void 0 !== n.__useDefaultFramebuffer
                ? (Y.bindFramebuffer(Mt.FRAMEBUFFER, null), (i = !1))
                : void 0 === n.__webglFramebuffer
                ? J.setupRenderTarget(t)
                : n.__hasExternalTextures &&
                  J.rebindTextures(
                    t,
                    K.get(t.texture).__webglTexture,
                    K.get(t.depthTexture).__webglTexture
                  );
              const o = t.texture;
              (o.isData3DTexture ||
                o.isDataArrayTexture ||
                o.isCompressedArrayTexture) &&
                (s = !0);
              const l = K.get(t).__webglFramebuffer;
              t.isWebGLCubeRenderTarget
                ? ((r = l[e]), (a = !0))
                : (r =
                    j.isWebGL2 &&
                    t.samples > 0 &&
                    !1 === J.useMultisampledRTT(t)
                      ? K.get(t).__webglMultisampledFramebuffer
                      : l),
                T.copy(t.viewport),
                w.copy(t.scissor),
                (A = t.scissorTest);
            } else
              T.copy(I).multiplyScalar(L).floor(),
                w.copy(U).multiplyScalar(L).floor(),
                (A = N);
            if (
              (Y.bindFramebuffer(Mt.FRAMEBUFFER, r) &&
                j.drawBuffers &&
                i &&
                Y.drawBuffers(t, r),
              Y.viewport(T),
              Y.scissor(w),
              Y.setScissorTest(A),
              a)
            ) {
              const i = K.get(t.texture);
              Mt.framebufferTexture2D(
                Mt.FRAMEBUFFER,
                Mt.COLOR_ATTACHMENT0,
                Mt.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                i.__webglTexture,
                n
              );
            } else if (s) {
              const i = K.get(t.texture),
                r = e || 0;
              Mt.framebufferTextureLayer(
                Mt.FRAMEBUFFER,
                Mt.COLOR_ATTACHMENT0,
                i.__webglTexture,
                n || 0,
                r
              );
            }
            S = -1;
          }),
          (this.readRenderTargetPixels = function (t, e, n, i, r, a, s) {
            if (!t || !t.isWebGLRenderTarget)
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
              );
            let o = K.get(t).__webglFramebuffer;
            if ((t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o)) {
              Y.bindFramebuffer(Mt.FRAMEBUFFER, o);
              try {
                const s = t.texture,
                  o = s.format,
                  l = s.type;
                if (
                  o !== yt &&
                  pt.convert(o) !==
                    Mt.getParameter(Mt.IMPLEMENTATION_COLOR_READ_FORMAT)
                )
                  return void console.error(
                    "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                  );
                const c =
                  l === xt &&
                  (q.has("EXT_color_buffer_half_float") ||
                    (j.isWebGL2 && q.has("EXT_color_buffer_float")));
                if (
                  !(
                    l === gt ||
                    pt.convert(l) ===
                      Mt.getParameter(Mt.IMPLEMENTATION_COLOR_READ_TYPE) ||
                    (l === vt &&
                      (j.isWebGL2 ||
                        q.has("OES_texture_float") ||
                        q.has("WEBGL_color_buffer_float"))) ||
                    c
                  )
                )
                  return void console.error(
                    "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                  );
                e >= 0 &&
                  e <= t.width - i &&
                  n >= 0 &&
                  n <= t.height - r &&
                  Mt.readPixels(e, n, i, r, pt.convert(o), pt.convert(l), a);
              } finally {
                const t = null !== E ? K.get(E).__webglFramebuffer : null;
                Y.bindFramebuffer(Mt.FRAMEBUFFER, t);
              }
            }
          }),
          (this.copyFramebufferToTexture = function (t, e, n = 0) {
            const i = Math.pow(2, -n),
              r = Math.floor(e.image.width * i),
              a = Math.floor(e.image.height * i);
            J.setTexture2D(e, 0),
              Mt.copyTexSubImage2D(Mt.TEXTURE_2D, n, 0, 0, t.x, t.y, r, a),
              Y.unbindTexture();
          }),
          (this.copyTextureToTexture = function (t, e, n, i = 0) {
            const r = e.image.width,
              a = e.image.height,
              s = pt.convert(n.format),
              o = pt.convert(n.type);
            J.setTexture2D(n, 0),
              Mt.pixelStorei(Mt.UNPACK_FLIP_Y_WEBGL, n.flipY),
              Mt.pixelStorei(
                Mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                n.premultiplyAlpha
              ),
              Mt.pixelStorei(Mt.UNPACK_ALIGNMENT, n.unpackAlignment),
              e.isDataTexture
                ? Mt.texSubImage2D(
                    Mt.TEXTURE_2D,
                    i,
                    t.x,
                    t.y,
                    r,
                    a,
                    s,
                    o,
                    e.image.data
                  )
                : e.isCompressedTexture
                ? Mt.compressedTexSubImage2D(
                    Mt.TEXTURE_2D,
                    i,
                    t.x,
                    t.y,
                    e.mipmaps[0].width,
                    e.mipmaps[0].height,
                    s,
                    e.mipmaps[0].data
                  )
                : Mt.texSubImage2D(Mt.TEXTURE_2D, i, t.x, t.y, s, o, e.image),
              0 === i && n.generateMipmaps && Mt.generateMipmap(Mt.TEXTURE_2D),
              Y.unbindTexture();
          }),
          (this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
            if (v.isWebGL1Renderer)
              return void console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
              );
            const a = t.max.x - t.min.x + 1,
              s = t.max.y - t.min.y + 1,
              o = t.max.z - t.min.z + 1,
              l = pt.convert(i.format),
              c = pt.convert(i.type);
            let u;
            if (i.isData3DTexture) J.setTexture3D(i, 0), (u = Mt.TEXTURE_3D);
            else {
              if (!i.isDataArrayTexture)
                return void console.warn(
                  "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
                );
              J.setTexture2DArray(i, 0), (u = Mt.TEXTURE_2D_ARRAY);
            }
            Mt.pixelStorei(Mt.UNPACK_FLIP_Y_WEBGL, i.flipY),
              Mt.pixelStorei(
                Mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                i.premultiplyAlpha
              ),
              Mt.pixelStorei(Mt.UNPACK_ALIGNMENT, i.unpackAlignment);
            const h = Mt.getParameter(Mt.UNPACK_ROW_LENGTH),
              d = Mt.getParameter(Mt.UNPACK_IMAGE_HEIGHT),
              p = Mt.getParameter(Mt.UNPACK_SKIP_PIXELS),
              f = Mt.getParameter(Mt.UNPACK_SKIP_ROWS),
              m = Mt.getParameter(Mt.UNPACK_SKIP_IMAGES),
              g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
            Mt.pixelStorei(Mt.UNPACK_ROW_LENGTH, g.width),
              Mt.pixelStorei(Mt.UNPACK_IMAGE_HEIGHT, g.height),
              Mt.pixelStorei(Mt.UNPACK_SKIP_PIXELS, t.min.x),
              Mt.pixelStorei(Mt.UNPACK_SKIP_ROWS, t.min.y),
              Mt.pixelStorei(Mt.UNPACK_SKIP_IMAGES, t.min.z),
              n.isDataTexture || n.isData3DTexture
                ? Mt.texSubImage3D(u, r, e.x, e.y, e.z, a, s, o, l, c, g.data)
                : n.isCompressedArrayTexture
                ? (console.warn(
                    "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
                  ),
                  Mt.compressedTexSubImage3D(
                    u,
                    r,
                    e.x,
                    e.y,
                    e.z,
                    a,
                    s,
                    o,
                    l,
                    g.data
                  ))
                : Mt.texSubImage3D(u, r, e.x, e.y, e.z, a, s, o, l, c, g),
              Mt.pixelStorei(Mt.UNPACK_ROW_LENGTH, h),
              Mt.pixelStorei(Mt.UNPACK_IMAGE_HEIGHT, d),
              Mt.pixelStorei(Mt.UNPACK_SKIP_PIXELS, p),
              Mt.pixelStorei(Mt.UNPACK_SKIP_ROWS, f),
              Mt.pixelStorei(Mt.UNPACK_SKIP_IMAGES, m),
              0 === r && i.generateMipmaps && Mt.generateMipmap(u),
              Y.unbindTexture();
          }),
          (this.initTexture = function (t) {
            t.isCubeTexture
              ? J.setTextureCube(t, 0)
              : t.isData3DTexture
              ? J.setTexture3D(t, 0)
              : t.isDataArrayTexture || t.isCompressedArrayTexture
              ? J.setTexture2DArray(t, 0)
              : J.setTexture2D(t, 0),
              Y.unbindTexture();
          }),
          (this.resetState = function () {
            (M = 0), (y = 0), (E = null), Y.reset(), ft.reset();
          }),
          "undefined" != typeof __THREE_DEVTOOLS__ &&
            __THREE_DEVTOOLS__.dispatchEvent(
              new CustomEvent("observe", { detail: this })
            );
      }
      class ha extends H {
        constructor() {
          super(),
            (this.isScene = !0),
            (this.type = "Scene"),
            (this.background = null),
            (this.environment = null),
            (this.fog = null),
            (this.backgroundBlurriness = 0),
            (this.overrideMaterial = null),
            "undefined" != typeof __THREE_DEVTOOLS__ &&
              __THREE_DEVTOOLS__.dispatchEvent(
                new CustomEvent("observe", { detail: this })
              );
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            null !== t.background && (this.background = t.background.clone()),
            null !== t.environment &&
              (this.environment = t.environment.clone()),
            null !== t.fog && (this.fog = t.fog.clone()),
            (this.backgroundBlurriness = t.backgroundBlurriness),
            null !== t.overrideMaterial &&
              (this.overrideMaterial = t.overrideMaterial.clone()),
            (this.matrixAutoUpdate = t.matrixAutoUpdate),
            this
          );
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return (
            null !== this.fog && (e.object.fog = this.fog.toJSON()),
            this.backgroundBlurriness > 0 &&
              (e.backgroundBlurriness = this.backgroundBlurriness),
            e
          );
        }
        get autoUpdate() {
          return (
            console.warn(
              "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
            ),
            this.matrixWorldAutoUpdate
          );
        }
        set autoUpdate(t) {
          console.warn(
            "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
          ),
            (this.matrixWorldAutoUpdate = t);
        }
      }
      const da = () => ({
          innerWidth: Number(
            window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth
          ),
          innerHeight: Number(
            window.innerHeight ||
              document.documentElement.clientHeight ||
              document.body.clientHeight
          ),
        }),
        pa = (t) => Math.floor(Math.random() * t),
        fa = async () => {
          const t = new Image(),
            e = new zn();
          return (
            await new Promise((n) => {
              (t.onload = function () {
                (e.image = t), (e.needsUpdate = !0), n(1);
              }),
                t.setAttribute(
                  "src",
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABJVJREFUWEe9V+1O60gMtSefJVnaB+BHfxTxAOX94AHpE1DpIvECpSTc5suzOrPjaJoGBKu7O5I1bSg5x8ce28P0w/X4+GgeHh6i/X5vNpsNv7y80Hq9trvdTrbb7cDM8pNX8nd+bK01RJQSUUJEsTc80/+3RATg3ltHRO13yHxJwFqLv+dElNV1nRVFAQKwqGmaKMuykMBARDCAwxoYM5+ICARn16cErLUAWnhzJDy4qhBNFAA4FAgJAPw3jJnx/GLNErDWAuzK26Jt20WapniW9n2fxnEc930fxXHMfQ9M5+GAx5Ae1rZtk6apAyeij/1+/3F7ewtVztYFAQ9eEJEaiEABVQG5gDyAAsgDLMRfFQABAMF72AcR1WrMfEbijICXvSQiNZBQJZSEJuMcAZd8E3AlUBFRtdvtqvv7+zEcIwGfcH8RkdqUBPIhzAWoECqg8VfvnfTecwdORO9qzOwScyTw+vq6uLm5uQaBruuukyQBAZAJQ7EQEZBwYTDGGBF37N0RNMao9yP4MAx1FEXvXddVSZIc67p+L4riyMz4zT8E/DkH+JKIHIlgnyqhKmge4BUaf/V+zvOj9x77GxGBhCiBvK7rZRzHyyzLQCA0FxIRKY0xVyJyZYzJRCSFAkESavIBHBZKDlBnTdMcsywDgTfUCCUAEHg/tZBIqISqgERUBdR7ZLzGfAT2XjtgNWZ+Z1/bl6fTaZXn+bLv+xWUUDIisjTGXIuICw0zl8x8Za3NmRlhQAh7eGOt/bDWOs+NMQp+BkpEB0/A7eyP3soDYg8/g4h+n6qB44lkxIL8KvvU6zNAT2B8BgKocKumaVZZlq0CBRwZEVkZY5a6W2uXzHxtrYUaCAUWCg6OmCYYvA6B8fnQ9/2btfaQJIn7DgMBvEQ9/2pXNUKVoAqWAo8vDmQOn1185l+/fuXr9XrVtu0qTVNVQD13OwhChQlRPbKOgLUWWT0CiMibMeYgIgfswzAcoig6dF3nFKjr+lAUhVPAhWDm5eGzMBfCWvGjEMypwk9PT8nd3d2qLEsHMskBF3skKE5CUB9wJF0SWmuJmS+SUESOxphpLuj3Q1VVb2VZOgVQTEIPNevDmqDgqBcKDu/dMfRzgHY+LUDfO4b+HH9ZiFADjDGuEIlIYYyZLUQicjLGuEIkIlVQC8LTcV6IPAG8UD2eLcWB55DeDSeTbvitUhwe1bAUIwyuGbVte52m6bebEbqhMWYQEXTDxqvwaTM6nU7HPM/Pm5FXAf0+7ISz7djPBDoVTeeBi3bs5wEUKeTG2BHP2rFPJCTkxUAyDEMRRRFknx1IvAI6kus0fBqG4XcURR9939dxHFdt21Zpmn4+kHgVMPH+pyMZlAgn5Iuh9Pn5OdtsNuNQ2nXdVZIk/89Q6kOB9no2lnv5NfPDqXh6MRnHcj8Zj2M5uuV0Ih5HMgUOd1TI7Xa7qOt6EUURen+WZZnejOKu66IkSbjr3IBrkyQZLyZN03TW2ibP8393MQmUGK9mk5sRJqG5m9HF1QytWifgOUf/2OW0qiopy/LPXk7nGPveoZeS6e34x9fzvwHJ1s9TzK7F8QAAAABJRU5ErkJggg=="
                );
            }),
            e
          );
        };
      var ma = {
          update: null,
          begin: null,
          loopBegin: null,
          changeBegin: null,
          change: null,
          changeComplete: null,
          loopComplete: null,
          complete: null,
          loop: 1,
          direction: "normal",
          autoplay: !0,
          timelineOffset: 0,
        },
        ga = {
          duration: 1e3,
          delay: 0,
          endDelay: 0,
          easing: "easeOutElastic(1, .5)",
          round: 0,
        },
        _a = [
          "translateX",
          "translateY",
          "translateZ",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "scale",
          "scaleX",
          "scaleY",
          "scaleZ",
          "skew",
          "skewX",
          "skewY",
          "perspective",
          "matrix",
          "matrix3d",
        ],
        va = { CSS: {}, springs: {} };
      function xa(t, e, n) {
        return Math.min(Math.max(t, e), n);
      }
      function Ma(t, e) {
        return t.indexOf(e) > -1;
      }
      function ya(t, e) {
        return t.apply(null, e);
      }
      var Ea = {
        arr: function (t) {
          return Array.isArray(t);
        },
        obj: function (t) {
          return Ma(Object.prototype.toString.call(t), "Object");
        },
        pth: function (t) {
          return Ea.obj(t) && t.hasOwnProperty("totalLength");
        },
        svg: function (t) {
          return t instanceof SVGElement;
        },
        inp: function (t) {
          return t instanceof HTMLInputElement;
        },
        dom: function (t) {
          return t.nodeType || Ea.svg(t);
        },
        str: function (t) {
          return "string" == typeof t;
        },
        fnc: function (t) {
          return "function" == typeof t;
        },
        und: function (t) {
          return void 0 === t;
        },
        nil: function (t) {
          return Ea.und(t) || null === t;
        },
        hex: function (t) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
        },
        rgb: function (t) {
          return /^rgb/.test(t);
        },
        hsl: function (t) {
          return /^hsl/.test(t);
        },
        col: function (t) {
          return Ea.hex(t) || Ea.rgb(t) || Ea.hsl(t);
        },
        key: function (t) {
          return (
            !ma.hasOwnProperty(t) &&
            !ga.hasOwnProperty(t) &&
            "targets" !== t &&
            "keyframes" !== t
          );
        },
      };
      function Sa(t) {
        var e = /\(([^)]+)\)/.exec(t);
        return e
          ? e[1].split(",").map(function (t) {
              return parseFloat(t);
            })
          : [];
      }
      function ba(t, e) {
        var n = Sa(t),
          i = xa(Ea.und(n[0]) ? 1 : n[0], 0.1, 100),
          r = xa(Ea.und(n[1]) ? 100 : n[1], 0.1, 100),
          a = xa(Ea.und(n[2]) ? 10 : n[2], 0.1, 100),
          s = xa(Ea.und(n[3]) ? 0 : n[3], 0.1, 100),
          o = Math.sqrt(r / i),
          l = a / (2 * Math.sqrt(r * i)),
          c = l < 1 ? o * Math.sqrt(1 - l * l) : 0,
          u = l < 1 ? (l * o - s) / c : -s + o;
        function h(t) {
          var n = e ? (e * t) / 1e3 : t;
          return (
            (n =
              l < 1
                ? Math.exp(-n * l * o) *
                  (1 * Math.cos(c * n) + u * Math.sin(c * n))
                : (1 + u * n) * Math.exp(-n * o)),
            0 === t || 1 === t ? t : 1 - n
          );
        }
        return e
          ? h
          : function () {
              var e = va.springs[t];
              if (e) return e;
              for (var n = 1 / 6, i = 0, r = 0; ; )
                if (1 === h((i += n))) {
                  if (++r >= 16) break;
                } else r = 0;
              var a = i * n * 1e3;
              return (va.springs[t] = a), a;
            };
      }
      function Ta(t) {
        return (
          void 0 === t && (t = 10),
          function (e) {
            return Math.ceil(xa(e, 1e-6, 1) * t) * (1 / t);
          }
        );
      }
      var wa,
        Aa,
        Ra = (function () {
          var t = 0.1;
          function e(t, e) {
            return 1 - 3 * e + 3 * t;
          }
          function n(t, e) {
            return 3 * e - 6 * t;
          }
          function i(t) {
            return 3 * t;
          }
          function r(t, r, a) {
            return ((e(r, a) * t + n(r, a)) * t + i(r)) * t;
          }
          function a(t, r, a) {
            return 3 * e(r, a) * t * t + 2 * n(r, a) * t + i(r);
          }
          return function (e, n, i, s) {
            if (0 <= e && e <= 1 && 0 <= i && i <= 1) {
              var o = new Float32Array(11);
              if (e !== n || i !== s)
                for (var l = 0; l < 11; ++l) o[l] = r(l * t, e, i);
              return function (l) {
                return (e === n && i === s) || 0 === l || 1 === l
                  ? l
                  : r(
                      (function (n) {
                        for (var s = 0, l = 1; 10 !== l && o[l] <= n; ++l)
                          s += t;
                        --l;
                        var c = s + ((n - o[l]) / (o[l + 1] - o[l])) * t,
                          u = a(c, e, i);
                        return u >= 0.001
                          ? (function (t, e, n, i) {
                              for (var s = 0; s < 4; ++s) {
                                var o = a(e, n, i);
                                if (0 === o) return e;
                                e -= (r(e, n, i) - t) / o;
                              }
                              return e;
                            })(n, c, e, i)
                          : 0 === u
                          ? c
                          : (function (t, e, n, i, a) {
                              var s,
                                o,
                                l = 0;
                              do {
                                (s = r((o = e + (n - e) / 2), i, a) - t) > 0
                                  ? (n = o)
                                  : (e = o);
                              } while (Math.abs(s) > 1e-7 && ++l < 10);
                              return o;
                            })(n, s, s + t, e, i);
                      })(l),
                      n,
                      s
                    );
              };
            }
          };
        })(),
        Ca =
          ((wa = {
            linear: function () {
              return function (t) {
                return t;
              };
            },
          }),
          (Aa = {
            Sine: function () {
              return function (t) {
                return 1 - Math.cos((t * Math.PI) / 2);
              };
            },
            Circ: function () {
              return function (t) {
                return 1 - Math.sqrt(1 - t * t);
              };
            },
            Back: function () {
              return function (t) {
                return t * t * (3 * t - 2);
              };
            },
            Bounce: function () {
              return function (t) {
                for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11; );
                return (
                  1 / Math.pow(4, 3 - n) -
                  7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                );
              };
            },
            Elastic: function (t, e) {
              void 0 === t && (t = 1), void 0 === e && (e = 0.5);
              var n = xa(t, 1, 10),
                i = xa(e, 0.1, 2);
              return function (t) {
                return 0 === t || 1 === t
                  ? t
                  : -n *
                      Math.pow(2, 10 * (t - 1)) *
                      Math.sin(
                        ((t - 1 - (i / (2 * Math.PI)) * Math.asin(1 / n)) *
                          (2 * Math.PI)) /
                          i
                      );
              };
            },
          }),
          ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (t, e) {
            Aa[t] = function () {
              return function (t) {
                return Math.pow(t, e + 2);
              };
            };
          }),
          Object.keys(Aa).forEach(function (t) {
            var e = Aa[t];
            (wa["easeIn" + t] = e),
              (wa["easeOut" + t] = function (t, n) {
                return function (i) {
                  return 1 - e(t, n)(1 - i);
                };
              }),
              (wa["easeInOut" + t] = function (t, n) {
                return function (i) {
                  return i < 0.5
                    ? e(t, n)(2 * i) / 2
                    : 1 - e(t, n)(-2 * i + 2) / 2;
                };
              }),
              (wa["easeOutIn" + t] = function (t, n) {
                return function (i) {
                  return i < 0.5
                    ? (1 - e(t, n)(1 - 2 * i)) / 2
                    : (e(t, n)(2 * i - 1) + 1) / 2;
                };
              });
          }),
          wa);
      function La(t, e) {
        if (Ea.fnc(t)) return t;
        var n = t.split("(")[0],
          i = Ca[n],
          r = Sa(t);
        switch (n) {
          case "spring":
            return ba(t, e);
          case "cubicBezier":
            return ya(Ra, r);
          case "steps":
            return ya(Ta, r);
          default:
            return ya(i, r);
        }
      }
      function Da(t) {
        try {
          return document.querySelectorAll(t);
        } catch (t) {
          return;
        }
      }
      function Pa(t, e) {
        for (
          var n = t.length,
            i = arguments.length >= 2 ? arguments[1] : void 0,
            r = [],
            a = 0;
          a < n;
          a++
        )
          if (a in t) {
            var s = t[a];
            e.call(i, s, a, t) && r.push(s);
          }
        return r;
      }
      function Ia(t) {
        return t.reduce(function (t, e) {
          return t.concat(Ea.arr(e) ? Ia(e) : e);
        }, []);
      }
      function Ua(t) {
        return Ea.arr(t)
          ? t
          : (Ea.str(t) && (t = Da(t) || t),
            t instanceof NodeList || t instanceof HTMLCollection
              ? [].slice.call(t)
              : [t]);
      }
      function Na(t, e) {
        return t.some(function (t) {
          return t === e;
        });
      }
      function Oa(t) {
        var e = {};
        for (var n in t) e[n] = t[n];
        return e;
      }
      function Fa(t, e) {
        var n = Oa(t);
        for (var i in t) n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
        return n;
      }
      function za(t, e) {
        var n = Oa(t);
        for (var i in e) n[i] = Ea.und(t[i]) ? e[i] : t[i];
        return n;
      }
      function Ba(t) {
        var e =
          /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
            t
          );
        if (e) return e[1];
      }
      function Ga(t, e) {
        return Ea.fnc(t) ? t(e.target, e.id, e.total) : t;
      }
      function Ha(t, e) {
        return t.getAttribute(e);
      }
      function Va(t, e, n) {
        if (Na([n, "deg", "rad", "turn"], Ba(e))) return e;
        var i = va.CSS[e + n];
        if (!Ea.und(i)) return i;
        var r = document.createElement(t.tagName),
          a =
            t.parentNode && t.parentNode !== document
              ? t.parentNode
              : document.body;
        a.appendChild(r),
          (r.style.position = "absolute"),
          (r.style.width = 100 + n);
        var s = 100 / r.offsetWidth;
        a.removeChild(r);
        var o = s * parseFloat(e);
        return (va.CSS[e + n] = o), o;
      }
      function ka(t, e, n) {
        if (e in t.style) {
          var i = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            r = t.style[e] || getComputedStyle(t).getPropertyValue(i) || "0";
          return n ? Va(t, r, n) : r;
        }
      }
      function Wa(t, e) {
        return Ea.dom(t) &&
          !Ea.inp(t) &&
          (!Ea.nil(Ha(t, e)) || (Ea.svg(t) && t[e]))
          ? "attribute"
          : Ea.dom(t) && Na(_a, e)
          ? "transform"
          : Ea.dom(t) && "transform" !== e && ka(t, e)
          ? "css"
          : null != t[e]
          ? "object"
          : void 0;
      }
      function Xa(t) {
        if (Ea.dom(t)) {
          for (
            var e,
              n = t.style.transform || "",
              i = /(\w+)\(([^)]*)\)/g,
              r = new Map();
            (e = i.exec(n));

          )
            r.set(e[1], e[2]);
          return r;
        }
      }
      function qa(t, e, n, i) {
        switch (Wa(t, e)) {
          case "transform":
            return (function (t, e, n, i) {
              var r = Ma(e, "scale")
                  ? 1
                  : 0 +
                    (function (t) {
                      return Ma(t, "translate") || "perspective" === t
                        ? "px"
                        : Ma(t, "rotate") || Ma(t, "skew")
                        ? "deg"
                        : void 0;
                    })(e),
                a = Xa(t).get(e) || r;
              return (
                n && (n.transforms.list.set(e, a), (n.transforms.last = e)),
                i ? Va(t, a, i) : a
              );
            })(t, e, i, n);
          case "css":
            return ka(t, e, n);
          case "attribute":
            return Ha(t, e);
          default:
            return t[e] || 0;
        }
      }
      function ja(t, e) {
        var n = /^(\*=|\+=|-=)/.exec(t);
        if (!n) return t;
        var i = Ba(t) || 0,
          r = parseFloat(e),
          a = parseFloat(t.replace(n[0], ""));
        switch (n[0][0]) {
          case "+":
            return r + a + i;
          case "-":
            return r - a + i;
          case "*":
            return r * a + i;
        }
      }
      function Ya(t, e) {
        if (Ea.col(t))
          return (function (t) {
            return Ea.rgb(t)
              ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = t)))
                ? "rgba(" + n[1] + ",1)"
                : e
              : Ea.hex(t)
              ? (function (t) {
                  var e = t.replace(
                      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                      function (t, e, n, i) {
                        return e + e + n + n + i + i;
                      }
                    ),
                    n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                  return (
                    "rgba(" +
                    parseInt(n[1], 16) +
                    "," +
                    parseInt(n[2], 16) +
                    "," +
                    parseInt(n[3], 16) +
                    ",1)"
                  );
                })(t)
              : Ea.hsl(t)
              ? (function (t) {
                  var e,
                    n,
                    i,
                    r =
                      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
                      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                        t
                      ),
                    a = parseInt(r[1], 10) / 360,
                    s = parseInt(r[2], 10) / 100,
                    o = parseInt(r[3], 10) / 100,
                    l = r[4] || 1;
                  function c(t, e, n) {
                    return (
                      n < 0 && (n += 1),
                      n > 1 && (n -= 1),
                      n < 1 / 6
                        ? t + 6 * (e - t) * n
                        : n < 0.5
                        ? e
                        : n < 2 / 3
                        ? t + (e - t) * (2 / 3 - n) * 6
                        : t
                    );
                  }
                  if (0 == s) e = n = i = o;
                  else {
                    var u = o < 0.5 ? o * (1 + s) : o + s - o * s,
                      h = 2 * o - u;
                    (e = c(h, u, a + 1 / 3)),
                      (n = c(h, u, a)),
                      (i = c(h, u, a - 1 / 3));
                  }
                  return (
                    "rgba(" +
                    255 * e +
                    "," +
                    255 * n +
                    "," +
                    255 * i +
                    "," +
                    l +
                    ")"
                  );
                })(t)
              : void 0;
            var e, n;
          })(t);
        if (/\s/g.test(t)) return t;
        var n = Ba(t),
          i = n ? t.substr(0, t.length - n.length) : t;
        return e ? i + e : i;
      }
      function Za(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function Ka(t) {
        for (var e, n = t.points, i = 0, r = 0; r < n.numberOfItems; r++) {
          var a = n.getItem(r);
          r > 0 && (i += Za(e, a)), (e = a);
        }
        return i;
      }
      function Ja(t) {
        if (t.getTotalLength) return t.getTotalLength();
        switch (t.tagName.toLowerCase()) {
          case "circle":
            return (function (t) {
              return 2 * Math.PI * Ha(t, "r");
            })(t);
          case "rect":
            return (function (t) {
              return 2 * Ha(t, "width") + 2 * Ha(t, "height");
            })(t);
          case "line":
            return (function (t) {
              return Za(
                { x: Ha(t, "x1"), y: Ha(t, "y1") },
                { x: Ha(t, "x2"), y: Ha(t, "y2") }
              );
            })(t);
          case "polyline":
            return Ka(t);
          case "polygon":
            return (function (t) {
              var e = t.points;
              return Ka(t) + Za(e.getItem(e.numberOfItems - 1), e.getItem(0));
            })(t);
        }
      }
      function Qa(t, e) {
        var n = e || {},
          i =
            n.el ||
            (function (t) {
              for (var e = t.parentNode; Ea.svg(e) && Ea.svg(e.parentNode); )
                e = e.parentNode;
              return e;
            })(t),
          r = i.getBoundingClientRect(),
          a = Ha(i, "viewBox"),
          s = r.width,
          o = r.height,
          l = n.viewBox || (a ? a.split(" ") : [0, 0, s, o]);
        return {
          el: i,
          viewBox: l,
          x: l[0] / 1,
          y: l[1] / 1,
          w: s,
          h: o,
          vW: l[2],
          vH: l[3],
        };
      }
      function $a(t, e, n) {
        function i(n) {
          void 0 === n && (n = 0);
          var i = e + n >= 1 ? e + n : 0;
          return t.el.getPointAtLength(i);
        }
        var r = Qa(t.el, t.svg),
          a = i(),
          s = i(-1),
          o = i(1),
          l = n ? 1 : r.w / r.vW,
          c = n ? 1 : r.h / r.vH;
        switch (t.property) {
          case "x":
            return (a.x - r.x) * l;
          case "y":
            return (a.y - r.y) * c;
          case "angle":
            return (180 * Math.atan2(o.y - s.y, o.x - s.x)) / Math.PI;
        }
      }
      function ts(t, e) {
        var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
          i = Ya(Ea.pth(t) ? t.totalLength : t, e) + "";
        return {
          original: i,
          numbers: i.match(n) ? i.match(n).map(Number) : [0],
          strings: Ea.str(t) || e ? i.split(n) : [],
        };
      }
      function es(t) {
        return Pa(
          t ? Ia(Ea.arr(t) ? t.map(Ua) : Ua(t)) : [],
          function (t, e, n) {
            return n.indexOf(t) === e;
          }
        );
      }
      function ns(t) {
        var e = es(t);
        return e.map(function (t, n) {
          return {
            target: t,
            id: n,
            total: e.length,
            transforms: { list: Xa(t) },
          };
        });
      }
      function is(t, e) {
        var n = Oa(e);
        if (
          (/^spring/.test(n.easing) && (n.duration = ba(n.easing)), Ea.arr(t))
        ) {
          var i = t.length;
          2 !== i || Ea.obj(t[0])
            ? Ea.fnc(e.duration) || (n.duration = e.duration / i)
            : (t = { value: t });
        }
        var r = Ea.arr(t) ? t : [t];
        return r
          .map(function (t, n) {
            var i = Ea.obj(t) && !Ea.pth(t) ? t : { value: t };
            return (
              Ea.und(i.delay) && (i.delay = n ? 0 : e.delay),
              Ea.und(i.endDelay) &&
                (i.endDelay = n === r.length - 1 ? e.endDelay : 0),
              i
            );
          })
          .map(function (t) {
            return za(t, n);
          });
      }
      var rs = {
        css: function (t, e, n) {
          return (t.style[e] = n);
        },
        attribute: function (t, e, n) {
          return t.setAttribute(e, n);
        },
        object: function (t, e, n) {
          return (t[e] = n);
        },
        transform: function (t, e, n, i, r) {
          if ((i.list.set(e, n), e === i.last || r)) {
            var a = "";
            i.list.forEach(function (t, e) {
              a += e + "(" + t + ") ";
            }),
              (t.style.transform = a);
          }
        },
      };
      function as(t, e) {
        ns(t).forEach(function (t) {
          for (var n in e) {
            var i = Ga(e[n], t),
              r = t.target,
              a = Ba(i),
              s = qa(r, n, a, t),
              o = ja(Ya(i, a || Ba(s)), s),
              l = Wa(r, n);
            rs[l](r, n, o, t.transforms, !0);
          }
        });
      }
      function ss(t, e) {
        return Pa(
          Ia(
            t.map(function (t) {
              return e.map(function (e) {
                return (function (t, e) {
                  var n = Wa(t.target, e.name);
                  if (n) {
                    var i = (function (t, e) {
                        var n;
                        return t.tweens.map(function (i) {
                          var r = (function (t, e) {
                              var n = {};
                              for (var i in t) {
                                var r = Ga(t[i], e);
                                Ea.arr(r) &&
                                  1 ===
                                    (r = r.map(function (t) {
                                      return Ga(t, e);
                                    })).length &&
                                  (r = r[0]),
                                  (n[i] = r);
                              }
                              return (
                                (n.duration = parseFloat(n.duration)),
                                (n.delay = parseFloat(n.delay)),
                                n
                              );
                            })(i, e),
                            a = r.value,
                            s = Ea.arr(a) ? a[1] : a,
                            o = Ba(s),
                            l = qa(e.target, t.name, o, e),
                            c = n ? n.to.original : l,
                            u = Ea.arr(a) ? a[0] : c,
                            h = Ba(u) || Ba(l),
                            d = o || h;
                          return (
                            Ea.und(s) && (s = c),
                            (r.from = ts(u, d)),
                            (r.to = ts(ja(s, u), d)),
                            (r.start = n ? n.end : 0),
                            (r.end =
                              r.start + r.delay + r.duration + r.endDelay),
                            (r.easing = La(r.easing, r.duration)),
                            (r.isPath = Ea.pth(a)),
                            (r.isPathTargetInsideSVG =
                              r.isPath && Ea.svg(e.target)),
                            (r.isColor = Ea.col(r.from.original)),
                            r.isColor && (r.round = 1),
                            (n = r),
                            r
                          );
                        });
                      })(e, t),
                      r = i[i.length - 1];
                    return {
                      type: n,
                      property: e.name,
                      animatable: t,
                      tweens: i,
                      duration: r.end,
                      delay: i[0].delay,
                      endDelay: r.endDelay,
                    };
                  }
                })(t, e);
              });
            })
          ),
          function (t) {
            return !Ea.und(t);
          }
        );
      }
      function os(t, e) {
        var n = t.length,
          i = function (t) {
            return t.timelineOffset ? t.timelineOffset : 0;
          },
          r = {};
        return (
          (r.duration = n
            ? Math.max.apply(
                Math,
                t.map(function (t) {
                  return i(t) + t.duration;
                })
              )
            : e.duration),
          (r.delay = n
            ? Math.min.apply(
                Math,
                t.map(function (t) {
                  return i(t) + t.delay;
                })
              )
            : e.delay),
          (r.endDelay = n
            ? r.duration -
              Math.max.apply(
                Math,
                t.map(function (t) {
                  return i(t) + t.duration - t.endDelay;
                })
              )
            : e.endDelay),
          r
        );
      }
      var ls = 0,
        cs = [],
        us = (function () {
          var t;
          function e(n) {
            for (var i = cs.length, r = 0; r < i; ) {
              var a = cs[r];
              a.paused ? (cs.splice(r, 1), i--) : (a.tick(n), r++);
            }
            t = r > 0 ? requestAnimationFrame(e) : void 0;
          }
          return (
            "undefined" != typeof document &&
              document.addEventListener("visibilitychange", function () {
                ds.suspendWhenDocumentHidden &&
                  (hs()
                    ? (t = cancelAnimationFrame(t))
                    : (cs.forEach(function (t) {
                        return t._onDocumentVisibility();
                      }),
                      us()));
              }),
            function () {
              t ||
                (hs() && ds.suspendWhenDocumentHidden) ||
                !(cs.length > 0) ||
                (t = requestAnimationFrame(e));
            }
          );
        })();
      function hs() {
        return !!document && document.hidden;
      }
      function ds(t) {
        void 0 === t && (t = {});
        var e,
          n = 0,
          i = 0,
          r = 0,
          a = 0,
          s = null;
        function o(t) {
          var e =
            window.Promise &&
            new Promise(function (t) {
              return (s = t);
            });
          return (t.finished = e), e;
        }
        var l = (function (t) {
          var e = Fa(ma, t),
            n = Fa(ga, t),
            i = (function (t, e) {
              var n = [],
                i = e.keyframes;
              for (var r in (i &&
                (e = za(
                  (function (t) {
                    for (
                      var e = Pa(
                          Ia(
                            t.map(function (t) {
                              return Object.keys(t);
                            })
                          ),
                          function (t) {
                            return Ea.key(t);
                          }
                        ).reduce(function (t, e) {
                          return t.indexOf(e) < 0 && t.push(e), t;
                        }, []),
                        n = {},
                        i = function (i) {
                          var r = e[i];
                          n[r] = t.map(function (t) {
                            var e = {};
                            for (var n in t)
                              Ea.key(n)
                                ? n == r && (e.value = t[n])
                                : (e[n] = t[n]);
                            return e;
                          });
                        },
                        r = 0;
                      r < e.length;
                      r++
                    )
                      i(r);
                    return n;
                  })(i),
                  e
                )),
              e))
                Ea.key(r) && n.push({ name: r, tweens: is(e[r], t) });
              return n;
            })(n, t),
            r = ns(t.targets),
            a = ss(r, i),
            s = os(a, n),
            o = ls;
          return (
            ls++,
            za(e, {
              id: o,
              children: [],
              animatables: r,
              animations: a,
              duration: s.duration,
              delay: s.delay,
              endDelay: s.endDelay,
            })
          );
        })(t);
        function c() {
          var t = l.direction;
          "alternate" !== t &&
            (l.direction = "normal" !== t ? "normal" : "reverse"),
            (l.reversed = !l.reversed),
            e.forEach(function (t) {
              return (t.reversed = l.reversed);
            });
        }
        function u(t) {
          return l.reversed ? l.duration - t : t;
        }
        function h() {
          (n = 0), (i = u(l.currentTime) * (1 / ds.speed));
        }
        function d(t, e) {
          e && e.seek(t - e.timelineOffset);
        }
        function p(t) {
          for (var e = 0, n = l.animations, i = n.length; e < i; ) {
            var r = n[e],
              a = r.animatable,
              s = r.tweens,
              o = s.length - 1,
              c = s[o];
            o &&
              (c =
                Pa(s, function (e) {
                  return t < e.end;
                })[0] || c);
            for (
              var u = xa(t - c.start - c.delay, 0, c.duration) / c.duration,
                h = isNaN(u) ? 1 : c.easing(u),
                d = c.to.strings,
                p = c.round,
                f = [],
                m = c.to.numbers.length,
                g = void 0,
                _ = 0;
              _ < m;
              _++
            ) {
              var v = void 0,
                x = c.to.numbers[_],
                M = c.from.numbers[_] || 0;
              (v = c.isPath
                ? $a(c.value, h * x, c.isPathTargetInsideSVG)
                : M + h * (x - M)),
                p && ((c.isColor && _ > 2) || (v = Math.round(v * p) / p)),
                f.push(v);
            }
            var y = d.length;
            if (y) {
              g = d[0];
              for (var E = 0; E < y; E++) {
                d[E];
                var S = d[E + 1],
                  b = f[E];
                isNaN(b) || (g += S ? b + S : b + " ");
              }
            } else g = f[0];
            rs[r.type](a.target, r.property, g, a.transforms),
              (r.currentValue = g),
              e++;
          }
        }
        function f(t) {
          l[t] && !l.passThrough && l[t](l);
        }
        function m(t) {
          var h = l.duration,
            m = l.delay,
            g = h - l.endDelay,
            _ = u(t);
          (l.progress = xa((_ / h) * 100, 0, 100)),
            (l.reversePlayback = _ < l.currentTime),
            e &&
              (function (t) {
                if (l.reversePlayback) for (var n = a; n--; ) d(t, e[n]);
                else for (var i = 0; i < a; i++) d(t, e[i]);
              })(_),
            !l.began && l.currentTime > 0 && ((l.began = !0), f("begin")),
            !l.loopBegan &&
              l.currentTime > 0 &&
              ((l.loopBegan = !0), f("loopBegin")),
            _ <= m && 0 !== l.currentTime && p(0),
            ((_ >= g && l.currentTime !== h) || !h) && p(h),
            _ > m && _ < g
              ? (l.changeBegan ||
                  ((l.changeBegan = !0),
                  (l.changeCompleted = !1),
                  f("changeBegin")),
                f("change"),
                p(_))
              : l.changeBegan &&
                ((l.changeCompleted = !0),
                (l.changeBegan = !1),
                f("changeComplete")),
            (l.currentTime = xa(_, 0, h)),
            l.began && f("update"),
            t >= h &&
              ((i = 0),
              l.remaining && !0 !== l.remaining && l.remaining--,
              l.remaining
                ? ((n = r),
                  f("loopComplete"),
                  (l.loopBegan = !1),
                  "alternate" === l.direction && c())
                : ((l.paused = !0),
                  l.completed ||
                    ((l.completed = !0),
                    f("loopComplete"),
                    f("complete"),
                    !l.passThrough && "Promise" in window && (s(), o(l)))));
        }
        return (
          o(l),
          (l.reset = function () {
            var t = l.direction;
            (l.passThrough = !1),
              (l.currentTime = 0),
              (l.progress = 0),
              (l.paused = !0),
              (l.began = !1),
              (l.loopBegan = !1),
              (l.changeBegan = !1),
              (l.completed = !1),
              (l.changeCompleted = !1),
              (l.reversePlayback = !1),
              (l.reversed = "reverse" === t),
              (l.remaining = l.loop),
              (e = l.children);
            for (var n = (a = e.length); n--; ) l.children[n].reset();
            ((l.reversed && !0 !== l.loop) ||
              ("alternate" === t && 1 === l.loop)) &&
              l.remaining++,
              p(l.reversed ? l.duration : 0);
          }),
          (l._onDocumentVisibility = h),
          (l.set = function (t, e) {
            return as(t, e), l;
          }),
          (l.tick = function (t) {
            (r = t), n || (n = r), m((r + (i - n)) * ds.speed);
          }),
          (l.seek = function (t) {
            m(u(t));
          }),
          (l.pause = function () {
            (l.paused = !0), h();
          }),
          (l.play = function () {
            l.paused &&
              (l.completed && l.reset(),
              (l.paused = !1),
              cs.push(l),
              h(),
              us());
          }),
          (l.reverse = function () {
            c(), (l.completed = !l.reversed), h();
          }),
          (l.restart = function () {
            l.reset(), l.play();
          }),
          (l.remove = function (t) {
            fs(es(t), l);
          }),
          l.reset(),
          l.autoplay && l.play(),
          l
        );
      }
      function ps(t, e) {
        for (var n = e.length; n--; )
          Na(t, e[n].animatable.target) && e.splice(n, 1);
      }
      function fs(t, e) {
        var n = e.animations,
          i = e.children;
        ps(t, n);
        for (var r = i.length; r--; ) {
          var a = i[r],
            s = a.animations;
          ps(t, s), s.length || a.children.length || i.splice(r, 1);
        }
        n.length || i.length || e.pause();
      }
      (ds.version = "3.2.1"),
        (ds.speed = 1),
        (ds.suspendWhenDocumentHidden = !0),
        (ds.running = cs),
        (ds.remove = function (t) {
          for (var e = es(t), n = cs.length; n--; ) fs(e, cs[n]);
        }),
        (ds.get = qa),
        (ds.set = as),
        (ds.convertPx = Va),
        (ds.path = function (t, e) {
          var n = Ea.str(t) ? Da(t)[0] : t,
            i = e || 100;
          return function (t) {
            return {
              property: t,
              el: n,
              svg: Qa(n),
              totalLength: Ja(n) * (i / 100),
            };
          };
        }),
        (ds.setDashoffset = function (t) {
          var e = Ja(t);
          return t.setAttribute("stroke-dasharray", e), e;
        }),
        (ds.stagger = function (t, e) {
          void 0 === e && (e = {});
          var n = e.direction || "normal",
            i = e.easing ? La(e.easing) : null,
            r = e.grid,
            a = e.axis,
            s = e.from || 0,
            o = "first" === s,
            l = "center" === s,
            c = "last" === s,
            u = Ea.arr(t),
            h = u ? parseFloat(t[0]) : parseFloat(t),
            d = u ? parseFloat(t[1]) : 0,
            p = Ba(u ? t[1] : t) || 0,
            f = e.start || 0 + (u ? h : 0),
            m = [],
            g = 0;
          return function (t, e, _) {
            if (
              (o && (s = 0),
              l && (s = (_ - 1) / 2),
              c && (s = _ - 1),
              !m.length)
            ) {
              for (var v = 0; v < _; v++) {
                if (r) {
                  var x = l ? (r[0] - 1) / 2 : s % r[0],
                    M = l ? (r[1] - 1) / 2 : Math.floor(s / r[0]),
                    y = x - (v % r[0]),
                    E = M - Math.floor(v / r[0]),
                    S = Math.sqrt(y * y + E * E);
                  "x" === a && (S = -y), "y" === a && (S = -E), m.push(S);
                } else m.push(Math.abs(s - v));
                g = Math.max.apply(Math, m);
              }
              i &&
                (m = m.map(function (t) {
                  return i(t / g) * g;
                })),
                "reverse" === n &&
                  (m = m.map(function (t) {
                    return a ? (t < 0 ? -1 * t : -t) : Math.abs(g - t);
                  }));
            }
            return (
              f + (u ? (d - h) / g : h) * (Math.round(100 * m[e]) / 100) + p
            );
          };
        }),
        (ds.timeline = function (t) {
          void 0 === t && (t = {});
          var e = ds(t);
          return (
            (e.duration = 0),
            (e.add = function (n, i) {
              var r = cs.indexOf(e),
                a = e.children;
              function s(t) {
                t.passThrough = !0;
              }
              r > -1 && cs.splice(r, 1);
              for (var o = 0; o < a.length; o++) s(a[o]);
              var l = za(n, Fa(ga, t));
              l.targets = l.targets || t.targets;
              var c = e.duration;
              (l.autoplay = !1),
                (l.direction = e.direction),
                (l.timelineOffset = Ea.und(i) ? c : ja(i, c)),
                s(e),
                e.seek(l.timelineOffset);
              var u = ds(l);
              s(u), a.push(u);
              var h = os(a, t);
              return (
                (e.delay = h.delay),
                (e.endDelay = h.endDelay),
                (e.duration = h.duration),
                e.seek(0),
                e.reset(),
                e.autoplay && e.play(),
                e
              );
            }),
            e
          );
        }),
        (ds.easing = La),
        (ds.penner = Ca),
        (ds.random = function (t, e) {
          return Math.floor(Math.random() * (e - t + 1)) + t;
        });
      var ms = ds;
      let gs = 0,
        _s = 0,
        vs = 0;
      window.addEventListener("wheel", () => {
        vs = Number(
          document.documentElement.scrollTop || document.body.scrollTop
        );
      }),
        document.addEventListener(
          "mousemove",
          (t) => {
            const { innerWidth: e, innerHeight: n } = da();
            (gs = t.clientX - e / 2), (_s = t.clientY - n / 2);
          },
          !1
        ),
        document.addEventListener(
          "touchstart",
          (t) => {
            if (1 == t.touches.length) {
              t.preventDefault();
              const { innerWidth: e, innerHeight: n } = da();
              (gs = t.touches[0].pageX - e / 2),
                (_s = t.touches[0].pageY - n / 2);
            }
          },
          !1
        ),
        document.addEventListener(
          "touchmove",
          (t) => {
            if (1 == t.touches.length) {
              t.preventDefault();
              const { innerWidth: e, innerHeight: n } = da();
              (gs = t.touches[0].pageX - e / 2),
                (_s = t.touches[0].pageY - n / 2);
            }
          },
          !1
        );
      const xs = () => ({ mouseX: gs, mouseY: _s, wheelY: vs }),
        Ms = () => {
          const { mouseX: t, mouseY: e, wheelY: n } = xs(),
            { innerWidth: i, innerHeight: r } = da(),
            a = (r / 2 - e) / r,
            s = (i / 2 - t) / i,
            o = Number(
              document.documentElement.scrollHeight ||
                document.body.scrollHeight
            );
          return {
            x: (i * s) / 4 - i / 8,
            y: (-1 * r * a) / 4 - (r * ((o / 2 - n) / o)) / 2 + r / 4,
          };
        };
      let ys = Ms();
      const Es = () => ys,
        Ss = {
          scene: void 0,
          camera: void 0,
          renderer: void 0,
          particles: void 0,
          bufferGeometry: void 0,
          container: void 0,
        },
        bs = { opacity: 0 },
        Ts = (t) => {
          ms({
            targets: bs,
            opacity: Number(t),
            duration: 2700,
            easing: "easeOutQuint",
            update: () => {
              const t = Ss.particles.geometry.attributes.opacity,
                e = t.count / 2;
              for (let n = 0; n < e; n++) t.setX(n, bs.opacity);
              Ss.particles.geometry.attributes.opacity.needsUpdate = !0;
            },
          });
        },
        ws = Math.PI / 180,
        As = (t, e, n) => {
          const i = e * ws,
            r = n * ws;
          let a,
            s = 0,
            o = (-3 * t) / 150,
            l = 0;
          return (
            (a = Math.sin(r)),
            (o *= Math.cos(i)),
            (s = s * Math.cos(r) - o * a * Math.sin(i)),
            (l = -a * s),
            [s, o, l]
          );
        },
        Rs = async (t) => {
          let { opacity: e } = t;
          const { particleLevel: n, speed: i, paused: r, stoped: a } = Is();
          if (r) return;
          const { innerWidth: s, innerHeight: o } = da(),
            l = Math.max(o, s) / 1.8;
          Ss.renderer.setPixelRatio(window.devicePixelRatio),
            Ss.renderer.setSize(s, o),
            (Ss.camera.aspect = s / o);
          {
            const t = ((s * o) / 1e5) * n,
              r = [],
              a = [],
              c = [];
            for (let n = 0; n < t; n++) {
              const t = pa(2 * s) - s,
                n = pa(2 * o) - o,
                u = pa(l);
              r.push(t, n, u),
                a.push(
                  ...As(
                    i,
                    (-65, 65, -65 + Math.floor(131 * Math.random())),
                    pa(270)
                  )
                ),
                c.push(e, 0);
            }
            const u = new Gt(c, 2);
            (u.normalized = !0),
              Ss.bufferGeometry.setAttribute("position", new Gt(r, 3)),
              Ss.bufferGeometry.setAttribute("velocity", new Gt(a, 3)),
              Ss.bufferGeometry.setAttribute("opacity", u);
          }
          const c = Es();
          Ss.camera.position.set(c.x, c.y, l),
            Ss.camera.updateProjectionMatrix();
        };
      let Cs,
        Ls = { speed: 50, particleLevel: 500, paused: !1, stoped: !1 },
        Ds = { ...Ls };
      const Ps = (t) => {
          (Ds = {
            ...Ls,
            ...(null != t && t.speed ? { speed: Number(t.speed) } : {}),
            ...(null != t && t.particleLevel
              ? { particleLevel: Number(t.particleLevel) }
              : {}),
            paused: (null == t ? void 0 : t.paused) || Ls.paused,
          }),
            (null != t && t.paused) || !Ds.stoped || (Ds.stoped = !1),
            Ds.paused &&
              Ss.container &&
              (Ts(0),
              (Cs = setTimeout(() => {
                (Ds.stoped = !0),
                  Ss.container.remove(),
                  (Ss.container = void 0);
              }, 3e3))),
            Rs({ opacity: 0 }),
            Ds.paused ||
              Ss.container ||
              ((Ss.container = (() => {
                const t = document.createElement("div");
                return (
                  (t.style.position = "fixed"),
                  (t.style.left = "0px"),
                  (t.style.right = "0px"),
                  (t.style.top = "0px"),
                  (t.style.pointerEvents = "none"),
                  (t.style.zIndex = "9999999"),
                  t
                );
              })()),
              Ss.container.appendChild(Ss.renderer.domElement),
              document.body.append(Ss.container),
              Vs(),
              Hs()),
            (null != t && t.paused) || (Cs && clearTimeout(Cs), Ts(1));
        },
        Is = () => ({ ...Ds }),
        Us = (t, e) => (t > e && (t -= 2 * e), t < -1 * e && (t += 2 * e), t);
      let Ns, Os, Fs, zs;
      const Bs = () => {
        const { stoped: t } = Is();
        if (t || !Ss.particles) return;
        const e = Ss.particles.geometry.attributes.position,
          n = Ss.particles.geometry.attributes.position.array,
          i = Ss.particles.geometry.attributes.velocity.array,
          r = Ss.camera.position.z,
          a = n.length / 3;
        for (let t = 0; t < a; t++) {
          let a = 3 * t;
          e.setXYZ(
            t,
            Us(n[a] + i[a], r),
            Us(n[a + 1] + i[a + 1], r),
            Us(n[a + 2] + i[a + 2], r)
          );
        }
        Ss.particles.geometry.attributes.position.needsUpdate = !0;
        const { mouseX: s, mouseY: o, wheelY: l } = xs();
        if (Ns !== s || Os !== o || Fs !== l) {
          const { x: t, y: e } = Ms();
          (zs = ms({
            targets: Es(),
            x: t,
            y: e,
            duration: 700,
            easing: "easeOutQuint",
            update: () => {
              const t = Es();
              (Ss.camera.position.x = t.x),
                (Ss.camera.position.y = t.y),
                Ss.camera.lookAt(Ss.scene.position);
            },
          })),
            (Ns = s),
            (Os = o),
            (Fs = l);
        }
        Ss.renderer.render(Ss.scene, Ss.camera), Hs();
      };
      let Gs;
      const Hs = () => (Gs = requestAnimationFrame(Bs)),
        Vs = () => Gs > 0 && cancelAnimationFrame(Gs);
      var ks = n(802),
        Ws = n.n(ks),
        Xs = n(769),
        qs = n.n(Xs);
      const js = (() => {
          const t = document.createElement("x");
          return (
            (t.style.cssText = "pointer-events:auto"),
            "auto" === t.style.pointerEvents
          );
        })(),
        Ys = (() => {
          try {
            const t = document.createElement("canvas");
            return !(
              !window.WebGLRenderingContext ||
              (!t.getContext("webgl") && !t.getContext("experimental-webgl"))
            );
          } catch (t) {
            return !1;
          }
        })(),
        Zs = () => {
          if (!js || !Ys)
            return (
              "Silent shutdown: not supported",
              void console.log("[Show3D] Silent shutdown: not supported")
            );
          !(async function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const { innerWidth: e, innerHeight: n } = da();
            (Ss.camera = new k(75, e / n, 1, 1e4)),
              (Ss.scene = new ha()),
              (Ss.renderer = new ua({ antialias: !0, alpha: !0 })),
              (Ss.bufferGeometry = new te()),
              Ss.renderer.setClearAlpha(0),
              Ps(t),
              Ss.camera.lookAt(Ss.scene.position);
            const i = await fa(),
              r = new oe({
                uniforms: { size: { value: 32 }, texture: { value: i } },
                vertexShader: qs(),
                fragmentShader: Ws(),
                transparent: !0,
                depthWrite: !1,
              });
            (Ss.particles = new Pe(Ss.bufferGeometry, r)),
              Ss.scene.add(Ss.particles),
              Hs(),
              window.addEventListener("resize", () => Rs({ opacity: 1 }));
          })();
        };
      "complete" === document.readyState ||
      "interactive" === document.readyState
        ? Zs()
        : document.addEventListener("DOMContentLoaded", Zs),
        (window.SNOW3D = {
          update: Ps,
          start: () => Ps({ paused: !1 }),
          stop: () => Ps({ paused: !0 }),
        });
    })();
})();
