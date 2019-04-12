import React from 'react';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }

    onClose () {
        this.props.onClose();
    }

    render() {
        return (
            <div className={'plug-dialog'} style={{'display': this.props.visible ? 'block' : 'none'}}>
                <div className={'mask'}>
                    <div className={'main'}>
                        <div className={'main-header'}>
                            <div className={'title'}>{this.props.title}</div>
                            <div className={'close'} onClick={() => this.onClose()}>x</div>
                        </div>
                        <div className={'main-body'}>
                            {this.props.children}
                        </div>
                        <div>{this.props.footer}</div>
                    </div>
                </div>

                <style jsx>{`
                    .plug-dialog .mask {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.6);
                    }
                    .plug-dialog .main {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: #fff;
                    }
                    .main-header {
                        height: 48px;
                        line-height: 48px;
                        background: #f7faff;
                        padding: 0 20px;
                    }
                    .main-header .title {
                        
                    }
                    .main-header .close {
                        position: absolute;
                        top: 0;
                        right: 20px;
                        cursor: pointer;
                        font-size: 18px;
                    }
                `}</style>
            </div>
        )
    }
}

export default Dialog;
