import React from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({questions, deleteQuestion}) {
  console.log("questions from questionList", questions)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => <QuestionItem question={question} key={question.id} deleteQuestion={deleteQuestion}/>)}</ul>
    </section>
  );
}

export default QuestionList;
