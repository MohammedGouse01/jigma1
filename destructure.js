import React from 'react';

export const SearchPanel = ({users, param, setParam}) => {

    return (
        <form action={''}>
            <div>
                {/* <input
                    type="text"
                    value={param.name}
                    onChange={(evt) =>
                        setParam({
                            ...param,
                            name: evt.target.value,
                        })
                    }
                /> */}
                {/* <select
                    value={param.personId}
                    onChange={(evt) =>
                        setParam({
                            ...param,
                            personId: evt.target.value,
                        })
                    }
                >
                    <option value={''}>Assignee</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select> */}
            </div>
        </form>
    );
};



// const { useEffect } = require("react");

// useEffect(() => {
//     fetch(`${apiUrl}/projects?`).then(async (response) => {
//         if (response.ok) {
//             setList(await response.json());
//         }
//     });
// }, [param]);


// useEffect(() => {
    
// }, []);

// fetch(`path`).then(async (response) => {
//     if (response.ok) {
//        //code
//     }
// });

// useEffect(()=>{
//     fetch('').then(async (response)=>{
//         if(response.ok){
//             setList(await response.json());
//         }
//     })

// },[padram])




// const [list, setList] = useState([]);