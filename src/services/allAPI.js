import { serverURL } from "./serverURL"
import { CommonAPI } from "./CommonAPI"




// 
export const uploadVideo = async (reqBody)=>{
return await CommonAPI("POST",`${serverURL}/videos`,reqBody)
}


// 
export  const getAllVideos = async ()=>{
    return await CommonAPI("GET",`${serverURL}/videos`,"")
}

export  const deleteAVideo = async (id)=>{
    return await CommonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// update video , image, caption,  description

