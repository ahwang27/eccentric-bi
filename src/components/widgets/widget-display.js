import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dragula from 'react-dragula';
import { connect } from 'react-redux';


class WidgetDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        var specialContainer = ReactDOM.findDOMNode(this);
        Dragula([specialContainer]);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.widgetList.map((widget, index) => {
                        const WidgetComponent = widget;
                        return (
                            <div key={index} className="col-sm-3 card">
                                <WidgetComponent />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    widgetList: state.widgetContainer.widgetList
})

export default connect(mapStateToProps)(WidgetDisplay);


// const WidgetDisplay = props => (
//     <div className="row">
//         {
//             props.widgetList.map((widget, index) => {
//                 const WidgetComponent = widget;
//                 return (
//                     <div key={index} className="col-sm-3 card">
//                         <WidgetComponent />
//                     </div>
//                 )
//             })
//         }
//     </div>
// )

// const mapStateToProps = state => ({
//     widgetList: state.widgetContainer.widgetList
// })

// export default connect(mapStateToProps)(WidgetDisplay);