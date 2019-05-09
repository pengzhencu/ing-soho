<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-center">{{ $t('ingContact.contact') }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <form action="" class="contact-form">
            <div class="red-point">
              <label for="">{{ $t('ingContact.contactForm.companyName') }}</label>
              <br>
              <input type="text" class="input-style" v-model="company">
            </div>
            <div class="red-point">
              <label for="">{{ $t('ingContact.contactForm.theme') }}</label>
              <br>
              <input type="text" class="input-style" v-model="theme">
            </div>
            <div>
              <label for="">{{ $t('ingContact.contactForm.serverContent') }}</label>
              <br>
              <div>
                <label>
                  <input type="radio" name="t" id="1" value="checkedValue1">{{ $t('ingContact.contactForm.serverContentRadios.brandIdentify') }}
                  <input type="radio" name="t" id="2" value="checkedValue2">{{ $t('ingContact.contactForm.serverContentRadios.graphicDesign') }}
                  <input type="radio" name="t" id="3" value="checkedValue3">{{ $t('ingContact.contactForm.serverContentRadios.productDesign') }}
                  <input type="radio" name="t" id="4" value="checkedValue4">{{ $t('ingContact.contactForm.serverContentRadios.interiorDesign') }}
                  <input type="radio" name="t" id="5" value="checkedValue5">{{ $t('ingContact.contactForm.serverContentRadios.newMediaDesign') }}
                </label>
              </div>
              <div class="row">
                <div class="col-10">
                  <input type="text" placeholder="其他服务内容">
                  <input type="radio" name="t" id="6" value="checkedValue6">{{ $t('ingContact.contactForm.serverContentRadios.other') }}
                </div>
              </div>
              <div>
                <label>
                </label>
              </div>
            </div>
            <div>
              <label for="">{{ $t('ingContact.contactForm.expectedCompletionTime') }}</label>
              <br>
              <input type="date" class="input-style">
            </div>
            <div class="">
              <label for="">{{ $t('ingContact.contactForm.budget') }}</label>
              <br>
              <input type="text" class="input-style">
            </div>
            <div class="red-point">
              <label for="">{{ $t('ingContact.contactForm.contactPerson') }}</label>
              <br>
              <input type="text" class="input-style">
            </div>
            <div class="red-point">
              <label for="">{{ $t('ingContact.contactForm.contactEmail') }}</label>
              <br>
              <input type="email" class="input-style">
            </div>
            <div>
              <button type="submit" class="contact-btn" v-on:click="get()">{{ $t('ingContact.contactForm.commit') }}</button>
            </div>

          </form>
        </div>
        <div class="col-lg-6">
          <div class="contact-map">
            <label for="">{{ $t('ingContact.contactForm.companyAddress') }}</label>
            <div>
              <span class="contact-map-city">{{ $t('common.ingFooter.companyInfo.jiangXi.province') }}</span> <br>
              <p> {{ $t('common.ingFooter.companyInfo.jiangXi.address') }} <br>
               <br>
                <br></p>
              <span> {{ $t('common.ingFooter.companyInfo.jiangXi.tel.i') }}  </span>
              <span>  {{ $t('common.ingFooter.companyInfo.jiangXi.email') }} </span>
              <button>{{ $t('ingContact.contactForm.seeMap') }}</button>
            </div>
            <div>
              <span class="contact-map-city">{{ $t('common.ingFooter.companyInfo.shangHai.province') }}</span> <br>
              <p> {{ $t('common.ingFooter.companyInfo.shangHai.address') }} <br>
                <br>
                <br></p>
              <span> {{ $t('common.ingFooter.companyInfo.jiangXi.tel.i') }}  </span>
              <span>  {{ $t('common.ingFooter.companyInfo.shangHai.email') }} </span>
              <button>{{ $t('ingContact.contactForm.seeMap') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngContactForm',
  data () {
    return {
      company: '',
      theme: ''
    }
  },
  methods: {
    get () {
      this.axios.get('http://localhost/api/getinfo', {
        params: {
          company: this.company,
          theme: this.theme
        }
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  .main {
    background-color: #202020;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    padding: 4rem 0rem;
    color: white;
    font-size: 1.5rem;
  }

  .text-center {
    text-align: center;
  }

  .input-style {
    width: 91%;
    height: 3.5rem;
  }

  /*输入框后面的红点,用于标记必填项*/
  .red-point::after {
    content: '\B7';
    color: red;
    padding: 0px 0.8rem;
    font-size: 4rem;
    line-height: 84%;
    position: absolute;
  }

  .contact-form div {
    margin-bottom: 1.5rem;
  }

  .contact-form label {
    font-size: 1.5rem;
  }

  .contact-form input {
    margin-top: 0.5rem;
  }

  .contact-form button {
    height: 4rem;
    background-color: orange;
    border: none;
    color: white;
    font-size: 2rem;
    width: 35%;
    margin-top: 1rem;
    border-radius: 0.2rem;
  }

  .contact-map div {
    background-color: orange;
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }

  .contact-map span {
    display: block;
    margin-bottom: 0.4rem;
    padding-top: 1.6rem;
  }

  .contact-map p {
    margin-top: 0rem;
    line-height: 2rem;
  }

  .contact-map button {
    padding: 0.2rem 1rem;
    margin-bottom: 3rem;
    margin-top: 1rem;
    background: white;
    color: orange;
    border: none;
  }

  .contact-map-city {
    font-size: 1.8rem;
  }

  @media (min-width: 992px) {
  }
</style>
