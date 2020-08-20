import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

import Board from "./components/Board/Board";
import SelectedRestaurant from "./components/SelectedRestaurant/SelectedRestaurant";

import "./App.scss";

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState([]);
  const [shuffle, setShuffle] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleShuffle = () => {
    setShuffle(true);

    setTimeout(() => {
      setShowResult(true);
      setSelectedRestaurant(null);
    }, 2000);
  };

  return (
    <Container>
      {selectedRestaurant != null ? <div className="wrapper">
        <Typography gutterBottom variant="h3" component="h3">
          Let's Eat 🍽
      </Typography>
        < Board selectedRestaurant={selectedRestaurant} shuffle={shuffle} />
        {shuffle ? <div></div> : <Button onClick={handleShuffle} variant="contained" color="primary">
          shuffle restaurants 🔀
        </Button>}
      </div> : <div></div>}
      {showResult && <div className="result">
        <Typography gutterBottom variant="h4" component="h4">
          The Winner Is 🥳
          </Typography>
        <SelectedRestaurant />
      </div>}
    </Container>
  );
};

export default App;
