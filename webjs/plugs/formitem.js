import React from 'react';

class PlugFormItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'form-item'}>
                <label className={'label'}>{this.props.label + ':'}</label>
                <div className={'content'}>{this.props.children}</div>
                <style jsx>{`
                   .form-item {
                        display: inline-block;
                        width: 50%;
                   }
                    .label {
                        width: 70px;
                        display: inline-block;
                        color: #777;
                        text-align: right;
                        padding-right: 12px;
                        font-weight: bold;
                        vertical-align: text-top;
                    }
                    .content {
                        display: inline-block;
                        vertical-align: text-top;
                    }
                `}</style>
            </div>
        )
    }
}

export default PlugFormItem;
