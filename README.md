# Wetube CloneCoding

---

### controller export

```JS
export const join = (req, res) => res.send("Join");
```

### controller import

```JS
import { join } from "../controllers/userController";
```

---

## url plan

1. globalRouter

- / -> Home
- /join -> Join
- /login -> Login
- /search -> Search

1. userRouter

- /users/:id -> See User
- /users/logout -> Log Out
- /users/edit -> Edit MY Profile
- /users/delete -> Delete MY Profile

1. videoRouter

- /videos/:id -> See Video
- /videos/:id/edit -> Edit Video
- /videos/:id/delete -> Delete Video
- /videos/upload -> Upload Video

---
