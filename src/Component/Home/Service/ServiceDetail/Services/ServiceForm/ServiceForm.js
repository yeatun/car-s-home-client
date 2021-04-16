import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import Payment from '../../../../../Payment/Payment';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')

const ServiceForm = ({openModal,closeModal,modalIsOpen,serviceOn,date,serviceImg}) => {
 
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        data.service = serviceOn;
        data.serviceImg=serviceImg;
        data.date = date;
        
        data.created = new Date();
        
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment created successfully.');
            }
        })}
    return (
        <div>
        
        <Modal
          isOpen={modalIsOpen}
       
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          
      
            <h2 className='text-center'>{serviceOn}</h2>
            <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
         <div onSubmit={handleSubmit(onSubmit)}>
         <form  className="p-5">
         
         <div className="form-group">
             <input type="text" {...register("name")}  placeholder="Your Name" className="form-control" />
             {/* {errors.name && <span className="text-danger">This field is required</span>} */}

         </div>
         <div className="form-group">
             <input type="text" {...register("phone")} placeholder="Phone Number" className="form-control" />
             {/* {errors.phone && <span className="text-danger">This field is required</span>} */}
         </div>
         <div className="form-group">
             <input type="text" {...register("email")} placeholder="Email" className="form-control" />
             {/* {errors.email && <span className="text-danger">This field is required</span>} */}
         </div>
         <div className="form-group">
             <input type="text" {...register("email")} placeholder="Address" className="form-control" />
             {/* {errors.email && <span className="text-danger">This field is required</span>} */}
         </div>
       

        
    
     <h3 className='text-center'>Make payment</h3>
     
     <div className="form-group text-right">
        
        <button type="submit" className="btn btn-dark ms-5">Send</button>
    </div> </form>
         </div>
         <div className='p-5'>
         <Payment></Payment>
     </div>
   
        </Modal>
        </div>
    );
};

export default ServiceForm;