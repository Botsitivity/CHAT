<template>
  <div class="cover">
    <div class="inner">
        <div class="c5">
          <p class="c6"><span class="c3 c4">&nbsp;</span></p>
          <h2 class="c2" id="h.u9lverj5ib1">
            <span class="c3 c4 c7">BOTSITIVITY Bot</span
            ><span class="c7 c3 c4 c11">&nbsp;Usage Liability Waiver</span>
          </h2>
          <p class="c1"><span class="c0"></span></p>
          <p class="c8">
            <span class="c3">I hereby release and forever discharge </span
            ><span class="c7 c9">BOTSITIVITY</span
            ><span class="c3"
              >, from all liability and hereby assume all of the risks of my
              participation and usage of services provided by </span
            ><span class="c7 c9">BOTSITIVITY</span><span class="c0">. &nbsp;</span>
          </p>
          <p class="c1"><span class="c0"></span></p>
          <p class="c8">
            <span class="c3">It is understood and agreed that the use of the </span
            ><span class="c7 c9">BOTSITIVITY</span
            ><span class="c0"
              >&nbsp;bot cannot guarantee the cure of depression, anxiety, or any
              other mental health disorders. This service is completely free of
              charge and cannot guarantee the complete settlement and satisfaction
              of users.
            </span>
          </p>
          <p class="c1"><span class="c0"></span></p>
          <p class="c8">
            <span class="c3"
              >This waiver contains the entire agreement between the parties and all
              terms of this agreement are contractual and not merely a recital. </span
            ><span class="c0"
              >This waiver may not be altered, amended, or modified by either party.
            </span>
          </p>
          <p class="c1"><span class="c0"></span></p>
          <p class="c8">
            <span class="c3"
              >I acknowledge that this waiver will be used by the organizers of the
              activity in which I may participate and that by signing this waiver, I
              am forfeiting all right to bring a suit against </span
            ><span class="c7 c9">BOTSITIVITY</span
            ><span class="c3">&nbsp;for any reason. </span>
          </p>
          <hr />
          <p class="c1"><span class="c0"></span></p>
          <p class="c1"><span class="c0"></span></p>
          <p class="c8">
            <span class="c3"
              >I certify that I have read this document and fully understand its
              content. The terms have been explained to me and I am freely,
              knowingly, and voluntarily signing this document digitally.</span
            >
          </p>
          <div>
            <p class="c13">
              <span class="c12">BOTSITIVITY Bot Usage Liability Waiver</span>
            </p>
            <p class="c10"><span class="c12"></span></p>
          </div>
        </div>
    </div>
    <div class="mt-2">
        <label class="container">I have read and agree to sign the BOTSITIVITY Bot Usage Liability Waiver
            <input type="checkbox" ref="agree">
            <span class="checkmark"></span>
        </label>
    </div>
    <button class="proceed" type="button" @click="submit">Proceed</button>
    <h3 class="error">{{ error }}</h3>
  </div>
</template>

<style scoped>
@import url("https://themes.googleusercontent.com/fonts/css?kit=hh9VFM0qOK4TrLidDd__Ui5bnSrpY5TE94xSqAiQW93OfsfM6rvuuu7h1pY3r_-A");

.proceed{
    background: #ffb63f;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 15px;
    font-size: larger;
}

.error{
    color: rgb(212, 27, 27)
}
.cover{
    position:fixed;
    padding:0;
    margin:0;

    top:0;
    left:0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background:white;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.inner{
    border: solid 2px rgb(133, 133, 133);
    display: flex;
    justify-content: center;
    border-radius: 5px;
    width: 60vw;
    height: 30rem;
    overflow: auto;
    transition: all ease 0.2s
}

.inner:hover{
    border: solid 2px black
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 10px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
ol.lst-kix_8y3o20q3daw5-4.start {
  counter-reset: lst-ctn-kix_8y3o20q3daw5-4 0;
}

.lst-kix_8y3o20q3daw5-4 > li {
  counter-increment: lst-ctn-kix_8y3o20q3daw5-4;
}

.lst-kix_8y3o20q3daw5-7 > li:before {
  content: "" counter(lst-ctn-kix_8y3o20q3daw5-7, lower-latin) ". ";
}

.lst-kix_8y3o20q3daw5-7 > li {
  counter-increment: lst-ctn-kix_8y3o20q3daw5-7;
}

.lst-kix_8y3o20q3daw5-6 > li:before {
  content: "" counter(lst-ctn-kix_8y3o20q3daw5-6, decimal) ". ";
}

.lst-kix_8y3o20q3daw5-5 > li {
  counter-increment: lst-ctn-kix_8y3o20q3daw5-5;
}

ol.lst-kix_8y3o20q3daw5-1.start {
  counter-reset: lst-ctn-kix_8y3o20q3daw5-1 0;
}

.lst-kix_8y3o20q3daw5-2 > li {
  counter-increment: lst-ctn-kix_8y3o20q3daw5-2;
}

.lst-kix_8y3o20q3daw5-8 > li {
  counter-increment: lst-ctn-kix_8y3o20q3daw5-8;
}

.lst-kix_8y3o20q3daw5-8 > li:before {
  content: "" counter(lst-ctn-kix_8y3o20q3daw5-8, lower-roman) ". ";
}

.lst-kix_8y3o20q3daw5-1 > li {
  counter-increment: lst-ctn-kix_8y3o20q3daw5-1;
}

ol.lst-kix_8y3o20q3daw5-6.start {
  counter-reset: lst-ctn-kix_8y3o20q3daw5-6 0;
}

.lst-kix_8y3o20q3daw5-0 > li {
  counter-increment: lst-ctn-kix_8y3o20q3daw5-0;
}

ol.lst-kix_8y3o20q3daw5-5.start {
  counter-reset: lst-ctn-kix_8y3o20q3daw5-5 0;
}

.lst-kix_8y3o20q3daw5-0 > li:before {
  content: "" counter(lst-ctn-kix_8y3o20q3daw5-0, decimal) ". ";
}

ol.lst-kix_8y3o20q3daw5-3.start {
  counter-reset: lst-ctn-kix_8y3o20q3daw5-3 0;
}

ol.lst-kix_8y3o20q3daw5-8.start {
  counter-reset: lst-ctn-kix_8y3o20q3daw5-8 0;
}

ol.lst-kix_8y3o20q3daw5-7.start {
  counter-reset: lst-ctn-kix_8y3o20q3daw5-7 0;
}

ol.lst-kix_8y3o20q3daw5-0 {
  list-style-type: none;
}

ol.lst-kix_8y3o20q3daw5-1 {
  list-style-type: none;
}

ol.lst-kix_8y3o20q3daw5-2 {
  list-style-type: none;
}

.lst-kix_8y3o20q3daw5-3 > li:before {
  content: "" counter(lst-ctn-kix_8y3o20q3daw5-3, decimal) ". ";
}

.lst-kix_8y3o20q3daw5-5 > li:before {
  content: "" counter(lst-ctn-kix_8y3o20q3daw5-5, lower-roman) ". ";
}

ol.lst-kix_8y3o20q3daw5-3 {
  list-style-type: none;
}

ol.lst-kix_8y3o20q3daw5-0.start {
  counter-reset: lst-ctn-kix_8y3o20q3daw5-0 0;
}

ol.lst-kix_8y3o20q3daw5-4 {
  list-style-type: none;
}

ol.lst-kix_8y3o20q3daw5-5 {
  list-style-type: none;
}

.lst-kix_8y3o20q3daw5-4 > li:before {
  content: "" counter(lst-ctn-kix_8y3o20q3daw5-4, lower-latin) ". ";
}

ol.lst-kix_8y3o20q3daw5-6 {
  list-style-type: none;
}

ol.lst-kix_8y3o20q3daw5-7 {
  list-style-type: none;
}

ol.lst-kix_8y3o20q3daw5-8 {
  list-style-type: none;
}

ol.lst-kix_8y3o20q3daw5-2.start {
  counter-reset: lst-ctn-kix_8y3o20q3daw5-2 0;
}

.lst-kix_8y3o20q3daw5-6 > li {
  counter-increment: lst-ctn-kix_8y3o20q3daw5-6;
}

.lst-kix_8y3o20q3daw5-1 > li:before {
  content: "" counter(lst-ctn-kix_8y3o20q3daw5-1, lower-latin) ". ";
}

.lst-kix_8y3o20q3daw5-3 > li {
  counter-increment: lst-ctn-kix_8y3o20q3daw5-3;
}

.lst-kix_8y3o20q3daw5-2 > li:before {
  content: "" counter(lst-ctn-kix_8y3o20q3daw5-2, lower-roman) ". ";
}

ol {
  margin: 0;
  padding: 0;
}

table td,
table th {
  padding: 0;
}

.c0 {
  color: #000000;
  font-weight: 400;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 11pt;
  font-family: "Book Antiqua";
  font-style: normal;
}

.c10 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1.15;
  orphans: 2;
  widows: 2;
  text-align: right;
  height: 11pt;
}

.c12 {
  color: #000000;
  font-weight: 400;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 9pt;
  font-family: "Arial";
  font-style: italic;
}

.c13 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1.15;
  orphans: 2;
  widows: 2;
  text-align: left;
}

.c6 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1;
  orphans: 2;
  widows: 2;
  text-align: justify;
}

.c1 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1;
  text-align: justify;
  height: 11pt;
}

.c2 {
  padding-top: 18pt;
  padding-bottom: 4pt;
  line-height: 1;
  text-align: center;
}

.c8 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1;
  text-align: justify;
}

.c11 {
  color: #000000;
  vertical-align: baseline;
  font-style: normal;
}

.c7 {
  -webkit-text-decoration-skip: none;
  text-decoration: underline;
  text-decoration-skip-ink: none;
}

.c5 {
  background-color: #ffffff;
  max-width: 50vw;
  padding: 20px 0px 20px 0px;
}

.c9 {
  font-family: "Book Antiqua";
  font-weight: 700;
}

.c3 {
  font-weight: 400;
  font-family: "Book Antiqua";
}

.c4 {
  font-size: 13.5pt;
}

.c14 {
  text-decoration: none;
}

.title {
  padding-top: 0pt;
  color: #000000;
  font-size: 26pt;
  padding-bottom: 3pt;
  font-family: "Arial";
  line-height: 1.15;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
}

.subtitle {
  padding-top: 0pt;
  color: #666666;
  font-size: 15pt;
  padding-bottom: 16pt;
  font-family: "Arial";
  line-height: 1.15;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
}

li {
  color: #000000;
  font-size: 11pt;
  font-family: "Arial";
}

p {
  margin: 0;
  color: #000000;
  font-size: 11pt;
  font-family: "Arial";
}

h1 {
  padding-top: 20pt;
  color: #000000;
  font-size: 20pt;
  padding-bottom: 6pt;
  font-family: "Arial";
  line-height: 1.15;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
}

h2 {
  padding-top: 18pt;
  color: #000000;
  font-size: 16pt;
  padding-bottom: 6pt;
  font-family: "Arial";
  line-height: 1.15;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
}

h3 {
  padding-top: 16pt;
  color: #434343;
  font-size: 14pt;
  padding-bottom: 4pt;
  font-family: "Arial";
  line-height: 1.15;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
}

h4 {
  padding-top: 14pt;
  color: #666666;
  font-size: 12pt;
  padding-bottom: 4pt;
  font-family: "Arial";
  line-height: 1.15;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
}

h5 {
  padding-top: 12pt;
  color: #666666;
  font-size: 11pt;
  padding-bottom: 4pt;
  font-family: "Arial";
  line-height: 1.15;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
}

h6 {
  padding-top: 12pt;
  color: #666666;
  font-size: 11pt;
  padding-bottom: 4pt;
  font-family: "Arial";
  line-height: 1.15;
  page-break-after: avoid;
  font-style: italic;
  orphans: 2;
  widows: 2;
  text-align: left;
}
</style>

<script>
export default {
  name: "LiabilityWaiver",
  data(){
    return {
        error: ""
    }
  },
  methods:{
    submit(){
        if (!this.$refs.agree.checked) this.error = "Please agree to the terms"
        else{
            window.location.replace("http://bopy.botsitivity.org")
            // this.$destroy();
            // this.$el.parentNode.removeChild(this.$el);
        }
    }
  }
};
</script>
