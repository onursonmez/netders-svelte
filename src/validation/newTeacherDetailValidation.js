import { create, test, skipWhen, enforce, warn, only } from "vest"
import { getUserIsExists } from '/src/repository/user'

const newTeacherDetailValidationSuite = create((data = {}, currentField) => {
    only(currentField);

    test("title", "Başlık alanı zorunludur", () => {
        enforce(data.title).isNotBlank();
    });

    test("about", "Hakkında alanı zorunludur", () => {
        enforce(data.about).isNotBlank();
    });

    test("about", "Hakkında alanına en az 100 karakter bilgi girmelisin", () => {
        enforce(data.about).longerThanOrEquals(100);
    });

    skipWhen(newTeacherDetailValidationSuite.get().hasErrors("username"), () => {
        test.memo(
            "username",
            "Kullanıcı adı kullanılmaktadır",
            () => {
                if (data.username) {
                    return doesUsernameExist(data.username);
                }
            },
            [data.username]
        );
    });

});

export default newTeacherDetailValidationSuite

async function doesUsernameExist(username) {
    let user = await getUserIsExists({username: username})
    enforce(user).notEquals(true);
}
