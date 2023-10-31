import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { useEffect,useState } from 'react'
import { deleteAVideo, getAllVideos } from '../services/allAPI'


function VideoList({uploadVideoServerResponse,setUploadVideoServerResponse}) {
const[allvideos,setAllVideos] = useState([])
const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)


const getAllUploadedVideos  = async ()=>{
  const{data} = await getAllVideos()
  setAllVideos(data)
}
useEffect(()=>{
  getAllUploadedVideos()
},[uploadVideoServerResponse,deleteVideoStatus])




  return (
<>
    <div className='video-list m-3'>
    <h1>Uploaded Movie Reviews</h1>


    <Row>
{

  allvideos.length>0?
  allvideos.map(video=>(
    <Col sm={12} md={6} lg={4} xl={3}>
<VideoCard displayData={video} setDeleteVideoStatus={setDeleteVideoStatus} />
</Col>
  ))
:
<p>
Nothing To Watch
</p>


}


    </Row>
    



        </div>

       
</>
  )
}

export default VideoList