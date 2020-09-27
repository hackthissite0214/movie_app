import React from "react";

//  Route 컴포넌트안에는 이렇게 location, history 등등의 props가 있다
class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }
}

export default Detail;