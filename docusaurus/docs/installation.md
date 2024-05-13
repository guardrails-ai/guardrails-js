# Installing Guardrails AI for JavaScript

## Prerequisites

Before installing Guardrails JS, be sure you’ve installed Python 3.16 or greater on your system. The current implementation works via an I/O bridge to run the underlying Python library, so both are required. 

## Installation via NPM (latest) 

You can install Guardrails JS like any other Node package using NPM: 

```
npm i @guardrails-ai/core
```

## Releases

Currently in beta, Guardrails AI maintains both stable and pre-release versions.

### Install Pre-Release Version

To install a pre-release version of Guardrails JS,install it with the intended semantic version. 

### Install from GitHub

Installing directly from GitHub is useful when a release has not yet been cut with the changes pushed to a branch that you need. Non-released versions may include breaking changes, and may not yet have full test coverage. We recommend using a released version whenever possible.

```
npm i git+https://github.com/guardrails-ai/guardrails-js.git
```