# Wetube REloaded

# Router

/controller export/
```Javascript
export const join = (req, res) => res.send("Join");
```
/controller import/
```Javascript
import { join } from "../controllers/userController";
```


# url plan

1. / -> Home
+ /join -> Join
+ /login -> Login
+ /search -> Search

1. /users/:id -> See User
+ /users/logout -> Log Out
+ /users/edit -> Edit MY Profile
+ /users/delete -> Delete MY Profile

1. /videos/:id -> See Video
+ /videos/:id/edit -> Edit Video
+ /videos/:id/delete -> Delete Video
+ /videos/upload -> Upload Video
