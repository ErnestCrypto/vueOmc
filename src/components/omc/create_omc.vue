<template>
    <div class="CreateOmc">

        <div id="page-top">
            <!-- Page Wrapper -->


            <div id="wrapper">
                <SideBar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <TopPage />

                    <div class="container-fluid">


                        <div style="width:100%;padding:2%;background:white;border-radius:5px">
                            <div class="row">
                                <div class="col-sm-1">
                                    <i class="fa fa-building-o" style="font-size:60px;color:lightblue;"></i>
                                </div>
                                <div class="col-sm-3">
                                    <h1 class="h3 mb-15 text-gray-800">Create an OMC</h1>
                                    <h6>Add an OMC from this page</h6>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="card" style="margin-bottom:2%;padding-bottom:2%;">
                            <div class="container">
                                <div class="card-body">

                                    <p style="font-size:21px;font-weight:bold;">Let's start with your OMC name and logo
                                    </p>
                                    <form action="#" method="POST">

                                        <div class="row">
                                            <div class="col-md-5 mb-4">
                                                <div class="md-form">
                                                    <div class="row">
                                                        <i class="fa fa-building prefix grey-text"></i>
                                                        <input type="text" id="OMC" class="form-control"
                                                            placeholder="OMC">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-5 mb-4">
                                                <div class="md-form">
                                                    <div class="row">
                                                        <i class="fa fa-image prefix grey-text"></i>
                                                        <input type="file" id="logo" class="form-control"
                                                            style="border:none;border-bottom:1px solid rgba(0,0,0,0.3);padding-bottom:9%;color:blue">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <section class="heading-1">
                                            <span>
                                                <i class="fa fa-cart-arrow-down"> Now time to add some products!
                                                </i>
                                            </span>
                                        </section>



                                        <section style="padding-top:5%;">

                                            <div class="input_fields_wrap" v-for="(index, omc) in omcs" :key="omc.id">
                                                <div class="row">
                                                    <div class="col-md-3 mb-4">
                                                        <div class="md-form">
                                                            <div class="row">
                                                                <i class="fa fa-cube prefix grey-text"></i>
                                                                <input type="text" name="product[]"
                                                                    placeholder="Product Name" class="form-control"
                                                                    v-model="omc.prduct">

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 mb-4">
                                                        <div class="md-form">
                                                            <div class="row">
                                                                <i class="fa fa-money prefix grey-text"></i>
                                                                <input type="text" name="price[]" class="form-control"
                                                                    placeholder="Product Price" v-model="omc.price">

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 mb-4">
                                                        <div class="md-form">
                                                            <div class="row">
                                                                <i class="fa fa-balance-scale prefix grey-text"></i>
                                                                <input type="text" name="units[]" class="form-control"
                                                                    placeholder="Units" v-model="omc.unit">

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div style="height:0%;color:white;"
                                                        class="add_field_button btn btn-primary"
                                                        v-on:click="addField(omc)"><i class="fa fa-plus"
                                                            aria-hidden="true" style="color:white"></i>
                                                    </div>
                                                    <div style="height:0%;color:white;"
                                                        class="add_field_button btn btn-danger"
                                                        v-on:click="removeField(index, omcs)"><i class="fa fa-minus"
                                                            aria-hidden="true" style="color:white"></i>
                                                    </div>

                                                </div>
                                            </div>

                                        </section>


                                        <div class="col-sm-12">
                                            <button type="Submit" class="btn btn-info">Submit</button>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                    <FooterPage />

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
    name: 'CreateOmc',
    components: {
        SideBar,
        FooterPage,
        TopPage,

    },
    data() {
        return {
            omcs: [{
                product: '',
                price: '',
                unit: '',

            },]
        }

    },
    methods: {

        addField() {
            this.omcs.push({
                price: '',
                unit: '',
            });

        },
        removeField(index, omcs) {
            omcs.splice(index, 1);

        },

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

