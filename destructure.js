// import React from 'react';

// export const SearchPanel = ({users, param, setParam}) => {

//     return (
//         <form action={''}>
//             <div>
//                 {/* <input
//                     type="text"
//                     value={param.name}
//                     onChange={(evt) =>
//                         setParam({
//                             ...param,
//                             name: evt.target.value,
//                         })
//                     }
//                 /> */}
//                 {/* <select
//                     value={param.personId}
//                     onChange={(evt) =>
//                         setParam({
//                             ...param,
//                             personId: evt.target.value,
//                         })
//                     }
//                 >
//                     <option value={''}>Assignee</option>
//                     {users.map((user) => (
//                         <option key={user.id} value={user.id}>
//                             {user.name}
//                         </option>
//                     ))}
//                 </select> */}
//             </div>
//         </form>
//     );
// };



// // const { useEffect } = require("react");

// // useEffect(() => {
// //     fetch(`${apiUrl}/projects?`).then(async (response) => {
// //         if (response.ok) {
// //             setList(await response.json());
// //         }
// //     });
// // }, [param]);


// // useEffect(() => {
    
// // }, []);

// // fetch(`path`).then(async (response) => {
// //     if (response.ok) {
// //        //code
// //     }
// // });

// // useEffect(()=>{
// //     fetch('').then(async (response)=>{
// //         if(response.ok){
// //             setList(await response.json());
// //         }
// //     })

// // },[padram])




// // const [list, setList] = useState([]);
const obj=[InvoiceID ,
Branch ,
City ,
Customertype ,
Gender ,
Productline ,
Unitprice ,
Quantity ,
Tax5percentage ,
Total ,
Date ,
Time ,
Payment ,
cogs ,
grossMarginPercentage ,
grossincome  ,
Rating]





//hard coded table body
{salesData.map(item => (
    <tr key={item.InvoiceID}>
        <td>{item.InvoiceID}</td>   
        <td>{item.Branch}</td>  
        <td>{item.City}</td>  
        <td>{item.Customertype}</td>  
        <td>{item.Gender}</td>  
        <td>{item.Productline}</td>  
        <td>{item.Unitprice}</td>  
        <td>{item.Quantity}</td>  
        <td>{item.Tax5percentage}</td>  
        <td>{item.Total}</td>  
        <td>{item.Date}</td>  
        <td>{item.Time}</td>  
        <td>{item.Payment}</td>  
        <td>{item.cogs}</td>  
        <td>{item.grossMarginPercentage}</td>  
        <td>{item.rossincome}</td>
        <td>{item.Rating}</td>  

    </tr>
  ))}