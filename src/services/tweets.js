export const API_URL = 'http://localhost:3333'

export async function getTweets(){
    const response = await fetch(`${API_URL}/tweets`);
    const data = await response.json();
    return data;
}

export async function getTweetsByUsername(username){
    const response = await fetch(`${API_URL}/tweets/${username}`);
    const data = await response.json();
    return data;
}