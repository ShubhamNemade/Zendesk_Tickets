import { Modal, Button, } from "react-bootstrap";


const TicketDetails=({ticket,handleClose,show})=>{


return(
    <>
    <Modal centered show={show} onHide={handleClose}>  
  <Modal.Header closeButton>  
    <Modal.Title>Ticket Details</Modal.Title>  
  </Modal.Header>  
  
  <Modal.Body>  
    <p>Id:-{ticket?.id}</p>  
    <p>Status:-{ticket?.status}</p>  
    <p>Subject:-{ticket?.subject}</p>  
    <p>Description:-{ticket?.description}</p>  


  </Modal.Body>  
  
  <Modal.Footer>  
    <Button variant="danger" onClick={handleClose}>Close Modal</Button>  
    
  </Modal.Footer>  
  </Modal> 
    </>
)

}

export default TicketDetails;