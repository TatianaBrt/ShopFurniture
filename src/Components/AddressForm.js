import React  from 'react';
import { useForm } from "react-hook-form";


function AddressForm(){
const {
    register,
    formState:{ errors},
    handleSubmit,
    reset
}=useForm({
    mode:'onBlur'
});

const onSubmit =(data)=>{
    alert(JSON.stringify (data));
    reset();
};

    return(
        <div className='adresform'>
        <div className='adress'>
<h1 className='headerform'>Shipping address</h1>
<form className='form'  onSubmit={handleSubmit(onSubmit)}>
   
<label className="labelform">
  <span className='spanl'> First Name:</span> 
 <input className='inputform' {...register('firstname', {
    required:'This field is required'
   })}/>

   </label>
   <div style={{height:30}}>
{errors?.firstname && <p className='textForm'>{errors?.lastname?.message || 'Error'}</p>}
   </div>

   <label className="labelform">
   <span className='spanl'>Last Name:</span>
   <input className='inputform' {...register('lastname', {
    required:'This field is required'
   })}/>

   </label>
   <div style={{height:30}}>
{errors?.lastname && <p className='textform'>{errors?.lastname?.message || 'Error'}</p>}
   </div>

   <label className="labelform">
   <span className='spanl'> Mobile number:</span>
   <input className='inputform' {...register('mobailnumber', {
    required:'This field is required'
   })}/>

   </label>
   <div style={{height:30}}>
{errors?.mobailnumber && <p className='textform'>{errors?.mobailnumber?.message || 'Error'}</p>}
   </div>

   <label className="labelform">
   <span className='spanl'>Country:</span>
   <input className='inputform' {...register('country', {
    required:'This field is required'
   })}/>

   </label>
   <div style={{height:30}}>
{errors?.country && <p className='textform'>{errors?.country?.message || 'Error'}</p>}
   </div>

   <label className="labelform">
   <span className='spanl'>City:</span>
   <input className='inputform' {...register('city', {
    required:'This field is required'
   })}/>

   </label>
   <div style={{height:30}}>
{errors?.city && <p className='textform'>{errors?.city?.message || 'Error'}</p>}
   </div>

<label className="labelform">
<span className='spanl'> Zip / Postal code:</span>
   <input className='inputform' {...register('zip', {
    required:'This field is required'
   })}/>

   </label>
   <div style={{height:30}}>
{errors?.zip && <p className='textform'>{errors?.zip?.message || 'Error'}</p>}
   </div>
    
   <label className="labelform">
   <span className='spanl'>Address:</span>
   <input className='inputform'{...register ('address', {
    required:'This field is required'
   })}/>

   </label>
   <div style={{height:30}}>
{errors?.address && <p className='textform'>{errors?.address?.message || 'Error'}</p>}
   </div> 

   <input className='btnform' type="submit" />
</form>

        </div>
        </div>
      
    )
}

export default AddressForm;