# Wetube REloaded

# Router

/controller export/
```Javascript
export const join = (req, res) => res.send("Join");
```
/controller import/
<code>import { join } from "../controllers/userController";</code>

# url plan

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit MY Profile
/users/delete -> Delete MY Profile

/videos/:id -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video
