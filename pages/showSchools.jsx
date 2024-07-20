import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowSchools = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const fetchSchools = async () => {
            const response = await axios.get('/api/getSchools');
            setSchools(response.data);
        };

        fetchSchools();
    }, []);

    return (
        <div className="schools-list">
            {schools.map((school) => (
                <div key={school.id} className="school">
                    <img src={`/schoolImages/${school.image}`} alt={school.name} />
                    <h3>{school.name}</h3>
                    <p>{school.address}</p>
                    <p>{school.city}</p>
                </div>
            ))}
        </div>
    );
};

export default ShowSchools;
