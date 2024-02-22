import React from "react";
import Card from "./ui/Card";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <Card>
      <div className={classes.image}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
          alt="star wars logo"
        />
      </div>
      <div className={classes.content}>
        <h3>About Star Wars</h3>
        <p>
          Star Wars is an American epic space opera media franchise created by
          George Lucas, which began with the eponymous 1977 film and quickly
          became a worldwide pop culture phenomenon.
          <br />
          The franchise has been expanded into various films and other media,
          including television series, video games, novels, comic books, theme
          park attractions, and themed areas, comprising an all-encompassing
          fictional universe.
          <br />
          Star Wars is one of the highest-grossing media franchises of all time.
        </p>
      </div>
    </Card>
  );
}
