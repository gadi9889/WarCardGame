import React from "react";
import axios from "axios";

export default function Leaderboard({ kingdomLeaderboard, regionLeaderboard }) {
  return (
    <div>
      <table className="table table-warning table-hover m-1 color-red position-absolute start-0 w-25">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Region</th>
            <th scope="col">color</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {regionLeaderboard.map((user, i) => {
            return (
              <tr className={`color-${user.color}`}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.color}</td>
                <td>{user.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table className="table table-info table-hover m-1">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Kingdom</th>
            <th scope="col">Region</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {kingdomLeaderboard.map((user, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.region_name}</td>
                <td>{user.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
