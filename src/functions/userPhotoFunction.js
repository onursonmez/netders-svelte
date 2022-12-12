import { getUserPhoto } from '/src/repository/user'

let photoUrl = '/images/icon-user.png'

export async function getUserPhotoFunction(username, genderName) {

    const response = await getUserPhoto(username);

    if(response.url){
        photoUrl = import.meta.env.VITE_BASE_URL + '/' + response.url
    } else {
        if(genderName === 'Erkek'){
            photoUrl = '/' + 'images/icon-male.png'
        }
        if(genderName === 'Kadın'){
            photoUrl = '/' + 'images/icon-female.png'
        }
    }

    return photoUrl
}
