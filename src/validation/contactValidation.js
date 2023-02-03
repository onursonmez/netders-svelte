import { create, test, skipWhen, enforce, warn, only } from "vest"
import { getUserIsExists } from '/src/repository/user'

const contactValidationSuite = create((data = {}, currentField) => {
    only(currentField);

    test("firstName", "Ad alanı zorunludur", () => {
        enforce(data.firstName).isNotBlank();
    });

    test("lastName", "Soyad alanı zorunludur", () => {
        enforce(data.lastName).isNotBlank();
    });

    test("email", "E-posta alanı zorunludur", () => {
        enforce(data.email).isNotBlank();
    });

    test("phone", "Telefon alanı zorunludur", () => {
        enforce(data.phone).isNotBlank();
    });

    test("message", "Mesaj alanı zorunludur", () => {
        enforce(data.message).isNotBlank();
    });
});

export default contactValidationSuite
