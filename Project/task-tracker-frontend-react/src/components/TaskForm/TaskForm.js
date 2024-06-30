import './TaskForm.css';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function TaskForm() {

    const navigate = useNavigate();

    const [getForm, setForm] = useState({
        title: '',
        description: '',
        details: ''
    })

    const onChangeHandler=(event)=>{
     const{name,value} = event.target;
     setForm({...getForm,[name]:value});
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8080/api/v1/tasks',getForm).then((data)=>{
            console.log(data);
            navigate('/');
        }).catch((error)=>{
            console.log(error);
        })
    }

    return (<div className="container">
        <h1>New Task</h1>
        <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label htmlFor="title">title</label>
                <input type="text" onChange={onChangeHandler} className="form-control" id="title" name="title" required/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" onChange={onChangeHandler} rows="3" id="description" name="description" required/>
            </div>
            <div className="form-group">
                <label htmlFor="details">Details</label>
                <textarea rows="3" className="form-control" onChange={onChangeHandler} id="details" name="details" required/>
            </div>
            <button type="reset" className="btn btn-secondary btn-md from-button">Cancel</button>
            <button type="submit" className="btn btn-primary btn-md from-button">Save</button>

        </form>
    </div>)
}
export default TaskForm;