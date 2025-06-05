import { HealthStatus } from "../healthstatus/healthStatus"
import { ActivityFeed } from "../ActivityFeed/activityfeed"
import {Calendar} from "../Calendar/calendar"
import {UpcomingSchedule} from "../Upcomingschedule/schedule"
import "./dashboard.css"


export const Dashboard = () => {
    return(
        <div className="dashboard">
            <div className="health-details">
                <HealthStatus />
                <ActivityFeed />
            </div>
            <div className="appointment-details">
                <Calendar />
                <UpcomingSchedule />
            </div>
        </div>
    )
}