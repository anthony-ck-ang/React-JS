//1. Import React and ReactDOM lib from node_modules and assign to local var
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

//2. Create a react component

// const App = function() {
//   return <div>Hi there!</div>;
// };

// function getButtonText() {
//   return "CLICK ME!";
// }

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today 5:45pm"
          comment="lalalala"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today 2:00am"
          comment="yeyeyeye"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday 6:00pm"
          comment="kkkkkkk"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

//3. Take the component and render it on screen

//call render function, pass in 2 arg
ReactDOM.render(<App />, document.querySelector("#root"));
