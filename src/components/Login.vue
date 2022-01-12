<template>
    <div class="login_container">
        <div class="login_header">登录</div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px" class="login_form">
            <el-form-item label="用户" prop="username">
                <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
        </el-form>

        <div class="el-from-btn">
            <el-button type="primary" @click="submit()">登录</el-button>
        </div>
    </div>
</template>

<script>

export default {
    name: "Login",
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            },
            rules: {
                username: [
                    {required: true, message: '请输入用户', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'}
                ],
            }
        }
    },
    methods: {
        submit() {
            this.$refs["loginForm"].validate((valid) => {
                if (valid) {
                    console.log("验证成功！")

                    const url = "";
                    const data = {};
                    this.axios.post(url, data).then(function (response) {
                        console.log(response);
                    }).catch(function (error) {
                        console.log(error);
                    });

                } else {
                    console.log("验证失败！")
                    return false;
                }
            });
        },
    }
}

import '@/css/login.css'
</script>



