import { create, test, skipWhen, enforce, warn, only } from "vest"
import { getUserIsExists } from '/src/repository/user'

const newTeacherPersonalProfileValidationSuite = create((data = {}, currentField) => {
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

    test("gender", "Cinsiyet alanı zorunludur", () => {
        enforce(data.gender).isNotBlank();
    });

    test("privacyLastName", "Soyadı gizliliği alanı zorunludur", () => {
        enforce(data.privacyLastName).isNotBlank();
    });

    if(data.outsideTurkey){
        test("country", "Ülke alanı zorunludur", () => {
            enforce(data.country).isNotBlank();
        });
    } else {
        test("city", "Şehir alanı zorunludur", () => {
            enforce(data.city).isNotBlank();
        });

        test("county", "İlçe alanı zorunludur", () => {
            enforce(data.county).isNotBlank();
        });
    }

    skipWhen(newTeacherPersonalProfileValidationSuite.get().hasErrors("email"), () => {
        test.memo(
            "email",
            "E-posta adresi kullanılmaktadır",
            () => {
                if (data.email) {
                    return doesEmailExist(data.email);
                }
            },
            [data.email]
        );
    });

    skipWhen(newTeacherPersonalProfileValidationSuite.get().hasErrors("phone"), () => {
        test.memo(
            "phone",
            "Telefon numarası kullanılmaktadır",
            () => {
                if (data.phone) {
                    return doesPhoneExist(data.phone);
                }
            },
            [data.phone]
        );
    });
});

export default newTeacherPersonalProfileValidationSuite

async function doesEmailExist(email) {
    let user = await getUserIsExists({email: email})
    enforce(user).notEquals(true);
}

async function doesPhoneExist(phone) {
    let user = await getUserIsExists({phone: phone})
    enforce(user).notEquals(true);
}
