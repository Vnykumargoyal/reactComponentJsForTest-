import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author="Vinay" 
                timeAgo="Today at 6:00PM" 
                content="Nice blog post" 
                avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Vishesh" 
                timeAgo="Today at 6:00PM" 
                content="Nice blog post" 
                avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Vikas" 
                timeAgo="Today at 2:00PM" 
                content="I like the subject"
                avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                author="Vikram" 
                timeAgo="yesterday at 6:00PM" 
                content="I love this post"
                avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Vishal" 
                timeAgo="Today at 11:00PM" 
                content="Nice One"
                avatar={faker.image.image()}
                />
            </ApprovalCard>

           
          
          
           
        </div>
    )
};


ReactDOM.render(<App />, document.getElementById('root'))