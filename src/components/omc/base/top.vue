<template>
    <div class="TopPage">

        <!-- Content Wrapper -->

        <!-- Main Content -->
        <div id="content">
            <!-- Topbar -->
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                <!-- Sidebar Toggle (Topbar) -->

                <div class="row" style="width:100%; ">
                    <div class="col-sm-9">
                        <img src="./images/logo2.png" alt="logo" style="width:10%; float:left" />

                    </div>

                    <div class="col-sm-3" style="padding-top:1%;">
                        <form class="form-inline mr-auto" style="width:100%;height: 100%; ">
                            <div style="border:1px solid lightblue; border-radius:20px; padding:10px ;float:left;">
                                <i class="fa fa-search" style="width:7%; float:left; color:rgba(0,0,0,0.5)"></i>
                                <input type=" text" placeholder="Search..." aria-label="Search"
                                    style="width:70%; border:none;float:left; outline:none">
                            </div>

                        </form>
                    </div>
                </div>
                <!-- Topbar Search -->


                <!-- Topbar Navbar -->
            </nav>
            <!-- End of Topbar -->


        </div>
    </div>

</template>

<script>
export default {
    name: 'TopPage'
}
</script>