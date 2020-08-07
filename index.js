import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
const App=()=>{
    return (
<div className ="ui container comments ">
    <CommentDetail author="Sam" timeAgo="Today at 10.45 AM" avatar={faker.image.avatar()} comment="Impressive blog"/>
    <CommentDetail author="Alex" timeAgo ="Today at8.45 AM" avatar={faker.image.avatar()} comment="Nice blog"/> 
    <CommentDetail author="Raj" timeAgo="Yesterday at 10pm"avatar={faker.image.avatar()} comment="Good blog"/> 
    
</div>
    );

};
ReactDOM.render(<App />,document.querySelector('#root'));