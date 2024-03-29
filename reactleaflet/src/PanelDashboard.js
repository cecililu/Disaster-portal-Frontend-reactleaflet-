import React from 'react'
import { data } from './data';

export const PanelDashboard = ({data,setneedmarker}) => {
  setneedmarker(0)

  return ( 
    <div><div className="w-full h-full" aria-label="Sidebar">
    <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-96">
       <ul className="space-y-2">
         {data?data.map(item=>{
                return (
                   <li className='flex justify-between border-b-4'>
                   <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                              <span className="flex justify-start ml-3 whitespace-nowrap text-sm mr-4"><div>{item.disaster}</div></span> |
                              <span className="flex justify-end ml-3 whitespace-nowrap text-xs flex-end text-red-600"><div>{item.Comment}</div></span>
                              <span className="flex justify-end ml-3 whitespace-nowrap text-md flex-end text-black-600 flex-end"><div>{item.address}</div></span>
                   </a>
                </li>
                )
         }):''}
          
       </ul>
     
    </div>
 </div></div>
  )
}
