import React from 'react'
import { checkEmptyString } from '../../helpers'
import { ContactFormDataType, ContactFromErrorsType, contactSelectOptions } from '../../utils'
import { Button } from '../Button'
import { Select } from '../Select'
import { TextArea } from '../TextArea'
import { TextField } from '../Textfield'

type Props = {
    formData: ContactFormDataType,
    setFormData: (e?: any) => void
    errors: ContactFromErrorsType
    handleSubmit: (e?: any) => void
    setErrors: (e?: any) =>  void
    loading: boolean
}

const ContactForm = ({
    formData,
    setFormData,
    errors,
    setErrors,
    handleSubmit,
    loading,

}: Props) => {
    
  const handleFormData = ({ target }: any) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });

    if (checkEmptyString(value)) {
      setErrors({ ...errors, [name]: 'This field cannot be empty' });
    } else {
      setErrors({ ...errors, [name]: '' }); 
    }
  };
  const handleChange = (value: string) => {
    setFormData({ ...formData, provider: value });
    setErrors({ ...errors, provider: '' });
  };
  return (
    <>
        <div className="contact-hero__info">
          <h1>Contact sales</h1>
          <p className="desktop-p2">Send us a message and we’ll promptly get back to you.</p>
        </div>
        <form className="contact-hero__form" onSubmit={handleSubmit}>
          <div className='form-row'>
            <TextField
              label='First name'
              placeholder='Suileman'
              name='first_name'
              value={formData.first_name}
              onChange={handleFormData}
              hasError={!!errors.first_name}
              validationText={errors.first_name}
            />
            <TextField
              label='Last name'
              placeholder='Doe'
              name='last_name'
              value={formData.last_name}
              onChange={handleFormData}
              hasError={!!errors.last_name}
              validationText={errors.last_name}
            />
          </div>
          <TextField
            label='Email'
            placeholder='example@email.com'
            name='email'
            value={formData.email}
            onChange={handleFormData}
            hasError={!!errors.email}
            validationText={errors.email}
          />
          <TextField
            label='Company name'
            placeholder='Brinte'
            name='company'
            value={formData.company}
            onChange={handleFormData}
            hasError={!!errors.company}
            validationText={errors.company}
          />
          <TextField
            label='Website URL'
            placeholder='www.example.com'
            name='url'
            value={formData.url}
            onChange={handleFormData}
            hasError={!!errors.url}
            validationText={errors.url}
          />
          <Select
            label="How did you find us?"
            options={contactSelectOptions}
            value={formData.provider}
            onChange={handleChange}
            name="cloudProvider"
            hasError={!!errors.provider}
            validationText={errors.provider}
          />
          <TextArea
            placeholder='Message'
            maxWords={400}
            name='message'
            value={formData.message}
            onChange={handleFormData}
            hasError={!!errors.message}
            validationText={errors.message}
          />
          
          <Button
            variant='primary'
            loading={loading}
            type="submit"
          >
            {loading ? 'Sending message...' : 'Contact sales'}
          </Button>
        </form>
    </>
  )
}

export default ContactForm