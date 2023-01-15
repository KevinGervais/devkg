import bcrypt from "bcrypt"

export async function compareCrypted(plainPass: string, hashword: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    return bcrypt.compare(plainPass, hashword, (err, isPasswordMatch) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(isPasswordMatch)
      }
    })
  })
}