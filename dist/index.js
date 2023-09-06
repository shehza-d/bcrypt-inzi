var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.ts
import { genSalt, hash, compare } from "bcrypt";
var stringToHash = (PasswordString, saltRounds = 10) => {
  return new Promise((resolve, reject) => __async(void 0, null, function* () {
    try {
      const salt = yield genSalt(saltRounds);
      const hashedPassword = yield hash(PasswordString, salt);
      resolve(hashedPassword);
    } catch (err) {
      reject(err || "Unknown error occurred while generation hash");
    }
  }));
};
var verifyHash = (realPassword, hashString) => {
  return new Promise((resolve, reject) => __async(void 0, null, function* () {
    try {
      const result = yield compare(realPassword, hashString);
      resolve(result);
    } catch (err) {
      reject(false);
    }
  }));
};
var validateHash = (hashString) => {
  return new Promise((resolve) => __async(void 0, null, function* () {
    try {
      const re = yield codmpare("dummy", hashString);
      console.log("\u{1F680} ~ file: index.ts:46 ~ returnnewPromise ~ re:", re);
      resolve(true);
    } catch (err) {
      resolve(false);
    }
  }));
};
export {
  stringToHash,
  validateHash,
  verifyHash as varifyHash,
  verifyHash
};
