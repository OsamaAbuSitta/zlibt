// Generated by dts-bundle v0.7.3

export class Alder {
    static OptimizationParameter: number;
    constructor();
    static update(adler: number, array: Array<any> | Uint8Array): number;
}
export const Adler32: (array: any) => number;

export let ZLIB_CRC32_COMPACT: boolean;
export class CRC32 {
    constructor();
    static calc(data: Array<number> | Uint8Array, pos?: number, length?: number): number;
    static update: (data: Array<number> | Uint8Array, crc: number, pos: number, length: number) => number;
    static single(num: number, crc: number): number;
    static Table_: number[];
    static get Table(): any[] | Uint32Array;
}

export class Heap {
    buffer: Uint16Array | Array<number>;
    length: number;
    constructor(length: number);
    getParent(index: number): number;
    getChild: (index: number) => number;
    push(index: number, value: number): number;
    pop(): {
        index: any;
        value: any;
        length: number;
    };
}

/**
  * build huffman table from length list.
  * @param {!(Array.<number>|Uint8Array)} lengths length list.
  * @return {!Array} huffman table.
  */
export class Huffman {
    constructor();
    static buildHuffmanTable(lengths: Array<number> | Uint8Array): any[];
}

export class Zip {
    static Flags: {
        ENCRYPT: number;
        DESCRIPTOR: number;
        UTF8: number;
    };
    static CompressionMethod: {
        STORE: number;
        DEFLATE: number;
    };
    static OperatingSystem: {
        MSDOS: number;
        UNIX: number;
        MACINTOSH: number;
    };
    constructor(opt_params?: any);
    static FileHeaderSignature: number[];
    static LocalFileHeaderSignature: number[];
    static CentralDirectorySignature: number[];
    addFile(input: Array<number> | Uint8Array, opt_params: any): void;
    setPassword(password: Array<number> | Uint8Array): void;
    compress(): any;
    deflateWithOption(input: Array<number> | Uint8Array, opt_params: Object): Uint8Array | number[];
    static getByte(key: Array<number> | Uint32Array): number;
    encode(key: Array<number> | Uint32Array, n: number): number;
    static updateKeys: (key: Array<number> | Uint32Array, n: number) => void;
    static createEncryptionKey(password: Array<number> | Uint8Array): number[] | Uint32Array;
}

export class FileHeader {
    input: Array<number> | Uint8Array;
    offset: number;
    length: number;
    version: number;
    os: number;
    needVersion: number;
    flags: number;
    compression: number;
    time: number;
    date: number;
    crc32: number;
    compressedSize: number;
    plainSize: number;
    fileNameLength: number;
    extraFieldLength: number;
    fileCommentLength: number;
    diskNumberStart: number;
    internalFileAttributes: number;
    externalFileAttributes: number;
    relativeOffset: number;
    filename: string;
    extraField: Array<number> | Uint8Array;
    comment: Array<number> | Uint8Array;
    constructor(input: Array<number> | Uint8Array, ip: number);
    static Flags: {
        ENCRYPT: number;
        DESCRIPTOR: number;
        UTF8: number;
    };
    parse(): void;
}
export class LocalFileHeader {
    input: Array<number> | Uint8Array;
    offset: number;
    length: number;
    version: number;
    os: number;
    needVersion: number;
    flags: number;
    compression: number;
    time: number;
    date: number;
    crc32: number;
    compressedSize: number;
    plainSize: number;
    fileNameLength: number;
    extraFieldLength: number;
    fileCommentLength: number;
    diskNumberStart: number;
    internalFileAttributes: number;
    externalFileAttributes: number;
    relativeOffset: number;
    filename: string;
    extraField: Array<number> | Uint8Array;
    comment: Array<number> | Uint8Array;
    static Flags: {
        ENCRYPT: number;
        DESCRIPTOR: number;
        UTF8: number;
    };
    constructor(input: Array<number> | Uint8Array, ip: number);
    parse(): void;
}
export class Unzip {
    input: Array<number> | Uint8Array;
    ip: number;
    eocdrOffset: number;
    numberOfThisDisk: number;
    startDisk: number;
    totalEntriesThisDisk: number;
    totalEntries: number;
    centralDirectorySize: number;
    centralDirectoryOffset: number;
    commentLength: number;
    comment: Array<number> | Uint8Array;
    fileHeaderList: Array<FileHeader>;
    filenameToIndex: {};
    verify: boolean;
    password: Array<number> | Uint8Array;
    static CompressionMethod: {
        STORE: number;
        DEFLATE: number;
    };
    static FileHeaderSignature: number[];
    static LocalFileHeaderSignature: number[];
    static CentralDirectorySignature: number[];
    constructor(input: Array<number> | Uint8Array, opt_params?: any);
    getFileHeaderAttribute(filename: string, attributeName: string): any;
    searchEndOfCentralDirectoryRecord(): void;
    parseEndOfCentralDirectoryRecord(): void;
    parseFileHeader(): void;
    getFileData(index: number, opt_params: any): any;
    getFilenames(): any[];
    decompress(filename: string, opt_params: any): any;
    /**
      * @param {(Array.<number>|Uint8Array)} password
      */
    setPassword(password: Array<number> | Uint8Array): void;
    decode(key: Array<number> | Uint32Array, n: number): number;
    updateKeys: (key: number[] | Uint32Array, n: number) => void;
    createDecryptionKey: typeof Zip.createEncryptionKey;
    getByte: typeof Zip.getByte;
}

export enum gOperatingSystem {
    FAT = 0,
    AMIGA = 1,
    VMS = 2,
    UNIX = 3,
    VM_CMS = 4,
    ATARI_TOS = 5,
    HPFS = 6,
    MACINTOSH = 7,
    Z_SYSTEM = 8,
    CP_M = 9,
    TOPS_20 = 10,
    NTFS = 11,
    QDOS = 12,
    ACORN_RISCOS = 13,
    UNKNOWN = 255
}
export enum gFlagsMask {
    FTEXT = 1,
    FHCRC = 2,
    FEXTRA = 4,
    FNAME = 8,
    FCOMMENT = 16
}
export class Gzip {
    static OperatingSystem: typeof gOperatingSystem;
    static FlagsMask: typeof gFlagsMask;
    static DefaultBufferSize: number;
    constructor(input: Array<number> | Uint8Array, opt_params?: any);
    compress(): any[] | Uint8Array;
}

export class Gunzip {
    member: any[];
    constructor(input: Array<number> | Uint8Array);
    getMembers(): any[];
    decompress(): any;
    decodeMember(): void;
    decodeSubField(ip: number, length: number): number;
    concatMember(): any;
}

export enum rBufferType {
    BLOCK = 0,
    ADAPTIVE = 1
}
export class RawInflate {
    static ZLIB_RAW_INFLATE_BUFFER_SIZE: number;
    static buildHuffmanTable: typeof Huffman.buildHuffmanTable;
    static BufferType: typeof rBufferType;
    static MaxBackwardLength: number;
    static MaxCopyLength: number;
    currentLitlenTable: Array<number> | Uint16Array;
    static Order: Uint16Array | number[];
    static LengthCodeTable: Uint16Array | number[];
    static LengthExtraTable: Uint8Array | number[];
    static DistCodeTable: Uint16Array | number[];
    static DistExtraTable: Uint8Array | number[];
    static FixedLiteralLengthTable: any[];
    static FixedDistanceTable: any[];
    buffer: Array<number> | Uint8Array;
    blocks: Array<(Array<number> | Uint8Array)>;
    bufferSize: number;
    totalpos: number;
    ip: any;
    bitsbuf: any;
    bitsbuflen: any;
    input: Array<number> | Uint8Array;
    output: Array<number> | Uint8Array;
    /** @type {!number} output buffer pointer. */
    op: number;
    /** @type {boolean} is final block flag. */
    bfinal: boolean;
    /** @type {Zlib.RawInflate.BufferType} buffer management. */
    bufferType: rBufferType;
    /** @type {boolean} resize flag for memory size optimization. */
    resize: boolean;
    constructor(input: Uint8Array | Array<number>, opt_params?: any);
    decompress(): Uint8Array | number[];
    parseBlock(): void;
    readBits(length: number): any;
    readCodeByTable(table: Array<number> | Uint16Array | Uint8Array): number;
    parseUncompressedBlock(): void;
    parseFixedHuffmanBlock(): void;
    parseDynamicHuffmanBlock(): void;
    decodeHuffmanBlock(litlen: Array<number> | Uint16Array, dist: Array<number> | Uint8Array): void;
    decodeHuffmanAdaptive(litlen: Array<number> | Uint16Array, dist: Array<number> | Uint8Array): void;
    expandBufferBlock(): Uint8Array | number[];
    expandBufferAdaptive(opt_param?: any): Uint8Array | number[];
    concatBufferBlock(): Uint8Array | number[];
    concatBufferDynamic(): Uint8Array | number[];
}

export enum rStatus {
    INITIALIZED = 0,
    BLOCK_HEADER_START = 1,
    BLOCK_HEADER_END = 2,
    BLOCK_BODY_START = 3,
    BLOCK_BODY_END = 4,
    DECODE_BLOCK_START = 5,
    DECODE_BLOCK_END = 6
}
export enum rBlockType {
    UNCOMPRESSED = 0,
    FIXED = 1,
    DYNAMIC = 2
}
export class RawInflateStream {
    static Status: typeof rStatus;
    static BlockType: typeof rBlockType;
    ip: number;
    output: Array<number> | Uint8Array;
    static MaxBackwardLength: number;
    static MaxCopyLength: number;
    static Order: Uint16Array | number[];
    static LengthCodeTable: Uint16Array | number[];
    static LengthExtraTable: Uint8Array | number[];
    static DistCodeTable: Uint16Array | number[];
    static DistExtraTable: Uint8Array | number[];
    static FixedLiteralLengthTable: any[];
    static FixedDistanceTable: any[];
    constructor(input: Uint8Array | Array<number>, ip?: number, opt_buffersize?: number);
    decompress(newInput: Uint8Array | Array<number>, ip: any): any;
    readBlockHeader(): number;
    readBits(length: number): any;
    readCodeByTable(table: Array<number> | Uint8Array): number;
    readUncompressedBlockHeader(): number;
    parseUncompressedBlock(): 0 | -1;
    parseFixedHuffmanBlock(): number;
    save_(): void;
    restore_(): void;
    parseDynamicHuffmanBlock(): 0 | -1;
    decodeHuffman(): number;
    expandBuffer(opt_param?: any): Uint8Array | number[];
    concatBuffer(): any;
}

export enum CompressionType {
    NONE = 0,
    FIXED = 1,
    DYNAMIC = 2,
    RESERVED = 3
}
export class Lz77Match {
    length: number;
    backwardDistance: number;
    constructor(length: number, backwardDistance: number);
    static get LengthCodeTable(): any[] | Uint32Array;
    getDistanceCode_(dist: number): any;
    toLz77Array(): any[];
}
export class RawDeflate {
    compressionType: CompressionType;
    lazy: number;
    freqsLitLen: Array<any> | Uint32Array;
    freqsDist: Array<any> | Uint32Array;
    input: Array<number> | Uint8Array;
    output: Array<number> | Uint8Array;
    op: number;
    length: number;
    backwardDistance: number;
    static Lz77MaxLength: number;
    static WindowSize: number;
    static MaxCodeLength: number;
    static HUFMAX: number;
    static Lz77MinLength: number;
    constructor(input: Array<number> | Uint8Array, opt_params?: any);
    static get FixedHuffmanTable(): any[];
    compress(): Uint8Array | number[];
    makeNocompressBlock(blockArray: Array<number> | Uint8Array, isFinalBlock: boolean): Uint8Array | number[];
    makeFixedHuffmanBlock(blockArray: Array<number> | Uint8Array, isFinalBlock: boolean): any;
    makeDynamicHuffmanBlock(blockArray: Array<number> | Uint8Array, isFinalBlock: boolean): any;
    dynamicHuffman(dataArray: Array<number> | Uint16Array, litLen: any[], dist: any[], stream: any): any;
    fixedHuffman(dataArray: Array<number> | Uint16Array, stream: BitStream): BitStream;
    lz77(dataArray: Array<number> | Uint8Array): Uint16Array | number[];
    searchLongestMatch_(data: any, position: number, matchList: Array<number>): Lz77Match;
    getTreeSymbols_(hlit: number, litlenLengths: Array<number> | Uint8Array, hdist: number, distLengths: Array<number> | Uint8Array): {
        codes: any[] | Uint32Array;
        freqs: any[] | Uint8Array;
    };
    getLengths_(freqs: Array<number> | Uint8Array | Uint32Array, limit: number): any[] | Uint8Array;
    reversePackageMerge_(freqs: Array<number> | Uint32Array, symbols: number, limit: number): any[] | Uint8Array;
    getCodesFromLengths_(lengths: Uint8Array | Array<number>): any[] | Uint16Array;
}

export class InflateStream {
    constructor(input: Array<number> | Uint8Array);
    decompress(input: Uint8Array | Array<number>): any;
    readHeader(): number;
}

export class Inflate {
    constructor(input: Array<number> | Uint8Array, opt_params?: any);
    decompress(): any;
}

export class Deflate {
    static compress(input: Array<number> | Uint8Array, opt_params: any): any;
    static DefaultBufferSize: number;
    constructor(input: Array<number> | Uint8Array, opt_params?: any);
    compress(): any;
}

export enum CompressionMethod {
    DEFLATE = 8,
    RESERVED = 15
}

export class BitStream {
    static DefaultBlockSize: number;
    static ReverseTable: Uint8Array | any[];
    constructor(buffer: Uint8Array | Array<any>, bufferPosition: number);
    expandBuffer(): any[] | Uint8Array;
    writeBits(number: number, n: number, reverse?: boolean): void;
    finish(): any;
}

