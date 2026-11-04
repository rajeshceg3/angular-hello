---
name: verify-angular-store
description: Build and drive angular-hello's actual Angular tutorial catalog, local cart, simulated submit and shipping JSON at phone/desktop widths.
---
# Verify Angular tutorial store
## Launch
Angular15.0.2/TypeScript4.8.4 tutorial SPA, routes /,/products/:productId,/cart,/shipping. No backend/auth/payment; CartService stores product array in memory, submit only clears bag/resets form and console.warn. Share/notify/add use window.alert only. Never call these actual commerce/share/subscriptions. Shipping JSON is shipped demonstration data, not current merchant pricing.
`npm ci` in repo, then `npm ci --prefix .cursor/skills/verify-angular-store`. Clean install repaired by removing unused angular-in-memory-web-api0.14(peerAngular14) rather than force/legacy-peer. Actual Node22.23.4 build/browser proof, not Angular-supported-runtime certification. CHROME_PATH optional, default /usr/bin/google-chrome. No systeminstall/network credentials.
## Doctor
`node .cursor/skills/verify-angular-store/helpers/verify.mjs doctor .verification-evidence/angular-store`
Source/dependency/version check, no product mutation.
## Drive
`node .cursor/skills/verify-angular-store/helpers/verify.mjs drive .verification-evidence/angular-store`
Native production build to owned tempfile, owned ephemeral loopback SPA server, actual browser390/1365. Three products/share/notify dialogs, detail/799display, Buy→localcart, simulated Purchase→emptycart, shipping3type+prices, no overflow/page-or-console errors. No internalsetter/mockedHTTP. Blocks and records any unexpected external request; requires none. All app networking is owned origin/shipped assets. Dialogs accepted only for these source-confirmed simulations.
## Evidence
JSON,build.log,details/shippingPNG both widths. Inspect actualpixels. Baseline missingHttpClientModule produced actual NullInjectorError; cartsubmit leftitem; shippingomittedprices; rowminwidth400overflowed390. Fixed after reproduction. Removed unneeded external iconfont and literal iconname, retained textCheckout. Existing CSSselectorbuildwarning remains.
Audit94findings(8critical/47high/29moderate/10low) unresolved, no forceupgrade/securityclaim. Missing testtsconfig/protractorconfig means npmtest/e2e not certified. Invalidroutes, persistence/reload, allcatalogoptions/keyboard/accessibility/performance not fullcoverage.
## Cleanup
Helper closes exactownedbrowser/server and removes only ownedtempbuild; external evidence retained. No existingdist/data deletion, deployment/settings/spend. Source production build may update ignored Angularcache only; noappuserdata exists.
## Helpers
Executablehelpers/verify.mjs and pinnedPuppeteer25.16.0 package/lock. Source mappings in features/README.md. Use /maintain-verification-skill when app changes.
