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

async function getUserByMail(email){

}

export {getAllPosts, postTwatt};