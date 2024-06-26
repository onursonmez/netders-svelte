const createImage = url =>
    new Promise((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', error => reject(error))
        image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
        image.src = url
    })

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 */
export default async function getCroppedImg(imageSrc, pixelCrop, watermark) {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
    )

    // loading the watermark image and transforming it into a pattern
    const result2 = await fetch(watermark);
    const blob2 = await result2.blob();
    const image2 = await createImageBitmap(blob2);
    const pattern = ctx.createPattern(image2, "no-repeat");

    // translating the watermark image to the bottom right corner
    ctx.translate(canvas.width - image2.width - 10, canvas.height - image2.height - 10);
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = pattern;
    ctx.fill();

    // As Base64 string
    return canvas.toDataURL('image/jpeg');

    // As a blob
    /*
    return new Promise((resolve, reject) => {
        canvas.toBlob(file => {
            resolve(URL.createObjectURL(file))
        }, 'image/jpeg')
    })
     */
}
