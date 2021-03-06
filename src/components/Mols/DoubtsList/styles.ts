import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  height: 100%;
  margin-top: 1.5rem;

  @media screen and (max-width: 914px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  max-height: 400px;
  min-height: 400px;
  align-items: center;
  border-radius: 0.25rem;
  margin: 1.8rem;
  border: solid 1px var(--purple-110);

  @media screen and (max-width: 914px) {
    margin: 0 0 1rem 0;
    width: 100%;
    min-height: 130px;
    max-height: 300px;
  }


  span{
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    line-height: 1.125rem;
    margin: 1rem 0;
  }
  .open-doubt {
    padding: 1rem;
  }
  .content{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    padding: 0 1rem;
  }

  .sub-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    flex: 1;
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
    

    .sub-content{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      margin-top: 1rem;
      max-height: 100%;
      overflow-y: auto;
    }

    &.flex-1{
      max-height: 100%;
    }
  }

  .auto{
    height: auto !important;
    flex: unset;
  }
`;

export const WaitingTeacher = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  justify-content:center;
  .image-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    padding: 0.5rem;
  }
`;
