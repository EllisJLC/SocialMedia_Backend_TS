const bcrypt = require('brypt');

const hashPassword = (password: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (error: string, salt: string) => {
      if (error) {
        reject(error);
      }
      bcrypt.hash(password, salt, (error: string, hash: string) => {
        if (error) {
          reject(error);
        }
        resolve(hash);
      });
    });
  });
}

const comparePassword = (password: string, hashed: string) => {
  return bcrypt.compare(password, hashed)
}

export default {
  hashPassword,
  comparePassword
}