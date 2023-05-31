import React from "react";
import '../stylesheets/tables.css'

const Table = ({data = [], headerKeys = []}) => {
    // const splitHeaderKey = () => {
    
    // }
    const renderNestedData = () => {
        return(
            <tbody>
                {data.map((datum, index)=>(
                    <tr key={index}>
                        {headerKeys.map((headerKey, index)=>(
                            <td>{datum[headerKey]}</td>
                        ))}
                        {/* <td>{datum.first_name}</td>
                        <td>{datum.last_name}</td>
                        <td>{datum.team.name}</td> */}
                    </tr>
                ))}
            </tbody>
        )
    }

    const renderHeaders = () => {
       return (<thead>
           <tr>
           {headerKeys.map((name, index)=>(
                <th key={`${index}${name}`}>{name}</th>
            ))}
           </tr>
       </thead>)
    }
    return(
        <div className="table">
            <table>
                {renderHeaders()}
                {renderNestedData()}
            </table>
        </div>
    )
}
export default Table