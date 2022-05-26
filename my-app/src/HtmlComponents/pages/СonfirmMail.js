import '../Css/СonfirmMail.css';
import React from 'react';
import { UseAuth } from '../Hook/UseAuth';
function ConfirmMail() {

  const user = UseAuth();
  return (
    <div>
      {user.language == "Russian" ? (<><h className='Confirm'>Вам на почту отправлено письмо.
        Подтвердите свою почту.
      </h></>) : (<> <h className='Confirm'>Check your email to confirm account.</h></>)
      }
    </div>
  );
}

export { ConfirmMail };