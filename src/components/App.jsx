import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';

import getRandomColor from 'utils/getRandomColor';
import userData from '../user.json';
import statisticsData from '../data.json';
import friendsData from '../friends.json';
import transactionsData from '../transactions.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        userName={username}
        userTag={tag}
        location={location}
        avatarUrl={avatar}
        userStats={stats}
      />
      <Statistics
        title="Upload stat"
        stats={statisticsData}
        changeColor={getRandomColor()}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
