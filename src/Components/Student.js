import {React, useContext}  from 'react'
import Navbar from './Navbar'
import {Link,useNavigate} from 'react-router-dom'
import {store} from './Details'

const Student = () =>{
  const [data] = useContext(store);
  
  let history = useNavigate();

  const handleDelete = (id) =>{
    var index = data.map(function(e){
      return e.id
    }).indexOf(id);

    data.splice(index,1);

    history('/student');
  }

  const handleEdit = (id, name, age, batch, course) =>{
    localStorage.setItem('Id',id);
    localStorage.setItem('Name',name);
    localStorage.setItem('Age',age);
    localStorage.setItem('Batch',batch);
    localStorage.setItem('Course',course);
  }
  return (
    <div>
    <Navbar/>
    <div className='header'>
    <h3>Student Page</h3>

    <Link to="/add">
    <button type="button" className="btn btn-secondary">Add Students</button>
    </Link>
    </div>
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody>

    {data.map((student) =>  (
      <tr>
      <td>{student.Name}</td>
      <td>{student.Age}</td>
      <td>{student.Course}</td>
      <td>{student.Batch}</td>
      <td><Link to="/edit">
      <button onClick={()=> handleEdit(student.id, student.Name, student.Age,student.Batch,student.Course)} className="btn btn-primary">Edit</button> 
      </Link>
      &nbsp;&nbsp;

      <button onClick={()=>handleDelete(student.id)} className="btn btn-danger">Delete</button> 
      </td>

    </tr>
      ))}
  
  </tbody>
</table>
    
    </div>
  )
}

export default Student;