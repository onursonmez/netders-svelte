import { c as create_ssr_component, b as subscribe, j as createEventDispatcher, d as add_attribute, e as escape, f as each, v as validate_component, m as missing_component, w as set_store_value, x as onDestroy, y as tick, z as null_to_empty } from "../../../../../chunks/index.js";
import { M as MemberHorizontalNavigation } from "../../../../../chunks/MemberHorizontalNavigation.js";
import { u as userStore, g as gendersStore } from "../../../../../chunks/userStore.js";
import { c as citiesStore } from "../../../../../chunks/locationStore.js";
import "toastify-js";
import { w as writable } from "../../../../../chunks/index3.js";
var Sifter = function(items, settings2) {
  this.items = items;
  this.settings = settings2 || { diacritics: true };
};
Sifter.prototype.tokenize = function(query, respect_word_boundaries) {
  query = trim(String(query || "").toLowerCase());
  if (!query || !query.length)
    return [];
  var i, n, regex, letter;
  var tokens = [];
  var words = query.split(/ +/);
  for (i = 0, n = words.length; i < n; i++) {
    regex = escape_regex(words[i]);
    if (this.settings.diacritics) {
      for (letter in DIACRITICS) {
        if (DIACRITICS.hasOwnProperty(letter)) {
          regex = regex.replace(new RegExp(letter, "g"), DIACRITICS[letter]);
        }
      }
    }
    if (respect_word_boundaries)
      regex = "\\b" + regex;
    tokens.push({
      string: words[i],
      regex: new RegExp(regex, "i")
    });
  }
  return tokens;
};
Sifter.prototype.iterator = function(object, callback) {
  var iterator;
  if (Array.isArray(object)) {
    iterator = Array.prototype.forEach || function(callback2) {
      for (var i = 0, n = this.length; i < n; i++) {
        callback2(this[i], i, this);
      }
    };
  } else {
    iterator = function(callback2) {
      for (var key in this) {
        if (this.hasOwnProperty(key)) {
          callback2(this[key], key, this);
        }
      }
    };
  }
  iterator.apply(object, [callback]);
};
Sifter.prototype.getScoreFunction = function(search, options) {
  var self, fields, tokens, token_count, nesting;
  self = this;
  search = self.prepareSearch(search, options);
  tokens = search.tokens;
  fields = search.options.fields;
  token_count = tokens.length;
  nesting = search.options.nesting;
  var scoreValue = function(value, token) {
    var score, pos;
    if (!value)
      return 0;
    value = String(value || "");
    pos = value.search(token.regex);
    if (pos === -1)
      return 0;
    score = token.string.length / value.length;
    if (pos === 0)
      score += 0.5;
    return score;
  };
  var scoreObject = function() {
    var field_count = fields.length;
    if (!field_count) {
      return function() {
        return 0;
      };
    }
    if (field_count === 1) {
      return function(token, data) {
        return scoreValue(getattr(data, fields[0], nesting), token);
      };
    }
    return function(token, data) {
      for (var i = 0, sum = 0; i < field_count; i++) {
        sum += scoreValue(getattr(data, fields[i], nesting), token);
      }
      return sum / field_count;
    };
  }();
  if (!token_count) {
    return function() {
      return 0;
    };
  }
  if (token_count === 1) {
    return function(data) {
      return scoreObject(tokens[0], data);
    };
  }
  if (search.options.conjunction === "and") {
    return function(data) {
      var score;
      for (var i = 0, sum = 0; i < token_count; i++) {
        score = scoreObject(tokens[i], data);
        if (score <= 0)
          return 0;
        sum += score;
      }
      return sum / token_count;
    };
  } else {
    return function(data) {
      for (var i = 0, sum = 0; i < token_count; i++) {
        sum += scoreObject(tokens[i], data);
      }
      return sum / token_count;
    };
  }
};
Sifter.prototype.getSortFunction = function(search, options) {
  var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;
  self = this;
  search = self.prepareSearch(search, options);
  sort = !search.query && options.sort_empty || options.sort;
  get_field = function(name, result) {
    if (name === "$score")
      return result.score;
    return getattr(self.items[result.id], name, options.nesting);
  };
  fields = [];
  if (sort) {
    for (i = 0, n = sort.length; i < n; i++) {
      if (search.query || sort[i].field !== "$score") {
        fields.push(sort[i]);
      }
    }
  }
  if (search.query) {
    implicit_score = true;
    for (i = 0, n = fields.length; i < n; i++) {
      if (fields[i].field === "$score") {
        implicit_score = false;
        break;
      }
    }
    if (implicit_score) {
      fields.unshift({ field: "$score", direction: "desc" });
    }
  } else {
    for (i = 0, n = fields.length; i < n; i++) {
      if (fields[i].field === "$score") {
        fields.splice(i, 1);
        break;
      }
    }
  }
  multipliers = [];
  for (i = 0, n = fields.length; i < n; i++) {
    multipliers.push(fields[i].direction === "desc" ? -1 : 1);
  }
  fields_count = fields.length;
  if (!fields_count) {
    return null;
  } else if (fields_count === 1) {
    field = fields[0].field;
    multiplier = multipliers[0];
    return function(a, b) {
      return multiplier * cmp(
        get_field(field, a),
        get_field(field, b)
      );
    };
  } else {
    return function(a, b) {
      var i2, result, field2;
      for (i2 = 0; i2 < fields_count; i2++) {
        field2 = fields[i2].field;
        result = multipliers[i2] * cmp(
          get_field(field2, a),
          get_field(field2, b)
        );
        if (result)
          return result;
      }
      return 0;
    };
  }
};
Sifter.prototype.prepareSearch = function(query, options) {
  if (typeof query === "object")
    return query;
  options = extend({}, options);
  var option_fields = options.fields;
  var option_sort = options.sort;
  var option_sort_empty = options.sort_empty;
  if (option_fields && !Array.isArray(option_fields))
    options.fields = [option_fields];
  if (option_sort && !Array.isArray(option_sort))
    options.sort = [option_sort];
  if (option_sort_empty && !Array.isArray(option_sort_empty))
    options.sort_empty = [option_sort_empty];
  return {
    options,
    query: String(query || "").toLowerCase(),
    tokens: this.tokenize(query, options.respect_word_boundaries),
    total: 0,
    items: []
  };
};
Sifter.prototype.search = function(query, options) {
  var self = this, score, search;
  var fn_sort;
  var fn_score;
  search = this.prepareSearch(query, options);
  options = search.options;
  query = search.query;
  fn_score = options.score || self.getScoreFunction(search);
  if (query.length) {
    self.iterator(self.items, function(item, id) {
      score = fn_score(item);
      if (options.filter === false || score > 0) {
        search.items.push({ "score": score, "id": id });
      }
    });
  } else {
    self.iterator(self.items, function(item, id) {
      search.items.push({ "score": 1, "id": id });
    });
  }
  fn_sort = self.getSortFunction(search, options);
  if (fn_sort)
    search.items.sort(fn_sort);
  search.total = search.items.length;
  if (typeof options.limit === "number") {
    search.items = search.items.slice(0, options.limit);
  }
  return search;
};
var cmp = function(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  a = asciifold(String(a || ""));
  b = asciifold(String(b || ""));
  if (a > b)
    return 1;
  if (b > a)
    return -1;
  return 0;
};
var extend = function(a, b) {
  var i, n, k, object;
  for (i = 1, n = arguments.length; i < n; i++) {
    object = arguments[i];
    if (!object)
      continue;
    for (k in object) {
      if (object.hasOwnProperty(k)) {
        a[k] = object[k];
      }
    }
  }
  return a;
};
var getattr = function(obj, name, nesting) {
  if (!obj || !name)
    return;
  if (!nesting)
    return obj[name];
  var names = name.split(".");
  while (names.length && (obj = obj[names.shift()]))
    ;
  return obj;
};
var trim = function(str) {
  return (str + "").replace(/^\s+|\s+$|/g, "");
};
var escape_regex = function(str) {
  return (str + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};
var DIACRITICS = {
  "a": "[a\u1E00\u1E01\u0102\u0103\xC2\xE2\u01CD\u01CE\u023A\u2C65\u0226\u0227\u1EA0\u1EA1\xC4\xE4\xC0\xE0\xC1\xE1\u0100\u0101\xC3\xE3\xC5\xE5\u0105\u0104\xC3\u0105\u0104]",
  "b": "[b\u2422\u03B2\u0392B\u0E3F\u{10301}\u16D2]",
  "c": "[c\u0106\u0107\u0108\u0109\u010C\u010D\u010A\u010BC\u0304c\u0304\xC7\xE7\u1E08\u1E09\u023B\u023C\u0187\u0188\u0255\u1D04\uFF23\uFF43]",
  "d": "[d\u010E\u010F\u1E0A\u1E0B\u1E10\u1E11\u1E0C\u1E0D\u1E12\u1E13\u1E0E\u1E0F\u0110\u0111D\u0326d\u0326\u0189\u0256\u018A\u0257\u018B\u018C\u1D6D\u1D81\u1D91\u0221\u1D05\uFF24\uFF44\xF0]",
  "e": "[e\xC9\xE9\xC8\xE8\xCA\xEA\u1E18\u1E19\u011A\u011B\u0114\u0115\u1EBC\u1EBD\u1E1A\u1E1B\u1EBA\u1EBB\u0116\u0117\xCB\xEB\u0112\u0113\u0228\u0229\u0118\u0119\u1D92\u0246\u0247\u0204\u0205\u1EBE\u1EBF\u1EC0\u1EC1\u1EC4\u1EC5\u1EC2\u1EC3\u1E1C\u1E1D\u1E16\u1E17\u1E14\u1E15\u0206\u0207\u1EB8\u1EB9\u1EC6\u1EC7\u2C78\u1D07\uFF25\uFF45\u0258\u01DD\u018F\u0190\u03B5]",
  "f": "[f\u0191\u0192\u1E1E\u1E1F]",
  "g": "[g\u0262\u20B2\u01E4\u01E5\u011C\u011D\u011E\u011F\u0122\u0123\u0193\u0260\u0120\u0121]",
  "h": "[h\u0124\u0125\u0126\u0127\u1E28\u1E29\u1E96\u1E96\u1E24\u1E25\u1E22\u1E23\u0266\u02B0\u01F6\u0195]",
  "i": "[i\xCD\xED\xCC\xEC\u012C\u012D\xCE\xEE\u01CF\u01D0\xCF\xEF\u1E2E\u1E2F\u0128\u0129\u012E\u012F\u012A\u012B\u1EC8\u1EC9\u0208\u0209\u020A\u020B\u1ECA\u1ECB\u1E2C\u1E2D\u0197\u0268\u0268\u0306\u1D7B\u1D96\u0130iI\u0131\u026A\uFF29\uFF49]",
  "j": "[j\u0237\u0134\u0135\u0248\u0249\u029D\u025F\u02B2]",
  "k": "[k\u0198\u0199\uA740\uA741\u1E30\u1E31\u01E8\u01E9\u1E32\u1E33\u1E34\u1E35\u03BA\u03F0\u20AD]",
  "l": "[l\u0141\u0142\u013D\u013E\u013B\u013C\u0139\u013A\u1E36\u1E37\u1E38\u1E39\u1E3C\u1E3D\u1E3A\u1E3B\u013F\u0140\u023D\u019A\u2C60\u2C61\u2C62\u026B\u026C\u1D85\u026D\u0234\u029F\uFF2C\uFF4C]",
  "n": "[n\u0143\u0144\u01F8\u01F9\u0147\u0148\xD1\xF1\u1E44\u1E45\u0145\u0146\u1E46\u1E47\u1E4A\u1E4B\u1E48\u1E49N\u0308n\u0308\u019D\u0272\u0220\u019E\u1D70\u1D87\u0273\u0235\u0274\uFF2E\uFF4E\u014A\u014B]",
  "o": "[o\xD8\xF8\xD6\xF6\xD3\xF3\xD2\xF2\xD4\xF4\u01D1\u01D2\u0150\u0151\u014E\u014F\u022E\u022F\u1ECC\u1ECD\u019F\u0275\u01A0\u01A1\u1ECE\u1ECF\u014C\u014D\xD5\xF5\u01EA\u01EB\u020C\u020D\u0555\u0585]",
  "p": "[p\u1E54\u1E55\u1E56\u1E57\u2C63\u1D7D\u01A4\u01A5\u1D71]",
  "q": "[q\uA756\uA757\u02A0\u024A\u024B\uA758\uA759q\u0303]",
  "r": "[r\u0154\u0155\u024C\u024D\u0158\u0159\u0156\u0157\u1E58\u1E59\u0210\u0211\u0212\u0213\u1E5A\u1E5B\u2C64\u027D]",
  "s": "[s\u015A\u015B\u1E60\u1E61\u1E62\u1E63\uA7A8\uA7A9\u015C\u015D\u0160\u0161\u015E\u015F\u0218\u0219S\u0308s\u0308]",
  "t": "[t\u0164\u0165\u1E6A\u1E6B\u0162\u0163\u1E6C\u1E6D\u01AE\u0288\u021A\u021B\u1E70\u1E71\u1E6E\u1E6F\u01AC\u01AD]",
  "u": "[u\u016C\u016D\u0244\u0289\u1EE4\u1EE5\xDC\xFC\xDA\xFA\xD9\xF9\xDB\xFB\u01D3\u01D4\u0170\u0171\u016C\u016D\u01AF\u01B0\u1EE6\u1EE7\u016A\u016B\u0168\u0169\u0172\u0173\u0214\u0215\u222A]",
  "v": "[v\u1E7C\u1E7D\u1E7E\u1E7F\u01B2\u028B\uA75E\uA75F\u2C71\u028B]",
  "w": "[w\u1E82\u1E83\u1E80\u1E81\u0174\u0175\u1E84\u1E85\u1E86\u1E87\u1E88\u1E89]",
  "x": "[x\u1E8C\u1E8D\u1E8A\u1E8B\u03C7]",
  "y": "[y\xDD\xFD\u1EF2\u1EF3\u0176\u0177\u0178\xFF\u1EF8\u1EF9\u1E8E\u1E8F\u1EF4\u1EF5\u024E\u024F\u01B3\u01B4]",
  "z": "[z\u0179\u017A\u1E90\u1E91\u017D\u017E\u017B\u017C\u1E92\u1E93\u1E94\u1E95\u01B5\u01B6]"
};
const asciifold = function() {
  var i, n, k, chunk;
  var foreignletters = "";
  var lookup = {};
  for (k in DIACRITICS) {
    if (DIACRITICS.hasOwnProperty(k)) {
      chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
      foreignletters += chunk;
      for (i = 0, n = chunk.length; i < n; i++) {
        lookup[chunk.charAt(i)] = k;
      }
    }
  }
  var regexp = new RegExp("[" + foreignletters + "]", "g");
  return function(str) {
    return str.replace(regexp, function(foreignletter) {
      return lookup[foreignletter];
    }).toLowerCase();
  };
}();
function isOutOfViewport(elem) {
  if (!elem)
    return false;
  const parentBounding = elem.parentElement.parentElement.getBoundingClientRect();
  const bounding = elem.getBoundingClientRect();
  const out = {};
  out.top = parentBounding.top < 0;
  out.left = parentBounding.left < 0;
  out.bottom = parentBounding.bottom + bounding.height > (window.innerHeight || document.documentElement.clientHeight);
  out.right = parentBounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  return out;
}
let xhr = null;
function fetchRemote(url) {
  return function(query, cb) {
    return new Promise((resolve, reject) => {
      xhr = new XMLHttpRequest();
      xhr.open("GET", `${url.replace("[query]", encodeURIComponent(query))}`);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send();
      xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status === 200) {
            try {
              const resp = JSON.parse(this.response);
              resolve(cb ? cb(resp) : resp.data || resp.items || resp.options || resp);
            } catch (e) {
              console.warn("[Svelecte]:Fetch - error handling fetch response", e);
              reject();
            }
          } else {
            reject();
          }
        }
      };
    });
  };
}
function debounce(fn, delay) {
  let timeout;
  return function() {
    const self = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn.apply(self, args);
    }, delay);
  };
}
let itemHtml;
function highlightSearch(item, isSelected, $inputValue, formatter, disableHighlight) {
  const itemHtmlText = formatter ? formatter(item, isSelected, $inputValue) : item;
  if ($inputValue == "" || item.isSelected || disableHighlight) {
    return '<div class="sv-item-content">' + itemHtmlText + "</div>";
  }
  if (!itemHtml) {
    itemHtml = document.createElement("div");
    itemHtml.className = "sv-item-content";
  }
  itemHtml.innerHTML = itemHtmlText;
  const pattern = asciifold($inputValue);
  pattern.split(" ").filter((e) => e).forEach((pat) => {
    highlight(itemHtml, pat);
  });
  return itemHtml.outerHTML;
}
const highlight = function(node, regex) {
  let skip = 0;
  if (node.nodeType === 3) {
    const folded = asciifold(node.data);
    let pos = folded.indexOf(regex);
    pos -= folded.substr(0, pos).toUpperCase().length - folded.substr(0, pos).length;
    if (pos >= 0) {
      const spannode = document.createElement("span");
      spannode.className = "highlight";
      const middlebit = node.splitText(pos);
      middlebit.splitText(regex.length);
      const middleclone = middlebit.cloneNode(true);
      spannode.appendChild(middleclone);
      middlebit.parentNode.replaceChild(spannode, middlebit);
      skip = 1;
    }
  } else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName) && (node.className !== "highlight" || node.tagName !== "SPAN")) {
    for (var i = 0; i < node.childNodes.length; ++i) {
      i += highlight(node.childNodes[i], regex);
    }
  }
  return skip;
};
function fieldInit(type, options, config2) {
  const isValue = type === "value";
  if (config2.isOptionArray)
    return isValue ? "value" : "label";
  let val = isValue ? "value" : "text";
  if (options && options.length) {
    const firstItem = options[0][config2.optItems] ? options[0][config2.optItems][0] : options[0];
    if (!firstItem)
      return val;
    const autoAddItem = isValue ? 0 : 1;
    const guessList = isValue ? ["id", "value", "ID"] : ["name", "title", "label"];
    val = Object.keys(firstItem).filter((prop) => guessList.includes(prop)).concat([Object.keys(firstItem)[autoAddItem]]).shift();
  }
  return val;
}
function defaultCreateFilter(val, options) {
  return (val || "").replace(/\t/g, " ").trim().split(" ").filter((ch) => ch).join(" ");
}
function defaultCreateTransform(inputValue, creatablePrefix, valueField, labelField) {
  return {
    [valueField]: inputValue,
    [labelField]: creatablePrefix + inputValue
  };
}
const settings = {
  disabled: false,
  valueField: null,
  labelField: null,
  groupLabelField: "label",
  groupItemsField: "options",
  disabledField: "$disabled",
  placeholder: "Select",
  valueAsObject: false,
  searchable: true,
  clearable: false,
  selectOnTab: false,
  resetOnBlur: true,
  resetOnSelect: true,
  fetchResetOnBlur: true,
  multiple: false,
  closeAfterSelect: false,
  max: 0,
  collapseSelection: false,
  creatable: false,
  creatablePrefix: "*",
  keepCreated: true,
  allowEditing: false,
  delimiter: ",",
  fetchCallback: null,
  minQuery: 1,
  lazyDropdown: true,
  virtualList: false,
  vlItemSize: null,
  vlHeight: null,
  i18n: {
    empty: "No options",
    nomatch: "No matching options",
    max: (num) => `Maximum items ${num} selected`,
    fetchBefore: "Type to start searching",
    fetchQuery: (minQuery, inputLength) => `Type ${minQuery > 1 && minQuery > inputLength ? `at least ${minQuery - inputLength} characters ` : ""}to start searching`,
    fetchInit: "Fetching data, please wait...",
    fetchEmpty: "No data related to your search",
    collapsedSelection: (count) => `${count} selected`,
    createRowLabel: (value) => `Create '${value}'`
  },
  collapseSelectionFn: function(selectionCount, selection) {
    return this.collapsedSelection(selectionCount);
  }
};
function initSelection(initialValue, valueAsObject, config2) {
  if (valueAsObject)
    return Array.isArray(initialValue) ? initialValue : [initialValue];
  const _initialValue = Array.isArray(initialValue) ? initialValue : [initialValue];
  const valueField = config2.labelAsValue ? config2.labelField : config2.valueField;
  const initialSelection = this.reduce((res, val, i) => {
    if (val[config2.optItems] && val[config2.optItems].length) {
      const selected = val[config2.optItems].reduce((res2, groupVal) => {
        if (_initialValue.includes(groupVal[valueField]))
          res2.push(groupVal);
        return res2;
      }, []);
      if (selected.length) {
        res.push(...selected);
        return res;
      }
    }
    if (_initialValue.includes(typeof val === "object" ? val[valueField] : config2.labelAsValue ? val : i)) {
      if (config2.isOptionArray) {
        val = {
          [config2.valueField]: i,
          [config2.labelField]: val
        };
      }
      res.push(val);
    }
    return res;
  }, []);
  return initialSelection.sort((a, b) => _initialValue.indexOf(a[valueField]) < _initialValue.indexOf(b[valueField]) ? -1 : 1);
}
function flatList(options, config2) {
  const flatOpts = options.reduce((res, opt, i) => {
    if (config2.isOptionArray) {
      res.push({
        [config2.valueField]: i,
        [config2.labelField]: opt
      });
      return res;
    }
    if (opt[config2.optItems] && opt[config2.optItems].length) {
      config2.optionsWithGroups = true;
      res.push({ label: opt[config2.optLabel], $isGroupHeader: true });
      res.push(...opt[config2.optItems].map((_opt) => {
        _opt.$isGroupItem = true;
        return _opt;
      }));
      return res;
    }
    res.push(opt);
    return res;
  }, []);
  updateOptionProps(flatOpts, config2);
  return flatOpts;
}
function updateOptionProps(options, config2) {
  if (config2.isOptionArray) {
    if (!config2.optionProps) {
      config2.optionProps = ["value", "label"];
    }
  }
  options.some((opt) => {
    if (opt.$isGroupHeader)
      return false;
    config2.optionProps = getFilterProps(opt);
    return true;
  });
}
function getFilterProps(object) {
  if (object.options)
    object = object.options[0];
  const exclude = ["$disabled", "$isGroupHeader", "$isGroupItem"];
  return Object.keys(object).filter((prop) => !exclude.includes(prop));
}
function filterList(options, inputValue, excludeSelected, sifterSearchField, sifterSortField, config2) {
  if (excludeSelected) {
    options = options.filter((opt) => !excludeSelected.has(opt[config2.valueField])).filter((opt, idx, self) => {
      if (opt.$isGroupHeader && (self[idx + 1] && self[idx + 1].$isGroupHeader || self.length <= 1 || self.length - 1 === idx))
        return false;
      return true;
    });
  }
  if (!inputValue)
    return options;
  const sifter = new Sifter(options);
  if (config2.optionsWithGroups) {
    sifter.getSortFunction = () => null;
  }
  let conjunction = "and";
  if (inputValue.startsWith("|| ")) {
    conjunction = "or";
    inputValue = inputValue.substr(2);
  }
  const result = sifter.search(inputValue, {
    fields: sifterSearchField || config2.optionProps,
    sort: createSifterSortField(sifterSortField || config2.labelField),
    conjunction
  });
  const mapped = config2.optionsWithGroups ? result.items.reduce((res, item) => {
    const opt = options[item.id];
    if (excludeSelected && opt.isSelected)
      return res;
    const lastPos = res.push(opt);
    if (opt.$isGroupItem) {
      const prevItems = options.slice(0, item.id);
      let prev = null;
      do {
        prev = prevItems.pop();
        prev && prev.$isGroupHeader && !res.includes(prev) && res.splice(lastPos - 1, 0, prev);
      } while (prev && !prev.$isGroupHeader);
    }
    return res;
  }, []) : result.items.map((item) => options[item.id]);
  return mapped;
}
function createSifterSortField(prop) {
  return [{ field: prop, direction: "asc" }];
}
function indexList(options, includeCreateRow, config2) {
  const map = config2.optionsWithGroups ? options.reduce((res, opt, index) => {
    res.push(opt.$isGroupHeader ? "" : index);
    return res;
  }, []) : Object.keys(options);
  return {
    map,
    first: map[0] !== "" ? 0 : 1,
    last: map.length ? map.length - (includeCreateRow ? 0 : 1) : 0,
    hasCreateRow: !!includeCreateRow,
    next(curr, prevOnUndefined) {
      const val = this.map[++curr];
      if (this.hasCreateRow && curr === this.last)
        return this.last;
      if (val === "")
        return this.next(curr);
      if (val === void 0) {
        if (!this.map.length)
          return 0;
        if (curr > this.map.length)
          curr = this.first - 1;
        return prevOnUndefined === true ? this.prev(curr) : this.next(curr);
      }
      return val;
    },
    prev(curr) {
      const val = this.map[--curr];
      if (this.hasCreateRow && curr === this.first)
        return this.first;
      if (val === "")
        return this.prev(curr);
      if (!val)
        return this.last;
      return val;
    }
  };
}
const Input_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".inputBox.svelte-m38b7i{box-sizing:content-box;width:19px;background:rgba(0, 0, 0, 0) none repeat scroll 0px center;border:0px none;font-size:inherit;font-family:inherit;opacity:1;outline:currentcolor none 0px;padding:0px;color:inherit;margin:-2px 0 0;height:20px}.inputBox.svelte-m38b7i::-moz-placeholder{color:var(--sv-placeholder-color, #ccccd6)}.inputBox.svelte-m38b7i::placeholder{color:var(--sv-placeholder-color, #ccccd6)}.inputBox.svelte-m38b7i:-moz-read-only{width:100%}.inputBox.svelte-m38b7i:read-only{width:100%}.shadow-text.svelte-m38b7i{opacity:0;position:absolute;left:100%;z-index:-100;min-width:24px;white-space:nowrap;top:0;left:0}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSingleFilled;
  let placeholderText;
  let shadowText;
  let widthAddition;
  let inputStyle;
  let enterHint;
  let $inputValue, $$unsubscribe_inputValue;
  let $$unsubscribe_hasDropdownOpened;
  const focus = () => inputRef.focus();
  let { inputId } = $$props;
  let { placeholder } = $$props;
  let { searchable } = $$props;
  let { disabled } = $$props;
  let { multiple } = $$props;
  let { inputValue } = $$props;
  $$unsubscribe_inputValue = subscribe(inputValue, (value) => $inputValue = value);
  let { hasDropdownOpened } = $$props;
  $$unsubscribe_hasDropdownOpened = subscribe(hasDropdownOpened, (value) => value);
  let { selectedOptions } = $$props;
  let { isAndroid } = $$props;
  let inputRef = null;
  let shadowWidth = 0;
  createEventDispatcher();
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.searchable === void 0 && $$bindings.searchable && searchable !== void 0)
    $$bindings.searchable(searchable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0)
    $$bindings.inputValue(inputValue);
  if ($$props.hasDropdownOpened === void 0 && $$bindings.hasDropdownOpened && hasDropdownOpened !== void 0)
    $$bindings.hasDropdownOpened(hasDropdownOpened);
  if ($$props.selectedOptions === void 0 && $$bindings.selectedOptions && selectedOptions !== void 0)
    $$bindings.selectedOptions(selectedOptions);
  if ($$props.isAndroid === void 0 && $$bindings.isAndroid && isAndroid !== void 0)
    $$bindings.isAndroid(isAndroid);
  $$result.css.add(css$5);
  isSingleFilled = selectedOptions.length > 0 && multiple === false;
  placeholderText = selectedOptions.length > 0 ? "" : placeholder;
  shadowText = $inputValue || placeholderText;
  widthAddition = selectedOptions.length === 0 ? 19 : 12;
  inputStyle = `width: ${isSingleFilled ? 2 : shadowWidth + widthAddition}px`;
  enterHint = isSingleFilled ? null : "enter";
  $$unsubscribe_inputValue();
  $$unsubscribe_hasDropdownOpened();
  return `
<input type="${"text"}" class="${"inputBox svelte-m38b7i"}" ${disabled ? "disabled" : ""} ${!searchable ? "readonly" : ""}${add_attribute("id", inputId, 0)}${add_attribute("style", inputStyle, 0)}${add_attribute("placeholder", placeholderText, 0)}${add_attribute("enterkeyhint", enterHint, 0)}${add_attribute("this", inputRef, 0)}${add_attribute("value", $inputValue, 0)}>
<div class="${"shadow-text svelte-m38b7i"}">${escape(shadowText)}</div>
`;
});
const Control_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '.sv-control.svelte-1ig2cio{background-color:var(--sv-bg);border:var(--sv-border);border-radius:4px;min-height:var(--sv-min-height)}.sv-control.is-active.svelte-1ig2cio{border:var(--sv-active-border);outline:var(--sv-active-outline)}.sv-control.is-disabled.svelte-1ig2cio{background-color:var(--sv-disabled-bg);border-color:var(--sv-disabled-border-color);cursor:default;flex-wrap:wrap;justify-content:space-between;outline:currentcolor none 0px !important;position:relative;transition:all 100ms ease 0s}.sv-control.svelte-1ig2cio{display:flex;align-items:center;box-sizing:border-box}.sv-content.svelte-1ig2cio{align-items:center;display:flex;flex:1 1 0%;flex-wrap:nowrap;padding:0 0 0 6px;position:relative;overflow:hidden;box-sizing:border-box}.sv-content.sv-input-row.has-multiSelection.svelte-1ig2cio{flex-flow:wrap}.indicator.svelte-1ig2cio{position:relative;align-items:center;align-self:stretch;display:flex;flex-shrink:0;box-sizing:border-box}.indicator-container.svelte-1ig2cio{color:var(--sv-icon-color);display:flex;padding:8px;transition:color 150ms ease 0s;box-sizing:border-box}.indicator-container.svelte-1ig2cio:hover{color:var(--sv-icon-hover) }.indicator-separator.svelte-1ig2cio{align-self:stretch;background-color:var(--sv-border-color);margin-bottom:8px;margin-top:8px;width:1px;box-sizing:border-box}.indicator-icon.svelte-1ig2cio{display:inline-block;fill:currentcolor;line-height:1;stroke:currentcolor;stroke-width:0px}.is-loading.svelte-1ig2cio:after{animation:svelte-1ig2cio-spinAround .5s infinite linear;border:var(--sv-loader-border);border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:"";display:block;height:20px;width:20px;right:8px;top:calc(50% - 10px);position:absolute !important;box-sizing:border-box}@keyframes svelte-1ig2cio-spinAround{from{transform:rotate(0deg)\r\n  }to{transform:rotate(359deg)\r\n  }}',
  map: null
};
const Control = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $inputValue, $$unsubscribe_inputValue;
  let $hasDropdownOpened, $$unsubscribe_hasDropdownOpened;
  let $hasFocus, $$unsubscribe_hasFocus;
  let { clearable } = $$props;
  let { searchable } = $$props;
  let { renderer } = $$props;
  let { disabled } = $$props;
  let { placeholder } = $$props;
  let { multiple } = $$props;
  let { resetOnBlur } = $$props;
  let { collapseSelection } = $$props;
  let { inputId } = $$props;
  let { inputValue } = $$props;
  $$unsubscribe_inputValue = subscribe(inputValue, (value) => $inputValue = value);
  let { hasFocus } = $$props;
  $$unsubscribe_hasFocus = subscribe(hasFocus, (value) => $hasFocus = value);
  let { hasDropdownOpened } = $$props;
  $$unsubscribe_hasDropdownOpened = subscribe(hasDropdownOpened, (value) => $hasDropdownOpened = value);
  let { selectedOptions } = $$props;
  let { isFetchingData } = $$props;
  let { dndzone } = $$props;
  let { currentValueField } = $$props;
  let { itemComponent } = $$props;
  let { isAndroid } = $$props;
  function focusControl(event) {
    if (disabled)
      return;
    if (!event) {
      !$hasFocus && refInput.focus();
      set_store_value(hasDropdownOpened, $hasDropdownOpened = true, $hasDropdownOpened);
      return;
    }
    if (!$hasFocus) {
      refInput.focus();
    } else {
      set_store_value(hasDropdownOpened, $hasDropdownOpened = !$hasDropdownOpened, $hasDropdownOpened);
    }
  }
  createEventDispatcher();
  let doCollapse = true;
  let refInput = void 0;
  if ($$props.clearable === void 0 && $$bindings.clearable && clearable !== void 0)
    $$bindings.clearable(clearable);
  if ($$props.searchable === void 0 && $$bindings.searchable && searchable !== void 0)
    $$bindings.searchable(searchable);
  if ($$props.renderer === void 0 && $$bindings.renderer && renderer !== void 0)
    $$bindings.renderer(renderer);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.resetOnBlur === void 0 && $$bindings.resetOnBlur && resetOnBlur !== void 0)
    $$bindings.resetOnBlur(resetOnBlur);
  if ($$props.collapseSelection === void 0 && $$bindings.collapseSelection && collapseSelection !== void 0)
    $$bindings.collapseSelection(collapseSelection);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0)
    $$bindings.inputValue(inputValue);
  if ($$props.hasFocus === void 0 && $$bindings.hasFocus && hasFocus !== void 0)
    $$bindings.hasFocus(hasFocus);
  if ($$props.hasDropdownOpened === void 0 && $$bindings.hasDropdownOpened && hasDropdownOpened !== void 0)
    $$bindings.hasDropdownOpened(hasDropdownOpened);
  if ($$props.selectedOptions === void 0 && $$bindings.selectedOptions && selectedOptions !== void 0)
    $$bindings.selectedOptions(selectedOptions);
  if ($$props.isFetchingData === void 0 && $$bindings.isFetchingData && isFetchingData !== void 0)
    $$bindings.isFetchingData(isFetchingData);
  if ($$props.dndzone === void 0 && $$bindings.dndzone && dndzone !== void 0)
    $$bindings.dndzone(dndzone);
  if ($$props.currentValueField === void 0 && $$bindings.currentValueField && currentValueField !== void 0)
    $$bindings.currentValueField(currentValueField);
  if ($$props.itemComponent === void 0 && $$bindings.itemComponent && itemComponent !== void 0)
    $$bindings.itemComponent(itemComponent);
  if ($$props.isAndroid === void 0 && $$bindings.isAndroid && isAndroid !== void 0)
    $$bindings.isAndroid(isAndroid);
  if ($$props.focusControl === void 0 && $$bindings.focusControl && focusControl !== void 0)
    $$bindings.focusControl(focusControl);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${[
      "sv-control svelte-1ig2cio",
      ($hasFocus ? "is-active" : "") + " " + (disabled ? "is-disabled" : "")
    ].join(" ").trim()}">${slots.icon ? slots.icon({}) : ``}
  
  <div class="${[
      "sv-content sv-input-row svelte-1ig2cio",
      multiple ? "has-multiSelection" : ""
    ].join(" ").trim()}">${selectedOptions.length ? `${multiple && collapseSelection && doCollapse ? `${escape(collapseSelection(selectedOptions.length, selectedOptions))}` : `${each(selectedOptions, (opt) => {
      return `<div>${validate_component(itemComponent || missing_component, "svelte:component").$$render(
        $$result,
        {
          formatter: renderer,
          item: opt,
          isSelected: true,
          isMultiple: multiple,
          inputValue: $inputValue
        },
        {},
        {}
      )}
        </div>`;
    })}`}` : ``}
    
    ${validate_component(Input, "Input").$$render(
      $$result,
      {
        disabled,
        searchable,
        placeholder,
        multiple,
        inputId,
        inputValue,
        hasDropdownOpened,
        selectedOptions,
        isAndroid,
        this: refInput
      },
      {
        this: ($$value) => {
          refInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
  
  <div class="${["indicator svelte-1ig2cio", isFetchingData ? "is-loading" : ""].join(" ").trim()}">${clearable && selectedOptions.length && !disabled ? `<div aria-hidden="${"true"}" class="${"indicator-container close-icon svelte-1ig2cio"}"><svg class="${"indicator-icon svelte-1ig2cio"}" height="${"20"}" width="${"20"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}" focusable="${"false"}"><path d="${"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}"></path></svg></div>` : ``}
    ${clearable ? `<span class="${"indicator-separator svelte-1ig2cio"}"></span>` : ``}
    <div aria-hidden="${"true"}" class="${"indicator-container svelte-1ig2cio"}"><svg width="${"20"}" height="${"20"}" class="${"indicator-icon svelte-1ig2cio"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}" focusable="${"false"}"><path d="${"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}"></path></svg></div></div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_inputValue();
  $$unsubscribe_hasDropdownOpened();
  $$unsubscribe_hasFocus();
  return $$rendered;
});
const VirtualList_svelte_svelte_type_style_lang = "";
(() => {
  let result = false;
  try {
    const arg = Object.defineProperty({}, "passive", {
      get() {
        result = { passive: true };
        return true;
      }
    });
    window.addEventListener("testpassive", arg, arg);
    window.remove("testpassive", arg, arg);
  } catch (e) {
  }
  return result;
})();
const Dropdown_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.sv-dropdown.svelte-17yw2k6.svelte-17yw2k6{box-sizing:border-box;position:absolute;background-color:var(--sv-bg);width:100%;display:none;overflow-y:auto;overflow-x:hidden;border:1px solid rgba(0,0,0,0.15);border-radius:.25rem;box-shadow:var(--sv-dropdown-shadow);z-index:2}.sv-dropdown.is-virtual.svelte-17yw2k6 .sv-dropdown-scroll.svelte-17yw2k6{overflow-y:hidden}.sv-dropdown-scroll.svelte-17yw2k6.svelte-17yw2k6{padding:4px;box-sizing:border-box;max-height:var(--sv-dropdown-height);overflow-y:auto;overflow-x:hidden}.sv-dropdown-scroll.is-empty.svelte-17yw2k6.svelte-17yw2k6{padding:0}.sv-dropdown[aria-expanded="true"].svelte-17yw2k6.svelte-17yw2k6{display:block}.sv-dropdown-content.max-reached.svelte-17yw2k6.svelte-17yw2k6{opacity:0.75;cursor:not-allowed}.sv-dropdown-scroll.svelte-17yw2k6:not(.is-empty)+.creatable-row-wrap.svelte-17yw2k6{border-top:1px solid #efefef}.creatable-row-wrap.svelte-17yw2k6.svelte-17yw2k6{padding:4px}.creatable-row.svelte-17yw2k6.svelte-17yw2k6{box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;border-radius:2px;padding:3px 3px 3px 6px}.creatable-row.svelte-17yw2k6.svelte-17yw2k6:hover,.creatable-row.svelte-17yw2k6.svelte-17yw2k6:active,.creatable-row.active.svelte-17yw2k6.svelte-17yw2k6{background-color:var(--sv-item-active-bg)}.creatable-row.active.is-disabled.svelte-17yw2k6.svelte-17yw2k6{opacity:0.5;background-color:rgb(252, 186, 186)}.creatable-row.is-disabled.svelte-17yw2k6.svelte-17yw2k6{opacity:0.5;cursor:not-allowed}.shortcut.svelte-17yw2k6.svelte-17yw2k6{display:flex;align-items:center;align-content:center}.shortcut.svelte-17yw2k6>kbd.svelte-17yw2k6{border:1px solid #efefef;border-radius:4px;padding:0px 6px;margin:-1px 0;background-color:white;line-height:1.6;height:22px}.empty-list-row.svelte-17yw2k6.svelte-17yw2k6{min-width:0px;text-overflow:ellipsis;white-space:nowrap;box-sizing:border-box;border-radius:2px;overflow:hidden;padding:7px 7px 7px 10px;text-align:left}',
  map: null
};
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_hasDropdownOpened;
  let { lazyDropdown } = $$props;
  let { creatable } = $$props;
  let { maxReached = false } = $$props;
  let { dropdownIndex = 0 } = $$props;
  let { renderer } = $$props;
  let { disableHighlight } = $$props;
  let { items = [] } = $$props;
  let { alreadyCreated } = $$props;
  let { virtualList } = $$props;
  let { vlItemSize } = $$props;
  let { vlHeight } = $$props;
  let { inputValue } = $$props;
  let { multiple } = $$props;
  let { listIndex } = $$props;
  let { hasDropdownOpened } = $$props;
  $$unsubscribe_hasDropdownOpened = subscribe(hasDropdownOpened, (value) => value);
  let { listMessage } = $$props;
  let { disabledField } = $$props;
  let { createLabel } = $$props;
  let { metaKey } = $$props;
  let { itemComponent } = $$props;
  function scrollIntoView(params) {
    if (virtualList)
      return;
    const focusedEl = container.querySelector(`[data-pos="${dropdownIndex}"]`);
    if (!focusedEl)
      return;
    const focusedRect = focusedEl.getBoundingClientRect();
    const menuRect = scrollContainer.getBoundingClientRect();
    const overScroll = focusedEl.offsetHeight / 3;
    const centerOffset = params && params.center ? scrollContainer.offsetHeight / 2 : 0;
    switch (true) {
      case focusedEl.offsetTop < scrollContainer.scrollTop:
        scrollContainer.scrollTop = focusedEl.offsetTop - overScroll + centerOffset;
        break;
      case focusedEl.offsetTop + focusedRect.height > scrollContainer.scrollTop + menuRect.height:
        scrollContainer.scrollTop = focusedEl.offsetTop + focusedRect.height - scrollContainer.offsetHeight + overScroll + centerOffset;
        break;
    }
  }
  function getDimensions() {
    if (virtualList) {
      return [scrollContainer.offsetHeight, vl_itemSize];
    }
    return [scrollContainer.offsetHeight, container.firstElementChild.offsetHeight];
  }
  createEventDispatcher();
  let container;
  let scrollContainer;
  let isMounted = false;
  let hasEmptyList = false;
  let renderDropdown = !lazyDropdown;
  let vl_height = vlHeight;
  let vl_itemSize = vlItemSize;
  let vl_autoMode = vlHeight === null && vlItemSize === null;
  function positionDropdown(val) {
    if (!renderDropdown)
      return;
    const outVp = isOutOfViewport(scrollContainer);
    if (outVp.bottom && !outVp.top) {
      scrollContainer.parentElement.style.bottom = scrollContainer.parentElement.parentElement.clientHeight + 1 + "px";
    } else if (!val || outVp.top) {
      scrollContainer.parentElement.style.bottom = "";
    }
  }
  function virtualListDimensionsResolver() {
    return;
  }
  let dropdownStateSubscription = () => {
  };
  onDestroy(() => dropdownStateSubscription());
  if ($$props.lazyDropdown === void 0 && $$bindings.lazyDropdown && lazyDropdown !== void 0)
    $$bindings.lazyDropdown(lazyDropdown);
  if ($$props.creatable === void 0 && $$bindings.creatable && creatable !== void 0)
    $$bindings.creatable(creatable);
  if ($$props.maxReached === void 0 && $$bindings.maxReached && maxReached !== void 0)
    $$bindings.maxReached(maxReached);
  if ($$props.dropdownIndex === void 0 && $$bindings.dropdownIndex && dropdownIndex !== void 0)
    $$bindings.dropdownIndex(dropdownIndex);
  if ($$props.renderer === void 0 && $$bindings.renderer && renderer !== void 0)
    $$bindings.renderer(renderer);
  if ($$props.disableHighlight === void 0 && $$bindings.disableHighlight && disableHighlight !== void 0)
    $$bindings.disableHighlight(disableHighlight);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.alreadyCreated === void 0 && $$bindings.alreadyCreated && alreadyCreated !== void 0)
    $$bindings.alreadyCreated(alreadyCreated);
  if ($$props.virtualList === void 0 && $$bindings.virtualList && virtualList !== void 0)
    $$bindings.virtualList(virtualList);
  if ($$props.vlItemSize === void 0 && $$bindings.vlItemSize && vlItemSize !== void 0)
    $$bindings.vlItemSize(vlItemSize);
  if ($$props.vlHeight === void 0 && $$bindings.vlHeight && vlHeight !== void 0)
    $$bindings.vlHeight(vlHeight);
  if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0)
    $$bindings.inputValue(inputValue);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.listIndex === void 0 && $$bindings.listIndex && listIndex !== void 0)
    $$bindings.listIndex(listIndex);
  if ($$props.hasDropdownOpened === void 0 && $$bindings.hasDropdownOpened && hasDropdownOpened !== void 0)
    $$bindings.hasDropdownOpened(hasDropdownOpened);
  if ($$props.listMessage === void 0 && $$bindings.listMessage && listMessage !== void 0)
    $$bindings.listMessage(listMessage);
  if ($$props.disabledField === void 0 && $$bindings.disabledField && disabledField !== void 0)
    $$bindings.disabledField(disabledField);
  if ($$props.createLabel === void 0 && $$bindings.createLabel && createLabel !== void 0)
    $$bindings.createLabel(createLabel);
  if ($$props.metaKey === void 0 && $$bindings.metaKey && metaKey !== void 0)
    $$bindings.metaKey(metaKey);
  if ($$props.itemComponent === void 0 && $$bindings.itemComponent && itemComponent !== void 0)
    $$bindings.itemComponent(itemComponent);
  if ($$props.scrollIntoView === void 0 && $$bindings.scrollIntoView && scrollIntoView !== void 0)
    $$bindings.scrollIntoView(scrollIntoView);
  if ($$props.getDimensions === void 0 && $$bindings.getDimensions && getDimensions !== void 0)
    $$bindings.getDimensions(getDimensions);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    items.length;
    {
      {
        hasEmptyList = items.length < 1 && (creatable ? !inputValue : true);
        if (virtualList && vl_autoMode && isMounted && renderDropdown) {
          if (hasEmptyList)
            dropdownIndex = null;
          vl_itemSize = 0;
          tick().then(virtualListDimensionsResolver).then(positionDropdown);
        }
      }
    }
    Math.min(vl_height, Array.isArray(vl_itemSize) ? vl_itemSize.reduce(
      (res, num) => {
        res += num;
        return res;
      },
      0
    ) : items.length * vl_itemSize);
    $$rendered = `${``}`;
  } while (!$$settled);
  $$unsubscribe_hasDropdownOpened();
  return $$rendered;
});
const ItemClose_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".sv-item-btn.svelte-13waq8y.svelte-13waq8y{position:relative;display:inline-flex;align-items:center;align-self:stretch;padding:0 4px;box-sizing:border-box;border-radius:2px;border-width:0;margin:0;cursor:pointer;background-color:var(--sv-item-btn-bg, var(--sv-item-selected-bg))}.sv-item-btn.svelte-13waq8y.svelte-13waq8y:hover{background-color:var(--sv-item-btn-bg-hover)}.sv-item-btn.svelte-13waq8y>svg.svelte-13waq8y{fill:var(--sv-item-btn-icon, var(--sv-icon-color))}",
  map: null
};
const ItemClose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<button class="${"sv-item-btn svelte-13waq8y"}" tabindex="${"-1"}" data-action="${"deselect"}" type="${"button"}"><svg height="${"16"}" width="${"16"}" viewBox="${"0 0 20 20"}" aria-hidden="${"true"}" focusable="${"false"}" class="${"svelte-13waq8y"}"><path d="${"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}"></path></svg>
</button>`;
});
const Item_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".optgroup-header.svelte-uhkjju{padding:3px 3px 3px 6px;font-weight:bold}",
  map: null
};
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inputValue } = $$props;
  let { index = -1 } = $$props;
  let { item = {} } = $$props;
  let { isSelected = false } = $$props;
  let { isDisabled = false } = $$props;
  let { isMultiple = false } = $$props;
  let { formatter = null } = $$props;
  let { disableHighlight = false } = $$props;
  if ($$props.inputValue === void 0 && $$bindings.inputValue && inputValue !== void 0)
    $$bindings.inputValue(inputValue);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.isMultiple === void 0 && $$bindings.isMultiple && isMultiple !== void 0)
    $$bindings.isMultiple(isMultiple);
  if ($$props.formatter === void 0 && $$bindings.formatter && formatter !== void 0)
    $$bindings.formatter(formatter);
  if ($$props.disableHighlight === void 0 && $$bindings.disableHighlight && disableHighlight !== void 0)
    $$bindings.disableHighlight(disableHighlight);
  $$result.css.add(css$1);
  return `${item.$isGroupHeader ? `<div class="${"optgroup-header svelte-uhkjju"}"><b>${escape(item.label)}</b></div>` : `<div class="${["sv-item", isDisabled ? "is-disabled" : ""].join(" ").trim()}"${add_attribute("title", item.$created ? "Created item" : "", 0)}><!-- HTML_TAG_START -->${isSelected ? `<div class="sv-item-content">${formatter(item, isSelected, inputValue)}</div>` : highlightSearch(item, isSelected, inputValue, formatter, disableHighlight)}<!-- HTML_TAG_END -->
  ${isSelected && isMultiple ? `${validate_component(ItemClose, "ItemClose").$$render($$result, {}, {}, {})}` : ``}</div>`}`;
});
const Svelecte_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelecte-control.svelte-1cszduw{--sv-bg:#fff;--sv-color:inherit;--sv-min-height:38px;--sv-border-color:#ccc;--sv-border:1px solid var(--sv-border-color);--sv-active-border:1px solid #555;--sv-active-outline:none;--sv-disabled-bg:#f2f2f2;--sv-disabled-border-color:#e6e6e6;--sv-placeholder-color:#ccccc6;--sv-icon-color:#ccc;--sv-icon-hover:#999;--sv-loader-border:3px solid #dbdbdb;--sv-dropdown-shadow:0 6px 12px rgba(0,0,0,0.175);--sv-dropdown-height:250px;--sv-item-selected-bg:#efefef;--sv-item-color:#333333;--sv-item-active-color:var(--sv-item-color);--sv-item-active-bg:#F2F5F8;--sv-item-btn-bg:var(--sv-item-selected-bg);--sv-item-btn-bg-hover:#ddd;--sv-item-btn-icon:var(--sv-item-color);--sv-highlight-bg:yellow;--sv-highlight-color:var(--sv-item-color)}.svelecte.svelte-1cszduw{position:relative;flex:1 1 auto;color:var(--sv-color)}.svelecte.is-disabled.svelte-1cszduw{pointer-events:none}.icon-slot.svelte-1cszduw{display:flex}.is-hidden.svelte-1cszduw{opacity:0;position:absolute;z-index:-2;top:0;height:38px}.svelecte-control .has-multiSelection .sv-item,#dnd-action-dragged-el .sv-item{background-color:var(--sv-item-selected-bg);margin:2px 4px 2px 0}.svelecte-control .has-multiSelection .sv-item-content,.svelecte-control .sv-dropdown-content .sv-item,#dnd-action-dragged-el .sv-item-content{padding:3px 3px 3px 6px}.svelecte-control .sv-item,#dnd-action-dragged-el .sv-item{display:flex;min-width:0px;box-sizing:border-box;border-radius:2px;cursor:default}.svelecte-control .sv-item.is-disabled{opacity:0.5;cursor:not-allowed}.svelecte-control .sv-item-content,#dnd-action-dragged-el .sv-item-content{color:var(--sv-item-color, var(--sv-color));text-overflow:ellipsis;white-space:nowrap;box-sizing:border-box;border-radius:2px;overflow:hidden;width:100%}.svelecte-control .sv-dd-item-active > .sv-item{background-color:var(--sv-item-active-bg)}.svelecte-control .sv-dd-item-active > .sv-item .sv-item-content{color:var(--sv-item-active-color, var(--sv-item-color))}.svelecte-control .highlight{background-color:var(--sv-highlight-bg);color:var(--sv-highlight-color, var(--sv-color))}",
  map: null
};
const formatterList = {
  default(item) {
    return item[this.label];
  }
};
const config = settings;
const Svelecte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let flatItems;
  let maxReached;
  let availableItems;
  let listIndex;
  let listMessage;
  let itemRenderer;
  let dropdownInputValue;
  let $inputValue, $$unsubscribe_inputValue;
  let $$unsubscribe_hasDropdownOpened;
  let $hasFocus, $$unsubscribe_hasFocus;
  let { name = "svelecte" } = $$props;
  let { inputId = null } = $$props;
  let { required = false } = $$props;
  let { hasAnchor = false } = $$props;
  let { disabled = settings.disabled } = $$props;
  let { options = [] } = $$props;
  let { valueField = settings.valueField } = $$props;
  let { labelField = settings.labelField } = $$props;
  let { groupLabelField = settings.groupLabelField } = $$props;
  let { groupItemsField = settings.groupItemsField } = $$props;
  let { disabledField = settings.disabledField } = $$props;
  let { placeholder = "Select" } = $$props;
  let { searchable = settings.searchable } = $$props;
  let { clearable = settings.clearable } = $$props;
  let { renderer = null } = $$props;
  let { disableHighlight = false } = $$props;
  let { selectOnTab = settings.selectOnTab } = $$props;
  let { resetOnBlur = settings.resetOnBlur } = $$props;
  let { resetOnSelect = settings.resetOnSelect } = $$props;
  let { closeAfterSelect = settings.closeAfterSelect } = $$props;
  let { dndzone = () => ({
    noop: true,
    destroy: () => {
    }
  }) } = $$props;
  let { validatorAction = null } = $$props;
  let { dropdownItem = Item } = $$props;
  let { controlItem = Item } = $$props;
  let { multiple = settings.multiple } = $$props;
  let { max = settings.max } = $$props;
  let { collapseSelection = settings.collapseSelection } = $$props;
  let { creatable = settings.creatable } = $$props;
  let { creatablePrefix = settings.creatablePrefix } = $$props;
  let { allowEditing = settings.allowEditing } = $$props;
  let { keepCreated = settings.keepCreated } = $$props;
  let { delimiter = settings.delimiter } = $$props;
  let { createFilter = null } = $$props;
  let { createTransform = null } = $$props;
  let { fetch = null } = $$props;
  let { fetchMode = "auto" } = $$props;
  let { fetchCallback = settings.fetchCallback } = $$props;
  let { fetchResetOnBlur = true } = $$props;
  let { minQuery = settings.minQuery } = $$props;
  let { lazyDropdown = settings.lazyDropdown } = $$props;
  let { virtualList = settings.virtualList } = $$props;
  let { vlHeight = settings.vlHeight } = $$props;
  let { vlItemSize = settings.vlItemSize } = $$props;
  let { searchField = null } = $$props;
  let { sortField = null } = $$props;
  let { disableSifter = false } = $$props;
  let { class: className = "svelecte-control" } = $$props;
  let { style = null } = $$props;
  let { i18n = null } = $$props;
  let { readSelection = null } = $$props;
  let { value = null } = $$props;
  let { labelAsValue = false } = $$props;
  let { valueAsObject = settings.valueAsObject } = $$props;
  const focus = (event) => {
    refControl.focusControl(event);
  };
  const getSelection = (onlyValues) => {
    if (!selectedOptions.length)
      return multiple ? [] : null;
    const _selection = selectedOptions.map((opt) => onlyValues ? opt[labelAsValue ? currentLabelField : currentValueField] : Object.assign({}, opt));
    return multiple ? _selection : _selection[0];
  };
  const setSelection = (selection, triggerChangeEvent) => {
    handleValueUpdate(selection);
    triggerChangeEvent && emitChangeEvent();
  };
  const clearByParent = (doDisable) => {
    clearSelection();
    emitChangeEvent();
    if (doDisable) {
      disabled = true;
      fetch = null;
    }
  };
  const __id = `sv-select-${Math.random()}`.replace(".", "");
  const dispatch = createEventDispatcher();
  const itemConfig = {
    optionsWithGroups: false,
    isOptionArray: options && options.length && typeof options[0] !== "object",
    optionProps: [],
    valueField,
    labelField,
    labelAsValue,
    optLabel: groupLabelField,
    optItems: groupItemsField
  };
  if (fetch && value && valueAsObject && (!options || options && options.length === 0)) {
    options = Array.isArray(value) ? value : [value];
  }
  let refDropdown;
  let refControl;
  let dropdownActiveIndex = null;
  let currentValueField = valueField || fieldInit("value", options, itemConfig);
  let currentLabelField = labelField || fieldInit("label", options, itemConfig);
  let isAndroid = false;
  validatorAction ? validatorAction.shift() : () => ({
    destroy: () => {
    }
  });
  itemConfig.valueField = currentValueField;
  itemConfig.labelField = currentLabelField;
  itemConfig.optionProps = value && valueAsObject && (multiple && Array.isArray(value) ? value.length > 0 : true) ? getFilterProps(multiple ? value.slice(0, 1).shift() : value) : [currentValueField, currentLabelField];
  multiple = name && !multiple ? name.endsWith("[]") : multiple;
  if (!createFilter)
    createFilter = defaultCreateFilter;
  const inputValue = writable("");
  $$unsubscribe_inputValue = subscribe(inputValue, (value2) => $inputValue = value2);
  const hasFocus = writable(false);
  $$unsubscribe_hasFocus = subscribe(hasFocus, (value2) => $hasFocus = value2);
  const hasDropdownOpened = writable(false);
  $$unsubscribe_hasDropdownOpened = subscribe(hasDropdownOpened, (value2) => value2);
  let isFetchingData = false;
  let initFetchOnly = fetchMode === "init" || fetchMode === "auto" && typeof fetch === "string" && fetch.indexOf("[query]") === -1;
  let fetchInitValue = initFetchOnly ? value : null;
  let fetchUnsubscribe = null;
  function createFetch(fetch2) {
    if (fetchUnsubscribe) {
      fetchUnsubscribe();
      fetchUnsubscribe = null;
    }
    if (!fetch2)
      return null;
    if (initFetchOnly && prevValue)
      fetchInitValue = prevValue;
    const fetchSource = typeof fetch2 === "string" ? fetchRemote(fetch2) : fetch2;
    initFetchOnly = fetchMode === "init" || fetchMode === "auto" && typeof fetch2 === "string" && fetch2.indexOf("[query]") === -1;
    const debouncedFetch = debounce(
      (query) => {
        if (query && !$inputValue.length) {
          isFetchingData = false;
          return;
        }
        fetchSource(query, fetchCallback).then((data) => {
          if (!Array.isArray(data)) {
            console.warn("[Svelecte]:Fetch - array expected, invalid property provided:", data);
            data = [];
          }
          options = data;
        }).catch(() => {
          options = [];
        }).finally(() => {
          isFetchingData = false;
          $hasFocus && hasDropdownOpened.set(true);
          listMessage = _i18n.fetchEmpty;
          tick().then(() => {
            if (initFetchOnly && fetchInitValue) {
              handleValueUpdate(fetchInitValue);
              fetchInitValue = null;
            }
            dispatch("fetch", options);
          });
        });
      },
      500
    );
    if (initFetchOnly) {
      if (typeof fetch2 === "string" && fetch2.indexOf("[parent]") !== -1)
        return null;
      isFetchingData = true;
      options = [];
      debouncedFetch(null);
      return null;
    }
    fetchUnsubscribe = inputValue.subscribe((value2) => {
      if (!value2) {
        return;
      }
      if (value2 && value2.length < minQuery)
        return;
      !initFetchOnly && hasDropdownOpened.set(false);
      isFetchingData = true;
      debouncedFetch(value2);
    });
    return debouncedFetch;
  }
  let prevValue = value;
  let _i18n = config.i18n;
  let selectedOptions = value !== null ? initSelection.call(options, value, valueAsObject, itemConfig) : [];
  let selectedKeys = selectedOptions.reduce(
    (set, opt) => {
      set.add(opt[currentValueField]);
      return set;
    },
    /* @__PURE__ */ new Set()
  );
  let alreadyCreated = [""];
  function emitChangeEvent() {
    tick().then(() => {
      dispatch("change", readSelection);
    });
  }
  function emitCreateEvent(createdOpt) {
    dispatch("createoption", createdOpt);
  }
  function handleValueUpdate(passedVal) {
    clearSelection();
    if (passedVal) {
      let _selection = Array.isArray(passedVal) ? passedVal : [passedVal];
      const valueProp = itemConfig.labelAsValue ? currentLabelField : currentValueField;
      _selection = _selection.reduce(
        (res, val) => {
          const opt = flatItems.find((item) => valueAsObject ? item[valueProp] == val[valueProp] : item[valueProp] == val);
          opt && res.push(opt);
          return res;
        },
        []
      );
      let success = _selection.every(selectOption) && (multiple ? passedVal.length === _selection.length : _selection.length > 0);
      if (!success) {
        console.warn('[Svelecte]: provided "value" property is invalid', passedVal);
        value = multiple ? [] : null;
        readSelection = value;
        dispatch("invalidValue", passedVal);
        return;
      }
      readSelection = Array.isArray(passedVal) ? _selection : _selection.shift();
    }
    prevValue = passedVal;
  }
  function selectOption(opt) {
    if (!opt || multiple && maxReached)
      return false;
    if (selectedKeys.has(opt[currentValueField]))
      return;
    if (typeof opt === "string") {
      if (!creatable)
        return;
      opt = createFilter(opt, options);
      if (alreadyCreated.includes(opt))
        return;
      !fetch && alreadyCreated.push(opt);
      opt = createTransform(opt, creatablePrefix, currentValueField, currentLabelField);
      opt.$created = true;
      if (keepCreated)
        options = [...options, opt];
      emitCreateEvent(opt);
    }
    if (multiple) {
      selectedOptions.push(opt);
      selectedOptions = selectedOptions;
      selectedKeys.add(opt[currentValueField]);
    } else {
      selectedOptions = [opt];
      selectedKeys.clear();
      selectedKeys.add(opt[currentValueField]);
      dropdownActiveIndex = options.indexOf(opt);
    }
    flatItems = flatItems;
    return true;
  }
  function clearSelection() {
    selectedKeys.clear();
    selectedOptions = [];
    flatItems = flatItems;
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.hasAnchor === void 0 && $$bindings.hasAnchor && hasAnchor !== void 0)
    $$bindings.hasAnchor(hasAnchor);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.valueField === void 0 && $$bindings.valueField && valueField !== void 0)
    $$bindings.valueField(valueField);
  if ($$props.labelField === void 0 && $$bindings.labelField && labelField !== void 0)
    $$bindings.labelField(labelField);
  if ($$props.groupLabelField === void 0 && $$bindings.groupLabelField && groupLabelField !== void 0)
    $$bindings.groupLabelField(groupLabelField);
  if ($$props.groupItemsField === void 0 && $$bindings.groupItemsField && groupItemsField !== void 0)
    $$bindings.groupItemsField(groupItemsField);
  if ($$props.disabledField === void 0 && $$bindings.disabledField && disabledField !== void 0)
    $$bindings.disabledField(disabledField);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.searchable === void 0 && $$bindings.searchable && searchable !== void 0)
    $$bindings.searchable(searchable);
  if ($$props.clearable === void 0 && $$bindings.clearable && clearable !== void 0)
    $$bindings.clearable(clearable);
  if ($$props.renderer === void 0 && $$bindings.renderer && renderer !== void 0)
    $$bindings.renderer(renderer);
  if ($$props.disableHighlight === void 0 && $$bindings.disableHighlight && disableHighlight !== void 0)
    $$bindings.disableHighlight(disableHighlight);
  if ($$props.selectOnTab === void 0 && $$bindings.selectOnTab && selectOnTab !== void 0)
    $$bindings.selectOnTab(selectOnTab);
  if ($$props.resetOnBlur === void 0 && $$bindings.resetOnBlur && resetOnBlur !== void 0)
    $$bindings.resetOnBlur(resetOnBlur);
  if ($$props.resetOnSelect === void 0 && $$bindings.resetOnSelect && resetOnSelect !== void 0)
    $$bindings.resetOnSelect(resetOnSelect);
  if ($$props.closeAfterSelect === void 0 && $$bindings.closeAfterSelect && closeAfterSelect !== void 0)
    $$bindings.closeAfterSelect(closeAfterSelect);
  if ($$props.dndzone === void 0 && $$bindings.dndzone && dndzone !== void 0)
    $$bindings.dndzone(dndzone);
  if ($$props.validatorAction === void 0 && $$bindings.validatorAction && validatorAction !== void 0)
    $$bindings.validatorAction(validatorAction);
  if ($$props.dropdownItem === void 0 && $$bindings.dropdownItem && dropdownItem !== void 0)
    $$bindings.dropdownItem(dropdownItem);
  if ($$props.controlItem === void 0 && $$bindings.controlItem && controlItem !== void 0)
    $$bindings.controlItem(controlItem);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.collapseSelection === void 0 && $$bindings.collapseSelection && collapseSelection !== void 0)
    $$bindings.collapseSelection(collapseSelection);
  if ($$props.creatable === void 0 && $$bindings.creatable && creatable !== void 0)
    $$bindings.creatable(creatable);
  if ($$props.creatablePrefix === void 0 && $$bindings.creatablePrefix && creatablePrefix !== void 0)
    $$bindings.creatablePrefix(creatablePrefix);
  if ($$props.allowEditing === void 0 && $$bindings.allowEditing && allowEditing !== void 0)
    $$bindings.allowEditing(allowEditing);
  if ($$props.keepCreated === void 0 && $$bindings.keepCreated && keepCreated !== void 0)
    $$bindings.keepCreated(keepCreated);
  if ($$props.delimiter === void 0 && $$bindings.delimiter && delimiter !== void 0)
    $$bindings.delimiter(delimiter);
  if ($$props.createFilter === void 0 && $$bindings.createFilter && createFilter !== void 0)
    $$bindings.createFilter(createFilter);
  if ($$props.createTransform === void 0 && $$bindings.createTransform && createTransform !== void 0)
    $$bindings.createTransform(createTransform);
  if ($$props.fetch === void 0 && $$bindings.fetch && fetch !== void 0)
    $$bindings.fetch(fetch);
  if ($$props.fetchMode === void 0 && $$bindings.fetchMode && fetchMode !== void 0)
    $$bindings.fetchMode(fetchMode);
  if ($$props.fetchCallback === void 0 && $$bindings.fetchCallback && fetchCallback !== void 0)
    $$bindings.fetchCallback(fetchCallback);
  if ($$props.fetchResetOnBlur === void 0 && $$bindings.fetchResetOnBlur && fetchResetOnBlur !== void 0)
    $$bindings.fetchResetOnBlur(fetchResetOnBlur);
  if ($$props.minQuery === void 0 && $$bindings.minQuery && minQuery !== void 0)
    $$bindings.minQuery(minQuery);
  if ($$props.lazyDropdown === void 0 && $$bindings.lazyDropdown && lazyDropdown !== void 0)
    $$bindings.lazyDropdown(lazyDropdown);
  if ($$props.virtualList === void 0 && $$bindings.virtualList && virtualList !== void 0)
    $$bindings.virtualList(virtualList);
  if ($$props.vlHeight === void 0 && $$bindings.vlHeight && vlHeight !== void 0)
    $$bindings.vlHeight(vlHeight);
  if ($$props.vlItemSize === void 0 && $$bindings.vlItemSize && vlItemSize !== void 0)
    $$bindings.vlItemSize(vlItemSize);
  if ($$props.searchField === void 0 && $$bindings.searchField && searchField !== void 0)
    $$bindings.searchField(searchField);
  if ($$props.sortField === void 0 && $$bindings.sortField && sortField !== void 0)
    $$bindings.sortField(sortField);
  if ($$props.disableSifter === void 0 && $$bindings.disableSifter && disableSifter !== void 0)
    $$bindings.disableSifter(disableSifter);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.i18n === void 0 && $$bindings.i18n && i18n !== void 0)
    $$bindings.i18n(i18n);
  if ($$props.readSelection === void 0 && $$bindings.readSelection && readSelection !== void 0)
    $$bindings.readSelection(readSelection);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.labelAsValue === void 0 && $$bindings.labelAsValue && labelAsValue !== void 0)
    $$bindings.labelAsValue(labelAsValue);
  if ($$props.valueAsObject === void 0 && $$bindings.valueAsObject && valueAsObject !== void 0)
    $$bindings.valueAsObject(valueAsObject);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.getSelection === void 0 && $$bindings.getSelection && getSelection !== void 0)
    $$bindings.getSelection(getSelection);
  if ($$props.setSelection === void 0 && $$bindings.setSelection && setSelection !== void 0)
    $$bindings.setSelection(setSelection);
  if ($$props.clearByParent === void 0 && $$bindings.clearByParent && clearByParent !== void 0)
    $$bindings.clearByParent(clearByParent);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (!createTransform)
        createTransform = defaultCreateTransform;
    }
    {
      createFetch(fetch);
    }
    disabled && hasDropdownOpened.set(false);
    {
      {
        if (i18n && typeof i18n === "object") {
          _i18n = Object.assign({}, config.i18n, i18n);
        }
      }
    }
    {
      {
        itemConfig.labelAsValue = labelAsValue;
      }
    }
    flatItems = flatList(options, itemConfig);
    {
      {
        const _selectionArray = selectedOptions.map((opt) => {
          const { "$disabled": unused1, "$isGroupItem": unused2, ...obj } = opt;
          return obj;
        });
        const _unifiedSelection = multiple ? _selectionArray : _selectionArray.length ? _selectionArray[0] : null;
        const valueProp = itemConfig.labelAsValue ? currentLabelField : currentValueField;
        if (!valueAsObject) {
          prevValue = multiple ? _unifiedSelection.map((opt) => opt[valueProp]) : selectedOptions.length ? _unifiedSelection[valueProp] : null;
        } else {
          prevValue = _unifiedSelection;
        }
        value = prevValue;
        readSelection = _unifiedSelection;
      }
    }
    prevValue !== value && handleValueUpdate(value);
    maxReached = max && selectedOptions.length === max;
    availableItems = maxReached ? [] : filterList(flatItems, disableSifter ? null : $inputValue, multiple ? selectedKeys : false, searchField, sortField, itemConfig);
    creatable && $inputValue ? availableItems.length : availableItems.length - 1;
    listIndex = indexList(availableItems, creatable && $inputValue, itemConfig);
    {
      {
        if (dropdownActiveIndex === null) {
          dropdownActiveIndex = listIndex.first;
        } else if (dropdownActiveIndex > listIndex.last) {
          dropdownActiveIndex = listIndex.last;
        } else if (dropdownActiveIndex < listIndex.first) {
          dropdownActiveIndex = listIndex.first;
        }
      }
    }
    listMessage = maxReached ? _i18n.max(max) : $inputValue.length && availableItems.length === 0 && minQuery <= 1 ? _i18n.nomatch : fetch ? minQuery <= 1 ? initFetchOnly ? _i18n.fetchInit : _i18n.fetchBefore : _i18n.fetchQuery(minQuery, $inputValue.length) : _i18n.empty;
    itemRenderer = typeof renderer === "function" ? renderer : formatterList[renderer] || formatterList.default.bind({ label: currentLabelField });
    dropdownInputValue = createFilter($inputValue, options);
    $$rendered = `


<div class="${[
      escape(null_to_empty(`svelecte ${className}`), true) + " svelte-1cszduw",
      disabled ? "is-disabled" : ""
    ].join(" ").trim()}"${add_attribute("style", style, 0)}>${validate_component(Control, "Control").$$render(
      $$result,
      {
        renderer: itemRenderer,
        disabled,
        clearable,
        searchable,
        placeholder,
        multiple,
        inputId: inputId || __id,
        resetOnBlur,
        collapseSelection: collapseSelection ? config.collapseSelectionFn.bind(_i18n) : null,
        inputValue,
        hasFocus,
        hasDropdownOpened,
        selectedOptions,
        isFetchingData,
        dndzone,
        currentValueField,
        isAndroid,
        itemComponent: controlItem,
        this: refControl
      },
      {
        this: ($$value) => {
          refControl = $$value;
          $$settled = false;
        }
      },
      {
        icon: () => {
          return `<div slot="${"icon"}" class="${"icon-slot svelte-1cszduw"}">${slots.icon ? slots.icon({}) : ``}</div>`;
        }
      }
    )}
  ${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        renderer: itemRenderer,
        disableHighlight,
        creatable,
        maxReached,
        alreadyCreated,
        virtualList,
        vlHeight,
        vlItemSize,
        lazyDropdown: virtualList || lazyDropdown,
        multiple,
        dropdownIndex: dropdownActiveIndex,
        items: availableItems,
        listIndex,
        inputValue: dropdownInputValue,
        hasDropdownOpened,
        listMessage,
        disabledField,
        createLabel: _i18n.createRowLabel,
        metaKey: "Ctrl",
        itemComponent: dropdownItem,
        this: refDropdown
      },
      {
        this: ($$value) => {
          refDropdown = $$value;
          $$settled = false;
        }
      },
      {}
    )}
  ${name && !hasAnchor ? `<select${add_attribute("id", __id, 0)}${add_attribute("name", name, 0)} ${multiple ? "multiple" : ""} class="${"is-hidden svelte-1cszduw"}" tabindex="${"-1"}" ${required ? "required" : ""} ${disabled ? "disabled" : ""}>${each(selectedOptions, (opt) => {
      return `<option${add_attribute("value", opt[labelAsValue ? currentLabelField : currentValueField], 0)} selected>${escape(opt[currentLabelField])}</option>`;
    })}</select>` : ``}
</div>`;
  } while (!$$settled);
  $$unsubscribe_inputValue();
  $$unsubscribe_hasDropdownOpened();
  $$unsubscribe_hasFocus();
  return $$rendered;
});
const OPTION_LIST = [
  "options",
  "value",
  "name",
  "required",
  "disabled",
  "value-field",
  "label-field",
  "disabled-field",
  "placeholder",
  "searchable",
  "clearable",
  "renderer",
  "disable-highlight",
  "select-on-tab",
  "reset-on-blur",
  "reset-on-select",
  "multiple",
  "max",
  "collapse-selection",
  "creatable",
  "creatable-prefix",
  "allow-editing",
  "keepCreated",
  "delimiter",
  "fetch",
  "fetch-reset-on-blur",
  "min-query",
  "lazy-dropdown",
  "virtual-list",
  "vl-height",
  "vl-item-size",
  "search-field",
  "sort-field",
  "disable-sifter",
  "label-as-value"
];
function formatValueProp(value, delimiter) {
  return value ? value.split(delimiter).map((item) => {
    const _v = parseInt(item);
    return isNaN(_v) ? item !== "null" ? item : null : _v;
  }) : "";
}
function formatValue(name, value) {
  switch (name) {
    case "options":
      if (Array.isArray(value))
        return value;
      try {
        value = JSON.parse(value);
        if (!Array.isArray(value)) {
          value = [];
        }
      } catch (e) {
        value = [];
      }
      return value;
    case "renderer":
      return value || "default";
    case "required":
    case "disabled":
    case "searchable":
    case "clearable":
    case "disable-highlight":
    case "select-on-tab":
    case "reset-on-blur":
    case "reset-on-select":
    case "multiple":
    case "collapse-selection":
    case "creatable":
    case "allow-editing":
    case "keep-created":
    case "fetch-reset-on-blur":
    case "lazy-dropdown":
    case "virtual-list":
    case "disable-sifter":
    case "label-as-value":
      return value !== null && value !== "false";
    case "max":
      return isNaN(parseInt(value)) ? 0 : parseInt(value);
    case "min-query":
      return isNaN(parseInt(value)) ? config.minQuery : parseInt(value);
  }
  return value;
}
function formatProp(name) {
  if (name.includes("-"))
    return name.split("-").reduce((res, w, i) => {
      if (i)
        w = w[0].toUpperCase() + w.substr(1);
      return res + w;
    }, "");
  return name;
}
let volatileEmitChange = false;
class SvelecteElement extends HTMLElement {
  constructor() {
    super();
    this.svelecte = void 0;
    this.anchorSelect = null;
    this._fetchOpts = null;
    this._selfSetValue = false;
    const baseProps = {
      "name": {
        get() {
          this.getAttribute("name");
        },
        set(value) {
          this.setAttribute("name", value);
        }
      },
      "selection": {
        get() {
          return this.svelecte ? this.svelecte.getSelection() : null;
        }
      },
      "value": {
        get() {
          return this.svelecte ? this.svelecte.getSelection(true) : null;
        },
        set(value) {
          const delim = this.getAttribute("value-delimiter") || ",";
          this.setAttribute("value", Array.isArray(value) ? value.join(delim) : value);
        }
      },
      "options": {
        get() {
          return this.hasAttribute("options") ? JSON.parse(this.getAttribute("options")) : this._fetchOpts || [];
        },
        set(value) {
          this.setAttribute("options", Array.isArray(value) ? JSON.stringify(value) : value);
        }
      },
      "hasAnchor": {
        get() {
          return this.anchorSelect ? true : false;
        }
      },
      "form": {
        get() {
          return this.closest("form");
        }
      },
      "emitChange": {
        get() {
          volatileEmitChange = true;
          return this;
        }
      },
      "valueField": {
        get() {
          return this.getAttribute("value-field") || config.valueField;
        },
        set(value) {
          this.setAttribute("value-field", value);
        }
      },
      "labelField": {
        get() {
          return this.getAttribute("label-field") || config.labelField;
        },
        set(value) {
          this.setAttribute("label-field", value);
        }
      },
      "delimiter": {
        get() {
          return this.getAttribute("delimiter") || config.delimiter;
        },
        set(value) {
          this.setAttribute("delimiter", value);
        }
      },
      "lazyDropdown": {
        get() {
          return this.hasAttribute("lazy-dropdown") ? true : config.lazyDropdown;
        },
        set() {
          console.warn("\u26A0 this setter has no effect after component has been created");
        }
      },
      "placeholder": {
        get() {
          return this.getAttribute("placeholder") || config.placeholder;
        },
        set(value) {
          this.setAttribute("placeholder", value);
        }
      },
      "max": {
        get() {
          return this.getAttribute("max") || config.max;
        },
        set(value) {
          try {
            value = parseInt(value);
            if (value < 0)
              value = 0;
          } catch (e) {
            value = 0;
          }
          this.setAttribute("max", value);
        }
      },
      "minQuery": {
        get() {
          return this.getAttribute("min-query") || config.minQuery;
        },
        set(value) {
          try {
            value = parseInt(value);
            if (value < 1)
              value = 1;
          } catch (e) {
            value = config.minQuery;
          }
          this.setAttribute("min-query", value);
        }
      },
      "creatablePrefix": {
        get() {
          return this.getAttribute("creatable-prefix") || config.creatablePrefix;
        },
        set(value) {
          this.setAttribute("creatable-prefix", value);
        }
      },
      "renderer": {
        get() {
          return this.getAttribute("renderer") || "default";
        },
        set(value) {
          if (value) {
            this.setAttribute("renderer", value);
          } else {
            this.removeAttribute("renderer");
          }
        }
      }
    };
    const boolProps = [
      "searchable",
      "clearable",
      "disable-highlight",
      "required",
      "select-on-tab",
      "reset-on-blur",
      "reset-on-select",
      "multiple",
      "collapse-selection",
      "creatable",
      "allow-editing",
      "keep-created",
      "fetch-reset-on-blur",
      "virtual-list",
      "disable-sifter",
      "label-as-value",
      "disabled"
    ].reduce((res, propName) => {
      const formatted = formatProp(propName);
      res[formatted] = {
        get() {
          const hasProp = this.hasAttribute(propName);
          const notFalse = hasProp ? this.getAttribute(propName) !== "false" : true;
          return !hasProp ? config[formatted] : notFalse;
        },
        set(value) {
          if (!value) {
            if (this.hasAttribute(propName)) {
              this.removeAttribute(propName);
            } else {
              this.svelecte && this.svelecte.$set({ [formatted]: value });
            }
          } else {
            this.setAttribute(propName, value = "");
          }
        }
      };
      return res;
    }, {});
    Object.defineProperties(this, Object.assign({}, baseProps, boolProps));
  }
  focus() {
    !this.disabled && this.querySelector("input").focus();
  }
  static get observedAttributes() {
    return OPTION_LIST;
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.svelecte && oldValue !== newValue) {
      if (name === "value") {
        if (!this._selfSetValue) {
          newValue ? this.svelecte.setSelection(formatValue(name, newValue), volatileEmitChange) : this.svelecte.clearByParent(this.parent ? true : false);
        }
        this._selfSetValue = false;
        volatileEmitChange = false;
        this.anchorSelect && setTimeout(() => {
          const value = this.svelecte.getSelection(true);
          this.anchorSelect.innerHTML = (Array.isArray(value) ? value.length ? value : [null] : [value]).reduce((res, item) => {
            if (!item) {
              res += '<option value="" selected="">Empty</option>';
              return res;
            }
            res += `<option value="${item}" selected>${item}</option>`;
            return res;
          }, "");
        });
        return;
      }
      this.svelecte.$set({ [formatProp(name)]: formatValue(name, newValue) });
    }
  }
  connectedCallback() {
    setTimeout(() => {
      this.render();
    });
  }
  render() {
    if (this.svelecte)
      return;
    let props = {};
    for (const attr of OPTION_LIST) {
      if (this.hasAttribute(attr)) {
        props[formatProp(attr)] = attr !== "value" ? formatValue(attr, this.getAttribute(attr)) : formatValueProp(this.getAttribute("value"), this.getAttribute("value-delimiter") || ",");
      }
    }
    if (this.hasAttribute("i18n")) {
      const i18nObj = JSON.parse(this.getAttribute("i18n"));
      if (i18nObj.createRowLabel) {
        const labelText = i18nObj.createRowLabel;
        i18nObj.createRowLabel = (value) => labelText.replace("#value", value);
      }
      props.i18n = i18nObj;
    }
    if (this.hasAttribute("class")) {
      props.class = this.getAttribute("class");
    }
    if (this.hasAttribute("parent")) {
      this.parent = document.getElementById(this.getAttribute("parent"));
      if (!this.parent.value && this.svelecte) {
        return;
      }
      const parentValue = this.parent.value || this.parent.getAttribute("value");
      if (parentValue) {
        props.disabled = false;
        props.fetch = this.getAttribute("fetch").replace("[parent]", parentValue);
      } else {
        delete props["fetch"];
        props.disabled = true;
      }
      this.parentCallback = (e) => {
        if (!e.target.selection || Array.isArray(e.target.selection) && !e.target.selection.length) {
          this.svelecte.clearByParent(true);
          return;
        }
        !this.parent.disabled && this.removeAttribute("disabled");
        if (this.hasAttribute("fetch")) {
          this.svelecte.clearByParent(true);
          const fetchUrl = this.getAttribute("fetch").replace("[parent]", e.target.value);
          this.svelecte.$set({ fetch: fetchUrl, disabled: false });
        }
      };
      this.parent.addEventListener("change", this.parentCallback);
    }
    const anchorSelect = this.querySelector("select");
    if (anchorSelect) {
      props["hasAnchor"] = true;
      anchorSelect.style = "opacity: 0; position: absolute; z-index: -2; top: 0; height: 38px";
      anchorSelect.tabIndex = -1;
      this.anchorSelect = anchorSelect;
      this.anchorSelect.multiple = props.multiple || anchorSelect.name.includes("[]");
      (Array.isArray(props.value) ? props.value : [props.value || null]).forEach((val) => {
        this.anchorSelect.innerHTML += `<option value="${val || ""}" selected>${val || "No value"}</option>`;
      });
    }
    this.svelecte = new Svelecte({
      target: this,
      anchor: anchorSelect,
      props
    });
    this.svelecte.$on("change", (e) => {
      const value = this.svelecte.getSelection(true);
      this._selfSetValue = true;
      this.value = value;
      setTimeout(() => {
        this._selfSetValue = false;
      }, 100);
      if (this.anchorSelect) {
        this.anchorSelect.innerHTML = (Array.isArray(value) ? value.length ? value : [null] : [value]).reduce((res, item) => {
          if (!item) {
            res += '<option value="" selected="">Empty</option>';
            return res;
          }
          res += `<option value="${item}" selected>${item}</option>`;
          return res;
        }, "");
        this.anchorSelect.dispatchEvent(new Event("change"));
      }
      this.dispatchEvent(e);
    });
    this.svelecte.$on("fetch", (e) => {
      this._fetchOpts = e.detail;
      this.dispatchEvent(e);
    });
    this.svelecte.$on("createoption", (e) => {
      this.dispatchEvent(e);
    });
    return true;
  }
  disconnectedCallback() {
    this.svelecte && this.svelecte.$destroy();
    this.parent && this.parent.removeEventListener("change", this.parentCallback);
  }
}
function registerSvelecte(name) {
  window.customElements.define(name || "el-svelecte", SvelecteElement);
}
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  registerSvelecte();
  return `<el-svelecte></el-svelecte>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userStore;
  let $gendersStore, $$unsubscribe_gendersStore;
  let $citiesStore, $$unsubscribe_citiesStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  $$unsubscribe_gendersStore = subscribe(gendersStore, (value) => $gendersStore = value);
  $$unsubscribe_citiesStore = subscribe(citiesStore, (value) => $citiesStore = value);
  let accountData = {
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    genderId: "",
    countryId: "",
    cityId: "",
    countyId: ""
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-twm90c_START -->${$$result.title = `<title>Hesab\u0131m</title>`, ""}<!-- HEAD_svelte-twm90c_END -->`, ""}

${validate_component(MemberHorizontalNavigation, "MemberHorizontalNavigation").$$render($$result, {}, {}, {})}

<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"p-6 max-w-2xl mx-auto"}"><div class="${"font-semibold text-lg text-center"}">Ki\u015Fisel bilgiler</div>

        <div class="${"grid grid-cols-2 gap-4 mt-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Ad\u0131n</span>
                <input type="${"text"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", accountData.firstName, 0)}></div>
            <div><span class="${"text-sm mb-1 block text-gray-500"}">Soyad\u0131n</span>
                <input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", accountData.lastName, 0)}></div>
            <div><span class="${"text-sm mb-1 block text-gray-500"}">Telefon numaran</span>
                <input type="${"number"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", accountData.phone, 0)}></div>
            <div><span class="${"text-sm mb-1 block text-gray-500"}">Cinsiyetin</span>
                ${validate_component(Svelecte, "Svelecte").$$render(
      $$result,
      {
        inputId: "gender",
        options: $gendersStore,
        placeholder: "Se\xE7in",
        value: accountData.genderId
      },
      {
        value: ($$value) => {
          accountData.genderId = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

            <div><span class="${"text-sm mb-1 block text-gray-500"}">\u015Eehir</span>
                ${validate_component(Svelecte, "Svelecte").$$render(
      $$result,
      {
        inputId: "city",
        options: $citiesStore,
        placeholder: "Se\xE7in",
        value: accountData.cityId
      },
      {
        value: ($$value) => {
          accountData.cityId = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

            <div><span class="${"text-sm mb-1 block text-gray-500"}">\u0130l\xE7e</span>
                ${validate_component(Select, "Select").$$render($$result, {}, {}, {})}</div></div>

        <div class="${"text-center mt-4"}"><button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}"><span>Kaydet</span></button></div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_gendersStore();
  $$unsubscribe_citiesStore();
  return $$rendered;
});
export {
  Page as default
};
