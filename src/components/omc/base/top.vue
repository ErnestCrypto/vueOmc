<template>
    <div class="TopPage">

        <!-- Content Wrapper -->

        <!-- Main Content -->
        <div id="content">
            <!-- Topbar -->
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                <!-- Sidebar Toggle (Topbar) -->
                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars" style="color:blue"></i>
                </button>
                <div class="row" style="width:100%; ">
                    <div class="col-sm-12" style="padding-top:1%; ">
                        <form class="form-inline mr-auto" style="width:100%; ">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search..." aria-label="Search"
                                style="width:40%;">
                            <button class="btn btn-info btn-rounded btn-sm my-0" type="submit">
                                <i class="fa fa-search"></i>
                            </button>
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