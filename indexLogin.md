---
layout: default
permalink: /login
title: Login
---
<style>
h1 {text-align: center;}
p {text-align: center;}
div {text-align: center;}
body {
  background-image: url('https://live.staticflickr.com/4884/45900821384_c156fce940_b.jpg');
}
</style>
<big><strong>Save Your Progress By Creating a Profile!</strong></big>

<div id="User Profile">
    <strong><label for="name">Username:</label></strong>
<div>
    <input type="text" id="Username" required>
<div>
    <strong><label for="Password"> Password: </label></strong>
<div>
    <input type="Password" id="Password" required>
<div>
    <button type="submit" onclick="createUser()">Create User</button>
  </div>