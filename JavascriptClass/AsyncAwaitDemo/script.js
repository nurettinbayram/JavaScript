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



async function displayData() {
    try{
        const user = await login("nurettin", "bayram", "1234");
        console.log(user);

        const posts = await navigateProfil(user.userName);
        console.log(posts);

        const postdetail = await postDetails(posts[0]);
        console.log(postdetail);
    }
    catch(err){
        console.log(err);
    }
}

displayData();