import { weeklyActivity } from '../data/ActivityFeed';
import './activityfeed.css';

export const ActivityFeed = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3>Activity</h3>
        <p className="summary">3 appointments this week</p>
      </div>
      <div className="activity-chart">
        {weeklyActivity.map((entry, index) => (
          <div key={index} className="bar-container">
            <div className='rate'>
              <div className="bar" style={{ height: `${entry.count[0] * 16}px`}}></div>
              <div>
                <div className="bar color1" style={{ height: `${entry.count[1] * 15}px`}}></div>
                <div className="bar color2" style={{ height: `${entry.count[2] * 15}px`}}></div>
              </div>
            </div>
            <pre className="bar-label">{entry.day}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}