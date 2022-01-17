/* eslint-disable @typescript-eslint/no-unused-vars */

import Burguer from './Burguer';
import { 
  ImgContainer1,
  HeaderCont
} 
from './styles';
import { useRouter } from 'next/router';
import { Separator } from 'components/Atoms/Separator';
import { useAuth } from 'hooks/auth';


interface HeaderProps {

  session?: boolean;


}

export const Header = ({
  session = false,

}: HeaderProps): JSX.Element => {

const { user } = useAuth();
const { push, pathname } = useRouter();




if ((!user.name && !session) || pathname === '/') return <></>;


  return (
    
    <HeaderCont>
       <ImgContainer1
            onClick={() => push('/')}
            src="/assets/images/nextLevel.png"
            alt="nllogo"
          />
        
        <Burguer/>
        <Separator type="horizontal" className="saparator-header"/>
    </HeaderCont>

  );
};
