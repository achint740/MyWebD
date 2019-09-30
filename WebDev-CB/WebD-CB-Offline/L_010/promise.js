function downloadFile(url){
    // console.log('Download Start')
    return new Promise(function(resolve,reject){
        if(!url.startsWith('http'))
            throw new Error('Not A Valid Url');
        console.log('Download started');
        setTimeout(function(){
            let f_name = url.split('/').pop();
            resolve(f_name);
        },3000)
    });
}

function CompressFile(f_name){
    return new Promise(function(resolve,reject){
        // if(-1 == [mp4,flv,webm].indexOf(f_name.split('.').pop()))
            // throw new Error('Compression not possible');
        console.log('Compression Started');
        setTimeout(function(){
            let c_file_name = f_name.split('.')[0] + '.zip';
            resolve(c_file_name);
        },3000)
    })
}

function UploadFile(c_file_name){
    return new Promise(function(resolve,reject){
        console.log('Upload started');
        setTimeout(function(){
            let uploadpath = 'https://abc.com/'+c_file_name;
            resolve(uploadpath);
        },3000)
    })
}

// downloadFile('http://example.com/file.mp4')
//     .then(function(f_name){
//         console.log('Download Completed-->' + f_name);
//         CompressFile(f_name)
//             .then(function(c_file_name){
//                 console.log('Compression Completed-->' + c_file_name);
//                 UploadFile(c_file_name)
//                     .then(function(uploadpath){
//                         console.log('Upload Completed -->' + uploadpath);
//                     })
//             })
// })

downloadFile('http://example.com/file.mp4')
    .then(CompressFile)
        .then(UploadFile)
            .then(function(){
                console.log('All Done');
            })


//Reject silently handles the catch
//Script Execution not stopped
//Catch code not written !!









/*
//Promise made using new keyword only

let p = new Promise(function(resolve,reject){
    console.log('Execution starts');
    setTimeout(function(){  
        let res = 'R';
        resolve(res);
    },3000)
});

// .then ke argument waala function --> resolve 
p.then(function(res){
    console.log('Execution Completed'+res);
})

*/

//States of Promises

/*
let p = new Promise(function(resolve,reject){
    console.log('Start');
    setTimeout(function(){
        resolve();
    },3000)
});

setTimeout(function(){
    p.then(function(){
        console.log('Done');
    });
},1000);
*/
