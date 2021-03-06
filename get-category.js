const emojis = require('./emojis.js');


const getCategory = function(word) {
    return emojis.filter(function(emoji) {
        return emoji.categories.includes(word);
    });
}


module.exports = getCategory;
