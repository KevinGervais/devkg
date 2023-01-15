import forge from "node-forge"

export function fromRSA(data: string, privateKey: forge.pki.rsa.PrivateKey): string {
  return privateKey.decrypt(data)
}