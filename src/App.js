import UserProfile from './components/UserProfile';
import UserStatistic from './components/UserStatistic';
import UserFriends from './components/UserFriends';
import TransactionHistory from './components/TransactionHistory';
import userData from './jsons/user.json';
import statisticData from './jsons/data.json';
import friendsData from './jsons/friends.json';
import transactionsData from './jsons/transactions.json';

export default function App() {
    return (
        <div>
            <UserProfile
            username={userData.username}
            tag={userData.tag}
            location={userData.location}
            avatar={userData.avatar}
            stats={userData.stats}
            />
            <UserStatistic
                title='Statistic'
                stats={statisticData}
            />
            <UserFriends
                props={friendsData}
            />
            <TransactionHistory
                props={transactionsData}
            />
        </div>
    )
}