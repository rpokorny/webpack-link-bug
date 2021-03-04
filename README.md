# Demonstration of Webpack issue with Symlinked Dependency Watching

This repo contains two npm modules: a dependency and an app which consumes that dependency via a yarn `link`
dependency (which becomes a symlink in the node_modules folder). The app is configured
to be served with webpack-dev-server. The expectation is that changes in the dependency will be detected
when webpack-dev-server is running and that the page will refresh with the new content. The actuality is that
this does not happen and even a manual refresh does not pick up the new content – only a restart of
webpack-dev-server does.

Notice that the webpack configuration has `resolve.symlinks` set to `false`. This appears to be a necessary condition
for this bug. If that line is removed or the value changed to `true`, the reloading works as expected.
It is my understanding however that setting `resolve.symlinks` to false is a valid thing to do which should not
cause this behavior. In the non-proof-of-concept application where this issue was discovered, `resolve.symlinks`
needs to be disabled in order to prevent multiples copies of react from being included into the bundle.
