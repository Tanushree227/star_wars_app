import React, { useState, useEffect } from 'react';
import { List } from 'semantic-ui-react';

function Residents({ residentsURLs }) {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResidents() {
      const residentRequests = residentsURLs.map(url => fetch(url).then(res => res.json()));
      const residentsData = await Promise.all(residentRequests);
      setResidents(residentsData);
      setLoading(false);
    }

    fetchResidents();
  }, [residentsURLs]);

  if (loading) return <p>Loading residents...</p>;

  return (
    <div>
      <strong>Residents:</strong>
      <List>
        {residents.map((resident, index) => (
          <List.Item key={index}>
            <List.Icon name='user' />
            <List.Content>
              <List.Header>Resident Name: {resident.name}</List.Header>
              <List.Description>
                <strong>Height:</strong> {resident.height}<br />
                <strong>Mass:</strong> {resident.mass}<br />
                <strong>Gender:</strong> {resident.gender}
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default Residents;
