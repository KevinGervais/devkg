import forge from "node-forge"

export function toRSA(data: string, publicKey: string): string {
  const publicKeyObject = forge.pki.publicKeyFromPem(publicKey)
  return publicKeyObject.encrypt(data)
}