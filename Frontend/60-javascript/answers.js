// function afterDelay(time, cb){
//     setTimeout(
//         cb
//     ,time)
// }

// afterDelay(2000, function(){
//     console.log('callback executed')
// })
// The callback function will execute after 2000 miliseconds.




// function getUser(username, callback){
//     console.log(username)
//     setTimeout(() => {
//         callback({id:1,username:username})
//     }, 1000);
// }

// function getUserPosts(userId,callback){
//     callback(['post1','post2','post3'])
// }

// getUser('harsh',function(user){
//     getUserPosts(user.id,function(posts){
//         console.log(`posts: ${posts}`)
//     })
// })



function loginUser(cb){
    console.log('loging in user...')
    setTimeout(() => {
        cb({user:'harsh',id:88})
    }, 1000);
}

function fetchPermissions(userId,cb){
    console.log('fetching permissions')
    setTimeout(() => {
        cb(['read','write','delete'])
    }, 1000);
}

function loadDashboard(permissions,cb){
    console.log('loading dashboard')
    setTimeout(() => {
        cb('dashboard loaded')
    }, 1000);
}

loginUser(function(user){
    fetchPermissions(user.id,function(permissions){
        loadDashboard(permissions,function(output){
            console.log(output)
        })
    })
})