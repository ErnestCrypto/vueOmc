<template>
    <div class="UpdateOmc">
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
                                <div style="padding-left:1%" class="col-sm-2">
                                    <h1 class="h3 mb-15 text-gray-800">SHELL</h1>
                                    <h6>Manage this OMC</h6>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="card" style="margin-bottom:2%;padding-bottom:2%;">
                            <div class="container">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-9">
                                            <p style="font-size:21px;font-weight:bold; float:left">Update your OMC name
                                                and logo
                                            </p>
                                        </div>
                                        <div class="col-sm-3">
                                            <p class="btn btn-danger">Delete OMC <i class="fa fa-trash"></i></p>
                                        </div>
                                    </div>
                                    <form action="#" method="POST">
                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="md-form">
                                                    <div class="row">
                                                        <i class="fa fa-building prefix grey-text"></i>
                                                        <input type="text" id="OMC" class="form-control" value="SHELL"
                                                            placeholder="OMC Name">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4">
                                                <div class="md-form">
                                                    <div class="row">
                                                        <i class="fa fa-image prefix grey-text"></i>
                                                        <input type="file" id="logo" class="form-control"
                                                            style="border:none;border-bottom:1px solid rgba(0,0,0,0.3);padding-bottom:9%;color:blue" />
                                                    </div>
                                                </div>
                                            </div>
                                            <section class="heading-1" style="width:100%">
                                                <span>
                                                    <i class="fa fa-cart-arrow-down"> Now lets update your products!
                                                    </i>
                                                </span>
                                            </section>

                                            <section style="padding-top:5%;width:100%">

                                                <div class="input_fields_wrap col-sm-12" v-for="(index, omc) in omcs"
                                                    :key="omc.id">

                                                    <div class="row">
                                                        <div class="col-md-4 mb-4">
                                                            <div class="md-form">
                                                                <div class="row">
                                                                    <i class="fa fa-cube prefix grey-text"></i>
                                                                    <input type="text" placeholder="Product Name"
                                                                        class="form-control" v-model="index.product" />

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 mb-4">
                                                            <div class="md-form">
                                                                <div class="row">
                                                                    <i class="fa fa-money prefix grey-text"></i>
                                                                    <input type="text" v-model="index.price"
                                                                        placeholder="Product Price"
                                                                        class="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 mb-6">
                                                            <div class="md-form">
                                                                <div class="row">
                                                                    <i class="fa fa-balance-scale prefix grey-text"></i>
                                                                    <input type="text" v-model="index.unit"
                                                                        placeholder="Units" class="form-control">
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div style="height:0%;color:white;background:red"
                                                            class="remove_field btn"
                                                            v-on:click="removeField(index, omcs)">Del</div>
                                                    </div>


                                                </div>
                                            </section>
                                            <div class="row" style="padding-left:2%;width:100%; ">
                                                <div style="color:white;"
                                                    class="add_field_button btn btn-primary col-sm-2"
                                                    v-on:click="addField()">Add
                                                    Product</div>

                                                <div class="col-sm-9">
                                                    <button type="Submit" class="btn btn-info"
                                                        style="float:right">Update</button>
                                                </div>
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
    name: 'UpdateOmc',
    components: {
        SideBar,
        FooterPage,
        TopPage,
    },
    data() {
        return {
            omcs: [{
                product: "Petrol",
                price: "14.00",
                unit: 1,
            },
            {
                product: "Diseal",
                price: "16.00",
                unit: 1,
            },
            ]
        }

    },

    methods: {
        addField() {
            this.omcs.push({
                product: '',
                price: '',
                unit: '',
            })
        },
        removeField(index, omcs) {
            omcs.splice(index, 1)
        }

    },
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
