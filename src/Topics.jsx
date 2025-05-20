import React, { useEffect, useState } from "react"
import { getTopics } from "./api";
function Topics(){
    const [topics, setTopics] = useState([])
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        getTopics()
          .then(data => {
            setTopics(data);
            setLoading(false);
          })
          .catch(err => {
            setError("Failed to fetch topics");
            setLoading(false);
          });
      }, []);
    
      if (loading) return <p>Loading topics...</p>;
      if (error) return <p>{error}</p>;

return(
    <div>
        <h2>Topics</h2>
      <ul>
        {topics.map(topic => (
          <li key={topic.slug}>
            <h3>{topic.slug}</h3>
            <p>{topic.description}</p>
            <img src={topic.img_url ? topic.img_url : "https://www.cageclub.me/wp-content/uploads/2015/12/g-force-7.jpg"} alt={topic.slug} width="100"/>
          </li>
        ))}
      </ul>
    </div>
)
}
export default Topics