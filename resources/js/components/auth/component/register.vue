<template>

    <b-row align-h="center">


        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="formLogin" style="width:40%">
            <b-form-group>
                <h3 style="font-weight: 300;">Sign Up</h3>

            </b-form-group>

            <br>

            <b-form-group id="exampleInputGroup1"
                          label="Your name"
                          label-for="name"
                         >
                <b-form-input id="name"
                              type="text"
                              v-model="form.name"
                              required
                              placeholder="Enter name">
                </b-form-input>


            </b-form-group>

            <b-form-group id="exampleInputGroup1"
                          label="Your email"
                          label-for="password"
                          description="We'll never share your email with anyone else.">
                <b-form-input id="password"
                              type="email"
                              v-model="form.email"
                              required
                              placeholder="Enter email">
                </b-form-input>


            </b-form-group>

            <br>

            <b-form-group id="exampleInputGroup1"
                          label="Your name"
                          label-for="password"
            >
                <b-form-input id="password"
                              type="email"
                              v-model="form.password"
                              required
                              placeholder="Enter password">
                </b-form-input>


            </b-form-group>

            <b-form-group id="exampleInputGroup1"
                          label="Confirm password"
                          label-for="confirm_password"
            >
                <b-form-input id="confirm_password"
                              type="email"
                              v-model="form.password"
                              required
                              placeholder="Enter password">
                </b-form-input>


            </b-form-group>
            <br>

            <b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>

            </b-form-group>



            <br><br>
            <b-row style="" class="goToRegister">

                <span>D'ont have account?  <router-link :to="{name:'login'}" >Sign Up </router-link>   </span>


            </b-row>

        </b-form>
    </b-row>
</template>

<script>

    export default {
        data () {
            return {
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: []
                },
                foods: [
                    { text: 'Select One', value: null },
                    'Carrots', 'Beans', 'Tomatoes', 'Corn'
                ],
                show: true
            }
        },
        methods: {
            onSubmit (evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            onReset (evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.form.email = '';
                this.form.name = '';
                this.form.food = null;
                this.form.checked = [];
                /* Trick to reset/clear native browser form validation state */
                this.show = false;
                this.$nextTick(() => { this.show = true });
            }
        }
    }
</script>
