const fs= require('fs');
fs.readFile('sample.txt','utf-8',(err,data)=>{
    if(err){
        console.error('Error reading file',err);
    return;}
    console.log("File Content:",data);

}
);