import "./Table.scss"
const Table = ({ heading, tableData }: { heading: Array<{ name: string, key: string }>, tableData: Array<{}> }) => {
    return (
        <div>
            <table className='table-wrapper'>
                <thead className="table-heading">
                    {heading.map((head) => <th className="table-head">{head.name}</th>)}
                </thead>
                <tbody className="table-head">
                    {tableData.map((row: any) => <tr className="table-row">{heading.map((data) => <td className="table-data">{row[data.key]}</td>)}</tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table
