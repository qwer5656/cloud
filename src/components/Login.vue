<template>
  <div class="login-container">
    <h2>登入</h2>
    <input v-model="username" type="text" placeholder="帳號" />
    <input v-model="password" type="password" placeholder="密碼" />
    <button @click="handleLogin">登入</button>
    <div v-if="errorMsg" class="error">{{ errorMsg }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const errorMsg = ref("");

const handleLogin = () => {
  if (!username.value || !password.value) {
    errorMsg.value = "請輸入帳號與密碼";
    return;
  }

  // 模擬登入邏輯
  if (username.value === "testuser" && password.value === "123456") {
    errorMsg.value = "";

    router.push("/dashboard");
  } else {
    errorMsg.value = "帳號或密碼錯誤";
  }
};
</script>

<style scoped>
.login-container {
  width: 300px;
  padding: 30px;
  margin: 100px auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  text-align: center;
}
.login-container input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.login-container button {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background-color: #1890ff;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
.login-container button:hover {
  background-color: #40a9ff;
}
.error {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
</style>
