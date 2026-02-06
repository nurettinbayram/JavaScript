/*
--------------------------APIs--------------------------------
-https://github.com/public-apis/public-apis?tab=readme-ov-file
*/

const severStatus = true

const login =(firstName, lastName, password)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(severStatus && password =="1234")
                resolve({userName : firstName+lastName});
            else
                reject("->Server Not Found<-");
        }, 2000);
    })
}

const navigateProfil = (username)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(username == "nurettinbayram")
                resolve(['p1', 'p2', 'p3'])
            else
                reject("Posts Not Found");
        }, 2000)
    })
}

const postDetails = (post)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(`${post} details on your screeen.`)
        }, 2000);
    })
}




login("nurettin", "bayram", "1234")
    .then(user => {
        console.log(user.userName);
        return navigateProfil(user.userName)
    })
    .then(posts=>{
        console.log(posts);
        return postDetails(posts[1])
    })
    .then(detail =>{
        console.log(detail);
    })
    .catch(err=>{
        console.log(err);
    });
    



//Bu sekildeki bir kullanim hata vermiyor ancak donen sonucta bos oluyor buda veriye ulasmamizi engelliyor
//console.log(login("nurettin", "bayram", "1234"));

//bu sekil bir kullanim da hatali olur cunku result degeri zamana bagli bir sekilde olusuyor ama alttaki kod hemen calisiyor
/*
let result = login().then(user=>{
    return user.userName;
});

Promise objesini dondurur.
console.log(result);
*/