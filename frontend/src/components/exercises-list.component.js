import React, { Component } from "react";
import axios from "axios";
import Exercise from "./exercise.component";

export class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);
    this.exerciseList = this.exerciseList.bind(this);
    this.state = {
      exercises: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://exercsise-tracker-application.herokuapp.com/exercises/")
      .then((res) => {
        this.setState({
          exercises: res.data,
        });
      })
      .catch((err) => alert(`Could not fetch data: ${err.message}`));
  }

  deleteExercise(id) {
    axios
      .delete(
        "https://exercsise-tracker-application.herokuapp.com/exercises/" + id
      )
      .catch((err) => alert(`Could not delete data: ${err.message}`));

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ExercisesList;
