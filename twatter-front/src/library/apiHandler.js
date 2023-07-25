const SERVER_PATH = 'http://localhost:8080'

async function getAllPosts() {
    const response = await fetch(`${SERVER_PATH}/twatts/`);
    const posts = await response.json();
    return posts;
}

export {getAllPosts};