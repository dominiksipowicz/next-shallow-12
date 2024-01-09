## Info

Adding middleware at `next@12.5.5` will NOT contain JSON calls from the browser to remote server when using `shallow:true` with `router.push`, however after upgrading to `next>= 13.5.5` and when using `next/compat/router` we can see those calls happening as shallow would not work at all.
