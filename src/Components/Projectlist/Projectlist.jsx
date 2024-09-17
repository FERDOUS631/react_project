import React from 'react'
import '../Projectlist/Projectlist.css'
const Projectlist = ({title,active,setSelected,id}) => {
  return (
    <li className={active ? " projectlist active ":""} onClick={()=>setSelected(id)}>
        {title}
    </li>
    
  )
}

export default Projectlist