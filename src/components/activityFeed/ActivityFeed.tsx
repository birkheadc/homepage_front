import * as React from 'react';
import { IActivity } from '../../api/AppData';
import './ActivityFeed.css';

interface ActivityFeedProps {
    language: string,
    activities: IActivity[]
}

function ActivityFeed(props: ActivityFeedProps) {

    function renderActivities(): JSX.Element {
        if (props.activities.length < 1) {
            return (
                <p>There doesn't seem to be anything here...</p>
            );
        }
        return (
            <p>Not yet implemented...</p>
        );
    }

    return (
        <div className='activity-feed-box-wrapper'>
            <h3>My Activity</h3>
            {renderActivities()}
        </div>
    );
}

export default ActivityFeed;