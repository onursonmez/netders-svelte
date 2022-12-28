import { getUserPhoto } from '/src/repository/user'

let photoUrl = import.meta.env.VITE_CDN_URL + 'icon-user.png'

export async function getUserPhotoFunction(username, genderName) {

    const response = await getUserPhoto(username);

    if(response.url){
        photoUrl = import.meta.env.VITE_BASE_URL + '/' + response.url
    } else {
        if(genderName === 'Erkek'){
            photoUrl = import.meta.env.VITE_CDN_URL + 'icon-male.png'
        }
        if(genderName === 'Kadın'){
            photoUrl = import.meta.env.VITE_CDN_URL + 'icon-female.png'
        }
    }

    return photoUrl
}
