import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { User } from '../../types';
import style from './Form.module.scss';

type FormInputs = {
  name: string;
  surname: string;
  birthday: string;
  country: string;
  gender: boolean;
  agree: boolean;
  avatar: FileList;
};

interface FormProps {
  addUser: (data: User) => void;
}

const Form = (props: FormProps) => {
  const { addUser } = props;
  const [avatar, setAvatar] = useState('');
  const [modal, setModal] = useState(false);

  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      agree: false,
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const { name, surname, country } = data;
    const birthday = handleBirthday(data.birthday);
    const gender = handleGender(data.gender);
    const avatar = data.avatar[0];
    const newUser = { name, surname, birthday, country, gender, avatar };
    addUser(newUser);
    showModal();
    reset();
  };

  const avatarHandle = watch('avatar');

  useEffect(() => {
    if (avatarHandle) {
      handleAvatar(avatarHandle[0]?.name);
    }
  }, [avatarHandle]);

  const handleGender = (param: boolean): string => {
    return param ? 'Female' : 'Male';
  };

  const handleBirthday = (data: string): string => {
    return data.split('-').reverse().join('.');
  };

  const handleAvatar = (name: string) => {
    setAvatar(name || '');
  };

  const showModal = () => {
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 2000);
  };

  return (
    <>
      {modal && (
        <div data-testid="modal" className={style.modal}>
          <h2 className={style.modal__title}>New user added</h2>
        </div>
      )}
      <form data-testid="form" onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <h2 className={style.form__title}>Add new user</h2>
        <div className={style.form__group}>
          <label htmlFor="name">
            <p className={style.form__text}>Name:</p>
            <input
              data-testid="name"
              type="text"
              {...register('name', { required: true })}
              className={style.form__input}
            />
          </label>
          {errors.name && (
            <p className={`${style.form__text} ${style.form__text_error}`}>
              This field must not be empty
            </p>
          )}
        </div>

        <div className={style.form__group}>
          <label htmlFor="surname">
            <p className={style.form__text}>Surname:</p>
            <input
              data-testid="surname"
              {...register('surname', { required: true })}
              className={style.form__input}
            />
          </label>
          {errors.surname && (
            <p className={`${style.form__text} ${style.form__text_error}`}>
              This field must not be empty
            </p>
          )}
        </div>

        <div className={style.form__group}>
          <label htmlFor="birthday">
            <p className={style.form__text}>Birthday:</p>
            <input
              data-testid="date"
              type="date"
              {...register('birthday', { required: true })}
              className={style.form__input}
            />
          </label>
          {errors.birthday && (
            <p className={`${style.form__text} ${style.form__text_error}`}>Choose a date</p>
          )}
        </div>

        <div className={style.form__group}>
          <label htmlFor="country">
            <p className={style.form__text}>Country:</p>
            <select data-testid="country" {...register('country')} className={style.form__input}>
              <option value="Russia">Russia</option>
              <option value="Belarus">Belarus</option>
              <option value="Ukraine">Ukraine</option>
            </select>
          </label>
        </div>

        <div className={`${style.form__group} ${style.form__group_switch}`}>
          <p className={style.form__text}>Male</p>
          <label className={style.switch}>
            <input
              data-testid="gender"
              type="checkbox"
              {...register('gender')}
              className={style.switch__input}
            />
            <span className={style.switch__slider}></span>
          </label>
          <p className={style.form__text}>Female</p>
        </div>

        <div className={`${style.form__group} ${style.file}`}>
          <p className={`${style.form__text} ${style.file__text}`}>Choose a profile picture:</p>

          <label htmlFor="avatar" className={style.form__btn}>
            <input
              data-testid="avatar"
              id="avatar"
              type="file"
              className={style.file__input}
              accept=".png, .jpeg, .jpg, .svg"
              {...register('avatar', { required: true })}
            />

            {avatar ? 'File added' : 'Add file'}
          </label>
          {avatar && <p className={`${style.form__text} ${style.file__avatar_name}`}>{avatar}</p>}

          {errors.avatar && (
            <p className={`${style.form__text} ${style.form__text_error} ${style.file__error}`}>
              Add avatar
            </p>
          )}
        </div>

        <div className={style.form__group}>
          <label className={style.check}>
            <p className={style.form__text}>I gree</p>
            <input
              data-testid="agree"
              type="checkbox"
              {...register('agree', { required: true })}
              className={style.check__input}
            />
            <span className={style.check__box}></span>
          </label>
        </div>

        <div className={style.form__group}>
          <button
            data-testid="submit-btn"
            className={style.form__btn}
            type="submit"
            disabled={!watch('agree')}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
