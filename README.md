# PivotalReleaseBoard

![image](https://cloud.githubusercontent.com/assets/4954534/22706317/1cc0507c-edb2-11e6-8c8b-f3bc28751ba6.png)

Display your PivotalTracker's release list beautifully.

## Installation

```
$ npm install -g pivotal-release-board
$ pivotal-release-board
```

## usage

1. Create Workspae on PivotalTracker.
  - https://www.pivotaltracker.com/help/articles/managing_projects_with_workspaces/
2. Get PivotalTracker's API key.
  - https://www.pivotaltracker.com/help/articles/api_token/
3. Run application and set API key.Then select Workspace in left side Workspace list.

## CLI

PivotalReleaseBoard provides CLI for capturing release list.

Capture Mode required below options.
- -c/--capture: enable to capture mode.
- -t/--token: API key
- -w/--workspace: Workspace ID

```
$ pivotal-release-board -c -t yourapitoken -w 111111
success: ./capture_1486494497803.png
```

![capture_1486494497803](https://cloud.githubusercontent.com/assets/4954534/22706892/4a424364-edb4-11e6-80c4-76ecc0dcaf34.png)
