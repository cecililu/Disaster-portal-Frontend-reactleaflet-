import React, { useState } from 'react'
import { Formik } from 'formik';

export const AddData = ({setcount,latlng}) => {
   console.log(latlng.lat)
  return (
    <div className='add-panel'>
        <div className='flex justify-center'>
        <span className='text-teal-600 text-xl m-2 '>Report a disaster data</span>
        </div>
    <div class="flex justify-center p-1 m-2"> 
    <div class="mb-3 xl:w-96 ">
    <Formik
       initialValues={{ disaster: '', Comment: '',address:'',lat:'',long:''}}
       onSubmit={async(value)=>{
        console.log('sub',value)
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(value)
      };
       const data=await fetch('http://127.0.0.1:8000/api/disaster/v1/geoapi/', requestOptions)
       if(data,data.ok){
       setcount(1)
      }
       }}
       >
    {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
        
         /* and other goodies */
       }) => (
    <form>
    <label for="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700" >Disaster</label>
    <input type="text"
      className="
       mb-5
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Describe a Disaster"
      name='disaster'
      value={values.disaster}
      onChange={handleChange}
    />
    
    <label for="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700" >Address</label>
    <input type="text"
      class="
       mb-5
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      name='address'
      value={values.address}
      placeholder="Enter the address"
      onChange={handleChange}
    />

<label for="exampleFormControlInput2" className="form-label inline-block mb-2 text-gray-700" >Latitude</label>
    <input type="text"
      className="
      mb-5
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput2"
      placeholder="Enter Laltitude"
      name='lat'
      value={latlng.lat}
      onChange={handleChange}
    />

<label for="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700" >Longitude</label>
    <input type="text"
      className="
       mb-5
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Enter the longitude"
      name='long'
      value={latlng.lng}
      onChange={handleChange}
    />
    <label for="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700 " >Comment</label>
    <input type="text"
      className="h-20
       mb-5
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Add a comment"
      name='Comment'
      value={values.Comment}
      onChange={handleChange}
    />
    <div className='flex justify-center'>
    <button class="bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded " type='submit' onClick={handleSubmit}> Add data</button>
    </div>
    </form>
       )}
    </Formik>
  </div>
</div>
</div>
  )
}
