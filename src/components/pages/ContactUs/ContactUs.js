import Footer from '../Footer/Footer'
import './ContactUs.css'
import Image from './ContactUs.jpg'

const ContactUs = () => {
  return (
    <>
        <h1 className='head'>Drop us a line</h1>
        <div className='mainContent'>
            <form className='form'>
                <div className='flexContent'>
                    <InputText label="First Name" />
                    <InputText label="Last Name" />
                </div>
                <InputText label="Email" />
                <label>
                    Message <RequiredField />
                    <textarea required/>
                </label>
                <button type='submit' className='submit'>Submit</button>
            </form>
            <img src={Image} height={280} width={280} />
        </div>
        <Footer />
    </>
  )
}

const InputText = ({label}) => {
    return <label className='inputText'>
                {label} <RequiredField />
                <input type="text" required />
            </label>
}

const RequiredField = () => {
    return <span style={{color: "red"}}>*</span>
}

export default ContactUs