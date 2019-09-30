//1.Download
//2.Compression
//3.Upload compressed file

//Wait is by the browser

function downlaodFile(url,download){
    console.log('Download starts');
    setTimeout(function(){
        let file_name = url.split('/').pop();
        download(file_name);
    },3000);
}

function compressFile(file_name,compress){
    console.log('Compression starts');
    setTimeout(function(){
        let c_file_name = file_name.split('.')[0] + '.zip';
        compress(c_file_name);
    },3000)
}

function UploadFile(c_file_name,upload){
    console.log('Upload Satrted');
    setTimeout(function(){
        let uploadpath = 'https://abc.com/'+c_file_name;
        upload(uploadpath);
    },3000)
}

downlaodFile('http://example.com/file.mp4',function(file_name){
    console.log('Download Completed-->' + file_name);
    compressFile(file_name,function(c_file_name){
        console.log('Compression Completed-->' + c_file_name);
        UploadFile(c_file_name,function(uploadpath){
            console.log('Upload Completed at -->'+uploadpath);
        })
    })
})