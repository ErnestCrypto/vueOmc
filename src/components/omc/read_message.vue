
<template>
    <div class="ReadMessages">
        <div id="page-top">
            <!-- Page Wrapper -->

            <div id="wrapper">
                <SideBar />

                <div id="content-wrapper" class="d-flex flex-column">
                    <TopPage />
                    <div class="container-fluid">


                        <div style="width:100%;padding:3%;background:white;border-radius:5px">
                            <div class="col-sm-12" style="padding-bottom:2%">
                                <div class="row">
                                    <div style="padding-left:10px">
                                        <i class="fa fa-pagelines" style="font-size:60px;color:pink"></i>
                                    </div>
                                    <div class="col-sm-6">
                                        <h1 class="h3 mb-15 text-gray-800 col-sm-9" style="float:left;">MESSAGES</h1>
                                        <h6 class="h6 mb-15 text-gray-500 col-sm-9" style="float:left;">You can reply to
                                            this
                                            message</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="col-lg-12 col-md-8">
                                                    <div class="col-sm-1">
                                                        <a href="" class="btn btn-danger"><i
                                                                class="fa fa-trash"></i></a>
                                                    </div>
                                                    <div class="card shadow-none mt-3 border border-light">
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div class="media mb-3">
                                                                    <div class="col-sm-3">
                                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                            class="rounded-circle mr-3 mail-img shadow"
                                                                            alt="media image" width="100" height="100">
                                                                    </div>
                                                                    <div class="col-sm-10">
                                                                        <h4 class="text-primary m-0 ">Jhon Deo
                                                                        </h4>
                                                                        <small class="text-muted ">From :
                                                                            info@example.com</small>
                                                                    </div>
                                                                </div> <!-- media -->
                                                                <div class="media-body">
                                                                    <span class="media-meta float-right ">08:22
                                                                        AM</span>

                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <p><b>Hi Sir...</b></p>
                                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                                    elit.
                                                                    Aenean commodo ligula eget dolor. Aenean massa. Cum
                                                                    sociis
                                                                    natoque penatibus et magnis dis parturient montes,
                                                                    nascetur
                                                                    ridiculus mus. Donec quam felis, ultricies nec,
                                                                    pellentesque
                                                                    eu, pretium quis, sem.</p>
                                                                <p>Aenean vulputate eleifend tellus. Aenean leo ligula,
                                                                    porttitor eu, consequat vitae, eleifend ac, enim.
                                                                    Aliquam
                                                                    lorem ante, dapibus in, viverra quis, feugiat a,
                                                                    tellus.
                                                                    Phasellus viverra nulla ut metus varius laoreet.
                                                                    Quisque
                                                                    rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                                                                    augue.
                                                                    Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                                    Etiam
                                                                    rhoncus. Maecenas tempus, tellus eget condimentum
                                                                    rhoncus,
                                                                    sem quam semper libero, sit amet adipiscing sem
                                                                    neque
                                                                    sed
                                                                    ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                                                                </p>
                                                                <p>Nulla consequat massa quis enim. Donec pede justo,
                                                                    fringilla
                                                                    vel, aliquet nec, vulputate eget, arcu. In enim
                                                                    justo,
                                                                    rhoncus ut, imperdiet a, venenatis vitae, justo.
                                                                    Nullam
                                                                    dictum felis eu pede mollis pretium. Integer
                                                                    tincidunt.
                                                                    Cras
                                                                    dapibus. Vivamus elementum semper nisi.</p>
                                                            </div>
                                                            <hr>

                                                        </div>
                                                        <div class="row">
                                                            <h4 class="col-sm-12">
                                                                <label for="file" style="float:left;padding:2%">
                                                                    <span class="fa fa-paperclip mr-2"
                                                                        aria-hidden="true">
                                                                        Attachments</span>
                                                                    <input type="file" id="file" style="display:none"
                                                                        multiple>
                                                                </label>
                                                            </h4>
                                                            <br />
                                                            <div class="col-sm-12">
                                                                <p class="btn btn-info" @click="FileDetails()"
                                                                    style="float:left;"> Show Files
                                                                </p>
                                                            </div>
                                                            <div class="col-sm-12">
                                                                <p id="fp"></p>
                                                            </div>
                                                        </div>
                                                        <div class="media mt-3">

                                                            <div class="col-sm-12">
                                                                <textarea class="wysihtml5 form-control" rows="9"
                                                                    placeholder=" Reply here..."
                                                                    style="padding:1%"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="text-right">
                                                            <button type="button"
                                                                class="btn btn-primary waves-effect waves-light mt-3"><i
                                                                    class="fa fa-send mr-1"></i> Send</button>
                                                        </div>

                                                    </div>
                                                </div> <!-- card -->
                                            </div> <!-- end Col-9 -->

                                        </div><!-- End row -->

                                    </div>
                                </div>
                            </div>
                        </div><!-- End row -->
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
    name: 'ReadMessages',
    components: {
        SideBar,
        FooterPage,
        TopPage,

    },
    methods: {
        FileDetails() {
            // GET THE FILE INPUT.
            var fi = document.getElementById('file');

            // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
            if (fi.files.length > 0) {

                // THE TOTAL FILE COUNT.
                document.getElementById('fp').innerHTML =
                    'Total Files: <b>' + fi.files.length + '</b>';

                // RUN A LOOP TO CHECK EACH SELECTED FILE.
                for (var i = 0; i <= fi.files.length - 1; i++) {

                    var fname = fi.files.item(i).name;      // THE NAME OF THE FILE.
                    var fsize = fi.files.item(i).size;      // THE SIZE OF THE FILE.

                    // SHOW THE EXTRACTED DETAILS OF THE FILE.
                    document.getElementById('fp').innerHTML =
                        document.getElementById('fp').innerHTML + '<br /> ' +
                        fname + ' (<b>' + fsize + '</b> bytes)';
                }
            }
            else {
                alert('Please select a file.')
            }

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

.select {
    font-family:
        'Roboto', 'Helvetica', 'Arial', sans-serif;
    position: relative;
    width: 350px;
}

.select-text {
    position: relative;
    font-family: inherit;
    background-color: transparent;
    width: 350px;
    padding: 10px 10px 10px 0;
    font-size: 18px;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

/* Remove focus */
.select-text:focus {
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
}

/* Use custom arrow */
.select .select-text {
    appearance: none;
    -webkit-appearance: none
}

.select:after {
    position: absolute;
    top: 18px;
    right: 10px;
    /* Styling the down arrow */
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.12);
    pointer-events: none;
}


/* LABEL ======================================= */
.select-label {
    color: rgba(0, 0, 0, 0.26);
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 10px;
    transition: 0.2s ease all;
}

/* active state */
.select-text:focus~.select-label,
.select-text:valid~.select-label {
    color: #2F80ED;
    top: -20px;
    transition: 0.2s ease all;
    font-size: 14px;
}

/* BOTTOM BARS ================================= */
.select-bar {
    position: relative;
    display: block;
    width: 350px;
}

.select-bar:before,
.select-bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #2F80ED;
    transition: 0.2s ease all;
}

.select-bar:before {
    left: 50%;
}

.select-bar:after {
    right: 50%;
}

/* active state */
.select-text:focus~.select-bar:before,
.select-text:focus~.select-bar:after {
    width: 50%;
}

/* HIGHLIGHTER ================================== */
.select-highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
}

.attendant {
    font-family: "Font Awesome 5 Free";
    font-size: 15px;

}
</style>
