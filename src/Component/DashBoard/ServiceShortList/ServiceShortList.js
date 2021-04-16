import React from 'react';

           
const ServiceShortList = ({servicesByDate}) => {
    return (
        <div className='row '>
               

            <ul>
                          
                {
                  servicesByDate.map((servicesDate) => 
                        
                 
                       <h5><img style={{height: '100px'}} className="img-fluid mb-3" src= {servicesDate.serviceImg} alt=""/><br/>
                       {servicesDate.service}
                          </h5>
                     
                       
                 
                    )
                }
               
            </ul>
         
    
        </div>
    );
};

export default ServiceShortList;