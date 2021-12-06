import React, { useReducer, useState } from 'react'


interface IState {
    task: string;
}

interface IAction {
    type: "Post" | "Delete";
    payload: React.ChangeEvent<HTMLInputElement>
}

const initialState = { task: "" };

function reducer(state: IState, action: IAction) {
    switch (action.type) {
        case "Post":
            return { task: action.payload.target.value }
        case "Delete":
            return { task: "Hola soy Delete" }

    }
}

const Todolist = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [post, setPost] = useState(false);

    // const submitTask = () => dispatch({ type: "Post", payload: "" })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: "Post", payload: e })
    const submitTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (post === false) {
            setPost(true);
        } else {
            setPost(false);
        }
    }

    return (
        <div>
            {/* <form onSubmit={submitTask}> */}
            <form onSubmit={submitTask}>
                <input type="text" value={state.task} onChange={handleChange} />
            </form>
            <h2>{post ? state.task : ""}</h2>
        </div>
    )
}

export default Todolist
