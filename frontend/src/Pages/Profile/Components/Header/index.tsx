import React, { useCallback, memo } from 'react';
import logoImg from 'Assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from 'Redux-tools/Modules';
import { Signout } from 'Redux-tools/Modules/Auth';

function Header() {
  const { ongName } = useSelector(({ auth }: IApplicationState) => auth);
  const dispatch = useDispatch();

  const handleSignout = useCallback(() => {
    dispatch(Signout());
  }, [dispatch]);

  return (
    <header>
      <img src={logoImg} alt="Be The Hero" />
      <span>
        Bem vinda,
        {ongName}
      </span>

      <Link className="button" to="/incidents/new">
        Cadastrar novo caso
      </Link>
      <button type="button" onClick={handleSignout}>
        <FiPower size={18} color="#e02041" />
      </button>
    </header>
  );
}

export default memo(Header);
