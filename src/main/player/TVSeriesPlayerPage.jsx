import React, {Component} from 'react';
import {withParams} from "../../core/service/params";
import {getPlayerTVSeries} from "../core/api/tvSeriesAPI";

class TvSeriesPlayerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            error: false,
            isLoad: false,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this._setContent()
    }

    _setContent() {
        getPlayerTVSeries(this.props.params.moveId).then(
            r => {
                this.setState({data: r, isLoad: true})
            },
            e => {
                this.setState({error: true, isLoad: true})
            }
        )
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default withParams(TvSeriesPlayerPage);