import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(response => setQuestions(response))
  }, [])

  const deleteQuestion = (id) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "delete", 
      headers: {
        "content-type": "application/json"
      }
    })
    .then(() => {
      setQuestions(questions.filter(q => q.id !== id))
    })
  }

  const createQuestion = (question) => {
    fetch("http://localhost:4000/questions", {
      method: "POST", 
      headers: {
        "content-type": "application/json", 

      }, 
      body: JSON.stringify(question)
    })
    .then(response => response.json())
    .then(response => {
      console.log("response from adding a question", response)
      setQuestions([...questions, response])})
      console.log("questions from state", questions)
  }

  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm createQuestion={createQuestion} /> : <QuestionList questions={questions} deleteQuestion={deleteQuestion} />}
    </main>
  );
}

export default App;
