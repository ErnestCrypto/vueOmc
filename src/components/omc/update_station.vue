<template>
    <div class="UpdateStation">
        <div id="page-top">
            <!-- Page Wrapper -->

            <div id="wrapper">
                <SideBar />

                <div id="content-wrapper" class="d-flex flex-column">
                    <TopPage />
                    <div class="container-fluid">
                        <div style="width:100%;padding:2%;background:white;border-radius:5px">
                            <div class="row">
                                <div class="col-sm-2"
                                    style="border-right:1px solid lightgray;display:flex;justify-content:center;align-items:center">
                                    <img src="https://logos-world.net/wp-content/uploads/2020/11/Shell-Logo.png"
                                        class="rounded-circle" style="width:100%;" alt="logo" />
                                </div>
                                <div style="padding-left:1%">
                                    <h1 class="h3 mb-15 text-gray-800">SHELL</h1>
                                    <h6>STATION 1</h6>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="card" style="margin-bottom:2%;padding-bottom:2%;">
                            <div class="container">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p style="font-size:21px;font-weight:bold; ">Edit this Station</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="btn btn-danger" style="float:right">Delete STATION <i
                                                    class="fa fa-trash"></i></p>
                                        </div>
                                    </div>
                                    <br>

                                    <div class="row">

                                        <div class="col-md-4 mb-4">
                                            <div class="md-form">
                                                <div class="row">
                                                    <i class="fa fa-building prefix grey-text"></i>
                                                    <input type="text" id="OMC" class="form-control"
                                                        placeholder="OMC Name" value="SHELL">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-4">
                                            <div class="md-form">
                                                <div class="row">
                                                    <i class="fa fa-image prefix grey-text"></i>
                                                    <input type="text" id="logo" class="form-control" value="STATION 1"
                                                        placeholder="Station Name">
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-md-4 mb-4">
                                            <div class="md-form">
                                                <div class="row">
                                                    <i class="fa fa-image prefix grey-text"></i>
                                                    <input type="text" id="logo" class="form-control"
                                                        placeholder="Station Branch" value="ASSHONGMAN">
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-md-4 mb-4">
                                            <div class="md-form">
                                                <div class="row">
                                                    <i class="fa fa-image prefix grey-text"></i>
                                                    <input type="text" id="logo" class="form-control"
                                                        placeholder="Station Address" value="P.O.BOX GP 2016">
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-md-4 mb-4">
                                            <div class="md-form">
                                                <div class="row">
                                                    <i class="fa fa-image prefix grey-text"></i>
                                                    <input type="text" id="logo" class="form-control" value="29° 52' N"
                                                        placeholder="Station Longitude">
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-md-4 mb-4">
                                            <div class="md-form">
                                                <div class="row">
                                                    <i class="fa fa-image prefix grey-text"></i>
                                                    <input type="text" id="logo" class="form-control" value="2° 29' E"
                                                        placeholder="Station Latitude">
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                    <section class="heading-1">
                                        <span>
                                            <i class="fa fa-cart-arrow-down"> Let's manage your services
                                            </i>
                                        </span>
                                    </section>
                                    <form>

                                        <section style="padding-top:5%;width:100%">



                                            <div class="input_fields_wrap" v-for="(index, station) in stations"
                                                :key="station.id">

                                                <div class="row">

                                                    <div class="col-md-5 mb-4">
                                                        <div class="md-form">
                                                            <div class="row">
                                                                <i class="fa fa-cube prefix grey-text"></i>
                                                                <input type="text" class="form-control"
                                                                    placeholder="Service" v-model="index.service">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5 mb-4">
                                                        <div class="md-form">
                                                            <div class="row">
                                                                <i class="fa fa-money prefix grey-text"></i>
                                                                <input type="text" class="form-control"
                                                                    placeholder="Price" v-model="index.price">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style="height:0%;color:white;background:red"
                                                        class="remove_field btn"
                                                        v-on:click="removeField(index, stations)">Del</div>
                                                </div>



                                            </div>
                                        </section>



                                        <div class="row" style="padding-left:2%">
                                            <div style="height:0%;color:white;width:20%"
                                                class="add_field_button btn btn-primary" v-on:click="addField()">
                                                Add
                                                Service</div>

                                            <div class="col-sm-9">
                                                <button type="Submit" class="btn btn-info"
                                                    style="float: right">Update</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                        <FooterPage />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import SideBar from './base/sidebar.vue'
import FooterPage from './base/footer.vue'
import TopPage from './base/top.vue'


export default {
    name: 'UpdateStation',
    components: {
        SideBar,
        FooterPage,
        TopPage,

    },
    data() {
        return {
            stations: [{
                service: 'Car wash',
                price: ' 30.00',
            },
            {
                service: 'Super MArket',
                price: 'Affordable',
            },]
        }
    },
    methods: {
        addField() {
            this.stations.push({
                service: '',
                price: '',
            })
        },
        removeField(index, stations) {
            stations.splice(index, 1)
        }
    }
}


</script>





<style>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
@import url(https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.3/css/mdb.min.css);

.hm-gradient {
    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}

.darken-grey-text {
    color: #2E2E2E;
}

.danger-text {
    color: #ff3547;
}

.default-text {
    color: #2BBBAD;
}

.info-text {
    color: #33b5e5;
}

.form-white .md-form label {
    color: #fff;
}

.form-white input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #fff;
    -webkit-box-shadow: 0 1px 0 0 #fff;
    box-shadow: 0 1px 0 0 #fff;
}

.form-white input[type=text]:focus:not([readonly])+label {
    color: #fff;
}

.form-white input[type=password]:focus:not([readonly]) {
    border-bottom: 1px solid #fff;
    -webkit-box-shadow: 0 1px 0 0 #fff;
    box-shadow: 0 1px 0 0 #fff;
}

.form-white input[type=password]:focus:not([readonly])+label {
    color: #fff;
}

.form-white input[type=password],
.form-white input[type=text] {
    border-bottom: 1px solid #fff;
}

.form-white .form-control:focus {
    color: #fff;
}

.form-white .form-control {
    color: #fff;
}

.form-white textarea.md-textarea:focus:not([readonly]) {
    border-bottom: 1px solid #fff;
    box-shadow: 0 1px 0 0 #fff;
    color: #fff;
}

.form-white textarea.md-textarea {
    border-bottom: 1px solid #fff;
    color: #fff;
}

.form-white textarea.md-textarea:focus:not([readonly])+label {
    color: #fff;
}

.ripe-malinka-gradient {
    background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
}

.near-moon-gradient {
    background-image: linear-gradient(to bottom, #5ee7df 0%, #b490ca 100%);
}

.heading-1 {
    position: relative;
    text-align: center;

}

.heading-1:before {
    content: "";
    display: block;
    border-top: solid 3px lightblue;
    width: 95%;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 2%;
    z-index: 0;
}

.heading-1 span {
    background: #fff;
    padding: 2%;
    padding-left: 5%;
    padding-right: 5%;
    position: relative;
    z-index: 1;
    border: 1px solid lightblue;
    border-radius: 5px;
    font-size: 21px;
    font-weight: bold;


}
</style>


























