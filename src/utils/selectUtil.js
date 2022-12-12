
String.prototype.turkishToLower = function(){
    let string = this;
    let letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
    string = string.replace(/(([İIŞĞÜÇÖ]))/g, function(letter){ return letters[letter]; })
    return string.toLowerCase();
}
export let itemFilter = (label, filterText, option) => label.turkishToLower().includes(filterText.turkishToLower());
