import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App=()=>{
    return (
<div className ="ui container comments ">
    <ApprovalCard>
        <div><h1>
        Are you sure you want this .?</h1>
        </div>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail author="Sam" timeAgo="Today at 10.45 AM" avatar={faker.image.avatar()} comment="Impressive blog"/>
    </ApprovalCard>
    <ApprovalCard>
       <CommentDetail author="Alex" timeAgo ="Today at8.45 AM" avatar={faker.image.avatar()} comment="Nice blog"/> 
       </ApprovalCard>
       <ApprovalCard>
          <CommentDetail author="Raj" timeAgo="Yesterday at 10pm"avatar={faker.image.avatar()} comment="Good blog"/> 
          </ApprovalCard>
    
</div>
    );

};
ReactDOM.render(<App />,document.querySelector('#root'));