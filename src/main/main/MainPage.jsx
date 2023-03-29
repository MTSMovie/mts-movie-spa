import React, {Component} from 'react';
import {MainPageWrapperContext} from "../core/wrapper/core/context/MainPageWrapperContext";
import {headerStateModalList} from "../core/service/activeId";
import {getDetailCourse} from "../core/api/movieAPI";
import {getError} from "../../core/service/error";
import PreviewMovieWindow from "../core/components/preview_movie_window/PreviewMovieWindow";

class MainPage extends Component {
    static contextType = MainPageWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            moveId: 1,
            data: {},
            error: false,
            isLoad: false,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this.context.setActiveIdTopMenu(headerStateModalList[0]['id'])
        this._setContent()
    }

    _setContent() {
        getDetailCourse(this.state.moveId).then(
            r => {
                this.setState({data: r, isLoad: true})
            },
            e => {
                this.setState({error: true, isLoad: true})
            }
        )
    }

    render() {
        const {moveId, data, isLoad, error} = this.state;
        if (error)
            return getError(error)

        let content = null
        if (isLoad) {
            content = (
                <PreviewMovieWindow moveId={moveId}
                                    title={data.title}
                                    titleImage={data.title_image}
                                    posterHorizontalWithoutText={data.poster_horizontal_without_text}
                                    description={data.description}
                                    year={data.year}
                                    genres={data.genres}
                                    country={data.country}
                                    ageLimit={data.ageLimit}/>
            )
        }


        return (
            <div>
                {content}
            </div>
        );
    }
}

export default MainPage;