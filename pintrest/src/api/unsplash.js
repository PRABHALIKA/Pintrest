import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID qRfjKRGrJitWDx5eQgJwCV-3uoSkAE-BRUCRMX9pjmA"
    }
}) 