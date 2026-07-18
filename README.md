# CPF Validator JS

A lightweight JavaScript library for validating Brazilian CPF (Cadastro de Pessoas Físicas) numbers.

## Features

- ✅ Validate Brazilian CPF numbers
- ✅ Supports formatted and unformatted CPFs
- ✅ Removes special characters automatically
- ✅ No external dependencies
- ✅ Lightweight and fast
- ✅ Suitable for web applications, APIs, and forms

---

## Installation

Clone this repository:

```bash
git clone https://github.com/Mehruunisa/cpf-validator-js.git
```

Or copy `validator.js` into your project.

---

## Usage

```javascript
const isValidCPF = require('./validator');

const cpf = "529.982.247-25";

if (isValidCPF(cpf)) {
    console.log("Valid CPF");
} else {
    console.log("Invalid CPF");
}
```

---

## Example

| CPF | Result |
|------|--------|
| 529.982.247-25 | ✅ Valid |
| 111.111.111-11 | ❌ Invalid |
| 123.456.789-00 | ❌ Invalid |

---

## How the Validation Works

This validator follows the official Brazilian CPF verification algorithm by:

1. Removing formatting characters.
2. Rejecting repeated digits.
3. Calculating the first verification digit.
4. Calculating the second verification digit.
5. Comparing the calculated digits with the provided CPF.

---

## Use Cases

- Form validation
- User registration
- Backend APIs
- Laravel applications
- Node.js projects
- Software testing
- Educational projects

---

## Related Resource

If you need **mathematically valid CPF numbers** for educational purposes, software development, or testing, you can use **Gerador de CPF Brasil**:

**https://geradordecpfbrasil.com**

This repository focuses on **validation**, while the website is useful for generating sample CPFs for testing.

---

## License

MIT License
