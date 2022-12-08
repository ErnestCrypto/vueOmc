<template>
    <div class="SideBar">
        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
            style="height:100%;">
            <br>
            <div style="height:100%;">
                <!-- Sidebar - Brand -->
                <router-link to="/index" style="height:15%">
                    <div class="sidebar-brand-text mx-1">
                        <div class="col-sm-12" style="display:flex;justify-content:center;align-items:center">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" class="rounded-circle"
                                style="width:50%;" alt="profile" />
                        </div>
                        <center>
                            <h6 style="padding:3%;color:white;">ERNEST AKOTO BAMFO</h6>
                        </center>

                    </div>
                </router-link>
                <br>
                <!-- Divider -->
                <hr class="sidebar-divider my-0">

                <!-- Nav Item - Dashboard -->
                <li class="nav-item active">
                    <a class="nav-link" href="/index">
                        <i class="fa fa-tachometer fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                <!-- Divider -->
                <hr class="sidebar-divider">

                <!-- Heading -->
                <div class="sidebar-heading">
                    Interface
                </div>

                <!-- Nav Item - Pages Collapse Menu -->
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOMC"
                        aria-expanded="true" aria-controls="collapseOMC">
                        <i class="fa fa fa-cog"></i>
                        <span>OMC</span>
                    </a>
                    <div id="collapseOMC" class="collapse" aria-labelledby="headingOMC" data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">CUSTOMIZE OMC :</h6>
                            <router-link class="collapse-item" to="/create_omc"> <i class="fa fa fa-cog"
                                    style="color:lightgray;float:left"></i> Create OMC
                            </router-link>
                            <router-link class="collapse-item" to="/view_omc"> <i class="fa fa fa-cog"
                                    style="color:lightgray;float:left "></i> View OMC</router-link>


                        </div>
                    </div>
                </li>

                <!-- Nav Item - Utilities Collapse Menu -->
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseStations"
                        aria-expanded="true" aria-controls="collapseStations">
                        <i class="fa fa-fw fa-wrench"></i>
                        <span>STATIONS</span>
                    </a>
                    <div id="collapseStations" class="collapse" aria-labelledby="headingStations"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">CUSTOMIZE STATIONS :</h6>
                            <router-link class="collapse-item" to="/create_station"> <i class="fa fa-fw fa-wrench"
                                    style="color:lightgray;float:left"></i> Create Station</router-link>
                            <router-link class="collapse-item" to="/view_station"><i class="fa fa-fw fa-wrench"
                                    style="color:lightgray;float:left"></i> View Stations</router-link>

                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAttendants"
                        aria-expanded="true" aria-controls="collapseAttendants">
                        <i class="fa fa-fw fa-users"></i>
                        <span>ATTENDANTS</span>
                    </a>
                    <div id="collapseAttendants" class="collapse" aria-labelledby="headingAttendants"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">CUSTOMIZE ATTENDANTS :</h6>
                            <router-link class="collapse-item" to="/create_attendant"> <i class="fa fa-fw fa-users"
                                    style="color:lightgray;float:left"></i> Create Attendant</router-link>
                            <router-link class="collapse-item" to="/view_attendants"><i class="fa fa-fw fa-users"
                                    style="color:lightgray;float:left"></i> View Attendants</router-link>

                        </div>
                    </div>
                </li>

                <!-- Divider -->
                <hr class="sidebar-divider">

                <!-- Heading -->
                <div class="sidebar-heading">
                    Addons
                </div>

                <!-- Nav Item - Pages Collapse Menu -->
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseMessages"
                        aria-expanded="true" aria-controls="collapseMessages">
                        <i class="fa fa-fw fa-folder"></i>
                        <span>MESSAGES</span>
                    </a>
                    <div id="collapseMessages" class="collapse" aria-labelledby="headingMessages"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">CUSTOMIZE MESSAGES :</h6>
                            <router-link class="collapse-item" to="/create_message"><i class="fa fa-fw fa-folder"
                                    style="color:lightgray;float:left"></i> New message
                            </router-link>
                            <router-link class="collapse-item" to="/view_messages"> <i class="fa fa-fw fa-folder"
                                    style="color:lightgray;float:left"></i> Inbox</router-link>
                            <router-link class="collapse-item" to="/sent_messages"> <i class="fa fa-fw fa-folder"
                                    style="color:lightgray;float:left"></i> Sent messages</router-link>
                            <router-link class="collapse-item" to="/draft_messages"> <i class="fa fa-fw fa-folder"
                                    style="color:lightgray;float:left"></i> Draft messages</router-link>
                            <router-link class="collapse-item" to="/deleted_messages"> <i class="fa fa-fw fa-folder"
                                    style="color:lightgray;float:left"></i> Deleted messages</router-link>

                        </div>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePayments"
                        aria-expanded="true" aria-controls="collapsePayments">
                        <i class="fa fa-money"></i>
                        <span>PAYMENTS</span>
                    </a>
                    <div id="collapsePayments" class="collapse" aria-labelledby="headingPayments"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">CUSTOMIZE PAYMENTS :</h6>
                            <router-link class="collapse-item" to="/view_payments"><i class="fa fa-money"
                                    style="color:lightgray;float:left;float:left"></i> View
                                payments</router-link>
                        </div>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i class="fa fa-fw fa-file"></i>
                        <span>PAGES</span>
                    </a>
                    <div id="collapsePages" class="collapse" aria-labelledby="headingPages"
                        data-parent="#accordionSidebar">
                        <div class="bg-white py-2 collapse-inner rounded">
                            <h6 class="collapse-header">Login Screens:</h6>
                            <router-link class="collapse-item" to="/profile"><i class="fa fa-fw fa-file"
                                    style="color:lightgray;float:left"></i> Profile
                            </router-link>
                            <router-link class="collapse-item" to="/"><i class="fa fa-fw fa-file"
                                    style="color:lightgray;float:left"></i> Login</router-link>
                            <router-link class="collapse-item" to="/register"><i class="fa fa-fw fa-file"
                                    style="color:lightgray;float:left"></i> Register</router-link>
                            <router-link class="collapse-item" to="/forgot-password"><i class="fa fa-fw fa-file"
                                    style="color:lightgray;float:left"></i> Forgot Password</router-link>

                        </div>
                    </div>
                </li>



                <!-- Divider -->
                <hr class="sidebar-divider d-none d-md-block">

                <!-- Sidebar Toggler (Sidebar) -->


                <!-- Sidebar Message -->
            </div>
        </ul>
        <!-- End of Sidebar -->

    </div>
</template>

<script>
export default {
    name: 'SideBar',
}
</script>