import React from 'react';
import { useForm } from 'react-hook-form';
import FormCards from '../../components/form/formCards';
import styles from './form.module.css';
import { Items } from '../../components/type/types';
import {Footer} from "../../components/Footer";

const itemsCard: Items[] = [];
let id = 0;

type Inputs = {
  fullName: string;
  DOB: string;
  country: string;
  ageVerification: boolean;
  gender: string;
  file: FileList;
};

const isUppercase = (a: string) => {
  return /^\p{Lu}/u.test(a);
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    if (!isUppercase(data.fullName)) {
      return;
    }

    itemsCard.push({
      inputName: data.fullName,
      inputDate: data.DOB,
      inputCountry: data.country,
      inputYear: data.ageVerification,
      inputGender: data.gender === 'female',
      inputImg: URL.createObjectURL(data.file[0]),
      id: id++,
    });

    window.alert('Thanks we have added your details !');
    reset();
  };
  return (
      <div className={styles.wrap}>
        <div className={styles.formPage}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="fullName">Full Name</label>
            <input
                {...register('fullName', {
                  required: true,
                  validate: (value) => isUppercase(value),
                })}
                type="text"
                placeholder="Capitalized name please"
                name="fullName"
                id="fullName"
            />
            {errors.fullName && (
                <label style={{ color: 'yellow' }}>you didn&apos;t enter a name</label>
            )}

            <label htmlFor="DOB">Date of Birth</label>
            <input {...register('DOB', { required: true })} type="date" name="DOB" id="DOB" />
            {errors.DOB && <label style={{ color: 'yellow' }}>*you have not entered a date</label>}
            <label htmlFor="country">Country</label>

            <select {...register('country', { required: true })} id="country" name="country">
              <option value="">Choose a country</option>
              <option value="US">United States of America</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select>

            {errors.country && (
                <label style={{ color: 'yellow' }}>you have not entered a country</label>
            )}
            <br />
            <label htmlFor="ageVerification">Are you 18 years of age or older? </label>
            <div className={styles.years}>
              <input
                  {...register('ageVerification', { required: false })}
                  type="checkbox"
                  name="ageVerification"
              />
              Yes
              <br />
            </div>

            <br />
            <label htmlFor="gender"> Gender: </label>
            <div className={styles.gender}>
              <input {...register('gender', { required: true })} type="radio" name="gender" value="female" />
              Female
              <br />
              <input {...register('gender', { required: true })} type="radio" name="gender" value="male" />
              Male
            </div>
            {errors.gender && <label style={{ color: 'yellow' }}>you have not select </label>}
            <label htmlFor="file">Upload Image: </label>
            <div className="addImg">
              <input {...register('file', { required: true })} type="file" name="file" id="file" />
              {errors.file && (
                  <label style={{ color: 'yellow' }}>you have not uploaded an image</label>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.card}>
          <FormCards items={itemsCard} />
        </div>
        <Footer />
      </div>
  );
};

export default Form;
