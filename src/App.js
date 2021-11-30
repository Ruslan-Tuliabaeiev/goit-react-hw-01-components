
import {Profil} from './components/Profil';
import user from './data/user.json'

import {Statistics} from './components/Statistics'
import data from './data/data.json'

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
label={data.label}

<Statistics

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