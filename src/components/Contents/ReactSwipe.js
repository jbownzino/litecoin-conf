import React, { Component, PropTypes } from 'react';
import Swipe from 'swipe-js-iso';

class ReactSwipe extends Component {

    componentDidMount() {
        const { swipeOptions } = this.props;
        this.swipe = Swipe(this._container, swipeOptions);
    }

    componentWillUnmount() {
        this.swipe.kill();
        this.swipe = void 0;
    }

    next() {
        this.swipe.next();
    }

    prev() {
        this.swipe.prev();
    }

    slide(...args) {
        this.swipe.slide(...args);
    }

    getPos() {
        return this.swipe.getPos();
    }

    getNumSlides() {
        return this.swipe.getNumSlides();
    }

    render() {
        const { id, className, style, children } = this.props;
        return (
            <div ref={(c) => this._container = c} id={id} className={`react-swipe-container ${className}`} style={style.container}>
                <div style={style.wrapper}>
                    {React.Children.map(children, child => {
                        return React.cloneElement(child, {style: style.child});
                    })}
                </div>
            </div>
        );
    }
}

ReactSwipe.defaultProps = {
    swipeOptions: {},
    style: {
        container: {
            overflow: 'hidden',
            visibility: 'hidden',
            position: 'relative',
            width: '100%'
        },

        wrapper: {
            overflow: 'hidden',
            position: 'relative'
        },

        child: {
            float: 'left',
            width: '100%',
            position: 'relative',
            transitionProperty: 'transform'
        }
    },
    className: ''
}
export default ReactSwipe;