import bcrypt from "bcrypt"

export async function crypt(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    return bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return reject(err)
      }
      return bcrypt.hash(password, salt, (hashErr, hash) => {
        if (err) { reject(err) }
        else {
          resolve(hash)
        }
      })
    })
  })
}
