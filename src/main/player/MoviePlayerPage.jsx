import React, {Component} from 'react';
import {getPlayerMovies} from "../core/api/movieAPI";
import {withParams} from "../../core/service/params";
import Player from "./core/components/player/Player";
import {getImage} from "../../core/api/mainAPI";

class MoviePlayerPage extends Component {
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
        getPlayerMovies(this.props.params.path).then(
            r => {
                this.setState({data: r, isLoad: true})
            },
            e => {
                this.setState({error: true, isLoad: true})
            }
        )
    }

    render() {
        const {data, isLoad, error} = this.state;
        return (
            <div>
                <Player url={getImage(data.movie)} />
            </div>
        );
    }
}

export default withParams(MoviePlayerPage);