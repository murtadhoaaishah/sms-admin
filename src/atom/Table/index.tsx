import { data } from "../../data"
import "./Table.scss"
const Table = ({ heading, tableData }: { heading: Array<{ name: string, key: string }>, tableData: Array<{}> }) => {
    return (
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
