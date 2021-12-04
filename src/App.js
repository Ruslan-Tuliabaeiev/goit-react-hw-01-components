
import {Profil} from './components/Profil/Profil';
import user from './data/user.json';

import {Statistics} from './components/Statistics/Statistics';
import data from './data/data.json';

import {FriendList} from './components/FriendList/FriendList';
import friends from './data/friends.json';

import {TransactionHistry} from './components/TransactionHistry/TransactionHistory';
import transactions from './data/transactions.json'

function App() {
  return (
    <>
<div>
<Profil 
avatar={user.avatar}
 username={user.username}
 tag={user.tag}
 location={user.location}
 stats={user.stats}
> 
</Profil>

<Statistics
title="Upload stats"
stats={data}  
/>
<FriendList 
friends={friends}
/>

<TransactionHistry
items={transactions}
/>
 </div>
 </>
  );
}

export default App;


// user={user.avatar}
// username={user.username}
// tag={user.tag}
// location={user.location}
// stats={user.stats}