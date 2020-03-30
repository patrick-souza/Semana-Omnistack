import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from 'Redux-tools/Modules';
import { StoreIncident } from 'Redux-tools/Modules/Incidents';
import Loading from 'Components/Loading';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'Components/Input';

function FormNewIncident() {
  const { storeIsLoading } = useSelector(
    ({ incidents }: IApplicationState) => incidents,
  );
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      value: '',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      value: Yup.number().required(),
    }),
    onSubmit: (values) => {
      dispatch(StoreIncident({ ...values, value: Number(values.value) }));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input formik={formik} name="title" placeholder="Titulo do caso" />
      <Input
        formik={formik}
        textarea
        name="description"
        placeholder="Descrição"
      />
      <Input formik={formik} name="value" placeholder="Valor em reais" />

      <button className="button" type="submit">
        {storeIsLoading ? <Loading /> : 'Cadastrar'}
      </button>
    </form>
  );
}

export default memo(FormNewIncident);
