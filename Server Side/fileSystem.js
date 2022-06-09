const fs = require('fs');

/*const content = "Some content";
fs.writeFile('/Users/user/Documents/WebDevLearning/Server\ Side/test.txt', content, err => {
    if(err){
        console.error(err)
    }
    console.log("file written successfully");
})*/

fs.readFile('/Users/user/Documents/WebDevLearning/Server\ Side/test.txt', 'utf-8', (err, data) => {
    if(err){
        console.error(err);
    }
    console.log(data);
})