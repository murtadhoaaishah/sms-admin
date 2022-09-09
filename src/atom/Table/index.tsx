import { data } from "../../data"
import "./Table.scss"
const Table = ({ heading, tableData }: { heading: Array<{ name: string, key: string }>, tableData: Array<{}> }) => {
    return (
        // <table className='table-wrapper'>
        //     <thead className="table-heading">
        //         {
        //             heading.map((head) => <th className="table-head">{head.name}</th>)
        //         }
        //     </thead>
        //     <tbody
        //         className="table-head">
        //         {
        //             tableData.map((row: any) => <tr className="table-row">
        //                 {
        //                     heading.map((data) => <td className="table-data">{row[data.key]}
        //                     </td>)
        //                 }
        //             </tr>)

        //         }
        //     </tbody>
        // </table>




        <table>
            <thead>
                {
                    heading.map((head: any) => <th>{head.name}</th>
                    )
                }
            </thead>
            <tbody>
                {
                    tableData.map((row: any) => <tr>{
                        heading.map((data: any) => <td>{row[data.key]}</td>)
                    }</tr>)
                }
            </tbody>
        </table>

    )
}

export default Table
