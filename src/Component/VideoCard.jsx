import { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card,Modal,Button} from 'react-bootstrap'
import { deleteAVideo, getAllVideos } from '../services/allAPI';








function VideoCard({setDeleteVideoStatus,displayData}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





const removeVideo = async(id)=>{
  await deleteAVideo(id)
  toast.warning(`'${displayData.caption}'Deleted  ` )

    setDeleteVideoStatus(true)
  

}
 

  
  return (
    <>
    
    
    <Card className='mb-3 p-3' style={{height:'600px'}} >
      <Card.Img onClick={handleShow} height={'350px'} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title>{displayData?.caption}</Card.Title>
        <Card.Text>
          {displayData?.description}
        </Card.Text>
        <div className='d-flex'>

        <button onClick={()=>removeVideo(displayData?.id)} className='btn '><i class="fa-solid fa-trash fa-beat fa-2x text-danger"></i></button>
        <button className='btn '>
                  <i class="fa-regular fa-pen-to-square fa-beat fa-2x text-success"></i></button>
       
          </div>
      </Card.Body>
      
    </Card>



    <Modal show={show} onHide={handleClose} style={{backgroundColor:'black'}}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <iframe width="100%" height="480" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
    
      </Modal>












      <ToastContainer 
      position='top-center'
      theme='colored'
      autoClose={2000}
      />




    
    
    
    </>
  )
}

export default VideoCard