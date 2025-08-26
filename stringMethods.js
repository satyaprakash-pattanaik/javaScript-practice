const browserType="mozilla"
//length
 console.log(browserType.length);
//Retrieving a specific string character
// console.log(browserType[browserType.length - 1]);

// includes

//  if(browserType.includes("zilla")){
//     console.log("Found zilla");
//  }else{
//     console.log("Zilla not found")
//  }

// startsWith() and endsWith()

if(browserType.startsWith("zilla")){
    console.log("starts with zilla");
}else if(browserType.endsWith("zilla")){
    console.log("ends with zilla");
}else{
    console.log("no zilla here");
}

// indexOf

const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers"));

const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence);
console.log(secondOccurrence);

// slice

console.log(browserType.slice(1, 4));
console.log(browserType.slice(2));
console.log(tagline.slice(-4));
console.log(tagline.slice(-9, -5));

// toLowerCase and toUpperCase

const radData = "My NaMe Is Satya";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

//replace()

const updated = browserType.replace("moz", "van");
console.log(updated);
console.log(browserType);