
Workers & Pages
laus-xmd-shops
Overview
Metrics
Deployments
Bindings
Observability
Domains
Settings
Back to builds
Build #1d3715dd
30s

main
Manually deployed
34s ago


Build settings

Lawurance/Laus-XMD-SHOPS-
Build command
None
Deploy command
npx wrangler deploy
Root directory
/
Build token
laus-xmd-shops build token

Build variables
None

Initializing


3s

17:38:39.410

Cloning


2s

17:38:42.169

Installing


4s

17:38:44.161

Deploying


22s

17:38:47.742

17:38:59.864
? Do you want to modify these settings?
17:38:59.864
🤖 Using fallback value in non-interactive context: no
17:38:59.865
17:38:59.865
📦 Install packages:
17:38:59.865
 - wrangler (devDependency)
17:38:59.865
17:38:59.865
📝 Update package.json scripts:
17:38:59.865
 - "deploy": "wrangler deploy"
17:38:59.866
 - "preview": "wrangler dev"
17:38:59.866
17:38:59.866
📄 Create wrangler.jsonc:
17:38:59.866
  {
17:38:59.866
    "$schema": "node_modules/wrangler/config-schema.json",
17:38:59.866
    "name": "laus-xmd-shops",
17:38:59.866
    "compatibility_date": "2026-06-30",
17:38:59.866
    "observability": {
17:38:59.866
      "enabled": true
17:38:59.866
    },
17:38:59.866
    "assets": {
17:38:59.866
      "directory": "."
17:38:59.866
    },
17:38:59.867
    "compatibility_flags": [
17:38:59.867
      "nodejs_compat"
17:38:59.867
    ]
17:38:59.869
  }
17:38:59.869
17:38:59.869
? Proceed with setup?
17:38:59.869
🤖 Using fallback value in non-interactive context: yes
17:39:04.993
├ Adding Wrangler files to the .gitignore file
17:39:04.994
│ created .gitignore file
17:39:04.994
│
17:39:05.471
🌀 Building list of assets...
17:39:05.547
✨ Read 2639 files from the assets directory /opt/buildhome/repo
17:39:05.879
17:39:05.879
Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md
17:39:05.880
17:39:05.933
✘ [ERROR] Asset too large.
17:39:05.933
17:39:05.933
  Cloudflare Workers supports assets with sizes of up to 25 MiB. We found a file /opt/buildhome/repo/node_modules/workerd/bin/workerd with a size of 121 MiB.
17:39:05.934
  Ensure all assets in your assets directory "/opt/buildhome/repo" conform with the Workers maximum size requirement.
17:39:05.934
17:39:05.934
17:39:06.592
🪵  Logs were written to "/opt/buildhome/.config/.wrangler/logs/wrangler-2026-06-30_14-38-59_082.log"
17:39:06.664
Failed: error occurred while running deploy command
Support
System status
Careers
Terms of Use
Report Security Issues
Privacy Policy
A blue and white pill with a checkmark and an x, representing privacy choicesCookie Preferences
© 2026 Cloudflare, Inc.
Enable Agent Lee access
Agent Lee needs a read-only API token to access your account.
