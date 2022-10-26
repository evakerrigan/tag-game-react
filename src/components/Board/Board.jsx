import { React, Component } from "react";
import Element from '../Element/Element.jsx';

  let arrTag = [4, 6, 0, 7, 5, 1, 8, 2, 3];
  let tagNumber = 3;
  let matrixArray = [];

  class Board extends Component {
    render() {
      return (

        <div className="wrapper container">

          <Element />

        </div>


        )
      }
    }

    export default Board;