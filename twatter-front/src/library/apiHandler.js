const SERVER_PATH = 'http://localHost:8080'

async function getAllPosts() {
    const response = await fetch(`${SERVER_PATH}/twatts`);
    const posts = await response.json();
    console.log(posts);
    return posts;
}

export {getAllPosts};