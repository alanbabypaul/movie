import { Button,Modal,Form,Row,Col } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoList from './VideoList';

function Home() {


const [uploadVideoServerResponse,setUploadVideoServerResponse] =  useState({})
  const[video,setVideo] = useState({
    id:"",caption:"",url:"",embedLink:"",description:""
  })
     const[show,setShow] =useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const getEmbedLink=(e)=>{
    const {value} =e.target
    if(value){
      const link = `http://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }else{
      setVideo({...video,embedLink:""})
    }
    
  }
 

  const handleUpload= async (e)=>{
    const {id,caption,url,embedLink,description} = video
    if(!id || !caption || !url || !embedLink || !description)
    {
      toast.warning("plz fill the all form");
    }else{
      // make API
      const response = await uploadVideo(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        // set server response
        setUploadVideoServerResponse(response.data)
        toast.success(`'${response.data.caption}'  Review uploaded successfully`)
        // model hide
      
        // video
        setVideo({
          id:"",caption:"",url:"",embedLink:"" , description:"" 
        })
        handleClose()
      }else{
        console.log(response);
        toast.error("Can not perform the action / Try Another Id ......")
      }
    }
  }
  // console.log(video);


  return (
  
        <>
    
    <div className='home m-5'>
        <h5>Upload Video Blog </h5>
        
        <div className='btn'>
    <Button onClick={handleShow} >Upload Here</Button>


</div>

    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{backgroundColor:'black'}}
      >
        <Modal.Header closeButton>
          <Modal.Title > Upload your
             Movie Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Fill the following details!!
          </p>
         <Form className='border border-success rounded p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Your Id" onChange={(e)=>setVideo({...video,id:e.target.value})} />
        
      </Form.Group>
      {/* caption */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Your Caption"  onChange={(e)=>setVideo({...video,caption:e.target.value})} />
        
      </Form.Group>

      {/* image */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Your Video Image"   onChange={(e)=>setVideo({...video,url:e.target.value})} />
        
      </Form.Group>

      {/*video URL  */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Your Video" onChange={getEmbedLink} />
        
      </Form.Group>

{/* text-area */}
      <textarea   type="description"   className='text-area' placeholder='Enter your experience  '  onChange={(e)=>setVideo({...video,description:e.target.value})}>
 
</textarea>
         </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-danger' onClick={handleClose}>
           Cancel
          </Button>
          <Button     onClick={handleUpload}  className='btn-success'>Upload</Button>
        </Modal.Footer>
      </Modal>
<ToastContainer 
      position='top-center'
      theme='colored'
      autoClose={2000}
      />


<VideoList  uploadVideoServerResponse={uploadVideoServerResponse}/>
      </>
 
  )
}

export default Home