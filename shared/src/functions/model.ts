
export interface IdMap<Item> {
  [_id: string]: Item | undefined
}

export declare type Alg = "sha1" | "sha256" | "md5"
export interface RSAKey {
  n: any
  e: number
  d: any
  p: any
  q: any
  dmp1: any
  dmq1: any
  coeff: any
  setPublic(N: string, E: string): void
  encrypt(text: string): string
  setPrivate(N: string, E: string, D: string): void
  setPrivateEx(N: string, E: string, D: string, P: string, Q: string, DP: string, DQ: string, C: string): void
  generate(B: number, E: string): void
  decrypt(ctext: string): string
  signString(s: string, hashAlg?: Alg): string
  verifyString(sMsg: string, hSig: string): boolean
  verifyHexSignatureForMessage(hSig: string, sMsg: string): boolean
  doPublic(x: BigInteger): BigInteger
  doPrivate(x: BigInteger): BigInteger
  getHexPaddedDigestInfoForString(s: string, keySize: number, hashAlg: Alg): string
  getAlgNameAndHashFromHexDisgestInfo(hDigestInfo: string): [Alg, string] | []
  getDecryptSignatureBI(biSig: BigInteger, hN: string, hE: string): BigInteger
  getHexDigestInfoFromSig(biSig: BigInteger, hN: string, hE: string): string
  verifySignatureWithArgs(sMsg: string, biSig: BigInteger, hN: string, hE: string): boolean
}