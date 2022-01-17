import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ChatContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
 
  border-radius: 0.625rem;
  background: var(--dark-125-purple);
  .image-preview-wrapper {
    position: absolute;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    width: 100%;
    height: 100%;
    border-top: 0.5rem;
    background: var(--purple);
    border-radius: 6px;
    overflow: hidden;
    .img {
      position: relative;
      display: flex;
      width: 50%;
      height: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      svg {
        position: absolute;
        top: -2.5rem;
        right: -2.5rem;
        color: var(--white);
        transition: filter 0.2s;
        &:hover {
          cursor: pointer;
          filter: brightness(0.6);
        }
      }
    }
    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const MessagesBox = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.625rem;


  @media (max-width: 768px) {
    padding: 0 0.625rem 5rem 0.625rem;
  }
  .time-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .time-info {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 300px;

    .time-left-row {
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size: 0.86rem;
      text-align: right;
      margin-right: 1rem;

      svg {
        margin-left: 0.5rem;
      }
    }

    @keyframes mymove {
      0% {
        color: var(--white);
      }
      50% {
        color: var(--danger);
      }
    }

    .danger {
      animation: mymove 0.8s infinite;
    }
  }
  .time--sentinela__wrapper {
    display: flex;
    justify-content: space-between;
  }
  #sentinela {
    opacity: 0;
    width: 100%;
    height: 10px;
    background: red;
  }
  #sentinela-bottom {
    /* background: red !important;
    visibility: visible !important;
    opacity: 1 !important; */
  }
  &.loading {
    justify-content: center;
    align-items: center;
  }
  .isTyping {
    margin-top: auto;
    transition: opacity 0.2s;
    &.not-typing {
      opacity: 0;
    }
    &.typing {
      opacity: 1;
    }
  }
  .me {
    margin-left: auto;
  }
`;
