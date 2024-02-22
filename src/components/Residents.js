import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import classes from "./Planets.module.css";
import Card from "./ui/Card";

export default function Residents({ planets }) {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);

  const { planetId } = useParams();
  useEffect(() => {
    async function fetchResidents() {
      const planet = planets[planetId];
      if (!planet) {
        return;
      }

      const residentRequests = planet.residents.map((url) =>
        fetch(url).then((res) => res.json())
      );
      const residentsData = await Promise.all(residentRequests);
      setResidents(residentsData);
      setLoading(false);
    }

    fetchResidents();
  }, [planetId, planets]);

  if (loading) return <div>Loading residents...</div>;

  return (
    <>
      <h1>Residents of {planets[planetId].name}</h1>
      {residents.length === 0 ? (
        <p>No residents in this planet.</p>
      ) : (
        <ul>
          {residents.map((resident, index) => (
            <li className={classes.item} key={index}>
              <Card>
                <div className={classes.content}>
                  <p><strong>Name: </strong> {resident.name}</p>
                  <p><strong>Height: </strong> {resident.height}</p>
                  <p><strong>Mass: </strong> {resident.mass}</p>
                  <p><strong>Gender: </strong>{resident.gender}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
