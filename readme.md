## Skeleton for Node.js with Express applications written in TypeScript

### GIT
``` 
create new github repo <newreponame>
git clone -depth=1 https://github.com/wayneparrott/node-typescript-starter <newreponame>
cd <newreponame>
git remote set-url origin https://github.com/wayneparrott/<newreponame>.git
git push -u origin master
import into eclipse as new project or start using from shell
```
or 

use Github's importer https://github.com/new/import
 git clone -depth=1 <newrepourl>

### Initialize New Project
npm init
npm install
npm run build

### Development

```bash
npm run dev
```

### Running tests

```bash
npm test
```

Testin browser
http://localhost:3000
http://localhost:3000/api
http://localhost:3000/api//foo

### Linting

```bash
npm run lint
```

### Building a container

```bash
docker build -t <imagename>:1.0 .
```

## Notes
The .vscode/ contains a launch.json configured for debugging or running the project directly
from VS Code or CodeMix for Eclipse from Genutiec
    
    
    
    
*influences*
https://github.com/RisingStack/node-typescript-starter
https://github.com/Microsoft/TypeScript-Node-Starter
