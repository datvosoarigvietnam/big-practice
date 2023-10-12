import jwt, { SignOptions } from 'jsonwebtoken'

export const signToken = ({
  payload,
  privateKey = '@hihihehe@',
  options = {
    algorithm: 'HS256'
  }
}: {
  payload: string | Buffer | object
  privateKey?: string
  options?: SignOptions
}): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, privateKey, options, (error, token) => {
      if (error) {
        throw reject(error)
      }
      resolve(token as string)
    })
  })
}

export const verifyToken = ({ token, privateKey = '@hihihehe@' }: { token: string; privateKey: string }) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, privateKey, (error, decode) => {
      if (error) {
        throw reject(error)
      }
      resolve(decode as string)
    })
  })
}
