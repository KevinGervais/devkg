import forge from "node-forge"

export function getRSAKeys(): { publicKey: string, privateKey: forge.pki.rsa.PrivateKey } {
  const { privateKey, publicKey } = forge.pki.rsa.generateKeyPair(512)
  return {
    privateKey,
    publicKey: forge.pki.publicKeyToPem(publicKey)
  }
}