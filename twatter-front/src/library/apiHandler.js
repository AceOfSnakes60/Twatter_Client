const SERVER_PATH = 'http://localHost:8080'

async function getAllPosts() {
    const response = await fetch(`${SERVER_PATH}/twatts`);
    const posts = await response.json();
    console.log(posts);
    return posts;
}

async function postTwatt(twatt){
    console.log(twatt.body);

    const response = await fetch(`${SERVER_PATH}/twatts`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(twatt)
    })
    const posts = await response.json();
    console.log(posts);
    return posts;
}

async function validateUser(user){
    const response = await fetch(`${SERVER_PATH}/user/validate`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const reply = await response.json();
    return reply;
}

export {getAllPosts, postTwatt, validateUser};