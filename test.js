var fs = require('fs');
var https = require('https');

/*Code to create html file automatically using node*/
fs.writeFile(__dirname+"/index.html","<h1>HTML is great</h1>", function(error){
    if(error){
        return console.log(error);
    }else{
        return console.log("Congratulations!! File is created using Node js automatically");
    }
});

/*Code to coppy images from internet and saved in our folder automatically using node*/
var myPhotoLocation = 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
https.get(myPhotoLocation, function(response){
   response.pipe(fs.createWriteStream(__dirname+"/code.jpg"));
})