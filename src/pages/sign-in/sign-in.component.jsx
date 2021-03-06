import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
       event.preventDefault();
       const {email, password} = this.state;
       try{
       await auth.signInWithEmailAndPassword(email, password);
       this.setState({ email: '', password: ''});
       }catch(e){
           console.log("error ", e);
       }
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({...this.state, [name]: value});
    };

    render(){
        const { email, password } = this.state;
        return(
            <div className="sign-in">
               <h2>I already have an account</h2>
               <span>Sign-in with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                  <FormInput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={email}
                    label='email'
                    required />
                  <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={this.handleChange}
                    label='password'
                    required />
                   <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                   </div>
               </form>
            </div>
        )
    }
    
}

export default SignIn;