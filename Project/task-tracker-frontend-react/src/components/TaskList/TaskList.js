import './TaskList.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {dateFormat} from '../../helpers/dateFormat';

function TaskList() {

    const navigate = useNavigate();
    const [getList, setList] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/tasks').then((result) => {
            setList(result.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])


    const onCreateTask = () => {
        navigate('/create')
    }

    const onSingleTask = (id) => {
     navigate(`taskdetails/${id}`)
    }




    return (<div className="container">
        <h1>Task List</h1>
        <button type="submit" onClick={onCreateTask} className="btn btn-success btn-md from-button">New Task</button>
        {
            getList.map((data, index) => {
                return (<div className="list" key={index}>
                    <h2 className="details">{data.title}</h2>
                    <p className="details">{dateFormat(data.createdAt)}</p>
                    <h4 className="details">{data.description}</h4>
                    <button type="button" onClick={()=>onSingleTask(data._id)} className="btn btn-primary btn-md from-button">View Details</button>
                </div>
                )
            })
        }
    </div>)
}
export default TaskList;