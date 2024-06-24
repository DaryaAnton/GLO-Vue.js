<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <NavBarComponent />
          </div>
        </div>
        <h1 class="title-big">Contact us</h1>
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">

            <form action="#" class="mt-5" @submit.prevent="submit">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red;">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input 
                    v-model="v$.name.$model" 
                    type="text" 
                    class="form-control" 
                    id="name-input"
                  />
                  <span
                  v-for="error in v$.name.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}
                </span>
                </div>
                <!-- <pre>
                  {{ v$ }}
                </pre> -->
              </div>
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red;">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input 
                    v-model="v$.email.$model"  
                    type="email" 
                    class="form-control" 
                    id="email-input"
                  />
                  <span
                    v-for="error in v$.email.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <!-- <pre>
                {{ v$.email }}
              </pre> -->
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0">
                    Phone
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input 
                    v-model="v$.phone.$model" 
                    type="tel" 
                    class="form-control" 
                    id="phone-input"
                    />
                    <span
                      v-for="error in v$.phone.$errors"
                      :key="error.$uid"
                    >
                      {{ error.$message }}
                    </span>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-start">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red;">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea 
                    v-model="v$.message.$model"
                    class="form-control" 
                    name="message" 
                    id="message" 
                    rows="5"
                    placeholder="Leave your comments here"
                  ></textarea>
                  <span
                    v-for="error in v$.message.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                  <div style="display:flex">
                    <input 
                      v-model="isCheckbox" 
                      name="contract" 
                      type="checkbox" 
                      checked 
                      style="margin-right:10px"
                    >
                    <label style="margin-bottom: 0;" for="contract">Согласен с договором оферты</label>
                  </div>
                  <span
                    v-if="checkboxError"
                  >
                    {{ checkboxError }}
                  </span>
                </div>
              </div>
              <!-- <pre>
                {{ v$.isCheckbox }}
              </pre> -->
              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-outline-dark send-btn">Send us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength } from '@vuelidate/validators'
import { helpers } from '@vuelidate/validators'
import { minLength } from '../validators/minLength'

export default {
  components: { NavBarComponent },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      message: '',
      isCheckbox: true,
      checkboxError: ''

    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
  validations () {
    return {
      name: { required },
      phone: {  },
      email: { required, email },
      message: { 
        required, 
        maxLength: maxLength(20), 
        minLength: helpers.withMessage('this value min 5', minLength)
      },
      isCheckbox: { required }
    }
  },
  methods: {
    async submit() {
      this.checkboxError = '';
      const isFormCorrect = await this.v$.$validate();
      if(!this.isCheckbox) {
        this.checkboxError = 'Поставьте галочку';
        return
      }
      if (!isFormCorrect) return
    }
  }
}

</script>