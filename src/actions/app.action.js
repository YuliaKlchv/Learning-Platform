export const STORE_USER_DATA = "STORE_USER_DATA";
export const STORE_VIDEO_DATA = "STORE_VIDEO_DATA ";



export function storeUserData(userData) {
    return { type: STORE_USER_DATA, user: userData, loggedIn: false }
}

export function storeVideoData(videoData) {
    return { type: STORE_VIDEO_DATA, video: videoData }
}


