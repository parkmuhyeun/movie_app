import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history} = this.props;
        if(location.state === undefined){                   //state=undefined => home
            history.push("/");
        }
    }
    render(){
        const { location } = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;    //state!=undefined일때
        }
        else{
            return null;
        }

    }
}
export default Detail;