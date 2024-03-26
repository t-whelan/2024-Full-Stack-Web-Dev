function filterLongWords(words) {
    return words.filter(word => word.length < 5);
}

// Example usage:
console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']
