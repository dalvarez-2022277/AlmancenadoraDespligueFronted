import { AddTask } from '../../components/form/AddTask'
import { ListaTareas } from '../../components/ListaTareas';
import { Navbar } from '../../components/navbar/Navbar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TaskBoardPage = () => {
    const [addTask, setAddTask] = useState(false);
    const [listTasks, setListTasks] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/auth');
        }
    }, [navigate]);

    const handleToggleAddTask = () => {
        if (listTasks) {
            setListTasks(!listTasks)
        }
        setAddTask(!addTask); // Cambia el estado showAddTask al contrario de su valor actual
    };

    const handleToggleListTasks = () => {
        if (addTask) {
            setAddTask(!addTask)
        }
        setListTasks(!listTasks); // Cambia el estado showAddTask al contrario de su valor actual
    };


    return (
        localStorage.getItem('user') ? (
            <div>
                <Navbar toggleAddTask={handleToggleAddTask} toggleListTasks={handleToggleListTasks} />
                <br />
                {addTask && <AddTask />}
                {listTasks && <ListaTareas />}
            </div>
        ) : null
    );
}
