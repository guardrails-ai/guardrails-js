# Guardrails AI (JavaScript)

## What is Guardrails? 

Guardrails JS is a JavaScript framework that helps build reliable AI applications by performing two key functions:

* Guardrails runs Input/Output Guards in your application that detect, quantify and mitigate the presence of specific types of risks. To look at the full suite of risks, check out Guardrails Hub.
* Guardrails helps you generate structured data from Large Language Models (LLMs).

Guardrails JS is built off of the core Guardrails implementation written in Python and leverages its codebase. You can read a full list of the differences between Guardrails JS and Guardrails Python [in the Github README](https://github.com/guardrails-ai/guardrails-js).

![How Guardrails works vs. using a Large Language Model (LMM) directly](/img/with_and_without_guardrails.svg "How Guardrails works vs. using a Large Language Model (LMM) directly.")

## Guardrails Hub

Guardrails Hub is a collection of pre-built measures of specific types of risks (called **validators**). M  ultiple validators can be combined together into Input and Output Guards that intercept the inputs and outputs of LLMs. Visit Guardrails Hub to see the full list of validators and their documentation.

![Guardrails Hub - a small sample of the validators available](/img/guardrails_hub.gif "Guardrails Hub")