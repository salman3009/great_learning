import './TaskDetails.css';
import { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import { dateFormat } from '../../helpers/dateFormat';

function TaskDetails() {

    const navigate = useNavigate();
    const [getSingleList, setSingleList] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/tasks/${id}`).then((result) => {
            setSingleList(result.data.data);
            console.log(result.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])


    const allTask = () => {
        navigate('/')
    }

    return (<div className="container">
        <h1>Task Title:{getSingleList.title}</h1>
        <p>Created At:{dateFormat(getSingleList.createdAt)}</p>
        <h4>Description:{getSingleList.description}</h4>
        <h4>Details:{getSingleList.details}</h4>
 
        <button type="submit" onClick={allTask} className="btn btn-secondary btn-md from-button">All Task</button>
    </div>)
}
export default TaskDetails;