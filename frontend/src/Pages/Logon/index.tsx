import React from 'react';
import heroesImg from 'Assets/heroes.png';
import logoImg from 'Assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreSession } from 'Redux-tools/Modules/Auth';
import { IApplicationState } from 'Redux-tools/Modules';
import Loading from 'Components/Loading';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'Components/Input';

export default function Logon() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(({ auth }: IApplicationState) => auth);

  const formik = useFormik({
    initialValues: {
      ongId: '',
    },
    validationSchema: Yup.object().shape({
      ongId: Yup.string().required(),
    }),
    onSubmit: ({ ongId }) => {
      dispatch(StoreSession(ongId));
    },
  });

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={formik.handleSubmit}>
          <h1>Faça seu Login</h1>
          <Input
            formik={formik}
            placeholder="Sua Id"
            disabled={isLoading}
            name="ongId"
          />
          <button className="button" type="submit">
            {isLoading ? <Loading /> : 'Entrar'}
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
