# Instagram Password Encryption Module

This module provides a function to encrypt passwords for the `enc_password` parameter used during Instagram's web login process. The encryption process involves several steps including AES-GCM encryption and formatting the encrypted data in a specific way that Instagram's servers expect.

![Instagram Password Encryption Banner](https://github.com/glizzykingdreko/instagram-password-encryption/raw/main/img/banner.png)

[![npm version](https://img.shields.io/npm/v/instagram-password-encryption.svg)](https://www.npmjs.com/package/instagram-password-encryption)
[![GitHub Repo](https://img.shields.io/badge/GitHub-instagram--password--encryption-blue?style=flat&logo=github)](https://github.com/glizzykingdreko/instagram-password-encryption)



## Table of Contents
- [Instagram Password Encryption Module](#instagram-password-encryption-module)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Function: encryptPassword](#function-encryptpassword)
    - [Syntax](#syntax)
    - [Parameters](#parameters)
    - [Returns](#returns)
    - [Description](#description)
    - [Example Usage](#example-usage)
    - [Note](#note)
  - [License](#license)
  - [My links](#my-links)

## Installation

To install the module, use npm:

```bash
npm install instagram-password-encryption
```

## Function: encryptPassword
The `encryptPassword` function encrypts a given password using a combination of provided parameters and internal logic.

### Syntax
```js
encryptPassword(password, [version], [keyID], [publicKey])
```

### Parameters
- `password` (String): The password to be encrypted.
- `version` (String): The version of the encryption algorithm, default is `10`.
- `keyID` (String): The key identifier, default is `143`.
- `publicKey` (String): The public key used for encryption, default is `f219393f2381eab7abd6d20130bfa274cc4ffc8b67988da60abeffc88c1b9b15`.

### Returns
A Promise that resolves to the encrypted password string.

### Description
The `encryptPassword` function uses AES-GCM for encryption. It involves several steps including key generation, encryption, and formatting the result. The function accepts a password and optional parameters for version, keyID, and publicKey. The version, keyID, and publicKey are subject to change and can typically be found on Instagram's login page's source code during updates.

### Example Usage
```js
const { encryptPassword } = require('instagram-password-encryption');

encryptPassword('your-password-here').then(encryptedPassword => {
    console.log(encryptedPassword);
}).catch(error => {
    console.error(error);
});
```
###  Note
The provided default values for `version`, `keyID`, and `publicKey` are examples. In a real-world scenario, you should retrieve the current values from Instagram's login page, as they may change periodically.

## License
This project is licensed under the MIT [License](LICENSE). See the LICENSE file for more details.

## My links
- [Website](https://glizzykingdreko.github.io)
- [GitHub](https://github.com/glizzykingdreko)
- [Twitter](https://mobile.twitter.com/glizzykingdreko)
- [Medium](https://medium.com/@glizzykingdreko)
- [Email](mailto:glizzykingdreko@protonmail.com)