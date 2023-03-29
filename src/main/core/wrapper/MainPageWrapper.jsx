import React, {Component} from 'react';
import cl from "./_MainPageWrapper.module.scss"
import {MainPageWrapperContext} from "./core/context/MainPageWrapperContext";
import {headerStateModalList} from "../service/activeId";
import TopBar from "./core/components/top_bar/TopBar";

class MainPageWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIdTopMenu: null,
            topMenu: headerStateModalList,
        }
    }

    _setActiveIdTopMenu = (newId) => {
        this.setState({activeIdTopMenu: newId})
    }

    render() {
        const {activeIdTopMenu, topMenu} = this.state;
        const {children, ...props} = this.props;
        const content = (
            <MainPageWrapperContext.Provider value={{
                activeIdTopMenu: activeIdTopMenu,
                topMenu: topMenu,
                setActiveIdTopMenu: this._setActiveIdTopMenu,
                ...props
            }}>
                {children}
            </MainPageWrapperContext.Provider>
        )
        return (
            <div>
                <TopBar menu={topMenu} activeId={activeIdTopMenu} className={cl.topBar} />
                <div className={cl.content}>
                    {content}
                </div>
            </div>
        );
    }
}

const MainPageContextConsumer = MainPageWrapperContext.Consumer;
export {MainPageWrapper, MainPageContextConsumer};