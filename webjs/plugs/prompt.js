import React from 'react';

class Prompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            message: ''
        }
    }

    showPrompt (message) {
        this.setState({visible: true});
        this.setState({message: message});

        setTimeout(() => {
            this.setState({visible: false});
        }, 600);
    }

    componentDidMount () {
        React.$prompt = this.showPrompt.bind(this);
    }

    render () {
        return (
            <div className={['plug-prompt', this.state.visible ? 'active' : ''].join(' ')}>
                <div className="content">
                    {this.state.message}
                </div>

                <style jsx>{`
                    .plug-prompt {
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: #666;
                        padding: 20px 30px;
                        font-size: 14px;
                        color: #fff;
                        border-radius: 6px;
                        display: none;
                        width: 0;
                        height: 0;
                        transition: all 0.6s ease-out;
                    }
                    .plug-prompt.active {
                        width: auto;
                        height: auto;
                        display: block;
                    }
                `}</style>
            </div>
        )
    }
}
export default Prompt;
