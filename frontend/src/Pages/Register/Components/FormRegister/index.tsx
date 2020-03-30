import React, { memo } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { StoreOng } from 'Redux-tools/Modules/Ong';
import { IApplicationState } from 'Redux-tools/Modules';
import Input from 'Components/Input';
import Loading from 'Components/Loading';

function FormRegister() {
  const dispatch = useDispatch();
  const { storeIsLoading } = useSelector(({ ongs }: IApplicationState) => ongs);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      whatsapp: '',
      city: '',
      uf: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required().email(),
      whatsapp: Yup.string().required(),
      city: Yup.string().required(),
      uf: Yup.string().required().max(2),
    }),
    onSubmit: (values) => {
      dispatch(StoreOng(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input formik={formik} name="name" placeholder="Nome da ONG" />
      <Input formik={formik} name="email" type="email" placeholder="Email" />
      <Input formik={formik} name="whatsapp" placeholder="Whatsapp" />
      <div className="input-group">
        <div>
          <Input formik={formik} name="city" placeholder="cidade" />
        </div>
        <div>
          <Input
            formik={formik}
            name="uf"
            placeholder="UF"
            style={{ width: 80 }}
          />
        </div>
      </div>
      <button className="button" type="submit">
        {storeIsLoading ? <Loading /> : 'Cadastrar'}
      </button>
    </form>
  );
}

export default memo(FormRegister);
