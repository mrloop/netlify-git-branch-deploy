netlify-git-branch
==================

[![CI](https://github.com/mrloop/netlify-git-branch/actions/workflows/ci.yml/badge.svg)](https://github.com/mrloop/netlify-git-branch/actions/workflows/ci.yml)
[![Latest NPM release][npm-badge]][npm-badge-url]

[npm-badge]: https://img.shields.io/npm/v/netlify-git-branch.svg
[npm-badge-url]: https://www.npmjs.com/package/netlify-git-branch

Feature branch staging environments with netlify and git.

Easily deploy feature branches to indiviudal subdomains on netlify.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g netlify-git-branch
$ netlify-git-branch COMMAND
running command...
$ netlify-git-branch (--version)
netlify-git-branch/1.0.2 linux-x64 node-v16.13.0
$ netlify-git-branch --help [COMMAND]
USAGE
  $ netlify-git-branch COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`netlify-git-branch delete NAME`](#netlify-git-branch-delete-name)
* [`netlify-git-branch deploy NAME`](#netlify-git-branch-deploy-name)
* [`netlify-git-branch help [COMMAND]`](#netlify-git-branch-help-command)

## `netlify-git-branch delete NAME`

Delete netlify staging subdomain for this branch

```
USAGE
  $ netlify-git-branch delete [NAME]

ARGUMENTS
  NAME  Name is prefixed onto the git branch name. For Example on branch 'my-feature' and a name of 'my-site' the domain
        will be 'https://my-site-my-feature.netlify.app'.

DESCRIPTION
  Delete netlify staging subdomain for this branch

EXAMPLES
  $ netlify-git-branch delete my-site
```

_See code: [src/commands/delete/index.ts](https://github.com/mrloop/netlify-git-branch/blob/v1.0.2/src/commands/delete/index.ts)_

## `netlify-git-branch deploy NAME`

Deploy branch to netlify staging subdomain

```
USAGE
  $ netlify-git-branch deploy [NAME] [--dir <value>] [--assert <value>]

ARGUMENTS
  NAME  Name is prefixed onto the git branch name. For Example on branch 'my-feature' and a name of 'my-site' the domain
        will be 'https://my-site-my-feature.netlify.app'.

FLAGS
  --assert=<value>  Check deployed site using CSS <selector>
  --dir=<value>     [default: dist] Deploy site from <dir>

DESCRIPTION
  Deploy branch to netlify staging subdomain

EXAMPLES
  $ netlify-git-branch deploy my-site --dir dist
```

_See code: [src/commands/deploy/index.ts](https://github.com/mrloop/netlify-git-branch/blob/v1.0.2/src/commands/deploy/index.ts)_

## `netlify-git-branch help [COMMAND]`

display help for netlify-git-branch

```
USAGE
  $ netlify-git-branch help [COMMAND] [--json] [--all]

ARGUMENTS
  COMMAND  command to show help for

FLAGS
  --all   see all commands in CLI
  --json  Format output as json.

DESCRIPTION
  display help for netlify-git-branch
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v4.0.3/src/commands/help.ts)_
<!-- commandsstop -->
