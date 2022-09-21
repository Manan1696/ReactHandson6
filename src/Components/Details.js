import React , {createContext, useState} from 'react'
export const store = createContext()

const Details = (props) => {
    const [data,SetData] = useState([
        {
            "Name":"Akshay",
            "Age":"24",
            "Course":"MERN",
            "Batch":"October",
            "id":"1"    
        },
 
      
    ])
  return (
    <div>
    <store.Provider value={[data,SetData]}>
    {
    props.children
   }  
     </store.Provider>
    </div>
  )
}

export default Details;
