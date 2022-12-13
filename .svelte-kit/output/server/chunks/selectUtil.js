const Item_svelte_svelte_type_style_lang = "";
const List_svelte_svelte_type_style_lang = "";
const Selection_svelte_svelte_type_style_lang = "";
const MultiSelection_svelte_svelte_type_style_lang = "";
const VirtualList_svelte_svelte_type_style_lang = "";
const Select_svelte_svelte_type_style_lang = "";
String.prototype.turkishToLower = function() {
  let string = this;
  let letters = { "\u0130": "i", "I": "\u0131", "\u015E": "\u015F", "\u011E": "\u011F", "\xDC": "\xFC", "\xD6": "\xF6", "\xC7": "\xE7" };
  string = string.replace(/(([İIŞĞÜÇÖ]))/g, function(letter) {
    return letters[letter];
  });
  return string.toLowerCase();
};
let itemFilter = (label, filterText, option) => label.turkishToLower().includes(filterText.turkishToLower());
export {
  itemFilter as i
};
