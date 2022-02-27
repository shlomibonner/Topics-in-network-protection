# Topics-in-network-protection
mini-project


A small chrome extension to prevent access to malicious websites


It aims to prevent access to malicious websites by filtering the most common cases, such as websites that are not SSL certified (in 2022 there is not a single reason not to use SSL for a valid website) and websites that try to automatically download harmful files to the clients PC. 

A major challenge was detecting when a website fires a download event, and intercepting it.
Regarding non HTTPS websites, the extension attempts to access suspicious websites via HTTPS, and executing defensive measures only if it does not succeed, rather than simply intercepting it alltogether. 
