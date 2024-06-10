
/* " En la carpeta src, crea un nuevo
archivo llamado ListaTareas.jsx. En este archivo, crea un componente llamado ListaTareas que
renderice una lista de elementos. Usa el estado de React para almacenar los elementos de la
lista (Array)." */

import { useEffect } from 'react';
import { useGetTasks } from '../shared/hooks/useGetTask';
import { useDeleteTask } from '../shared/hooks/useDeleteTask';
import { useUpdateTask } from '../shared/hooks/useUpdateTask';


export const ListaTareas = () => {
    const { tasks, getTasks, isLoading, error } = useGetTasks();
    const { updateTask } = useUpdateTask();
    const { deleteTask } = useDeleteTask();
    console.log("tasks JSX", tasks);

    useEffect(() => {
        getTasks();
    }, []);
    //console.log({ tasks, isLoading, error }, 'ListaTareas.jsx');

    const handleDeleteTask = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('data-id');
        deleteTask(id).then(() => getTasks());
    }

    const handleUpdateTask = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('data-id');
        updateTask(id).then(() => getTasks());
        event.target.checked = true;
    }

    return (
        <div className='card'>
            <div className='card-content'>
                <h1 className='title is-5 has-text-centered'>THINGS TO DO</h1>
                {isLoading ? (
                    <p>Cargando tareas...</p>
                ) : error ? (
                    <p>Hubo un error al cargar las tareas: {error.message}</p>
                ) : (
                    <ul>
                        {tasks.map((task, taskIndex) => (
                            <li key={taskIndex}>
                                <ul>
                                    {task.toDo.map(item => (
                                        <li key={item.id}>
                                            <div className='card m-4'>
                                                <div className='card-content'>
                                                    <div className='content'>
                                                        <div className='grid row-gap-0 has-text-centered'>
                                                            <div className='cell'>
                                                                <div className='column'>
                                                                    <label htmlFor="checkbox" className='label'>Check</label>
                                                                    <input className='checkbox' id='checkbox' type="checkbox" checked={item.status} data-id={item.id} onClick={handleUpdateTask} />
                                                                </div>
                                                            </div>
                                                            <div className='cell'>
                                                                <p className='control'>
                                                                    <p className='label' readOnly>Name task:</p>
                                                                </p>
                                                                <p className="control">
                                                                    <p type="label">{item.nameTask}</p>
                                                                </p>
                                                                <p className='control'>
                                                                    <p className='label'> Date Begin:</p>
                                                                </p>
                                                                <p className="control">
                                                                    <p type="date" className='' >{item.dateBegin}</p>
                                                                </p>
                                                            </div>
                                                            <div className='cell'>
                                                                <p className='control'>
                                                                    <p className='label' readOnly>State:</p>
                                                                </p>
                                                                <p className="control">
                                                                    <p type="text" className={`text ${item.status ? 'has-text-success' : 'has-text-danger'}`} >{item.status ? 'Completed' : 'Earring'}</p>
                                                                </p>

                                                                <p className='control'>
                                                                    <p className='label'> Date End:</p>
                                                                </p>
                                                                <p className="control">
                                                                    <p type="date" className='' >{item.dateEnd}</p>
                                                                </p>

                                                            </div>
                                                            <div className='cell'>
                                                                <p className='control'>
                                                                    <p className='label' readOnly>User:</p>
                                                                </p>
                                                                <p className="control">
                                                                    <p className='text'>{item.nameUser}</p>
                                                                </p>
                                                                <button className="button is-danger" data-id={item.id} onClick={handleDeleteTask}>Eliminar</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );


};