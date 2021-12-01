
import {Profil} from './components/Profil';
import user from './data/user.json';

import {Statistics} from './components/Statistics';
import data from './data/data.json';

import {FriendList} from './components/FriendList';
import friends from './data/friends.json';

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