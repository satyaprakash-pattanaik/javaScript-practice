console.log("=== 1. push() ===");
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); 

console.log("=== 2. pop() ===");
let arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); 

console.log("=== 3. unshift() ===");
let arr3 = [2, 3];
arr3.unshift(1);
console.log(arr3); 

console.log("=== 4. shift() ===");
let arr4 = [1, 2, 3];
arr4.shift();
console.log(arr4);

console.log("=== 5. map() ===");
let nums1 = [1, 2, 3];
let doubled = nums1.map(n => n * 2);
console.log(doubled);

console.log("=== 6. filter() ===");
let nums2 = [1, 2, 3, 4];
let evens = nums2.filter(n => n % 2 === 0);
console.log(evens); 

console.log("=== 7. reduce() ===");
let nums3 = [1, 2, 3, 4];
let sum = nums3.reduce((acc, n) => acc + n, 0);
console.log(sum); 

console.log("=== 8. find() ===");
let nums4 = [5, 12, 8];
let found = nums4.find(n => n > 10);
console.log(found); 

console.log("=== 9. findIndex() ===");
let nums5 = [5, 12, 8];
let index = nums5.findIndex(n => n > 10);
console.log(index); 

console.log("=== 10. sort() ===");
let nums6 = [3, 1, 2];
nums6.sort();
console.log(nums6); 

console.log("=== 11. reverse() ===");
let nums7 = [1, 2, 3];
nums7.reverse();
console.log(nums7);

console.log("=== 12. includes() ===");
let arr5 = [1, 2, 3];
console.log(arr5.includes(2)); 
console.log(arr5.includes(5)); 

console.log("=== 13. indexOf() ===");
let arr6 = [1, 2, 3];
console.log(arr6.indexOf(2)); 

console.log("=== 14. concat() ===");
let a = [1, 2];
let b = [3, 4];
let merged = a.concat(b);
console.log(merged);

console.log("=== 15. slice() ===");
let arr7 = [1, 2, 3, 4];
console.log(arr7.slice(1, 3));

console.log("=== 16. splice() ===");
let arr8 = [1, 2, 3, 4];
arr8.splice(2, 1, 99); 
console.log(arr8); 

console.log("=== 17. forEach() ===");
let arr9 = ["a", "b", "c"];
arr9.forEach(item => console.log(item));

console.log("=== 18. every() ===");
let nums8 = [2, 4, 6];
console.log(nums8.every(n => n % 2 === 0)); 

console.log("=== 19. some() ===");
let nums9 = [1, 3, 5, 6];
console.log(nums9.some(n => n % 2 === 0)); 
console.log("=== 20. join() ===");
let arr10 = ["Hello", "World"];
console.log(arr10.join(" ")); 