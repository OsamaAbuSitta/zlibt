!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var i in r)("object"==typeof exports?exports:e)[i]=r[i]}}(window,(function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.USE_TYPEDARRAY=void 0,t.USE_TYPEDARRAY="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array&&"undefined"!=typeof DataView},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Zip=void 0;var i=r(4),n=r(2),a=r(0),s=function(){function e(e){this.files=[],e=e||{},this.files=[],this.comment=e.comment}return e.prototype.addFile=function(t,r){var i;r=r||{};var s=t.length,o=0;if(a.USE_TYPEDARRAY&&t instanceof Array&&(t=new Uint8Array(t)),"number"!=typeof r.compressionMethod&&(r.compressionMethod=e.CompressionMethod.DEFLATE),r.compress)switch(r.compressionMethod){case e.CompressionMethod.STORE:break;case e.CompressionMethod.DEFLATE:o=n.CRC32.calc(t),t=this.deflateWithOption(t,r),i=!0;break;default:throw new Error("unknown compression method:"+r.compressionMethod)}this.files.push({buffer:t,option:r,compressed:i,encrypted:!1,size:s,crc32:o})},e.prototype.setPassword=function(e){this.password=e},e.prototype.compress=function(){var t,r,i,s,o,f,u,h,l,c,p,d,y,b,A,g,E,m,T,w,R,D,S,Y,v,U,B=this.files,_=0,k=0;for(S=0,Y=B.length;S<Y;++S){if(b=(t=B[S]).option.filename?t.option.filename.length:0,A=t.option.extraField?t.option.extraField.length:0,g=t.option.comment?t.option.comment.length:0,!t.compressed)switch(t.crc32=n.CRC32.calc(t.buffer),t.option.compressionMethod){case e.CompressionMethod.STORE:break;case e.CompressionMethod.DEFLATE:t.buffer=this.deflateWithOption(t.buffer,t.option),t.compressed=!0;break;default:throw new Error("unknown compression method:"+t.option.compressionMethod)}if(void 0!==t.option.password||void 0!==this.password){for(D=e.createEncryptionKey(t.option.password||this.password),w=t.buffer,a.USE_TYPEDARRAY?((R=new Uint8Array(w.length+12)).set(w,12),w=R):w.unshift(0,0,0,0,0,0,0,0,0,0,0,0),v=0;v<12;++v)w[v]=this.encode(D,11===S?255&t.crc32:256*Math.random()|0);for(U=w.length;v<U;++v)w[v]=this.encode(D,w[v]);t.buffer=w}_+=30+b+t.buffer.length,k+=46+b+g}for(f=22+(this.comment?this.comment.length:0),r=new(a.USE_TYPEDARRAY?Uint8Array:Array)(_+k+f),i=0,o=(s=_)+k,S=0,Y=B.length;S<Y;++S){if(b=(t=B[S]).option.filename?t.option.filename.length:0,A=0,g=t.option.comment?t.option.comment.length:0,u=i,r[i++]=e.LocalFileHeaderSignature[0],r[i++]=e.LocalFileHeaderSignature[1],r[i++]=e.LocalFileHeaderSignature[2],r[i++]=e.LocalFileHeaderSignature[3],r[s++]=e.FileHeaderSignature[0],r[s++]=e.FileHeaderSignature[1],r[s++]=e.FileHeaderSignature[2],r[s++]=e.FileHeaderSignature[3],20,r[s++]=20,r[s++]=t.option.os||e.OperatingSystem.MSDOS,r[i++]=r[s++]=20,r[i++]=r[s++]=0,h=0,(t.option.password||this.password)&&(h|=e.Flags.ENCRYPT),r[i++]=r[s++]=255&h,r[i++]=r[s++]=h>>8&255,l=t.option.compressionMethod,r[i++]=r[s++]=255&l,r[i++]=r[s++]=l>>8&255,c=t.option.date||new Date,r[i++]=r[s++]=(7&c.getMinutes())<<5|c.getSeconds()/2|0,r[i++]=r[s++]=c.getHours()<<3|c.getMinutes()>>3,r[i++]=r[s++]=(c.getMonth()+1&7)<<5|c.getDate(),r[i++]=r[s++]=(c.getFullYear()-1980&127)<<1|c.getMonth()+1>>3,p=t.crc32,r[i++]=r[s++]=255&p,r[i++]=r[s++]=p>>8&255,r[i++]=r[s++]=p>>16&255,r[i++]=r[s++]=p>>24&255,d=t.buffer.length,r[i++]=r[s++]=255&d,r[i++]=r[s++]=d>>8&255,r[i++]=r[s++]=d>>16&255,r[i++]=r[s++]=d>>24&255,y=t.size,r[i++]=r[s++]=255&y,r[i++]=r[s++]=y>>8&255,r[i++]=r[s++]=y>>16&255,r[i++]=r[s++]=y>>24&255,r[i++]=r[s++]=255&b,r[i++]=r[s++]=b>>8&255,r[i++]=r[s++]=255&A,r[i++]=r[s++]=A>>8&255,r[s++]=255&g,r[s++]=g>>8&255,r[s++]=0,r[s++]=0,r[s++]=0,r[s++]=0,r[s++]=0,r[s++]=0,r[s++]=0,r[s++]=0,r[s++]=255&u,r[s++]=u>>8&255,r[s++]=u>>16&255,r[s++]=u>>24&255,E=t.option.filename)if(a.USE_TYPEDARRAY)r.set(E,i),r.set(E,s),i+=b,s+=b;else for(v=0;v<b;++v)r[i++]=r[s++]=E[v];if(m=t.option.extraField)if(a.USE_TYPEDARRAY)r.set(m,i),r.set(m,s),i+=A,s+=A;else for(v=0;v<g;++v)r[i++]=r[s++]=m[v];if(T=t.option.comment)if(a.USE_TYPEDARRAY)r.set(T,s),s+=g;else for(v=0;v<g;++v)r[s++]=T[v];if(a.USE_TYPEDARRAY)r.set(t.buffer,i),i+=t.buffer.length;else for(v=0,U=t.buffer.length;v<U;++v)r[i++]=t.buffer[v]}if(r[o++]=e.CentralDirectorySignature[0],r[o++]=e.CentralDirectorySignature[1],r[o++]=e.CentralDirectorySignature[2],r[o++]=e.CentralDirectorySignature[3],r[o++]=0,r[o++]=0,r[o++]=0,r[o++]=0,r[o++]=255&Y,r[o++]=Y>>8&255,r[o++]=255&Y,r[o++]=Y>>8&255,r[o++]=255&k,r[o++]=k>>8&255,r[o++]=k>>16&255,r[o++]=k>>24&255,r[o++]=255&_,r[o++]=_>>8&255,r[o++]=_>>16&255,r[o++]=_>>24&255,g=this.comment?this.comment.length:0,r[o++]=255&g,r[o++]=g>>8&255,this.comment)if(a.USE_TYPEDARRAY)r.set(this.comment,o),o+=g;else for(v=0,U=g;v<U;++v)r[o++]=this.comment[v];return r},e.prototype.deflateWithOption=function(e,t){return new i.RawDeflate(e,t.deflateOption).compress()},e.getByte=function(e){var t=65535&e[2]|2;return t*(1^t)>>8&255},e.prototype.encode=function(t,r){var i=e.getByte(t);return e.updateKeys(t,r),i^r},e.createEncryptionKey=function(t){for(var r=[305419896,591751049,878082192],i=0,n=t.length,s=a.USE_TYPEDARRAY?new Uint32Array(r):r;i<n;++i)e.updateKeys(s,255&t[i]);return s},e.Flags={ENCRYPT:1,DESCRIPTOR:8,UTF8:2048},e.CompressionMethod={STORE:0,DEFLATE:8},e.OperatingSystem={MSDOS:0,UNIX:3,MACINTOSH:7},e.FileHeaderSignature=[80,75,1,2],e.LocalFileHeaderSignature=[80,75,3,4],e.CentralDirectorySignature=[80,75,5,6],e.updateKeys=function(e,t){e[0]=n.CRC32.single(e[0],t),e[1]=1+(6681*(20173*(e[1]+(255&e[0]))>>>0)>>>0)>>>0,e[2]=n.CRC32.single(e[2],e[1]>>>24)},e}();t.Zip=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CRC32=t.ZLIB_CRC32_COMPACT=void 0;var i=r(0);t.ZLIB_CRC32_COMPACT=!1;var n=function(){function e(){}return e.calc=function(e,t,r){return this.update(e,0,t,r)},e.single=function(t,r){return(e.Table[255&(t^r)]^t>>>8)>>>0},Object.defineProperty(e,"Table",{get:function(){if(t.ZLIB_CRC32_COMPACT){var r=new(i.USE_TYPEDARRAY?Uint32Array:Array)(256),n=void 0,a=void 0,s=void 0;for(a=0;a<256;++a){for(n=a,s=0;s<8;++s)n=1&n?3988292384^n>>>1:n>>>1;r[a]=n>>>0}return r}return i.USE_TYPEDARRAY?new Uint32Array(e.Table_):e.Table_},enumerable:!1,configurable:!0}),e.update=function(t,r,i,n){var a=e.Table,s="number"==typeof i?i:i=0,o="number"==typeof n?n:t.length;for(r^=4294967295,s=7&o;s--;++i)r=r>>>8^a[255&(r^t[i])];for(s=o>>3;s--;i+=8)r=(r=(r=(r=(r=(r=(r=(r=r>>>8^a[255&(r^t[i])])>>>8^a[255&(r^t[i+1])])>>>8^a[255&(r^t[i+2])])>>>8^a[255&(r^t[i+3])])>>>8^a[255&(r^t[i+4])])>>>8^a[255&(r^t[i+5])])>>>8^a[255&(r^t[i+6])])>>>8^a[255&(r^t[i+7])];return(4294967295^r)>>>0},e.Table_=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],e}();t.CRC32=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Unzip=t.Zip=void 0;var i=r(1);Object.defineProperty(t,"Zip",{enumerable:!0,get:function(){return i.Zip}});var n=r(7);Object.defineProperty(t,"Unzip",{enumerable:!0,get:function(){return n.Unzip}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RawDeflate=t.Lz77Match=t.CompressionType=void 0;var i,n=r(0),a=r(5),s=r(6);!function(e){e[e.NONE=0]="NONE",e[e.FIXED=1]="FIXED",e[e.DYNAMIC=2]="DYNAMIC",e[e.RESERVED=3]="RESERVED"}(i=t.CompressionType||(t.CompressionType={}));var o=function(){function e(e,t){this.length=e,this.backwardDistance=t}return Object.defineProperty(e,"LengthCodeTable",{get:function(){var e=function(e){switch(!0){case 3===e:return[257,e-3,0];case 4===e:return[258,e-4,0];case 5===e:return[259,e-5,0];case 6===e:return[260,e-6,0];case 7===e:return[261,e-7,0];case 8===e:return[262,e-8,0];case 9===e:return[263,e-9,0];case 10===e:return[264,e-10,0];case e<=12:return[265,e-11,1];case e<=14:return[266,e-13,1];case e<=16:return[267,e-15,1];case e<=18:return[268,e-17,1];case e<=22:return[269,e-19,2];case e<=26:return[270,e-23,2];case e<=30:return[271,e-27,2];case e<=34:return[272,e-31,2];case e<=42:return[273,e-35,3];case e<=50:return[274,e-43,3];case e<=58:return[275,e-51,3];case e<=66:return[276,e-59,3];case e<=82:return[277,e-67,4];case e<=98:return[278,e-83,4];case e<=114:return[279,e-99,4];case e<=130:return[280,e-115,4];case e<=162:return[281,e-131,5];case e<=194:return[282,e-163,5];case e<=226:return[283,e-195,5];case e<=257:return[284,e-227,5];case 258===e:return[285,e-258,0];default:throw"invalid length: "+e}},t=[],r=0,i=[];for(r=3;r<=258;r++)i=e(r),t[r]=i[2]<<24|i[1]<<16|i[0];return n.USE_TYPEDARRAY?new Uint32Array(t):t},enumerable:!1,configurable:!0}),e.prototype.getDistanceCode_=function(e){var t;switch(!0){case 1===e:t=[0,e-1,0];break;case 2===e:t=[1,e-2,0];break;case 3===e:t=[2,e-3,0];break;case 4===e:t=[3,e-4,0];break;case e<=6:t=[4,e-5,1];break;case e<=8:t=[5,e-7,1];break;case e<=12:t=[6,e-9,2];break;case e<=16:t=[7,e-13,2];break;case e<=24:t=[8,e-17,3];break;case e<=32:t=[9,e-25,3];break;case e<=48:t=[10,e-33,4];break;case e<=64:t=[11,e-49,4];break;case e<=96:t=[12,e-65,5];break;case e<=128:t=[13,e-97,5];break;case e<=192:t=[14,e-129,6];break;case e<=256:t=[15,e-193,6];break;case e<=384:t=[16,e-257,7];break;case e<=512:t=[17,e-385,7];break;case e<=768:t=[18,e-513,8];break;case e<=1024:t=[19,e-769,8];break;case e<=1536:t=[20,e-1025,9];break;case e<=2048:t=[21,e-1537,9];break;case e<=3072:t=[22,e-2049,10];break;case e<=4096:t=[23,e-3073,10];break;case e<=6144:t=[24,e-4097,11];break;case e<=8192:t=[25,e-6145,11];break;case e<=12288:t=[26,e-8193,12];break;case e<=16384:t=[27,e-12289,12];break;case e<=24576:t=[28,e-16385,13];break;case e<=32768:t=[29,e-24577,13];break;default:throw"invalid distance"}return t},e.prototype.toLz77Array=function(){var t,r=this.length,i=this.backwardDistance,n=[],a=0;return t=e.LengthCodeTable[r],n[a++]=65535&t,n[a++]=t>>16&255,n[a++]=t>>24,t=this.getDistanceCode_(i),n[a++]=t[0],n[a++]=t[1],n[a++]=t[2],n},e}();t.Lz77Match=o;var f=function(){function e(e,t){this.compressionType=i.DYNAMIC,this.lazy=0,this.length=0,this.backwardDistance=0,this.input=n.USE_TYPEDARRAY&&e instanceof Array?new Uint8Array(e):e,this.op=0,t&&(t.lazy&&(this.lazy=t.lazy),"number"==typeof t.compressionType&&(this.compressionType=t.compressionType),t.outputBuffer&&(this.output=n.USE_TYPEDARRAY&&t.outputBuffer instanceof Array?new Uint8Array(t.outputBuffer):t.outputBuffer),"number"==typeof t.outputIndex&&(this.op=t.outputIndex)),this.output||(this.output=new(n.USE_TYPEDARRAY?Uint8Array:Array)(32768))}return Object.defineProperty(e,"FixedHuffmanTable",{get:function(){var e,t=[];for(e=0;e<288;e++)switch(!0){case e<=143:t.push([e+48,8]);break;case e<=255:t.push([e-144+400,9]);break;case e<=279:t.push([e-256+0,7]);break;case e<=287:t.push([e-280+192,8]);break;default:throw"invalid literal: "+e}return t},enumerable:!1,configurable:!0}),e.prototype.compress=function(){var e,t,r,a=this.input;switch(this.compressionType){case i.NONE:for(t=0,r=a.length;t<r;)t+=(e=n.USE_TYPEDARRAY?a.subarray(t,t+65535):a.slice(t,t+65535)).length,this.makeNocompressBlock(e,t===r);break;case i.FIXED:this.output=this.makeFixedHuffmanBlock(a,!0),this.op=this.output.length;break;case i.DYNAMIC:this.output=this.makeDynamicHuffmanBlock(a,!0),this.op=this.output.length;break;default:throw"invalid compression type"}return this.output},e.prototype.makeNocompressBlock=function(e,t){var r,a,s,o,f,u,h=this.output,l=this.op;if(n.USE_TYPEDARRAY){for(h=new Uint8Array(this.output.buffer);h.length<=l+e.length+5;)h=new Uint8Array(h.length<<1);h.set(this.output)}if(r=t?1:0,a=i.NONE,h[l++]=r|a<<1,o=65536+~(s=e.length)&65535,h[l++]=255&s,h[l++]=s>>>8&255,h[l++]=255&o,h[l++]=o>>>8&255,n.USE_TYPEDARRAY)h.set(e,l),l+=e.length,h=h.subarray(0,l);else{for(f=0,u=e.length;f<u;++f)h[l++]=e[f];h.length=l}return this.op=l,this.output=h,h},e.prototype.makeFixedHuffmanBlock=function(e,t){var r,s,o,f=new a.BitStream(n.USE_TYPEDARRAY?new Uint8Array(this.output.buffer):this.output,this.op);return r=t?1:0,s=i.FIXED,f.writeBits(r,1,!0),f.writeBits(s,2,!0),o=this.lz77(e),this.fixedHuffman(o,f),f.finish()},e.prototype.makeDynamicHuffmanBlock=function(e,t){var r,s,o,f,u,h,l,c,p,d,y,b,A,g,E,m,T,w=new a.BitStream(n.USE_TYPEDARRAY?new Uint8Array(this.output.buffer):this.output,this.op),R=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],D=new Array(19);for(r=t?1:0,s=i.DYNAMIC,w.writeBits(r,1,!0),w.writeBits(s,2,!0),o=this.lz77(e),l=this.getLengths_(this.freqsLitLen,15),c=this.getCodesFromLengths_(l),p=this.getLengths_(this.freqsDist,7),d=this.getCodesFromLengths_(p),f=286;f>257&&0===l[f-1];f--);for(u=30;u>1&&0===p[u-1];u--);for(y=this.getTreeSymbols_(f,l,u,p),b=this.getLengths_(y.freqs,7),m=0;m<19;m++)D[m]=b[R[m]];for(h=19;h>4&&0===D[h-1];h--);for(A=this.getCodesFromLengths_(b),w.writeBits(f-257,5,!0),w.writeBits(u-1,5,!0),w.writeBits(h-4,4,!0),m=0;m<h;m++)w.writeBits(D[m],3,!0);for(m=0,T=y.codes.length;m<T;m++)if(g=y.codes[m],w.writeBits(A[g],b[g],!0),g>=16){switch(m++,g){case 16:E=2;break;case 17:E=3;break;case 18:E=7;break;default:throw"invalid code: "+g}w.writeBits(y.codes[m],E,!0)}return this.dynamicHuffman(o,[c,l],[d,p],w),w.finish()},e.prototype.dynamicHuffman=function(e,t,r,i){var n,a,s,o,f,u,h,l;for(f=t[0],u=t[1],h=r[0],l=r[1],n=0,a=e.length;n<a;++n)if(s=e[n],i.writeBits(f[s],u[s],!0),s>256)i.writeBits(e[++n],e[++n],!0),o=e[++n],i.writeBits(h[o],l[o],!0),i.writeBits(e[++n],e[++n],!0);else if(256===s)break;return i},e.prototype.fixedHuffman=function(t,r){var i,n,s;for(i=0,n=t.length;i<n;i++)if(s=t[i],a.BitStream.prototype.writeBits.apply(r,e.FixedHuffmanTable[s]),s>256)r.writeBits(t[++i],t[++i],!0),r.writeBits(t[++i],5),r.writeBits(t[++i],t[++i],!0);else if(256===s)break;return r},e.prototype.lz77=function(t){var r,i,a,s,o=0,f=0,u=0,h=0,l={},c=e.WindowSize,p=[],d=n.USE_TYPEDARRAY?new Uint16Array(2*t.length):new Array,y=0,b=0,A=new(n.USE_TYPEDARRAY?Uint32Array:Array)(286),g=new(n.USE_TYPEDARRAY?Uint32Array:Array)(30),E=this.lazy;if(!n.USE_TYPEDARRAY){for(f=0;f<=285;)A[f++]=0;for(f=0;f<=29;)g[f++]=0}A[256]=1;var m=function(e,t){var r=e.toLz77Array();for(f=0,u=r.length;f<u;++f)d[y++]=r[f];A[r[0]]++,g[r[3]]++,b=e.length+t-1,a=null};for(o=0,r=t.length;o<r;++o){for(h=0,f=0,u=e.Lz77MinLength;f<u&&o+f!==r;++f)h=h<<8|t[o+f];if(l[h]||(l[h]=[]),p=l[h],b-- >0)p.push(o);else{for(;p.length>0&&o-p[0]>c;)p.shift();if(o+e.Lz77MinLength>=r){for(a&&m(a,-1),f=0,u=r-o;f<u;++f)s=t[o+f],d[y++]=s,++A[s];break}p.length>0?(i=this.searchLongestMatch_(t,o,p),a?a.length<i.length?(s=t[o-1],d[y++]=s,++A[s],m(i,0)):m(a,-1):i.length<E?a=i:m(i,0)):a?m(a,-1):(s=t[o],d[y++]=s,++A[s]),p.push(o)}}return d[y++]=256,A[256]++,this.freqsLitLen=A,this.freqsDist=g,n.USE_TYPEDARRAY?d.subarray(0,y):d},e.prototype.searchLongestMatch_=function(t,r,i){var n,a,s,f,u,h,l=0,c=t.length;e:for(f=0,h=i.length;f<h;f++){if(n=i[h-f-1],s=e.Lz77MinLength,l>e.Lz77MinLength){for(u=l;u>e.Lz77MinLength;u--)if(t[n+u-1]!==t[r+u-1])continue e;s=l}for(;s<e.Lz77MaxLength&&r+s<c&&t[n+s]===t[r+s];)++s;if(s>l&&(a=n,l=s),s===e.Lz77MaxLength)break}return new o(l,r-a)},e.prototype.getTreeSymbols_=function(e,t,r,i){var a,s,o,f,u,h,l=new(n.USE_TYPEDARRAY?Uint32Array:Array)(e+r),c=new(n.USE_TYPEDARRAY?Uint32Array:Array)(316),p=new(n.USE_TYPEDARRAY?Uint8Array:Array)(19);for(s=0,a=0;a<e;a++)l[s++]=t[a];for(a=0;a<r;a++)l[s++]=i[a];if(!n.USE_TYPEDARRAY)for(a=0,f=p.length;a<f;++a)p[a]=0;for(u=0,a=0,f=l.length;a<f;a+=s){for(s=1;a+s<f&&l[a+s]===l[a];++s);if(o=s,0===l[a])if(o<3)for(;o-- >0;)c[u++]=0,p[0]++;else for(;o>0;)(h=o<138?o:138)>o-3&&h<o&&(h=o-3),h<=10?(c[u++]=17,c[u++]=h-3,p[17]++):(c[u++]=18,c[u++]=h-11,p[18]++),o-=h;else if(c[u++]=l[a],p[l[a]]++,--o<3)for(;o-- >0;)c[u++]=l[a],p[l[a]]++;else for(;o>0;)(h=o<6?o:6)>o-3&&h<o&&(h=o-3),c[u++]=16,c[u++]=h-3,p[16]++,o-=h}return{codes:n.USE_TYPEDARRAY?c.subarray(0,u):c.slice(0,u),freqs:p}},e.prototype.getLengths_=function(t,r){var i,a,o,f,u,h=t.length,l=new s.Heap(2*e.HUFMAX),c=new(n.USE_TYPEDARRAY?Uint8Array:Array)(h);if(!n.USE_TYPEDARRAY)for(f=0;f<h;f++)c[f]=0;for(f=0;f<h;++f)t[f]>0&&l.push(f,t[f]);if(i=new Array(l.length/2),a=new(n.USE_TYPEDARRAY?Uint32Array:Array)(l.length/2),1===i.length)return c[l.pop().index]=1,c;for(f=0,u=l.length/2;f<u;++f)i[f]=l.pop(),a[f]=i[f].value;for(o=this.reversePackageMerge_(a,a.length,r),f=0,u=i.length;f<u;++f)c[i[f].index]=o[f];return c},e.prototype.reversePackageMerge_=function(e,t,r){var i,a,s,o,f,u=new(n.USE_TYPEDARRAY?Uint16Array:Array)(r),h=new(n.USE_TYPEDARRAY?Uint8Array:Array)(r),l=new(n.USE_TYPEDARRAY?Uint8Array:Array)(t),c=new Array(r),p=new Array(r),d=new Array(r),y=(1<<r)-t,b=1<<r-1,A=function(e){var r=p[e][d[e]];r===t?(A(e+1),A(e+1)):--l[r],++d[e]};for(u[r-1]=t,a=0;a<r;++a)y<b?h[a]=0:(h[a]=1,y-=b),y<<=1,u[r-2-a]=(u[r-1-a]/2|0)+t;for(u[0]=h[0],c[0]=new Array(u[0]),p[0]=new Array(u[0]),a=1;a<r;++a)u[a]>2*u[a-1]+h[a]&&(u[a]=2*u[a-1]+h[a]),c[a]=new Array(u[a]),p[a]=new Array(u[a]);for(i=0;i<t;++i)l[i]=r;for(s=0;s<u[r-1];++s)c[r-1][s]=e[s],p[r-1][s]=s;for(i=0;i<r;++i)d[i]=0;for(1===h[r-1]&&(--l[0],++d[r-1]),a=r-2;a>=0;--a){for(i=0,o=0,f=d[a+1],s=0;s<u[a];s++)(o=c[a+1][f]+c[a+1][f+1])>e[i]?(c[a][s]=o,p[a][s]=t,f+=2):(c[a][s]=e[i],p[a][s]=i,++i);d[a]=0,1===h[a]&&A(a)}return l},e.prototype.getCodesFromLengths_=function(t){var r,i,a,s,o=new(n.USE_TYPEDARRAY?Uint16Array:Array)(t.length),f=[],u=[],h=0;for(r=0,i=t.length;r<i;r++)f[t[r]]=1+(0|f[t[r]]);for(r=1,i=e.MaxCodeLength;r<=i;r++)u[r]=h,h+=0|f[r],h<<=1;for(r=0,i=t.length;r<i;r++)for(h=u[t[r]],u[t[r]]+=1,o[r]=0,a=0,s=t[r];a<s;a++)o[r]=o[r]<<1|1&h,h>>>=1;return o},e.Lz77MaxLength=258,e.WindowSize=32768,e.MaxCodeLength=16,e.HUFMAX=286,e.Lz77MinLength=3,e}();t.RawDeflate=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BitStream=void 0;var i=r(0),n=function(){function e(t,r){if(e.ReverseTable=this.getReverseTable(),this.index="number"==typeof r?r:0,this.bitindex=0,this.buffer=t instanceof(i.USE_TYPEDARRAY?Uint8Array:Array)?t:new(i.USE_TYPEDARRAY?Uint8Array:Array)(e.DefaultBlockSize),2*this.buffer.length<=this.index)throw new Error("invalid index");this.buffer.length<=this.index&&this.expandBuffer()}return e.prototype.expandBuffer=function(){var e=this.buffer,t=0,r=e.length;if(i.USE_TYPEDARRAY){var n=new Uint8Array(r<<1);return n.set(e),this.buffer=n}var a=new Array(r<<1);for(t=0;t<r;++t)a[t]=e[t];return this.buffer=a},e.prototype.writeBits=function(t,r,i){var n,a,s=this.buffer,o=this.index,f=this.bitindex,u=s[o];if(i&&r>1&&(t=r>8?(a=t,(e.ReverseTable[255&a]<<24|e.ReverseTable[a>>>8&255]<<16|e.ReverseTable[a>>>16&255]<<8|e.ReverseTable[a>>>24&255])>>32-r):e.ReverseTable[t]>>8-r),r+f<8)u=u<<r|t,f+=r;else for(n=0;n<r;++n)u=u<<1|t>>r-n-1&1,8==++f&&(f=0,s[o++]=e.ReverseTable[u],u=0,o===s.length&&(s=this.expandBuffer()));s[o]=u,this.buffer=s,this.bitindex=f,this.index=o},e.prototype.finish=function(){var t=this.buffer,r=this.index,n=null;return this.bitindex>0&&(t[r]<<=8-this.bitindex,t[r]=e.ReverseTable[t[r]],r++),i.USE_TYPEDARRAY?n=t.subarray(0,r):(t.length=r,n=t),n},e.prototype.getReverseTable=function(){for(var e=new(i.USE_TYPEDARRAY?Uint8Array:Array)(256),t=0;t<256;++t)e[t]=function(e){var t=e,r=7;for(e>>>=1;e;e>>>=1)t<<=1,t|=1&e,--r;return(t<<r&255)>>>0}(t);return e},e.DefaultBlockSize=32768,e}();t.BitStream=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Heap=void 0;var i=r(0),n=function(){function e(e){this.getChild=function(e){return 2*e+2},this.buffer=new(i.USE_TYPEDARRAY?Uint16Array:Array)(2*e),this.length=0}return e.prototype.getParent=function(e){return 2*((e-2)/4|0)},e.prototype.push=function(e,t){var r,i,n,a=this.buffer;for(r=this.length,a[this.length++]=t,a[this.length++]=e;r>0&&(i=this.getParent(r),a[r]>a[i]);)n=a[r],a[r]=a[i],a[i]=n,n=a[r+1],a[r+1]=a[i+1],a[i+1]=n,r=i;return this.length},e.prototype.pop=function(){var e,t,r,i,n,a=this.buffer;for(t=a[0],e=a[1],this.length-=2,a[0]=a[this.length],a[1]=a[this.length+1],n=0;!((i=this.getChild(n))>=this.length)&&(i+2<this.length&&a[i+2]>a[i]&&(i+=2),a[i]>a[n]);)r=a[n],a[n]=a[i],a[i]=r,r=a[n+1],a[n+1]=a[i+1],a[i+1]=r,n=i;return{index:e,value:t,length:this.length}},e}();t.Heap=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Unzip=t.LocalFileHeader=t.FileHeader=void 0;var i=r(1),n=r(8),a=r(2),s=r(0),o=function(){function e(e,t){this.input=e,this.offset=t}return e.prototype.parse=function(){var e=this.input,t=this.offset;if(e[t++]!==i.Zip.FileHeaderSignature[0]||e[t++]!==i.Zip.FileHeaderSignature[1]||e[t++]!==i.Zip.FileHeaderSignature[2]||e[t++]!==i.Zip.FileHeaderSignature[3])throw new Error("invalid file header signature");this.version=e[t++],this.os=e[t++],this.needVersion=e[t++]|e[t++]<<8,this.flags=e[t++]|e[t++]<<8,this.compression=e[t++]|e[t++]<<8,this.time=e[t++]|e[t++]<<8,this.date=e[t++]|e[t++]<<8,this.crc32=(e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24)>>>0,this.compressedSize=(e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24)>>>0,this.plainSize=(e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24)>>>0,this.fileNameLength=e[t++]|e[t++]<<8,this.extraFieldLength=e[t++]|e[t++]<<8,this.fileCommentLength=e[t++]|e[t++]<<8,this.diskNumberStart=e[t++]|e[t++]<<8,this.internalFileAttributes=e[t++]|e[t++]<<8,this.externalFileAttributes=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24,this.relativeOffset=(e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24)>>>0,this.filename=String.fromCharCode.apply(null,s.USE_TYPEDARRAY?e.subarray(t,t+=this.fileNameLength):e.slice(t,t+=this.fileNameLength)),this.extraField=s.USE_TYPEDARRAY?e.subarray(t,t+=this.extraFieldLength):e.slice(t,t+=this.extraFieldLength),this.comment=s.USE_TYPEDARRAY?e.subarray(t,t+this.fileCommentLength):e.slice(t,t+this.fileCommentLength),this.length=t-this.offset},e.Flags=i.Zip.Flags,e}();t.FileHeader=o;var f=function(){function e(e,t){this.input=e,this.offset=t}return e.prototype.parse=function(){var e=this.input,t=this.offset;if(e[t++]!==i.Zip.LocalFileHeaderSignature[0]||e[t++]!==i.Zip.LocalFileHeaderSignature[1]||e[t++]!==i.Zip.LocalFileHeaderSignature[2]||e[t++]!==i.Zip.LocalFileHeaderSignature[3])throw new Error("invalid local file header signature");this.needVersion=e[t++]|e[t++]<<8,this.flags=e[t++]|e[t++]<<8,this.compression=e[t++]|e[t++]<<8,this.time=e[t++]|e[t++]<<8,this.date=e[t++]|e[t++]<<8,this.crc32=(e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24)>>>0,this.compressedSize=(e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24)>>>0,this.plainSize=(e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24)>>>0,this.fileNameLength=e[t++]|e[t++]<<8,this.extraFieldLength=e[t++]|e[t++]<<8,this.filename=String.fromCharCode.apply(null,s.USE_TYPEDARRAY?e.subarray(t,t+=this.fileNameLength):e.slice(t,t+=this.fileNameLength)),this.extraField=s.USE_TYPEDARRAY?e.subarray(t,t+=this.extraFieldLength):e.slice(t,t+=this.extraFieldLength),this.length=t-this.offset},e.Flags=i.Zip.Flags,e}();t.LocalFileHeader=f;var u=function(){function e(e,t){this.updateKeys=i.Zip.updateKeys,this.createDecryptionKey=i.Zip.createEncryptionKey,this.getByte=i.Zip.getByte,t=t||{},this.input=s.USE_TYPEDARRAY&&e instanceof Array?new Uint8Array(e):e,this.ip=0,this.verify=t.verify||!1,this.password=t.password}return e.prototype.getFileHeaderAttribute=function(e,t){this.fileHeaderList||this.parseFileHeader();var r=this.filenameToIndex[e];if(r)return this.fileHeaderList[r][t]},e.prototype.searchEndOfCentralDirectoryRecord=function(){var t,r=this.input;for(t=r.length-12;t>0;--t)if(r[t]===e.CentralDirectorySignature[0]&&r[t+1]===e.CentralDirectorySignature[1]&&r[t+2]===e.CentralDirectorySignature[2]&&r[t+3]===e.CentralDirectorySignature[3])return void(this.eocdrOffset=t);throw new Error("End of Central Directory Record not found")},e.prototype.parseEndOfCentralDirectoryRecord=function(){var t,r=this.input;if(this.eocdrOffset||this.searchEndOfCentralDirectoryRecord(),t=this.eocdrOffset,r[t++]!==e.CentralDirectorySignature[0]||r[t++]!==e.CentralDirectorySignature[1]||r[t++]!==e.CentralDirectorySignature[2]||r[t++]!==e.CentralDirectorySignature[3])throw new Error("invalid signature");this.numberOfThisDisk=r[t++]|r[t++]<<8,this.startDisk=r[t++]|r[t++]<<8,this.totalEntriesThisDisk=r[t++]|r[t++]<<8,this.totalEntries=r[t++]|r[t++]<<8,this.centralDirectorySize=(r[t++]|r[t++]<<8|r[t++]<<16|r[t++]<<24)>>>0,this.centralDirectoryOffset=(r[t++]|r[t++]<<8|r[t++]<<16|r[t++]<<24)>>>0,this.commentLength=r[t++]|r[t++]<<8,this.comment=s.USE_TYPEDARRAY?r.subarray(t,t+this.commentLength):r.slice(t,t+this.commentLength)},e.prototype.parseFileHeader=function(){var e,t,r,i,n=[],a={};if(!this.fileHeaderList){for(void 0===this.centralDirectoryOffset&&this.parseEndOfCentralDirectoryRecord(),e=this.centralDirectoryOffset,r=0,i=this.totalEntries;r<i;++r)(t=new o(this.input,e)).parse(),e+=t.length,n[r]=t,a[t.filename]=r;if(this.centralDirectorySize<e-this.centralDirectoryOffset)throw new Error("invalid file header size");this.fileHeaderList=n,this.filenameToIndex=a}},e.prototype.getFileData=function(t,r){r=r||{};var i,o,u,h,l,c,p,d,y=this.input,b=this.fileHeaderList;if(b||this.parseFileHeader(),void 0===b[t])throw new Error("wrong index");if(o=b[t].relativeOffset,(i=new f(this.input,o)).parse(),o+=i.length,u=i.compressedSize,0!=(i.flags&f.Flags.ENCRYPT)){if(!r.password&&!this.password)throw new Error("please set password");for(c=this.createDecryptionKey(r.password||this.password),p=o,d=o+12;p<d;++p)this.decode(c,y[p]);for(p=o+=12,d=o+(u-=12);p<d;++p)y[p]=this.decode(c,y[p])}switch(i.compression){case e.CompressionMethod.STORE:h=s.USE_TYPEDARRAY?this.input.subarray(o,o+u):this.input.slice(o,o+u);break;case e.CompressionMethod.DEFLATE:h=new n.RawInflate(this.input,{index:o,bufferSize:i.plainSize}).decompress();break;default:throw new Error("unknown compression type")}if(this.verify&&(l=a.CRC32.calc(h),i.crc32!==l))throw new Error("wrong crc: file=0x"+i.crc32.toString(16)+", data=0x"+l.toString(16));return h},e.prototype.getFilenames=function(){var e,t,r,i=[];for(this.fileHeaderList||this.parseFileHeader(),e=0,t=(r=this.fileHeaderList).length;e<t;++e)i[e]=r[e].filename;return i},e.prototype.decompress=function(e,t){var r;if(this.filenameToIndex||this.parseFileHeader(),void 0===(r=this.filenameToIndex[e]))throw new Error(e+" not found");return this.getFileData(r,t)},e.prototype.setPassword=function(e){this.password=e},e.prototype.decode=function(e,t){return t^=this.getByte(e),this.updateKeys(e,t),t},e.CompressionMethod=i.Zip.CompressionMethod,e.FileHeaderSignature=i.Zip.FileHeaderSignature,e.LocalFileHeaderSignature=i.Zip.LocalFileHeaderSignature,e.CentralDirectorySignature=i.Zip.CentralDirectorySignature,e}();t.Unzip=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RawInflate=t.rBufferType=void 0;var i,n=r(0),a=r(9);!function(e){e[e.BLOCK=0]="BLOCK",e[e.ADAPTIVE=1]="ADAPTIVE"}(i=t.rBufferType||(t.rBufferType={}));var s=function(){function e(t,r){switch(this.bfinal=!1,this.bufferType=e.BufferType.ADAPTIVE,this.resize=!1,this.blocks=[],this.bufferSize=e.ZLIB_RAW_INFLATE_BUFFER_SIZE,this.totalpos=0,this.ip=0,this.bitsbuf=0,this.bitsbuflen=0,this.input=n.USE_TYPEDARRAY?new Uint8Array(t):t,this.bfinal=!1,this.bufferType=e.BufferType.ADAPTIVE,this.resize=!1,r&&(r.index&&(this.ip=r.index),r.bufferSize&&(this.bufferSize=r.bufferSize),r.bufferType&&(this.bufferType=r.bufferType),r.resize&&(this.resize=r.resize)),this.bufferType){case e.BufferType.BLOCK:this.op=e.MaxBackwardLength,this.output=new(n.USE_TYPEDARRAY?Uint8Array:Array)(e.MaxBackwardLength+this.bufferSize+e.MaxCopyLength);break;case e.BufferType.ADAPTIVE:this.op=0,this.output=new(n.USE_TYPEDARRAY?Uint8Array:Array)(this.bufferSize);break;default:throw new Error("invalid inflate mode")}}var t;return e.prototype.decompress=function(){for(;!this.bfinal;)this.parseBlock();switch(this.bufferType){case e.BufferType.BLOCK:return this.concatBufferBlock();case e.BufferType.ADAPTIVE:return this.concatBufferDynamic();default:throw new Error("invalid inflate mode")}},e.prototype.parseBlock=function(){var e=this.readBits(3);switch(1&e&&(this.bfinal=!0),e>>>=1){case 0:this.parseUncompressedBlock();break;case 1:this.parseFixedHuffmanBlock();break;case 2:this.parseDynamicHuffmanBlock();break;default:throw new Error("unknown BTYPE: "+e)}},e.prototype.readBits=function(e){var t,r=this.bitsbuf,i=this.bitsbuflen,n=this.input,a=this.ip;if(a+(e-i+7>>3)>=n.length)throw new Error("input buffer is broken");for(;i<e;)r|=n[a++]<<i,i+=8;return t=r&(1<<e)-1,r>>>=e,i-=e,this.bitsbuf=r,this.bitsbuflen=i,this.ip=a,t},e.prototype.readCodeByTable=function(e){for(var t,r,i=this.bitsbuf,n=this.bitsbuflen,a=this.input,s=this.ip,o=a.length,f=e[0],u=e[1];n<u&&!(s>=o);)i|=a[s++]<<n,n+=8;if((r=(t=f[i&(1<<u)-1])>>>16)>n)throw new Error("invalid code length: "+r);return this.bitsbuf=i>>r,this.bitsbuflen=n-r,this.ip=s,65535&t},e.prototype.parseUncompressedBlock=function(){var t,r,i=this.input,a=this.ip,s=this.output,o=this.op,f=i.length,u=s.length;if(this.bitsbuf=0,this.bitsbuflen=0,a+1>=f)throw new Error("invalid uncompressed block header: LEN");if(t=i[a++]|i[a++]<<8,a+1>=f)throw new Error("invalid uncompressed block header: NLEN");if(t===~(i[a++]|i[a++]<<8))throw new Error("invalid uncompressed block header: length verify");if(a+t>i.length)throw new Error("input buffer is broken");switch(this.bufferType){case e.BufferType.BLOCK:for(;o+t>s.length;){if(t-=r=u-o,n.USE_TYPEDARRAY)s.set(i.subarray(a,a+r),o),o+=r,a+=r;else for(;r--;)s[o++]=i[a++];this.op=o,s=this.expandBufferBlock(),o=this.op}break;case e.BufferType.ADAPTIVE:for(;o+t>s.length;)s=this.expandBufferAdaptive({fixRatio:2});break;default:throw new Error("invalid inflate mode")}if(n.USE_TYPEDARRAY)s.set(i.subarray(a,a+t),o),o+=t,a+=t;else for(;t--;)s[o++]=i[a++];this.ip=a,this.op=o,this.output=s},e.prototype.parseFixedHuffmanBlock=function(){switch(this.bufferType){case e.BufferType.ADAPTIVE:this.decodeHuffmanAdaptive(e.FixedLiteralLengthTable,e.FixedDistanceTable);break;case e.BufferType.BLOCK:this.decodeHuffmanBlock(e.FixedLiteralLengthTable,e.FixedDistanceTable);break;default:throw new Error("invalid inflate mode")}},e.prototype.parseDynamicHuffmanBlock=function(){var t,r,i,a,s,o,f,u,h,l=this.readBits(5)+257,c=this.readBits(5)+1,p=this.readBits(4)+4,d=new(n.USE_TYPEDARRAY?Uint8Array:Array)(e.Order.length);for(u=0;u<p;++u)d[e.Order[u]]=this.readBits(3);if(!n.USE_TYPEDARRAY)for(u=p,p=d.length;u<p;++u)d[e.Order[u]]=0;for(t=e.buildHuffmanTable(d),a=new(n.USE_TYPEDARRAY?Uint8Array:Array)(l+c),u=0,h=l+c;u<h;)switch(s=this.readCodeByTable(t)){case 16:for(f=3+this.readBits(2);f--;)a[u++]=o;break;case 17:for(f=3+this.readBits(3);f--;)a[u++]=0;o=0;break;case 18:for(f=11+this.readBits(7);f--;)a[u++]=0;o=0;break;default:a[u++]=s,o=s}switch(r=n.USE_TYPEDARRAY?e.buildHuffmanTable(a.subarray(0,l)):e.buildHuffmanTable(a.slice(0,l)),i=n.USE_TYPEDARRAY?e.buildHuffmanTable(a.subarray(l)):e.buildHuffmanTable(a.slice(l)),this.bufferType){case e.BufferType.ADAPTIVE:this.decodeHuffmanAdaptive(r,i);break;case e.BufferType.BLOCK:this.decodeHuffmanBlock(r,i);break;default:throw new Error("invalid inflate mode")}},e.prototype.decodeHuffmanBlock=function(t,r){var i=this.output,n=this.op;this.currentLitlenTable=t;var a,s,o,f,u=i.length-e.MaxCopyLength,h=e.LengthCodeTable,l=e.LengthExtraTable,c=e.DistCodeTable,p=e.DistExtraTable;for(a=this.readCodeByTable(t);256!==a;)if(a<256)n>=u&&(this.op=n,i=this.expandBufferBlock(),n=this.op),i[n++]=a;else{for(f=h[s=a-257],l[s]>0&&(f+=this.readBits(l[s])),o=c[a=this.readCodeByTable(r)],p[a]>0&&(o+=this.readBits(p[a])),n>=u&&(this.op=n,i=this.expandBufferBlock(),n=this.op);f--;)i[n]=i[n++-o];a=this.readCodeByTable(t)}for(;this.bitsbuflen>=8;)this.bitsbuflen-=8,this.ip--;this.op=n},e.prototype.decodeHuffmanAdaptive=function(t,r){var i=this.output,n=this.op;this.currentLitlenTable=t;for(var a,s,o,f,u=i.length,h=e.LengthCodeTable,l=e.LengthExtraTable,c=e.DistCodeTable,p=e.DistExtraTable;256!==(a=this.readCodeByTable(t));)if(a<256)n>=u&&(u=(i=this.expandBufferAdaptive()).length),i[n++]=a;else{for(f=h[s=a-257],l[s]>0&&(f+=this.readBits(l[s])),o=c[a=this.readCodeByTable(r)],p[a]>0&&(o+=this.readBits(p[a])),n+f>u&&(u=(i=this.expandBufferAdaptive()).length);f--;)i[n]=i[n++-o];a=this.readCodeByTable(t)}for(;this.bitsbuflen>=8;)this.bitsbuflen-=8,this.ip--;this.op=n},e.prototype.expandBufferBlock=function(){var t,r,i=new(n.USE_TYPEDARRAY?Uint8Array:Array)(this.op-e.MaxBackwardLength),a=this.op-e.MaxBackwardLength,s=this.output;if(n.USE_TYPEDARRAY)i.set(s.subarray(e.MaxBackwardLength,i.length));else for(t=0,r=i.length;t<r;++t)i[t]=s[t+e.MaxBackwardLength];if(this.blocks.push(i),this.totalpos+=i.length,n.USE_TYPEDARRAY)s.set(s.subarray(a,a+e.MaxBackwardLength));else for(t=0;t<e.MaxBackwardLength;++t)s[t]=s[a+t];return this.op=e.MaxBackwardLength,s},e.prototype.expandBufferAdaptive=function(e){var t,r,i,a=this.input.length/this.ip+1|0,s=this.input,o=this.output;return e&&("number"==typeof e.fixRatio&&(a=e.fixRatio),"number"==typeof e.addRatio&&(a+=e.addRatio)),r=a<2?(i=(s.length-this.ip)/this.currentLitlenTable[2]/2*258|0)<o.length?o.length+i:o.length<<1:o.length*a,n.USE_TYPEDARRAY?(t=new Uint8Array(r)).set(o):t=o,this.output=t,this.output},e.prototype.concatBufferBlock=function(){var t,r,i,a,s,o=0,f=this.totalpos+(this.op-e.MaxBackwardLength),u=this.output,h=this.blocks,l=new(n.USE_TYPEDARRAY?Uint8Array:Array)(f);if(0===h.length)return n.USE_TYPEDARRAY?this.output.subarray(e.MaxBackwardLength,this.op):this.output.slice(e.MaxBackwardLength,this.op);for(r=0,i=h.length;r<i;++r)for(a=0,s=(t=h[r]).length;a<s;++a)l[o++]=t[a];for(r=e.MaxBackwardLength,i=this.op;r<i;++r)l[o++]=u[r];return this.blocks=[],this.buffer=l,this.buffer},e.prototype.concatBufferDynamic=function(){var e,t=this.op;return n.USE_TYPEDARRAY?this.resize?(e=new Uint8Array(t)).set(this.output.subarray(0,t)):e=this.output.subarray(0,t):(this.output.length>t&&(this.output=this.output.slice(0,t-1)),e=this.output),this.buffer=e,this.buffer},e.ZLIB_RAW_INFLATE_BUFFER_SIZE=32768,e.buildHuffmanTable=a.Huffman.buildHuffmanTable,e.BufferType=i,e.MaxBackwardLength=32768,e.MaxCopyLength=258,e.Order=(t=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],n.USE_TYPEDARRAY?new Uint16Array(t):t),e.LengthCodeTable=function(e){return n.USE_TYPEDARRAY?new Uint16Array(e):e}([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258]),e.LengthExtraTable=function(e){return n.USE_TYPEDARRAY?new Uint8Array(e):e}([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),e.DistCodeTable=function(e){return n.USE_TYPEDARRAY?new Uint16Array(e):e}([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),e.DistExtraTable=function(){var e=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];return n.USE_TYPEDARRAY?new Uint8Array(e):e}(),e.FixedLiteralLengthTable=function(){var t,r,i=new(n.USE_TYPEDARRAY?Uint8Array:Array)(288);for(t=0,r=i.length;t<r;++t)i[t]=t<=143?8:t<=255?9:t<=279?7:8;return e.buildHuffmanTable(i)}(),e.FixedDistanceTable=function(){var t,r,i=new(n.USE_TYPEDARRAY?Uint8Array:Array)(30);for(t=0,r=i.length;t<r;++t)i[t]=5;return e.buildHuffmanTable(i)}(),e}();t.RawInflate=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Huffman=void 0;var i=r(0),n=function(){function e(){}return e.buildHuffmanTable=function(e){var t,r,n,a,s,o,f,u,h,l,c,p=e.length,d=0,y=Number.POSITIVE_INFINITY;for(u=0,h=p;u<h;++u)e[u]>d&&(d=e[u]),e[u]<y&&(y=e[u]);for(t=1<<d,r=new(i.USE_TYPEDARRAY?Uint32Array:Array)(t),n=1,a=0,s=2;n<=d;){for(u=0;u<p;++u)if(e[u]===n){for(o=0,f=a,l=0;l<n;++l)o=o<<1|1&f,f>>=1;for(c=n<<16|u,l=o;l<t;l+=s)r[l]=c;++a}++n,a<<=1,s<<=1}return[r,d,y]},e}();t.Huffman=n}])}));