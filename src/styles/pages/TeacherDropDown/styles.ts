import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
 
  
  svg{
    transition: filter .2s;

    &:hover{
      cursor: pointer;
      filter: opacity(0.6);
    }
  }

  .options{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 2rem;
    right: -11.8rem;
    padding: 0.625rem;
    filter: opacity(0);
    z-index: -1;
    
    min-width: 12.25rem;

    border-radius: 0.25rem;

    background: rgba(255,255,255,0.9);
    color: var(--black);
    transition: all ease .5s;
    list-style: none;

    @media (min-width: 1024px) {
      right: 1.8rem;
    }

    .student-doubt{
      height:100%;
      width:100%;
    }

    button{
      border: none;
      background: transparent;
      margin: 0;
      height: 100%;
      width: 100%;
      &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
        
      }
    }

    li{
      font-size: 1rem;
      color: var(--gray-900);
      text-align: left;
      height: 100%;
      width: 100%;
    }

    .danger{
      color: var(--danger);

      transition: filter .2s;
      &:hover{
        filter: opacity(0.6);
        cursor: pointer;
      }
    }

    &.menu-visible{
      filter: opacity(1);
      z-index: 3;
      
      height: 300px;
      transition: all ease .5s;


      @media(max-width: 768px) {
        margin-top: 2rem;
        width: 88%;
      }
      @media(min-width: 1024px) {
        width: 500px;
        margin-top: 2rem;
      }
    }

    &::before {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      border-left: 10px solid transparent;
      border-right: 10px solid rgba(255,255,255,0.9);
      border-top: 10px solid rgba(255,255,255,0.9);
      border-bottom: 10px solid transparent;
      left: -20px;
      top: 6px;
      display: none;

      @media(max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 1200px){
      right: 1.65rem;

      &::before{
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 10px solid rgba(255,255,255,0.9);
        border-right: 10px solid transparent;
        border-top: 10px solid rgba(255,255,255,0.9);
        border-bottom: 10px solid transparent;
        left: 10.65rem;
        top: 6px;
        
      }
    }
  }
`;

export const StyledButton = styled.div`
  color: pink;

`;


