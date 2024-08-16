import React, { useState } from 'react';
import { HomePageContactForm } from '.';
import { SuccessIllustration } from '../../assets';
import { checkEmptyString } from '../../helpers';
import { ContactFormDataType, ContactFromErrorsType } from '../../utils';

const HomePageHero = () => {
  const [loading, setLoading] = useState(false);
  const [APIResponse, setAPIResponse] = useState<{status: String} | null>(null)
  const [formData, setFormData] = useState<ContactFormDataType>({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    url: '',
    provider: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFromErrorsType>({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    url: '',
    provider: '',
    message: '',
  });

  const handleErrorChange = (val: any) => {
    setErrors(val)
  }
  const handleFormDataChange = (val: any) => {
    setFormData(val)
  }


  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors: any = { ...errors };
    Object.keys(formData).forEach((key) => {
      // @ts-ignore
      if (checkEmptyString(formData[key])) {
        newErrors[key] = 'This field cannot be empty';
        formIsValid = false;
      }
    });
    setErrors(newErrors);

    if (!formIsValid) {
      return;
    }

    try {
      setAPIResponse(null)
      setLoading(true);  
      setTimeout(() => {
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          company: '',
          url: '',
          provider: '',
          message: '',
        });
        setAPIResponse({status: 'succes'})
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1500);
    } catch (error) {
      alert('Something went wrong');
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <div className='contact-hero'>
      <div className="container">
        {APIResponse ? (
          <div className='contact-hero__success'>
            <div className="">
              <h1>Thank you</h1>
              <p className='desktop-p2'>A member of our team will be in touch with you shortly.</p>
            </div>
            <SuccessIllustration />
          </div>
        ) : (
          <HomePageContactForm 
            formData={formData}
            handleSubmit={handleFormSubmit}
            loading={loading}
            errors={errors}
            setErrors={handleErrorChange}
            setFormData={handleFormDataChange}
          />
        )}
      </div>
    </div>
  );
};

export default HomePageHero;
