<template>
    <div class="RegisterPage">

        <div class="bg-gradient-primary">
            <div class="container">
                <div class="card">
                    <div class="card-body p-0">

                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div class="col-lg-7">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group row">
                                            <div class="col-sm-12 mb-3 mb-sm-0">
                                                <input type="text" class="form-control" id="exampleFirstName"
                                                    placeholder="First Name">
                                            </div>
                                            <div class="col-sm-12">
                                                <input type="text" class="form-control" id="exampleLastName"
                                                    placeholder="Last Name">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" id="exampleInputEmail"
                                                placeholder="Email Address">
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-12 mb-3 mb-sm-0">
                                                <input type="password" class="form-control" id="exampleInputPassword"
                                                    placeholder="Password">
                                            </div>
                                            <div class="col-sm-12">
                                                <input type="password" class="form-control" id="exampleRepeatPassword"
                                                    placeholder="Repeat Password">
                                            </div>
                                        </div>
                                        <router-link to="/" class="btn btn-primary btn-user btn-block">
                                            Register Account
                                        </router-link>
                                        <hr>
                                        <routter-link to="/index" class="btn btn-google btn-user btn-block">
                                            <i class="fa fa-google"></i> Register with Google
                                        </routter-link>
                                        <routter-link to="/index" class="btn btn-facebook btn-user btn-block">
                                            <i class="fa fa-facebook"></i> Register with Facebook
                                        </routter-link>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <router-link class="small" to="/forgot-password">Forgot Password?</router-link>
                                    </div>
                                    <div class="text-center">
                                        <router-link class="small" to="/">Already have an account? Login!
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>


    </div>
</template>


<script>
export default {
    name: 'RegisterPage'
}
</script>


<!-- 

 -->



















