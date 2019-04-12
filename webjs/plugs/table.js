import React, {Component} from 'react';

class PlugTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="plug-table">
                <table>
                    <thead>
                        <tr>
                            {this.props.thead.map((item) => (
                                <td key={item.label}>
                                    {item.label}
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tableData.map((line, index) => (
                            <tr key={index}>
                                {this.props.thead.map((item, cIndex) => {
                                    if (item.type === 'default') {
                                        return (
                                            <td key={item.prop}>
                                                {line[item.prop]}
                                            </td>
                                        )
                                    }
                                    if (item.type === 'operation') {
                                        return (
                                            <td key={item.prop + cIndex} className={'operation'}>
                                                {item.operation.map( (opt) => (
                                                    <a href="javascript:;" key={opt.name}
                                                        onClick={() => this.props.onOperation(opt.name, line)}
                                                    >{opt.name}</a>
                                                ))}
                                            </td>
                                        )
                                    }
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <style jsx>{`
                    table {
                        width: 100%;
                        border-spacing: 0;
                        border-collapse: collapse;
                        
                    }
                    thead td {
                        font-weight: bold;
                    }
                    td {
                        border: 1px solid #999;
                        padding: 8px 10px;
                    }
                    td.operation a{
                        margin-right: 12px;
                    }
                `}</style>
            </div>
        )
    }
}

export default PlugTable;
