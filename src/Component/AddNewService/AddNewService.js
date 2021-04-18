import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const AddNewService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setIMageURL] = useState(null);
  const onSubmit = data => {
      console.log(data)
      const eventData = {
        name: data.name,
       price:data.price,
        review:data.review,
        imageURL: imageURL
      };
      const url = `https://limitless-lake-51288.herokuapp.com/addNewService`;
    
      fetch(url, {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
      })
      .then(res => console.log('server side response', res))
    };
  const handleImageUpload= event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'd548157c08fa2d99d3a73e1a0c5ed06c');
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
        console.log(response.data.data.display_url)
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    return (
    <div className="container-fluid row">
        <div className="col-md-4"> 
        <Sidebar></Sidebar>
        </div>
         <div className="col-md-8" >
             <h2 className='p-5'>Add new service</h2>
             {/* <form onSubmit={handleSubmit(onSubmit)}>
    
      <input name="name" defaultValue="New exciting Event" ref={register} />
      <br/>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <br/>
      <input type="submit" />
    </form> */}
         <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <br/>
                        <input name="email" type="text" {...register("email")}  placeholder='email' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <br/>
                        <input name="name" type="text" {...register("name")}  placeholder='name' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Review</label>
                        <br/>
                        <input name="review" type="text" {...register("review")}  placeholder='review' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleImageUpload}type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <br/>
                    <input type="submit" />
                </form>
         </div>
    </div>
    );
};

export default AddNewService;